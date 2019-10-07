import { ITranslationLoader } from 'libs/translate';

export const staticTranslations: ITranslationLoader = {
  scope: 'static',
  translations: {
    en: () => import('./en.json'),
    ru: () => import('./ru.json'),
  }
};
