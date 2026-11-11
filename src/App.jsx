import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import FeaturedBillboard from "./sections/FeaturedBillboard"; // 🌟 Import the marquee
import VideoShowcase from "./sections/VideoShowcase";
import About from "./sections/About";
import Services from "./sections/Services";
import WhyMe from "./sections/WhyMe";
import CTA from "./sections/CTA";
import CustomCursor from "./components/CustomCursor";
import VideoModal from "./components/VideoModal"; // 🌟 Import the modal
import { projects } from "./data/projects"; // 🌟 Import your data

export default function App() {
  const lenisRef = useRef(null);

  // 🌟 Pick the array of your best videos for the marquee
  // Change these IDs to any project you want to feature
  const showcaseProjects = projects.filter((p) => 
    [5, 9, 10, 25].includes(p.id) 
  );
  
  // 🌟 State to open the video modal
  const [selectedBillboard, setSelectedBillboard] = useState(null);

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
    <div className="min-h-screen text-[#f5f5f7] antialiased relative">
      <CustomCursor />
      
      {/* Content Wrapper */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          
          {/* 🌟 MARQUEE / BILLBOARD SECTION (Passes the array) */}
          <FeaturedBillboard 
            projects={showcaseProjects} 
            onPlay={(project) => setSelectedBillboard(project)} 
          />
          
          <VideoShowcase />
          <About />
          <Services />
          <WhyMe />
          <CTA />
        </main>
        <Footer />
      </div>

      {/* 🌟 Render the modal if any Billboard video is clicked */}
      {selectedBillboard && (
        <VideoModal 
          project={selectedBillboard} 
          onClose={() => setSelectedBillboard(null)} 
        />
      )}
    </div>
  );
}