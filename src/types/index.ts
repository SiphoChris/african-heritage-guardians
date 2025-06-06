export type aboutUsTypes = { title: string; description: string };

export type navLinksTypes = {
  name: string;
  href: string;
  isDropdown?: boolean;
  subLinks?: { name: string; href: string }[];
};

export type slidesTypes = {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
};

export type footerLinksTypes = { name: string; href: string };

export type acknowledgementTypes = {
  id: number;
  name: string;
  image: string;
  status: string;
};

export type projectTypes = {
  id: number;
  title: string;
  description: string;
  image: string;
  status: string;
};


export interface SUPPORTED_LANGUAGE {
  code: string;
  name: string;
  displayName: string;
}

export interface DictionaryFormData {
  name: string;
  displayName: string;
  language: string;
  languageCode: string;
  description: string;
  customProperties: CustomProperty[];
}

export interface CustomProperty {
  id: string;
  name: string;
  localizedName: string;
  type: "string" | "array" | "boolean" | "integer";
  required: boolean;
  description: string;
}

export interface WordFormData {
  dictionaryId: string;
  word: string;
  languageCode: string;
  firstLanguage: {
    lemma: {
      is_lemma: boolean;
      lemma_word?: string;
    };
    etymology?: {
      title: string;
      content: string;
    };
    morphology?: {
      prefix?: {
        title: string;
        content: string;
      };
      root?: {
        title: string;
        content: string;
      };
      suffix?: {
        title: string;
        content: string;
      };
      derivations?: Array<{
        word: string;
        pos: string;
        definition: string;
        example_sentence: string;
        status: string;
      }>;
    };
    phonology?: {
      pronunciation_url?: string;
      syllables: string[];
    };
    grammar?: {
      pos: string;
      fos?: string;
      inflection?: {
        tense?: string;
        aspect?: string;
        mood?: string;
        voice?: string;
        number?: string;
        person?: string;
      };
      other_references?: Array<{
        word: string;
        definition: string;
        relationship: string;
        pos: string;
        pronunciation?: string;
        status: string;
      }>;
    };
    semantics?: {
      definitions: {
        [key: string]: Array<{
          content: string;
          definition_number: number;
          example_sentence: string;
          properties: {
            register: string;
            pos: string;
          };
        }>;
      };
      antonyms?: Array<{
        title: string;
        words: string[];
      }>;
      synonyms?: Array<{
        title: string;
        words: string[];
      }>;
    };
    usage?: {
      example_sentences?: Array<{
        sentence: string;
        context: string;
        register: string;
        created_by: {
          name: string;
          role: string;
        };
      }>;
      collocations?: Array<{
        phrase: string;
        meaning: string;
      }>;
      register?: string;
      cultural_notes?: string;
    };
  };
  translated: {
    target_language: string;
    translations: string[];
    etymology?: Array<{
      title: string;
      content: string;
    }>;
    morphology?: {
      prefix?: Array<{
        title: string;
        content: string;
        gloss: string;
      }>;
      root?: Array<{
        title: string;
        content: string;
        gloss: string[];
      }>;
      suffix?: Array<{
        title: string;
        content: string;
        gloss: string;
      }>;
      derivations?: Array<{
        word: string;
        pos: string;
        translation: string[];
        example_sentence: string;
        translation_example: string;
        status: string;
      }>;
    };
    phonology?: {
      pronunciation_url?: string;
      syllables: string[];
    };
    grammar?: {
      pos: string;
      fos?: string;
      inflection?: {
        tense?: string;
        aspect?: string;
        mood?: string;
        voice?: string;
        number?: string;
        person?: string;
      };
      other_references?: Array<{
        word: string;
        definition: string;
        relationship: string;
        pos: string;
        pronunciation?: string;
        status: string;
      }>;
    };
    semantics?: {
      definitions: Array<
        Array<{
          content: string;
          definition_number: number;
          example_sentence: string;
          properties: {
            register: string;
            pos: string;
          };
        }>
      >;
      antonyms?: Array<{
        title: string;
        words: string[];
      }>;
      synonyms?: Array<{
        title: string;
        words: string[];
      }>;
    };
    usage?: {
      example_sentences?: Array<{
        sentence: string;
        translation: string;
        context: string;
        register: string;
        created_by: {
          name: string;
          role: string;
        };
      }>;
      collocations?: Array<{
        phrase: string;
        translation: string;
        meaning: string;
        usage_note?: string;
      }>;
    };
  };
  custom_properties?: Record<string, {
    title: string;
    options?: string[];
    value: string;
  }>;
  word_formation?: {
    prefix?: {
      title: string;
      value: string;
    };
    stem?: {
      title: string;
      value: string;
    };
    root?: {
      title: string;
      value: string;
    };
    suffix?: {
      title: string;
      value: string;
    };
  };
  metadata: {
    verified: boolean;
    status: string;
    is_published: boolean;
    created_by: string;
    created_at: string;
    updated_at: string;
  };
}

export interface Admin {
  $id: string;
  admin_id: string;
  name: string;
  surname: string;
  email: string;
  is_verified: boolean;
  is_super_admin: boolean;
  language: string;
  profession?: string;
  department?: string;
  country?: string;
  created_at: string;
  settings: Record<string, any>;
  privileges: {
    edit: boolean;
    create: boolean;
    delete: boolean;
    view: boolean;
  };
}

export interface UserContribution {
  $id: string;
  userId: string;
  type: 'word' | 'sentence';
  wordId?: string;
  dictionaryId: string;
  content: any;
  status: 'pending' | 'approved' | 'rejected';
  reviewedBy?: string;
  reviewedAt?: string;
  created_at: string;
}

export interface LiveCursor {
  x: number;
  y: number;
  color: string;
  name: string;
  avatar?: string;
}

export interface LivePresence {
  cursor: LiveCursor | null;
  selectedWordId: string | null;
  editingField: string | null;
}
