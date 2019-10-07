import { ITranslationLoader } from 'libs/translate';

export function en() { return import('./en.json'); }
export function ru() { return import('./ru.json'); }

export const page2Translations: ITranslationLoader = {
  scope: 'page2',
  translations: { en, ru }
};
