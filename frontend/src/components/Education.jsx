import React from "react";
import { DarkModeContext } from "../context/DarkModeProvider";

export default function EducationAndCoursework() {
  const { isDarkMode } = React.useContext(DarkModeContext);

  const textColor = isDarkMode ? "text-gray-500" : "text-gray-900";
  const subTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const bgColor = isDarkMode
    ? "bg-gray-900 border-gray-400 hover:bg-gray-100"
    : "bg-white border-gray-400 hover:bg-gray-200";

  return (
    <div className={`max-w-5xl mx-auto px-4 py-12 space-y-16 `}>
      {/* Education Section */}
      <section>
        <h2 className={`text-3xl font-bold text-center mb-10 ${textColor}`}>
          Education
        </h2>
        <div
          className={`flex flex-col sm:flex-row justify-between items-center gap-4 border p-4 sm:p-2 rounded-2xl sm:rounded-full text-center sm:text-left ${bgColor}`}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <img
              src="https://srkrec.edu.in/assets/img/logo.png"
              alt="University Logo"
              className="w-16 h-16 sm:w-12 sm:h-12 rounded-full object-contain"
            />
            <div className="px-2">
              <p className={`font-semibold text-base sm:text-lg ${textColor}`}>
                Bachelors of Technology{" "}
                <span className="block sm:inline text-xs sm:text-sm text-gray-400">
                  - Electrical and Electronics Engineering
                </span>
              </p>
              <p className={`text-xs sm:text-sm mt-1 ${subTextColor}`}>
                Sagi Rama Krishnam Raju Engineering College
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coursework Section */}
      <section>
        <h2 className={`text-3xl font-bold text-center mb-10 ${textColor}`}>
          Coursework
        </h2>
        <div className="space-y-4 border rounded-2xl sm:rounded-full p-3 sm:p-2">
          {/* Course Item */}
          <div
            className={`flex flex-col sm:flex-row rounded-2xl sm:rounded-full justify-between items-center gap-3 sm:gap-4 p-3 sm:p-2 text-center sm:text-left ${bgColor}`}
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full">
              <img
                src="https://assets.upgrad.com/2054/_next/static/media/upGrad-logo.6366986e.svg"
                alt="upGrad"
                className="w-12 h-12 sm:w-10 sm:h-10 object-contain"
              />
              <div className="flex-1">
                <p className={`font-semibold text-base sm:text-lg ${textColor}`}>
                  Full Stack Development (MERN STACK)
                </p>
                <p className={`text-xs sm:text-sm mt-1 ${subTextColor}`}>
                  upGrad
                </p>
              </div>
            </div>
            <p className={`text-xs sm:text-sm font-medium ${subTextColor} mt-1 sm:mt-0`}>
              July 2023 - Jan 2024
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
