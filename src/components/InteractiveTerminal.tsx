import { useState, useEffect } from "react";
import { Play, Terminal as TermIcon, FileCode, Check, RefreshCw } from "lucide-react";

interface CodeFile {
  name: string;
  language: string;
  code: string;
  output: string;
}

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState(0);
  const [typedCode, setTypedCode] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [copied, setCopied] = useState(false);

  const files: CodeFile[] = [
    {
      name: "developer.py",
      language: "python",
      code: `class FullStackDeveloper:
    def __init__(self):
        self.name = "Abhiraj Singh"
        self.role = "Full Stack Python Developer"
        self.experience = "Full Stack Developer @ Craw Cybersecurity"
        self.tech_stack = ["Python", "Django", "React", "SQL", "Next.js"]
        self.passion = "Building secure, highly scalable web apps"

    def introduce(self):
        print(f"Hi, I'm {self.name} - {self.role}")
        print(f"Currently securing & scaling at: {self.experience}")
        print("Equipped with deep backend capabilities & frontend finesse.")

me = FullStackDeveloper()
me.introduce()`,
      output: `Hi, I'm Abhiraj Singh - Full Stack Python Developer
Currently securing & scaling at: Full Stack Developer @ Craw Cybersecurity
Equipped with deep backend capabilities & frontend finesse.`
    },
    {
      name: "skills_matrix.py",
      language: "python",
      code: `skills = {
    "Backend": ["Python 3", "Django", "REST APIs", "MVC Architecture"],
    "Frontend": ["React.js", "JavaScript (ES6)", "HTML5/CSS3", "Tailwind CSS", "Next.js"],
    "Database": ["SQL", "PostgreSQL", "MongoDB"],
    "Security": ["OWASP Top 10", "Security Testing", "Secure Coding Practices"],
    "Tools": ["Git/GitHub", "Bootstrap", "VS Code", "Postman"]
}

for category, items in skills.items():
    print(f"[+] {category.upper()}: {', '.join(items)}")`,
      output: `[+] BACKEND: Python 3, Django, REST APIs, MVC Architecture
[+] FRONTEND: React.js, JavaScript (ES6), HTML5/CSS3, Tailwind CSS, Next.js
[+] DATABASE: SQL, PostgreSQL, MongoDB
[+] SECURITY: OWASP Top 10, Security Testing, Secure Coding Practices
[+] TOOLS: Git/GitHub, Bootstrap, VS Code, Postman`
    },
    {
      name: "craw_cybersec.py",
      language: "python",
      code: `from datetime import date

def calculate_experience():
    start_date = date(2025, 6, 16)
    today = date.today()
    delta = today - start_date
    
    print("[INIT] Loading Work History...")
    print(f"Company: CRAW Cyber Security")
    print(f"Role: Full Stack Python Developer")
    print(f"Active Projects: Web App Development & Penetration Testing")
    print(f"Days of impact: {delta.days}+ days and counting!")

calculate_experience()`,
      output: `[INIT] Loading Work History...
Company: CRAW Cyber Security
Role: Full Stack Python Developer
Active Projects: Web App Development & Penetration Testing
Days of impact: Active since June 2025 and driving cyber-resilient product development!`
    },
    {
      name: "get_in_touch.py",
      language: "python",
      code: `contact_info = {
    "phone": "+91 7011304656",
    "email": "mlcabhi18@gmail.com",
    "location": "New Delhi, India",
    "github": "github.com/abhirajsingh",
    "linkedin": "linkedin.com/in/abhirajsingh"
}

def get_connection_channels():
    print("=== ESTABLISHING CONNECTION CHANNEL ===")
    for channel, val in contact_info.items():
        print(f"  -> {channel.capitalize()}: {val}")
    print("=======================================")
    print("Status: Operational. Feel free to ping!")

get_connection_channels()`,
      output: `=== ESTABLISHING CONNECTION CHANNEL ===
  -> Phone: +91 7011304656
  -> Email: mlcabhi18@gmail.com
  -> Location: New Delhi, India
  -> Github: github.com/abhirajsingh
  -> Linkedin: linkedin.com/in/abhirajsingh
=======================================
Status: Operational. Feel free to ping!`
    }
  ];

  // Typing effect when tab changes
  useEffect(() => {
    setIsTyping(true);
    setShowOutput(false);
    setIsRunning(false);
    
    let currentCode = files[activeTab].code;
    let index = 0;
    
    // Instead of typing char by char (which is slow for large codes), 
    // let's do chunks of chars or immediate presentation with typing simulation to keep it snappy.
    const interval = setInterval(() => {
      // Add 8 characters at a time for speed and performance
      index += 8;
      if (index >= currentCode.length) {
        setTypedCode(currentCode);
        setIsTyping(false);
        clearInterval(interval);
      } else {
        setTypedCode(currentCode.substring(0, index) + "▋");
      }
    }, 15);

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleRunCode = () => {
    if (isTyping || isRunning) return;
    
    setIsRunning(true);
    setShowOutput(false);
    
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 900);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(files[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Helper to colorize Python code syntax in a lightweight, beautiful way
  const syntaxHighlight = (codeText: string) => {
    // Escape HTML first
    let escaped = codeText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Keywords (orange/red)
    const keywords = ["class ", "def ", "import ", "from ", "self", "def", "return ", "for ", "in ", "if ", "else:", "print"];
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "g");
      escaped = escaped.replace(
        regex,
        `<span class="text-pink-500 font-bold">${keyword}</span>`
      );
    });

    // Builtins and strings
    // Strings in green (both single and double quotes)
    escaped = escaped.replace(/(["'])(.*?)\1/g, '<span class="text-emerald-400">"$2"</span>');

    // Comments in gray
    escaped = escaped.replace(/(#.*)/g, '<span class="text-slate-500 italic">$1</span>');

    // Numbers in purple
    escaped = escaped.replace(/\b(\d+)\b/g, '<span class="text-purple-400">$1</span>');

    // Functions/methods in blue
    escaped = escaped.replace(/(\w+)(?=\()/g, '<span class="text-blue-400">$1</span>');

    return <code dangerouslySetInnerHTML={{ __html: escaped }} />;
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl border border-slate-800 bg-slate-950/95 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="ml-2 text-xs font-mono text-slate-400 select-none flex items-center gap-1.5">
            <TermIcon size={12} className="text-indigo-400" />
            python3 ~/portfolio/{files[activeTab].name}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/50"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <button
            onClick={handleRunCode}
            disabled={isTyping || isRunning}
            className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold font-mono rounded transition-all ${
              isTyping || isRunning
                ? "bg-indigo-950/40 text-indigo-400 border border-indigo-900/30 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-md shadow-indigo-950/50 hover:shadow-indigo-900/40 cursor-pointer active:scale-95"
            }`}
          >
            {isRunning ? (
              <RefreshCw size={12} className="animate-spin" />
            ) : (
              <Play size={12} fill="currentColor" />
            )}
            {isRunning ? "Executing..." : "Run Code"}
          </button>
        </div>
      </div>

      {/* Editor Tabs & Sidebar */}
      <div className="flex border-b border-slate-900 text-xs font-mono overflow-x-auto scrollbar-none">
        {files.map((file, idx) => (
          <button
            key={file.name}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-1.5 px-4 py-2.5 border-r border-slate-900 transition-colors select-none cursor-pointer ${
              activeTab === idx
                ? "bg-slate-950 text-indigo-400 border-t-2 border-t-indigo-500 font-semibold"
                : "bg-slate-900/40 text-slate-400 hover:bg-slate-900/70 hover:text-slate-200"
            }`}
          >
            <FileCode size={13} className={activeTab === idx ? "text-indigo-400" : "text-slate-500"} />
            {file.name}
          </button>
        ))}
      </div>

      {/* Code Area */}
      <div className="p-5 font-mono text-sm overflow-y-auto h-64 bg-slate-950 text-slate-100 leading-relaxed text-left scrollbar-thin select-text">
        <pre className="whitespace-pre-wrap font-mono">
          {syntaxHighlight(typedCode)}
        </pre>
      </div>

      {/* Terminal Output Console */}
      <div className="border-t border-slate-900 bg-slate-900/60 p-4 font-mono text-xs text-left min-h-[100px] flex flex-col justify-start">
        <div className="flex items-center gap-1.5 text-slate-400 border-b border-slate-800/40 pb-1.5 mb-2">
          <TermIcon size={12} className="text-emerald-400" />
          <span>Python Interpreter Output</span>
        </div>
        
        {!isRunning && !showOutput && (
          <div className="text-slate-500 italic py-2">
            Click &quot;Run Code&quot; at the top right to execute the script and see console output...
          </div>
        )}

        {isRunning && (
          <div className="text-indigo-400 flex items-center gap-2 py-2 animate-pulse">
            <RefreshCw size={14} className="animate-spin" />
            <span>$ python3 {files[activeTab].name}</span>
            <span className="text-slate-500 font-normal">| Initializing virtual environment...</span>
          </div>
        )}

        {showOutput && !isRunning && (
          <div className="animate-fadeIn">
            <div className="text-slate-400 mb-1">$ python3 {files[activeTab].name}</div>
            <pre className="text-emerald-400 font-semibold whitespace-pre-wrap leading-relaxed pl-3 border-l-2 border-emerald-500/30">
              {files[activeTab].output}
            </pre>
            <div className="mt-2 text-slate-500 flex items-center gap-1">
              <Check size={12} className="text-emerald-500" /> Process finished with exit code 0
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
