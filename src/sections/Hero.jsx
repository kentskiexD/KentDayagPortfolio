import { assetPath } from "../lib/assetPath";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const circleY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

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

  const portraitVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 40,
      scale: shouldReduceMotion ? 1 : 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.4 : 1,
        ease: EASE,
        delay: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.4 : 1.1,
        ease: EASE,
        delay: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center px-6 lg:px-8 pt-32 pb-20 overflow-hidden"
    >
    

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT: Text */}
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

          {/* Role label */}
          <motion.p
            variants={textItem(0.05)}
            className="text-sm uppercase tracking-widest text-[#a78bfa] font-semibold mb-4"
          >
            AI Content Creator
          </motion.p>

          {/* Headline */}
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
            Content that gets{" "}
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent">
              attention.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={textItem(0.2)}
            className="text-lg text-[#a1a1aa] mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            I create engaging AI-powered videos and visuals for brands,
            products, and social media — content made for today's digital
            platforms.
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

        {/* RIGHT: Portrait with circle background */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] flex items-center justify-center">
            {/* Big violet gradient circle */}
            <motion.div
              variants={circleVariants}
              initial="hidden"
              animate="visible"
              style={shouldReduceMotion ? {} : { y: circleY }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Outer subtle ring */}
              <div className="absolute w-[95%] h-[95%] rounded-full border border-[#8b5cf6]/15" />
              <div className="absolute w-[80%] h-[80%] rounded-full border border-[#8b5cf6]/10" />

              {/* Main gradient circle */}
              <div className="relative w-[75%] h-[75%] rounded-full bg-gradient-to-br from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] shadow-[0_0_100px_rgba(139,92,246,0.4)]">
                {/* Inner highlight */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/10" />
              </div>

              {/* Small floating dots */}
              <div className="absolute top-[12%] left-[15%] w-3 h-3 rounded-full bg-[#8b5cf6]/70 blur-[1px]" />
              <div className="absolute bottom-[18%] right-[20%] w-2 h-2 rounded-full bg-[#a78bfa]/60" />
              <div className="absolute top-[25%] right-[12%] w-1.5 h-1.5 rounded-full bg-white/40" />
            </motion.div>

            {/* Portrait — floating over the circle */}
            <motion.div
              variants={portraitVariants}
              initial="hidden"
              animate="visible"
              style={shouldReduceMotion ? {} : { y: portraitY }}
              className="relative z-10 w-full h-full flex items-end justify-center"
            >
              <img
src={assetPath("/portrait.png")}
  alt="Kent Dayag — AI Content Creator"
  className="w-[92%] h-[92%] object-contain object-bottom"
  style={{
    maskImage:
      "linear-gradient(to bottom, black 0%, black 78%, rgba(0,0,0,0.6) 90%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to bottom, black 0%, black 78%, rgba(0,0,0,0.6) 90%, transparent 100%)",
    filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))",
  }}
  onError={(e) => {
  if (e.target.src.endsWith(".png")) {
    e.target.src = assetPath("/portrait.jpg");
  } else {
    e.target.style.display = "none";
    e.target.parentElement.innerHTML =
      '<div class="w-full h-full flex items-center justify-center text-[#71717a] text-sm text-center px-4">Add portrait.png to /public folder</div>';
  }
}}
/>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
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