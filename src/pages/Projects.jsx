import { LuCode, LuExternalLink } from "react-icons/lu";

const Projects = () => {
  const projects = [
    {
      title: "Neural Network for Image Recognition",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=400&fit=crop",
      problem: "Detection of anomalies in high-resolution X-ray scans was yielding low accuracy (72%) with traditional CV methods, leading to false negatives in critical diagnoses.",
      solution: "Designed and implemented a custom CNN architecture with residual blocks. Utilized data augmentation to balance the dataset, improving validation accuracy to 87% (+15% baseline).",
      tags: ["Python", "Keras", "OpenCV", "NumPy"]
    },
    {
      title: "Sentiment Analysis Trading Bot",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=400&fit=crop",
      problem: "Manual analysis of financial news sentiment is too slow for high-frequency trading decisions, missing critical market entry points.",
      solution: "Built an NLP pipeline processing 1k+ news headlines/sec using BERT. Achieved 90% sentiment classification accuracy and integrated signals with a trading API.",
      tags: ["Python", "PyTorch", "Hugging Face", "Redis"]
    },
    {
      title: "Autonomous Drone Navigation Sim",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=400&fit=crop",
      problem: "Simulated drones struggled to navigate complex indoor environments without GPS, resulting in frequent collisions during pathfinding.",
      solution: "Implemented SLAM (Simultaneous Localization and Mapping) combined with A* pathfinding. Optimized C++ codebase to run collision detection in real-time (60fps).",
      tags: ["C++", "ROS 2", "Gazebo"]
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) flex items-center gap-3">
            <span className="text-(--text-secondary)">03.</span> PROJECTS
          </h2>
          <div className="hidden sm:flex flex-1 h-px bg-linear-to-r from-(--accent) to-transparent"></div>
          <span className="hidden md:block text-sm text-(--text-secondary) uppercase tracking-widest whitespace-nowrap">
            // Case Studies
          </span>
        </div>

        {/* Projects List */}
        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-(--bg-secondary) border border-(--border-color) rounded-xl overflow-hidden hover:border-(--accent) hover:shadow-lg transition-all duration-300"
            >
              <div className="grid md:grid-cols-5 gap-6 md:gap-8 p-6 md:p-8">
                
                {/* Project Image */}
                <div className="md:col-span-2 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Details */}
                <div className="md:col-span-3 flex flex-col justify-between space-y-5">
                  
                  {/* Title & Actions */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-(--text-primary) flex-1">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 shrink-0">
                      <button 
                        className="p-2 rounded-lg text-(--text-secondary) hover:text-(--accent) hover:bg-(--hover-bg) transition-all duration-200"
                        title="View code"
                      >
                        <LuCode className="w-5 h-5" />
                      </button>
                      <button 
                        className="p-2 rounded-lg text-(--text-secondary) hover:text-(--accent) hover:bg-(--hover-bg) transition-all duration-200"
                        title="Visit project"
                      >
                        <LuExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-(--border-color)"></div>

                  {/* Problem */}
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-(--accent) uppercase tracking-widest mb-2">
                      Problem
                    </h4>
                    <p className="text-(--text-secondary) text-sm md:text-base leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-(--accent) uppercase tracking-widest mb-2">
                      Solution
                    </h4>
                    <p className="text-(--text-secondary) text-sm md:text-base leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 bg-(--bg-primary) text-(--accent) text-xs md:text-sm font-medium rounded-lg border border-(--border-color) hover:border-(--accent) transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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