import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-32 px-6 lg:px-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: label + headline */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-[#8b5cf6] font-semibold">
              About
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mt-3 text-balance">
              Creative direction,{" "}
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">
                powered by AI
              </span>
              .
            </h2>
          </motion.div>

          {/* Right: content */}
          <motion.div variants={itemVariants} className="lg:col-span-7 lg:pt-4">
            <p className="text-xl text-white leading-relaxed mb-6">
              Hi, I'm Kent.
            </p>
            <p className="text-[#a1a1aa] text-lg leading-relaxed mb-6">
              I'm a freelance creative focused on{" "}
              <span className="text-white font-medium">
                AI-powered video production
              </span>{" "}
              and{" "}
              <span className="text-white font-medium">
                visual storytelling
              </span>
              . I combine AI tools, editing, motion, and creative direction to
              turn ideas into engaging visual content.
            </p>
            <p className="text-[#a1a1aa] text-lg leading-relaxed mb-10">
              Whether you're launching a product, growing a brand, or creating
              content that needs to stand out — I help turn concepts into
              videos people actually want to watch.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-[#26263a]">
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-white">
                  Cinematic
                </p>
                <p className="text-sm text-[#71717a] mt-1">Visual style</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-white">
                  AI-First
                </p>
                <p className="text-sm text-[#71717a] mt-1">Workflow</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-white">
                  Fast
                </p>
                <p className="text-sm text-[#71717a] mt-1">Turnaround</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}