import {algoliasearch} from 'algoliasearch';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY!
);

export const searchClient = {
  ...client,
  search(requests: any[]) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
        })),
      });
    }
    return client.search(requests);
  },
};

export const wordsIndex = client.initIndex('words');

export const configureWordsIndex = async () => {
  await wordsIndex.setSettings({
    searchableAttributes: [
      'word',
      'firstLanguage.semantics.definitions.content',
      'translated.translations',
    ],
    attributesForFaceting: [
      'filterOnly(languageCode)',
      'filterOnly(dictionaryId)',
    ],
    customRanking: ['desc(metadata.verified)', 'asc(word)'],
  });
};