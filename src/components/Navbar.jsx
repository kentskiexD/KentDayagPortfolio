import { useState, useEffect } from "react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#8b5cf6]/20 ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          : "bg-[#0a0a0f]/10 backdrop-blur-sm"
      }`}
    >
      {/* ✨ The Running Light - Permanently Visible */}
      <div className="navbar-light-track" />

      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* LOGO */}
        <a href="#home" className="flex items-center">
          <img 
            src={assetPath("/images/logo.png")} 
            alt="Kent Dayag Logo" 
            className="h-10 w-auto object-contain" 
          />
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const isActive = activeSection === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`group relative text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "nav-pill nav-pill-active"
                    : "text-[#a1a1aa] hover:text-white px-4 py-2"
                }`}
              >
                {/* Show the diamond ONLY if active */}
                {isActive && (
                  <div className="w-1.5 h-1.5 rotate-45 bg-white shadow-[0_0_8px_#ffffff] rounded-[1px]" />
                )}
                {l.label}
              </a>
            );
          })}

          {/* HIRE ME BUTTON */}
          <a
            href="#contact"
            className="ml-4 text-sm font-bold bg-transparent hover:bg-[#8b5cf6]/10 text-white px-6 py-2 rounded-full transition-all duration-300 border-2 border-[#8b5cf6] shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] flex items-center gap-2"
          >
            Hire Me
            <span className="text-[#a78bfa]">›</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 w-full bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#26263a] ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#a1a1aa] hover:text-white transition-colors py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-[#8b5cf6] text-white px-5 py-3 rounded-full text-center font-bold mt-2"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}