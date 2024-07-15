import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import WhatsNew from "@/components/WhatsNew";

export default function Home() {
  return (
    <main >
      <header>
        <Navbar />
        <Hero />
      </header>
      <div>
        <About />
        <Services/>
        <Portfolio />
        <WhatsNew />
        <Footer />
      </div>
    </main>
  );
}
