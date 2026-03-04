import React, { useEffect, useState, useMemo } from 'react';
import { useTheme } from '../hooks/useTheme';

const Net = ({ 
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

const Background = () => {
  const [dot, setDot] = useState(null);
  const { isDark } = useTheme();

  useEffect(() => { 
    setDot({
      x: Math.random() * 100,
      y: Math.random() * 100,
    });
  }, []);

  // Adaptive grid color based on theme
  const gridColor = isDark ? "#e0e0e015" : "#e0e0e030";

  return (
    <>
      {/* Grid background */}
      <Net color={gridColor} />
      
      {/* Single purple dot with heavy blur */}
      {dot && (
        <div
          className="fixed rounded-full z-0 pointer-events-none"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: '500px',
            height: '500px',
            background: isDark
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%)'
              : 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0) 70%)',
            filter: 'blur(80px)',
            transform: 'translate(-50%, -50%)',
            transition: 'background 0.3s ease',
          }}
        />
      )}
    </>
  );
}

export default Background;