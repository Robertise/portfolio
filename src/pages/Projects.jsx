import { LuCode, LuExternalLink } from "react-icons/lu";
import { projects } from "../data/projectsData";

const Projects = () => { 
  return (
    <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-14 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) flex items-center gap-3">
            <span className="text-(--primary)">03.</span> PROJECTS
          </h2>
          <div className="hidden sm:flex flex-1 h-px bg-linear-to-r from-(--accent) to-transparent"></div>
          <span className="hidden md:block text-sm text-(--text-secondary) uppercase tracking-widest whitespace-nowrap">
            // Case Studies
          </span>
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-(--card-background) border border-(--border-color) rounded-lg overflow-hidden hover:border-(--accent) hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="w-full h-40 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-col flex-1 p-5 space-y-3">
                {/* Title & Actions */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-(--text-primary) flex-1 line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    <button
                      className="p-1.5 rounded-lg text-(--text-secondary) hover:text-yellow-600 hover:bg-(--hover-bg) transition-all duration-200"
                      title="View code"
                    >
                      <LuCode className="w-4 h-4" />
                    </button>
                    <button
                      className="p-1.5 rounded-lg text-(--text-secondary) hover:text-green-700 hover:bg-(--hover-bg) transition-all duration-200"
                      title="Visit project"
                    >
                      <LuExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-(--border-color)"></div>

                {/* Problem */}
                <div>
                  <h4 className="md:text-sm text-xs font-bold text-red-500 uppercase tracking-widest mb-1">
                    Problem
                  </h4>
                  <p className="text-(--text-secondary) md:text-sm text-xs leading-relaxed line-clamp-2">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="md:text-sm text-xs font-bold text-green-700 uppercase tracking-widest mb-1">
                    Solution
                  </h4>
                  <p className="text-(--text-secondary) md:text-sm text-xs leading-relaxed line-clamp-2">
                    {project.solution}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-(--bg-primary) text-(--accent) md:text-sm text-xs font-medium rounded border border-(--border-color) hover:border-(--accent) transition-all duration-200"
                    >
                      {tag}
                    </span>
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

export default Projects;
