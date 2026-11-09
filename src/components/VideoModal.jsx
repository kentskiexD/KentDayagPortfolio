import { useEffect } from "react";
import { motion } from "framer-motion";

export default function VideoModal({ project, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
      {/* Dark Backdrop Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#0a0a0f]/90 backdrop-blur-md"
      />

      {/* Modal Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#13131e]/95 border border-[#8b5cf6]/30 shadow-[0_0_50px_rgba(139,92,246,0.15)] flex flex-col custom-scrollbar"
      >
        {/* Top Bar (Badges & Close Button) */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-5 bg-[#13131e]/80 backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="px-3 py-1.5 rounded-full bg-[#8b5cf6]/10 text-[#a78bfa] text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-[#8b5cf6]/20 shadow-[0_0_10px_rgba(139,92,246,0.1)]">
              {project.category}
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-white/10">
              {project.type}
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video Area (Inside a glowing frame) */}
        <div className="p-5 sm:p-8 flex-grow flex flex-col justify-center">
          
          {/* AI Generated Label & Time */}
          <div className="flex justify-between items-center mb-3 px-1">
            <span className="text-[10px] sm:text-xs text-[#a78bfa] font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse"></span>
              {project.category === "ai-video" ? "AI-Generated Video" : "Featured Work"}
            </span>
            <span className="text-xs text-[#a1a1aa]">9:16</span>
          </div>

          {/* THE VIDEO CONTAINER - This is where the light border magic happens */}
          <div className="relative w-full aspect-video sm:aspect-[16/9] rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl group">
            
            {/* If you have a video tag, put it here. Example: */}
            {project.videoUrl ? (
              <iframe
                src={project.videoUrl}
                className="absolute inset-0 w-full h-full object-cover"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              // Fallback placeholder if no video URL
              <div className="absolute inset-0 flex items-center justify-center text-[#a1a1aa] text-sm">
                Video player loading...
              </div>
            )}

            {/* Optional: Animated Light Border on the Video Frame */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl border border-[#8b5cf6]/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500 video-card-light-border" />
          </div>
        </div>

        {/* Bottom Details Section */}
        <div className="p-5 sm:p-8 pt-0 sm:pt-0">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            {project.title}
          </h2>
          <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}