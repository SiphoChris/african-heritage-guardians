import { createContext, useContext, useEffect, useState } from 'react';
import { getDictionaryByLanguageCode } from '@/services/DictionaryService';

interface LabelContextType {
  getLabel: (key: string) => string;
  languageCode: string;
}

const LabelContext = createContext<LabelContextType>({
  getLabel: (key) => key,
  languageCode: 'en',
});

export const LabelProvider = ({ children, languageCode }: { children: React.ReactNode; languageCode: string }) => {
  const [labels, setLabels] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadLabels = async () => {
      const result = await getDictionaryByLanguageCode(languageCode);
      if (result.documents.length > 0) {
        const dict = result.documents[0];
        const labelMap: Record<string, string> = {};
        
        // Standard labels
        labelMap['word'] = 'Word';
        labelMap['definition'] = 'Definition';
        labelMap['example'] = 'Example';
        
        // Custom properties
        dict.customProperties?.forEach((prop: any) => {
          labelMap[prop.name] = prop.localizedName;
        });
        
        setLabels(labelMap);
      }
    };
    
    loadLabels();
  }, [languageCode]);

  const getLabel = (key: string) => {
    return labels[key] || key;
  };

  return (
    <LabelContext.Provider value={{ getLabel, languageCode }}>
      {children}
    </LabelContext.Provider>
  );
};

export const useLabels = () => {
  return useContext(LabelContext);
};