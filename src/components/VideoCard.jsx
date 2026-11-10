import { motion } from "framer-motion";

export default function VideoCard({ project, onClick }) {
  const categoryLabel =
    {
      "ai-video": "AI Video",
      "product-visuals": "Product Visual",
      "social-content": "Social Content",
      ugc: "UGC",
    }[project.category] || project.category;

  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#13131e] border border-[#26263a] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-transparent hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.4)] video-card-light-border"
    >
      {/* Media area — uniform aspect ratio for clean grid */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-hover:brightness-[1.08]"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category badge top-left (Now with Ping Dot) */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 transition-transform duration-500 group-hover:-translate-y-0.5 flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
          </span>
          <span className="text-xs font-medium text-white/90 uppercase tracking-wider">
            {categoryLabel}
          </span>
        </div>

        {/* Type badge top-right (Now with Purple Ping Dot) */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 transition-transform duration-500 group-hover:-translate-y-0.5 flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a78bfa] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#a78bfa]"></span>
          </span>
          <span className="text-xs font-medium text-[#a78bfa]">
            {project.type}
          </span>
        </div>

        {/* Play button center — appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <div className="w-16 h-16 rounded-full bg-[#8b5cf6] flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.6)] transform scale-75 group-hover:scale-100 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <svg
              className="w-6 h-6 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Bottom overlay text — nudges up on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
          <h3 className="text-lg font-bold text-white leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-[#a1a1aa] mt-1 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="px-5 py-4 flex flex-col gap-3 border-t border-[#26263a]">
        {/* 🌟 UPDATED TAGS: Stacked perfectly without being squished */}
        <div className="flex flex-wrap gap-2">
          {project.tools?.slice(0, 2).map((tool) => (
            <div
              key={tool}
              className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#1e1e2d] border border-[#8b5cf6]/20 backdrop-blur-md"
            >
              {/* Running Light Circle */}
              <div className="relative flex items-center justify-center w-1.5 h-1.5 shrink-0">
                <div className="absolute inset-0 bg-[#8b5cf6] rounded-full shadow-[0_0_8px_#8b5cf6] opacity-50" />
                <motion.div
                  animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,transparent_0%,#8b5cf6_40%,#ffffff_50%,#8b5cf6_60%,transparent_100%)] bg-[length:200%_auto]"
                />
              </div>
              {/* Tag Text */}
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#d4d4d8]">
                {tool}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}