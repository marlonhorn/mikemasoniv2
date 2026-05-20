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
    <div className="fixed inset-0 z-[100] flex flex-col bg-black">
      {/* Header */}
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 px-[10vw]">
        <span
          className="text-sm tracking-[0.4em] text-white uppercase"
          style={{ fontFamily: '"Arial Black", Arial, sans-serif', fontWeight: 900 }}
        >
          {title}
        </span>
        <button
          onClick={onClose}
          className="text-xs tracking-[0.35em] text-white/50 uppercase transition-colors hover:text-white"
        >
          Close
        </button>
      </div>

      {/* Main image — click black area to close */}
      <div
        className="relative flex-1 cursor-pointer overflow-hidden"
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
          className="pointer-events-none object-contain"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-2xl text-white/40 transition-colors hover:text-white"
              aria-label="Vorheriges Bild"
            >
              ←
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-2xl text-white/40 transition-colors hover:text-white"
              aria-label="Nächstes Bild"
            >
              →
            </button>
          </>
        )}

        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-white/35">
          {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </p>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex shrink-0 gap-2 overflow-x-auto border-t border-white/10 px-[10vw] py-4">
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
