import FeaturedProject from "./components/FeaturedProject";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <FeaturedProject />
      <About />
      <Project />
      
      <Skills />
      <Contact />
      <Footer />
      </main>
      
  );
}

export default App;

