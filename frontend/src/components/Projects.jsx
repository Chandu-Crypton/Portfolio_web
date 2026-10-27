import React, { useState, useContext } from "react";
import { DarkModeContext } from "../context/DarkModeProvider";
import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaArrowRight } from "react-icons/fa";

export default function Projects() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "socially",
      title: "Socially Web Application",
      category: "fullstack",
      status: "LIVE // FULL-STACK",
      badge: "NEXT.JS + POSTGRESQL",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      description:
        "A modern, Twitter/X-inspired social platform built with Next.js and PostgreSQL for real-time social feeds, user profiles, and seamless cross-device responsiveness.",
      tags: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS", "Node.js", "Express.js"],
      source: "https://github.com/Chandu-Crypton/next-js-socially",
      website: "https://next-js-socially-ashen.vercel.app/",
      accent: "cyan",
    },
    {
      id: "chat",
      title: "Real-Time Chat Application",
      category: "realtime",
      status: "LIVE // WEBSOCKETS",
      badge: "SOCKET.IO + MERN",
      image:
        "https://files.ably.io/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png",
      description:
        "Responsive real-time chat application with instant group messaging, live user presence, and bidirectional WebSockets powered by Socket.io, Node.js, and MongoDB.",
      tags: ["TypeScript", "React.js", "WebSockets", "Vite", "Tailwind CSS", "Node.js", "MongoDB"],
      source: "https://github.com/Chandu-Crypton/Real_chat",
      website: "https://mern-auth-chat.onrender.com/",
      accent: "red",
    },
    {
      id: "globalform",
      title: "GlobalForm: Multi-Currency Intake",
      category: "fullstack",
      status: "LIVE // ADAPTABLE",
      badge: "GLOBAL ADAPTABILITY",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description:
        "A dynamic, responsive user data form engine with global adaptability, featuring automated multi-currency conversion, timezone handling, and MongoDB storage.",
      tags: ["JavaScript", "React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      source: "https://github.com/Chandu-Crypton/Global_Form",
      website: "https://chandusrikakulam-global-formlive.vercel.app/",
      accent: "gold",
    },
    {
      id: "memeverse",
      title: "MemeVerse Media Platform",
      category: "fullstack",
      status: "LIVE // PERSISTENT",
      badge: "MEDIA COMMUNITY",
      image: "https://i.imgflip.com/5hnn44.jpg",
      description:
        "A social platform for uploading, discovering, and curating memes. Features personalized user profiles, persistent local storage, responsive UI, and dark mode toggle.",
      tags: ["JavaScript", "React.js", "Vite", "Tailwind CSS", "Node.js", "MongoDB"],
      source: "https://github.com/Chandu-Crypton/Meme_Verse",
      website: "https://chandu-meme-verse-live.vercel.app/",
      accent: "purple",
    },
    {
      id: "formbuilder",
      title: "Interactive Form Builder",
      category: "frontend",
      status: "LIVE // MODULAR",
      badge: "DYNAMIC SCHEMA",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      description:
        "A customizable form creation tool supporting dynamic text inputs, grid-style questions, multiple-choice validation, and intuitive state management.",
      tags: ["React.js", "Vite", "Tailwind CSS", "State Management"],
      source: "https://github.com/Chandu-Crypton/Form-Builder",
      website: "https://form-builder-pearl.vercel.app/",
      accent: "cyan",
    },
    {
      id: "restaurant",
      title: "Restaurant Web Application",
      category: "fullstack",
      status: "LIVE // FULL-STACK",
      badge: "RESPONSIVE RESTAURANT",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      description:
        "Designed and built a responsive restaurant website featuring interactive menu sections, chef and team profiles, online reservations, and full-stack backend integration.",
      tags: ["JavaScript", "React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
      source: "https://github.com/Chandu-Crypton/Deployment",
      website: "https://new-repo-ebon.vercel.app/",
      accent: "red",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-8 sm:py-14 px-4 max-w-7xl mx-auto z-10">
      {/* Marvel Section Header */}
      <div className="text-center mb-4 sm:mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-2 rounded-full text-[10px] font-hud tracking-widest bg-red-600/10 dark:bg-red-600/20 border border-red-500/40 text-red-600 dark:text-red-400 uppercase">
          <FaFolderOpen className="text-red-500" /> PORTFOLIO MISSIONS // CHANDU SRIKAKULAM
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-marvel tracking-wider text-gray-950 dark:text-white mb-1">
          FEATURED <span className="text-[#ED1D24] drop-shadow-[0_0_15px_rgba(237,29,36,0.4)]">PROJECTS</span> & APPS
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-body">
          Swipe horizontally or filter to explore full-stack apps built with Next.js, React, Node.js, and WebSockets.
        </p>

        {/* Horizontal Scrollable Filter Tabs (No vertical stacking on mobile!) */}
        <div className="flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 justify-start sm:justify-center py-2 px-1 max-w-full">
          {[
            { id: "all", label: "ALL PROJECTS" },
            { id: "fullstack", label: "FULL STACK" },
            { id: "realtime", label: "REAL-TIME CHAT" },
            { id: "frontend", label: "FRONTEND APPS" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`whitespace-nowrap shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-hud font-bold tracking-wider uppercase transition-all border ${
                filter === tab.id
                  ? "bg-[#ED1D24] text-white border-red-500 shadow-[0_0_12px_rgba(237,29,36,0.5)]"
                  : "bg-white/60 dark:bg-black/40 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-800 hover:border-red-500/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="flex items-center justify-between text-[11px] font-hud text-gray-500 dark:text-gray-400 mb-2 px-1 md:hidden">
        <span>SWIPE HORIZONTALLY ➔</span>
        <span className="text-red-500 font-bold">{filteredProjects.length} Projects</span>
      </div>

      {/* Projects Grid: Horizontal Snap Carousel on Mobile, 2/3 Columns on Desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-5 pb-3 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible no-scrollbar">
        {filteredProjects.map((project) => {
          const accentBorder =
            project.accent === "cyan"
              ? "hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]"
              : project.accent === "gold"
              ? "hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]"
              : project.accent === "purple"
              ? "hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]"
              : "hover:border-red-500 group-hover:shadow-[0_0_20px_rgba(237,29,36,0.25)]";

          return (
            <div
              key={project.id}
              className={`w-[82vw] max-w-[320px] shrink-0 snap-center md:w-auto group relative rounded-xl overflow-hidden bg-white/80 dark:bg-[#0c101b]/95 border border-gray-200 dark:border-gray-800 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${accentBorder}`}
            >
              {/* Corner Accents */}
              <div className="hud-corner-tl border-red-500/40 group-hover:border-red-500 transition-colors" />
              <div className="hud-corner-tr border-red-500/40 group-hover:border-red-500 transition-colors" />
              <div className="hud-corner-bl border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />
              <div className="hud-corner-br border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />

              {/* Banner Image */}
              <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c101b] via-[#0c101b]/30 to-transparent" />

                {/* Top Status Badges */}
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[9px] font-hud font-bold tracking-wider uppercase bg-black/80 text-red-400 border border-red-500/40">
                    {project.status}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-hud font-bold tracking-wider uppercase bg-black/80 text-cyan-300 border border-cyan-500/40">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-hud tracking-wide text-gray-950 dark:text-white mb-1.5 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-body mb-3 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Arsenal Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 5).map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[10px] font-hud px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-cyan-400" />
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="text-[10px] font-hud px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500">
                        +{project.tags.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-200 dark:border-gray-800/80">
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-1.5 px-2 rounded-lg text-[11px] font-hud font-bold tracking-wider text-white uppercase bg-gradient-to-r from-red-600 to-[#ED1D24] shadow-sm flex items-center justify-center gap-1 hover:brightness-110 transition-all"
                      >
                        <FaExternalLinkAlt className="text-[9px]" /> DEMO
                      </a>
                    )}
                    {project.source && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-1.5 px-2 rounded-lg text-[11px] font-hud font-bold tracking-wider text-gray-800 dark:text-white uppercase bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 flex items-center justify-center gap-1 transition-all"
                      >
                        <FaGithub /> CODE
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
