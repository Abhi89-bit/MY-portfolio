import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particles configuration
    const particleCount = Math.min(60, Math.floor((width * height) / 25000));
    const particles: Particle[] = [];
    const mouse = { x: 0, y: 0, radius: 180, active: false };

    const keywords = [
      "Python", "Django", "React", "SQL", "Cybersecurity", 
      "HTML5", "CSS3", "JavaScript", "Next.js", "MongoDB", 
      "API", "Git", "Bootstrap"
    ];

    // Helper to extract the current theme color dynamically from CSS variables
    const getThemeColor = () => {
      if (typeof window !== "undefined") {
        const primary = getComputedStyle(document.body).getPropertyValue("--theme-primary").trim();
        if (primary) return primary;
      }
      return "#6dd5c4"; // default fallback
    };

    // Helper to convert hex to rgb
    const hexToRgb = (hex: string) => {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 109, g: 213, b: 196 };
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      keyword: string | null;
      opacity: number;

      constructor(isKeyword = false) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = isKeyword ? 0 : Math.random() * 2 + 1;
        this.keyword = isKeyword ? keywords[Math.floor(Math.random() * keywords.length)] : null;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      draw(colorRgb: { r: number; g: number; b: number }) {
        if (!ctx) return;
        ctx.beginPath();
        const colorStr = `rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, `;
        
        if (this.keyword) {
          ctx.font = "11px Courier New, monospace";
          ctx.fillStyle = `${colorStr}${this.opacity * 0.6})`;
          ctx.fillText(this.keyword, this.x, this.y);
        } else {
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${colorStr}${this.opacity})`;
          ctx.fill();
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on borders
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction (repelling force)
        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 2;
            this.y += Math.sin(angle) * force * 2;
          }
        }
      }
    }

    // Initialize particles
    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(false));
      }
      const wordCount = Math.min(12, Math.floor(width / 120));
      for (let i = 0; i < wordCount; i++) {
        particles.push(new Particle(true));
      }
    };

    init();

    // Draw connecting lines using the active theme color
    const drawConnections = (colorRgb: { r: number; g: number; b: number }) => {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          if (p1.keyword || p2.keyword) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    // Animation Loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Fetch dynamic theme color on each frame
      const currentThemeColor = getThemeColor();
      const colorRgb = hexToRgb(currentThemeColor);

      // Draw subtle background grid
      drawGrid();

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw(colorRgb);
      });

      drawConnections(colorRgb);

      animationFrameId = requestAnimationFrame(animate);
    };

    const drawGrid = () => {
      if (!ctx) return;
      const gridSize = 80;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.01)";
      ctx.lineWidth = 0.5;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    animate();

    // Event Listeners
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.active = true;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 bg-slate-950"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
