export default function ProjectModal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start p-6 border-b border-slate-700">
          <div>
            <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
              {project.category === "ai-video" && "AI Video"}
              {project.category === "ai-image" && "AI Image"}
              {project.category === "web" && "Web Project"}
            </span>
            <h2 className="text-2xl font-bold mt-1">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {project.type === "video" ? (
            <div className="aspect-video rounded-lg overflow-hidden bg-black">
              <iframe
                src={project.src}
                title={project.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <img
              src={project.src}
              alt={project.title}
              className="w-full rounded-lg"
            />
          )}

          <p className="text-slate-300 mt-6 leading-relaxed">
            {project.description}
          </p>

          {project.tags && (
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="bg-slate-700 text-slate-200 text-xs px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}