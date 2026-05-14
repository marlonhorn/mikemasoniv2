import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 lg:px-12">
      <div className="absolute inset-0 bg-[url('/media/hero.svg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/35" />
      <Reveal className="relative z-10 text-center text-white">
        <h1
          className="text-4xl font-medium tracking-[0.45em] text-white uppercase md:text-7xl"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          MIKE MASONI
        </h1>
        <p
          className="mt-5 text-sm font-light tracking-[0.6em] text-white/85 uppercase md:text-lg"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          PHOTO &amp; VIDEOGRAPH
        </p>
      </Reveal>
    </section>
  );
}
