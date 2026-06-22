import { useState } from "react";
import { 
  FolderGit2, ExternalLink, Layers, Code, 
  Database, ShieldCheck, Cpu, CheckCircle2, X 
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

interface Project {
  id: string;
  title: string;
  category: "frontend" | "backend" | "fullstack";
  shortDesc: string;
  longDesc: string;
  tech: string[];
  features: string[];
  securityFocus?: string;
  schemaDetails?: string;
  githubUrl: string;
  demoUrl: string;
}

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "nike-ecommerce",
      title: "Nike E-Commerce Platform",
      category: "fullstack",
      shortDesc: "A complete high-performance storefront with secure authentication, dynamic cart, and administrative product dashboards.",
      longDesc: "This project is an advanced fullstack e-commerce system that emulates the Nike shopping experience. It features user authentication, a stateful shopping cart that persists in the database, dynamic product categorization with search filters, and an admin panel where store managers can audit stock, adjust pricing, and review sales statistics. It implements clean MVC architecture, securing transactions and separating database queries from user-facing views.",
      tech: ["Python", "Django", "SQL", "HTML5/CSS3", "Bootstrap", "JavaScript"],
      features: [
        "Robust User Authentication & Session Management",
        "Dynamic shopping cart with real-time price & tax recalculation",
        "Product inventory management with automated low-stock warnings",
        "Advanced searching, sorting, and tag-filtering capability"
      ],
      securityFocus: "Implements Django CSRF tokens on all transaction forms, password hashing using PBKDF2, and server-side input validation to prevent SQL injections.",
      schemaDetails: "Relational schema containing Users, Profiles, Products, Orders, OrderItems, and Categories with foreign-key cascading rules.",
      githubUrl: "https://github.com/mlcabhi18/nike-ecommerce",
      demoUrl: "#"
    },
    {
      id: "jarvis-ecommerce",
      title: "Jarvis (Iron-Man) E-Commerce",
      category: "fullstack",
      shortDesc: "A futuristic, tech-heavy storefront featuring dynamic voice feedback, smart recommendations, and sleek sci-fi aesthetics.",
      longDesc: "Inspired by Stark Industries, this e-commerce platform integrates high-end interactive UI elements with voice-assistant capabilities. Leveraging browser speech synthesis, the website greets users, guides them through premium tech categories, and reads product specifications. The backend utilizes Django to handle complex order processing pipelines and customized product configuration databases.",
      tech: ["Python", "Django", "JavaScript (ES6)", "Web Speech API", "CSS3", "Bootstrap"],
      features: [
        "Speech synthesis integration that reads out item details on demand",
        "Sci-fi dashboard with real-time order tracking visualization",
        "Custom parts-builder tool for custom tech configurations",
        "Persistent user checkout flow with discount coupon validation"
      ],
      securityFocus: "Strict cross-origin resource sharing (CORS) configurations, secure session cookery, and sanitized string rendering to neutralize XSS attacks.",
      schemaDetails: "Models: PartComponent, TechWeapon, UserOrder, VoiceLog, PromoCoupon.",
      githubUrl: "https://github.com/mlcabhi18/jarvis-ecommerce",
      demoUrl: "#"
    },
    {
      id: "task-manager",
      title: "Secure Task Manager",
      category: "backend",
      shortDesc: "An enterprise-grade team productivity dashboard featuring role access, deadline notifications, and progress charts.",
      longDesc: "A powerful collaboration utility that allows employees to create, assign, and track software development tasks. It uses an automated priority matrix to calculate urgency based on remaining days, categorizes tasks by status, and provides an HR/Manager review portal to inspect teammate deliverables.",
      tech: ["Python", "Django", "SQL", "JavaScript", "Bootstrap", "CSS3"],
      features: [
        "Role-based access control (RBAC) - Admin, Manager, and Developer tiers",
        "Urgency-weighted sorting algorithm based on impending deadlines",
        "Activity log that audits when tasks are moved, edited, or completed",
        "CSV export functionality for generating weekly team productivity metrics"
      ],
      securityFocus: "Custom Django decorators for strict authorization checks, ensuring developers cannot view or edit tasks in sibling projects without access rights.",
      schemaDetails: "Relational tables: Project, Task, UserAssignment, Comment, ActivityAudit.",
      githubUrl: "https://github.com/mlcabhi18/task-manager",
      demoUrl: "#"
    },
    {
      id: "database-manager",
      title: "Interactive Database Manager",
      category: "backend",
      shortDesc: "A sleek developer utility to connect, query, migrate, and export relational SQL databases in real-time.",
      longDesc: "Built to simplify database debugging, this web utility serves as an administration console. Users can inspect active schemas, run custom SQL queries safely through an input terminal, generate visual relationship charts, and trigger database backups or exports in JSON and CSV formats.",
      tech: ["Python", "SQL", "Django ORM", "HTML/CSS", "Bootstrap", "Chart.js"],
      features: [
        "Interactive web SQL runner with query execution times",
        "Schema inspector showing tables, keys, indexes, and column types",
        "Safe-mode query filter that blocks destructive statements (e.g., DROP TABLE) unless overridden",
        "One-click backup exporter compiling schemas into downloadable SQL dumps"
      ],
      securityFocus: "Built-in parameterized query execution using python's sqlite3/psycopg2 drivers to fully neutralize SQL injection vulnerabilities, combined with strict admin privileges.",
      schemaDetails: "Dynamic schema inspection utilizing metadata reflection tables (PRAGMA / INFORMATION_SCHEMA).",
      githubUrl: "https://github.com/mlcabhi18/database-manager",
      demoUrl: "#"
    },
    {
      id: "leave-manager",
      title: "Corporate Leave Management Portal",
      category: "backend",
      shortDesc: "An automated HR workflow application for tracking, requesting, and approving corporate leave requests.",
      longDesc: "An administrative portal designed to replace manual HR paperwork. It tracks employee leave balances (sick leave, casual leave, unpaid leave), automates approval requests by emailing managers, and generates calendar representations of scheduled team absences.",
      tech: ["Python", "Django", "SQL", "HTML5", "CSS3", "Bootstrap"],
      features: [
        "Automated leave balance deduction upon HR approval",
        "Interactive department leave calendar with color-coded tags",
        "Two-factor manager approval workflow with reason requirements",
        "Employee dashboard showcasing history, current status, and remaining accruals"
      ],
      securityFocus: "Restricted object-level permissions prevents users from tampering with leave request parameters once submitted, ensuring HR auditable integrity.",
      schemaDetails: "Models: EmployeeProfile, LeaveType, LeaveRequest, HolidayCalendar, HRSetting.",
      githubUrl: "https://github.com/mlcabhi18/leave-manager",
      demoUrl: "#"
    },
    {
      id: "amazon-clone",
      title: "Amazon Storefront Clone",
      category: "frontend",
      shortDesc: "A pixel-perfect responsive clone of the Amazon marketplace homepage and cart pages.",
      longDesc: "A front-end masterpiece focused on matching Amazon's layout, fonts, colors, and responsive grid structures. It incorporates interactive features like product category carousels, responsive slide menus, hover-state navigation dropdowns, and an interactive mock shopping cart.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      features: [
        "Highly responsive navigation bar matching Amazon's search-to-dropdown design",
        "Interactive product slider showing top deals with automatic cycling",
        "Live local-storage cart that increments and displays items dynamically",
        "Grid-based product galleries that adjust fluidly from mobile to ultra-wide displays"
      ],
      securityFocus: "Strict HTML semantic structure ensuring maximum accessibility (aria-labels) and clean separation of styles.",
      githubUrl: "https://github.com/mlcabhi18/amazon-clone",
      demoUrl: "#"
    },
    {
      id: "myntra-clone",
      title: "Myntra Fashion Clone",
      category: "frontend",
      shortDesc: "A stylish, grid-intensive clone of the popular fashion and lifestyle portal with multi-attribute filtering.",
      longDesc: "This frontend project replicates the Myntra retail catalog and product discovery layout. It places heavy emphasis on aesthetic spacing, precise typography, hover magnifying overlays for apparel cards, and mock slide-out filters for brands, discounts, and sizes.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      features: [
        "Fashion catalog grid with interactive hover-zoom and 'Add to Wishlist' states",
        "Multi-variable sidebar filters (brand, price range, color, sizing)",
        "Premium modal popup overlay for quick-view product details",
        "Clean, optimized CSS layouts leveraging CSS variables and Bootstrap utilities"
      ],
      securityFocus: "Responsive design integrity checked across multiple viewpoints, ensuring zero layout breakage on modern mobile browsers.",
      githubUrl: "https://github.com/mlcabhi18/myntra-clone",
      demoUrl: "#"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          badge="Portfolio Work"
          title="Featured Development Projects"
          subtitle="Explore a curated collection of backend utilities, fullstack e-commerce systems, and polished frontend clones."
        />

        {/* Filter Bar */}
        <div className="flex justify-center items-center gap-2 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-950/40 scale-105"
                : "bg-slate-900/50 text-slate-400 border border-slate-850 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <Layers size={13} />
            All Projects
          </button>
          <button
            onClick={() => setFilter("fullstack")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              filter === "fullstack"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-950/40 scale-105"
                : "bg-slate-900/50 text-slate-400 border border-slate-850 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <Cpu size={13} />
            Fullstack
          </button>
          <button
            onClick={() => setFilter("backend")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              filter === "backend"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-950/40 scale-105"
                : "bg-slate-900/50 text-slate-400 border border-slate-850 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <Database size={13} />
            Backend
          </button>
          <button
            onClick={() => setFilter("frontend")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              filter === "frontend"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-950/40 scale-105"
                : "bg-slate-900/50 text-slate-400 border border-slate-850 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <Code size={13} />
            Frontend
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              className="flex flex-col h-full overflow-hidden bg-slate-900/10 hover:bg-slate-900/30 border border-slate-900"
              glowColor={
                project.category === "fullstack"
                  ? "rgba(129, 140, 248, 0.12)"
                  : project.category === "backend"
                  ? "rgba(167, 139, 250, 0.12)"
                  : "rgba(34, 211, 238, 0.12)"
              }
            >
              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-1">
                      <FolderGit2 size={12} />
                      {project.category}
                    </span>
                    <div className="flex gap-1.5">
                      {project.tech.slice(0, 2).map((t) => (
                        <span key={t} className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white tracking-tight text-left group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-400 leading-relaxed text-left min-h-[55px]">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tech Stack Horizontal Pills */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900/60 border border-slate-850 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-900/80 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer flex items-center gap-1"
                >
                  View Details &rarr;
                </button>

                <div className="flex items-center gap-2.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white transition-colors border border-slate-850"
                    title="View Source Code"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  </a>
                  <a
                    href={project.demoUrl}
                    className="p-2 rounded bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white transition-colors border border-slate-850"
                    title="Live Demo"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            
            {/* Modal Card */}
            <div className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/95 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-scaleUp">
              
              {/* Modal Header */}
              <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="text-indigo-400" size={18} />
                  <h3 className="text-base sm:text-lg font-bold text-white font-mono">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-left text-sm text-slate-300 scrollbar-thin">
                
                {/* Intro */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 block">DESCRIPTION</span>
                  <p className="leading-relaxed text-slate-200">
                    {selectedProject.longDesc}
                  </p>
                </div>

                {/* Core Features */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400 block">KEY CAPABILITIES</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack details */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">TECHNOLOGY BLUEPRINT</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-indigo-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Custom Security & Database reflections */}
                {selectedProject.securityFocus && (
                  <div className="p-4 rounded-xl bg-rose-950/25 border border-rose-900/30 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 font-mono">
                      <ShieldCheck size={14} />
                      <span>SECURITY ARCHITECTURE</span>
                    </div>
                    <p className="text-xs text-rose-200/80 leading-relaxed">
                      {selectedProject.securityFocus}
                    </p>
                  </div>
                )}

                {selectedProject.schemaDetails && (
                  <div className="p-4 rounded-xl bg-indigo-950/25 border border-indigo-900/30 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-400 font-mono">
                      <Database size={14} />
                      <span>SCHEMA RELATIONSHIPS</span>
                    </div>
                    <p className="text-xs text-indigo-200/80 leading-relaxed font-mono">
                      {selectedProject.schemaDetails}
                    </p>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-end gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 transition-all cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  View GitHub
                </a>
                <a
                  href={selectedProject.demoUrl}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white transition-all cursor-pointer"
                >
                  <ExternalLink size={14} />
                  Launch Demo
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
