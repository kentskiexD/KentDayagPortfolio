import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Clapperboard,
  Image as ImageIcon,
  Mic,
  GraduationCap,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const highlights = [
  {
    icon: Clapperboard,
    title: "AI Video",
    subtitle: "Short-form content",
  },
  {
    icon: ImageIcon,
    title: "AI Visuals",
    subtitle: "Product & social content",
  },
  {
    icon: Mic,
    title: "AI Voiceover",
    subtitle: "Narrated short videos",
  },
  {
    icon: GraduationCap,
    title: "BSIT • Cum Laude",
    subtitle: "Information Technology",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  const leftContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const leftItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: EASE },
    },
  };

  const rightContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  const rightItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-32 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Text */}
          <motion.div
            variants={leftContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-6"
          >
            <motion.span
              variants={leftItem}
              className="text-xs uppercase tracking-widest text-[#8b5cf6] font-semibold"
            >
              About Me
            </motion.span>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: EASE,
                    delay: shouldReduceMotion ? 0 : 0.1,
                  },
                },
              }}
              className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mt-3 text-balance"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">
                Kent
              </span>
              .
            </motion.h2>

            <motion.p
              variants={leftItem}
              className="text-lg text-white leading-relaxed mt-8"
            >
              I'm a{" "}
              <span className="text-[#a78bfa] font-medium">
                BSIT graduate, Cum Laude
              </span>
              , and an{" "}
              <span className="text-[#a78bfa] font-medium">
                AI Content Creator
              </span>{" "}
              focused on creating engaging digital content with AI.
            </motion.p>

            <motion.p
              variants={leftItem}
              className="text-[#a1a1aa] text-lg leading-relaxed mt-5"
            >
              I create{" "}
              <span className="text-white font-medium">
                short-form AI videos, AI-generated visuals, product content,
                and social media creatives
              </span>{" "}
              designed to help ideas, products, and brands stand out.
            </motion.p>

            <motion.p
              variants={leftItem}
              className="text-[#a1a1aa] text-lg leading-relaxed mt-5"
            >
              I combine AI tools with creative direction, editing, and visual
              storytelling to turn simple concepts into polished content for
              today's digital platforms.
            </motion.p>

            <motion.p
              variants={leftItem}
              className="text-[#a1a1aa] text-lg leading-relaxed mt-5"
            >
              Whether you need a short Reel, an AI-powered product visual, or
              creative content for your social media, I can help bring your
              idea to life.
            </motion.p>
          </motion.div>

          {/* RIGHT: Highlights */}
          <motion.div
            variants={rightContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-6 lg:pt-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={rightItem}
                    className="group relative p-6 rounded-2xl bg-[#13131e] border border-[#26263a] hover:border-[#8b5cf6]/50 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-15px_rgba(139,92,246,0.4)]"
                    style={{
                      transitionProperty:
                        "transform, border-color, box-shadow",
                      transitionDuration: "400ms",
                      transitionTimingFunction:
                        "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center mb-4 group-hover:bg-[#8b5cf6]/20 transition-colors duration-400">
                      <Icon
                        className="w-5 h-5 text-[#a78bfa]"
                        strokeWidth={1.75}
                      />
                    </div>
                    <p className="text-base font-bold text-white leading-tight">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#a1a1aa] mt-1.5 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}