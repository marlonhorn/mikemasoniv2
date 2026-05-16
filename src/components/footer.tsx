import Link from "next/link";
import { navLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-[10vw] py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="max-w-none text-[clamp(1.5rem,4vw,3rem)] font-light leading-tight tracking-[0.14em] text-white uppercase">
          Collaborate with
          <br />
          Mike Masoni
        </p>
        <p className="mt-6 max-w-3xl text-sm font-light leading-relaxed tracking-[0.2em] text-white/65 uppercase md:text-base">
          For photoshoots, directing opportunities, image licensing, press, or general enquiries: contact creative.progress@yahoo.de.
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs tracking-[0.35em] text-white/55 uppercase md:text-sm">
          <Link href="/" className="transition hover:text-white">
            Portfolio
          </Link>
          {navLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs tracking-[0.35em] text-white/45 uppercase md:text-sm">
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            YouTube
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            Instagram
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 text-[11px] tracking-[0.32em] text-white/35 uppercase sm:flex-row sm:gap-4">
          <span>© {new Date().getFullYear()} Mike Masoni</span>
          <span className="hidden sm:block">/</span>
          <span>Photography / Videography / Direction</span>
        </div>
      </div>
    </footer>
  );
}
