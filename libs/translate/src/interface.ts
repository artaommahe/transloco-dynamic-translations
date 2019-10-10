export type TComponentTranslationLoader = () => Promise<Object>;

export interface IComponentTranslations {
  [lang: string]: TComponentTranslationLoader;
}
