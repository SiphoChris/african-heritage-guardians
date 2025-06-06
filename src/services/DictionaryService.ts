import { databases, Query } from '@/lib/appwrite';
import { ID, Permission, Role } from 'appwrite';

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const DICTIONARIES_COLLECTION = 'dictionaries';
const WORDS_COLLECTION = 'words';

export interface Dictionary {
  $id: string;
  name: string;
  displayName: string;
  language: string;
  languageCode: string;
  description?: string;
  customProperties?: CustomProperty[];
  createdAt: string;
  updatedAt: string;
}

export interface CustomProperty {
  id: string;
  name: string;
  localizedName: string;
  type: 'string' | 'array' | 'boolean' | 'integer';
  required: boolean;
  description?: string;
}

export interface Word {
  $id: string;
  dictionaryId: string;
  word: string;
  languageCode: string;
  firstLanguage: any;
  translated: any;
  customProperties?: any;
  metadata: {
    verified: boolean;
    status: string;
    is_published: boolean;
    created_by: string;
    created_at: string;
    updated_at: string;
  };
  createdAt: string;
  updatedAt: string;
}

export const createDictionary = async (dictionaryData: Omit<Dictionary, '$id' | 'createdAt' | 'updatedAt'>) => {
  const permissions = [
    Permission.read(Role.any()),
    Permission.write(Role.admin()),
  ];

  return await databases.createDocument(
    DATABASE_ID,
    DICTIONARIES_COLLECTION,
    ID.unique(),
    dictionaryData,
    permissions
  );
};

export const getDictionaries = async () => {
  return await databases.listDocuments(DATABASE_ID, DICTIONARIES_COLLECTION);
};

export const getDictionaryById = async (dictionaryId: string) => {
  return await databases.getDocument(DATABASE_ID, DICTIONARIES_COLLECTION, dictionaryId);
};

export const getDictionaryByLanguageCode = async (languageCode: string) => {
  return await databases.listDocuments(
    DATABASE_ID,
    DICTIONARIES_COLLECTION,
    [Query.equal('languageCode', languageCode)]
  );
};

export const updateDictionary = async (dictionaryId: string, data: Partial<Dictionary>) => {
  return await databases.updateDocument(
    DATABASE_ID,
    DICTIONARIES_COLLECTION,
    dictionaryId,
    data
  );
};

export const deleteDictionary = async (dictionaryId: string) => {
  return await databases.deleteDocument(
    DATABASE_ID,
    DICTIONARIES_COLLECTION,
    dictionaryId
  );
};

export const createWord = async (wordData: Omit<Word, '$id' | 'createdAt' | 'updatedAt'>) => {
  const permissions = [
    Permission.read(Role.any()),
    Permission.write(Role.admin()),
  ];

  return await databases.createDocument(
    DATABASE_ID,
    WORDS_COLLECTION,
    ID.unique(),
    wordData,
    permissions
  );
};

export const getWordsByDictionary = async (dictionaryId: string, queries: string[] = []) => {
  return await databases.listDocuments(
    DATABASE_ID,
    WORDS_COLLECTION,
    [Query.equal('dictionaryId', dictionaryId), ...queries]
  );
};

export const getWordById = async (wordId: string) => {
  return await databases.getDocument(DATABASE_ID, WORDS_COLLECTION, wordId);
};

export const searchWords = async (dictionaryId: string, searchTerm: string) => {
  return await databases.listDocuments(
    DATABASE_ID,
    WORDS_COLLECTION,
    [
      Query.equal('dictionaryId', dictionaryId),
      Query.search('word', searchTerm)
    ]
  );
};

export const updateWord = async (wordId: string, data: Partial<Word>) => {
  return await databases.updateDocument(
    DATABASE_ID,
    WORDS_COLLECTION,
    wordId,
    data
  );
};

export const deleteWord = async (wordId: string) => {
  return await databases.deleteDocument(
    DATABASE_ID,
    WORDS_COLLECTION,
    wordId
  );
};

export const checkWordExists = async (dictionaryId: string, word: string) => {
  const result = await databases.listDocuments(
    DATABASE_ID,
    WORDS_COLLECTION,
    [
      Query.equal('dictionaryId', dictionaryId),
      Query.equal('word', word.toLowerCase())
    ]
  );
  return result.documents.length > 0;
};