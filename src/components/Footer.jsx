import { Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const nav = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-[#26263a] bg-[#0a0a0f] overflow-hidden">
      {/* Top divider glow */}
      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-white inline-block"
            >
              Kent<span className="text-[#8b5cf6]">.</span>
            </a>
            <p className="text-sm text-[#a1a1aa] mt-4 max-w-xs leading-relaxed">
              Freelance AI video creator crafting cinematic visuals that get
              attention.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8b5cf6] font-semibold mb-5">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {nav.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-300 w-fit"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8b5cf6] font-semibold mb-5">
              Get In Touch
            </h4>

            <div className="flex items-center gap-2 text-sm text-[#a1a1aa] break-all">
  <Mail className="w-4 h-4 shrink-0" />
  dayagkent09@gmail.com
</div>

<div className="flex items-center gap-2 text-sm text-[#a1a1aa] mt-3">
  <span className="text-[#8b5cf6]">📱</span>
  0969 220 1333
</div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#8b5cf6] hover:text-[#a78bfa] transition-colors duration-300"
            >
              Start a project
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[#26263a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#71717a]">
            © {year} Kent Dayag. All rights reserved.
          </p>
          <p className="text-xs text-[#71717a]">
            Freelance AI Video Creator · Built with React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}