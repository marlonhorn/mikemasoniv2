"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { categories, type Category } from "@/data/content";
import { Reveal } from "@/components/reveal";
import { Carousel } from "@/components/carousel";

function CategoryCard({
  category,
  onOpen,
}: {
  category: Category;
  onOpen: (startIndex: number) => void;
}) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || category.images.length <= 1) return;
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % category.images.length),
      3000
    );
    return () => clearInterval(id);
  }, [visible, category.images.length]);

  return (
    <button
      ref={ref}
      onClick={() => onOpen(current)}
      className="group block w-full cursor-pointer"
    >
      <article className="relative overflow-hidden bg-black">
        <div className="relative h-screen w-full">
          <div className="absolute inset-0">
            {category.images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={category.title}
                fill
                sizes="100vw"
                className={`object-cover transition-opacity duration-[1400ms] ease-in-out ${
                  i === current ? "opacity-90" : "opacity-0"
                }`}
                style={{
                  objectPosition: category.objectPositions?.[i] ?? "center",
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-2xl tracking-[0.4em] text-white uppercase md:text-4xl transition-opacity duration-700"
              style={{
                fontFamily: '"Arial Black", Arial, sans-serif',
                fontWeight: 900,
                opacity: current === 0 ? 1 : 0,
              }}
            >
              {category.title}
            </span>
          </div>
        </div>
      </article>
    </button>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<{ catIdx: number; imgIdx: number } | null>(null);

  return (
    <>
      <section id="portfolio">
        <Reveal>
          <div>
            {categories.map((category, i) => (
              <div key={category.id} id={category.title.toLowerCase()}>
                <CategoryCard
                  category={category}
                  onOpen={(imgIdx) => setActive({ catIdx: i, imgIdx })}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {active !== null && (
        <Carousel
          title={categories[active.catIdx].title}
          images={categories[active.catIdx].images}
          initialIndex={active.imgIdx}
          onClose={() => setActive(null)}
          objectPositions={categories[active.catIdx].objectPositions}
          objectFits={categories[active.catIdx].objectFits}
        />
      )}
    </>
  );
}
