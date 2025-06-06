import { useEffect, useState } from 'react';
import { getDictionaryByLanguageCode } from '@/services/DictionaryService';

export const useDictionaryProperties = (languageCode?: string) => {
  const [properties, setProperties] = useState<any[]>([]);
  const [labels, setLabels] = useState<Record<string, string>>({});

  useEffect(() => {
    if (languageCode) {
      const loadProperties = async () => {
        const result = await getDictionaryByLanguageCode(languageCode);
        if (result.documents.length > 0) {
          const dict = result.documents[0];
          setProperties(dict.customProperties || []);
          
          // Create a map of English property names to localized names
          const labelMap: Record<string, string> = {};
          dict.customProperties?.forEach((prop: any) => {
            labelMap[prop.name] = prop.localizedName;
          });
          setLabels(labelMap);
        }
      };
      loadProperties();
    }
  }, [languageCode]);

  const getPropertyLabel = (propertyName: string) => {
    return labels[propertyName] || '';
  };

  const getPropertyOptions = (propertyName: string) => {
    const prop = properties.find(p => p.name === propertyName);
    return prop?.options || [];
  };

  return { properties, getPropertyLabel, getPropertyOptions };
};