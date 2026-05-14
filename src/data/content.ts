export type FeaturedCategory = {
  id: number;
  title: "CELEBS" | "STILLS" | "FASHION" | "EMOTION";
  image: string;
};

export const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const featuredCategories: FeaturedCategory[] = [
  { id: 1, title: "CELEBS", image: "/media/CELEBS1.jpg" },
  { id: 2, title: "STILLS", image: "/media/mikemasoniSTILLS1.jpg" },
  { id: 3, title: "FASHION", image: "/media/FASHION1aa.jpg" },
  { id: 4, title: "EMOTION", image: "/media/EMOTION1.jpg" },
];

export const services = [
  { title: "Editorial", description: "Fashion-forward visual storytelling for magazines, campaigns, and lookbooks." },
  { title: "Commercial", description: "Premium brand photography and video content for modern products and campaigns." },
  { title: "Portraits", description: "Refined portraits with cinematic lighting and expressive direction." },
  { title: "Events", description: "Elegant event coverage capturing energy, atmosphere, and key moments." },
];
