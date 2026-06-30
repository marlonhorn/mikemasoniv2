export type Category = {
  id: number;
  title: string;
  coverImage: string;
  images: string[];
  objectPositions?: Record<number, string>;
  objectFits?: Record<number, string>;
};

export const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export const heroImages: string[] = [
  "/media/fash1ww.jpg",
  "/media/fash2w.jpg",
  "/media/fash3ww.jpg",
  "/media/fash4w.jpg",
  "/media/fash5w.jpg",
  "/media/fash6ww.jpg",
  "/media/fash7ww.jpg",
  "/media/fash8ww.jpg",
  "/media/fash9ww.jpg",
  "/media/fash10w.jpg",
  "/media/fash11w.jpg",
  "/media/fash12ww.jpg",
  "/media/fash13ww.jpg",
  "/media/fash14ww.jpg",
];

export const categories: Category[] = [
  {
    id: 2,
    title: "LIFESTYLE",
    coverImage: "/media/pow1w.jpg",
    images: [
      "/media/pow1w.jpg",
      "/media/pow2ww.jpg",
      "/media/pow3ww.jpg",
      "/media/pow4w.jpg",
      "/media/poww4w.jpg",
      "/media/pow11w.jpg",
      "/media/pow10w.jpg",
       "/media/pow6w.jpg",
      "/media/pow5w.jpg",
      "/media/pow7w.jpg",
      "/media/pow8w.jpg",
      "/media/pow9w.jpg",
      "/media/pow12ww.jpg",
    ],
  },
  {
    id: 3,
    title: "CELEBS",
    coverImage: "/media/celeb1w.jpg",
    objectPositions: {
      2: "center top",
      8: "center top",
      9: "center bottom",
      10: "center top",
    },
    images: [
      "/media/celeb1w.jpg",
      "/media/celeb2w.jpg",
      "/media/celeb3w.jpg",
      "/media/celeb4w.jpg",
      "/media/celeb5w.jpg",
      "/media/celeb6w.jpg",
      "/media/celeb7w.jpg",
      "/media/celeb8w.jpg",
      "/media/celeb9w.jpg",
      "/media/celeb10w.jpg",
      "/media/celeb11w.jpg",
      "/media/celeb12.jpg",
      "/media/celeb13w.jpg",
      "/media/celeb14w.jpg",
    ],
  },
  {
    id: 4,
    title: "STILLS",
    coverImage: "/media/still1w.jpg",
    objectFits: {
      1: "contain",
    },
    images: [
      "/media/still1w.jpg",
      "/media/still2new.jpg",
      "/media/still3w.jpg",
      "/media/still4w.jpg",
      "/media/still5w.jpg",
      "/media/still6w.jpg",
      "/media/still7w.jpg",
      "/media/still8ww.jpg",
      "/media/still9w.jpg",
      "/media/still10w.jpg",
      "/media/still11w.jpg",
      "/media/still12ww.jpg",
      "/media/still13w.jpg",
      "/media/still14www.jpg",
      "/media/still15ww.jpg",
      "/media/still16ww.jpg",
    ],
  },
];

export const services = [
  { title: "Editorial", description: "Fashion-forward visual storytelling for magazines, campaigns, and lookbooks." },
  { title: "Commercial", description: "Premium brand photography and video content for modern products and campaigns." },
  { title: "Portraits", description: "Refined portraits with cinematic lighting and expressive direction." },
  { title: "Events", description: "Elegant event coverage capturing energy, atmosphere, and key moments." },
];
