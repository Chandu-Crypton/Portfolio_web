import React, { useState, useContext } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiHome, FiCode, FiFileText, FiSun, FiMoon } from "react-icons/fi";
import { HiOutlineCollection } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
// import { DarkModeContext } from './DarkModeProvider';
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
      href: "https://drive.google.com/file/d/1Mkfo5mdS7LQJ4Seo5WhTHDBZT0oSpfXd/view?usp=sharing",
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
      <div className="rounded-full w-[850px] max-lg:w-[800px] max-[400px]:w-[345px] max-[450px]:w-[400px] max-[350px]:w-[330px] max-[321px]:w-[310px] px-2 py-1 bg-white bg-opacity-10 backdrop-blur-lg border dark:border-white/20 flex items-center justify-center dark:shadow-none shadow">
        <div className="flex justify-center px-2 items-center max-sm:gap-4 gap-8 max-[400px]:gap-4 max-[450px]:gap-5 transition-all">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative"
              onClick={() => setActiveLink(link.href)}
            >
              <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                <link.icon
                  className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${
                    activeLink === link.href
                      ? "dark:!text-[#FFC83D] !text-[#cc9e2b]"
                      : ""
                  }`}
                />
              </div>
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {link.label}
              </span>
            </a>
          ))}

          <div className="h-6 w-px bg-black dark:bg-gray-400 mx-1"></div>

          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                <link.icon className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white" />
              </div>
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {link.label}
              </span>
            </a>
          ))}

          <div className="h-6 w-px bg-black dark:bg-gray-400 mx-1"></div>

          <button
            onClick={toggleDarkMode}
            className="hover:px-3 max-sm:hover:px-2 py-2.5 rounded-full transition-all duration-300 cursor-pointer group relative"
          >
            <div className="flex items-center">
              {isDarkMode ? (
                <FiMoon className="w-[18px] h-[18px] max-sm:w-[14px] max-sm:h-[14px]" />
              ) : (
                <FiSun className="w-5 h-5 max-sm:w-[15px] max-sm:h-[15px]" />
              )}
            </div>
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {isDarkMode ? "Dark Mode" : "Light Mode"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
