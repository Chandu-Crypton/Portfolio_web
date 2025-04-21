import React from "react";
import { DarkModeContext } from "../context/DarkModeProvider";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const { isDarkMode } = React.useContext(DarkModeContext);

  const projects = [
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
        "Search",
        "Transformer",
        "Secretary",
        "Managing",
        "Receivables",
      ],
      tagsRow2: ["Subscribe", "Submit/Get CSB", "Submit/Get CSB"],
      source: "https://github.com/your-username/ghostgram",
      website: "https://ghostgram.vercel.app",
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
      website: "https://form-builder-pearl.vercel.app/",
    },
    {
      image:
        "https://tse3.mm.bing.net/th?id=OIP._D4-DW9pboUOd10yvQFMcQHaH6&pid=Api&P=0&h=180",
      title: "Task Manager Application ",
      description:
        "A responsive front-end app for managing tasks with features like title, description, priority, due date, and options to edit or delete tasks.",
      tagsRow1: ["Java Script", "React Js", "Bootstrap", "React Toolkit"],
      tagsRow2: [""],
      source: "https://github.com/Chandu-Crypton/Task_Manager",
      website: "currently not available",
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
              className="w-12 h-12 rounded-full object-contain"
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
