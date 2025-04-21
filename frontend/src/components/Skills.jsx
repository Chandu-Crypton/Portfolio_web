import React from "react";
import { DarkModeContext } from "../context/DarkModeProvider";

export default function Skills() {
  const { isDarkMode } = React.useContext(DarkModeContext);

  const data = [
    "JavaScript",
    "TypeScript",
    "React",
    "Prisma",
    "MongoDB",
    "MySQL",
    "HTML",
    "CSS",
    "Redux",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "WebSocket",
    "Zod",
    "Git",
  ];

  return (
    <div className="w-2/3 max-w-5xl mx-auto mt-10 pb-8 flex flex-col items-center max-lg:w-full max-sm:w-full">
      <h2
        className={`text-3xl font-bold ${
          isDarkMode ? "text-blue" : "text-gray-900"
        }`}
      >
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-2 mt-6 px-4">
        {data.map((skill, idx) => (
          <div
            key={idx}
            className={`text-xs sm:text-sm px-3 py-1  rounded-full border cursor-default transition ${
              isDarkMode
                ? "bg-gray-800 text-gray-200 border-gray-600 hover:bg-gray-700"
                : "bg-gray-100 text-gray-800 border-gray-500 hover:bg-gray-400"
            }`}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
