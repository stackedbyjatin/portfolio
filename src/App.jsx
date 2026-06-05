import FeaturedProject from "./components/FeaturedProject";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VisualShowcase from "./components/VisualShowcase";

function App() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <VisualShowcase />
      <About />
      <FeaturedProject />
      <Project />
      <Skills />
      <Contact />
      <Footer />
      </main>
      
  );
}

export default App;

