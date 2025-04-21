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
          className={`flex flex-col sm:flex-row justify-between items-center gap-4 rounded-full text-center sm:text-left ${bgColor}`}
        >
          <div className="flex items-center gap-4">
            <img
              src="https://srkrec.edu.in/assets/img/logo.png" // Replace with your actual image path
              alt="University Logo"
              className="w-12 h-12 rounded-full object-contain"
            />
            <div>
              <p className={`font-semibold text-lg ${textColor}`}>
                Bachelors of Technology{" "}
                <span className="text-sm text-gray-400">
                  - Electrical and Electronics Engineering
                </span>
              </p>
              <p className={`text-sm ${subTextColor}`}>
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
        <div className="space-y-6">
          {/* 100xDevs */}
          <div
            className={`flex flex-col sm:flex-row rounded-full justify-between items-center gap-4 text-center sm:text-left ${bgColor}`}
          >
            <div className="flex items-center gap-4">
              <img
                src="https://assets.upgrad.com/2054/_next/static/media/upGrad-logo.6366986e.svg"
                alt="100xDevs"
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className={`font-semibold ${textColor}`}>
                  Full Stack Development (MERN STACK){" "}
                  <span className="text-xl"></span>
                </p>
                <p className={`text-sm ${subTextColor}`}>upGrad</p>
              </div>
            </div>
            <p className={`text-sm ${subTextColor}`}>July 2023 - Jan 2024</p>
          </div>
        </div>
      </section>
    </div>
  );
}
