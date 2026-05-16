"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredCategories } from "@/data/content";
import { Reveal } from "@/components/reveal";

export function Portfolio() {
  return (
    <section id="portfolio" className="px-[10vw] py-24">
      <Reveal>
        <div className="mb-12">
          <div>
            <p className="mb-4 text-xs tracking-[0.35em] text-white/60 uppercase">Portfolio</p>
            <h2 className="max-w-2xl text-3xl font-light text-white md:text-5xl">
              Four signature categories
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              href={`/${category.title.toLowerCase()}`}
              className="group block cursor-pointer"
            >
              <article className="relative overflow-hidden rounded-md border border-white/10 bg-black transition-all duration-300 group-hover:border-white/30 group-hover:shadow-lg group-hover:shadow-white/10">
                <div className="relative h-[76vh] min-h-[560px] w-full md:h-[84vh]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="100vw"
                    className="object-cover object-center opacity-90 transition duration-500 group-hover:scale-[1.05] group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition duration-300 group-hover:from-black/60 group-hover:via-black/10" />
                  <span className="absolute bottom-7 left-7 text-lg tracking-[0.35em] text-white uppercase md:text-2xl transition duration-300 group-hover:bottom-8 group-hover:left-8">
                    {category.title}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
