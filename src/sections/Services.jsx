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
    size: "large", // spans 7 columns
  },
  {
    icon: ImageIcon,
    title: "AI Product Visuals",
    description:
      "Eye-catching AI visuals for products, advertisements, promotions, and brand content.",
    tags: ["Products", "Ads", "Brand"],
    size: "small", // spans 5 columns
  },
  {
    icon: Share2,
    title: "AI Social Media Content",
    description:
      "AI-powered images and videos made for social media posts, campaigns, Reels, and promotional content.",
    tags: ["Instagram", "Facebook", "Campaigns"],
    size: "wide", // spans 12 columns
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
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">
              I Can Create
            </span>
          </h2>
          <p className="text-[#a1a1aa] mt-5 text-lg leading-relaxed">
            Practical AI-powered content for products, brands, and social
            media.
          </p>
        </motion.div>

        {/* Bento grid — 12 columns on desktop */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            // Bento layout for desktop
            const spanClass =
              service.size === "large"
                ? "md:col-span-7"
                : service.size === "small"
                ? "md:col-span-5"
                : "md:col-span-12";

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative p-7 lg:p-8 rounded-2xl bg-gradient-to-br from-[#13131e] to-[#0f0f18] border border-[#26263a] hover:border-[#8b5cf6]/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden ${spanClass}`}
                style={{
                  transitionProperty: "transform, border-color, box-shadow",
                  transitionDuration: "500ms",
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {/* Inner subtle gradient glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#8b5cf6]/5 to-transparent rounded-2xl pointer-events-none" />

                {/* Decorative light streak on hover */}
                <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#8b5cf6]/60 to-transparent transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center mb-6 group-hover:bg-[#8b5cf6]/20 group-hover:border-[#8b5cf6]/40 transition-colors duration-500">
                    <Icon
                      className="w-6 h-6 text-[#a78bfa]"
                      strokeWidth={1.75}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#a1a1aa] leading-relaxed mb-5 max-w-2xl">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-md bg-[#26263a] text-[#a1a1aa] group-hover:bg-[#8b5cf6]/10 group-hover:text-[#a78bfa] transition-colors duration-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow shadow */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_50px_rgba(139,92,246,0.18)]" />
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
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">
              Let's create it.
            </span>
          </h3>
          <p className="text-[#a1a1aa] mt-3 max-w-xl mx-auto">
            Tell me what you have in mind and let's turn it into engaging
            AI-powered content.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 mt-6 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Start a Project
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}