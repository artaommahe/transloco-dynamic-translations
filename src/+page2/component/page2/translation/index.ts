import { ITranslationLoader } from 'libs/translate';

export const page2Translations: ITranslationLoader = {
  scope: 'page2',
  translations: {
    en: () => import('./en.json'),
    ru: () => import('./ru.json'),
  }
};
