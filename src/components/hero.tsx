import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-[10vw]">
      <div className="absolute inset-0 bg-[url('/media/FASHION1aa.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/35" />
      <Reveal className="relative z-10 text-center text-white">
        <h1
          className="text-4xl tracking-[0.45em] text-white uppercase md:text-7xl"
          style={{ fontFamily: '"Arial Black", Arial, sans-serif', fontWeight: 900 }}
        >
          MIKE MASONI
        </h1>
        <p
          className="mt-5 text-sm tracking-[0.6em] text-white/85 uppercase md:text-lg"
          style={{ fontFamily: '"Arial Black", Arial, sans-serif', fontWeight: 900 }}
        >
          PHOTOGRAPHER &amp; DIRECTOR
        </p>
      </Reveal>
    </section>
  );
}
