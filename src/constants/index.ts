import { aboutUsTypes, navLinksTypes, slidesTypes, footerLinksTypes, acknowledgementTypes, projectTypes } from "@/types";

export const navLinks: navLinksTypes[] = [
  { name: "Home", href: "/" },
  {
    name: "Projects",
    href: "/projects",
    isDropdown: true,
    subLinks: [
      { name: "AfriLex", href: "/projects/afrilex" },
      { name: "Afrimage", href: "/projects/afrimage" },
      { name: "AfriLingo", href: "/projects/afrilingo" },
    ],
  },
  { name: "Contact", href: "#" },
  { name: "Support Us", href: "#" },
];

export const aboutUs: aboutUsTypes[] = [
  {
    title: "Our Vision",
    description:
      "A digitally connected Africa, where every language, every tradition, and every cultural nuance is recorded, respected, and reimagined for future generations — both in society and in the technologies of tomorrow.",
  },
  {
    title: "Our Mission",
    description:
      "To safeguard Africa's cultural and linguistic heritage by building open-access digital platforms that document, educate, and empower communities, scholars, and developers alike.",
  },
  {
    title: "What We Do",
    description:
      "We are building digital platforms that collect, organize, and publish data about African languages, literature, imagery, and more.",
  },
];

export const slides: slidesTypes[] = [
  {
    id: 1,
    title: "Beautiful Mountain Landscape",
    description:
      "Explore the breathtaking views of snow-capped mountains and pristine wilderness.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    color: "from-blue-600 to-purple-600",
  },
  {
    id: 2,
    title: "Ocean Paradise",
    description:
      "Dive into crystal clear waters and discover the beauty of tropical beaches.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Urban Adventures",
    description:
      "Experience the vibrant energy of modern cities and architectural marvels.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    title: "Forest Serenity",
    description:
      "Find peace in ancient forests where nature's harmony creates perfect tranquility.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
    color: "from-green-600 to-emerald-600",
  },
  {
    id: 5,
    title: "Desert Wonders",
    description:
      "Witness the raw beauty of endless dunes and spectacular desert sunsets.",
    image:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=400&fit=crop",
    color: "from-yellow-500 to-orange-500",
  },
];

export const footerLinks: footerLinksTypes[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "#" },
  { name: "Mission", href: "#" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "#" },
  { name: "Support Us", href: "#" },
];


export const acknowledgementData: acknowledgementTypes[] = [
  {
    id: 1,
    name: "DSD",
    image: "/images/sponsors/dsd.png",
    status: "Bronze",
  },
  {
    id: 2,
    name: "DSTI",
    image: "/images/sponsors/dsti.jpg",
    status: "Silver",
  },
  {
    id: 3,
    name: "NYDA",
    image: "/images/sponsors/nyda.png",
    status: "Gold",
  },

  // Bronze, Gold, Silver, Platinum
]

export const flagsAndLanguages: { id: number, country: string, flagUrl: string, language: string }[] = [
  { id: 1, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "IsiXhosa" },
  { id: 2, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "IsiZulu" },
  { id: 3, country: "Botswana", flagUrl: "/images/flags/botswana-flag.webp", language: "SeTswana" },
  { id: 4, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "English" },
  { id: 5, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "SePedi" },
  { id: 6, country: "Swaziland", flagUrl: "/images/flags/swaziland-flag.png", language: "SiSwati" },
  { id: 7, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "Xitsonga" },
  { id: 8, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "Afrikaans" },
  { id: 9, country: "Lesotho", flagUrl: "/images/flags/lesotho-flag.webp", language: "SeSotho" },
  { id: 10, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "English" },
  { id: 11, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "TshiVenda" },
  { id: 12, country: "Zimbabwe", flagUrl: "/images/flags/zimbabwe-flag.gif", language: "ChiShona" },
  // duplicates
  { id: 13, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "IsiXhosa" },
  { id: 14, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "IsiZulu" },
  { id: 15, country: "Botswana", flagUrl: "/images/flags/botswana-flag.webp", language: "SeTswana" },
  { id: 16, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "English" },
  { id: 17, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "SePedi" },
  { id: 18, country: "Swaziland", flagUrl: "/images/flags/swaziland-flag.png", language: "SiSwati" },
  { id: 19, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "Xitsonga" },
  { id: 20, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "Afrikaans" },
  { id: 21, country: "Lesotho", flagUrl: "/images/flags/lesotho-flag.webp", language: "SeSotho" },
  { id: 22, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "English" },
  { id: 23, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "TshiVenda" },
  { id: 24, country: "Zimbabwe", flagUrl: "/images/flags/zimbabwe-flag.gif", language: "ChiShona" },
]


export const projects: projectTypes[] = [
  {
    id: 1,
    title: "AfriLex",
    description: "AfriLex is a pioneering computational linguistics project focused on preserving, promoting, and digitalizing Africa's indigenous languages.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    status: "Complete",
  },
  {
    id: 2,
    title: "Afrimage",
    description: "Afrimage is a repository dedicated to preserving African indigenous cultural visual identities.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    status: "In Progress",
  },
  {
    id: 3,
    title: "AfriLingo",
    description: "AfriLingo is an online edu-ecosystem for curious minds to learn African indigenious languages.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    status: "In Progress",
  }
]


// South African and regional languages
export const SUPPORTED_LANGUAGES = [
  { code: "xh", name: "IsiXhosa", displayName: "isiXhosa" },
  { code: "zu", name: "IsiZulu", displayName: "isiZulu" },
  { code: "af", name: "Afrikaans", displayName: "Afrikaans" },
  { code: "ts", name: "Xitsonga", displayName: "Xitsonga" },
  { code: "ss", name: "SiSwati", displayName: "siSwati" },
  { code: "ve", name: "TshiVenda", displayName: "Tshivenda" },
  { code: "tn", name: "SeTswana", displayName: "Setswana" },
  { code: "st", name: "SeSotho", displayName: "Sesotho" },
  { code: "nso", name: "SePedi", displayName: "Sepedi" },
  { code: "nr", name: "IsiNdebele", displayName: "isiNdebele" },
  { code: "sn", name: "ChiShona", displayName: "chiShona" },
];

export const DEFAULT_LANGUAGE_CODE = "xh";

export const POS_OPTIONS = [
  { value: "noun", label: "Noun" },
  { value: "verb", label: "Verb" },
  { value: "adjective", label: "Adjective" },
  { value: "adverb", label: "Adverb" },
  { value: "pronoun", label: "Pronoun" },
  { value: "preposition", label: "Preposition" },
  { value: "conjunction", label: "Conjunction" },
  { value: "interjection", label: "Interjection" },
];

export const REGISTER_OPTIONS = [
  { value: "formal", label: "Formal" },
  { value: "informal", label: "Informal" },
  { value: "slang", label: "Slang" },
  { value: "archaic", label: "Archaic" },
];

export const STATUS_OPTIONS = [
  { value: "complete", label: "Complete" },
  { value: "incomplete", label: "Incomplete" },
  { value: "needs_review", label: "Needs Review" },
];