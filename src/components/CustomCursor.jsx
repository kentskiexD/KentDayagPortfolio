import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assetPath } from "../lib/assetPath";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [clicks, setClicks] = useState([]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isPointerFine = window.matchMedia("(pointer: fine)").matches;
      const isWideScreen = window.innerWidth >= 1024;
      setIsDesktop(isPointerFine && isWideScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e) => {
      if (!window.matchMedia("(pointer: fine)").matches) return;
      
      const id = Date.now();
      setClicks((prev) => [...prev, { id, x: e.clientX + 2, y: e.clientY + 2 }]);

      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== id));
      }, 2500);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleClick);

    const observer = new MutationObserver(() => {
      setIsModalOpen(document.body.classList.contains("modal-open"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleClick);
      observer.disconnect();
    };
  }, []);

  if (!isDesktop || isModalOpen) return null;

  return (
    <>
      {/* 🌊 Water Ripple Effect (Z-0) */}
      <div className="fixed inset-0 pointer-events-none z-0 outline-none">
        <AnimatePresence>
          {clicks.map((click) => (
            <motion.div
              key={click.id}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="fixed pointer-events-none"
              style={{ left: click.x, top: click.y }}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0.9 }}
                animate={{ scale: 3.5, opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-[#06b6d4]"
              />
              
              <motion.div
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-white"
              />
              
              <motion.div
                initial={{ scale: 0.5, opacity: 1 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#06b6d4] rounded-full blur-[1px]"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ⚡ THE SMALL DIAGONAL DOT TRAIL */}
      {[0.1, 0.2, 0.3, 0.4, 0.5].map((delay, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 pointer-events-none z-[999997]"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 450 - (index * 40), 
            damping: 30 + (index * 5),     
            mass: 0.1 
          }}
        >
          {/* The Tiny Dot */}
          <div 
            className="absolute top-[2px] left-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06b6d4]"
            style={{ 
              width: 5 - (index * 0.8),   // 5px down to 1.8px
              height: 5 - (index * 0.8), 
              opacity: 0.6 - (index * 0.1), // Fades out quickly
              boxShadow: "0 0 6px #06b6d4", // Subtle glow
            }} 
          />
        </motion.div>
      ))}

      {/* ⚔️ THE MAIN CURSOR */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
      >
        {/* 🔮 Orbiting Rings at the Top-Left Tip */}
        <div className="absolute top-[2px] left-[2px] -translate-x-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 flex items-center justify-center">
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-[#06b6d4]/80" 
          />

          <motion.div
            animate={{ rotate: -360, scale: [1, 1.1, 1] }}
            transition={{ 
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-0.5 rounded-full border border-[#06b6d4]/50"
          />
          
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-1 rounded-full bg-[#06b6d4] blur-[2px]"
          />
        </div>

        {/* ⚔️ The Sword Image with Pulsing Aura */}
        <motion.div
          animate={{
            filter: [
              "drop-shadow(0px 0px 10px rgba(6, 182, 212, 0.8)) drop-shadow(0px 0px 20px rgba(6, 182, 212, 0.4))",
              "drop-shadow(0px 0px 20px rgba(6, 182, 212, 1)) drop-shadow(0px 0px 40px rgba(6, 182, 212, 0.6))",
              "drop-shadow(0px 0px 10px rgba(6, 182, 212, 0.8)) drop-shadow(0px 0px 20px rgba(6, 182, 212, 0.4))"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <img 
            src={assetPath("/images/cursor-final.png")} 
            alt="cursor"
            className="w-12 h-12 object-contain pointer-events-none outline-none"
          />
        </motion.div>
      </motion.div>
    </>
  );
}