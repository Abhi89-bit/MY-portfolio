import { useState, useRef, MouseEvent, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string; // e.g., 'rgba(59, 130, 246, 0.4)'
}

export default function TiltCard({ children, className = "", glowColor = "rgba(99, 102, 241, 0.15)" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    
    // Mouse position relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize coordinates to ranges -0.5 to 0.5
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;

    setCoords({ x: normalizedX, y: normalizedY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Rotation amounts (max 15 degrees)
  const rotateX = -coords.y * 20;
  const rotateY = coords.x * 20;
  
  // Spotlight position
  const spotlightX = isHovered && cardRef.current 
    ? `${(coords.x + 0.5) * 100}%` 
    : "50%";
  const spotlightY = isHovered && cardRef.current 
    ? `${(coords.y + 0.5) * 100}%` 
    : "50%";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-300 ease-out transform-gpu rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl ${className}`}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)` 
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        boxShadow: isHovered 
          ? `0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px 2px ${glowColor}` 
          : "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
        zIndex: isHovered ? 10 : 1,
      }}
    >
      {/* Interactive Spotlight Glow Overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 180px at ${spotlightX} ${spotlightY}, ${glowColor}, transparent 80%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      
      {/* Secondary Edge Highlight */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none border border-white/5 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.8 : 0.2,
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative h-full w-full z-10">
        {children}
      </div>
    </div>
  );
}
