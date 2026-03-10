import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "../config/navigation";
import { useTheme } from "../hooks/useTheme";

const DOT_SPACING = 30;
const TRIGGER_OFFSET = 120;

export default function ScrollSpy() {
  const [activeIndex, setActiveIndex] = useState(0); 
  const [progress, setProgress] = useState(0);    
  const [fillDir, setFillDir] = useState("down");      
  const [hoveredIndex, setHoveredIndex] = useState(null); 
  const dotRef = useRef(0);
  const dirRef = useRef("down");

  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Grab all section elements defined in NAV_ITEMS
      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.target),
      ).filter(Boolean);

      if (!sections.length) return;

      const scrollY = window.scrollY;
      const last = sections.length - 1;

      const tp = sections.map((s, i) =>
        i === 0 ? 0 : Math.max(0, s.offsetTop - TRIGGER_OFFSET),
      );

      let dot = dotRef.current;
      let dir = dirRef.current;

      // Advance or retreat the active dot based on scroll direction
      if (dir === "down") {
        while (dot < last && scrollY >= tp[dot + 1]) dot++;
        if (scrollY < tp[dot]) {
          dir = "up";
          while (dot > 0 && scrollY <= tp[dot - 1]) dot--;
        }
      } else {
        while (dot > 0 && scrollY <= tp[dot - 1]) dot--;
        if (scrollY > tp[dot]) {
          dir = "down";
          while (dot < last && scrollY >= tp[dot + 1]) dot++;
        }
      }

      // Reset direction at the top
      if (dot === 0 && dir === "up") dir = "down";

      // Calculate how far along we are between the current and next/prev dot (0–1)
      let prog = 0;
      if (dir === "down" && dot < last) {
        const range = tp[dot + 1] - tp[dot];
        prog = range > 0 ? (scrollY - tp[dot]) / range : 0;
      } else if (dir === "up" && dot > 0) {
        const range = tp[dot] - tp[dot - 1];
        prog = range > 0 ? (tp[dot] - scrollY) / range : 0;
      }

      prog = Math.min(Math.max(prog, 0), 1);

      // Persist latest values in refs for next scroll event
      dotRef.current = dot;
      dirRef.current = dir;

      setActiveIndex(dot);
      setProgress(prog);
      setFillDir(dir);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme-aware colors for active and inactive dots
  const primary = isDark ? "#2f81f7" : "#1337ec";
  const secondary = isDark ? "#4B5563" : "#D1D5DB";

  // Smooth-scroll to the clicked section
  const handleDotClick = (target) => {
    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const totalHeight = NAV_ITEMS.length * DOT_SPACING;

  const barTop =
    fillDir === "up"
      ? DOT_SPACING / 2 + activeIndex * DOT_SPACING - DOT_SPACING * progress
      : DOT_SPACING / 2 + activeIndex * DOT_SPACING;

  const isLastSectionDown =
    activeIndex === NAV_ITEMS.length - 1 && fillDir === "down";
  const barHeight = isLastSectionDown ? 0 : DOT_SPACING * progress;

  return (
    <div className="fixed right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex">
      <div
        className="relative flex flex-col items-center"
        style={{ height: totalHeight }}
      >
        {/* Animated fill bar that travels between dots */}
        <div
          style={{
            position: "absolute",
            top: barTop,
            width: "1px",
            height: barHeight,
            background: primary,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        {NAV_ITEMS.map((item, index) => {
          const isActive = index === activeIndex;
          const isHovered = hoveredIndex === index;

          return (
            <button
              key={item.id}
              onClick={() => handleDotClick(item.target)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ height: DOT_SPACING, width: 28 }}
              className="relative flex items-center justify-center group"
              title={item.name}
            >
              {/* The dot - pulses when active */}
              <motion.div
                className="rounded-full"
                style={{
                  width: 12,
                  height: 12,
                  background: isActive ? primary : secondary,
                  opacity: isActive ? 1 : 0.6,
                  zIndex: 1,
                }}
                animate={{ scale: isActive ? [1, 1.35, 1] : 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />

              {/* Tooltip - only visible on lg+ screens, hidden on md and below */}
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="hidden lg:flex absolute right-full mr-2 rounded-sm items-center whitespace-nowrap text-xs font-medium px-2 py-1 roundedpointer-events-none select-none"
                    style={{
                      background: isDark
                        ? "rgba(30,30,36,0.92)"
                        : "rgba(255,255,255,0.95)",
                      color: isDark ? "#e5e7eb" : "#111827",
                      boxShadow: isDark
                        ? "0 2px 8px rgba(0,0,0,0.45)"
                        : "0 2px 8px rgba(0,0,0,0.12)",
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                    }}
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </div>
  );
}