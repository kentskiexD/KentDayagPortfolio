import { useState, useRef, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";
import VideoCard from "../components/VideoCard";
import VideoModal from "../components/VideoModal";

const EASE = [0.22, 1, 0.36, 1];
const ITEMS_PER_PAGE = 6;

const FILTERS = [
  { label: "All Work", value: "all" },
  { label: "AI Videos", value: "ai-video" },
  { label: "Product Visuals", value: "product-visuals" },
  { label: "Social Content", value: "social-content" },
  { label: "UGC", value: "ugc" },
];

export default function VideoShowcase() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  // Filter projects by category
  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  // Pagination calculations
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visible = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // Handle page change with smooth scroll to grid top
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (gridRef.current) {
      const yOffset = -100;
      const y =
        gridRef.current.getBoundingClientRect().top +
        window.scrollY +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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

        {/* Grid + Pagination wrapper — reserves consistent height */}
        <div className="flex flex-col min-h-[2400px] md:min-h-[1600px] lg:min-h-[900px]">
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
              key={`${filter}-${currentPage}`}
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

          {/* Pagination — pinned to bottom of reserved space */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={
                isGridInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }
              }
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="mt-auto pt-12 flex justify-center items-center gap-2 flex-wrap"
            >
              {/* Prev button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  currentPage === 1
                    ? "border-[#26263a] text-[#4a4a5c] cursor-not-allowed opacity-50"
                    : "border-[#26263a] text-[#a1a1aa] hover:border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6]/10"
                }`}
                aria-label="Previous page"
              >
                ← Prev
              </button>

              {/* Page number buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300 border ${
                      currentPage === page
                        ? "bg-[#8b5cf6] border-[#8b5cf6] text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                        : "border-[#26263a] text-[#a1a1aa] hover:border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6]/10"
                    }`}
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                )
              )}

              {/* Next button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  currentPage === totalPages
                    ? "border-[#26263a] text-[#4a4a5c] cursor-not-allowed opacity-50"
                    : "border-[#26263a] text-[#a1a1aa] hover:border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6]/10"
                }`}
                aria-label="Next page"
              >
                Next →
              </button>
            </motion.div>
          )}
        </div>

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