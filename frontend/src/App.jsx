import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DarkModeProvider from "./context/DarkModeProvider";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
function App() {
  return (
    <>
      <DarkModeProvider>
        <Navbar />
        <Introduction text="Hi, I'm Chandu Srikakulam" delay="100" />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </DarkModeProvider>
    </>
  );
}

export default App;
