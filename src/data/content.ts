export type Category = {
  id: number;
  title: string;
  coverImage: string;
  images: string[];
};

export const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const categories: Category[] = [
  {
    id: 1,
    title: "FASHION",
    coverImage: "/media/FASHION1aa.jpg",
    images: [
      "/media/fash2 (1).jpg",
      "/media/fash3.jpg",
      "/media/fash4.jpg",
      "/media/fash5.jpg",
      "/media/fash6.jpg",
      "/media/fash7.jpg",
      "/media/fash8.jpg",
      "/media/fash9 (1).jpg",
      "/media/fash10.jpg",
      "/media/fash11.jpg",
      "/media/fash12.jpg",
    ],
  },
  {
    id: 2,
    title: "POWER",
    coverImage: "/media/EMOTION1.jpg",
    images: [
      "/media/pow1.jpg",
      "/media/pow2.jpg",
      "/media/pow3.jpg",
      "/media/pow4.jpg",
      "/media/pow5.jpg",
      "/media/pow6.jpg",
      "/media/pow7.jpg",
      "/media/pow8.jpg",
      "/media/pow9.jpg",
      "/media/pow10.jpg",
      "/media/pow11.jpg",
      "/media/pow12.jpg",
    ],
  },
  {
    id: 3,
    title: "CELEBS",
    coverImage: "/media/CELEBS1.jpg",
    images: [
      "/media/celeb1.jpg",
      "/media/celeb2.jpg",
      "/media/celeb3.jpg",
      "/media/celeb4.jpg",
      "/media/celeb5.jpg",
      "/media/celeb6.jpg",
      "/media/celeb7.jpg",
      "/media/celeb8.jpg",
      "/media/celeb9.jpg",
      "/media/celeb10.jpg",
      "/media/celeb11.jpg",
      "/media/celeb12.jpg",
      "/media/celeb13.jpg",
      "/media/celeb14.jpg",
      "/media/celeb15.jpg",
      "/media/celeb16.jpg",
    ],
  },
  {
    id: 4,
    title: "STILLS",
    coverImage: "/media/mikemasoniSTILLS1.jpg",
    images: [
      "/media/still1.jpg",
      "/media/still2.jpg",
      "/media/still3.jpg",
      "/media/still4.jpg",
      "/media/still5.jpg",
      "/media/still6.jpg",
      "/media/still7.jpg",
      "/media/still8.jpg",
      "/media/still9.jpg",
      "/media/still10.jpg",
      "/media/still11.jpg",
      "/media/still12.jpg",
      "/media/still13.jpg",
      "/media/still14.jpg",
      "/media/still15.jpg",
      "/media/still16.jpg",
    ],
  },
];

export const services = [
  { title: "Editorial", description: "Fashion-forward visual storytelling for magazines, campaigns, and lookbooks." },
  { title: "Commercial", description: "Premium brand photography and video content for modern products and campaigns." },
  { title: "Portraits", description: "Refined portraits with cinematic lighting and expressive direction." },
  { title: "Events", description: "Elegant event coverage capturing energy, atmosphere, and key moments." },
];
