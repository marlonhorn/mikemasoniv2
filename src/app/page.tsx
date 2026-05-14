import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";
import { Video } from "@/components/video";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Video />
      </main>
      <Footer />
    </div>
  );
}
