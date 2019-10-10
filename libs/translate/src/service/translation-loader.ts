import { Injectable, OnDestroy } from '@angular/core';
import { IComponentTranslations } from '../interface';
import { TranslocoService } from '@ngneat/transloco';
import { distinctUntilChanged, filter, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslationLoaderService implements OnDestroy {
  private registeredScopes: string[] = [];
  private destroyed = new Subject<void>();

  constructor(private translocoService: TranslocoService) {}

  public ngOnDestroy(): void {
    this.destroyed.next();
  }

  public registerTranslations(scope: string, translations: IComponentTranslations): void {
    // prevent same scope double registration
    if (this.registeredScopes.includes(scope)) {
      return;
    }

    this.registeredScopes.push(scope);

    let loadedLang: string[] = [];

    this.translocoService.langChanges$
      .pipe(
        distinctUntilChanged(),
        filter(lang => !!translations[lang] && !loadedLang.includes(lang)),
        switchMap(lang => this.loadTranslation(translations, lang, scope)),
        filter(({ translation }) => !!translation),
        takeUntil(this.destroyed),
      )
      .subscribe(({ translation, lang }) => {
        this.translocoService.setTranslation({ [scope]: translation! }, lang);

        loadedLang.push(lang);
      });
  }

  private loadTranslation(
    translations: IComponentTranslations,
    lang: string,
    scope: string,
  ): Promise<{ translation: Object | null; lang: string }> {
    return translations[lang]()
      .then(translation => ({
        translation: translation && translation['default'] ? translation['default'] : translation,
        lang,
      }))
      .catch(() => {
        console.error(`TranslationLoaderService cant load "${lang}" translation for "${scope}" scope`);

        return { translation: null, lang };
      });
  }
}
