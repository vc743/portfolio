import Header from "./components/Header";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Header />
      <main>
        <Hero />
        <WorkExperience />
      </main>
    </div>
  );
}

export default App;
