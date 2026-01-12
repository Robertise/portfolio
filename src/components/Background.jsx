import React, { useEffect, useState, useMemo } from 'react';

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

  useEffect(() => { 
    setDot({
      x: Math.random() * 100,
      y: Math.random() * 100,
    });
  }, []);

  return (
    <>
      {/* Grid background */}
      <Net />
      
      {/* Single purple dot with heavy blur */}
      {dot && (
        <div
          className="fixed rounded-full z-0 pointer-events-none"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(168, 85, 247, 0) 70%)',
            filter: 'blur(80px)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </>
  );
}

export default Background;