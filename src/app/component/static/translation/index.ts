import { ITranslationLoader } from '../../../../../libs/translate';

export function en() { return import('./en.json'); }
export function ru() { return import('./ru.json'); }

export const staticTranslations: ITranslationLoader = {
  scope: 'static',
  translations: { en, ru }
};
