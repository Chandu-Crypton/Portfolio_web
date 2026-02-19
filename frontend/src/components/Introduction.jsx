import React, { useState, useEffect, useRef, useContext } from "react";
import { DarkModeContext } from "../context/DarkModeProvider";

export default function Introduction({ text, delay }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text.charAt(index));
        setIndex(index + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    }
  }, [index, delay, text]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center mt-12 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/518/208/original/man-working-with-computer-bright-colorful-vector-illustration.jpg"
        alt="Profile"
        className="w-28 h-28 rounded-full mb-6 shadow-md dark:shadow-gray-800"
      />
      <h1 className="text-[30px] md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
        {displayText}
        <span className="text-gray-900 dark:text-white animate-pulse">|</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mb-6 transition-colors duration-300">
        Aspiring Full Stack Developer adept in ExpressJs, NodeJs, ReactJs ans NextJs.
        Eager to collaborate with a dynamic team, bringing enthusiasm to craft
        intuitive web applications. Excited about the opportunity to contribute
        my skills and collectively innovate.
        <br />
        If you're working on something real, let's talk.
      </p>
      <div className="flex gap-4">
        <a
          href="#contact"
          className="bg-black dark:bg-gray-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}