import { useEffect } from "react";

export default function VideoModal({ project, onClose }) {
  // Lock scroll + close on Escape key
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!project) return null;

  const isLocalVideo = project.videoUrl?.endsWith(".mp4");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#13131e] border border-[#26263a] rounded-2xl shadow-[0_0_80px_rgba(139,92,246,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-[#8b5cf6] backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-xl transition-colors"
          aria-label="Close"
        >
          ×
        </button>

        {/* Video area */}
        <div className="relative w-full bg-black">
          {isLocalVideo ? (
            <video
              src={project.videoUrl}
              controls
              autoPlay
              className="w-full aspect-video"
            />
          ) : (
            <iframe
              src={project.videoUrl}
              title={project.title}
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Details */}
        <div className="p-6 lg:p-8">
          {/* Category + type */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[#8b5cf6]/15 text-[#a78bfa] border border-[#8b5cf6]/30">
              {project.category}
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[#26263a] text-[#a1a1aa]">
              {project.type}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-[#a1a1aa] mt-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tools */}
          {project.tools && project.tools.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xs uppercase tracking-wider text-[#8b5cf6] font-semibold mb-3">
                Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#26263a] text-[#e5e5e5] border border-[#3a3a52]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA inside modal */}
          <div className="mt-8 pt-6 border-t border-[#26263a] flex flex-wrap gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            >
              Start a Project Like This
            </a>
            <button
              onClick={onClose}
              className="border border-[#26263a] hover:border-[#8b5cf6] hover:text-[#a78bfa] px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}