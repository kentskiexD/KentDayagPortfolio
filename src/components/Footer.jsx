import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Mail, Play, Briefcase } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

export default function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const nav = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Mail, href: "mailto:dayagkent09@gmail.com", label: "Email" },
    { icon: Play, href: "#", label: "YouTube" },
    { icon: Briefcase, href: "#", label: "LinkedIn" },
  ];

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }
      }
      transition={{ duration: 0.7, ease: EASE }}
      className="relative border-t border-[#26263a] bg-[#0a0a0f] overflow-hidden"
    >
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

            <div className="flex gap-3 mt-6">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      s.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-[#26263a] flex items-center justify-center text-[#a1a1aa] hover:border-[#8b5cf6] hover:text-[#a78bfa] hover:bg-[#8b5cf6]/10 transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>
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
            <a
              href="mailto:dayagkent09@gmail.com"
              className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-300 break-all"
            >
              dayagkent09@gmail.com
            </a>
            <p className="text-sm text-[#a1a1aa] mt-3">
              Lamaacan, Argao, Cebu
            </p>
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

        <div className="mt-14 pt-8 border-t border-[#26263a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#71717a]">
            © {year} Kent Dayag. All rights reserved.
          </p>
          <p className="text-xs text-[#71717a]">
            Freelance AI Video Creator · Built with React + Tailwind
          </p>
        </div>
      </div>
    </motion.footer>
  );
}