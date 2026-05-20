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
      <article className="relative overflow-hidden rounded-md border border-white/10 bg-black transition-all duration-300 group-hover:border-white/30 group-hover:shadow-lg group-hover:shadow-white/10">
        <div className="relative h-[76vh] min-h-[560px] w-full md:h-[84vh]">
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            {category.images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={category.title}
                fill
                sizes="100vw"
                className={`object-cover object-center transition-opacity duration-[1400ms] ease-in-out ${
                  i === current ? "opacity-90" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-2xl tracking-[0.4em] text-white uppercase md:text-4xl"
              style={{ fontFamily: '"Arial Black", Arial, sans-serif', fontWeight: 900 }}
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
      <section id="portfolio" className="px-[10vw] py-24">
        <Reveal>
          <div className="space-y-8">
            {categories.map((category, i) => (
              <CategoryCard
                key={category.id}
                category={category}
                onOpen={(imgIdx) => setActive({ catIdx: i, imgIdx })}
              />
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
        />
      )}
    </>
  );
}
