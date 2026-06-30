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
        className="relative flex min-h-screen cursor-pointer items-center justify-center overflow-hidden"
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
        <div className={`absolute z-10 px-[10vw] text-center transition-opacity duration-[1000ms] ${current === 0 ? "opacity-100" : "opacity-0"}`}>
          <h1
            className="text-4xl tracking-[0.35em] text-white uppercase md:text-6xl"
            style={{ fontFamily: '"Arial Black", Arial, sans-serif', fontWeight: 900 }}
          >
            MIKE MASONI
          </h1>
          <p
            className="mt-5 text-xl tracking-[0.45em] text-white uppercase md:text-2xl"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 400 }}
          >
            PHOTOGRAPHER &amp; DIRECTOR
          </p>
        </div>

        {/* Slide 2: category title */}
        <div className={`absolute z-10 px-[10vw] text-center transition-opacity duration-[1000ms] ${current === 1 ? "opacity-100" : "opacity-0"}`}>
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
