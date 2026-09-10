import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Clapperboard,
  ShoppingBag,
  Smartphone,
  Wand2,
  Film,
  Scissors,
  Palette,
  Sparkles,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const services = [
  {
    icon: Clapperboard,
    title: "AI Video Creation",
    description:
      "Cinematic AI-generated videos from concept to final cut.",
  },
  {
    icon: ShoppingBag,
    title: "AI Product Commercials",
    description:
      "Attention-grabbing product ads built for brands and launches.",
  },
  {
    icon: Smartphone,
    title: "Social Media Video",
    description:
      "Vertical, scroll-stopping content for Reels, TikTok, and Shorts.",
  },
  {
    icon: Wand2,
    title: "AI Image-to-Video",
    description:
      "Turn still visuals into motion with smooth, natural AI animation.",
  },
  {
    icon: Film,
    title: "Cinematic AI Scenes",
    description:
      "Rich, film-like scenes with mood, depth, and controlled pacing.",
  },
  {
    icon: Sparkles,
    title: "Short-Form Content",
    description:
      "Fast, hook-driven videos designed to grow reach and engagement.",
  },
  {
    icon: Scissors,
    title: "Video Editing",
    description:
      "Clean cuts, color grading, sound design, and polished delivery.",
  },
  {
    icon: Palette,
    title: "Creative Visual Direction",
    description:
      "Art direction and visual concepts that match your brand.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 lg:py-32 px-6 lg:px-8 bg-[#0c0c14]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mb-14 lg:mb-20"
        >
          <span className="text-xs uppercase tracking-widest text-[#8b5cf6] font-semibold">
            Services
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mt-3 text-balance">
            What I can{" "}
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">
              create for you
            </span>
            .
          </h2>
          <p className="text-[#a1a1aa] mt-5 text-lg leading-relaxed">
            Whether you need a single ad or a full content series — here's how
            I can help.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative p-6 rounded-2xl bg-[#13131e] border border-[#26263a] hover:border-[#8b5cf6]/50 transition-colors duration-400 hover:-translate-y-1"
                style={{
                  transitionProperty: "transform, border-color",
                  transitionDuration: "400ms",
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center mb-5 group-hover:bg-[#8b5cf6]/20 transition-colors duration-400">
                  <Icon
                    className="w-6 h-6 text-[#a78bfa]"
                    strokeWidth={1.75}
                  />
                </div>

                <h3 className="text-lg font-bold text-white leading-tight mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  {service.description}
                </p>

                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(139,92,246,0.15)]" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}