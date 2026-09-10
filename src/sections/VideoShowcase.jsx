import { useState } from "react";
import { projects } from "../data/projects";
import VideoCard from "../components/VideoCard";
import VideoModal from "../components/VideoModal";

const FILTERS = [
  { label: "All Work", value: "all" },
  { label: "Commercial", value: "commercial" },
  { label: "Social", value: "social" },
  { label: "Character", value: "character" },
  { label: "Storytelling", value: "story" },
  { label: "Food", value: "food" },
];

export default function VideoShowcase() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const visible =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="relative py-24 lg:py-32 px-6 lg:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8b5cf6]/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8b5cf6] font-semibold">
            Selected Work
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mt-3 text-balance">
            Videos that{" "}
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">
              stop the scroll
            </span>
            .
          </h2>
          <p className="text-[#a1a1aa] mt-5 text-lg leading-relaxed">
            A curated collection of AI-generated videos built for brands,
            creators, and businesses that want to stand out.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === f.value
                  ? "bg-[#8b5cf6] border-[#8b5cf6] text-white shadow-[0_0_25px_rgba(139,92,246,0.4)]"
                  : "bg-transparent border-[#26263a] text-[#a1a1aa] hover:border-[#8b5cf6]/50 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="text-center py-20 text-[#71717a]">
            No projects in this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {visible.map((project) => (
              <VideoCard
                key={project.id}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-[#a1a1aa] mb-4">
            Want to see more or discuss a project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#8b5cf6] hover:text-[#a78bfa] font-semibold transition-colors"
          >
            Let's talk →
          </a>
        </div>
      </div>

      {selected && (
        <VideoModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}