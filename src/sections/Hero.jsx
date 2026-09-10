import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);

  // Very subtle portrait parallax after entrance
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // ---- Desktop: split-direction entrance ----
  // ---- Mobile / reduced-motion: simple upward fade ----

  // Text container variants — staggered children
  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  // Individual text item — slides from left on desktop, up on mobile
  const textItem = (delay = 0) => ({
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -40,
      y: shouldReduceMotion ? 20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.4 : 0.7,
        ease: EASE,
        delay,
      },
    },
  });

  // Portrait — slides from right on desktop
  const portraitVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 60,
      scale: shouldReduceMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.4 : 0.9,
        ease: EASE,
        delay: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center px-6 lg:px-8 pt-32 pb-20 overflow-hidden"
    >
      {/* Ambient violet glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8b5cf6]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT: Text — enters from LEFT on desktop */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          {/* Availability badge */}
          <motion.div
            variants={textItem(0)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#26263a] bg-[#13131e]/50 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs text-[#a1a1aa] font-medium">
              Available for freelance projects
            </span>
          </motion.div>

          {/* Headline — strongest entrance, slightly longer */}
          <motion.h1
            variants={{
              hidden: {
                opacity: 0,
                x: shouldReduceMotion ? 0 : -50,
                y: shouldReduceMotion ? 25 : 0,
              },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  duration: shouldReduceMotion ? 0.4 : 0.85,
                  ease: EASE,
                  delay: shouldReduceMotion ? 0 : 0.1,
                },
              },
            }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-balance"
          >
            AI-Powered Video.{" "}
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent">
              Built to Get Attention.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={textItem(0.2)}
            className="text-lg text-[#a1a1aa] mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            I create cinematic AI-generated videos, visual content, and
            creative assets designed to help brands, creators, and businesses
            stand out.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={textItem(0.3)}
            className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start"
          >
            <a
              href="#work"
              className="group bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              View My Work
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="border border-[#26263a] hover:border-[#8b5cf6] hover:text-[#a78bfa] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Let's Work Together
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT: Portrait — enters from RIGHT on desktop */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <motion.div
            variants={portraitVariants}
            initial="hidden"
            animate="visible"
            style={shouldReduceMotion ? {} : { y: portraitY }}
            className="relative"
          >
            {/* Violet glow behind portrait */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] rounded-3xl blur-2xl opacity-30 scale-95" />

            {/* Portrait frame */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-[#26263a] bg-[#13131e] shadow-2xl">
              <img
                src="/portrait.jpg"
                alt="Kent Dayag — AI Video Creator"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<div class="w-full h-full flex items-center justify-center text-[#71717a] text-sm text-center px-4">Add portrait.jpg to /public folder</div>';
                }}
              />
            </div>

            {/* Decorative dots grid */}
            <div className="absolute -bottom-6 -left-6 grid grid-cols-4 gap-2 opacity-30">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — appears last, after everything settles */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7, ease: EASE }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#71717a]"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#8b5cf6] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}