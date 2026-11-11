import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function CTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* 🌟 Very Faded Minimal Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative p-8 sm:p-12 lg:p-16 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.001] backdrop-blur-sm overflow-hidden"
        >
          {/* Extremely subtle top border running light */}
          <div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none overflow-hidden opacity-20">
            <motion.div
              animate={{ backgroundPosition: ["200% center", "-200% center"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#4c1d95_25%,#8b5cf6_45%,#ffffff_50%,#8b5cf6_55%,#4c1d95_75%,transparent_100%)] bg-[length:200%_auto]"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative z-10 text-center flex flex-col items-center"
          >
            {/* 🌟 Badge (NOW TEAL) */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/10 backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs text-[#06b6d4] font-medium tracking-wide">
                Currently accepting new projects
              </span>
            </motion.div>

            {/* Headline with Running Light */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-balance"
            >
              Have an idea for your{" "}
                  <span className="relative inline-block">
                <motion.span
                  animate={shouldReduceMotion ? {} : { backgroundPosition: ["200% center", "-200% center"] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
                  className="bg-[linear-gradient(90deg,#0e7490_0%,#06b6d4_25%,#ffffff_50%,#06b6d4_75%,#0e7490_100%)] bg-[length:250%_auto] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] inline-block pb-[0.1em] will-change-[background-position] transform-gpu"
                >
                  next video
                </motion.span>
              </span>
              ?
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-[#a1a1aa] mt-6 max-w-2xl mx-auto leading-relaxed"
            >
              Let's turn your idea into something people want to watch.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mt-10 w-full sm:w-auto"
            >
              {/* 🌟 Primary Button (NOW TEAL) */}
              <a
                href="mailto:dayagkent09@gmail.com?subject=Project%20Inquiry"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#06b6d4]/20 bg-[#06b6d4]/10"
              >
                {/* The Running Light Border ONLY (TEAL) */}
                <div className="absolute inset-0 pointer-events-none rounded-full overflow-hidden">
                  <motion.div
                    animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,transparent_0%,#0e7490_25%,#06b6d4_45%,#ffffff_50%,#06b6d4_55%,#0e7490_75%,transparent_100%)] bg-[length:200%_auto]"
                    style={{
                      padding: '1.5px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                </div>
                <span className="relative z-10">Start a Project</span>
                {/* 🌟 Smooth Heartbeat Arrow (TEAL) */}
                <motion.span
                  animate={{ scale: [1, 1.15, 1], x: [0, 4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 text-[#06b6d4] font-bold ml-1 origin-center"
                >
                  →
                </motion.span>
              </a>

              {/* Secondary Button (Glass) */}
              <a
                href="mailto:dayagkent09@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white bg-white/[0.02] border border-white/[0.05] hover:border-[#06b6d4]/50 hover:bg-white/[0.05] transition-all duration-300 hover:scale-105 backdrop-blur-md"
              >
                dayagkent09@gmail.com
              </a>
            </motion.div>

            {/* 🌟 Trust line with Running Light Dots (NOW TEAL) */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-[#a1a1aa]"
            >
              {["Fast turnaround", "Cinematic quality", "Custom direction"].map((text, i) => (
                <div key={text} className="flex items-center gap-2">
                  {/* Running Light Dot (TEAL) */}
                  <div className="relative flex items-center justify-center w-1.5 h-1.5">
                    <div className="absolute inset-0 bg-[#06b6d4] rounded-full shadow-[0_0_8px_#06b6d4] opacity-40" />
                    <motion.div
                      animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
                      className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,transparent_0%,#06b6d4_40%,#ffffff_50%,#06b6d4_60%,transparent_100%)] bg-[length:200%_auto]"
                    />
                  </div>
                  {text}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}