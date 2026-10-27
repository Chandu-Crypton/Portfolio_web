import React, { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../context/DarkModeProvider";
import { FaRocket, FaFileAlt, FaCode, FaBriefcase } from "react-icons/fa";

export default function Introduction({ onSelectStone, activeStone = "reality" }) {
  const { isDarkMode } = useContext(DarkModeContext);
  const [displayText, setDisplayText] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);

  const heroQuotes = [
    "Full Stack Software Engineer adept in React, Next.js, Node.js & TypeScript.",
    "Passionate about building intuitive, high-velocity web applications.",
    "Specialized in real-time WebSockets, robust APIs, and relational databases.",
  ];

  const fullText = "CHANDU SRIKAKULAM";
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + fullText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [charIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % heroQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const infinityStones = [
    { id: "reality", name: "Reality", color: "#ED1D24", quote: "Transforming design into responsive, performant code." },
    { id: "space", name: "Space", color: "#00F0FF", quote: "Real-time communication with WebSockets & APIs." },
    { id: "power", name: "Power", color: "#A855F7", quote: "High-performance full-stack architectures & databases." },
    { id: "time", name: "Time", color: "#10B981", quote: "Fast page loads, smooth animations & zero lag." },
    { id: "mind", name: "Mind", color: "#FACC15", quote: "TypeScript precision & clean modular component design." },
    { id: "soul", name: "Soul", color: "#F97316", quote: "User-centered UX designed to wow and engage." },
  ];

  const currentStone = infinityStones.find((s) => s.id === activeStone) || infinityStones[0];

  return (
    <section className="relative flex flex-col items-center justify-center pt-20 pb-5 sm:pt-24 sm:pb-8 px-3 sm:px-4 text-center z-10 max-w-4xl mx-auto overflow-hidden">
      {/* Marvel Brand Header & Status Pill */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
        <div className="bg-[#ED1D24] text-white font-black px-2 py-0.5 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-marvel shadow-md shadow-red-600/30 rounded-sm">
          MARVEL
        </div>
        <div className="text-[9px] sm:text-[11px] tracking-wider uppercase font-hud font-semibold text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 px-2 py-0.5 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded">
          DEVELOPER UNIVERSE
        </div>
        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-hud tracking-wider bg-red-500/10 dark:bg-red-500/20 border border-red-500/40 text-red-600 dark:text-red-400">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping inline-block" />
          OPEN FOR HIRE
        </div>
      </div>

      {/* Profile Avatar */}
      <div className="relative mb-2 sm:mb-3 group">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/518/208/original/man-working-with-computer-bright-colorful-vector-illustration.jpg"
          alt="Chandu Srikakulam"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#ED1D24] shadow-[0_0_15px_rgba(237,29,36,0.35)] object-cover bg-gray-900"
        />
        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-black" title="Available for opportunities" />
      </div>

      {/* Main Headline */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-marvel tracking-wider text-gray-950 dark:text-white mb-1.5 leading-tight">
        HI, I'M <span className="text-[#ED1D24] drop-shadow-[0_0_12px_rgba(237,29,36,0.4)]">{displayText}</span>
        <span className="text-cyan-400 animate-pulse">|</span>
      </h1>

      {/* Subtitle Ticker */}
      <div className="h-6 sm:h-7 flex items-center justify-center mb-2 px-2">
        <p className="text-[11px] sm:text-sm font-hud font-semibold text-cyan-600 dark:text-cyan-400 tracking-wide line-clamp-1">
          &lt; {heroQuotes[quoteIndex]} /&gt;
        </p>
      </div>

      {/* Bio Focused 100% on Chandu */}
      <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 max-w-xl mb-3 sm:mb-4 leading-relaxed font-body px-2">
        Full Stack Developer adept in <span className="text-[#ED1D24] dark:text-red-400 font-semibold">Next.js, React, Node.js & AWS</span>. Eager to collaborate with a dynamic engineering team, bringing enthusiasm and precision to craft intuitive web applications.
      </p>

      {/* Horizontal Stats Row - Minimized font sizes so text NEVER cuts off */}
      <div className="grid grid-cols-4 gap-1 sm:gap-2.5 w-full max-w-lg mb-3.5 px-1">
        <div className="p-1.5 sm:p-2 rounded-lg bg-white/70 dark:bg-black/50 border border-gray-200 dark:border-gray-800 backdrop-blur-md text-center">
          <div className="text-xs sm:text-base md:text-lg font-bold font-hud text-[#ED1D24] truncate">6+</div>
          <div className="text-[8px] sm:text-[10px] font-hud text-gray-500 dark:text-gray-400 uppercase tracking-tight truncate">Projects</div>
        </div>
        <div className="p-1.5 sm:p-2 rounded-lg bg-white/70 dark:bg-black/50 border border-gray-200 dark:border-gray-800 backdrop-blur-md text-center">
          <div className="text-xs sm:text-base md:text-lg font-bold font-hud text-cyan-400 truncate">Next.js</div>
          <div className="text-[8px] sm:text-[10px] font-hud text-gray-500 dark:text-gray-400 uppercase tracking-tight truncate">& React</div>
        </div>
        <div className="p-1.5 sm:p-2 rounded-lg bg-white/70 dark:bg-black/50 border border-gray-200 dark:border-gray-800 backdrop-blur-md text-center">
          <div className="text-xs sm:text-base md:text-lg font-bold font-hud text-amber-400 truncate">Socket</div>
          <div className="text-[8px] sm:text-[10px] font-hud text-gray-500 dark:text-gray-400 uppercase tracking-tight truncate">Real-Time</div>
        </div>
        <div className="p-1.5 sm:p-2 rounded-lg bg-white/70 dark:bg-black/50 border border-gray-200 dark:border-gray-800 backdrop-blur-md text-center">
          <div className="text-xs sm:text-base md:text-lg font-bold font-hud text-emerald-400 truncate">Ready</div>
          <div className="text-[8px] sm:text-[10px] font-hud text-gray-500 dark:text-gray-400 uppercase tracking-tight truncate">For Hire</div>
        </div>
      </div>

      {/* Action Buttons: Compact & fully responsive without cutting off */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mb-3 w-full px-1">
        <a
          href="#contact"
          className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-hud font-bold text-[10px] sm:text-xs tracking-wider text-white uppercase bg-gradient-to-r from-red-600 to-[#ED1D24] shadow-sm hover:scale-105 transition-all flex items-center gap-1 shrink-0"
        >
          <FaRocket className="text-yellow-300 text-[10px]" /> Get in Touch
        </a>

        <a
          href="#experience"
          className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-hud font-bold text-[10px] sm:text-xs tracking-wider text-gray-900 dark:text-white uppercase border border-cyan-500/70 bg-cyan-500/10 hover:bg-cyan-500/20 hover:scale-105 transition-all flex items-center gap-1 shrink-0"
        >
          <FaBriefcase className="text-cyan-400 text-[10px]" /> Experience
        </a>

        <a
          href="#projects"
          className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-hud font-bold text-[10px] sm:text-xs tracking-wider text-gray-900 dark:text-white uppercase border border-red-500/50 bg-red-500/10 hover:bg-red-500/20 hover:scale-105 transition-all flex items-center gap-1 shrink-0"
        >
          <FaCode className="text-red-400 text-[10px]" /> Projects
        </a>

        <a
          href="https://drive.google.com/file/d/13TNX8vXgS4Nk9sMam8hp0l1QqdeiLaRM/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg font-hud font-semibold text-[10px] sm:text-xs tracking-wider text-amber-500 dark:text-amber-400 uppercase border border-amber-500/50 bg-amber-500/10 hover:bg-amber-500/20 transition-all flex items-center gap-1 shrink-0"
        >
          <FaFileAlt className="text-[10px]" /> Resume
        </a>
      </div>

      {/* Infinity Stones Aura Interactive Bar: Ultra-compact */}
      <div className="max-w-xs w-full bg-white/40 dark:bg-black/40 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-lg p-1.5">
        <div className="flex justify-around items-center">
          {infinityStones.map((stone) => (
            <button
              key={stone.id}
              onClick={() => onSelectStone && onSelectStone(stone.id)}
              className={`p-1 rounded-full transition-transform hover:scale-125 focus:outline-none ${
                activeStone === stone.id ? "scale-125 ring-2 ring-white" : "opacity-80"
              }`}
              title={stone.name}
            >
              <span
                className="w-3.5 h-3.5 rounded-full block shadow-sm transition-all"
                style={{
                  backgroundColor: stone.color,
                  boxShadow: activeStone === stone.id ? `0 0 8px ${stone.color}` : "none",
                }}
              />
            </button>
          ))}
        </div>
        <div className="mt-1 text-[10px] font-hud text-center italic text-gray-600 dark:text-gray-300 truncate px-1">
          "{currentStone.quote}"
        </div>
      </div>
    </section>
  );
}