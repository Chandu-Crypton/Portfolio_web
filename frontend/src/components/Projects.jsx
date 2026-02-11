import React from "react";
import { DarkModeContext } from "../context/DarkModeProvider";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const { isDarkMode } = React.useContext(DarkModeContext);

  const projects = [
     {
      image:
        "data:image/jpeg;base64,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",
      title: "Socially Web Application",
      description:
        "Socially — a modern, Twitter-inspired social platform built with a powerful full-stack architecture for real-time interaction and seamless user experience.",
      tagsRow1: [
        "Type Script",
        "Next Js",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      tagsRow2: ["Node Js", "Express Js"],
      source: "https://github.com/Chandu-Crypton/next-js-socially",
      website: "https://next-js-socially-ashen.vercel.app/",
    },
    {
      image:
        "https://files.ably.io/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png",
      title: "Real-Time Chat Application",
      description:
        "Built a responsive chat app with group chat rooms and instant messaging using Socket.io. Implemented seamless cross-device UI with Tailwind CSS.",
      tagsRow1: [
        "Type Script",
        "React Js",
        "Vite",
        "Tailwind CSS",
        "Web Sockets",
      ],
      tagsRow2: ["Node Js", "Express Js", "Mongo DB"],
      source: "https://github.com/Chandu-Crypton/Real_chat",
      website: "https://mern-auth-chat.onrender.com/",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/005/419/001/original/illustration-of-customer-data-user-data-customer-analytic-user-personal-data-costumer-statistic-can-be-used-for-web-landing-page-social-media-mobile-apps-animation-etc-vector.jpg",
      title: "GlobalForm: Multi-functional User Data Form",
      description:
        "GlobalForm – A dynamic, responsive user data form with global adaptability. Key features include multi-language support, multi-currency, timezone handling, and user data management.",
      tagsRow1: ["Java Script", "React Js", "Vite", "Tailwind CSS", "Node Js"],
      tagsRow2: ["Express Js", "Mongo DB"],
      source: "https://github.com/Chandu-Crypton/Global_Form",
      website: "https://chandusrikakulam-global-formlive.vercel.app/",
    },
    {
      image: "https://i.imgflip.com/5hnn44.jpg",
      title: "Meme Sharing and Profile Management Application",
      description:
        "MemeVerse – A fun social platform for uploading, viewing, and managing memes. Users can personalize their profile with bios and profile pictures, and view their uploaded memes. Features include local storage persistence, responsive UI, and a dark mode toggle for enhanced experience.",
      tagsRow1: ["Java Script", "React Js", "Vite", "Tailwind CSS"],
      tagsRow2: ["Node Js", "Express Js", "Mongo DB"],
      source: "https://github.com/Chandu-Crypton/Meme_Verse",
      website: "https://chandu-meme-verse-live.vercel.app/",
    },
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.HlpBrsTAM_74bz4TEjyQRwHaEo&pid=Api&P=0&h=180",
      title: "Form Builder",
      description:
        " A customizable form creation tool supporting text inputs, grid-style questions, and multiple-choice fields.",
      tagsRow1: [
        "React js",
        "Vite",
        "Tailwind CSS",
      ],
      
      source: "https://github.com/Chandu-Crypton/Form-Builder",
      website: "https://form-builder-pearl.vercel.app/",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.Ds9CdC3CtvfRoaDqevltMwHaGu&pid=Api&P=0&h=180",
      title: "Restaurant Website",
      description:
        "Designed and built a responsive website with sections like Home, About, Qualities, Team, and Menu.",
      tagsRow1: ["Java Script", "React Js", "Bootstrap", "Vite", "Node Js"],
      tagsRow2: ["Express Js", "Mongo DB"],
      source: "https://github.com/Chandu-Crypton/Deployment",
      website: "https://new-repo-ebon.vercel.app/"
    },
   
  ];

  return (
    <div id="projects" className="pt-28 mb-12">
      <p
        className={`text-3xl font-bold flex justify-center mb-8 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Projects
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg w-full ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } border ${isDarkMode ? "border-gray-700" : "border-gray-400"}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-12 h-12 rounded-full object-fit"
            />

            <h3
              className={`text-lg font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`text-sm mb-3 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1 mb-1">
              {project.tagsRow1.map((tag, i) => (
                <span
                  key={`row1-${i}`}
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isDarkMode
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.tagsRow2?.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-2">
                {project.tagsRow2.map((tag, i) => (
                  <span
                    key={`row2-${i}`}
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      isDarkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {(project.source || project.website) && (
              <div className="flex gap-4 mt-4">
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 bg-gray-100 border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-200 transition"
                  >
                    <FaGithub /> Source
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 bg-gray-100 border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-200 transition"
                  >
                    <FaExternalLinkAlt /> Website
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
