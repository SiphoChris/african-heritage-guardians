import { WordList, LetterPagination } from '@/components/dictionary';
import { getDictionaryByLanguageCode, getWordsByDictionary } from '@/services/DictionaryService';
import { notFound } from 'next/navigation';
import { SUPPORTED_LANGUAGES } from '@/constants';

export default async function DictionaryPage({ 
  params,
  searchParams 
}: { 
  params: { language: string };
  searchParams: { letter?: string };
}) {
  const language = SUPPORTED_LANGUAGES.find(l => l.code === params.language);
  
  if (!language) {
    return notFound();
  }

  const dictionaries = await getDictionaryByLanguageCode(params.language);
  
  if (dictionaries.documents.length === 0) {
    return notFound();
  }

  const dictionary = dictionaries.documents[0];
  const words = await getWordsByDictionary(dictionary.$id, [
    searchParams.letter ? Query.startsWith('word', searchParams.letter) : Query.orderAsc('word')
  ]);

  const letters = Array.from({ length: 26 }, (_, i) => 
    String.fromCharCode(65 + i)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{dictionary.displayName} Dictionary</h1>
      
      <LetterPagination 
        letters={letters} 
        currentLetter={searchParams.letter}
        dictionaryId={dictionary.$id}
      />
      
      <WordList 
        words={words.documents} 
        dictionaryId={dictionary.$id}
      />
    </div>
  );
}