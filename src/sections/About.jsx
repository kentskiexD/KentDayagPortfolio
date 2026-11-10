import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Clapperboard,
  Image as ImageIcon,
  Code2,
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
    icon: Code2,
    title: "Programmer",
    subtitle: "Scripts & automation",
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

  // Helper class for the running light text effect
  const runningLightText = "bg-[linear-gradient(90deg,#8b5cf6_0%,#a78bfa_25%,#ffffff_50%,#a78bfa_75%,#8b5cf6_100%)] bg-[length:250%_auto] bg-clip-text text-transparent inline-block pb-[0.1em] will-change-[background-position] transform-gpu";

  // 🌟 Hover animation setup for smooth floating in and out
  const cardHover = {
    scale: 1.04,
    y: -8,
    boxShadow: "0px 20px 40px -10px rgba(139, 92, 246, 0.4)",
    transition: { duration: 0.8, ease: "easeOut" } // Takes 0.8s to return, making it drift back slowly
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-32 px-6 lg:px-8 overflow-hidden"
    >
      {/* 🌠 Natural Asteroid Shower (Top Left Diagonal) */}
      <div className="absolute top-0 left-0 w-[800px] h-[600px] -z-10 pointer-events-none overflow-hidden opacity-70">
        {!shouldReduceMotion && (
          <>
            {/* Asteroid 1 (Deep trail) */}
            <motion.div
              animate={{ 
                x: [0, 400], 
                y: [0, 400], 
                opacity: [0, 1, 1, 0] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: [0.45, 0.05, 0.55, 0.95], // Smoother acceleration
                delay: 0.5 
              }}
              className="absolute top-[0%] left-[5%]"
            >
              <div className="relative w-[1.5px] h-32 bg-gradient-to-b from-transparent via-[#8b5cf6]/40 to-[#a78bfa] rounded-full -rotate-[45deg] origin-top">
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_#ffffff,0_0_25px_#8b5cf6]" />
              </div>
            </motion.div>
            
            {/* Asteroid 2 (Thick and bright) */}
            <motion.div
              animate={{ 
                x: [0, 300], 
                y: [0, 300], 
                opacity: [0, 1, 1, 0] 
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeIn", 
                delay: 2 
              }}
              className="absolute top-[10%] left-[25%]"
            >
              <div className="relative w-[2.5px] h-28 bg-gradient-to-b from-transparent via-[#8b5cf6]/50 to-white rounded-full -rotate-[45deg] origin-top">
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_20px_#ffffff,0_0_30px_#8b5cf6]" />
              </div>
            </motion.div>

            {/* Asteroid 3 (Fast, tiny) */}
            <motion.div
              animate={{ 
                x: [0, 200], 
                y: [0, 200], 
                opacity: [0, 0.8, 0.8, 0] 
              }}
              transition={{ 
                duration: 1.8, 
                repeat: Infinity, 
                ease: "easeIn", 
                delay: 4 
              }}
              className="absolute top-[25%] left-[10%]"
            >
              <div className="relative w-[1px] h-16 bg-gradient-to-b from-transparent via-[#a78bfa]/50 to-white rounded-full -rotate-[45deg] origin-top">
                <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_#ffffff,0_0_15px_#8b5cf6]" />
              </div>
            </motion.div>

            {/* Asteroid 4 (Slow, long streak) */}
            <motion.div
              animate={{ 
                x: [0, 500], 
                y: [0, 500], 
                opacity: [0, 1, 1, 0] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: [0.45, 0.05, 0.55, 0.95], 
                delay: 1.5 
              }}
              className="absolute top-[-10%] left-[-10%]"
            >
              <div className="relative w-[1.5px] h-40 bg-gradient-to-b from-transparent via-[#4c1d95]/40 to-[#a78bfa] rounded-full -rotate-[45deg] origin-top">
                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_#ffffff,0_0_20px_#8b5cf6]" />
              </div>
            </motion.div>
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
              className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mt-3 text-balance flex items-start"
            >
              <span>Hi, I'm&nbsp;</span>
              
              {/* Relative container for Kent + Emoji */}
              <span className="relative inline-block">
                {/* The Running Light Text for Kent */}
                <motion.span
                  animate={shouldReduceMotion ? {} : { backgroundPosition: ["200% center", "-200% center"] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
                  className={runningLightText}
                >
                  Kent
                </motion.span>
                
                {/* Waving Hand Animation */}
                <motion.span
                  animate={shouldReduceMotion ? {} : { 
                    rotate: [0, 20, -10, 20, -10, 0],
                    opacity: [0.4, 1, 0.4] 
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-5 -right-8 text-xl lg:text-2xl origin-[70%_70%] z-20 pointer-events-none"
                  style={{ WebkitTextFillColor: "initial", WebkitTextStroke: "0px" }}
                >
                  👋
                </motion.span>
              </span>
              
              <span className="text-white">.</span>
            </motion.h2>
            
            <motion.p
              variants={leftItem}
              className="text-lg text-white leading-relaxed mt-8"
            >
              I'm a{" "}
              {/* Running Light Text for BSIT */}
              <motion.span
                animate={shouldReduceMotion ? {} : { backgroundPosition: ["200% center", "-200% center"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: 2 }}
                className={runningLightText}
              >
                BSIT graduate, Cum Laude
              </motion.span>
              ,{" "}
              {/* Running Light Text for AI Content Creator */}
              <motion.span
                animate={shouldReduceMotion ? {} : { backgroundPosition: ["200% center", "-200% center"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: 4 }}
                className={runningLightText}
              >
                AI Content Creator
              </motion.span>
              , and <span className="text-[#a78bfa] font-medium">Programmer</span> blending creativity with technology.
            </motion.p>

            <motion.p
              variants={leftItem}
              className="text-[#a1a1aa] text-lg leading-relaxed mt-5"
            >
              I build <span className="text-white font-medium">AI-driven videos, visuals, and social creatives</span> that help brands stand out. I also write code to automate workflows, build interactive experiences, and bring digital ideas to life.
            </motion.p>

            <motion.p
              variants={leftItem}
              className="text-[#a1a1aa] text-lg leading-relaxed mt-5"
            >
              By combining creative direction, editing, and programming, I turn simple concepts into polished content and functional digital solutions.
            </motion.p>

            <motion.p
              variants={leftItem}
              className="text-[#a1a1aa] text-lg leading-relaxed mt-5"
            >
              Whether you need a short Reel, an AI product visual, or a custom script, I can bring your idea to life.
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
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={rightItem}
                    whileHover={shouldReduceMotion ? {} : cardHover}
                    className="group relative p-6 rounded-2xl bg-[#13131e]/80 border border-[#26263a] backdrop-blur-xl overflow-hidden cursor-default"
                  >
                    {/* 🌟 Running Light Border */}
                    <div className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none overflow-hidden opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div
                        animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                        transition={{ 
                          duration: 12, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 1.5
                        }}
                        className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#4c1d95_25%,#8b5cf6_45%,#ffffff_50%,#8b5cf6_55%,#4c1d95_75%,transparent_100%)] bg-[length:200%_auto]"
                      />
                    </div>

                    {/* 🌟 Glowing Icon Container */}
                    <div className="relative w-12 h-12 rounded-xl bg-[#1e1e2d] border border-[#8b5cf6]/30 flex items-center justify-center mb-5 group-hover:bg-[#8b5cf6]/10 transition-colors duration-400 overflow-hidden">
                      <div className="absolute inset-0 bg-[#8b5cf6]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      <Icon
                        className="w-5 h-5 text-[#a78bfa] relative z-10"
                        strokeWidth={1.75}
                      />
                    </div>

                    {/* 🌟 Title with Gentle Heartbeat Scale Effect */}
                    <motion.p 
                      animate={shouldReduceMotion ? {} : {
                        scale: [1, 1.03, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4
                      }}
                      className="text-base font-bold text-white leading-tight relative z-10 origin-left"
                    >
                      {item.title}
                    </motion.p>

                    <p className="text-xs text-[#a1a1aa] mt-1.5 leading-relaxed relative z-10">
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