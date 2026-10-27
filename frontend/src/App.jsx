import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MarvelBackground from "./components/MarvelBackground";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import MarvelHudBar from "./components/MarvelHudBar";
import DarkModeProvider from "./context/DarkModeProvider";

function App() {
  const [activeStone, setActiveStone] = useState("reality");

  return (
    <DarkModeProvider>
      <div className="relative min-h-screen w-full bg-slate-50 dark:bg-[#07090e] text-gray-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden font-body">
        {/* Ambient Marvel Cosmic & Tactical Grid Background */}
        <MarvelBackground activeStone={activeStone} />

        {/* Sticky Header (Strictly preserved as requested) */}
        <Navbar />

        {/* Main Marvel Portfolio Content */}
        <main className="relative z-10">
          <Introduction activeStone={activeStone} onSelectStone={setActiveStone} />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>

        {/* Floating Stark J.A.R.V.I.S. HUD Telemetry Bar */}
        <MarvelHudBar />
      </div>
    </DarkModeProvider>
  );
}

export default App;