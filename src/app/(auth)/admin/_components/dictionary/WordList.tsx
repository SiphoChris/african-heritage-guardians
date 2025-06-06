import Link from 'next/link';
import { Card, Text, Flex, Badge } from '@radix-ui/themes';
import { PartOfSpeechBadge } from '../PartOfSpeechBadge';

interface WordListProps {
  words: any[];
  dictionaryId: string;
}

export const WordList = ({ words, dictionaryId }: WordListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {words.map((word) => (
        <Link 
          key={word.$id} 
          href={`/dictionary/${dictionaryId}/word/${word.$id}`}
          passHref
        >
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <Flex direction="column" gap="2">
              <Text size="4" weight="bold" className="text-slate-800">
                {word.word}
              </Text>
              <Flex gap="2" align="center">
                <PartOfSpeechBadge pos={word.firstLanguage.grammar?.pos} />
                {word.translated.translations && (
                  <Text size="2" className="text-slate-600">
                    {word.translated.translations.join(', ')}
                  </Text>
                )}
              </Flex>
              {word.firstLanguage.semantics?.definitions && (
                <Text size="2" className="text-slate-500 line-clamp-2">
                  {Object.values(word.firstLanguage.semantics.definitions)[0][0]?.content}
                </Text>
              )}
            </Flex>
          </Card>
        </Link>
      ))}
    </div>
  );
};