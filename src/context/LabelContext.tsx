import { createContext, useContext, ReactNode } from 'react';

interface LabelContextType {
  getLabel: (key: string) => string;
}

const LabelContext = createContext<LabelContextType>({
  getLabel: (key) => key,
});

export const LabelProvider = ({ 
  children, 
  dictionary 
}: { 
  children: ReactNode; 
  dictionary: any 
}) => {
  const getLabel = (key: string) => {
    if (!dictionary?.customProperties) return key;
    
    const prop = dictionary.customProperties.find((p: any) => p.name === key);
    return prop?.localizedName || key;
  };

  return (
    <LabelContext.Provider value={{ getLabel }}>
      {children}
    </LabelContext.Provider>
  );
};

export const useLabels = () => {
  return useContext(LabelContext);
};