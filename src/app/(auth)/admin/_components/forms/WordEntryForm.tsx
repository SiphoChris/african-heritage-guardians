import { DynamicForm, DynamicField, DynamicArrayField } from './DynamicForm';
import { z } from 'zod';
import { useDictionaryProperties } from '@/hooks/useDictionaryProperties';
import { PartOfSpeechSelector } from '../PartOfSpeechSelector';
import { AudioUpload } from '../AudioUpload';

const createWordSchema = (dictionary: any) => {
  const baseSchema = z.object({
    word: z.string().min(1, "Word is required"),
    languageCode: z.string().min(1),
    dictionaryId: z.string().min(1),
    firstLanguage: z.object({
      lemma: z.object({
        is_lemma: z.boolean(),
        lemma_word: z.string().optional(),
      }),
      phonology: z.object({
        pronunciation_url: z.string().optional(),
        syllables: z.array(z.string()).min(1, "At least one syllable is required"),
      }),
      grammar: z.object({
        pos: z.string().min(1, "Part of speech is required"),
        fos: z.string().optional(),
        inflection: z.object({
          tense: z.string().optional(),
          aspect: z.string().optional(),
          mood: z.string().optional(),
          voice: z.string().optional(),
          number: z.string().optional(),
          person: z.string().optional(),
        }).optional(),
      }),
      semantics: z.object({
        definitions: z.record(
          z.array(
            z.object({
              content: z.string().min(1, "Definition is required"),
              definition_number: z.number(),
              example_sentence: z.string().optional(),
              properties: z.object({
                register: z.string().optional(),
                pos: z.string().optional(),
              }),
            })
          )
        ),
      }),
    }),
    translated: z.object({
      target_language: z.string().min(1),
      translations: z.array(z.string()).min(1, "At least one translation is required"),
    }),
    metadata: z.object({
      verified: z.boolean(),
      status: z.string(),
      is_published: z.boolean(),
    }),
  });

  // Add custom properties to schema if they exist
  if (dictionary?.customProperties?.length) {
    const customPropsSchema: Record<string, any> = {};
    
    dictionary.customProperties.forEach((prop: any) => {
      if (prop.required) {
        customPropsSchema[prop.name] = 
          prop.type === 'array' 
            ? z.array(z.string()).min(1, `${prop.name} is required`)
            : z.string().min(1, `${prop.name} is required`);
      } else {
        customPropsSchema[prop.name] = 
          prop.type === 'array' 
            ? z.array(z.string()).optional()
            : z.string().optional();
      }
    });

    return baseSchema.extend({
      custom_properties: z.object(customPropsSchema).optional(),
    });
  }

  return baseSchema;
};

interface WordEntryFormProps {
  dictionary: any;
  onSubmit: (data: any) => void;
  initialValues?: any;
}

export const WordEntryForm = ({ dictionary, onSubmit, initialValues }: WordEntryFormProps) => {
  const { getPropertyLabel } = useDictionaryProperties(dictionary?.languageCode);
  
  const defaultValues = initialValues || {
    word: '',
    languageCode: dictionary?.languageCode,
    dictionaryId: dictionary?.$id,
    firstLanguage: {
      lemma: {
        is_lemma: true,
        lemma_word: '',
      },
      phonology: {
        pronunciation_url: '',
        syllables: [],
      },
      grammar: {
        pos: '',
        inflection: {},
      },
      semantics: {
        definitions: {
          [getPropertyLabel('definition') || 'Definition']: [
            {
              content: '',
              definition_number: 1,
              properties: {
                register: '',
                pos: '',
              },
            },
          ],
        },
      },
    },
    translated: {
      target_language: 'en',
      translations: [],
    },
    metadata: {
      verified: false,
      status: 'Lisasetyenzwa',
      is_published: false,
    },
  };

  return (
    <DynamicForm
      schema={createWordSchema(dictionary)}
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      dictionary={dictionary}
    >
      <Card className="p-4 mb-4">
        <Text size="3" weight="bold" className="block mb-4">
          Basic Information
        </Text>
        
        <Grid columns="2" gap="4">
          <DynamicField 
            name="word" 
            label="Word" 
            required 
            localizedLabel={getPropertyLabel('word')}
          />
          
          <PartOfSpeechSelector 
            name="firstLanguage.grammar.pos" 
            dictionary={dictionary} 
          />
        </Grid>
      </Card>
      
      <Card className="p-4 mb-4">
        <Text size="3" weight="bold" className="block mb-4">
          Phonology
        </Text>
        
        <Grid columns="2" gap="4">
          <AudioUpload 
            name="firstLanguage.phonology.pronunciation_url" 
            label="Pronunciation" 
          />
          
          <DynamicArrayField
            name="firstLanguage.phonology.syllables"
            label="Syllables"
            defaultItemValue=""
            itemSchema={z.string()}
            renderItem={(index) => (
              <DynamicField 
                name={`firstLanguage.phonology.syllables.${index}`} 
                label={`Syllable ${index + 1}`} 
              />
            )}
          />
        </Grid>
      </Card>
      
      <Card className="p-4 mb-4">
        <Text size="3" weight="bold" className="block mb-4">
          Semantics
        </Text>
        
        <DynamicArrayField
          name="translated.translations"
          label="Translations"
          defaultItemValue=""
          itemSchema={z.string()}
          renderItem={(index) => (
            <DynamicField 
              name={`translated.translations.${index}`} 
              label={`Translation ${index + 1}`} 
              required
            />
          )}
        />
        
        {Object.entries(defaultValues.firstLanguage.semantics.definitions).map(([key, defs]) => (
          <div key={key} className="mb-4">
            <Text size="2" weight="bold" className="block mb-2">
              {key}
            </Text>
            
            <DynamicArrayField
              name={`firstLanguage.semantics.definitions.${key}`}
              label=""
              defaultItemValue={{
                content: '',
                definition_number: 1,
                properties: {
                  register: '',
                  pos: '',
                },
              }}
              itemSchema={z.object({
                content: z.string(),
                definition_number: z.number(),
                properties: z.object({
                  register: z.string(),
                  pos: z.string(),
                }),
              })}
              renderItem={(index) => (
                <div className="space-y-3">
                  <DynamicField 
                    name={`firstLanguage.semantics.definitions.${key}.${index}.content`} 
                    label="Definition" 
                    type="textarea"
                    required
                  />
                  
                  <DynamicField 
                    name={`firstLanguage.semantics.definitions.${key}.${index}.properties.register`} 
                    label="Register" 
                    type="select"
                    options={[
                      { value: 'formal', label: 'Formal' },
                      { value: 'informal', label: 'Informal' },
                      { value: 'slang', label: 'Slang' },
                    ]}
                  />
                </div>
              )}
            />
          </div>
        ))}
      </Card>
      
      {/* Add more sections for morphology, usage, etc. */}
    </DynamicForm>
  );
};