import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Zap, Target, Bot, TrendingUp, Eye } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const benefits = [
  {
    icon: Zap,
    title: "Fast Creative Production",
    description:
      "Quick turnaround without sacrificing quality. Ideas move from concept to final cut fast.",
  },
  {
    icon: Target,
    title: "Custom Visual Direction",
    description:
      "Every project is designed around your brand, audience, and goal — not a template.",
  },
  {
    icon: Bot,
    title: "AI-Powered Workflows",
    description:
      "Modern AI tools combined with professional editing for results that look premium.",
  },
  {
    icon: TrendingUp,
    title: "Built for Social Media",
    description:
      "Videos designed to perform on Reels, TikTok, Shorts, and paid ads — where attention lives.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description:
      "Pacing, color, sound, and story — every frame is considered before delivery.",
  },
];

export default function WhyMe() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const isLeftInView = useInView(leftRef, { once: true, amount: 0.3 });
  const isRightInView = useInView(rightRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Sticky heading */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={
              isLeftInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: shouldReduceMotion ? 0 : 30 }
            }
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-5 lg:sticky lg:top-32 self-start"
          >
            <span className="text-xs uppercase tracking-widest text-[#8b5cf6] font-semibold">
              Why Work With Me
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mt-3 text-balance">
              Not just{" "}
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">
                another edit
              </span>
              .
            </h2>
            <p className="text-[#a1a1aa] mt-6 text-lg leading-relaxed max-w-md">
              AI is a tool. Direction is the difference. Here's what you get
              when we work together.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 mt-8 text-[#8b5cf6] hover:text-[#a78bfa] font-semibold transition-colors duration-300"
            >
              Let's discuss your project
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </motion.div>

          {/* Right: Benefits list */}
          <motion.div
            ref={rightRef}
            initial="hidden"
            animate={isRightInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.1,
                  delayChildren: shouldReduceMotion ? 0 : 0.1,
                },
              },
            }}
            className="lg:col-span-7 space-y-4"
          >
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  variants={{
                    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: EASE },
                    },
                  }}
                  className="group flex gap-5 p-6 rounded-2xl bg-[#13131e] border border-[#26263a] hover:border-[#8b5cf6]/50 transition-colors duration-400"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center group-hover:bg-[#8b5cf6]/20 transition-colors duration-400">
                      <Icon
                        className="w-5 h-5 text-[#a78bfa]"
                        strokeWidth={1.75}
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-xs font-mono text-[#71717a]">
                        0{i + 1}
                      </span>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {b.title}
                      </h3>
                    </div>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}