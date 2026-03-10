import { LuExternalLink } from "react-icons/lu";

const Blogs = () => {
  const blogs = [
    {
      title: "Getting Started with PyTorch",
      description:
        "A beginner-friendly guide to setting up PyTorch and building your first neural network with practical examples.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop",
      tags: ["PyTorch", "Tutorial", "Deep Learning"],
      date: "Mar 5, 2024",
      url: "#",
    },
    {
      title: "Advanced CNN Architectures Explained",
      description:
        "Deep dive into modern CNN architectures including ResNet, VGG, and Transformer-based models with implementation tips.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      tags: ["CNN", "Architecture", "Computer Vision"],
      date: "Feb 28, 2024",
      url: "#",
    },
    {
      title: "Building Real-time Trading Systems",
      description:
        "Explore NLP and sentiment analysis techniques for financial market predictions and automated trading strategies.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      tags: ["NLP", "Trading", "Finance"],
      date: "Feb 15, 2024",
      url: "#",
    },
    {
      title: "From Theory to Practice: SLAM Implementation",
      description:
        "Hands-on guide to implementing Simultaneous Localization and Mapping for autonomous robots and drones.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      tags: ["Robotics", "SLAM", "C++"],
      date: "Jan 30, 2024",
      url: "#",
    },
    {
      title: "Optimizing Deep Learning Models for Production",
      description:
        "Best practices for model optimization, quantization, and deployment strategies for production environments.",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f5ae4e8a83f?w=500&h=300&fit=crop",
      tags: ["Optimization", "Production", "Deployment"],
      date: "Jan 12, 2024",
      url: "#",
    },
  ];

  const handleBlogClick = (url) => {
    if (url !== "#") {
      window.open(url, "_blank");
    }
  };

  return (
    <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-14 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) flex items-center gap-3">
            <span className="text-(--primary)">04.</span> BLOGS
          </h2>
          <div className="hidden sm:flex flex-1 h-px bg-linear-to-r from-(--accent) to-transparent"></div>
          <span className="hidden md:block text-sm text-(--text-secondary) uppercase tracking-widest whitespace-nowrap">
            // Articles & Insights
          </span>
        </div>

        {/* Blogs List */}
        <div className="space-y-5 md:space-y-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              onClick={() => handleBlogClick(blog.url)}
              className="bg-(--card-background) border border-(--border-color) rounded-lg overflow-hidden hover:border-(--accent) hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="grid md:grid-cols-4 gap-4 md:gap-6 p-4 md:p-5">
                {/* Blog Image */}
                <div className="md:col-span-1 rounded-lg overflow-hidden h-40 md:h-auto">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Blog Content */}
                <div className="md:col-span-3 flex flex-col justify-between gap-4 relative">
                  {/* Date */}
                  <div className="absolute top-0 right-0 flex items-center gap-2">
                    <p className="text-xs md:text-sm text-gray-500 font-medium">
                      {blog.date}
                    </p>
                  </div>

                  {/* Title and Description */}
                  <div className="flex flex-col gap-2 pr-24">
                    <h3 className="text-lg md:text-xl font-semibold text-(--text-primary) line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-(--text-secondary) md:text-sm text-xs leading-relaxed line-clamp-2">
                      {blog.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 bg-(--bg-primary) text-(--accent) md:text-sm text-xs font-medium rounded-md border border-(--border-color) hover:border-(--accent) transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Redirect */}
                  <div className="absolute bottom-0 right-0 flex items-center gap-2">
                    <span className="flex items-center gap-1 md:text-sm text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View blog
                      <LuExternalLink className="w-4 h-4 ml-0.5" />
                    </span>
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

export default Blogs;
