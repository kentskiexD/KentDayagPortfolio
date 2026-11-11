import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
// 🌟 Imported MessageCircle for Claude
import { Play, Video, MessageSquare, MessageCircle, Scissors } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const tools = [
  { name: "Google Flow", icon: Video, color: "text-blue-400" },
  { name: "ChatGPT", icon: MessageSquare, color: "text-green-400" },
  // 🌟 Changed to MessageCircle and kept the orange color
  { name: "Claude", icon: MessageSquare, color: "text-orange-400" },
  { name: "CapCut", icon: Scissors, color: "text-white" },
];

export default function FeaturedBillboard({ projects, onPlay }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  if (!projects || projects.length === 0) return null;

  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <section 
      ref={sectionRef} 
      className="relative z-20 py-20 bg-[#0a0a0f] overflow-hidden border-y border-white/5"
    >
      {/* Background subtle glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[300px] bg-[#8b5cf6]/5 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center"
        >
          {/* 🌟 THE ROTATING DIAMOND */}
          <span className="text-xs uppercase tracking-widest text-[#8b5cf6] font-semibold flex items-center justify-center gap-3">
            <motion.div
              animate={shouldReduceMotion ? {} : { rotate: [45, 405] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-[#8b5cf6] shadow-[0_0_10px_#8b5cf6]"
            />
            Featured Showcase
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-3 text-balance text-white">
            A Glimpse of{" "}
            <span className="relative inline-block">
              <motion.span
                animate={shouldReduceMotion ? {} : { backgroundPosition: ["200% center", "-200% center"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
                className="bg-[linear-gradient(90deg,#8b5cf6_0%,#a78bfa_20%,#e9d5ff_40%,#ffffff_50%,#e9d5ff_60%,#a78bfa_80%,#8b5cf6_100%)] bg-[length:250%_auto] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.4)] inline-block pb-[0.1em] pr-[0.1em] will-change-[background-position] transform-gpu"
              >
                 My Work.
              </motion.span>
            </span>
          </h2>
        </motion.div>
      </div>

      {/* 🌟 THE MARQUEE TRACK */}
      <div className="relative w-full overflow-hidden flex py-6">
        
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-20 pointer-events-none" />

        <div className="flex gap-6 px-4 animate-marquee-scroll w-max">
          {duplicatedProjects.map((project, index) => {
            const isVertical = project.type?.toLowerCase() === "vertical" || project.videoUrl?.includes("shorts");
            
            return (
              <motion.div
                key={`${project.id}-${index}`}
                onClick={() => onPlay(project)}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -10, transition: { duration: 0.2, ease: "easeOut" } }}
                className={`relative shrink-0 rounded-2xl overflow-hidden group cursor-pointer border border-[#26263a] bg-[#13131e] transition-all duration-300 shadow-lg ${
                  isVertical 
                    ? "h-[240px] sm:h-[320px] aspect-[9/16]" 
                    : "h-[240px] sm:h-[320px] aspect-video"
                }`}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#06b6d4]/90 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.8)] backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="font-bold text-white text-sm leading-tight line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                {/* 🌟 CYAN / TEAL RUNNING LIGHT BORDER */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <motion.div
                    animate={shouldReduceMotion ? {} : { backgroundPosition: ["200% center", "-200% center"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-2xl bg-[linear-gradient(90deg,transparent_0%,#0e7490_25%,#06b6d4_40%,#ffffff_50%,#06b6d4_60%,#0e7490_75%,transparent_100%)] bg-[length:200%_auto]"
                    style={{
                      padding: '1.5px', 
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-sm text-[#a1a1aa] uppercase tracking-widest font-semibold mb-6">
            Powered by Industry-Leading AI Tools
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#13131e] border border-[#26263a] hover:border-[#06b6d4]/50 transition-all duration-300 cursor-default"
                >
                  <Icon className={`w-5 h-5 ${tool.color}`} />
                  <span className="text-sm font-bold text-white tracking-wide">{tool.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

    </section>
  );
}