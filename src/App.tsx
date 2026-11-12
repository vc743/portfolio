import { MotionConfig } from "motion/react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* reducedMotion="user": people who ask for less motion keep fades, lose movement */}
        <MotionConfig reducedMotion="user">
          <Header />
          <main>
            <Hero />
            <WorkExperience />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </MotionConfig>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
