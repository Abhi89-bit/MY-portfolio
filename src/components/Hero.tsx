import { useEffect, useState } from "react";
import { ArrowRight, Code, Shield, Cpu, ExternalLink, Sparkles } from "lucide-react";
import InteractiveTerminal from "./InteractiveTerminal";

interface HeroProps {
  onNavClick: (sectionId: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Python Developer",
    "Django Backend Architect",
    "Cybersecurity Enthusiast",
    "React Frontend Developer",
    "SQL Database Engineer"
  ];

  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseDuration = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeRole = roles[textIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(activeRole.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % roles.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeRole.substring(0, currentText.length + 1));
        if (currentText.length === activeRole.length) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden z-10"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-40 h-40 rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium shadow-md animate-bounce-subtle">
              <Sparkles size={12} className="text-indigo-400" />
              <span>Available for Python & Full Stack roles in 2025/2026</span>
            </div>

            {/* Title / Name */}
            <div className="space-y-3">
              <p className="text-base font-mono text-indigo-400 font-semibold tracking-wider">
                HELLO, WORLD! MY NAME IS
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                ABHIRAJ <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">SINGH</span>
              </h1>
              <div className="h-10 sm:h-12 flex items-center">
                <p className="text-xl sm:text-2xl font-mono text-slate-300 font-semibold">
                  I am a <span className="text-indigo-400 border-r-2 border-indigo-500 pr-1 animate-pulse">{currentText || " "}</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              A highly motivated Full Stack Python Developer currently securing and scaling software at{" "}
              <a 
                href="https://craw.in" 
                target="_blank" 
                rel="noreferrer" 
                className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-4 decoration-indigo-500/40 hover:decoration-indigo-400 transition-all inline-flex items-center gap-1"
              >
                Craw Cybersecurity <ExternalLink size={12} />
              </a>. 
              Specializing in building robust, performant backends with Django and sleek, interactive interfaces with React.
            </p>

            {/* Floating Action Stats */}
            <div className="grid grid-cols-3 gap-4 border-y border-slate-900 py-6 max-w-md">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1.5 text-indigo-400 mb-1">
                  <Code size={16} />
                  <span className="text-xs font-mono font-bold">PYTHON</span>
                </div>
                <span className="text-sm font-semibold text-slate-200">Fullstack Expert</span>
              </div>
              <div className="flex flex-col items-start border-l border-slate-900 pl-4">
                <div className="flex items-center gap-1.5 text-violet-400 mb-1">
                  <Shield size={16} />
                  <span className="text-xs font-mono font-bold">CYBERSEC</span>
                </div>
                <span className="text-sm font-semibold text-slate-200">Secure Coding</span>
              </div>
              <div className="flex flex-col items-start border-l border-slate-900 pl-4">
                <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                  <Cpu size={16} />
                  <span className="text-xs font-mono font-bold">DJANGO</span>
                </div>
                <span className="text-sm font-semibold text-slate-200">REST APIs</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavClick("projects")}
                className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-950/60 hover:shadow-indigo-900/50 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer group"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavClick("resume")}
                className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white text-sm font-semibold rounded-xl border border-slate-800 hover:border-slate-700 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                View Resume
              </button>

              <button
                onClick={() => onNavClick("contact")}
                className="px-6 py-3.5 bg-transparent hover:bg-indigo-950/20 text-indigo-400 text-sm font-semibold rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Interactive Developer IDE / Visual */}
          <div className="lg:col-span-6 w-full relative">
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-600 to-pink-500 opacity-20 blur-xl animate-pulse" />
            <div className="relative">
              <InteractiveTerminal />
              
              {/* Floating micro glass badges to create depth */}
              <div className="absolute -top-6 -right-4 bg-slate-900/80 backdrop-blur-md border border-slate-800/80 p-3 rounded-xl flex items-center gap-2 shadow-xl animate-float pointer-events-none hidden sm:flex">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] font-mono text-slate-300">Live Server Active</span>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-slate-900/80 backdrop-blur-md border border-slate-800/80 p-3 rounded-xl flex items-center gap-2.5 shadow-xl animate-float-delayed pointer-events-none hidden sm:flex">
                <div className="w-7 h-7 rounded bg-indigo-950 flex items-center justify-center text-indigo-400 font-bold text-xs font-mono">
                  &lt;/&gt;
                </div>
                <div>
                  <div className="text-[9px] font-mono text-slate-500 uppercase font-bold">CURRENT DEV STACK</div>
                  <div className="text-[11px] font-bold text-slate-200">React + Python/Django</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
