import Link from "next/link";
import { navLinks } from "@/data/content";

const arialBlack = { fontFamily: '"Arial Black", Arial, sans-serif', fontWeight: 900 };

export function Footer() {
  return (
    <footer id="contact" className="pink-on-dark border-t border-white/10 px-[10vw] py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p
          className="max-w-none text-[clamp(1.5rem,4vw,3rem)] leading-tight tracking-[0.14em] text-white uppercase"
          style={arialBlack}
        >
          Work with Mike Masoni
        </p>
        <p
          className="mt-6 max-w-3xl text-sm leading-relaxed tracking-[0.2em] text-white/90 uppercase md:text-base"
          style={arialBlack}
        >
          For photoshoots, directing opportunities, image licensing, press, or general enquiries: contact creative.progress@yahoo.com.
        </p>

        <div
          className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base tracking-[0.35em] text-white/80 uppercase md:text-lg"
          style={arialBlack}
        >
          <Link href="/" className="transition hover:text-white">
            Portfolio
          </Link>
          {navLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base tracking-[0.35em] text-white/80 uppercase md:text-lg"
          style={arialBlack}
        >
          <a href="https://www.youtube.com/@mikemasoni363" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            YouTube
          </a>
          <a href="https://www.instagram.com/mikemasoni_official/" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        </div>

        <p className="mt-10 text-[11px] tracking-[0.32em] text-white/80 uppercase" style={arialBlack}>
          © Mike Masoni
        </p>
      </div>
    </footer>
  );
}
