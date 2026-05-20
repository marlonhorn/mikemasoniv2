import { Reveal } from "./reveal";

export function Video() {
  return (
    <section className="px-[10vw] py-24">
      <Reveal>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2
              className="text-2xl tracking-[0.35em] md:text-4xl"
              style={{ fontFamily: '"Arial Black", Arial, sans-serif', fontWeight: 900 }}
            >
              Featured Work
            </h2>
            <p
              className="text-sm tracking-[0.2em] text-white/70"
              style={{ fontFamily: '"Arial Black", Arial, sans-serif', fontWeight: 900 }}
            >
              Recent video production
            </p>
          </div>
          
          <div className="relative w-full pt-[56.25%]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/RWkFov9AV60"
              title="Mike Masoni - Featured Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
