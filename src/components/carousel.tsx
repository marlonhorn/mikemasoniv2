"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

type Props = {
  title: string;
  images: string[];
  initialIndex?: number;
  onClose: () => void;
};

export function Carousel({ title, images, initialIndex = 0, onClose }: Props) {
  const [current, setCurrent] = useState(initialIndex);
  const touchStartX = useRef<number>(0);

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      {/* Top scrim — ensures header is readable over bright images */}
      <div className="absolute inset-x-0 top-0 z-[9] h-28 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

      {/* Floating header — no bar */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-6">
        <span
          className="text-xs tracking-[0.35em] text-white uppercase"
          style={{ fontFamily: '"Arial Black", Arial, sans-serif', fontWeight: 900 }}
        >
          {title}
        </span>
        <button
          onClick={onClose}
          className="text-2xl leading-none text-white/70 transition-all hover:text-white hover:scale-110 active:scale-95"
          aria-label="Schließen"
        >
          ✕
        </button>
      </div>

      {/* Main image — click to close */}
      <div
        className="relative h-full w-full cursor-pointer overflow-hidden"
        onClick={onClose}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const delta = touchStartX.current - e.changedTouches[0].clientX;
          if (delta > 50) next();
          else if (delta < -50) prev();
        }}
      >
        <Image
          key={current}
          src={images[current]}
          alt={`${title} ${current + 1}`}
          fill
          sizes="100vw"
          priority
          className="pointer-events-none object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/30 transition-colors hover:text-white"
              aria-label="Vorheriges Bild"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
                <polyline points="13,3 6,10 13,17" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/30 transition-colors hover:text-white"
              aria-label="Nächstes Bild"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
                <polyline points="7,3 14,10 7,17" />
              </svg>
            </button>
          </>
        )}

      </div>

      {/* Thumbnails — floating over image */}
      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center gap-2 overflow-x-auto px-5 py-4">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative shrink-0 overflow-hidden transition-opacity ${
                i === current
                  ? "opacity-100 outline outline-1 outline-white"
                  : "opacity-35 hover:opacity-70"
              }`}
              style={{ width: 80, height: 56 }}
              aria-label={`Bild ${i + 1}`}
            >
              <Image src={src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
