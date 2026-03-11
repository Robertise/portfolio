export const projects = [
  {
    title: "Neural Network for Image Recognition",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=400&fit=crop",
    problem:
      "Detection of anomalies in high-resolution X-ray scans was yielding low accuracy (72%) with traditional CV methods, leading to false negatives in critical diagnoses.",
    solution:
      "Designed and implemented a custom CNN architecture with residual blocks. Utilized data augmentation to balance the dataset, improving validation accuracy to 87% (+15% baseline).",
    tags: ["Python", "Keras", "OpenCV", "NumPy"],
  },
  {
    title: "Sentiment Analysis Trading Bot",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=400&fit=crop",
    problem:
      "Manual analysis of financial news sentiment is too slow for high-frequency trading decisions, missing critical market entry points.",
    solution:
      "Built an NLP pipeline processing 1k+ news headlines/sec using BERT. Achieved 90% sentiment classification accuracy and integrated signals with a trading API.",
    tags: ["Python", "PyTorch", "Hugging Face", "Redis"],
  },
  {
    title: "Autonomous Drone Navigation Sim",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=400&fit=crop",
    problem:
      "Simulated drones struggled to navigate complex indoor environments without GPS, resulting in frequent collisions during pathfinding.",
    solution:
      "Implemented SLAM (Simultaneous Localization and Mapping) combined with A* pathfinding. Optimized C++ codebase to run collision detection in real-time (60fps).",
    tags: ["C++", "ROS 2", "Gazebo"],
  },
];