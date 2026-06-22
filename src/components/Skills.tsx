import { useState } from "react";
import { 
  Code, Server, Database, Shield, Wrench, Layers, Layout 
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

interface Skill {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "database" | "devops" | "cybersec" | "tools";
  description: string;
  icon: string; // fallback or label
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Skills", icon: <Layers size={14} /> },
    { id: "backend", name: "Backend", icon: <Server size={14} /> },
    { id: "frontend", name: "Frontend", icon: <Layout size={14} /> },
    { id: "database", name: "Database", icon: <Database size={14} /> },
    { id: "cybersec", name: "Cybersecurity", icon: <Shield size={14} /> },
    { id: "tools", name: "Tools", icon: <Wrench size={14} /> },
  ];

  const skills: Skill[] = [
    // Backend
    {
      name: "Python",
      level: 92,
      category: "backend",
      description: "Advanced scripts, OOPs logic, data structures, and algorithmic modeling.",
      icon: "🐍",
    },
    {
      name: "Django",
      level: 88,
      category: "backend",
      description: "Secure MVC structures, Django REST framework, middleware, and ORM schemas.",
      icon: "🦄",
    },
    {
      name: "REST APIs",
      level: 85,
      category: "backend",
      description: "Designing structured endpoints, JWT authorization, and fast request/response cycles.",
      icon: "🔌",
    },
    
    // Frontend
    {
      name: "React (DOM)",
      level: 80,
      category: "frontend",
      description: "Component lifecycle, state management, hooks, and virtual DOM performance.",
      icon: "⚛️",
    },
    {
      name: "Next.js",
      level: 72,
      category: "frontend",
      description: "Server-side rendering, routing, dynamic imports, and SEO optimization.",
      icon: "▲",
    },
    {
      name: "JavaScript (ES6)",
      level: 83,
      category: "frontend",
      description: "Asynchronous operations, promises, DOM manip, and clean architectural patterns.",
      icon: "JS",
    },
    {
      name: "HTML & CSS",
      level: 90,
      category: "frontend",
      description: "Semantic layouts, responsive flexbox/grid designs, and keyframe animations.",
      icon: "🎨",
    },
    {
      name: "Bootstrap",
      level: 85,
      category: "frontend",
      description: "Rapid grid modeling, pre-built web assets, and responsive utilities.",
      icon: "🥾",
    },
    {
      name: "Tailwind CSS",
      level: 86,
      category: "frontend",
      description: "Utility-first responsive layouts, custom configs, and rapid UI development.",
      icon: "🍃",
    },

    // Database
    {
      name: "SQL",
      level: 85,
      category: "database",
      description: "Complex joins, query optimization, indexing, and schema design.",
      icon: "🗄️",
    },
    {
      name: "MongoDB",
      level: 75,
      category: "database",
      description: "Document storage models, aggregation, BSON pipelines, and NoSQL architecture.",
      icon: "🍃",
    },

    // Cybersecurity
    {
      name: "Security Testing",
      level: 78,
      category: "cybersec",
      description: "Testing web apps for injection flaws, authentication errors, and authorization bypasses.",
      icon: "🛡️",
    },
    {
      name: "OWASP Top 10",
      level: 80,
      category: "cybersec",
      description: "Familiarity with cross-site scripting (XSS), SQLi, CSRF, and broken access controls.",
      icon: "🛑",
    },
    {
      name: "Secure Coding",
      level: 82,
      category: "cybersec",
      description: "Developing code with built-in input sanitization, data encryption, and logging.",
      icon: "🔐",
    },

    // Tools & DevOps
    {
      name: "Git & GitHub",
      level: 85,
      category: "tools",
      description: "Branch management, pull requests, merge conflict resolution, and CI/CD basics.",
      icon: "🐙",
    },
    {
      name: "Postman",
      level: 88,
      category: "tools",
      description: "API mocking, custom environments, automated request runners, and integration tests.",
      icon: "🚀",
    },
    {
      name: "VS Code",
      level: 90,
      category: "tools",
      description: "Proficient setup, remote development containers, and efficient extensions.",
      icon: "💻",
    },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "backend": return <Server className="text-indigo-400" size={16} />;
      case "frontend": return <Layout className="text-cyan-400" size={16} />;
      case "database": return <Database className="text-emerald-400" size={16} />;
      case "cybersec": return <Shield className="text-rose-400" size={16} />;
      case "tools": return <Wrench className="text-amber-400" size={16} />;
      default: return <Code className="text-slate-400" size={16} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "backend": return "from-indigo-600 to-violet-500 shadow-indigo-950/40";
      case "frontend": return "from-cyan-500 to-blue-600 shadow-cyan-950/40";
      case "database": return "from-emerald-500 to-teal-600 shadow-emerald-950/40";
      case "cybersec": return "from-rose-600 to-pink-500 shadow-rose-950/40";
      case "tools": return "from-amber-500 to-orange-500 shadow-amber-950/40";
      default: return "from-slate-600 to-slate-500";
    }
  };

  const getCategoryGlow = (category: string) => {
    switch (category) {
      case "backend": return "rgba(99, 102, 241, 0.12)";
      case "frontend": return "rgba(6, 182, 212, 0.12)";
      case "database": return "rgba(16, 185, 129, 0.12)";
      case "cybersec": return "rgba(244, 63, 94, 0.12)";
      case "tools": return "rgba(245, 158, 11, 0.12)";
      default: return "rgba(148, 163, 184, 0.12)";
    }
  };

  return (
    <section id="skills" className="relative py-24 z-10 overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Skill Stack"
          title="Technical Capabilities"
          subtitle="An extensive overview of my coding skills, database administration expertise, and cybersecurity knowledge."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-950/50 scale-105"
                  : "bg-slate-900/55 text-slate-400 border-slate-800/80 hover:text-slate-200 hover:bg-slate-900"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <TiltCard
              key={skill.name}
              className="p-6 border border-slate-900/60 flex flex-col justify-between h-full bg-slate-900/20"
              glowColor={getCategoryGlow(skill.category)}
            >
              <div className="space-y-4">
                {/* Skill Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-lg select-none">
                      {skill.icon}
                    </span>
                    <h3 className="text-base font-extrabold text-white tracking-tight">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    {getCategoryIcon(skill.category)}
                    {skill.category}
                  </span>
                </div>

                {/* Skill Description */}
                <p className="text-xs text-slate-400 leading-relaxed text-left min-h-[40px]">
                  {skill.description}
                </p>
              </div>

              {/* Progress bar section */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-500">Proficiency</span>
                  <span className="text-slate-300 font-bold">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden p-[1px] border border-slate-900">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${getCategoryColor(
                      skill.category
                    )} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Interactive Stats Showcase */}
        <div className="mt-16 p-8 rounded-2xl border border-slate-900 bg-slate-950/65 backdrop-blur-md max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-around gap-8">
          <div className="text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-400 font-mono">10+</div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Technologies Practiced</div>
          </div>
          <div className="h-px w-12 md:h-12 md:w-px bg-slate-900" />
          <div className="text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-violet-400 font-mono">IBM</div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Certified Python & DB</div>
          </div>
          <div className="h-px w-12 md:h-12 md:w-px bg-slate-900" />
          <div className="text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono">100%</div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">OWASP Conscious Development</div>
          </div>
        </div>

      </div>
    </section>
  );
}
