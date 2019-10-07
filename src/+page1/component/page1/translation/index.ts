import { ITranslationLoader } from '../../../../../libs/translate';

export function en() { return import('./en.json'); }
export function ru() { return import('./ru.json'); }

export const page1Translations: ITranslationLoader = {
  scope: 'page1',
  translations: { en, ru }
};
