import { assetPath } from "../lib/assetPath";
import { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

export default function VideoModal({ project, onClose }) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (window.__lenis) {
      window.__lenis.stop();
    }

    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      if (window.__lenis) {
        window.__lenis.start();
      }
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  const isLocalVideo = project?.videoUrl?.endsWith(".mp4");
  const hasOriginals =
    project?.originalImages && project.originalImages.length > 0;

const categoryLabel =
  {
    "ai-video": "AI Video",
    "product-visuals": "Product Visual",
    "social-content": "Social Content",
    ugc: "UGC",
  }[project?.category] || project?.category;
  
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.96,
              y: shouldReduceMotion ? 0 : 10,
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.97,
              y: shouldReduceMotion ? 0 : 10,
            }}
            transition={{ duration: 0.4, ease: EASE }}
            data-lenis-prevent
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#13131e] border border-[#26263a] rounded-2xl shadow-[0_0_80px_rgba(139,92,246,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ─── Top bar ─── */}
            <div className="sticky top-0 z-20 bg-[#13131e]/95 backdrop-blur-md border-b border-[#26263a] px-5 lg:px-7 py-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-[#8b5cf6]/15 text-[#a78bfa] border border-[#8b5cf6]/30">
                  {categoryLabel}
                </span>
                <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-[#26263a] text-[#a1a1aa]">
                  {project.type}
                </span>
              </div>

              <button
                onClick={onClose}
                className="shrink-0 w-9 h-9 rounded-full bg-[#1c1c2a] hover:bg-[#8b5cf6] border border-[#26263a] hover:border-[#8b5cf6] flex items-center justify-center text-[#a1a1aa] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" strokeWidth={2.25} />
              </button>
            </div>

            {/* ─── Body ─── */}
            <div className="p-5 lg:p-7 space-y-6">
              {/* 🎬 VIDEO PLAYER — minimal, centered */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#8b5cf6] flex items-center gap-1.5">
                    🎬 AI-Generated Video
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#71717a]">
                    {project.type === "Vertical"
                      ? "9:16"
                      : project.type === "Landscape"
                      ? "16:9"
                      : "4:5"}
                  </span>
                </div>

                {/* Minimal video stage */}
                <div className="relative rounded-xl overflow-hidden bg-[#0a0a0f] border border-[#26263a] py-6">
                  {/* Soft violet glow behind video */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#8b5cf6]/15 rounded-full blur-[100px] pointer-events-none" />

                  <div className="relative flex justify-center">
                    <div
                      className={
                        project.type === "Vertical"
                          ? "w-[260px] sm:w-[280px] aspect-[9/16]"
                          : project.type === "Portrait"
                          ? "w-full max-w-[400px] aspect-[4/5]"
                          : "w-full max-w-[640px] aspect-video"
                      }
                    >
                      {isLocalVideo ? (
                        <video
                          src={project.videoUrl}
                          controls
                          autoPlay
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-contain rounded-lg shadow-[0_0_60px_rgba(0,0,0,0.6)]"
                        />
                      ) : (
                        <iframe
                          src={project.videoUrl}
                          title={project.title}
                          className="w-full h-full rounded-lg shadow-[0_0_60px_rgba(0,0,0,0.6)]"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 📝 Product info */}
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                  {project.title}
                </h2>

                <p className="text-[#a1a1aa] leading-relaxed">
                  {project.description}
                </p>

                {project.tools && project.tools.length > 0 && (
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8b5cf6] font-semibold mb-2">
                      Tools Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#1c1c2a] text-[#e5e5e5] border border-[#26263a] hover:border-[#8b5cf6]/50 transition-colors duration-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 📸 Original Product References — small container */}
              {hasOriginals && (
                <div className="pt-5 border-t border-[#26263a]">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] uppercase tracking-widest text-[#8b5cf6] font-semibold">
                      📸 {project.originalLabel || "Original Reference"}
                    </p>
                    <span className="text-[10px] uppercase tracking-widest text-[#71717a] bg-[#1c1c2a] px-2 py-0.5 rounded-full border border-[#26263a]">
                      {project.originalImages.length}{" "}
                      {project.originalImages.length === 1 ? "item" : "items"}
                    </span>
                  </div>

                  <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:thin]">
                    {project.originalImages.map((img, i) => (
                      <div
                        key={i}
                        className="group relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-[#1c1c2a] border border-[#26263a] hover:border-[#8b5cf6]/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_-8px_rgba(139,92,246,0.5)] cursor-pointer"
                      >
                        <img
                          src={img}
                          alt={`${project.title} original ${i + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 🎯 CTAs */}
              <div className="pt-6 border-t border-[#26263a] flex flex-wrap gap-3">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="group flex-1 min-w-[200px] bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-6 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Start a Project Like This
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>

                {project.youtubeUrl && (
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] border border-[#26263a] hover:border-red-500/60 hover:text-red-400 hover:bg-red-500/5 px-5 py-3.5 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2.5"
                  >
                    <img
                      src={assetPath("/images/yt-logo.png")}
                      alt="YouTube"
                      className="w-8 h-8 object-contain"
                    />
                    Watch on YouTube
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}