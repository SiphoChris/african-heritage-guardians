import { useState, useEffect } from 'react';
import { 
  getWordsByDictionary, 
  searchWords,
  checkWordExists
} from '@/services/DictionaryService';

export const useDictionaryWords = (dictionaryId: string) => {
  const [words, setWords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [letter, setLetter] = useState<string | null>(null);

  const loadWords = async (letterFilter?: string | null) => {
    try {
      setLoading(true);
      const queries = [];
      
      if (letterFilter) {
        queries.push(Query.startsWith('word', letterFilter));
      }
      
      const result = await getWordsByDictionary(dictionaryId, queries);
      setWords(result.documents);
    } catch (err) {
      setError('Failed to load words');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const search = async (term: string) => {
    try {
      setLoading(true);
      const result = await searchWords(dictionaryId, term);
      setWords(result.documents);
    } catch (err) {
      setError('Search failed');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const checkExists = async (word: string) => {
    try {
      return await checkWordExists(dictionaryId, word);
    } catch (err) {
      console.error('Failed to check word existence:', err);
      return false;
    }
  };

  useEffect(() => {
    if (dictionaryId) {
      loadWords(letter);
    }
  }, [dictionaryId, letter]);

  return { 
    words, 
    loading, 
    error, 
    letter, 
    setLetter, 
    search, 
    checkExists,
    refresh: () => loadWords(letter) 
  };
};