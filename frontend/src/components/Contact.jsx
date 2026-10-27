import React, { useState, useContext } from "react";
import { DarkModeContext } from "../context/DarkModeProvider";
import { FaLinkedin, FaPaperPlane, FaRocket, FaTerminal, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section id="contact" className="relative py-8 sm:py-14 px-4 max-w-3xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center mb-4 sm:mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-2 rounded-full text-[10px] font-hud tracking-widest bg-red-600/10 dark:bg-red-600/20 border border-red-500/40 text-red-600 dark:text-red-400 uppercase">
          <FaEnvelope className="text-red-500" /> DIRECT COMMS // GET IN TOUCH
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-marvel tracking-wider text-gray-950 dark:text-white mb-1">
          LET'S CONNECT & <span className="text-[#ED1D24] drop-shadow-[0_0_15px_rgba(237,29,36,0.4)]">COLLABORATE</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-lg mx-auto font-body">
          Have an engineering opportunity, full-stack opening, or a project to build? Transmit your message below or chat on LinkedIn.
        </p>
      </div>

      {/* Direct LinkedIn Satellite Uplink */}
      <div className="flex justify-center mb-4">
        <a
          href="https://www.linkedin.com/in/chandu-srikakulam-08b08521a/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-hud text-xs font-bold tracking-wider uppercase bg-[#0077B5]/15 dark:bg-[#0077B5]/25 hover:bg-[#0077B5] text-[#0077B5] hover:text-white border border-[#0077B5]/50 shadow-sm transition-all duration-300 flex items-center gap-2"
        >
          <FaLinkedin className="text-base" />
          <span>CHAT DIRECTLY ON LINKEDIN</span>
        </a>
      </div>

      {/* Compact Contact Form */}
      <div className="relative rounded-xl p-4 sm:p-6 bg-white/75 dark:bg-[#0c101b]/95 border border-gray-200 dark:border-gray-800 backdrop-blur-xl shadow-lg">
        {/* HUD Brackets */}
        <div className="hud-corner-tl border-red-500/50" />
        <div className="hud-corner-tr border-red-500/50" />
        <div className="hud-corner-bl border-cyan-400/50" />
        <div className="hud-corner-br border-cyan-400/50" />

        <div className="flex items-center justify-between pb-2 mb-4 border-b border-gray-200 dark:border-gray-800 text-[10px] font-hud text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="ml-1 uppercase">TRANSMIT DIRECT MESSAGE</span>
          </div>
          <span className="text-cyan-500 font-semibold">FORM STATUS: READY</span>
        </div>

        <form
          action="https://formspree.io/f/mgvarlyp"
          method="POST"
          onSubmit={() => setIsSubmitting(true)}
          className="space-y-3.5"
        >
          <div>
            <label className="block mb-1 font-hud text-[11px] font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
              YOUR EMAIL
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                placeholder="recruiter@company.com"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50/80 dark:bg-black/50 text-gray-900 dark:text-white font-body text-xs focus:outline-none focus:border-red-500 transition-all"
              />
              <FaEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-hud text-[11px] font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
              YOUR MESSAGE
            </label>
            <div className="relative">
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Hi Chandu, we came across your portfolio and would love to discuss a Full Stack Developer role..."
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50/80 dark:bg-black/50 text-gray-900 dark:text-white font-body text-xs focus:outline-none focus:border-cyan-500 transition-all resize-none"
              />
              <FaTerminal className="absolute right-3 top-3 text-gray-400 text-xs pointer-events-none" />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 sm:py-3 rounded-lg font-hud font-bold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-red-600 via-[#ED1D24] to-red-700 hover:from-red-500 hover:to-red-600 shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <FaRocket className="text-yellow-300" />
            <span>{isSubmitting ? "SENDING MESSAGE..." : "SEND MESSAGE // TRANSMIT"}</span>
          </button>
        </form>
      </div>

      {/* Compact Marvel Developer Footer */}
      <footer className="mt-8 text-center border-t border-gray-200 dark:border-gray-800/80 pt-4">
        <div className="flex items-center justify-center gap-1.5 mb-1.5">
          <span className="bg-[#ED1D24] text-white text-[10px] font-marvel px-1.5 py-0.5 tracking-widest font-black uppercase">
            MARVEL
          </span>
          <span className="font-hud text-[11px] tracking-wider text-gray-800 dark:text-gray-200 font-bold">
            THEMED DEVELOPER PORTFOLIO
          </span>
        </div>
        <p className="text-[11px] font-body text-gray-500 dark:text-gray-400">
          Designed & Developed by{" "}
          <span className="text-[#ED1D24] font-semibold font-hud">Chandu Srikakulam</span>
        </p>
      </footer>
    </section>
  );
}
