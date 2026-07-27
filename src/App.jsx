import { MotionConfig } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-base">
        <div className="texture-overlay" />
        <CustomCursor />
        <Nav />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
