import { ITranslationLoader } from 'libs/translate';

export const counterTranslations: ITranslationLoader = {
  scope: 'someLibCounter',
  translations: {
    en: () => import('./en.json'),
    ru: () => import('./ru.json'),
  }
};
