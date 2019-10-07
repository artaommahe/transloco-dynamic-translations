import { ITranslationLoader } from 'libs/translate';

export const page1Translations: ITranslationLoader = {
  scope: 'page1',
  translations: {
    en: () => import('./en.json'),
    ru: () => import('./ru.json'),
  }
};
