import { Award, Code2, ShieldAlert, GraduationCap, Calendar, MapPin } from "lucide-react";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="text-indigo-400" size={24} />,
      title: "Full Stack Engineering",
      desc: "Robust backends in Python/Django & interactive frontends in React.js and Next.js.",
    },
    {
      icon: <ShieldAlert className="text-violet-400" size={24} />,
      title: "Cybersecurity Centric",
      desc: "Practicing secure coding guidelines, OWASP standards, and vulnerability assessments at Craw Cybersecurity.",
    },
    {
      icon: <GraduationCap className="text-cyan-400" size={24} />,
      title: "Dedicated Training",
      desc: "Completed comprehensive Full Stack Python specialization at IT Vedant, New Delhi.",
    },
    {
      icon: <Award className="text-pink-400" size={24} />,
      title: "IBM Certified",
      desc: "Recognized industry certifications, validating capabilities in Python and core database management.",
    },
  ];

  const personalStats = [
    { label: "Completed Training", value: "IT Vedant (2024)" },
    { label: "Current Role", value: "Full Stack Dev @ Craw Cybersec" },
    { label: "Education", value: "BA Pol Hons (Delhi Univ)" },
    { label: "Location", value: "New Delhi, India" },
  ];

  return (
    <section id="about" className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="About Me"
          title="Bridging Logic, Tech & Security"
          subtitle="Discover my journey from humanities to advanced software architecture, powered by Python and security-first engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-8">
          
          {/* Holographic 3D Silhouette / Avatar */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-80 h-80 sm:w-96 sm:h-96">
              {/* Spinning tech circles for 3D hologram effect */}
              <div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-spin-slow pointer-events-none" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-4 border border-dashed border-violet-500/20 rounded-full animate-spin-slow pointer-events-none" style={{ animationDuration: "10s", animationDirection: "reverse" }} />
              <div className="absolute inset-10 border border-double border-cyan-500/10 rounded-full animate-spin-slow pointer-events-none" style={{ animationDuration: "30s" }} />
              
              {/* Outer glowing border */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 opacity-25 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* 3D frame for avatar */}
              <div className="relative w-full h-full rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl p-5 overflow-hidden flex flex-col justify-between shadow-2xl">
                
                {/* Micro tech details */}
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>SYS.SYS_LOC // NEW_DELHI</span>
                  <span>IP: 127.0.0.1</span>
                </div>

                {/* Holographic Avatar Content */}
                <div className="my-auto flex flex-col items-center justify-center space-y-6">
                  {/* Glowing developer emblem */}
                  <div className="relative w-28 h-28 rounded-full bg-slate-950 flex items-center justify-center border-2 border-indigo-500/40 group-hover:border-indigo-400 transition-colors shadow-[0_0_30px_rgba(99,102,241,0.2)] group-hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transform group-hover:scale-105 transition-transform duration-300">
                    
                    {/* Pulsing inner dot */}
                    <div className="absolute w-20 h-20 rounded-full border border-dashed border-violet-500/40 animate-spin" style={{ animationDuration: "12s" }} />
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-indigo-950 to-slate-950 flex items-center justify-center">
                      <span className="text-3xl font-mono font-extrabold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">AS</span>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-bold text-white font-mono tracking-wide">Abhiraj Singh</h3>
                    <p className="text-xs text-indigo-400 font-mono">&lt;FullStackPythonDeveloper /&gt;</p>
                    <p className="text-[11px] text-slate-500 font-mono">EST. COMP. 2025 | IT VEDANT</p>
                  </div>
                </div>

                {/* Decorative Tech Footer */}
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 border-t border-slate-800/60 pt-3">
                  <span className="text-indigo-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ONLINE
                  </span>
                  <span>VER. 2.0.26 // SECURITY_STABLE</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Text & Highlights */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                My Story & Professional Summary
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Hi, I'm <strong className="text-indigo-400 font-semibold">Abhiraj Singh</strong>. 
                I hold a unique background that blends analytical thinking from my <strong className="text-slate-200 font-medium">BA in Political Science (Hons)</strong> from Delhi University (completed in 2023) with robust, high-performance software engineering training at <strong className="text-slate-200 font-medium">IT Vedant, South-Ex</strong> (completed in 2024).
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Having transitioned passionately into web development, I master foundational technologies (HTML, CSS, JS, SQL) and advanced server architectures using <strong className="text-indigo-400 font-semibold">Python and Django</strong>. 
                This diverse academic and technical path equips me with exceptional systems-level logic, critical analysis, and clean coding practices.
              </p>
              <p className="text-indigo-400 font-semibold font-mono text-sm border-l-2 border-indigo-500 pl-4 py-1 bg-indigo-950/20 rounded-r-lg">
                &quot;I focus on building secure, scalable applications, ensuring that business-critical logic remains bulletproof and highly performant.&quot;
              </p>
            </div>

            {/* Micro details grid */}
            <div className="grid grid-cols-2 gap-4 bg-slate-900/30 p-4 rounded-xl border border-slate-900">
              {personalStats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-500 tracking-wider block">{stat.label}</span>
                  <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                    {stat.label === "Location" && <MapPin size={12} className="text-indigo-400" />}
                    {stat.label === "Current Role" && <Calendar size={12} className="text-violet-400" />}
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <TiltCard
                  key={index}
                  className="p-5 border border-slate-900/60 bg-slate-900/20 hover:bg-slate-900/40"
                  glowColor="rgba(99, 102, 241, 0.08)"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
