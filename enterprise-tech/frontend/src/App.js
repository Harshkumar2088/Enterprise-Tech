import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Toaster } from "./components/ui/sonner";
import { setLenis } from "./lib/scroll";
import { Nav } from "./components/site/Nav";
import { Hero } from "./components/site/Hero";
import { Marquee } from "./components/site/Marquee";
import { About } from "./components/site/About";
import { Services } from "./components/site/Services";
import { Solutions } from "./components/site/Solutions";
import { Industries } from "./components/site/Industries";
import { Approach } from "./components/site/Approach";
import { WhyUs } from "./components/site/WhyUs";
import { Projects } from "./components/site/Projects";
import { Tech } from "./components/site/Tech";
import { Careers } from "./components/site/Careers";
import { CTA } from "./components/site/CTA";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    setLenis(lenis);
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <div className="site grain">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Solutions />
        <Industries />
        <Approach />
        <WhyUs />
        <Projects />
        <Tech />
        <Careers />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;
