import { aboutUsTypes, navLinksTypes, slidesTypes, footerLinksTypes, acknowledgementTypes } from "@/types";

export const navLinks: navLinksTypes[] = [
  { name: "Home", href: "/" },
  {
    name: "Projects",
    href: "/projects",
    isDropdown: true,
    subLinks: [
      { name: "AfriLex", href: "/projects/afrilex" },
      { name: "Afrimage", href: "/projects/afrimage" },
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
    status: "Gold",
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
  }
]

export const flagsAndLanguages: { id: number, country: string, flagUrl: string, language: string }[] = [
  { id: 1, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "IsiXhosa" },
  { id: 2, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "IsiZulu" },
  { id: 3, country: "Botswana", flagUrl: "/images/flags/botswana-flag.webp", language: "SeTswana" },
  { id: 4, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "English" },
  { id: 5, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "SePedi" },
  { id: 6, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "Xitsonga" },
  { id: 7, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "Afrikaans" },
  { id: 8, country: "Lesotho", flagUrl: "/images/flags/lesotho-flag.webp", language: "SeSotho" },
  { id: 9, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "English" },
  { id: 10, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "TshiVenda" },
  { id: 11, country: "Zimbabwe", flagUrl: "/images/flags/zimbabwe-flag.gif", language: "ChiShona" },
  { id: 12, country: "Swaziland", flagUrl: "/images/flags/swaziland-flag.png", language: "SiSwati" },
  // duplicates
  { id: 13, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "IsiXhosa" },
  { id: 14, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "IsiZulu" },
  { id: 15, country: "Botswana", flagUrl: "/images/flags/botswana-flag.webp", language: "SeTswana" },
  { id: 16, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "English" },
  { id: 17, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "SePedi" },
  { id: 18, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "Xitsonga" },
  { id: 19, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "Afrikaans" },
  { id: 20, country: "Lesotho", flagUrl: "/images/flags/lesotho-flag.webp", language: "SeSotho" },
  { id: 21, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "English" },
  { id: 22, country: "South Africa", flagUrl: "/images/flags/south-africa-flag.gif", language: "TshiVenda" },
  { id: 23, country: "Zimbabwe", flagUrl: "/images/flags/zimbabwe-flag.gif", language: "ChiShona" },
  { id: 24, country: "Swaziland", flagUrl: "/images/flags/swaziland-flag.png", language: "SiSwati" }
]
