import { FaArrowRightLong } from "react-icons/fa6";
import { useTheme } from "../hooks/useTheme";

export default function Terminal() {
  const { isDark } = useTheme();

  return (
    <div className="flex justify-center px-3 sm:px-4 py-4 sm:py-8 md:py-16 pt-20 sm:pt-24 md:pt-32">
      <div className="w-full max-w-4xl bg-(--terminal-bg) rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-2xl flex flex-col border border-(--border-color) transition-colors duration-300">
        {/* Terminal Header */}
        <div className="bg-(--terminal-header) px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-(--border-color) transition-colors duration-300">
          <div className="flex gap-2">
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="flex-1 text-center text-(--text-secondary) text-xs md:text-sm font-mono">
            user@portfolio ~ %
          </div>
          <div className="w-8 sm:w-12"></div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 sm:p-6 md:p-10 lg:p-12 space-y-6 sm:space-y-8">
          {/* whoami section */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaArrowRightLong
                color="#27c93f"
                size={12}
                className="shrink-0"
              />
              <p className="text-(--text-secondary) font-mono text-xs sm:text-sm md:text-base">
                <span className="text-(--accent)">~</span> whoami
              </p>
            </div>
            <div className="px-3 sm:px-4 md:px-6 ml-0 border-l-2 border-(--accent) pl-3 sm:pl-4 space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-bold font-[Pridi] text-(--text-primary)">
                Gia Huy
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-(--accent) font-medium">
                AI Student @ Swinburne University
                <br />
                Based in Ho Chi Minh City, Vietnam
              </p>
            </div>
          </div>

          {/* mission section */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaArrowRightLong
                color="#27c93f"
                size={12}
                className="flex-shrink-0"
              />
              <p className="text-(--text-secondary) font-mono text-xs sm:text-sm md:text-base">
                <span className="text-(--accent)">~</span> cat mission.txt
              </p>
            </div>
            <div className="px-3 sm:px-4 md:px-6 ml-0 border-l-2 border-(--accent) pl-3 sm:pl-4">
              <p className="text-xs sm:text-sm md:text-base text-(--text-secondary) leading-relaxed">
                "Building intelligent systems through logic and curiosity.
                <br />
                Dedicated to creating efficient and scalable AI solutions that
                bridge the gap between complex data and human understanding."
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
            <button className="bg-(--primary) hover:opacity-90 active:opacity-80 text-white font-medium text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg transition-all duration-200">
              View Projects ➔
            </button>
            <button className="border border-(--border-color) hover:bg-(--hover-bg) text-(--text-primary) font-medium text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg transition-colors duration-200">
              Contact Me
            </button>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="bg-(--terminal-header) px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-t border-(--border-color) transition-colors duration-300">
          <div className="flex gap-1 sm:gap-2 items-center text-(--text-secondary) text-xs font-mono">
            <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
            <span className="hidden sm:inline">Status: Online</span>
            <span className="sm:hidden">Online</span>
            <span className="text-(--border-color) hidden sm:inline">|</span>
            <span className="hidden md:inline">Branch: main</span>
          </div>
          <div className="text-(--text-secondary) text-xs font-mono">UTF-8</div>
        </div>
      </div>
    </div>
  );
}
