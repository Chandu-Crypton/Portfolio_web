import React, { useState, useContext } from "react";
import { DarkModeContext } from "../context/DarkModeProvider";

export default function Contact() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const textColor = isDarkMode ? "text-blue-300" : "text-gray-900";
  const subTextColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white";
  const inputBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-300";

  return (
    <div id="contact" className={`px-4 py-16 max-w-3xl mx-auto`}>
      <h2 className={`text-3xl font-bold text-center mb-6 ${textColor}`}>
        Get in Touch
      </h2>
      <p className={`text-center text-lg mb-6 ${subTextColor}`}>
        Have a Question? Let's Chat!
      </p>

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <a
          href="https://www.linkedin.com/in/chandu-srikakulam-08b08521a/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow"
        >
          <span className="text-xl"></span> Chat on Linked In
        </a>
      </div>

      <form
        action="https://formspree.io/f/mgvarlyp"
        method="POST"
        className="space-y-6"
      >
        <div>
          <label className={`block mb-2 font-medium ${textColor}`}>
            Your Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="johndoe69@xyz.com"
            className={`w-full px-4 py-2 rounded-md border ${borderColor} ${inputBg} ${textColor}`}
          />
        </div>

        <div>
          <label className={`block mb-2 font-medium ${textColor}`}>
            Your message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Type your message here."
            className={`w-full px-4 py-2 rounded-md border ${borderColor} ${inputBg} ${textColor}`}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition"
        >
          Send message
        </button>
      </form>

      <p className={`text-center text-sm mt-10 ${subTextColor}`}>
        Designed and Developed by{" "}
        <a href="/" className="text-blue-500 hover:underline" target="_blank">
          Chandu Srikakulam
        </a>
      </p>
    </div>
  );
}
