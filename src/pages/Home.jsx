import Terminal from "../components/Terminal";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Blogs from "./Blogs";

const Home = () => {
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
    </div>
  );
};

export default Home;
