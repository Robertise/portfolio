import { LuBrain, LuCode, LuWrench } from "react-icons/lu";

const Skills = () => {
  const skillCategories = [
    {
      icon: <LuBrain className="w-6 h-6 text-(--accent)" />,
      title: "Machine Learning",
      skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV"]
    },
    {
      icon: <LuCode className="w-6 h-6 text-(--accent)" />,
      title: "Languages",
      skills: ["Python", "C++", "SQL", "JavaScript"]
    },
    {
      icon: <LuWrench className="w-6 h-6 text-(--accent)" />,
      title: "Tools & Cloud",
      skills: ["Git & GitHub", "Docker", "AWS (EC2, S3)", "Jupyter"]
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-(--text-primary) whitespace-nowrap flex items-center gap-3">
            <span className="text-(--text-secondary)">02.</span> SKILLS
          </h2>
          <div className="hidden sm:flex flex-1 h-px bg-gradient-to-r from-(--accent) to-transparent"></div>
          <span className="hidden md:block text-sm text-(--text-secondary) uppercase tracking-widest whitespace-nowrap">
            // Tech Stack & Tools
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-(--bg-secondary) border border-(--border-color) rounded-xl p-6 md:p-8 hover:border-(--accent) hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-lg bg-(--hover-bg)">
                  {category.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-(--text-primary)">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-(--bg-primary) text-(--text-secondary) text-sm font-medium rounded-lg border border-(--border-color) hover:border-(--accent) hover:text-(--accent) transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;