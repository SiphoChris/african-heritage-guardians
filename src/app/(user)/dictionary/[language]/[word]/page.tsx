import { getWordById } from '@/services/DictionaryService';
import { notFound } from 'next/navigation';
import { AudioPlayer } from '@/components/AudioPlayer';
import { LabelProvider } from '@/context/LabelContext';
import { getDictionaryByLanguageCode } from '@/services/DictionaryService';

export default async function WordDetailPage({ 
  params 
}: { 
  params: { word: string; language: string };
}) {
  const word = await getWordById(params.word);
  
  if (!word) {
    return notFound();
  }

  const dictionaries = await getDictionaryByLanguageCode(params.language);
  const dictionary = dictionaries.documents[0];

  return (
    <LabelProvider dictionary={dictionary}>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-800 mb-2">
                {word.word}
              </h1>
              {word.firstLanguage.phonology?.pronunciation_url && (
                <AudioPlayer audioUrl={word.firstLanguage.phonology.pronunciation_url} />
              )}
            </div>
            
            <div className="bg-amber-50 px-3 py-1 rounded-md">
              <span className="text-amber-700 font-medium">
                {word.firstLanguage.grammar?.pos}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-slate-700">
                Definitions
              </h2>
              
              {Object.entries(word.firstLanguage.semantics.definitions).map(([key, defs]) => (
                <div key={key} className="mb-6">
                  <h3 className="text-lg font-medium mb-2 text-slate-600">{key}</h3>
                  
                  <ul className="space-y-4">
                    {(defs as any[]).map((def) => (
                      <li key={def.definition_number} className="border-l-4 border-amber-400 pl-4">
                        <p className="text-slate-800 mb-1">
                          {def.definition_number}. {def.content}
                        </p>
                        {def.example_sentence && (
                          <p className="text-slate-600 italic">
                            "{def.example_sentence}"
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4 text-slate-700">
                Translations
              </h2>
              
              <div className="mb-6">
                <p className="text-slate-800">
                  {word.translated.translations.join(', ')}
                </p>
              </div>
              
              <h2 className="text-xl font-semibold mb-4 text-slate-700">
                Examples
              </h2>
              
              <ul className="space-y-3">
                {word.firstLanguage.usage?.example_sentences?.map((sentence, index) => (
                  <li key={index} className="bg-slate-50 p-3 rounded-md">
                    <p className="text-slate-800 mb-1">"{sentence.sentence}"</p>
                    <p className="text-slate-500 text-sm">
                      {sentence.context} • {sentence.register}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LabelProvider>
  );
}