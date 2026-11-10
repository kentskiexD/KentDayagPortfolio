import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { assetPath } from "../lib/assetPath";

const EASE = [0.22, 1, 0.36, 1];

export default function VideoModal({ project, onClose }) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open"); 
    
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open"); 
    };
  }, []);

  if (!project) return null;

  const hasOriginalImages = project.originalImages && project.originalImages.length > 0;
  const isVertical = project.type?.toLowerCase() === "vertical" || project.videoUrl?.includes("shorts");

  // 🌟 LOGIC: Prioritize direct MP4, fallback to YouTube
  const hasDirectMp4 = project.videoUrl && (project.videoUrl.endsWith(".mp4") || project.videoUrl.endsWith(".webm"));
  const finalVideoUrl = hasDirectMp4 ? project.videoUrl : (project.youtubeUrl || project.videoUrl);
  const isDirectVideo = finalVideoUrl && (finalVideoUrl.endsWith(".mp4") || finalVideoUrl.endsWith(".webm"));

  // 🌟 HELPER: Sanitize YouTube URLs
  const getCleanUrl = () => {
    if (!finalVideoUrl) return "";
    if (finalVideoUrl.includes("youtube.com/embed/")) return finalVideoUrl;

    let videoId = "";
    if (finalVideoUrl.includes("youtu.be/")) {
      videoId = finalVideoUrl.split("youtu.be/")[1]?.split(/[?&]/)[0];
    } else if (finalVideoUrl.includes("youtube.com/shorts/")) {
      videoId = finalVideoUrl.split("youtube.com/shorts/")[1]?.split(/[?&]/)[0];
    } else if (finalVideoUrl.includes("youtube.com/watch")) {
      videoId = finalVideoUrl.split("v=")[1]?.split(/[?&]/)[0];
    } else if (finalVideoUrl.includes("m.youtube.com/watch")) {
      videoId = finalVideoUrl.split("v=")[1]?.split(/[?&]/)[0];
    }

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return finalVideoUrl;
  };

  const finalEmbedUrl = getCleanUrl();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pt-16 sm:p-6 sm:pt-6 cursor-auto overflow-y-auto">
      
      {/* Dark Backdrop Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-0 bg-[#0a0a0f]/95 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.4, ease: EASE }}
        className={`relative z-10 w-full flex flex-col gap-4 cursor-auto my-auto ${
          isVertical ? "max-w-4xl md:flex-row md:items-stretch" : "max-w-3xl"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 sm:absolute sm:-top-12 sm:right-0 md:-right-2 w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#8b5cf6]/30 text-white/80 hover:text-white transition-all duration-300 backdrop-blur-lg border border-white/20 hover:border-[#8b5cf6]/60 z-[110] group cursor-pointer shadow-lg"
          title="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-90 transition-transform duration-300">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* 1. THE VIDEO AREA */}
        <div 
          className={`relative rounded-2xl bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden shrink-0 ${
            isVertical 
              ? "w-full max-h-[50vh] md:max-h-none md:w-[350px] aspect-[9/16] mx-auto" 
              : "w-full aspect-video"
          }`}
        >
          <div className="w-full h-full relative flex items-center justify-center bg-black">
            
            {/* 🌟 PRIORITY 1: DIRECT MP4 WITH POSTER AND PRELOAD */}
            {isDirectVideo ? (
              <video
                src={finalEmbedUrl}
                poster={project.thumbnail}
                preload="auto"
                controls
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : finalEmbedUrl ? (
              /* 🌟 PRIORITY 2: CLEANED YOUTUBE IFRAME */
              <iframe
                src={finalEmbedUrl} 
                className="absolute inset-0 w-full h-full object-cover border-0" 
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
              />
            ) : project.thumbnail ? (
              /* 🌟 FALLBACK: THUMBNAIL */
              <div className="w-full h-full relative flex items-center justify-center p-2 bg-[#13131e]">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ) : null}

          </div>

          {/* Running Light Border */}
          <div className="absolute inset-0 pointer-events-none bg-transparent rounded-2xl overflow-hidden opacity-30 z-20">
            <motion.div
              animate={shouldReduceMotion ? {} : { backgroundPosition: ["200% center", "-200% center"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl bg-[linear-gradient(90deg,transparent_0%,#4c1d95_30%,#8b5cf6_45%,#c4b5fd_50%,#8b5cf6_55%,#4c1d95_70%,transparent_100%)] bg-[length:200%_auto]"
              style={{
                padding: '1px', 
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
          </div>
        </div>

        {/* 2. TEXT INFO & IMAGES PANEL */}
        <div className={`flex flex-col bg-[#13131e]/80 border border-[#26263a] backdrop-blur-xl rounded-2xl p-5 sm:p-6 relative ${
          isVertical ? "flex-1 md:h-full" : "w-full"
        }`}>
          
          {/* Title and Tags */}
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
              <h2 className={`font-black text-white leading-tight ${isVertical ? "text-xl sm:text-2xl" : "text-xl sm:text-2xl"}`}>
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2 shrink-0">
                <span className="px-2.5 py-1 rounded-full bg-[#1e1e2d]/80 border border-[#8b5cf6]/30 text-[#a78bfa] text-[9px] font-bold uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[9px] font-bold uppercase tracking-widest">
                  {project.type}
                </span>
              </div>
            </div>
            
            <p className={`text-[#d4d4d8] leading-relaxed ${isVertical ? "text-sm" : "text-xs sm:text-sm"}`}>
              {project.description}
            </p>
          </div>

                    {/* 3. THE ORIGINAL IMAGES */}
          {hasOriginalImages && (
            <div className="mt-auto border-t border-white/10 pt-4">
              <p className="text-[#a78bfa] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] animate-pulse" />
                {project.originalLabel || "Original Products"}
              </p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.originalImages.map((img, index) => {
                  // 🌟 THE FIX: Just use the string directly. 
                  // projects.js already formatted it perfectly!
                  const imgSrc = img;

                  return (
                    <div 
                      key={index} 
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-[#8b5cf6]/30 bg-[#0a0a0f] hover:border-[#8b5cf6] transition-all duration-300 group shrink-0"
                    >
                      <img 
                        src={imgSrc} 
                        alt={`Original ${index + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          console.error("Failed image URL:", imgSrc); // Check console for exact URL
                          e.target.onerror = null; 
                          e.target.src = "https://placehold.co/150x150/13131e/8b5cf6?text=Missing";
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}