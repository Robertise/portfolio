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
    <section className="py-16 px-4">
      <div className="max-w-300 mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-semibold text-white">
            <span className="text-gray-500">02.</span> PROJECTS
          </h2>
          <div className="flex-1 h-px mx-5 bg-gray-800"></div>
          <span className="text-sm text-gray-500 uppercase tracking-wider">
            // Case Studies
          </span>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1f3a] border border-[#2a2f4a] rounded-lg overflow-hidden hover:border-blue-500/50 transition-colors"
            >
              <div className="grid md:grid-cols-5 gap-6 p-6">
                <div className="md:col-span-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="md:col-span-3 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                        <LuCode className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                        <LuExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
                      Problem
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#0a0e27] text-blue-400 text-xs rounded border border-[#2a2f4a]"
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