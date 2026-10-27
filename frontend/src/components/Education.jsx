import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeProvider";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

export default function Education() {
  const { isDarkMode } = useContext(DarkModeContext);

  const dossiers = [
    {
      badge: "GRADUATION DEGREE",
      title: "Bachelors of Technology (B.Tech)",
      specialization: "Electrical & Electronics Engineering",
      institution: "Sagi Rama Krishnam Raju (SRKR) Engineering College",
      icon: FaGraduationCap,
      period: "ENGINEERING FOUNDATION",
      logo: "https://srkrec.edu.in/assets/img/logo.png",
      status: "VERIFIED DEGREE",
      accent: "cyan",
    },
    {
      badge: "PROFESSIONAL TRAINING",
      title: "Full Stack Software Development (MERN)",
      specialization: "Frontend, Backend & Web Architecture",
      institution: "upGrad Software Academy",
      icon: FaCertificate,
      period: "JULY 2023 - JAN 2024",
      logo: "https://assets.upgrad.com/2054/_next/static/media/upGrad-logo.6366986e.svg",
      status: "MERN CERTIFIED",
      accent: "red",
    },
  ];

  return (
    <section className="relative py-6 sm:py-10 px-4 max-w-5xl mx-auto z-10">
      {/* Marvel Section Header */}
      <div className="text-center mb-3 sm:mb-5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-1.5 rounded-full text-[9px] sm:text-[10px] font-hud tracking-widest bg-red-600/10 dark:bg-red-600/20 border border-red-500/40 text-red-600 dark:text-red-400 uppercase">
          <FaGraduationCap className="text-red-500" /> ACADEMIC ARCHIVES // CHANDU SRIKAKULAM
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold font-marvel tracking-wider text-gray-950 dark:text-white mb-0.5">
          EDUCATION & <span className="text-[#ED1D24] drop-shadow-[0_0_15px_rgba(237,29,36,0.4)]">TRAINING</span>
        </h2>
      </div>

      {/* Cards: Clean 2 Columns with no description points */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {dossiers.map((item, idx) => {
          return (
            <div
              key={idx}
              className="relative rounded-xl p-3.5 sm:p-4 bg-white/75 dark:bg-[#0c101b]/95 border border-gray-200 dark:border-gray-800 backdrop-blur-xl shadow-sm hover:border-red-500/50 transition-all flex flex-col justify-between"
            >
              {/* HUD Corner Brackets */}
              <div className="hud-corner-tl border-red-500/40" />
              <div className="hud-corner-tr border-red-500/40" />
              <div className="hud-corner-bl border-cyan-400/40" />
              <div className="hud-corner-br border-cyan-400/40" />

              <div>
                {/* Top Badge & Status */}
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-hud font-bold tracking-wider uppercase bg-black/80 text-amber-400 border border-amber-500/30">
                    {item.badge}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-hud font-bold uppercase tracking-wider bg-red-600/15 text-red-400 border border-red-600/30">
                    {item.status}
                  </span>
                </div>

                {/* Header Info */}
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-white p-1 border border-gray-300 dark:border-gray-700 flex items-center justify-center shrink-0 shadow-sm">
                    <img
                      src={item.logo}
                      alt={item.institution}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold font-hud tracking-wide text-gray-950 dark:text-white leading-tight truncate">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-semibold text-[#ED1D24] dark:text-red-400 font-hud truncate">
                      {item.specialization}
                    </p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 font-body truncate">
                      {item.institution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-gray-200 dark:border-gray-800 flex justify-end">
                <span className="text-[9px] sm:text-[10px] font-hud font-semibold text-cyan-500 uppercase tracking-wider">
                  {item.period}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
