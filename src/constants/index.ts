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

export const logos: { name: string; src: string }[] = [
  { name: "Google", src: "/globe.svg" },
  { name: "Microsoft", src: "/globe.svg" },
  { name: "Apple", src: "/globe.svg" },
  { name: "Amazon", src: "/globe.svg" },
  { name: "Netflix", src: "/globe.svg" },
  { name: "Tesla", src: "/globe.svg" },
  { name: "Meta", src: "/globe.svg" },
  { name: "Adobe", src: "/globe.svg" },
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
    name: "companyName",
    image: "/images/Wooven.png",
    status: "Gold",
  },
  {
    id: 2,
    name: "companyName",
    image: "/images/Wooven.png",
    status: "Silver",
  },
  {
    id: 3,
    name: "companyName",
    image: "/images/Wooven.png",
    status: "Gold",
  }
]
