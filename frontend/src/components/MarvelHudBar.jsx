import React, { useState, useEffect } from "react";
import { FaBolt, FaTerminal } from "react-icons/fa";

export default function MarvelHudBar() {
  const [hudMessageIndex, setHudMessageIndex] = useState(0);

  const hudLogs = [
    "CHANDU SRIKAKULAM: FULL-STACK ENGINEER READY FOR HIRE",
    "CORE STACK: REACT, NEXT.JS, NODE.JS & SQL ARSENAL",
    "RECRUITMENT STATUS: OPEN FOR FULL-STACK & FRONTEND ROLES",
    "FAST CONTACT: CHAT DIRECTLY ON LINKEDIN OR TRANSMIT MESSAGE",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHudMessageIndex((prev) => (prev + 1) % hudLogs.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-3 right-3 sm:right-6 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/85 border border-red-500/50 shadow-[0_0_15px_rgba(237,29,36,0.35)] backdrop-blur-md">
      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
      <span className="text-[10px] font-hud text-cyan-400 font-semibold tracking-wider">
        {hudLogs[hudMessageIndex]}
      </span>
      <span className="text-[9px] font-hud text-amber-400 bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.5 rounded">
        PORTFOLIO v2.0
      </span>
    </div>
  );
}
