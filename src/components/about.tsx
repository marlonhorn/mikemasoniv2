import Image from "next/image";

const bioImages = [
  { src: "/media/bio1.jpg", alt: "Mike Masoni – Work With Me" },
  { src: "/media/bio2.jpg", alt: "Mike Masoni – Editorial & Campaigns" },
  { src: "/media/bio3.jpg", alt: "Mike Masoni – Contact" },
];

export function About() {
  return (
    <section id="about">
      {bioImages.map((img) => (
        <div key={img.src} className="relative w-full aspect-[17/10]">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}
    </section>
  );
}
