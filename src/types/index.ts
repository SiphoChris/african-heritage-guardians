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
