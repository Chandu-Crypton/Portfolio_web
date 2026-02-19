import React, { useState, useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiHome, FiCode, FiFileText, FiSun, FiMoon } from "react-icons/fi";
import { DarkModeContext } from "../context/DarkModeProvider";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const links = [
    { href: "/", icon: FiHome, label: "Home" },
    { href: "#projects", icon: FiCode, label: "Projects" },
  ];

  const socialLinks = [
    {
      href: "https://drive.google.com/file/d/1tiER10YvgXygfmi_8X41UQv6JXCaFuv4/view?usp=sharing",
      icon: FiFileText,
      label: "Resume",
    },
    {
      href: "https://github.com/Chandu-Crypton?tab=repositories",
      icon: FaGithub,
      label: "Github",
    },
    {
      href: "https://www.linkedin.com/in/chandu-srikakulam-08b08521a/",
      icon: FaLinkedin,
      label: "Linkedin",
    },
  ];

  return (
    <nav className="w-full py-6 flex justify-center fixed top-0 z-50">
    <div className="rounded-full w-[90%] sm:w-[80%] md:w-[700px] lg:w-[800px] xl:w-[850px] px-2 py-1 bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-white/20 flex items-center justify-center shadow-lg dark:shadow-none mx-auto">
  <div className="flex justify-center px-2 items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 transition-all">
          {/* Navigation Links */}
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative"
              onClick={() => setActiveLink(link.href)}
            >
              <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                <link.icon
                  className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] transition-colors duration-200 ${
                    activeLink === link.href
                      ? "text-[#cc9e2b] dark:text-[#FFC83D]" // Active state - gold/yellow
                      : "text-gray-700 dark:text-gray-200" // Inactive state - visible in both modes
                  }`}
                />
              </div>
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.label}
              </span>
            </a>
          ))}

          {/* Divider */}
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-1"></div>

          {/* Social Links */}
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                <link.icon className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-gray-700 dark:text-gray-200 transition-colors duration-200" />
              </div>
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.label}
              </span>
            </a>
          ))}

          {/* Divider */}
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-1"></div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="hover:px-3 max-sm:hover:px-2 py-2.5 rounded-full transition-all duration-300 cursor-pointer group relative"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <div className="flex items-center">
              {isDarkMode ? (
                <FiMoon className="w-[18px] h-[18px] max-sm:w-[14px] max-sm:h-[14px] text-gray-700 dark:text-gray-200 transition-colors duration-200" />
              ) : (
                <FiSun className="w-5 h-5 max-sm:w-[15px] max-sm:h-[15px] text-gray-700 dark:text-gray-200 transition-colors duration-200" />
              )}
            </div>
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {isDarkMode ? "Dark Mode" : "Light Mode"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;