import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Simulate sending email api
    setTimeout(() => {
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 z-10 overflow-hidden bg-slate-950/20">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Get In Touch"
          title="Start A Conversation"
          subtitle="Interested in hiring me, collaborating on a project, or just talking shop? Reach out directly using the form below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight text-left">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed text-left">
                Feel free to contact me through my phone, direct email, or social media handles. I am active and usually reply within a couple of hours.
              </p>
            </div>

            {/* Direct Channels Grid */}
            <div className="space-y-4 pt-4">
              
              {/* Phone */}
              <a 
                href="tel:7011304656"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-900 bg-slate-900/10 hover:bg-slate-900/30 hover:border-slate-800 transition-all text-left group"
              >
                <div className="p-3 bg-slate-950 border border-slate-850 rounded-xl text-indigo-400 group-hover:text-indigo-300 group-hover:scale-105 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">Call / WhatsApp</div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">+91 7011304656</div>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:mlcabhi18@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-900 bg-slate-900/10 hover:bg-slate-900/30 hover:border-slate-800 transition-all text-left group"
              >
                <div className="p-3 bg-slate-950 border border-slate-850 rounded-xl text-violet-400 group-hover:text-violet-300 group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">Write Email</div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors underline decoration-violet-500/30">mlcabhi18@gmail.com</div>
                </div>
              </a>

              {/* Address */}
              <div 
                className="flex items-start gap-4 p-4 rounded-xl border border-slate-900 bg-slate-900/10 text-left"
              >
                <div className="p-3 bg-slate-950 border border-slate-850 rounded-xl text-cyan-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">Location</div>
                  <div className="text-sm font-semibold text-slate-200">CJ-3 Rajiv Gandhi Camp, Naraina Vihar, New Delhi - 110028</div>
                </div>
              </div>

            </div>

            {/* Social Connection Channels */}
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-950/45 space-y-4">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest text-left">
                Digital Footprints
              </h4>
              <div className="flex items-center gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/mlcabhi18"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-850 transition-all hover:scale-105 cursor-pointer"
                  title="Github Profiles"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </a>
                
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-850 transition-all hover:scale-105 cursor-pointer"
                  title="LinkedIn Connection"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form Wrapper */}
          <div className="lg:col-span-7 h-full">
            <TiltCard
              className="p-8 sm:p-10 border border-slate-900 bg-slate-950/80 backdrop-blur-md h-full flex flex-col justify-center"
              glowColor="rgba(99, 102, 241, 0.12)"
            >
              {status === "success" ? (
                <div className="text-center py-12 space-y-6 animate-scaleUp">
                  <div className="w-16 h-16 bg-emerald-950/60 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Message Dispatched!
                    </h3>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                      Thank you, Abhiraj has received your transmission. I will analyze the contents and reply to your email address shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="flex items-center gap-1.5 px-5 py-2.5 bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white text-xs font-mono font-semibold rounded-xl border border-slate-800 transition-all mx-auto cursor-pointer"
                  >
                    Send another message
                    <ArrowRight size={13} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Send a Message
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill in details. The communication channel is secure and encrypted.
                    </p>
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-900/40 text-rose-300 text-xs font-mono">
                      [!] Error: Please ensure Name, Email, and Message fields are filled.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase font-bold tracking-widest text-slate-500 block">Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-900 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase font-bold tracking-widest text-slate-500 block">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-900 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase font-bold tracking-widest text-slate-500 block">Subject</label>
                    <input
                      type="text"
                      placeholder="Project Collaboration, Job Hiring, etc."
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-900 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase font-bold tracking-widest text-slate-500 block">Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Abhiraj, I viewed your portfolio and would like to discuss..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-900 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-950/50 hover:shadow-indigo-900/45 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {status === "submitting" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Encrypting & Dispatching...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Transmit Message
                      </>
                    )}
                  </button>

                </form>
              )}
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}
