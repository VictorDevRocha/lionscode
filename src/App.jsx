import { useEffect } from "react";

// CSS Imports - app.css já importa todos os estilos necessários
import "./styles/app.css";

// Layout Components
import Footer from "./components/layout/Footer";

// Section Components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Partners from "./components/sections/Partners";
import Process from "./components/sections/Process";
import Services from "./components/sections/Services";
import Models from "./components/sections/Models";
import Evolution from "./components/sections/Evolution";
import Contact from "./components/sections/Contact";

// Import AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Hero />
      <div className="line_linear"></div>
      <Evolution />
      <About />
      <Partners />
      <Process />
      <Services />
      <Models />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
