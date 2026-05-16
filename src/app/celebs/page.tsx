import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

// Replace these paths with your actual celeb photos
const galleryImages = [
  { src: "/media/CELEBS1.jpg", alt: "Mike Masoni — Celebs 01" },
  { src: "/media/FASHION1aa.jpg", alt: "Mike Masoni — Celebs 02" },
  { src: "/media/STILLS1.jpg", alt: "Mike Masoni — Celebs 03" },
  { src: "/media/EMOTION1.jpg", alt: "Mike Masoni — Celebs 04" },
  { src: "/media/mikemasoniSTILLS1.jpg", alt: "Mike Masoni — Celebs 05" },
];

export default function CelebsPage() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <Image
          src="/media/CELEBS1.jpg"
          alt="Mike Masoni — Celebs"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

        <div className="relative z-10 text-center">
          <p className="mb-3 text-xs tracking-[0.4em] text-white/45">01 / CATEGORY</p>
          <h1 className="text-5xl font-light tracking-[0.45em] text-white md:text-8xl">
            CELEBS
          </h1>
        </div>
      </section>

      <main>
        {/* Editorial intro */}
        <section className="px-[10vw] py-20 lg:py-28">
          <Reveal>
            <div className="mb-16 flex items-start justify-between">
              <span className="text-xs tracking-[0.4em] text-white/35">01 / CATEGORY</span>
              <Link
                href="/#portfolio"
                className="text-xs tracking-[0.4em] text-white/45 transition-colors duration-300 hover:text-white"
              >
                ← BACK TO GALLERY
              </Link>
            </div>

            <p className="mb-3 text-xs tracking-[0.4em] text-white/35">MIKE MASONI</p>
            <h2 className="mb-10 text-4xl font-light tracking-[0.35em] text-white md:text-6xl">
              CELEBS
            </h2>
            <p className="max-w-xl text-sm leading-[2.4] tracking-[0.14em] text-white/60">
              CANDID POWER AND CURATED PRESENCE — PORTRAITS THAT CAPTURE PERSONALITY AT ITS
              MOST UNFILTERED. SHOT WITH INTENT, COMPOSED WITH PURPOSE, AND A DIRECTNESS
              THAT MAKES EVERY FRAME COUNT.
            </p>
          </Reveal>

        </section>

        {/* Image series */}
        <section className="space-y-24 px-[10vw] pb-28">
          {galleryImages.map((img, i) => (
            <Reveal key={i}>
              <div className="relative w-full overflow-hidden rounded-sm" style={{ height: "85vh" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
