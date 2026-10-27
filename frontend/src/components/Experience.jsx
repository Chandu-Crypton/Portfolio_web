import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeProvider";
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCheck } from "react-icons/fa";

export default function Experience() {
  const { isDarkMode } = useContext(DarkModeContext);

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Smitten by Sports Technologies Private Limited",
      period: "Apr 2026 – Present",
      status: "CURRENT ROLE",
      accent: "cyan",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      points: [
        "Developed and maintained features using Next.js and Tailwind CSS, delivering responsive and performant user interfaces.",
        "Deployed and managed applications on AWS, ensuring scalability, reliability, and efficient resource usage.",
        "Collaborated with cross-functional teams to design and ship new features, following agile development practices.",
      ],
      skills: ["Next.js", "Tailwind CSS", "AWS", "Agile Development"],
    },
    {
      title: "Full Stack Developer",
      company: "FTFL Technology Private Limited",
      period: "June 2025 – April 2026",
      status: "FULL-TIME",
      accent: "red",
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/30",
      points: [
        "Developed and maintained features for an E-commerce website, ensuring scalable and user-friendly functionality.",
        "Built the Academy section to host recorded webinars and manage live webinars, improving customer engagement and learning resources.",
        "Implemented Policy sections including Refund, Privacy, and Terms & Conditions, ensuring compliance and clear communication.",
        "Built a comprehensive help & support system with email integration, enabling automated responses and improving customer support efficiency by 40%.",
        "Collaborated with the team on debugging, testing, and deploying features, following version control best practices with Git.",
      ],
      skills: ["E-Commerce", "Webinars", "Email Automation (+40%)", "Git"],
    },
  ];

  return (
    <section id="experience" className="relative py-8 sm:py-14 px-4 max-w-6xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center mb-4 sm:mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-2 rounded-full text-[10px] font-hud tracking-widest bg-red-600/10 dark:bg-red-600/20 border border-red-500/40 text-red-600 dark:text-red-400 uppercase">
          <FaBriefcase className="text-red-500" /> CAREER MILESTONES // CHANDU SRIKAKULAM
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-marvel tracking-wider text-gray-950 dark:text-white mb-1">
          WORK <span className="text-[#ED1D24] drop-shadow-[0_0_15px_rgba(237,29,36,0.4)]">EXPERIENCE</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-body">
          Proven professional engineering track record developing production applications with Next.js, AWS, and modern stacks.
        </p>
      </div>

      {/* Experience Cards - Simple & Effective Layout */}
      <div className="space-y-4 sm:space-y-5">
        {experiences.map((exp, idx) => {
          const isCyan = exp.accent === "cyan";

          return (
            <div
              key={idx}
              className={`relative rounded-xl p-4 sm:p-6 bg-white/80 dark:bg-[#0c101b]/95 border border-gray-200 dark:border-gray-800 backdrop-blur-xl shadow-md transition-all hover:border-${isCyan ? "cyan-500" : "red-500"}/60`}
            >
              {/* HUD Corner Accents */}
              <div className="hud-corner-tl border-red-500/40" />
              <div className="hud-corner-tr border-red-500/40" />
              <div className="hud-corner-bl border-cyan-400/40" />
              <div className="hud-corner-br border-cyan-400/40" />

              {/* Card Header: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-gray-200 dark:border-gray-800">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-xl font-bold font-hud tracking-wide text-gray-950 dark:text-white">
                      {exp.title}
                    </h3>
                    <span className={`px-2 py-0.5 rounded text-[9px] font-hud font-bold uppercase tracking-wider border ${exp.badgeColor}`}>
                      {exp.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#ED1D24] dark:text-red-400 font-hud mt-0.5 flex items-center gap-1.5">
                    <FaBuilding className="text-[11px]" />
                    <span>{exp.company}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-hud font-medium text-cyan-600 dark:text-cyan-400">
                  <FaCalendarAlt className="text-[11px]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-body">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="text-[#ED1D24] dark:text-cyan-400 mt-1 shrink-0 text-xs">▶</span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100 dark:border-gray-800/60">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] sm:text-[11px] font-hud px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
