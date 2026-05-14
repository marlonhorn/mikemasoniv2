import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
}