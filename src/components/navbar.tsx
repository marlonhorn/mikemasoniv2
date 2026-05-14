"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const portfolioHref = pathname === "/" ? "#portfolio" : "/#portfolio";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-white/10 bg-black/70 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto] items-center px-6 lg:px-12">
          {pathname === "/" ? (
            <a href="#home" className="text-xs tracking-[0.35em] text-white uppercase">
              Mike Masoni
            </a>
          ) : (
            <Link href="/" className="text-xs tracking-[0.35em] text-white uppercase">
              Mike Masoni
            </Link>
          )}
          <nav className="hidden items-center gap-8 justify-self-end md:flex">
            <Link href={portfolioHref} className="text-xs tracking-[0.3em] text-white/70 uppercase transition hover:text-white">
              Portfolio
            </Link>
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.3em] text-white/70 uppercase transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className="text-xs tracking-[0.3em] text-white uppercase md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black/95 py-10 transition-all duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col px-6 lg:px-12">
          <div className="mb-14 flex items-center justify-between">
            {pathname === "/" ? (
              <a href="#home" className="text-xs tracking-[0.35em] text-white uppercase">
                Mike Masoni
              </a>
            ) : (
              <Link href="/" className="text-xs tracking-[0.35em] text-white uppercase">
                Mike Masoni
              </Link>
            )}
            <button
              className="text-xs tracking-[0.3em] text-white uppercase"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              Close
            </button>
          </div>
          <nav className="flex flex-col gap-7">
            <Link
              href={portfolioHref}
              onClick={() => setOpen(false)}
              className="text-2xl font-light tracking-wide text-white uppercase"
            >
              Portfolio
            </Link>
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-light tracking-wide text-white uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
