import Terminal from "../components/Terminal"; 
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
  return (
    <div className="relative z-10">
      <section id="home" className="scroll-mt-25">
        <Terminal />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>
    </div>
  );
};

export default Home;