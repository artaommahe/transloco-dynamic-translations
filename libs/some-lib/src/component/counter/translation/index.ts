import { ITranslationLoader } from 'libs/translate';

export function en() { return import('./en.json'); }
export function ru() { return import('./ru.json'); }

export const counterTranslations: ITranslationLoader = {
  scope: 'someLibCounter',
  translations: { en, ru }
};
