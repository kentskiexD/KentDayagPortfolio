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

  const [shuffledProjects] = useState(() => [...projects].sort(() => Math.random() - 0.5));

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const scrollTargetRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const filtered =
    filter === "all"
      ? shuffledProjects 
      : projects.filter((p) => p.category === filter);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visible = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    setTimeout(() => {
      if (scrollTargetRef.current) {
        const yOffset = -100;
        const y = scrollTargetRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50);
  };

  const getPaginationRange = () => {
    const delta = 1; 
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <section ref={sectionRef} id="work" className="relative py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-[#8b5cf6] font-semibold">
            Selected Work
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mt-3 text-balance">
            Videos that{" "}
            <span className="relative inline-block italic">
              <motion.span
  animate={shouldReduceMotion ? {} : { backgroundPosition: ["200% center", "-200% center"] }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
  // 🌟 CHANGED: pr-[0.05em] to pr-[0.2em] to give the italic "l" more room
  className="bg-[linear-gradient(90deg,#4c1d95_0%,#8b5cf6_20%,#c4b5fd_40%,#e9d5ff_50%,#c4b5fd_60%,#8b5cf6_80%,#4c1d95_100%)] bg-[length:250%_auto] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.4)] inline-block pb-[0.1em] pr-[0.2em] will-change-[background-position] transform-gpu"
>
  stop the scroll
</motion.span>
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
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          className="flex flex-wrap gap-2 sm:gap-3 mb-10 justify-start"
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`glass-pill-btn ${filter === f.value ? "active" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Scroll Target Marker */}
        <div ref={scrollTargetRef} className="relative -top-24" />

        {/* Grid + Pagination wrapper */}
        <div className="flex flex-col">
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
                visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
              }}
              key={`${filter}-${currentPage}`}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
            >
              {visible.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
                  }}
                >
                  <VideoCard project={project} onClick={() => setSelected(project)} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* 🌟 FIXED PAGINATION: Shrinks to fit 1 line on mobile */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={isGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="mt-12 flex justify-center items-center gap-1 sm:gap-2 flex-nowrap"
            >
              {/* Prev button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="glass-pill-btn px-2 sm:px-4 py-2 text-[10px] sm:text-sm shrink-0"
              >
                ← Prev
              </button>

              {/* Render Smart Pages */}
              {getPaginationRange().map((page, index) => {
                if (page === "...") {
                  return (
                    <span key={`dots-${index}`} className="text-[#a1a1aa] px-0.5 sm:px-1 shrink-0 text-xs sm:text-sm">
                      ...
                    </span>
                  );
                }

                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`glass-pill-btn glass-page-btn w-7 h-7 sm:w-10 sm:h-10 text-[10px] sm:text-sm shrink-0 flex items-center justify-center ${
                      currentPage === page ? "active" : ""
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              {/* Next button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="glass-pill-btn px-2 sm:px-4 py-2 text-[10px] sm:text-sm shrink-0"
              >
                Next →
              </button>
            </motion.div>
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={isGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="mt-16 text-center"
        >
          <p className="text-[#a1a1aa] mb-4">Want to discuss a project?</p>
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
      {selected && <VideoModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}