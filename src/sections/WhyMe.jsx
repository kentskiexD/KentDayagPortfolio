import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Zap, Target, Bot, TrendingUp, Eye, Code2 } from "lucide-react";

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
  {
    icon: Code2,
    title: "Programming & Automation",
    description:
      "Custom scripts and code to automate workflows, build tools, and bring digital ideas to life.",
  },
];

export default function WhyMe() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const isLeftInView = useInView(leftRef, { once: true, amount: 0.1 });
  const isRightInView = useInView(rightRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  // 🌟 Smooth floating hover effect (Teal Shadow)
  const cardHover = {
    scale: 1.02,
    y: -6,
    boxShadow: "0px 15px 30px -10px rgba(6, 182, 212, 0.4)",
    transition: { duration: 0.4, ease: "easeOut" }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 px-6 lg:px-8 overflow-visible" 
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Sticky heading with masked meteors */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start w-full relative">
            
            {/* 🌠 Meteor Container (NOW TEAL) */}
            <div 
              className="absolute top-[-150px] -left-20 w-[120%] h-[120%] overflow-hidden -z-10 pointer-events-none opacity-90"
              style={{
                maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)"
              }}
            >
              {!shouldReduceMotion && (
                <>
                  {/* Meteor 1 */}
                  <motion.div
                    animate={{ x: [0, 400], y: [0, 400], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95], delay: 0.5 }}
                    className="absolute top-[10%] left-[20%]"
                  >
                    {/* 🌟 Teal Trail */}
                    <div className="relative w-[2px] h-32 bg-gradient-to-b from-transparent via-[#06b6d4]/80 to-[#22d3ee] rounded-full -rotate-[45deg] origin-top shadow-[0_0_8px_#06b6d4]">
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full blur-[1.5px] shadow-[0_0_15px_#ffffff,0_0_25px_#06b6d4,0_0_40px_#22d3ee]" />
                    </div>
                  </motion.div>
                  
                  {/* Meteor 2 */}
                  <motion.div
                    animate={{ x: [0, 300], y: [0, 300], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeIn", delay: 2 }}
                    className="absolute top-[30%] left-[40%]"
                  >
                    {/* 🌟 Teal Trail */}
                    <div className="relative w-[3px] h-28 bg-gradient-to-b from-transparent via-[#06b6d4]/80 to-white rounded-full -rotate-[45deg] origin-top shadow-[0_0_10px_#22d3ee]">
                      <div className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 bg-white rounded-full blur-[2px] shadow-[0_0_20px_#ffffff,0_0_35px_#06b6d4,0_0_50px_#22d3ee]" />
                    </div>
                  </motion.div>

                  {/* Meteor 3 */}
                  <motion.div
                    animate={{ x: [0, 200], y: [0, 200], opacity: [0, 0.9, 0.9, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeIn", delay: 4 }}
                    className="absolute top-[15%] left-[10%]"
                  >
                    {/* 🌟 Teal Trail */}
                    <div className="relative w-[1.5px] h-16 bg-gradient-to-b from-transparent via-[#22d3ee] to-white rounded-full -rotate-[45deg] origin-top">
                      <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white rounded-full blur-[1px] shadow-[0_0_12px_#ffffff,0_0_25px_#06b6d4]" />
                    </div>
                  </motion.div>

                  {/* Meteor 4 */}
                  <motion.div
                    animate={{ x: [0, 500], y: [0, 500], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95], delay: 1.5 }}
                    className="absolute top-[50%] left-[0%]"
                  >
                    {/* 🌟 Teal Trail */}
                    <div className="relative w-[2px] h-40 bg-gradient-to-b from-transparent via-[#06b6d4]/80 to-[#22d3ee] rounded-full -rotate-[45deg] origin-top shadow-[0_0_10px_#0e7490]">
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full blur-[1.5px] shadow-[0_0_15px_#ffffff,0_0_30px_#06b6d4,0_0_45px_#22d3ee]" />
                    </div>
                  </motion.div>
                </>
              )}
            </div>

            {/* The Text Content */}
            <motion.div
              ref={leftRef}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={
                isLeftInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: shouldReduceMotion ? 0 : 30 }
              }
              transition={{ duration: 0.7, ease: EASE }}
              className="relative z-10"
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
                AI is a tool. Direction is the difference. Whether it's creative content or custom code, here's what you get when we work together.
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
          </div>

          {/* Right: Benefits list (NOW TEAL) */}
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
                  whileHover={shouldReduceMotion ? {} : cardHover}
                  className="group relative flex gap-5 p-6 rounded-2xl bg-[#13131e]/80 border border-[#26263a] hover:border-[#06b6d4]/50 backdrop-blur-xl transition-colors duration-500 overflow-hidden cursor-default"
                >
                  {/* 🌟 Running Light Border (TEAL) */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none overflow-hidden opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                      transition={{ 
                        duration: 12, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: i * 1.5
                      }}
                      className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#0e7490_25%,#06b6d4_45%,#ffffff_50%,#06b6d4_55%,#0e7490_75%,transparent_100%)] bg-[length:200%_auto]"
                    />
                  </div>

                  <div className="shrink-0 relative z-10">
                    {/* 🌟 Glowing Icon Container (TEAL) */}
                    <div className="relative w-12 h-12 rounded-xl bg-[#1e1e2d] border border-[#06b6d4]/30 flex items-center justify-center group-hover:bg-[#06b6d4]/10 transition-colors duration-400 overflow-hidden">
                      <div className="absolute inset-0 bg-[#06b6d4]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      <Icon
                        className="w-5 h-5 text-[#06b6d4] relative z-10"
                        strokeWidth={1.75}
                      />
                    </div>
                  </div>

                  <div className="flex-1 relative z-10">
                    <div className="flex items-baseline gap-3 mb-1">
                      
                      {/* Reverted Number */}
                      <span className="text-xs font-mono text-[#71717a]">
                        0{i + 1}
                      </span>

                      {/* 🌟 Title with Gentle Heartbeat Scale Effect */}
                      <motion.h3 
                        animate={shouldReduceMotion ? {} : {
                          scale: [1, 1.02, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3
                        }}
                        className="text-lg font-bold text-white leading-tight origin-left"
                      >
                        {b.title}
                      </motion.h3>
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