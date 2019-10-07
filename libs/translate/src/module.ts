import { NgModule, ModuleWithProviders, Inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { TRANSLATION_LOADERS_TOKEN } from './const';
import { ITranslationLoader } from './interface';
import { distinctUntilChanged } from 'rxjs/operators';

@NgModule()
export class TranslateModule {
  constructor(
    @Inject(TRANSLATION_LOADERS_TOKEN) private modulesTranslationLoaders: ITranslationLoader[][],
    private translocoService: TranslocoService,
  ) {
    const translationLoaders = this.modulesTranslationLoaders.reduce(
      (loaders, moduleLoaders) => ([ ...loaders, ...moduleLoaders ]),
      []
    );

    this.translocoService.langChanges$
      .pipe(distinctUntilChanged())
      .subscribe(lang => {
        translationLoaders.forEach(({ scope, translations }) => {
          if (!translations[lang]) {
            return;
          }

          translations[lang]()
            .then(({ default: translation }) => {
              this.translocoService.setTranslation({ [scope]: translation }, lang);
            });
        });
      });
  }

  public static forChild(translationLoaders: ITranslationLoader[]): ModuleWithProviders {
    return {
      ngModule: TranslateModule,
      providers: [
        { provide: TRANSLATION_LOADERS_TOKEN, useValue: translationLoaders, multi: true },
      ],
    };
  }
}
