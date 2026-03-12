import Terminal from "../components/Terminal";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Blogs from "./Blogs";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToBlogs) {
      const blogsSection = document.getElementById("blogs");
      if (blogsSection) {
        blogsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="relative z-10">
      <section id="home" className="scroll-mt-25">
        <Terminal />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="blogs">
        <Blogs />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;