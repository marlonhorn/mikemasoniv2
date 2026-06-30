import { Reveal } from "./reveal";

export function Video() {
  return (
    <section className="px-6 py-16">
      <Reveal>
        <div>
          <div className="relative w-full pt-[56.25%]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/hFerY-YFATc"
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
