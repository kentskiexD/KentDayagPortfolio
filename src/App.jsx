import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import VideoShowcase from "./sections/VideoShowcase";
import About from "./sections/About";
import Services from "./sections/Services";
import WhyMe from "./sections/WhyMe";
import CTA from "./sections/CTA";

export default function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false, // native touch on mobile feels better
    });

    lenisRef.current = lenis;

    // Animation loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Intercept anchor clicks for smooth scroll to section
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const id = target.getAttribute("href");
      if (!id || id === "#") return;

      const el = document.querySelector(id);
      if (!el) return;

      e.preventDefault();
      lenis.scrollTo(el, { offset: -80, duration: 1.2 });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
   <div className="min-h-screen text-[#f5f5f7] antialiased">
      <Navbar />
      <main>
        <Hero />
        <VideoShowcase />
        <About />
        <Services />
        <WhyMe />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}