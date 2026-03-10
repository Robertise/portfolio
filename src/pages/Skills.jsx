import { LuBrain, LuCode, LuWrench } from "react-icons/lu";

const Skills = () => {
  const skillCategories = [
    {
      icon: <LuBrain className="w-6 h-6 text-green-500" />,
      title: "Machine Learning",
      subtitle: "Deep Learning & AI",
      skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV"],
    },
    {
      icon: <LuCode className="w-6 h-6 text-purple-500" />,
      title: "Languages",
      subtitle: "Programming & Scripting",
      skills: ["Python", "C++", "SQL", "JavaScript"],
    },
    {
      icon: <LuWrench className="w-6 h-6 text-yellow-500" />,
      title: "Tools & Cloud",
      subtitle: "DevOps & Infrastructure",
      skills: ["Git & GitHub", "Docker", "AWS (EC2, S3)", "Jupyter"],
    },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-14 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) whitespace-nowrap flex items-center gap-3">
            <span className="text-(--primary)">02.</span> SKILLS
          </h2>
          <div className="hidden sm:flex flex-1 h-px bg-linear-to-r from-(--accent) to-transparent"></div>
          <span className="hidden md:block text-sm text-(--text-secondary) uppercase tracking-widest whitespace-nowrap">
            // Tech Stack & Tools
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-(--card-background) border border-(--border-color) rounded-lg p-5 hover:border-(--accent) hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 rounded-md bg-(--hover-bg)">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-(--text-primary)">
                    {category.title}
                  </h3>
                  <p className="text-xs md:text-sm text-(--text-secondary) mt-0.5">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-(--bg-primary) text-(--accent) md:text-sm text-xs font-medium rounded-md border border-(--border-color) hover:border-(--accent) hover:text-(--accent) transition-all duration-200"
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
