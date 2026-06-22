import { useState } from "react";
import { 
  Calendar, Briefcase, GraduationCap, ShieldCheck, MapPin, 
  ChevronDown, ChevronUp, Sparkles, Award, PlayCircle 
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

interface TimelineItem {
  id: number;
  type: "work" | "education";
  role: string;
  institution: string;
  location: string;
  duration: string;
  takeaway: string; // Brief high-impact summary
  details: string[];
  skills: string[];
  glowColor: string;
}

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState<"all" | "work" | "education">("all");
  const [expandedCard, setExpandedCard] = useState<number | null>(1); // Expand the first item (Craw Cybersecurity) by default!

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      type: "work",
      role: "Full Stack Developer",
      institution: "Craw Cybersecurity",
      location: "New Delhi, India",
      duration: "16 June 2025 - Present",
      takeaway: "Securing systems and engineering robust fullstack platforms with integrated OWASP defenses.",
      details: [
        "Architecting high-performance secure backends using Python, Django, and Django REST Framework.",
        "Developing sleek, interactive, and responsive user dashboards with React.js, Next.js, and Tailwind CSS.",
        "Leading secure coding audits, implementing input sanitization, and mitigating OWASP Top 10 vulnerabilities.",
        "Collaborating with cybersecurity professionals to patch software security flaws and optimize relational queries."
      ],
      skills: ["Python", "Django", "Next.js", "React", "MongoDB", "OWASP Security", "REST APIs"],
      glowColor: "rgba(109, 213, 196, 0.2)"
    },
    {
      id: 2,
      type: "education",
      role: "Full Stack Python Specialist",
      institution: "IT Vedant (South-Ex)",
      location: "New Delhi, India",
      duration: "2024 (Completed)",
      takeaway: "Mastering advanced web engineering, algorithms, OOPs, database structures, and dynamic MVC frameworks.",
      details: [
        "Underwent 1 year of intensive technical training covering advanced Python data structures and web architectures.",
        "Engineered and deployed 5+ robust fullstack systems including Nike E-Commerce and Jarvis Voice assistants.",
        "Configured relational SQL database schemas, query indexing, and NoSQL MongoDB pipelines.",
        "Secured IBM Certified developer credentials, validating Python capabilities and database administration skills."
      ],
      skills: ["Python 3", "Django", "SQL", "MongoDB", "JavaScript", "Bootstrap", "Git"],
      glowColor: "rgba(127, 205, 255, 0.2)"
    },
    {
      id: 3,
      type: "education",
      role: "BA Political Science (Hons)",
      institution: "Delhi University (SOL)",
      location: "New Delhi, India",
      duration: "2020 - 2023",
      takeaway: "Applying critical systems thinking, policy analysis, and logic to structural software design.",
      details: [
        "Honed advanced logical reasoning, systematic analysis, and complex problem-solving methodologies.",
        "Developed articulate communications and analytical documentation skills, critical for system blueprints.",
        "Examined large-scale organizational workflows, applying systemic structures to program architecture."
      ],
      skills: ["Logical Analysis", "Systems Thinking", "Technical Documentation", "Problem Solving"],
      glowColor: "rgba(168, 85, 247, 0.2)"
    },
    {
      id: 4,
      type: "education",
      role: "Arts & Humanities (Xth - XIIth)",
      institution: "Sarvodaya Bal Vidyalaya",
      location: "New Delhi, India",
      duration: "2018 - 2020",
      takeaway: "Cultivating primary analytical foundations, creative expression, and logical argumentation.",
      details: [
        "Successfully completed senior secondary education with a strong emphasis on social logic and communications.",
        "Developed clear writing and presentation skills, translating ideas into structured workflows."
      ],
      skills: ["Humanities Logic", "Written Communication", "Creative Logic"],
      glowColor: "rgba(245, 158, 11, 0.2)"
    }
  ];

  const filteredData = activeFilter === "all"
    ? timelineData
    : timelineData.filter(item => item.type === activeFilter);

  const toggleExpand = (id: number) => {
    setExpandedCard(prev => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="relative py-24 z-10 overflow-hidden bg-slate-950/20">
      
      {/* Visual glowing circles for depth */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-72 h-72 rounded-full bg-brand-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Career Timeline"
          title="My Professional Journey"
          subtitle="Explore the chronological milestones of my professional experience, comprehensive technical training, and academic background."
        />

        {/* Career Journey Summary Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <TiltCard className="p-6 border border-slate-900 bg-slate-900/10 text-left space-y-2">
            <div className="flex items-center gap-2 text-brand-primary">
              <Briefcase size={18} />
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-slate-500">Active Work</span>
            </div>
            <div className="text-2xl font-extrabold text-white font-mono">1+ Year Impact</div>
            <p className="text-xs text-slate-400">Developing and securing enterprise web apps at Craw Cybersecurity.</p>
          </TiltCard>

          <TiltCard className="p-6 border border-slate-900 bg-slate-900/10 text-left space-y-2">
            <div className="flex items-center gap-2 text-brand-secondary">
              <Award size={18} />
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-slate-500">Specialized Training</span>
            </div>
            <div className="text-2xl font-extrabold text-white font-mono">IT Vedant</div>
            <p className="text-xs text-slate-400">1 year of intensive Full Stack Python & database engineering coursework.</p>
          </TiltCard>

          <TiltCard className="p-6 border border-slate-900 bg-slate-900/10 text-left space-y-2">
            <div className="flex items-center gap-2 text-brand-primary">
              <GraduationCap size={18} />
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-slate-500">Academics</span>
            </div>
            <div className="text-2xl font-extrabold text-white font-mono">BA Hons (DU)</div>
            <p className="text-xs text-slate-400">Delhi University honors degree in Political Science completed in 2023.</p>
          </TiltCard>
        </div>

        {/* Timeline Interactive Filter Controls */}
        <div className="flex justify-center gap-2 mb-16 max-w-md mx-auto bg-slate-950/60 p-1.5 rounded-2xl border border-slate-900">
          {[
            { id: "all", label: "All Milestones" },
            { id: "work", label: "Work Experience" },
            { id: "education", label: "Education" }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => {
                setActiveFilter(btn.id as any);
                setExpandedCard(null); // Reset expanded on filter switch
              }}
              className={`flex-1 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeFilter === btn.id
                  ? "bg-brand-primary text-slate-950 shadow-md shadow-brand-primary/15 scale-[1.02]"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Timeline Graphic Layout */}
        <div className="relative max-w-4xl mx-auto mt-8">
          
          {/* Glowing Center Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-primary via-brand-secondary to-slate-900/50 rounded-full pointer-events-none" />

          {/* Timeline Milestones Loop */}
          <div className="space-y-12">
            {filteredData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedCard === item.id;
              
              return (
                <div 
                  key={item.id} 
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Pulsing Visual Node on Central Line */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1 z-30 flex items-center justify-center">
                    <div className="relative w-6 h-6 rounded-full bg-slate-950 border-2 border-brand-primary flex items-center justify-center shadow-[0_0_12px_var(--theme-primary)]">
                      {/* Pulse effect rings */}
                      <span className="absolute -inset-1 rounded-full bg-brand-primary/10 animate-ping" />
                      
                      {item.type === "work" ? (
                        <Briefcase size={10} className="text-brand-primary" />
                      ) : (
                        <GraduationCap size={10} className="text-brand-secondary" />
                      )}
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className={`w-full md:w-1/2 pl-12 pr-4 md:pr-0 md:pl-0 ${
                    isEven ? "md:pl-12" : "md:pr-12"
                  }`}>
                    <TiltCard
                      className={`p-6 border transition-all duration-500 bg-slate-900/10 hover:bg-slate-900/20 ${
                        isExpanded ? "border-brand-primary/30 shadow-[0_0_20px_var(--theme-bg-glow)]" : "border-slate-900"
                      }`}
                      glowColor="var(--theme-glow)"
                    >
                      {/* Card Content Header */}
                      <div className="space-y-3">
                        
                        {/* Time & Type Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                          <span className="text-slate-400 flex items-center gap-1.5 font-bold">
                            <Calendar size={13} className="text-brand-primary" />
                            {item.duration}
                          </span>
                          
                          <span className={`px-2 py-0.5 rounded font-bold uppercase text-[9px] border ${
                            item.type === "work" 
                              ? "bg-brand-primary/10 border-brand-primary/35 text-brand-primary" 
                              : "bg-brand-secondary/10 border-brand-secondary/35 text-brand-secondary"
                          }`}>
                            {item.type === "work" ? "Professional" : "Education"}
                          </span>
                        </div>

                        {/* Title & Organization */}
                        <div className="space-y-1 text-left">
                          <h3 className="text-lg font-extrabold text-white tracking-tight leading-snug">
                            {item.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs font-mono font-bold text-slate-400">
                            <span className="text-brand-primary">{item.institution}</span>
                            <span className="flex items-center gap-1 font-medium text-slate-500">
                              <MapPin size={11} />
                              {item.location}
                            </span>
                          </div>
                        </div>

                        {/* Brief takeaway */}
                        <p className="text-xs text-slate-300 border-l border-brand-primary/40 pl-3 italic text-left">
                          {item.takeaway}
                        </p>

                        {/* Tech/Skill Badges */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-950 border border-slate-850 text-slate-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                      </div>

                      {/* Expandable Accordion trigger */}
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="w-full flex items-center justify-between mt-5 pt-3.5 border-t border-slate-900/60 text-xs font-mono font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-1">
                          <PlayCircle size={13} className="text-brand-primary" />
                          {isExpanded ? "Hide Details" : "Expand Contribution Details"}
                        </span>
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>

                      {/* Collapsible Details Content */}
                      <div className={`transition-all duration-500 overflow-hidden ${
                        isExpanded ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none"
                      }`}>
                        <ul className="space-y-2 text-xs text-slate-400 leading-relaxed list-disc list-inside text-left">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="marker:text-brand-primary leading-relaxed">
                              <span className="pl-1 text-slate-300">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </TiltCard>
                  </div>

                  {/* Spacer for MD screens */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

          {/* Bottom Timeline Indicator */}
          <div className="absolute left-4 md:left-1/2 -translate-x-[5px] bottom-0 w-2.5 h-2.5 rounded-full bg-brand-primary/50 shadow-[0_0_8px_var(--theme-primary)]" />
        </div>

        {/* Cybersecurity Secure Workflow Trust Banner */}
        <div className="mt-20 max-w-3xl mx-auto p-5 rounded-2xl border border-dashed border-brand-primary/30 bg-brand-primary/5 flex flex-col sm:flex-row items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-xl bg-slate-950 border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0">
            <ShieldCheck size={26} className="animate-pulse" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles size={14} className="text-brand-secondary" />
              SECURE WORKFLOW DESIGN PROTOCOLS
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              In my role at Craw Cybersecurity and my training at IT Vedant, I follow secure-by-default software methodologies. All APIs are protected by custom token rotations, and codebases are routinely scanned for OWASP Top 10 vulnerabilities.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
