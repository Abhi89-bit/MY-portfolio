import { useState } from "react";
import { 
  Play, Database, Cpu, Terminal, Shield, 
  CheckCircle, Trash2, Plus, ArrowRight, Volume2, 
  Sparkles, UserCheck, CalendarDays
} from "lucide-react";
import TiltCard from "./TiltCard";
import SectionTitle from "./SectionTitle";

type SimulationTab = "nike" | "jarvis" | "database" | "task" | "leave";

export default function DeveloperPlayground() {
  const [activeTab, setActiveTab] = useState<SimulationTab>("nike");

  // 1. Nike Simulator States
  const [nikeCart, setNikeCart] = useState<{ id: number; name: string; price: number; qty: number }[]>([
    { id: 1, name: "Nike Air Max Prime", price: 12999, qty: 1 },
    { id: 2, name: "Nike Zoom Pegasus 40", price: 9999, qty: 1 },
  ]);
  const [nikeDiscount, setNikeDiscount] = useState("");
  const [nikeAppliedDiscount, setNikeAppliedDiscount] = useState(0);
  const [nikeOrderLogs, setNikeOrderLogs] = useState<string[]>(["[SYSTEM] Shopping Cart Initialized."]);

  const handleNikeQty = (id: number, delta: number) => {
    setNikeCart(prev => 
      prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(1, item.qty + delta);
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
    setNikeOrderLogs(prev => [...prev, `[UPDATE] Item ID ${id} quantity updated.`]);
  };

  const handleNikeCheckout = () => {
    const total = nikeCart.reduce((sum, item) => sum + item.price * item.qty, 0) - nikeAppliedDiscount;
    setNikeOrderLogs(prev => [
      ...prev, 
      `[CHECKOUT] Relational transaction started. Creating ORDER_ID: ${Math.floor(Math.random() * 90000 + 10000)}`,
      `[SQL] INSERT INTO orders (total, status) VALUES (${total}, 'PENDING')`,
      `[SUCCESS] Transaction committed. Payment secure.`
    ]);
  };

  const applyNikePromo = () => {
    if (nikeDiscount.toUpperCase() === "ABHI10") {
      setNikeAppliedDiscount(1500);
      setNikeOrderLogs(prev => [...prev, "[PROMO] 10% Coupon 'ABHI10' applied successfully! Discount: ₹1,500."]);
    } else {
      setNikeOrderLogs(prev => [...prev, "[ERROR] Invalid promotional code."]);
    }
  };

  // 2. Jarvis Command HUD States
  const [jarvisLog, setJarvisLog] = useState<string[]>([
    "JARVIS V3.0 // STARK INDUSTRIES INTERACTION INITIALIZED",
    "Ready for voice synthesizer inputs or command triggers."
  ]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const triggerJarvisSpeech = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 0.95;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
    setJarvisLog(prev => [...prev, `[VOICE] Speaking: "${text}"`]);
  };

  const handleJarvisCommand = (command: string) => {
    switch (command) {
      case "diagnose":
        setJarvisLog(prev => [
          ...prev,
          "-> Initiating system security diagnostics...",
          "-> Checking firewall blocks... [OK]",
          "-> OWASP vulnerability test: SQLi defense [OK], XSS sanitization [OK]",
          "-> Status: Abhiraj's code is fully secured and operational!"
        ]);
        triggerJarvisSpeech("Diagnostics completed. Security protocols are fully operational.");
        break;
      case "skills":
        setJarvisLog(prev => [
          ...prev,
          "-> Accessing Abhiraj's Core Skill Matrix...",
          "-> Backend: Python, Django, REST APIs, SQL, MongoDB",
          "-> Frontend: React.js, Next.js, HTML5, CSS3, Tailwind, Bootstrap",
          "-> Work Experience: Active Developer at Craw Cybersecurity"
        ]);
        triggerJarvisSpeech("Core skills accessed. Recommended stack is Python Django combined with React.");
        break;
      case "craw":
        setJarvisLog(prev => [
          ...prev,
          "-> Inspecting Craw Cybersecurity active workload...",
          "-> Role: Full Stack Python Developer (since June 16, 2025)",
          "-> Activities: Product engineering, secure API building, and penetrative patching."
        ]);
        triggerJarvisSpeech("Active role located at Craw Cybersecurity. Secure development is prioritized.");
        break;
      default:
        break;
    }
  };

  // 3. Database SQL Console States
  const [sqlInput, setSqlInput] = useState("SELECT * FROM skills;");
  const [sqlResult, setSqlResult] = useState<any[]>([]);
  const [sqlMessage, setSqlMessage] = useState("");
  
  const mockDb = {
    skills: [
      { id: 1, name: "Python", type: "Backend", proficiency: "92%" },
      { id: 2, name: "Django", type: "Backend", proficiency: "88%" },
      { id: 3, name: "React (DOM)", type: "Frontend", proficiency: "80%" },
      { id: 4, name: "SQL", type: "Database", proficiency: "85%" },
      { id: 5, name: "MongoDB", type: "Database", proficiency: "75%" },
    ],
    experience: [
      { id: 1, role: "Fullstack Developer", company: "Craw Cybersecurity", period: "2025-Present" },
      { id: 2, course: "Fullstack Python", institute: "IT Vedant (South-Ex)", period: "2024" },
      { id: 3, degree: "BA Pol Hons", university: "Delhi University", period: "2020-2023" },
    ],
    projects: [
      { id: 1, name: "Nike E-Commerce", stack: "Django, SQL, Bootstrap", type: "Backend/Fullstack" },
      { id: 2, name: "Jarvis E-Commerce", stack: "Django, Web Speech, CSS", type: "Backend/Fullstack" },
      { id: 3, name: "Task Manager", stack: "Python, Django, JS", type: "Backend" },
      { id: 4, name: "Database Manager", stack: "Python, SQL, Bootstrap", type: "Backend" },
    ]
  };

  const handleSqlRun = () => {
    const query = sqlInput.trim().toLowerCase();
    
    if (query.includes("select") && query.includes("from skills")) {
      setSqlResult(mockDb.skills);
      setSqlMessage("Query returned 5 rows in 0.04s.");
    } else if (query.includes("select") && query.includes("from experience")) {
      setSqlResult(mockDb.experience);
      setSqlMessage("Query returned 3 rows in 0.02s.");
    } else if (query.includes("select") && query.includes("from projects")) {
      setSqlResult(mockDb.projects);
      setSqlMessage("Query returned 4 rows in 0.03s.");
    } else {
      setSqlResult([]);
      setSqlMessage("Error: Table not found or syntax error. Try: 'SELECT * FROM skills;' or 'SELECT * FROM experience;' or 'SELECT * FROM projects;'");
    }
  };

  // 4. Task Board States
  const [tasks, setTasks] = useState([
    { id: 1, title: "Configure Django backend models", status: "Done", priority: "High" },
    { id: 2, title: "Integrate React components with API", status: "Progress", priority: "Medium" },
    { id: 3, title: "Run secure coding audits (OWASP)", status: "Todo", priority: "High" },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState("Medium");

  const addTask = () => {
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      status: "Todo",
      priority: newTaskPriority
    };
    setTasks(prev => [...prev, newTask]);
    setNewTaskTitle("");
  };

  const advanceTask = (id: number) => {
    setTasks(prev => 
      prev.map(t => {
        if (t.id === id) {
          const nextStatus = t.status === "Todo" ? "Progress" : t.status === "Progress" ? "Done" : "Todo";
          return { ...t, status: nextStatus };
        }
        return t;
      })
    );
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  // 5. Leave Manager States
  const [leaveBalance, setLeaveBalance] = useState({ sick: 10, casual: 8, annual: 12 });
  const [leaveHistory, setLeaveHistory] = useState([
    { id: 1, type: "Sick Leave", duration: "2 days", status: "Approved" },
    { id: 2, type: "Casual Leave", duration: "1 day", status: "Approved" },
  ]);
  const [leaveTypeInput, setLeaveTypeInput] = useState<"sick" | "casual" | "annual">("sick");
  const [leaveDaysInput, setLeaveDaysInput] = useState(1);
  const [leaveWorkflowMsg, setLeaveWorkflowMsg] = useState("System idling. Ready for employee leave submissions.");

  const requestLeave = () => {
    const currentBal = leaveBalance[leaveTypeInput];
    if (leaveDaysInput > currentBal) {
      setLeaveWorkflowMsg(`[REJECTED] Insufficient leave balance! You requested ${leaveDaysInput} day(s) but only have ${currentBal} remaining.`);
      return;
    }

    setLeaveWorkflowMsg("[PENDING] Routing leave request to Manager and HR systems...");
    
    setTimeout(() => {
      setLeaveBalance(prev => ({ ...prev, [leaveTypeInput]: prev[leaveTypeInput] - leaveDaysInput }));
      setLeaveHistory(prev => [
        { 
          id: Date.now(), 
          type: `${leaveTypeInput.charAt(0).toUpperCase() + leaveTypeInput.slice(1)} Leave`, 
          duration: `${leaveDaysInput} day(s)`, 
          status: "Approved" 
        },
        ...prev
      ]);
      setLeaveWorkflowMsg(`[APPROVED] Manager and HR approved the request! ${leaveDaysInput} day(s) deducted from ${leaveTypeInput} balance.`);
    }, 1200);
  };

  return (
    <section id="playground" className="relative py-24 z-10 overflow-hidden bg-slate-950/40">
      
      {/* Background neon visual elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(99,102,241,0.02),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Interactive Sandbox"
          title="Playable Projects Playground"
          subtitle="Interact with fully operational miniature simulations of the software projects directly from my curriculum vitae."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
          
          {/* Simulation Selectors Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            
            <div className="p-5 rounded-2xl border border-slate-900 bg-slate-900/10 text-left space-y-2 mb-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles size={16} className="text-indigo-400" />
                Select a Project to Play
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Click any project selector below to launch its corresponding live functional engine and inspect code simulations.
              </p>
            </div>

            {/* Nike */}
            <button
              onClick={() => setActiveTab("nike")}
              className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all cursor-pointer group ${
                activeTab === "nike"
                  ? "bg-brand-primary/10 border-brand-primary/40 shadow-lg shadow-brand-primary/10 text-white scale-[1.02]"
                  : "bg-slate-900/30 border-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-850 flex items-center justify-center text-brand-primary">
                  👟
                </span>
                <div>
                  <h4 className="text-sm font-bold">Nike Store Simulator</h4>
                  <span className="text-[10px] font-mono opacity-60">Fullstack E-Commerce</span>
                </div>
              </div>
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Jarvis */}
            <button
              onClick={() => setActiveTab("jarvis")}
              className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all cursor-pointer group ${
                activeTab === "jarvis"
                  ? "bg-brand-primary/10 border-brand-primary/40 shadow-lg shadow-brand-primary/10 text-white scale-[1.02]"
                  : "bg-slate-900/30 border-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-850 flex items-center justify-center text-brand-secondary">
                  🦾
                </span>
                <div>
                  <h4 className="text-sm font-bold">Jarvis Voice HUD</h4>
                  <span className="text-[10px] font-mono opacity-60">Voice Assistant Web App</span>
                </div>
              </div>
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* SQL Database */}
            <button
              onClick={() => setActiveTab("database")}
              className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all cursor-pointer group ${
                activeTab === "database"
                  ? "bg-brand-primary/10 border-brand-primary/40 shadow-lg shadow-brand-primary/10 text-white scale-[1.02]"
                  : "bg-slate-900/30 border-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-850 flex items-center justify-center text-brand-primary">
                  <Database size={18} />
                </span>
                <div>
                  <h4 className="text-sm font-bold">Database SQL Console</h4>
                  <span className="text-[10px] font-mono opacity-60">Metadata & SQL runner</span>
                </div>
              </div>
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Task Manager */}
            <button
              onClick={() => setActiveTab("task")}
              className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all cursor-pointer group ${
                activeTab === "task"
                  ? "bg-brand-primary/10 border-brand-primary/40 shadow-lg shadow-brand-primary/10 text-white scale-[1.02]"
                  : "bg-slate-900/30 border-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-850 flex items-center justify-center text-brand-secondary">
                  📋
                </span>
                <div>
                  <h4 className="text-sm font-bold">Task Kanban Board</h4>
                  <span className="text-[10px] font-mono opacity-60">Team Productivity Tool</span>
                </div>
              </div>
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Leave Manager */}
            <button
              onClick={() => setActiveTab("leave")}
              className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all cursor-pointer group ${
                activeTab === "leave"
                  ? "bg-brand-primary/10 border-brand-primary/40 shadow-lg shadow-brand-primary/10 text-white scale-[1.02]"
                  : "bg-slate-900/30 border-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-850 flex items-center justify-center text-brand-primary">
                  <CalendarDays size={18} />
                </span>
                <div>
                  <h4 className="text-sm font-bold">Leave Manager Portal</h4>
                  <span className="text-[10px] font-mono opacity-60">HR Workflow Automation</span>
                </div>
              </div>
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

          </div>

          {/* Active Sandbox Workspace Right Column */}
          <div className="lg:col-span-8">
            <TiltCard
              className="h-full border border-slate-900 bg-slate-950/80 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between"
              glowColor="rgba(99, 102, 241, 0.1)"
            >
              
              {/* 1. Nike Store Simulator View */}
              {activeTab === "nike" && (
                <div className="space-y-6 text-left animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">👟</span>
                      <div>
                        <h3 className="text-base font-bold text-white font-mono">Nike Store Simulator</h3>
                        <p className="text-[11px] text-slate-500">Core technologies: Python, Django, SQL, Bootstrap</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-950/40 border border-indigo-500/20 text-indigo-300">Playable</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Cart Items Manager */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-400">Active Cart Items</h4>
                      <div className="space-y-2.5">
                        {nikeCart.map(item => (
                          <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-900 text-xs">
                            <span className="font-semibold text-slate-200">{item.name}</span>
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-slate-400">₹{(item.price * item.qty).toLocaleString()}</span>
                              <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded">
                                <button onClick={() => handleNikeQty(item.id, -1)} className="px-1.5 py-0.5 text-slate-400 hover:text-white cursor-pointer">-</button>
                                <span className="px-1 text-white font-bold">{item.qty}</span>
                                <button onClick={() => handleNikeQty(item.id, 1)} className="px-1.5 py-0.5 text-slate-400 hover:text-white cursor-pointer">+</button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Promo code */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 block">Apply Promo Code (Try: ABHI10)</label>
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            placeholder="ABHI10" 
                            value={nikeDiscount} 
                            onChange={(e) => setNikeDiscount(e.target.value)}
                            className="bg-slate-950 border border-slate-900 text-xs px-3 py-2 rounded-lg text-slate-200 focus:outline-none focus:border-indigo-500 flex-grow" 
                          />
                          <button onClick={applyNikePromo} className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white text-xs px-4 py-2 rounded-lg cursor-pointer">Apply</button>
                        </div>
                      </div>
                    </div>

                    {/* Checkout Details & Logs */}
                    <div className="space-y-4 flex flex-col justify-between">
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-900 space-y-2 text-xs">
                        <h4 className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Checkout Sheet</h4>
                        <div className="flex justify-between text-slate-300">
                          <span>Subtotal:</span>
                          <span className="font-mono">₹{nikeCart.reduce((sum, item) => sum + item.price * item.qty, 0).toLocaleString()}</span>
                        </div>
                        {nikeAppliedDiscount > 0 && (
                          <div className="flex justify-between text-emerald-400">
                            <span>Discount:</span>
                            <span className="font-mono">-₹{nikeAppliedDiscount.toLocaleString()}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-white font-bold border-t border-slate-800 pt-2 text-sm">
                          <span>Grand Total:</span>
                          <span className="font-mono text-brand-primary">₹{(nikeCart.reduce((sum, item) => sum + item.price * item.qty, 0) - nikeAppliedDiscount).toLocaleString()}</span>
                        </div>
                        <button onClick={handleNikeCheckout} className="w-full mt-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-slate-950 text-xs font-extrabold py-2.5 rounded-lg cursor-pointer transition-all">Submit Secure Checkout</button>
                      </div>

                      {/* Logs console */}
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-900 text-[10px] font-mono h-24 overflow-y-auto text-brand-primary space-y-1">
                        {nikeOrderLogs.map((log, i) => (
                          <div key={i}>{log}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Jarvis Voice HUD View */}
              {activeTab === "jarvis" && (
                <div className="space-y-6 text-left animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🦾</span>
                      <div>
                        <h3 className="text-base font-bold text-white font-mono">Jarvis Command HUD</h3>
                        <p className="text-[11px] text-slate-500">Core technologies: Python, Django, Web Speech Synthesis, CSS3</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-950/40 border border-indigo-500/20 text-indigo-300">Interactive</span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    A futuristic interface integrated with your browser's speech engine. Execute diagnostics or query qualifications to hear Jarvis respond with speech feedback.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Controller Triggers */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-400">HUD Triggers</h4>
                      <button 
                        onClick={() => handleJarvisCommand("diagnose")}
                        className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs font-mono font-semibold text-slate-200 cursor-pointer text-left"
                      >
                        <span>&gt; Run Security Diagnostics</span>
                        <Terminal size={14} className="text-brand-primary" />
                      </button>
                      <button 
                        onClick={() => handleJarvisCommand("skills")}
                        className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs font-mono font-semibold text-slate-200 cursor-pointer text-left"
                      >
                        <span>&gt; Fetch Core Skills Matrix</span>
                        <Cpu size={14} className="text-brand-secondary" />
                      </button>
                      <button 
                        onClick={() => handleJarvisCommand("craw")}
                        className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs font-mono font-semibold text-slate-200 cursor-pointer text-left"
                      >
                        <span>&gt; Audit Craw Cybersec Workload</span>
                        <Shield size={14} className="text-brand-primary" />
                      </button>
                    </div>

                    {/* HUD Diagnostic Logs */}
                    <div className="flex flex-col justify-between space-y-4">
                      <div className="bg-slate-950 border border-slate-900 p-4 rounded-xl h-40 overflow-y-auto text-[10px] font-mono text-cyan-400 space-y-1.5">
                        {jarvisLog.map((log, i) => (
                          <div key={i} className={log.startsWith("->") ? "text-slate-300" : ""}>{log}</div>
                        ))}
                      </div>
                      
                      {/* Audio Feedback Active tag */}
                      <div className="flex items-center gap-2 justify-end text-xs font-mono">
                        {isSpeaking ? (
                          <span className="flex items-center gap-1.5 text-emerald-400 animate-pulse">
                            <Volume2 size={15} />
                            Audio Transmission Active...
                          </span>
                        ) : (
                          <span className="text-slate-500">Audio feedback idle</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Database SQL Console View */}
              {activeTab === "database" && (
                <div className="space-y-6 text-left animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                    <div className="flex items-center gap-2">
                      <Database className="text-indigo-400" size={20} />
                      <div>
                        <h3 className="text-base font-bold text-white font-mono">Database SQL Console</h3>
                        <p className="text-[11px] text-slate-500">Core technologies: Python, SQL, Django ORM, Bootstrap</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-950/40 border border-indigo-500/20 text-indigo-300">Playable</span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Test queries against my mock database! Input your SQL query and click Run to dynamically pull records about my profile.
                  </p>

                  <div className="space-y-4">
                    {/* Pre-made Query Helper */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                      <span>Prebuilt Queries:</span>
                      {["SELECT * FROM skills;", "SELECT * FROM experience;", "SELECT * FROM projects;"].map(q => (
                        <button 
                          key={q} 
                          onClick={() => setSqlInput(q)}
                          className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-indigo-400 hover:text-white cursor-pointer transition-colors"
                        >
                          {q}
                        </button>
                      ))}
                    </div>

                    {/* SQL Input Area */}
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={sqlInput} 
                        onChange={(e) => setSqlInput(e.target.value)}
                        className="bg-slate-950 border border-slate-900 text-xs px-4 py-3 rounded-xl text-slate-200 font-mono focus:outline-none focus:border-brand-primary flex-grow"
                        placeholder="SELECT * FROM table;"
                      />
                      <button 
                        onClick={handleSqlRun}
                        className="flex items-center gap-1.5 px-5 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-slate-950 text-xs font-extrabold font-mono rounded-xl cursor-pointer transition-all active:scale-95"
                      >
                        <Play size={12} fill="currentColor" />
                        Run SQL
                      </button>
                    </div>

                    {/* SQL Result Table */}
                    <div className="bg-slate-950 border border-slate-900 rounded-xl overflow-hidden min-h-[140px] flex flex-col justify-between p-4">
                      {sqlResult.length > 0 ? (
                        <div className="overflow-x-auto max-h-[120px] scrollbar-thin">
                          <table className="w-full text-left text-xs font-mono text-slate-300">
                            <thead>
                              <tr className="border-b border-slate-900 text-brand-primary">
                                {Object.keys(sqlResult[0]).map(key => (
                                  <th key={key} className="py-2 px-3">{key.toUpperCase()}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {sqlResult.map((row, idx) => (
                                <tr key={idx} className="border-b border-slate-900/40 hover:bg-slate-900/30">
                                  {Object.values(row).map((val: any, i) => (
                                    <td key={i} className="py-2 px-3">{val}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="text-xs font-mono text-slate-500 italic my-auto text-center">
                          Input query and click &quot;Run SQL&quot; to see result tables...
                        </div>
                      )}

                      {/* Query message */}
                      {sqlMessage && (
                        <div className="text-[10px] font-mono text-emerald-400 border-t border-slate-900/60 pt-2 mt-2">
                          {sqlMessage}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Task Board View */}
              {activeTab === "task" && (
                <div className="space-y-6 text-left animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">📋</span>
                      <div>
                        <h3 className="text-base font-bold text-white font-mono">Task Kanban Board</h3>
                        <p className="text-[11px] text-slate-500">Core technologies: HTML, CSS, Javascript, Bootstrap, Python, Django</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-950/40 border border-indigo-500/20 text-indigo-300">Playable</span>
                  </div>

                  {/* Task Creator */}
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Add a task, e.g. Audit API routing..." 
                      value={newTaskTitle} 
                      onChange={(e) => setNewTaskTitle(e.target.value)}
                      className="bg-slate-950 border border-slate-900 text-xs px-4 py-2.5 rounded-xl text-slate-200 focus:outline-none focus:border-indigo-500 flex-grow"
                    />
                    <select 
                      value={newTaskPriority} 
                      onChange={(e) => setNewTaskPriority(e.target.value)}
                      className="bg-slate-950 border border-slate-900 text-xs px-3 py-2 rounded-xl text-slate-300 focus:outline-none cursor-pointer"
                    >
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                    <button 
                      onClick={addTask}
                      className="flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-semibold rounded-xl cursor-pointer transition-all"
                    >
                      <Plus size={14} />
                      Add Task
                    </button>
                  </div>

                  {/* Task Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    {/* Todo Column */}
                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-900 space-y-3">
                      <h4 className="text-xs font-mono font-bold text-brand-primary border-b border-slate-800 pb-1.5">Todo ({tasks.filter(t => t.status === "Todo").length})</h4>
                      <div className="space-y-2">
                        {tasks.filter(t => t.status === "Todo").map(t => (
                          <div key={t.id} className="p-3 rounded-lg bg-slate-950 border border-slate-900 space-y-2 text-left">
                            <p className="text-xs text-slate-200 leading-normal">{t.title}</p>
                            <div className="flex items-center justify-between text-[9px] font-mono">
                              <span className={`px-1 rounded ${t.priority === "High" ? "bg-rose-950/40 border border-rose-900/30 text-rose-300" : "bg-brand-primary/10 border border-brand-primary/20 text-brand-primary"}`}>{t.priority} Priority</span>
                              <div className="flex gap-1.5">
                                <button onClick={() => advanceTask(t.id)} className="text-brand-primary hover:text-white cursor-pointer" title="Move status">Start &rarr;</button>
                                <button onClick={() => deleteTask(t.id)} className="text-rose-500 hover:text-white cursor-pointer"><Trash2 size={12} /></button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress Column */}
                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-900 space-y-3">
                      <h4 className="text-xs font-mono font-bold text-brand-secondary border-b border-slate-800 pb-1.5">In Progress ({tasks.filter(t => t.status === "Progress").length})</h4>
                      <div className="space-y-2">
                        {tasks.filter(t => t.status === "Progress").map(t => (
                          <div key={t.id} className="p-3 rounded-lg bg-slate-950 border border-slate-900 space-y-2 text-left">
                            <p className="text-xs text-slate-200 leading-normal">{t.title}</p>
                            <div className="flex items-center justify-between text-[9px] font-mono">
                              <span className="px-1 rounded bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary">{t.priority} Priority</span>
                              <div className="flex gap-1.5">
                                <button onClick={() => advanceTask(t.id)} className="text-brand-secondary hover:text-white cursor-pointer" title="Move status">Complete &rarr;</button>
                                <button onClick={() => deleteTask(t.id)} className="text-rose-500 hover:text-white cursor-pointer"><Trash2 size={12} /></button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Done Column */}
                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-900 space-y-3">
                      <h4 className="text-xs font-mono font-bold text-brand-primary border-b border-slate-800 pb-1.5">Done ({tasks.filter(t => t.status === "Done").length})</h4>
                      <div className="space-y-2">
                        {tasks.filter(t => t.status === "Done").map(t => (
                          <div key={t.id} className="p-3 rounded-lg bg-slate-950 border border-slate-900 space-y-2 text-left">
                            <p className="text-xs text-slate-400 line-through leading-normal">{t.title}</p>
                            <div className="flex items-center justify-between text-[9px] font-mono">
                              <span className="px-1 rounded bg-brand-primary/10 border border-brand-primary/20 text-brand-primary">{t.priority} Priority</span>
                              <div className="flex gap-1.5">
                                <span className="text-brand-primary flex items-center gap-0.5"><CheckCircle size={10} /> Completed</span>
                                <button onClick={() => deleteTask(t.id)} className="text-rose-500 hover:text-white cursor-pointer"><Trash2 size={12} /></button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* 5. Leave Manager View */}
              {activeTab === "leave" && (
                <div className="space-y-6 text-left animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">📋</span>
                      <div>
                        <h3 className="text-base font-bold text-white font-mono">HR Leave Manager Portal</h3>
                        <p className="text-[11px] text-slate-500">Core technologies: Python, Django, Relational SQL, CSS3, Bootstrap</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-950/40 border border-indigo-500/20 text-indigo-300">Playable</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Leave submission */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-400">Request Leave</h4>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono text-slate-500">Leave Type</label>
                          <select 
                            value={leaveTypeInput} 
                            onChange={(e) => setLeaveTypeInput(e.target.value as any)}
                            className="w-full bg-slate-950 border border-slate-900 text-xs px-3 py-2 rounded-xl text-slate-200 focus:outline-none cursor-pointer"
                          >
                            <option value="sick">Sick Leave</option>
                            <option value="casual">Casual Leave</option>
                            <option value="annual">Annual Leave</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono text-slate-500">Duration (Days)</label>
                          <input 
                            type="number" 
                            min="1" 
                            max="15"
                            value={leaveDaysInput} 
                            onChange={(e) => setLeaveDaysInput(Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-full bg-slate-950 border border-slate-900 text-xs px-3 py-2 rounded-xl text-slate-200 focus:outline-none"
                          />
                        </div>
                      </div>

                      <button 
                        onClick={requestLeave}
                        className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-slate-950 text-xs font-extrabold py-2.5 rounded-lg cursor-pointer transition-all"
                      >
                        Submit Leave Request
                      </button>

                      {/* Workflow log */}
                      <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-900 text-[10px] font-mono text-slate-300">
                        <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-1">HR Workflow Log</div>
                        <div className="leading-relaxed">{leaveWorkflowMsg}</div>
                      </div>
                    </div>

                    {/* Leave balances */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-400">Available Balances</h4>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-900 space-y-1">
                          <span className="text-xl">🤒</span>
                          <span className="text-[10px] font-mono text-slate-400 block">Sick</span>
                          <span className="text-base font-extrabold text-brand-primary font-mono">{leaveBalance.sick}d</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-900 space-y-1">
                          <span className="text-xl">⛱️</span>
                          <span className="text-[10px] font-mono text-slate-400 block">Casual</span>
                          <span className="text-base font-extrabold text-brand-secondary font-mono">{leaveBalance.casual}d</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-900 space-y-1">
                          <span className="text-xl">✈️</span>
                          <span className="text-[10px] font-mono text-slate-400 block">Annual</span>
                          <span className="text-base font-extrabold text-brand-primary font-mono">{leaveBalance.annual}d</span>
                        </div>
                      </div>

                      {/* Leave History */}
                      <div className="space-y-2">
                        <h5 className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-500">History Log</h5>
                        <div className="space-y-1.5 max-h-[85px] overflow-y-auto scrollbar-none">
                          {leaveHistory.map(hist => (
                            <div key={hist.id} className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-900/80 text-[10px] font-mono">
                              <span className="text-slate-300">{hist.type} ({hist.duration})</span>
                              <span className="text-brand-primary flex items-center gap-1">
                                <UserCheck size={10} />
                                {hist.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}
