import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";

export default function ServicesPage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  );
}