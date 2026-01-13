import { LuBrain, LuCode, LuWrench } from "react-icons/lu";


const Skills = () => {
  const skillCategories = [
    {
      icon: <LuBrain className="w-5 h-5 text-blue-500" />,
      title: "Machine Learning",
      skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV"]
    },
    {
      icon: <LuCode className="w-5 h-5 text-blue-500" />,
      title: "Languages",
      skills: ["Python", "C++", "SQL", "JavaScript"]
    },
    {
      icon: <LuWrench className="w-5 h-5 text-blue-500" />,
      title: "Tools & Cloud",
      skills: ["Git & GitHub", "Docker", "AWS (EC2, S3)", "Jupyter"]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-300 mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-white whitespace-nowrap">
            <span className="text-gray-500">01.</span> SKILLS
          </h2>
          <div className="flex-1 h-px mx-5 bg-gray-800"></div>
          <span className="text-sm text-gray-500 uppercase tracking-wider whitespace-nowrap">
            // Tech Stack & Tools
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1a1f3a] border border-[#2a2f4a] rounded-lg p-6 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-[#0a0e27] text-gray-300 text-sm rounded border border-[#2a2f4a] hover:border-blue-500/50 transition-colors"
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