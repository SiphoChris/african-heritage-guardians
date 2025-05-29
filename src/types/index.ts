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
}
