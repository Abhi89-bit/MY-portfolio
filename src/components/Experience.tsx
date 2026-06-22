import { Calendar, Briefcase, GraduationCap, ShieldCheck, MapPin } from "lucide-react";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

interface TimelineItem {
  id: number;
  type: "work" | "education";
  role: string;
  institution: string;
  location: string;
  duration: string;
  details: string[];
  skills: string[];
  glowColor: string;
}

export default function Experience() {
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      type: "work",
      role: "Full Stack Developer",
      institution: "Craw Cybersecurity",
      location: "New Delhi, India",
      duration: "16 June 2025 - Present",
      details: [
        "Developing high-performance, secure backend architectures using Python, Django, and Django REST Framework.",
        "Building interactive, dynamic user dashboards and administrative controls with React, Next.js, and Tailwind CSS.",
        "Conducting secure coding reviews and incorporating OWASP Top 10 mitigation strategies directly into application codebases.",
        "Collaborating with security analysts to run application penetration testing, patching SQL injection and XSS vulnerabilities in legacy code."
      ],
      skills: ["Python", "Django", "Next.js", "React", "MongoDB", "OWASP Security", "REST APIs"],
      glowColor: "rgba(99, 102, 241, 0.18)" // Indigo glow
    },
    {
      id: 2,
      type: "education",
      role: "Full Stack Python Specialist",
      institution: "IT Vedant (South-Ex)",
      location: "New Delhi, India",
      duration: "2024 (Completed)",
      details: [
        "Rigorous 1-year training covering advanced Python OOPs, MVC pattern, SQL database normalization, and web security.",
        "Designed, built, and deployed 5+ backend-heavy applications, including e-commerce storefronts and task managers.",
        "Mastered database design, optimizing complex relational SQL schemas, indexing, and MongoDB aggregation pipelines.",
        "Obtained IBM Certified credentials, verifying Python proficiency and foundational data architecture skills."
      ],
      skills: ["Python 3", "Django", "SQL", "MongoDB", "JavaScript", "Bootstrap", "Git"],
      glowColor: "rgba(167, 139, 250, 0.18)" // Violet glow
    },
    {
      id: 3,
      type: "education",
      role: "BA Political Science (Hons)",
      institution: "Delhi University (SOL)",
      location: "New Delhi, India",
      duration: "2020 - 2023",
      details: [
        "Acquired high-level logical reasoning, systems analysis, and structural problem-solving abilities.",
        "Honed verbal/written articulation and qualitative analysis, enabling clear documentation and client communication.",
        "Studied complex political structures, applying systemic frameworks to understand complex organizational workflows."
      ],
      skills: ["Critical Thinking", "Systems Analysis", "Policy Logic", "Analytical Documentation"],
      glowColor: "rgba(34, 211, 238, 0.18)" // Cyan glow
    },
    {
      id: 4,
      type: "education",
      role: "Arts & Humanities (Xth - XIIth)",
      institution: "Sarvodaya Bal Vidyalaya",
      location: "New Delhi, India",
      duration: "2018 - 2020",
      details: [
        "Completed senior secondary schooling with a focus on humanities and social sciences.",
        "Developed strong fundamentals in communications, logic, and creative writing."
      ],
      skills: ["Communications", "Creative Logic", "Humanities Foundations"],
      glowColor: "rgba(244, 63, 94, 0.18)" // Rose glow
    }
  ];

  return (
    <section id="experience" className="relative py-24 z-10 overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          badge="Career Timeline"
          title="Education & Experience"
          subtitle="A chronological record of my academic background, technical training, and professional industry impact."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-16">
          
          {/* Central Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-violet-500 to-slate-900 rounded-full pointer-events-none" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={item.id} 
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Glowing Node on Central Line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[11px] top-1 z-25 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center shadow-[0_0_12px_#6366f1] group-hover:scale-110 transition-transform">
                      {item.type === "work" ? (
                        <Briefcase size={10} className="text-indigo-400" />
                      ) : (
                        <GraduationCap size={10} className="text-violet-400" />
                      )}
                    </div>
                  </div>

                  {/* Left/Right Card Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <TiltCard
                      className="p-6 border border-slate-900 bg-slate-900/10 hover:bg-slate-900/30"
                      glowColor={item.glowColor}
                    >
                      {/* Timeline Card Header */}
                      <div className="space-y-2">
                        
                        {/* Tags */}
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                          <span className="text-slate-500 flex items-center gap-1.5 font-semibold">
                            <Calendar size={13} className="text-indigo-400" />
                            {item.duration}
                          </span>
                          
                          <span className={`px-2 py-0.5 rounded font-bold uppercase text-[9px] border ${
                            item.type === "work" 
                              ? "bg-indigo-950/40 border-indigo-500/30 text-indigo-300" 
                              : "bg-violet-950/40 border-violet-500/30 text-violet-300"
                          }`}>
                            {item.type === "work" ? "Professional" : "Academic"}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-white tracking-tight text-left">
                          {item.role}
                        </h3>

                        {/* Institution & Location */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-400 font-medium">
                          <span className="text-slate-300 font-bold">{item.institution}</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={11} className="text-slate-500" />
                            {item.location}
                          </span>
                        </div>

                      </div>

                      {/* Timeline Card Details */}
                      <ul className="mt-4 space-y-2 border-t border-slate-900/60 pt-4 text-xs text-slate-400 leading-relaxed list-disc list-inside text-left">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="marker:text-indigo-400">
                            <span className="pl-1">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech/Skill Badges */}
                      <div className="mt-6 flex flex-wrap gap-1">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </TiltCard>
                  </div>

                  {/* Spacer for MD screens to align timeline */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

          {/* Bottom Timeline Indicator */}
          <div className="absolute left-4 md:left-1/2 -translate-x-[5px] bottom-0 w-2.5 h-2.5 rounded-full bg-indigo-500/50 shadow-[0_0_8px_#6366f1]" />
        </div>

        {/* Cybersecurity Trust Badge */}
        <div className="mt-16 max-w-2xl mx-auto p-5 rounded-2xl border border-dashed border-indigo-500/30 bg-indigo-950/10 flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-xl bg-slate-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
            <ShieldCheck size={26} className="animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wide">SECURE WORKFLOW METHODOLOGY</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              In my current role at Craw Cybersecurity and my individual projects, I apply secure-by-default protocols: input filtering, parameter binding, state encryption, and JWT token rotation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
