export interface ITranslationLoader {
  scope: string;
  translations: Record<string, () => Promise<object & { default?: object }>>;
}
