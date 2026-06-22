import { Terminal, ArrowUp } from "lucide-react";

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = 2026;

  const handleScrollToTop = () => {
    onNavClick("home");
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 py-12 z-10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-900/60 pb-8 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-2 font-mono font-bold text-lg text-white">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center">
              <Terminal size={15} />
            </div>
            <span>
              ABHIRAJ<span className="text-indigo-400 font-sans font-extrabold">.py</span>
            </span>
          </div>

          {/* Navigation Links Quick Access */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono font-bold text-slate-400">
            {["home", "about", "skills", "projects", "playground", "experience", "services", "resume", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => onNavClick(id)}
                className="hover:text-white capitalize transition-colors cursor-pointer"
              >
                {id}
              </button>
            ))}
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-850 hover:border-slate-800 text-indigo-400 hover:text-white transition-all cursor-pointer group shadow-lg"
            title="Back to Top"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            &copy; {currentYear} Abhiraj Singh. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered with 
            <span className="text-rose-500 animate-pulse">❤️</span>
            using React, TS & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
