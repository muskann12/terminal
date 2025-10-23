'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Key, 
  Lock, 
  Scan, 
  BookOpen, 
  X 
} from 'lucide-react';

// --- Configuration Data ---
const TOOLS_DATA = [
  { icon: 'key', name: 'SHADOWBREACH', desc: 'APT Emulation Suite', details: 'Automate complex, multi-stage attack scenarios for comprehensive testing.' },
  { icon: 'lock', name: 'CRYPTEX', desc: 'Secure Data Protocol', details: 'Ensure integrity and zero-knowledge transfer across all critical assets.' },
  { icon: 'scan', name: 'PULSAR SCAN', desc: 'Vulnerability Detection', details: 'Pinpoint and prioritize systemic weaknesses using proprietary scanning logic.' },
];

const BLOG_PREVIEWS = [
  { title: 'Exploiting API Gateways with Rate Limit Bypass', date: 'Oct 23, 2025', category: 'Exploits' },
  { title: 'The Future of Zero-Trust: A 2026 Forecast', date: 'Oct 15, 2025', category: 'Strategy' },
  { title: 'Deep Dive: Cryptographic Flaws in WebAssembly', date: 'Oct 01, 2025', category: 'Analysis' },
];

// Icon component with Lucide icons
const Icon = ({ name, className = 'w-6 h-6' }: { name: string, className?: string }) => {
  const icons: Record<string, JSX.Element> = {
    key: <Key className={className} />,
    lock: <Lock className={className} />,
    scan: <Scan className={className} />,
    book: <BookOpen className={className} />,
    close: <X className={className} />,
  };
  return icons[name] || <div className={className}></div>;
};

// Simplified, bold Logo
const WolfLogo = ({ className = 'w-32 h-32' }: { className?: string }) => (
  <svg
    className={`text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.9)] ${className}`}
    viewBox="0 0 200 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="url(#wolfGradient)" d="M100 15l-45 45h-10l-25 65h160l-25-65h-10l-45-45z" />
    <defs>
      <linearGradient id="wolfGradient" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" style={{stopColor:"rgb(252,165,165)", stopOpacity:1}} />
        <stop offset="100%" style={{stopColor:"rgb(220,38,38)", stopOpacity:0.9}} />
      </linearGradient>
    </defs>
  </svg>
);

// Live Audit Feed Modal with Nmap Simulation
const LiveAuditFeedModal = ({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) => {
  if (!isVisible) return null;

  const terminalRef = useRef<HTMLDivElement>(null);
  const [visibleLines, setVisibleLines] = useState(0);

  const simulationScript = [
    { text: '$ user@wolfguider:~$ sudo nmap -sC -sV 192.168.1.0/24 -p 1-1024', type: 'command' },
    { text: '[AUDIT] Target: Dept-Audit-Server-01 (192.168.1.10)', type: 'info' },
    { text: '[NMAP] Starting Nmap 7.93 ( Ethical Security Audit ) at 2025-10-23 11:19 PKT', type: 'info' },
    { text: 'Scanning network segment 192.168.1.0/24 for Dept Vulnerabilities...', type: 'info' },
    { text: 'Nmap scan report for 192.168.1.10', type: 'info' },
    { text: 'Host is up (0.005s latency).', type: 'success' },
    { text: '--------------------------------------------------------------------------------', type: 'separator' },
    { text: 'PORT STATE SERVICE VERSION', type: 'header' },
    { text: '22/tcp open ssh OpenSSH 8.9 (Ubuntu)', type: 'success' },
    { text: '80/tcp open http Apache httpd 2.4.52 ((Ubuntu))', type: 'alert' },
    { text: '443/tcp open ssl/http Apache httpd 2.4.52 ((Ubuntu))', type: 'alert' },
    { text: '3306/tcp closed mysql', type: 'info' },
    { text: '--------------------------------------------------------------------------------', type: 'separator' },
    { text: 'Service detection performed. Vulnerability identified on HTTP/443.', type: 'info' },
    { text: 'Dept-Audit-01: Found 2 open HTTP ports. Immediate patch required.', type: 'alert' },
    { text: '$ user@wolfguider:~$ AUDIT COMPLETE. GENERATING SHADOWBREACH REPORT.', type: 'command' },
  ];
  
  const getLineStyle = (type: string) => {
    switch(type) {
      case 'command': return 'text-red-400 font-bold';
      case 'info': return 'text-gray-400';
      case 'success': return 'text-green-500';
      case 'alert': return 'text-yellow-400 font-bold';
      case 'header': return 'text-red-500 font-bold border-b border-red-900/50 pb-1';
      case 'separator': return 'text-gray-600';
      default: return 'text-white';
    }
  };

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev < simulationScript.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 700);

    return () => clearInterval(interval);
  }, [isVisible]); 
  
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/80">
      <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl h-[80vh] bg-gray-950 border-2 border-red-700/70 shadow-2xl rounded-xl overflow-hidden terminal-shadow transform transition-all duration-500 neon-border">
        <div className="flex justify-between items-center p-3 bg-red-900/40 border-b border-red-700">
          <span className="text-sm font-mono text-red-100 font-bold flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-ping"></span>
            LIVE AUDIT FEED &gt; Dept. Network Scan
          </span>
          <button onClick={onClose} className="text-red-300 hover:text-white transition-colors p-1 rounded-md hover:bg-red-800/50" aria-label="Close demo">
            <Icon name="close" />
          </button>
        </div>
        
        <div 
          ref={terminalRef}
          className="p-4 h-[calc(100%-47px)] bg-black font-mono text-xs sm:text-sm overflow-y-scroll leading-relaxed tracking-tighter custom-scrollbar"
        >
          {simulationScript.slice(0, visibleLines).map((line, index) => (
            <p key={index} className={`${getLineStyle(line.type)} py-0.5 transition-opacity duration-300 opacity-100`}>
              {line.text}
            </p>
          ))}
          
          {visibleLines < simulationScript.length && (
            <p className="text-gray-500 font-bold mt-2 animate-pulse">
              [RUNNING...]
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// Left Sidebar Navigation
const AppSidebar = ({ active, setActive }: { active: string, setActive: (value: string) => void }) => (
  <div className="fixed left-0 top-0 h-full w-16 bg-[#000000] border-r border-red-900/50 hidden lg:flex flex-col items-center pt-24 space-y-10 z-30 shadow-2xl shadow-black/80">
    {['TOOLS', 'BLOG', 'LOGIN', 'SUPPORT'].map((item) => (
      <div 
        key={item}
        className={`relative p-2 cursor-pointer transition-all duration-300 group ${
          active === item ? 'text-red-500 border-l-4 border-red-500' : 'text-gray-500 hover:text-red-300'
        }`}
        onClick={() => setActive(item)}
        title={item}
      >
        <span className="text-2xl group-hover:scale-110 transition-transform duration-500">
          {item === 'TOOLS' && '🛠️'}
          {item === 'BLOG' && <Icon name="book" className="w-6 h-6" />}
          {item === 'LOGIN' && '🔑'}
          {item === 'SUPPORT' && '🆘'}
        </span>
        <div className={`absolute -left-0 w-1 h-full rounded-r-md bg-red-600 opacity-0 transition-opacity duration-300 ${
          active === item ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>
    ))}
  </div>
);

// --- Main Application Component ---
const WolfGuider = () => {
  const [activeSidebar, setActiveSidebar] = useState('TOOLS');
  const [showVideoModal, setShowVideoModal] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("2 minutes elapsed. Showing Live Audit Feed.");
      setShowVideoModal(true);
    }, 120000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] font-inter text-white overflow-x-hidden relative">
      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Space+Mono:wght@400;700&display=swap');
        
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace; }

        @keyframes border-pulse {
          0% { box-shadow: 0 0 10px rgba(239, 68, 68, 0.4); border-color: rgba(239, 68, 68, 0.6); }
          50% { box-shadow: 0 0 25px rgba(239, 68, 68, 0.8); border-color: rgba(239, 68, 68, 1); }
          100% { box-shadow: 0 0 10px rgba(239, 68, 68, 0.4); border-color: rgba(239, 68, 68, 0.6); }
        }
        .neon-border {
          animation: border-pulse 4s infinite ease-in-out;
        }

        .scanner-button {
          position: relative;
          overflow: hidden;
          transition: all 0.5s ease-in-out;
        }
        .scanner-button:hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: scan 1.5s infinite;
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .hero-background {
          background: radial-gradient(circle at center, #1a0000 0%, #000000 100%);
          border-bottom: 3px solid rgba(239, 68, 68, 0.4);
          position: relative;
          perspective: 1000px;
        }
        .hero-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(to right, rgba(255, 0, 0, 0.1) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: grid-scroll 90s linear infinite;
          z-index: 5;
          opacity: 0.2;
        }
        @keyframes grid-scroll {
          0% { background-position: 0 0; }
          100% { background-position: -800px -800px; }
        }
        
        .terminal-shadow {
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.8), 0 0 5px rgba(0, 0, 0, 0.8);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #111;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #dc2626;
          border-radius: 20px;
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-[#000000]/95 backdrop-blur-sm border-b border-red-900/50 z-40 lg:pl-16 shadow-lg shadow-black/70">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-extrabold text-red-500 font-mono tracking-wide">WOLFGUIDER</h1>
          <div className="flex items-center space-x-6 text-sm font-semibold text-gray-400 font-mono">
            <a href="#tools" className="hover:text-red-500 transition-colors duration-300 hidden sm:block">TOOLS</a>
            <a href="#blog" className="hover:text-red-500 transition-colors duration-300 hidden sm:block">INSIGHTS</a>
            <a href="#" className="hover:text-red-500 transition-colors duration-300 hidden sm:block">PRICING</a>
            <button className="px-4 py-1.5 text-sm font-bold rounded-lg bg-red-700 hover:bg-red-600 transition-all shadow-md shadow-red-900/50">ACCESS</button>
          </div>
          <button className="lg:hidden text-gray-400 hover:text-red-500 transition-colors duration-300">☰</button>
        </div>
      </nav>

      {/* Sidebar */}
      <AppSidebar 
        active={activeSidebar} 
        setActive={setActiveSidebar} 
      />

      {/* Main Content */}
      <main className="lg:pl-16 pt-16">
        <div className="hero-background min-h-[90vh] flex items-center justify-center p-4 relative">
          <div className="z-10 w-full max-w-7xl py-20 px-4">
            <div className="text-center p-8 sm:p-12 lg:p-16 rounded-3xl lg:w-4/5 max-w-5xl mx-auto transition-all duration-1000 bg-black/50 border-2 border-red-700 neon-border">
              <div className="flex justify-center items-center space-x-4 mb-4">
                <span className="text-lg font-mono text-red-500 tracking-widest"> &lt; INITIATE &gt; </span>
                <WolfLogo className="w-16 h-12 sm:w-20 sm:h-16 transition-all duration-700 hover:scale-110" />
                <span className="text-lg font-mono text-red-500 tracking-widest"> &lt; SEQUENCE &gt; </span>
              </div>
              
              <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tighter leading-none text-red-100 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                WOLF<span className="text-red-600">GUIDER</span>
              </h1>
              <p className="text-xl sm:text-3xl font-mono text-red-400 mt-4 tracking-widest drop-shadow-md">
                CYBER ELITE. SYSTEM DOMAIN.
              </p>

              <h2 className="text-2xl sm:text-4xl font-light leading-snug mt-12 mb-12 uppercase text-gray-300">
                The <span className="font-extrabold text-red-500">ZENITH</span> of Ethical Hacking Tools.<br/>
                <span className="text-gray-100">Zero-Compromise Security.</span>
              </h2>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="scanner-button px-10 py-4 w-full sm:w-auto text-xl font-bold rounded-xl bg-red-700 hover:bg-red-600 transition-all duration-500 ease-in-out shadow-2xl shadow-red-900/70 transform hover:scale-[1.05] border-2 border-red-700"
                >
                  VIEW LIVE EXPLOIT SIMULATION
                </button>
                <a
                  href="#blog"
                  className="px-10 py-4 w-full sm:w-auto text-xl font-semibold rounded-xl bg-gray-900 hover:bg-gray-800 transition-colors duration-500 ease-in-out border-2 border-gray-800 text-gray-300 transform hover:scale-[1.02]"
                >
                  READ INSIGHTS
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <section id="tools" className="py-28 bg-[#0a0a0d] border-t border-red-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-center mb-20 uppercase tracking-widest text-gray-200">
              ZENITH <span className="text-red-500">TOOLCHAIN</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {TOOLS_DATA.map((tool, index) => (
                <div 
                  key={index} 
                  className="bg-[#000000] p-8 rounded-xl border border-gray-800 shadow-2xl shadow-black/70 transition-all duration-700 ease-out transform hover:border-red-600 hover:shadow-red-900/70 hover:-translate-y-3 group"
                >
                  <div className="flex items-start mb-6 border-b border-red-900/50 pb-4">
                    <div className="p-4 bg-red-900/30 rounded-xl text-red-500 mr-4 border-2 border-red-800 transition-all duration-700 group-hover:bg-red-900/50 group-hover:scale-[1.1] group-hover:shadow-lg group-hover:shadow-red-900/50">
                      <Icon name={tool.icon} className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{tool.name}</h4>
                      <p className="text-red-400 text-sm font-mono">{tool.desc}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{tool.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Live Audit Modal */}
      <LiveAuditFeedModal 
        isVisible={showVideoModal} 
        onClose={() => setShowVideoModal(false)} 
      />
    </div>
  );
};

export default WolfGuider;