import { useMemo } from "react";

const Background = ({ 
  gap = 50, 
  color = "#e0e0e080", 
  stroke = 0.05 
}) => {
  const patternId = useMemo(() => "grid-pattern", []);

  return (
    <svg
      className="fixed inset-0 z-0 pointer-events-none"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          width={gap}
          height={gap}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M${gap / 2} 0 V${gap} M0 ${gap / 2} H${gap}`}
            stroke={color}
            strokeWidth={stroke}
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

export default Background;