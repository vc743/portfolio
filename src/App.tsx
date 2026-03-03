import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import BackToTop from "./components/BackToTop";
import CustomCursor from "./components/CustomCursor";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "dark" : ""} min-h-screen bg-zinc-50 text-zinc-900 dark:bg-[#0d0d0d] dark:text-white transition-colors duration-300`}>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <WorkExperience />
        <Projects />
        <Skills />
        <Footer />
      </main>
      <BackToTop />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
