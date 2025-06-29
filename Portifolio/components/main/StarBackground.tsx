"use client";

import React, { useMemo, useEffect, useState } from "react";

const STAR_COUNT = 80;
const WIDTH = 1920;
const HEIGHT = 1080;

function randomStar() {
  const angle = Math.random() * 2 * Math.PI;
  const speed = 0.15 + Math.random() * 0.25; // px por frame
  return {
    cx: Math.random() * WIDTH,
    cy: Math.random() * HEIGHT,
    r: Math.random() * 1.2 + 0.3,
    opacity: Math.random() * 0.7 + 0.2,
    dx: Math.cos(angle) * speed,
    dy: Math.sin(angle) * speed,
  };
}

// Fallback visual: fundo animado com SVG (estrelas)
const StarBackground = () => {
  const [mounted, setMounted] = useState(false);

  // Só gera estrelas no cliente
  const initialStars = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: STAR_COUNT }).map(randomStar);
  }, [mounted]);

  const [stars, setStars] = useState(initialStars);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    setStars(initialStars);
    let animationId: number;
    function animate() {
      setStars(prevStars =>
        prevStars.map(star => {
          let newCx = star.cx + star.dx;
          let newCy = star.cy + star.dy;
          if (newCx < 0) newCx = WIDTH;
          if (newCx > WIDTH) newCx = 0;
          if (newCy < 0) newCy = HEIGHT;
          if (newCy > HEIGHT) newCy = 0;
          return { ...star, cx: newCx, cy: newCy };
        })
      );
      animationId = requestAnimationFrame(animate);
    }
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
    // eslint-disable-next-line
  }, [mounted, initialStars]);

  if (!mounted) return null; // Não renderiza nada no SSR

  return (
    <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
      <svg width="100%" height="100%" className="absolute inset-0 w-full h-full" style={{ minHeight: 600 }}>
        {stars.map((star, i) => (
          <circle
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="#fff"
            opacity={star.opacity}
            style={{ transition: 'none' }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
    </div>
  );
};

export default StarBackground;
