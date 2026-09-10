import { useState, useEffect } from "react";

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
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#26263a]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "py-3.5" : "py-5"
        }`}
      >
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-white"
        >
          Kent<span className="text-[#8b5cf6]">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = activeSection === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`group relative text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                {l.label}
                {/* Underline indicator */}
                <span
                  className={`absolute left-0 -bottom-1 h-px bg-[#8b5cf6] transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
          <a
            href="#contact"
            className="ml-4 text-sm font-medium bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-5 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-white transition-transform duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
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
            className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-5 py-3 rounded-full text-center font-medium mt-2 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}