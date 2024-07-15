import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

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
      </div>
    </main>
  );
}
