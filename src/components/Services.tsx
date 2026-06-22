import { ReactNode } from "react";
import { 
  Globe, Server, Terminal, Lock, Cpu, LayoutDashboard, 
  ArrowUpRight 
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

interface Service {
  id: number;
  title: string;
  desc: string;
  details: string[];
  tech: string[];
  icon: ReactNode;
  glowColor: string;
}

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: "Web Development",
      desc: "Pixel-perfect, fully responsive, and highly accessible web frontends matching modern design standards.",
      details: [
        "Component-driven React architectures",
        "Responsive styling with Tailwind / Bootstrap",
        "Cross-browser compatibility testing",
        "SEO-optimized semantic structures"
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
      icon: <Globe className="text-cyan-400" size={24} />,
      glowColor: "rgba(34, 211, 238, 0.15)"
    },
    {
      id: 2,
      title: "Backend Development",
      desc: "Robust, enterprise-ready API servers, complex database schemas, and scalable server-side business logic.",
      details: [
        "MVC architecture implementation",
        "RESTful API design & JWT token authorization",
        "Database normalization & queries optimization",
        "Middleware & request filtration"
      ],
      tech: ["Python 3", "Django", "SQL", "MongoDB", "REST APIs", "Postman"],
      icon: <Server className="text-indigo-400" size={24} />,
      glowColor: "rgba(99, 102, 241, 0.15)"
    },
    {
      id: 3,
      title: "Full Stack Integration",
      desc: "Seamless bridging of secure, high-performance Python backends with interactive, dynamic JS frontends.",
      details: [
        "End-to-end web system deployment",
        "Asynchronous state synchronization",
        "Session management & cookies security",
        "System performance benchmarking"
      ],
      tech: ["Python", "Django", "React", "SQL", "Bootstrap", "Tailwind"],
      icon: <Cpu className="text-violet-400" size={24} />,
      glowColor: "rgba(167, 139, 250, 0.15)"
    },
    {
      id: 4,
      title: "Cybersecurity & Security Testing",
      desc: "Vulnerability analysis, application pen testing, and secure coding implementations to mitigate software risks.",
      details: [
        "OWASP Top 10 vulnerability remediation",
        "Input sanitization & parameterization audits",
        "Secure auth & hashing (PBKDF2, bcrypt)",
        "Security configuration reviews"
      ],
      tech: ["OWASP Guidelines", "Security Patching", "Vulnerability Auditing"],
      icon: <Lock className="text-rose-400" size={24} />,
      glowColor: "rgba(244, 63, 94, 0.15)"
    },
    {
      id: 5,
      title: "Automation Scripts",
      desc: "Custom scripting solutions to automate repetitive digital tasks, manage files, and execute server workflows.",
      details: [
        "Automated database back-ups & exports",
        "File parsers and directory organizers",
        "API data scrapers & log analyzers",
        "Cron job setups & automation runners"
      ],
      tech: ["Python Scripts", "File I/O", "Task Schedulers", "BeautifulSoup"],
      icon: <Terminal className="text-amber-400" size={24} />,
      glowColor: "rgba(245, 158, 11, 0.15)"
    },
    {
      id: 6,
      title: "Interactive Dashboards",
      desc: "High-end administrative dashboards and business metrics visualizers with real-time charts.",
      details: [
        "Visual charts (Chart.js, Recharts) integration",
        "Dynamic tabular data filters & pagination",
        "Activity log audits & tracking systems",
        "Multi-role user privilege views"
      ],
      tech: ["React.js", "Tailwind CSS", "Chart.js", "Django APIs", "Bootstrap"],
      icon: <LayoutDashboard className="text-emerald-400" size={24} />,
      glowColor: "rgba(16, 185, 129, 0.15)"
    }
  ];

  return (
    <section id="services" className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          badge="What I Offer"
          title="Professional Development Services"
          subtitle="Leveraging my expertise in fullstack python development and security principles to deliver top-tier digital products."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service) => (
            <TiltCard
              key={service.id}
              className="p-6 border border-slate-900 bg-slate-900/10 hover:bg-slate-900/30 flex flex-col justify-between h-full"
              glowColor={service.glowColor}
            >
              <div className="space-y-6">
                
                {/* Header (Icon + Title) */}
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-xl">
                    {service.icon}
                  </div>
                  <button className="p-1 rounded-full hover:bg-slate-850 text-slate-500 hover:text-white transition-colors cursor-pointer">
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                {/* Info */}
                <div className="space-y-2 text-left">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Details bullet points */}
                <ul className="space-y-1.5 border-t border-slate-900/60 pt-4 text-xs text-slate-400 text-left">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Technologies horizontal footer */}
              <div className="mt-8 pt-4 border-t border-slate-900/40 flex flex-wrap gap-1.5">
                {service.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </TiltCard>
          ))}
        </div>

        {/* High-impact Client Statement */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-indigo-950/20 via-violet-950/20 to-transparent border border-indigo-900/30">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
            &quot;Need a custom solution that isn't listed here? Let's collaborate to build highly customized scripts, third-party API integrations, or databases tailored specifically to your project requirements.&quot;
          </p>
        </div>

      </div>
    </section>
  );
}
