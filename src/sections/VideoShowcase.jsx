import { useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";
import VideoCard from "../components/VideoCard";
import VideoModal from "../components/VideoModal";

const EASE = [0.22, 1, 0.36, 1];
const FILTERS = [
  { label: "All Work", value: "all" },
  { label: "AI Videos", value: "ai-video" },
  { label: "Product Visuals", value: "product-visuals" },
  { label: "Social Content", value: "social-content" },
];
export default function VideoShowcase() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const visible =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-24 lg:py-32 px-6 lg:px-8"
    >
    
      <div className="max-w-7xl mx-auto">
        {/* Header with scroll reveal */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={
            isHeaderInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: shouldReduceMotion ? 0 : 30 }
          }
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
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
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={
            isHeaderInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }
          }
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          className="flex flex-wrap gap-2 mb-10"
        >
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
        </motion.div>

        {/* Grid with staggered reveal */}
        {visible.length === 0 ? (
          <div className="text-center py-20 text-[#71717a]">
            No projects in this category yet.
          </div>
        ) : (
          <motion.div
            ref={gridRef}
            initial="hidden"
            animate={isGridInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.08,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
          >
            {visible.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: EASE },
                  },
                }}
              >
                <VideoCard
                  project={project}
                  onClick={() => setSelected(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={
            isGridInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }
          }
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="mt-16 text-center"
        >
          <p className="text-[#a1a1aa] mb-4">
            Want to discuss a project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#8b5cf6] hover:text-[#a78bfa] font-semibold transition-colors group"
          >
            Let's talk
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      {selected && (
        <VideoModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}