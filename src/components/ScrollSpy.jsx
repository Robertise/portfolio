import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "../config/navigation";
import { useTheme } from "../hooks/useTheme";

const DOT_SPACING = 30;
const TRIGGER_OFFSET = 120;

export default function ScrollSpy() { 
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fillDir, setFillDir] = useState("down");

  const dotRef = useRef(0); 
  const dirRef = useRef("down");

  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.target)
      ).filter(Boolean);

      if (!sections.length) return;

      const scrollY = window.scrollY;
      const last = sections.length - 1;

      const tp = sections.map((s, i) =>
        i === 0 ? 0 : Math.max(0, s.offsetTop - TRIGGER_OFFSET)
      );

      let dot = dotRef.current;
      let dir = dirRef.current;

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

      if (dot === 0 && dir === "up") dir = "down";

      let prog = 0;
      if (dir === "down" && dot < last) {
        const range = tp[dot + 1] - tp[dot];
        prog = range > 0 ? (scrollY - tp[dot]) / range : 0;
      } else if (dir === "up" && dot > 0) {
        const range = tp[dot] - tp[dot - 1];
        prog = range > 0 ? (tp[dot] - scrollY) / range : 0;
      }

      prog = Math.min(Math.max(prog, 0), 1);

      dotRef.current = dot;
      dirRef.current = dir;

      setActiveIndex(dot);
      setProgress(prog);
      setFillDir(dir);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primary = isDark ? "#2f81f7" : "#1337ec";
  const secondary = isDark ? "#4B5563" : "#D1D5DB";

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

  const isLastSectionDown = activeIndex === NAV_ITEMS.length - 1 && fillDir === "down";
  const barHeight = isLastSectionDown ? 0 : DOT_SPACING * progress;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex">
      <div
        className="relative flex flex-col items-center"
        style={{ height: totalHeight }}
      > 
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

          return (
            <button
              key={item.id}
              onClick={() => handleDotClick(item.target)}
              style={{ height: DOT_SPACING, width: 28 }}
              className="flex items-center justify-center"
              title={item.name}
            >
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
            </button>
          );
        })}
      </div>
    </div>
  );
}