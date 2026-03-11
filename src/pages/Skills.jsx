import { LuZap, LuBookOpen } from "react-icons/lu";
import { skillCategories } from "../data/skillsData";

const Skills = () => { 
  const SkillBadge = ({ skill, variant }) => {
    const base =
      "px-3 py-1 md:text-sm text-xs font-medium rounded-md border transition-all duration-200 ";
    const styles = {
      proficient:
        "bg-(--bg-primary) text-(--accent) border-(--border-color) hover:border-(--accent)",
      learning:
        "bg-transparent text-(--text-secondary) border-dashed border-(--border-color) hover:border-(--accent) hover:text-(--accent)",
    };
    return <span className={base + styles[variant]}>{skill}</span>;
  };

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
              {/* Card Header */}
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

              {/* Proficient */}
              <div className="mb-4">
                <div className="flex items-center gap-1.5 mb-2.5">
                  <LuZap className="w-3.5 h-3.5 text-(--accent)" />
                  <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-(--accent)">
                    Proficient
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.proficient.map((skill, i) => (
                    <SkillBadge key={i} skill={skill} variant="proficient" />
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-(--border-color) my-4" />

              {/* Learning */}
              <div>
                <div className="flex items-center gap-1.5 mb-2.5">
                  <LuBookOpen className="w-3.5 h-3.5 text-(--text-secondary)" />
                  <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-(--text-secondary)">
                    Still Learning
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.learning.map((skill, i) => (
                    <SkillBadge key={i} skill={skill} variant="learning"/>
                  ))} 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;