import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Clapperboard, Image as ImageIcon, Share2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const services = [
  {
    icon: Clapperboard,
    title: "AI Short-Form Videos",
    description:
      "Short, engaging AI videos created to capture attention and communicate your idea quickly.",
    tags: ["Reels", "TikTok", "Shorts"],
  },
  {
    icon: ImageIcon,
    title: "AI Product Visuals",
    description:
      "Eye-catching AI visuals for products, advertisements, promotions, and brand content.",
    tags: ["Products", "Ads", "Brand"],
  },
  {
    icon: Share2,
    title: "AI Social Media Content",
    description:
      "AI-powered images and videos made for social media posts, campaigns, Reels, and promotional content.",
    tags: ["Instagram", "Facebook", "Campaigns"],
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
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  // 🌟 Smooth floating hover effect
  const cardHover = {
    scale: 1.03,
    y: -8,
    boxShadow: "0px 20px 40px -10px rgba(139, 92, 246, 0.4)",
    transition: { duration: 0.8, ease: "easeOut" } 
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 lg:py-32 px-6 lg:px-8 bg-[#0c0c14] overflow-hidden"
    >
      {/* Top divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/50 to-transparent" />

      {/* Radial glow behind cards */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#8b5cf6]/8 rounded-full blur-[140px]" />
      </div>

      {/* Decorative curved gradient line behind cards */}
      <div className="absolute inset-0 -z-10 pointer-events-none hidden md:block">
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[500px] opacity-[0.18]"
          viewBox="0 0 1100 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 50 250 C 300 50, 800 50, 1050 250"
            stroke="url(#curveGrad)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 50 280 C 300 480, 800 480, 1050 280"
            stroke="url(#curveGrad)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        {/* Small glowing dots */}
        <div className="absolute top-[32%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#8b5cf6]/60 blur-[2px]" />
        <div className="absolute top-[68%] left-[25%] w-1 h-1 rounded-full bg-[#8b5cf6]/40 blur-[1px]" />
        <div className="absolute top-[40%] right-[18%] w-1.5 h-1.5 rounded-full bg-[#8b5cf6]/60 blur-[2px]" />
        <div className="absolute top-[75%] right-[28%] w-1 h-1 rounded-full bg-[#8b5cf6]/40 blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
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
            AI Content{" "}
            {/* 🌟 Running Light Text */}
            <span className="relative inline-block">
              <motion.span
                animate={
                  shouldReduceMotion
                    ? {}
                    : { backgroundPosition: ["200% center", "-200% center"] }
                }
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "mirror",
                }}
                className="bg-[linear-gradient(90deg,#8b5cf6_0%,#a78bfa_25%,#ffffff_50%,#a78bfa_75%,#8b5cf6_100%)] bg-[length:250%_auto] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] inline-block pb-[0.1em] will-change-[background-position] transform-gpu"
              >
                I Can Create
              </motion.span>
            </span>
          </h2>
          <p className="text-[#a1a1aa] mt-5 text-lg leading-relaxed">
            Practical AI-powered content for products, brands, and social
            media.
          </p>
        </motion.div>

        {/* Clean 3-Column Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : cardHover}
                className="group relative p-7 lg:p-8 rounded-2xl bg-[#13131e]/80 border border-[#26263a] backdrop-blur-xl overflow-hidden flex flex-col cursor-default"
              >
                {/* 🌟 Running Light Border */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none overflow-hidden opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 1.5
                    }}
                    className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#4c1d95_25%,#8b5cf6_45%,#ffffff_50%,#8b5cf6_55%,#4c1d95_75%,transparent_100%)] bg-[length:200%_auto]"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* 🌟 Glowing Icon Container */}
                  <div className="relative w-14 h-14 rounded-xl bg-[#1e1e2d] border border-[#8b5cf6]/30 flex items-center justify-center mb-6 group-hover:bg-[#8b5cf6]/10 transition-colors duration-400 overflow-hidden">
                    <div className="absolute inset-0 bg-[#8b5cf6]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <Icon
                      className="w-6 h-6 text-[#a78bfa] relative z-10"
                      strokeWidth={1.75}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white leading-tight mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* 🌟 Upgraded Tags with Running Light */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1e1e2d] border border-[#8b5cf6]/20 backdrop-blur-md"
                      >
                        {/* Running Light Circle */}
                        <div className="relative flex items-center justify-center w-1.5 h-1.5">
                          <div className="absolute inset-0 bg-[#8b5cf6] rounded-full shadow-[0_0_8px_#8b5cf6] opacity-40" />
                          <motion.div
                            animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,transparent_0%,#8b5cf6_40%,#ffffff_50%,#8b5cf6_60%,transparent_100%)] bg-[length:200%_auto]"
                          />
                        </div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#d4d4d8]">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA below services */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }
          }
          transition={{
            duration: 0.7,
            delay: shouldReduceMotion ? 0 : 0.6,
            ease: EASE,
          }}
          className="mt-16 lg:mt-20 text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white">
            Have an idea?{" "}
            {/* 🌟 Faster Running Light Text for CTA */}
            <span className="relative inline-block">
              <motion.span
                animate={
                  shouldReduceMotion
                    ? {}
                    : { backgroundPosition: ["200% center", "-200% center"] }
                }
                transition={{
                  duration: 8, // Sped up from 12 to 8 seconds
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "mirror",
                }}
                className="bg-[linear-gradient(90deg,#8b5cf6_0%,#a78bfa_25%,#ffffff_50%,#a78bfa_75%,#8b5cf6_100%)] bg-[length:250%_auto] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] inline-block pb-[0.1em] will-change-[background-position] transform-gpu"
              >
                Let's create it.
              </motion.span>
            </span>
          </h3>
          <p className="text-[#a1a1aa] mt-3 max-w-xl mx-auto">
            Tell me what you have in mind and let's turn it into engaging
            AI-powered content.
          </p>
          
          {/* 🌟 Upgraded Start a Project Button */}
          <a
            href="#contact"
            className="mt-8 relative group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#8b5cf6]/20 bg-[#8b5cf6]/10"
          >
            {/* The Running Light Border ONLY */}
            <div className="absolute inset-0 pointer-events-none rounded-full overflow-hidden">
              <motion.div
                animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,transparent_0%,#4c1d95_25%,#8b5cf6_45%,#ffffff_50%,#8b5cf6_55%,#4c1d95_75%,transparent_100%)] bg-[length:200%_auto]"
                style={{
                  padding: '1.5px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
            </div>

            <span className="relative z-10">Start a Project</span>

            {/* 🌟 Smooth Slow Pulse Arrow (Pointing Right) */}
            <motion.span
              animate={{
                scale: [1, 1.15, 1],
                x: [0, 4, 0] // Gently nudges to the right as it pulses
              }}
              transition={{
                duration: 3, // Slow and smooth
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 text-[#a78bfa] font-bold ml-1 origin-center"
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}