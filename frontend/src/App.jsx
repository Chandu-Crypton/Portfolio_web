import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DarkModeProvider from "./context/DarkModeProvider";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <Introduction text="Hi, I'm Chandu Srikakulam" delay="100" />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>
    </DarkModeProvider>
  );
}

export default App;