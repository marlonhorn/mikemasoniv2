"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const arialBlack = { fontFamily: '"Arial Black", Arial, sans-serif', fontWeight: 900 };

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const base = pathname === "/" ? "" : "/";

  const menuLinks = [
    { label: "Fashion",  href: `${base}#home`,     delay: 60 },
    { label: "Lifestyle", href: `${base}#lifestyle`, delay: 120 },
    { label: "Celebs",   href: `${base}#celebs`,   delay: 180 },
    { label: "Stills",   href: `${base}#stills`,   delay: 240 },
    { label: "About",    href: "/about",            delay: 320 },
    { label: "Contact",  href: "/#contact",         delay: 380 },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-20">

        {/* Logo — centered, fades on scroll */}
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 flex h-20 items-center justify-center transition-all duration-500 ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          {pathname === "/" ? (
            <a href="#home" className="pointer-events-auto text-sm tracking-[0.35em] text-white uppercase transition-opacity hover:opacity-60" style={arialBlack}>
              Mike Masoni
            </a>
          ) : (
            <Link href="/" className="pointer-events-auto text-sm tracking-[0.35em] text-white uppercase transition-opacity hover:opacity-60" style={arialBlack}>
              Mike Masoni
            </Link>
          )}
        </div>

        {/* Burger (left) + Contact (right) — always visible */}
        <div className="flex h-20 items-center justify-between px-5">
          <button
            onClick={() => setOpen(true)}
            className="group flex flex-col gap-[7px] p-3 transition-transform duration-200 active:scale-90"
            aria-label="Menu öffnen"
          >
            <span className="block h-[2px] w-8 bg-white transition-all duration-300 group-hover:w-6" />
            <span className="block h-[2px] w-8 bg-white transition-all duration-300" />
            <span className="block h-[2px] w-8 bg-white transition-all duration-300 group-hover:w-6" />
          </button>

          <Link
            href="/#contact"
            className="text-xs tracking-[0.35em] text-white uppercase transition-all duration-200 hover:opacity-60 active:scale-95"
            style={arialBlack}
          >
            Contact
          </Link>
        </div>
      </header>

      {/* Fullscreen menu overlay */}
      <div
        className={`fixed inset-0 z-[60] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        style={{
          clipPath: open ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          transition: "clip-path 0.65s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        {/* Two-column layout */}
        <div className="flex h-full">
          {/* Left column — nav links */}
          <div className="pink-on-dark relative flex w-full flex-col bg-black px-[10vw] py-10 md:w-1/2">
            {/* Top bar: logo + close */}
            <div className="mb-16 flex items-center justify-between">
              {pathname === "/" ? (
                <a href="#home" onClick={() => setOpen(false)} className="text-xs tracking-[0.35em] text-white uppercase" style={arialBlack}>
                  Mike Masoni
                </a>
              ) : (
                <Link href="/" onClick={() => setOpen(false)} className="text-xs tracking-[0.35em] text-white uppercase" style={arialBlack}>
                  Mike Masoni
                </Link>
              )}
              <button
                onClick={() => setOpen(false)}
                className="text-xs tracking-[0.35em] text-white/60 uppercase transition-all duration-200 hover:text-white active:scale-95"
                aria-label="Menu schließen"
                style={arialBlack}
              >
                Close
              </button>
            </div>

            {/* Nav links with staggered entrance */}
            <nav className="flex flex-col gap-4">
              {menuLinks.map(({ href, label, delay }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => {
                    setOpen(false);
                    if (label === "Fashion") window.dispatchEvent(new Event("hero-fashion"));
                  }}
                  className="text-3xl tracking-[0.2em] text-white uppercase hover:opacity-50 active:scale-[0.98] md:text-4xl"
                  style={{
                    ...arialBlack,
                    transitionProperty: "opacity, transform",
                    transitionTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
                    transitionDuration: "500ms",
                    transitionDelay: open ? `${delay}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(16px)",
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right column — image (hidden on mobile) */}
          <div className="relative hidden flex-1 md:block">
            <Image
              src="/media/fash1.jpg"
              alt="Mike Masoni"
              fill
              sizes="50vw"
              className="object-cover object-[77%_center]"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
