import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assetPath } from "../lib/assetPath";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e) => {
      const id = Date.now();
      setClicks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);

      // 🔄 Increased to 2500ms (2.5 seconds) to give the water time to fully fade
      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== id));
      }, 2500);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <>
      {/* 🌊 Water Ripple Effect */}
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            // Slower container fade (2 seconds)
            transition={{ duration: 2, ease: "easeOut" }}
            className="fixed pointer-events-none z-[999998]"
            style={{ left: click.x, top: click.y }}
          >
            {/* Outer Ripple - Slower & wider expansion */}
            <motion.div
              initial={{ scale: 0, opacity: 0.9 }}
              animate={{ scale: 3.5, opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-[#06b6d4]"
            />
            
            {/* Inner Ripple - Medium speed */}
            <motion.div
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-white"
            />
            
            {/* Central Splash - Pops and fades smoothly */}
            <motion.div
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#06b6d4] rounded-full blur-[1px]"
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ⚔️ THE MAIN CURSOR */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
      >
        {/* 🔮 Orbiting Spherical Rings */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-7 h-7 flex items-center justify-center">
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-[#06b6d4]/80" 
          />

          <motion.div
            animate={{ rotate: -360, scale: [1, 1.1, 1] }}
            transition={{ 
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-1 rounded-full border border-[#06b6d4]/50"
          />
          
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-2 rounded-full bg-[#06b6d4] blur-sm"
          />
        </div>

        {/* ⚔️ The Sword Image */}
        <img 
          src={assetPath("/images/cursor.png")} 
          alt="cursor"
          className="relative z-10 w-10 h-10 object-contain"
          style={{
            filter: "drop-shadow(0px 0px 12px rgba(6, 182, 212, 1)) drop-shadow(0px 0px 25px rgba(6, 181, 212, 0.44))",
          }}
        />
      </motion.div>
    </>
  );
}