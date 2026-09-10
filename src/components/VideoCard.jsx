export default function VideoCard({ project, onClick }) {
  const categoryLabel = {
    commercial: "Commercial",
    food: "Food",
    social: "Social",
    character: "Character",
    story: "Storytelling",
  }[project.category] || project.category;

  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#13131e] border border-[#26263a] hover:border-[#8b5cf6]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]"
    >
      {/* Media area — aspect ratio depends on type */}
     <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent" />

        {/* Category badge top-left */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
          <span className="text-xs font-medium text-white/90 uppercase tracking-wider">
            {categoryLabel}
          </span>
        </div>

        {/* Type badge top-right */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
          <span className="text-xs font-medium text-[#a78bfa]">
            {project.type}
          </span>
        </div>

        {/* Play button center — appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-[#8b5cf6] flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.6)] transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Bottom overlay text */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-lg font-bold text-white leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-[#a1a1aa] mt-1 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="px-5 py-4 flex items-center justify-between border-t border-[#26263a]">
        <div className="flex flex-wrap gap-1.5">
          {project.tools?.slice(0, 2).map((tool) => (
            <span
              key={tool}
              className="text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded-md bg-[#26263a] text-[#a1a1aa]"
            >
              {tool}
            </span>
          ))}
        </div>
        <span className="text-xs font-medium text-[#8b5cf6] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          View Project →
        </span>
      </div>
    </div>
  );
}