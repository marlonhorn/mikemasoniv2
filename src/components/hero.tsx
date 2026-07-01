"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { heroImages } from "@/data/content";
import { Carousel } from "@/components/carousel";

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [carouselOpen, setCarouselOpen] = useState(false);

  const objectPositions: Record<number, string> = {
    0: "center bottom",
    7: "center top",
    9: "center top",
    11: "center bottom",
  };

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % heroImages.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onFashion = () => setCurrent(1);
    window.addEventListener("hero-fashion", onFashion);
    return () => window.removeEventListener("hero-fashion", onFashion);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative flex aspect-[4/3] w-full cursor-pointer items-center justify-center overflow-hidden md:aspect-auto md:min-h-screen"
        onClick={() => setCarouselOpen(true)}
      >
        <div className="absolute inset-0">
          {heroImages.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt="Mike Masoni"
              fill
              sizes="100vw"
              priority={i === 0}
              className={`object-cover transition-opacity duration-[1400ms] ease-in-out ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
              style={{ objectPosition: objectPositions[i] ?? "center" }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/40" />

        {/* Slide 1: name + subtitle */}
        <div className={`absolute inset-x-0 z-10 px-[10vw] text-center transition-opacity duration-[1000ms] ${current === 0 ? "opacity-100" : "opacity-0"}`}>
          <h1
            className="text-3xl tracking-[0.25em] text-white uppercase md:text-6xl"
            style={{ fontFamily: '"Arial Black", Arial, sans-serif', fontWeight: 900, paddingLeft: '0.25em' }}
          >
            MIKE MASONI
          </h1>
          <p
            className="mt-3 text-[10px] tracking-[0.4em] text-white/80 uppercase md:mt-5 md:text-sm"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 400, paddingLeft: '0.4em' }}
          >
            PHOTOGRAPHER &amp; DIRECTOR
          </p>
        </div>

        {/* Slide 2: category title */}
        <div className={`absolute inset-x-0 z-10 px-[10vw] text-center transition-opacity duration-[1000ms] ${current === 1 ? "opacity-100" : "opacity-0"}`}>
          <span
            className="text-2xl tracking-[0.4em] text-white uppercase md:text-4xl"
            style={{ fontFamily: '"Arial Black", Arial, sans-serif', fontWeight: 900 }}
          >
            FASHION
          </span>
        </div>
      </section>

      {carouselOpen && (
        <Carousel
          title="FASHION"
          images={heroImages}
          initialIndex={current}
          onClose={() => setCarouselOpen(false)}
          objectPositions={objectPositions}
        />
      )}
    </>
  );
}
