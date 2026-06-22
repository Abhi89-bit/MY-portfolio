import { useState, useEffect } from "react";
import { Menu, X, Terminal, FileDown } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Playground", id: "playground" },
    { name: "Experience", id: "experience" },
    { name: "Services", id: "services" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavClick(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-900/80 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick("home")}
            className="flex items-center gap-2 font-mono font-bold text-lg text-white hover:opacity-90 transition-opacity cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-md shadow-indigo-950 group-hover:scale-105 transition-transform duration-300">
              <Terminal size={16} className="text-white animate-pulse" />
            </div>
            <span className="bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent tracking-wide">
              ABHIRAJ<span className="text-indigo-400 font-extrabold font-sans">.py</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-all duration-300 cursor-pointer rounded-lg ${
                    isActive
                      ? "text-indigo-400 bg-indigo-950/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-900/40"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full shadow-[0_0_8px_#6366f1]" />
                  )}
                </button>
              );
            })}

            <button
              onClick={() => handleLinkClick("resume")}
              className="ml-4 flex items-center gap-1.5 px-4 py-2 text-xs font-semibold font-mono text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 rounded-lg shadow-lg shadow-indigo-950/50 hover:shadow-indigo-900/40 border border-indigo-500/30 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              <FileDown size={14} />
              Resume
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-slate-950/95 border-b border-slate-900/90 backdrop-blur-xl transition-all duration-300 ease-in-out overflow-hidden shadow-2xl ${
          isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`flex w-full items-center px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? "text-indigo-400 bg-indigo-950/40 border-l-4 border-l-indigo-500"
                    : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                }`}
              >
                {link.name}
              </button>
            );
          })}
          
          <button
            onClick={() => handleLinkClick("resume")}
            className="w-full flex items-center justify-center gap-2 mt-4 px-4 py-3 text-sm font-semibold font-mono text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl shadow-lg shadow-indigo-950/40"
          >
            <FileDown size={16} />
            Download Resume
          </button>
        </div>
      </div>
    </header>
  );
}
