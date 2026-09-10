export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group bg-slate-800 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        {project.type === "video" && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <div className="bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
          {project.category === "ai-video" && "AI Video"}
          {project.category === "ai-image" && "AI Image"}
          {project.category === "web" && "Web Project"}
        </span>
        <h3 className="font-bold text-lg mb-2 text-white line-clamp-2 mt-2">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}