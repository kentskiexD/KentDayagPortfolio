import { assetPath } from "../lib/assetPath";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Sparkles, Users } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  
  // 🌟 Fade out the scroll indicator as you scroll down
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scrollIndicatorY = useTransform(scrollYProgress, [0, 0.2], [0, 20]);

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
      scale: shouldReduceMotion ? 0.95 : 0.95,
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
          {/* 🏆 Premium Badge with Text-Only Heartbeat */}
          <motion.div
            variants={textItem(0)}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full fantasy-glass mb-8"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>

            <motion.span
              animate={shouldReduceMotion ? {} : { 
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-xs text-white/90 font-bold tracking-widest uppercase origin-left block"
            >
              Available for freelance projects
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={textItem(0.1)}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-balance"
          >
            Content that gets{" "}
            <span className="relative inline-block italic">
              {/* Animated "running light" text */}
             <motion.span
  animate={
    shouldReduceMotion
      ? {}
      : { backgroundPosition: ["200% center", "-200% center"] }
  }
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "mirror",
  }}
  className="bg-[linear-gradient(90deg,#4c1d95_0%,#8b5cf6_20%,#a78bfa_35%,#ffffff_50%,#a78bfa_65%,#8b5cf6_80%,#4c1d95_100%)] bg-[length:250%_auto] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.4)] inline-block pb-[0.1em] pr-[0.05em] will-change-[background-position] transform-gpu"
>
  attention.
</motion.span>
              {/* Single Clean Sparkle Icon */}
              <svg
                className="absolute -top-6 -right-10 w-8 h-8 text-[#a78bfa] animate-pulse drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
              </svg>
            </span>
          </motion.h1>

          {/* 🏆 Ornamental Divider (Light Sweeps Inward) */}
          <motion.div
            variants={textItem(0.15)}
            className="flex items-center justify-center lg:justify-start gap-5 mt-8 mb-6 opacity-80"
          >
            {/* Left Line - Light sweeps from Left to Center */}
            <div className="relative h-[1px] w-20 sm:w-32 bg-[#8b5cf6]/20 overflow-hidden">
              <motion.div
                animate={{ backgroundPosition: ["200% center", "0% center"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-[linear-gradient(90deg,#4c1d95_0%,#a78bfa_25%,#ffffff_50%,#a78bfa_75%,#4c1d95_100%)] bg-[length:200%_auto]"
              />
            </div>

            {/* Center Diamond (Spin + Pulse) */}
            <motion.div
              animate={{
                rotate: [45, 405],
                scale: [1, 1.4, 0.9, 1],
                boxShadow: [
                  "0 0 10px rgba(139,92,246,0.6)",
                  "0 0 25px rgba(139,92,246,1)",
                  "0 0 5px rgba(139,92,246,0.4)",
                  "0 0 10px rgba(139,92,246,0.6)",
                ],
              }}
              transition={{
                rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="w-2.5 h-2.5 border border-[#a78bfa] bg-[#8b5cf6]/20"
            />

            {/* Right Line - Light sweeps from Right to Center */}
            <div className="relative h-[1px] w-20 sm:w-32 bg-[#8b5cf6]/20 overflow-hidden">
              <motion.div
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-[linear-gradient(270deg,#4c1d95_0%,#a78bfa_25%,#ffffff_50%,#a78bfa_75%,#4c1d95_100%)] bg-[length:200%_auto]"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={textItem(0.2)}
            className="text-lg text-[#a1a1aa] mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            I create engaging AI-powered videos and visuals for brands,
            products, and social media — content made for today's digital
            platforms.
          </motion.p>

                   {/* 🏆 Fantasy Pill Buttons (Responsive Size) */}
          <motion.div
            variants={textItem(0.3)}
            className="flex flex-wrap gap-3 sm:gap-4 mt-10 justify-center lg:justify-start"
          >
            {/* Primary Button */}
            <a 
              href="#work" 
              className="fantasy-btn fantasy-btn-primary group text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5"
            >
              <div className="fantasy-btn-icon w-6 h-6 sm:w-8 sm:h-8">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              </div>
              View My Work
              <span className="group-hover:translate-x-1 transition-transform duration-300 ml-1">
                →
              </span>
            </a>

            {/* Secondary Button */}
            <a 
              href="#contact" 
              className="fantasy-btn fantasy-btn-secondary group text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5"
            >
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a78bfa]" fill="currentColor" />
              Let's Work Together
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT: Portrait */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-[320px] h-[380px] sm:w-[400px] sm:h-[460px] lg:w-[480px] lg:h-[540px] flex items-end justify-center select-none">
            
                         {/* Floating Particles */}
            {!shouldReduceMotion && (
              <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
                
                {/* Particle 1 - Purple */}
                <motion.div
                  animate={{ y: [100, -300], x: [0, 20, -20, 0], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[60%] left-[10%] flex items-center justify-center"
                >
                  {/* The Ripple Trace (Left behind when the particle pulses) */}
                  <motion.div
                    animate={{ scale: [1, 1, 3], opacity: [0, 0.8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.3, 1], ease: "easeOut" }}
                    className="absolute w-3 h-3 rounded-full border border-[#8b5cf6] shadow-[0_0_10px_#8b5cf6]"
                  />
                  
                  {/* The Particle (Pulses up and leaves the trace) */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-3 h-3 rounded-full overflow-hidden shadow-[0_0_15px_rgba(139,92,246,0.8)] z-10"
                  >
                    <motion.div
                      animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#8b5cf6_30%,#ffffff_50%,#8b5cf6_70%,transparent_100%)] bg-[length:200%_auto] blur-[1px]"
                    />
                  </motion.div>
                </motion.div>

                {/* Particle 2 - Deep Violet */}
                <motion.div
                  animate={{ y: [100, -350], x: [0, -15, 15, 0], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute top-[70%] right-[15%] flex items-center justify-center"
                >
                  {/* The Ripple Trace */}
                  <motion.div
                    animate={{ scale: [1, 1, 3.5], opacity: [0, 0.8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, times: [0, 0.3, 1], ease: "easeOut" }}
                    className="absolute w-3.5 h-3.5 rounded-full border border-[#4c1d95] shadow-[0_0_10px_#4c1d95]"
                  />
                  
                  {/* The Particle */}
                  <motion.div
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-3.5 h-3.5 rounded-full overflow-hidden shadow-[0_0_20px_rgba(76,29,149,0.8)] z-10"
                  >
                    <motion.div
                      animate={{ backgroundPosition: ["-200% center", "200% center"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#4c1d95_30%,#a78bfa_50%,#4c1d95_70%,transparent_100%)] bg-[length:200%_auto] blur-[1px]"
                    />
                  </motion.div>
                </motion.div>

                {/* Particle 3 - Light Lavender */}
                <motion.div
                  animate={{ y: [150, -400], x: [0, 25, -25, 0], opacity: [0, 0.8, 0.8, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute top-[50%] left-[40%] flex items-center justify-center"
                >
                  {/* The Ripple Trace */}
                  <motion.div
                    animate={{ scale: [1, 1, 3], opacity: [0, 0.8, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, times: [0, 0.3, 1], ease: "easeOut" }}
                    className="absolute w-2.5 h-2.5 rounded-full border border-[#a78bfa] shadow-[0_0_10px_#a78bfa]"
                  />
                  
                  {/* The Particle */}
                  <motion.div
                    animate={{ scale: [1, 1.6, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-2.5 h-2.5 rounded-full overflow-hidden shadow-[0_0_15px_rgba(167,139,250,0.8)] z-10"
                  >
                    <motion.div
                      animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#a78bfa_30%,#ffffff_50%,#a78bfa_70%,transparent_100%)] bg-[length:200%_auto] blur-[1px]"
                    />
                  </motion.div>
                </motion.div>
                
              </div>
            )}
            <motion.div
              variants={portraitVariants}
              initial="hidden"
              animate="visible"
              style={shouldReduceMotion ? {} : { y: portraitY }}
              className="relative z-10 w-full h-full flex items-end justify-center"
            >
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full flex items-end justify-center"
              >
                <img
                  src={assetPath("/portrait.png")}
                  alt="Kent Dayag"
                  draggable="false"
                  className="w-[105%] max-w-none h-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] select-none pointer-events-none"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 0%, black 75%, rgba(0,0,0,0.6) 88%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 0%, black 75%, rgba(0,0,0,0.6) 88%, transparent 100%)",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* 🏆 Perfectly Centered Fantasy Scroll Indicator (NOW FIXED & FADES OUT) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        // 🌟 Style overrides the opacity based on scroll
        style={{ opacity: scrollIndicatorOpacity, y: scrollIndicatorY }}
        transition={{ delay: 1.1, duration: 0.7, ease: EASE }}
        className="fixed bottom-6 inset-x-0 hidden md:flex items-center justify-center pointer-events-none z-40"
      >
        <div className="flex items-center justify-center">
          
          {/* Left Line - Animated Light */}
          <div className="relative h-[1px] w-24 sm:w-32 bg-[#8b5cf6]/20 overflow-hidden">
            <motion.div
              animate={{ backgroundPosition: ["200% center", "-200% center"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#4c1d95_20%,#8b5cf6_35%,#ffffff_50%,#8b5cf6_65%,#4c1d95_80%,transparent_100%)] bg-[length:250%_auto]"
            />
          </div>

          {/* Left Diamond */}
          <div className="mx-4 w-2 h-2 rotate-45 bg-[#a78bfa] shadow-[0_0_10px_#a78bfa,0_0_20px_#8b5cf6]" />

          {/* The Mouse Capsule */}
          <div className="relative w-7 h-11 rounded-full border border-[#8b5cf6]/60 bg-[#0a0a0f]/80 backdrop-blur-sm flex justify-center pt-2 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <motion.svg
              animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a78bfa"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </motion.svg>
          </div>

          {/* Right Diamond */}
          <div className="mx-4 w-2 h-2 rotate-45 bg-[#a78bfa] shadow-[0_0_10px_#a78bfa,0_0_20px_#8b5cf6]" />

          {/* Right Line - Animated Light */}
          <div className="relative h-[1px] w-24 sm:w-32 bg-[#8b5cf6]/20 overflow-hidden">
            <motion.div
              animate={{ backgroundPosition: ["-200% center", "200% center"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              className="absolute inset-0 bg-[linear-gradient(270deg,transparent_0%,#4c1d95_20%,#8b5cf6_35%,#ffffff_50%,#8b5cf6_65%,#4c1d95_80%,transparent_100%)] bg-[length:250%_auto]"
            />
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}