import { Controller } from 'react-hook-form';
import { Select, Text, Flex } from '@radix-ui/themes';
import { useDictionaryProperties } from '@/hooks/useDictionaryProperties';

interface PartOfSpeechSelectorProps {
  name: string;
  dictionary: any;
}

export const PartOfSpeechSelector = ({ name, dictionary }: PartOfSpeechSelectorProps) => {
  const { getPropertyLabel, getPropertyOptions } = useDictionaryProperties(dictionary?.languageCode);
  
  const posOptions = [
    { value: 'noun', label: 'Noun' },
    { value: 'verb', label: 'Verb' },
    { value: 'adjective', label: 'Adjective' },
    { value: 'adverb', label: 'Adverb' },
    { value: 'pronoun', label: 'Pronoun' },
    { value: 'preposition', label: 'Preposition' },
    { value: 'conjunction', label: 'Conjunction' },
    { value: 'interjection', label: 'Interjection' },
  ];

  return (
    <Controller
      name={name}
      render={({ field }) => (
        <label className="block">
          <Flex gap="2" align="center" mb="1">
            <Text as="div" size="2" weight="medium">
              Part of Speech
            </Text>
            {getPropertyLabel('pos') && (
              <Text as="div" size="1" className="text-slate-500">
                ({getPropertyLabel('pos')})
              </Text>
            )}
          </Flex>
          
          <Select.Root value={field.value} onValueChange={field.onChange}>
            <Select.Trigger className="w-full" />
            <Select.Content>
              {posOptions.map((option) => (
                <Select.Item key={option.value} value={option.value}>
                  {option.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </label>
      )}
    />
  );
};