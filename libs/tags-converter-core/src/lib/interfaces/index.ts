export enum AvailableLanguages {
  RU = 'ru',
  EN = 'en',
}

export interface ILanguages {
  RU: string;
  EN: string;
}

export interface IStorage {
  LANGUAGE: string;
  TAGS: string;
}

export const STORAGE: IStorage = {
  LANGUAGE: 'language',
  TAGS: 'Tags'
};

export enum MODES {
  comma_hash = 'comma_hash',
  hash_comma = 'hash_comma',
  space_comma = 'space_comma',
  space_hash = 'space_hash',
  hash_space = 'hash_space',
  comma_space = 'comma_space'
}
