import React, { useState, useContext } from "react";
import { DarkModeContext } from "../context/DarkModeProvider";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";
import { FaBolt, FaServer, FaDatabase, FaTools, FaCheckCircle } from "react-icons/fa";

export default function Skills() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    {
      id: "frontend",
      title: "FRONTEND ARCHITECTURE",
      subtitle: "Reactive Interfaces & UI Systems",
      badge: "REACT & NEXT.JS",
      icon: FaBolt,
      accentColor: "#00F0FF",
      borderGlow: "hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]",
      textColor: "text-cyan-400",
      skills: [
        { name: "React.js", icon: SiReact, level: "Advanced", color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, level: "Advanced", color: "#FFFFFF" },
        { name: "TypeScript", icon: SiTypescript, level: "Proficient", color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, level: "Advanced", color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced", color: "#06B6D4" },
        { name: "Redux", icon: SiRedux, level: "State Mgmt", color: "#764ABC" },
        { name: "HTML5", icon: SiHtml5, level: "Semantic", color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, level: "Responsive", color: "#1572B6" },
        { name: "Bootstrap", icon: SiBootstrap, level: "Grid Systems", color: "#7952B3" },
      ],
    },
    {
      id: "backend",
      title: "BACKEND & REAL-TIME",
      subtitle: "APIs, Servers & WebSockets",
      badge: "NODE.JS & WEBSOCKETS",
      icon: FaServer,
      accentColor: "#ED1D24",
      borderGlow: "hover:border-red-500 group-hover:shadow-[0_0_20px_rgba(237,29,36,0.2)]",
      textColor: "text-red-500",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: "Runtime", color: "#5FA04E" },
        { name: "Express.js", icon: SiExpress, level: "REST APIs", color: "#AAAAAA" },
        { name: "WebSockets", icon: SiSocketdotio, level: "Real-Time", color: "#00F0FF" },
        { name: "REST APIs", icon: FaBolt, level: "Architecture", color: "#F59E0B" },
        { name: "Zod Schema", icon: FaCheckCircle, level: "Validation", color: "#3B82F6" },
      ],
    },
    {
      id: "database",
      title: "DATABASES & ORM",
      subtitle: "Relational & Document Storage",
      badge: "POSTGRESQL & MONGODB",
      icon: FaDatabase,
      accentColor: "#A855F7",
      borderGlow: "hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
      textColor: "text-purple-400",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, level: "Relational", color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, level: "NoSQL", color: "#47A248" },
        { name: "MySQL", icon: SiMysql, level: "SQL Queries", color: "#4479A1" },
        { name: "Prisma ORM", icon: SiPrisma, level: "Type-Safe DB", color: "#2D3748" },
      ],
    },
    {
      id: "tools",
      title: "DEV TOOLS & WORKFLOW",
      subtitle: "Version Control & Fast Bundling",
      badge: "GIT & VITE",
      icon: FaTools,
      accentColor: "#F59E0B",
      borderGlow: "hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
      textColor: "text-amber-400",
      skills: [
        { name: "Git", icon: SiGit, level: "Version Control", color: "#F05032" },
        { name: "GitHub", icon: SiGithub, level: "Workflows", color: "#FFFFFF" },
        { name: "Vite", icon: SiVite, level: "Fast Bundler", color: "#646CFF" },
      ],
    },
  ];

  const displayedCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section className="relative py-8 sm:py-14 px-4 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-2 rounded-full text-[10px] font-hud tracking-widest bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 uppercase">
          <FaBolt className="text-cyan-500" /> TECH STACK & CAPABILITIES
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-marvel tracking-wider text-gray-950 dark:text-white mb-1">
          SKILLS & <span className="text-[#ED1D24] drop-shadow-[0_0_15px_rgba(237,29,36,0.4)]">TECH ARSENAL</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-body">
          Select a category or swipe horizontally to review Chandu's full-stack toolkit.
        </p>

        {/* Horizontal Category Switcher (No vertical stacking on mobile!) */}
        <div className="flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 justify-start sm:justify-center py-2 px-1 max-w-full">
          {[
            { id: "all", label: "ALL SKILLS" },
            { id: "frontend", label: "FRONTEND" },
            { id: "backend", label: "BACKEND & SOCKETS" },
            { id: "database", label: "DATABASES" },
            { id: "tools", label: "DEV TOOLS" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-hud font-bold tracking-wider uppercase transition-all border ${
                activeCategory === cat.id
                  ? "bg-[#ED1D24] text-white border-red-500 shadow-[0_0_12px_rgba(237,29,36,0.5)]"
                  : "bg-white/60 dark:bg-black/40 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-800 hover:border-red-500/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      {activeCategory === "all" && (
        <div className="flex items-center justify-between text-[11px] font-hud text-gray-500 dark:text-gray-400 mb-2 px-1 md:hidden">
          <span>SWIPE HORIZONTALLY ➔</span>
          <span className="text-cyan-400 font-bold">{categories.length} Categories</span>
        </div>
      )}

      {/* Categories: Horizontal Swipe Carousel on Mobile, 2 Columns on Desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-5 pb-3 md:grid md:grid-cols-2 md:overflow-visible no-scrollbar">
        {displayedCategories.map((cat, idx) => {
          const IconComponent = cat.icon;
          return (
            <div
              key={idx}
              className={`w-[82vw] max-w-[320px] shrink-0 snap-center md:w-auto group relative rounded-xl p-4 sm:p-5 bg-white/75 dark:bg-[#0c101b]/95 border border-gray-200 dark:border-gray-800 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${cat.borderGlow}`}
            >
              {/* Corner Accents */}
              <div className="hud-corner-tl border-gray-300 dark:border-gray-700 group-hover:border-red-500 transition-colors" />
              <div className="hud-corner-tr border-gray-300 dark:border-gray-700 group-hover:border-red-500 transition-colors" />
              <div className="hud-corner-bl border-gray-300 dark:border-gray-700 group-hover:border-cyan-400 transition-colors" />
              <div className="hud-corner-br border-gray-300 dark:border-gray-700 group-hover:border-cyan-400 transition-colors" />

              {/* Category Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center border shadow-sm"
                    style={{
                      backgroundColor: `${cat.accentColor}15`,
                      borderColor: `${cat.accentColor}40`,
                    }}
                  >
                    <IconComponent className="text-base" style={{ color: cat.accentColor }} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-hud tracking-wide text-gray-950 dark:text-white">
                      {cat.title}
                    </h3>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 font-body">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[9px] font-hud font-bold tracking-wider uppercase bg-black/80 text-gray-300 border border-gray-700">
                  {cat.badge}
                </span>
              </div>

              {/* Skills Arsenal Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {cat.skills.map((skill, sIdx) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={sIdx}
                      className="p-2 rounded-lg bg-gray-50/80 dark:bg-black/40 border border-gray-200 dark:border-gray-800/80 hover:border-cyan-500/50 transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <SkillIcon className="text-sm shrink-0" style={{ color: skill.color }} />
                        <span className="text-[11px] font-semibold font-hud text-gray-900 dark:text-white truncate">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-hud text-gray-500 dark:text-gray-400 uppercase tracking-tight">
                          {skill.level}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
