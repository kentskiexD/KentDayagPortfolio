import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assetPath } from "../lib/assetPath";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detect scroll position for navbar styling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const sectionIds = ["home", "work", "about", "services", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const links = [
    { label: "Work", href: "#work", id: "work" },
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-[#8b5cf6]/20 ${
        scrolled
          ? "bg-[#0a0a0f]/85 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-3"
          : "bg-[#0a0a0f]/20 backdrop-blur-md py-5"
      }`}
    >
      {/* ✨ Smooth Running Light on the Bottom Border (SUPER SLOW) */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ backgroundPosition: ["200% center", "-200% center"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#4c1d95_25%,#8b5cf6_45%,#ffffff_50%,#8b5cf6_55%,#4c1d95_75%,transparent_100%)] bg-[length:200%_auto]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center transition-all duration-300">
        
        {/* LEFT: Desktop Logo (Elegant & Glowing) */}
        <a href="#home" className="hidden md:flex items-center group relative cursor-pointer z-10">
          {/* Subtle background glow behind the logo on hover */}
          <div className="absolute inset-0 bg-[#8b5cf6]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <img
            src={assetPath("/images/logo.png")}
            alt="Kent Dayag Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 relative z-10"
          />
        </a>

        {/* RIGHT: Nav Links & Hire Me Button */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((l) => {
            const isActive = activeSection === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`group relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive
                    ? "text-white bg-[#8b5cf6]/15 shadow-[inset_0_0_10px_rgba(139,92,246,0.2)]"
                    : "text-[#a1a1aa] hover:text-white hover:bg-white/5"
                }`}
              >
                {/* Active Diamond */}
                {isActive && (
                  <motion.div
                    animate={{ rotate: [45, 405] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="w-1.5 h-1.5 bg-white shadow-[0_0_10px_#ffffff]"
                  />
                )}
                <span className="relative z-10">{l.label}</span>
                
                {/* Hover underline for inactive links */}
                {!isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent transition-all duration-300 group-hover:w-1/2 opacity-0 group-hover:opacity-100" />
                )}
              </a>
            );
          })}

          {/* HIRE ME BUTTON (Running Light Border + Glowing Star) */}
          <a
            href="#contact"
            className="ml-4 relative group rounded-full px-6 py-2 flex items-center gap-2.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#8b5cf6]/20 bg-[#8b5cf6]/10"
          >
            {/* The Running Light Border ONLY */}
            <div className="absolute inset-0 pointer-events-none rounded-full overflow-hidden">
              <motion.div
                animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,transparent_0%,#4c1d95_25%,#8b5cf6_45%,#ffffff_50%,#8b5cf6_55%,#4c1d95_75%,transparent_100%)] bg-[length:200%_auto]"
                style={{
                  padding: '1.5px', // Thickness of the border
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
            </div>

            {/* 🌟 Single Glowing Star Icon */}
            <motion.svg
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.8, 1, 0.8],
                filter: [
                  "drop-shadow(0 0 2px rgba(167,139,250,0.6))",
                  "drop-shadow(0 0 8px rgba(167,139,250,1))",
                  "drop-shadow(0 0 2px rgba(167,139,250,0.6))"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-[#a78bfa] relative z-10"
            >
              <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
            </motion.svg>

            <span className="relative z-10">Hire Me</span>
          </a>
        </div>

        {/* Mobile menu button (and mobile logo on the left) */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Mobile Logo (Left) */}
          <a href="#home" className="flex items-center">
            <img
              src={assetPath("/images/logo.png")}
              alt="Kent Dayag Logo"
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="text-white p-2 relative z-50 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`h-0.5 w-full bg-white transition-all duration-300 rounded-full ${open ? "rotate-45 translate-y-[9px]" : ""}`} />
              <span className={`h-0.5 w-full bg-white transition-all duration-300 rounded-full ${open ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`h-0.5 w-full bg-white transition-all duration-300 rounded-full ${open ? "-rotate-45 -translate-y-[9px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ease-in-out bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#8b5cf6]/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-2">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-base font-medium transition-all duration-300 py-3 px-4 rounded-xl flex items-center gap-3 ${
                activeSection === l.id
                  ? "bg-[#8b5cf6]/15 text-white"
                  : "text-[#a1a1aa] hover:text-white hover:bg-white/5"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {activeSection === l.id && (
                <div className="w-1.5 h-1.5 rotate-45 bg-[#a78bfa] shadow-[0_0_8px_#a78bfa]" />
              )}
              {l.label}
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 relative overflow-hidden rounded-xl bg-[#8b5cf6] text-white px-5 py-4 text-center font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            {/* Mobile Single Glowing Star */}
            <motion.svg
              animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-white"
            >
              <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
            </motion.svg>
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}