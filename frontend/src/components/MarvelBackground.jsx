import React from "react";

export default function MarvelBackground({ activeStone = "reality" }) {
  // Map Infinity Stone to ambient glow colors
  const stoneGlows = {
    reality: "from-red-600/20 via-transparent to-red-950/30", // Reality (Red) - default Marvel Red
    space: "from-cyan-500/20 via-transparent to-blue-950/30",   // Space (Blue) - Stark Arc Cyan
    power: "from-purple-600/20 via-transparent to-purple-950/30", // Power (Purple)
    time: "from-emerald-500/20 via-transparent to-emerald-950/30", // Time (Green)
    mind: "from-amber-400/20 via-transparent to-yellow-950/30",  // Mind (Yellow)
    soul: "from-orange-500/20 via-transparent to-orange-950/30", // Soul (Orange)
  };

  const currentGlow = stoneGlows[activeStone] || stoneGlows.reality;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic ambient energy glow */}
      <div
        className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] bg-gradient-to-br ${currentGlow} transition-colors duration-700 opacity-60 dark:opacity-80`}
      />
      <div
        className={`absolute top-1/2 -right-40 w-[550px] h-[550px] rounded-full blur-[150px] bg-gradient-to-bl ${currentGlow} transition-colors duration-700 opacity-50 dark:opacity-70`}
      />
      <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] rounded-full blur-[160px] bg-red-600/10 dark:bg-red-600/20" />

      {/* Subtle Tactical Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, #ed1d24 1px, transparent 1px), linear-gradient(to bottom, #ed1d24 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Stark HUD dust / spark accents */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-cyan-400/40 animate-ping" />
      <div className="absolute top-2/3 right-12 w-1.5 h-1.5 rounded-full bg-red-500/40 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-amber-400/30 animate-pulse" />
    </div>
  );
}
