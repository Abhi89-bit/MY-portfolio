import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DeveloperPlayground from "./components/DeveloperPlayground";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeSelector from "./components/ThemeSelector";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Track scrolling to update active link in navbar
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "playground", "experience", "services", "resume", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -55% 0px", // Targets the middle of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          // Silent update of the URL hash without jumping the page
          window.history.pushState(null, "", `#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Scroll to section on initial load if URL has a hash
    const handleInitialHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sections.includes(hash)) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(hash);
          }
        }, 400);
      }
    };

    handleInitialHash();

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Smooth scroll handler for Navbar links & CTA buttons
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Precise offset calculation for sticky navbar
      const yOffset = -75; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(sectionId);
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* Interactive Floating Particle Background */}
      <ParticleBackground />

      {/* Decorative Interactive Blurred Blobs (3D Visual Depth) - Now 100% Theme Based */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-primary/10 blur-[120px] pointer-events-none z-0 animate-float transition-all duration-1000" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-brand-secondary/8 blur-[130px] pointer-events-none z-0 animate-float-delayed transition-all duration-1000" />
      <div className="fixed top-[40%] right-[15%] w-[30vw] h-[30vw] rounded-full bg-brand-primary/5 blur-[100px] pointer-events-none z-0 transition-all duration-1000" />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Structured Single Page Layout */}
      <main className="relative z-10">
        
        {/* 1. Home Section */}
        <Hero onNavClick={handleNavClick} />

        {/* Diagonal Section Dividers (Neon Accent Line) */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* 2. About Section */}
        <About />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* 3. Skills Section */}
        <Skills />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* 4. Projects Section */}
        <Projects />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* Playable Projects Playground Section */}
        <DeveloperPlayground />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* 5. Experience Section */}
        <Experience />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* 6. Services Section */}
        <Services />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* 7. Resume Section */}
        <Resume />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* 8. Contact Section */}
        <Contact />

      </main>

      {/* Floating Interactive Theme Engine Customizer */}
      <ThemeSelector />

      {/* Modern Footer with Quick Links & Digital Info */}
      <Footer onNavClick={handleNavClick} />

    </div>
  );
}
