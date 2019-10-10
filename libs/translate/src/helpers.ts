import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { InjectionToken, Provider } from '@angular/core';
import { IComponentTranslations } from './interface';
import { TranslationLoaderService } from './service/translation-loader';

// uglyhack tokens for plain values passing to factory function
export const SCOPE_TOKEN = new InjectionToken('vimboxCore.translate.scope');
export const TRANSLATIONS_TOKEN = new InjectionToken('vimboxCore.translate.translations');

export function provideTranslation(scope: string, translations: IComponentTranslations): Provider[] {
  return [
    { provide: SCOPE_TOKEN, useValue: scope },
    { provide: TRANSLATIONS_TOKEN, useValue: translations },
    {
      provide: TRANSLOCO_SCOPE,
      useFactory: translationFactory,
      deps: [SCOPE_TOKEN, TRANSLATIONS_TOKEN, TranslationLoaderService],
    },
  ];
}

// use `TRANSLOCO_SCOPE` token as component creation hook to register its translation
export function translationFactory(
  scope: string,
  translations: IComponentTranslations,
  translationLoaderService: TranslationLoaderService,
): null {
  translationLoaderService.registerTranslations(scope, translations);

  return null;
}
