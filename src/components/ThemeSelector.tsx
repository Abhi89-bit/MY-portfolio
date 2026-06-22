import { useState, useEffect, useRef } from "react";
import { Palette, Check, ChevronDown } from "lucide-react";

export type ThemeId = "mint" | "ice" | "amethyst" | "sunset" | "neon";

interface ThemeOption {
  id: ThemeId;
  name: string;
  colors: string[]; // hex preview colors
  desc: string;
}

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeId>("mint");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themes: ThemeOption[] = [
    {
      id: "mint",
      name: "Cyber Mint",
      colors: ["#6DD5C4", "#DFF6F0"],
      desc: "Fresh, secure, and clinical developer theme."
    },
    {
      id: "ice",
      name: "Frozen Glacier",
      colors: ["#7FCDFF", "#DFF7FF"],
      desc: "Cool, professional, high-performance styling."
    },
    {
      id: "amethyst",
      name: "Royal Amethyst",
      colors: ["#A855F7", "#E9D5FF"],
      desc: "Futuristic, premium SaaS dashboard aesthetic."
    },
    {
      id: "sunset",
      name: "Sunset Gold",
      colors: ["#F59E0B", "#FEF3C7"],
      desc: "Warm, energetic, and highly readable layout."
    },
    {
      id: "neon",
      name: "Cyber Neon",
      colors: ["#EC4899", "#FBCFE8"],
      desc: "Vibrant, high-contrast creative showcase."
    }
  ];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Apply theme on mount and change
  useEffect(() => {
    const savedTheme = (localStorage.getItem("abhiraj-theme") as ThemeId) || "mint";
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeId: ThemeId) => {
    const bodyClasses = ["theme-mint", "theme-ice", "theme-amethyst", "theme-sunset", "theme-neon"];
    document.body.classList.remove(...bodyClasses);
    document.body.classList.add(`theme-${themeId}`);
    localStorage.setItem("abhiraj-theme", themeId);
  };

  const handleThemeChange = (themeId: ThemeId) => {
    setCurrentTheme(themeId);
    applyTheme(themeId);
    setIsOpen(false);
  };

  const activeThemeObj = themes.find(t => t.id === currentTheme) || themes[0];

  return (
    <div className="fixed bottom-6 right-6 z-50 no-print" ref={dropdownRef}>
      
      {/* Dropdown Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-850 text-slate-200 border border-brand-primary/40 shadow-xl shadow-black/40 hover:shadow-brand-glow/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer font-mono text-xs font-semibold"
      >
        <Palette size={15} className="text-brand-primary animate-pulse" />
        <span>Theme: <strong className="text-brand-primary">{activeThemeObj.name}</strong></span>
        
        {/* Color preview capsule */}
        <div className="flex -space-x-1.5 ml-1">
          <span className="w-3.5 h-3.5 rounded-full border border-slate-950" style={{ backgroundColor: activeThemeObj.colors[0] }} />
          <span className="w-3.5 h-3.5 rounded-full border border-slate-950" style={{ backgroundColor: activeThemeObj.colors[1] }} />
        </div>

        <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Glassmorphic Dropdown List */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-80 p-3 rounded-2xl border border-slate-800 bg-slate-950/95 shadow-2xl backdrop-blur-md animate-scaleUp text-left space-y-1">
          <div className="px-3 py-2 border-b border-slate-900/80 mb-1.5 flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Select Theme Palette</span>
            <span className="text-[9px] font-mono text-brand-primary bg-brand-primary/10 px-1.5 py-0.5 rounded">Active</span>
          </div>

          {themes.map((theme) => {
            const isActive = currentTheme === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => handleThemeChange(theme.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all cursor-pointer group ${
                  isActive
                    ? "bg-slate-900/80 border border-brand-primary/30 text-white"
                    : "bg-transparent border border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Colors Preview Pill */}
                  <div className="flex -space-x-1.5 mt-0.5">
                    <span className="w-4.5 h-4.5 rounded-full border border-slate-950 shadow-sm" style={{ backgroundColor: theme.colors[0] }} />
                    <span className="w-4.5 h-4.5 rounded-full border border-slate-950 shadow-sm" style={{ backgroundColor: theme.colors[1] }} />
                  </div>

                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold font-mono text-slate-200 group-hover:text-white transition-colors">{theme.name}</h4>
                    <p className="text-[10px] text-slate-500 leading-normal font-mono">{theme.colors[0]} &rarr; {theme.colors[1]}</p>
                    <p className="text-[10px] text-slate-400 font-sans leading-normal">{theme.desc}</p>
                  </div>
                </div>

                {isActive && (
                  <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary border border-brand-primary/20 shrink-0">
                    <Check size={12} />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
}
