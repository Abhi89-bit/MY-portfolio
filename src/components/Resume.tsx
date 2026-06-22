import { FileText, Printer, Award, BookOpen, Briefcase, Sparkles, CheckCircle } from "lucide-react";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

export default function Resume() {
  const certifications = [
    { name: "IBM Certified Python Practitioner", issuer: "IBM / IT Vedant", year: "2024" },
    { name: "Full Stack Python Developer", issuer: "IT Vedant", year: "2024" },
    { name: "Next.js & React Developer Certification", issuer: "IT Vedant / Self-Learning", year: "2024" },
    { name: "SQL Database Specialist Certification", issuer: "IBM / IT Vedant", year: "2024" },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="relative py-24 z-10 overflow-hidden print:p-0 print:bg-white print:text-slate-950">
      
      {/* Print-Only Custom CSS Injection */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-print-area, #resume-print-area * {
            visibility: visible;
          }
          #resume-print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: #0f172a !important;
            padding: 20px !important;
          }
          .no-print {
            display: none !important;
          }
          /* Ensure text colors are readable in print */
          .print-text-dark {
            color: #0f172a !important;
          }
          .print-text-muted {
            color: #475569 !important;
          }
          .print-border {
            border-color: #cbd5e1 !important;
          }
          .print-bg-gray {
            background-color: #f1f5f9 !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="no-print">
          <SectionTitle
            badge="Curriculum Vitae"
            title="Interactive Resume"
            subtitle="Review my comprehensive career record or download a print-optimized version of my resume with a single click."
          />
        </div>

        {/* Action Controls */}
        <div className="no-print flex flex-wrap justify-center items-center gap-4 mb-10">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-semibold font-mono rounded-xl shadow-lg shadow-indigo-950/50 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <Printer size={15} />
            Print / Save to PDF
          </button>
          
          <a
            href="mailto:mlcabhi18@gmail.com?subject=Abhiraj%20Singh%20-%20Resume%20Inquiry"
            className="flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-white text-xs font-semibold font-mono rounded-xl border border-slate-800 transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <FileText size={15} />
            Request Official PDF
          </a>
        </div>

        {/* Digital Resume Card Sheet */}
        <div className="max-w-4xl mx-auto">
          <TiltCard
            className="border border-slate-900 bg-slate-950/85 backdrop-blur-md p-8 sm:p-12 shadow-2xl relative overflow-hidden"
            glowColor="rgba(99, 102, 241, 0.08)"
          >
            {/* Holographic background elements (Decorations) */}
            <div className="no-print absolute -top-20 -right-20 w-60 h-60 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
            <div className="no-print absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-violet-500/5 blur-3xl pointer-events-none" />

            {/* Resume Content Print Area */}
            <div id="resume-print-area" className="space-y-10 text-left">
              
              {/* Header Profile Section */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-900 pb-8 print-border">
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight print-text-dark">
                    ABHIRAJ SINGH
                  </h1>
                  <p className="text-sm font-mono font-bold text-indigo-400 uppercase tracking-widest">
                    Full Stack Python Developer
                  </p>
                  <p className="text-xs text-slate-400 max-w-lg leading-relaxed print-text-muted">
                    Highly motivated software engineer currently developing secure, scalable web products at Craw Cybersecurity. Expert in leveraging Python/Django for microservices and React for user interfaces.
                  </p>
                </div>

                {/* Contact Coordinates */}
                <div className="space-y-1.5 text-xs font-mono text-slate-300 print-text-muted bg-slate-900/40 p-4 rounded-xl border border-slate-900 print-bg-gray print-border">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400 font-bold">Phone:</span>
                    <span className="text-slate-200 print-text-dark font-medium">+91 7011304656</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400 font-bold">Email:</span>
                    <a href="mailto:mlcabhi18@gmail.com" className="text-slate-200 hover:text-indigo-300 print-text-dark font-medium underline">
                      mlcabhi18@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400 font-bold">Address:</span>
                    <span className="text-slate-200 print-text-dark font-medium">New Delhi - 110028, India</span>
                  </div>
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Column (Experience & Education) */}
                <div className="lg:col-span-8 space-y-8">
                  
                  {/* Work Experience */}
                  <div className="space-y-5">
                    <h2 className="text-lg font-bold text-white font-mono tracking-wide border-b border-slate-900 pb-2 flex items-center gap-2 print-text-dark print-border">
                      <Briefcase size={16} className="text-indigo-400" />
                      WORK EXPERIENCE
                    </h2>

                    <div className="space-y-4">
                      <div className="relative pl-4 border-l-2 border-indigo-500/40 print-border">
                        <div className="flex flex-wrap items-center justify-between gap-x-4 mb-1">
                          <h3 className="text-sm font-bold text-slate-200 print-text-dark">
                            Full Stack Developer
                          </h3>
                          <span className="text-xs font-mono font-semibold text-slate-500 print-text-muted">
                            Jun 2025 - PRESENT
                          </span>
                        </div>
                        <p className="text-xs font-mono text-indigo-400 font-bold mb-2">
                          Craw Cybersecurity, New Delhi
                        </p>
                        <ul className="text-xs text-slate-400 print-text-muted space-y-1.5 list-disc list-inside leading-relaxed">
                          <li>Engineering scalable backends with Python, Django, and PostgreSQL.</li>
                          <li>Developing React & Next.js user components with Tailwind CSS layouts.</li>
                          <li>Running application-level security testing, fixing OWASP Top 10 vulnerabilities.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="space-y-5">
                    <h2 className="text-lg font-bold text-white font-mono tracking-wide border-b border-slate-900 pb-2 flex items-center gap-2 print-text-dark print-border">
                      <BookOpen size={16} className="text-violet-400" />
                      EDUCATION HISTORY
                    </h2>

                    <div className="space-y-6">
                      
                      {/* IT Vedant */}
                      <div className="relative pl-4 border-l-2 border-indigo-500/40 print-border">
                        <div className="flex flex-wrap items-center justify-between gap-x-4 mb-1">
                          <h3 className="text-sm font-bold text-slate-200 print-text-dark">
                            Full Stack Python Development Specialization
                          </h3>
                          <span className="text-xs font-mono font-semibold text-slate-500 print-text-muted">
                            Completed 2024
                          </span>
                        </div>
                        <p className="text-xs font-mono text-indigo-400 font-bold mb-2">
                          IT Vedant, South-Ex, New Delhi
                        </p>
                        <p className="text-xs text-slate-400 print-text-muted leading-relaxed">
                          Intensive coursework and project training covering OOPs, MVC pattern, Django web framework, relational SQL databases, non-relational MongoDB, and React.js frontend development.
                        </p>
                      </div>

                      {/* DU */}
                      <div className="relative pl-4 border-l-2 border-indigo-500/40 print-border">
                        <div className="flex flex-wrap items-center justify-between gap-x-4 mb-1">
                          <h3 className="text-sm font-bold text-slate-200 print-text-dark">
                            BA Political Science (Hons)
                          </h3>
                          <span className="text-xs font-mono font-semibold text-slate-500 print-text-muted">
                            2020 - 2023
                          </span>
                        </div>
                        <p className="text-xs font-mono text-indigo-400 font-bold mb-2">
                          Delhi University (SOL)
                        </p>
                        <p className="text-xs text-slate-400 print-text-muted leading-relaxed">
                          Acquired advanced critical thinking, systems analysis, structural policy reasoning, and comprehensive technical documentation capabilities.
                        </p>
                      </div>

                      {/* School */}
                      <div className="relative pl-4 border-l-2 border-indigo-500/40 print-border">
                        <div className="flex flex-wrap items-center justify-between gap-x-4 mb-1">
                          <h3 className="text-sm font-bold text-slate-200 print-text-dark">
                            Arts & Humanities (Xth - XIIth)
                          </h3>
                          <span className="text-xs font-mono font-semibold text-slate-500 print-text-muted">
                            2018 - 2020
                          </span>
                        </div>
                        <p className="text-xs font-mono text-indigo-400 font-bold mb-2">
                          Sarvodaya Bal Vidyalaya, New Delhi
                        </p>
                        <p className="text-xs text-slate-400 print-text-muted leading-relaxed">
                          Completed senior secondary education focusing on literature, communications, and social logic.
                        </p>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Right Column (Skills & Certifications) */}
                <div className="lg:col-span-4 space-y-8">
                  
                  {/* Skills Grid */}
                  <div className="space-y-4">
                    <h2 className="text-lg font-bold text-white font-mono tracking-wide border-b border-slate-900 pb-2 flex items-center gap-2 print-text-dark print-border">
                      <Sparkles size={16} className="text-cyan-400" />
                      SKILLS MATRIX
                    </h2>

                    <div className="space-y-4 text-xs font-mono">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block mb-1.5">LANGUAGES</span>
                        <div className="flex flex-wrap gap-1">
                          {["Python", "JavaScript", "SQL", "HTML5", "CSS3"].map((s) => (
                            <span key={s} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 print-bg-gray print-border print-text-dark">{s}</span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block mb-1.5">FRAMEWORKS</span>
                        <div className="flex flex-wrap gap-1">
                          {["Django", "React (DOM)", "Next JS", "Bootstrap", "Tailwind CSS"].map((s) => (
                            <span key={s} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 print-bg-gray print-border print-text-dark">{s}</span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block mb-1.5">DATABASES</span>
                        <div className="flex flex-wrap gap-1">
                          {["SQL (Relational)", "MongoDB (NoSQL)", "PostgreSQL"].map((s) => (
                            <span key={s} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 print-bg-gray print-border print-text-dark">{s}</span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block mb-1.5">SPECIALTIES</span>
                        <div className="flex flex-wrap gap-1">
                          {["Secure Coding", "OWASP Top 10", "API Design", "Vulnerability Fixes"].map((s) => (
                            <span key={s} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 print-bg-gray print-border print-text-dark">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-4">
                    <h2 className="text-lg font-bold text-white font-mono tracking-wide border-b border-slate-900 pb-2 flex items-center gap-2 print-text-dark print-border">
                      <Award size={16} className="text-pink-400" />
                      CREDENTIALS
                    </h2>

                    <div className="space-y-3">
                      {certifications.map((cert) => (
                        <div key={cert.name} className="bg-slate-900/40 p-3 rounded-lg border border-slate-900 print-bg-gray print-border">
                          <h4 className="text-xs font-bold text-slate-200 print-text-dark flex items-start gap-1.5">
                            <CheckCircle size={13} className="text-indigo-400 shrink-0 mt-0.5" />
                            <span>{cert.name}</span>
                          </h4>
                          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mt-1">
                            <span>{cert.issuer}</span>
                            <span>{cert.year}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  );
}
