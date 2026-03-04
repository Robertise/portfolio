import { useState } from "react"; 
import { LuBrain, LuUser, LuLightbulb, LuBookOpen, LuImage } from "react-icons/lu";
import { FaAward, FaRocket } from "react-icons/fa6";
import { TbTools } from "react-icons/tb";
import { PiStrategyBold } from "react-icons/pi";
import { BiErrorAlt, BiBookBookmark } from "react-icons/bi";
import Gallery from "../components/Gallery";
import profileImage from '../assets/DoGiaHuy.png';


const About = () => { 
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = [
    { id: 'overview', label: 'Overview', icon: LuUser },
    { id: 'academic', label: 'AI Focus', icon: LuBrain },
    { id: 'skills', label: 'Skills & Mindset', icon: LuLightbulb },
    { id: 'personal', label: 'Personal', icon: LuBookOpen },
    { id: 'gallery', label: 'My Gallery', icon: LuImage }
  ];


  return (
    <section className="py-16 px-4">
      <div className="max-w-300 mx-auto">
        <div className="flex items-center justify-between mb-16 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) flex items-center gap-3">
            <span className="text-(--text-secondary)">01.</span> ABOUT ME
          </h2>
          <div className="hidden sm:flex flex-1 h-px bg-linear-to-r from-(--accent) to-transparent"></div>
          <span className="hidden md:block text-sm text-(--text-secondary) uppercase tracking-widest whitespace-nowrap">
            // Who I Am
          </span>
        </div>

        <div className="border-b border-(--border-color) mb-8">
          <div className="flex space-x-10 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 pb-4 border-b-2 ${
                    activeTab === tab.id
                      ? "border-(--accent) text-(--accent)"
                      : "border-transparent text-gray-400 hover:text-(--accent)"
                  } transition-colors`}
                >
                  <Icon className="w-5 h-5 ml-2 md:ml-0" />
                  <span className="text-sm font-medium hidden md:block">{tab.label}</span>
                </button>
              );
            })}
          </div> 
        </div>

        <div>
          {activeTab === "overview" && (
            <div className="text-(--text-secondary) space-y-4 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
              <div className="col-span-1">
                <img 
                  src={profileImage} 
                  alt="Gia Huy" 
                  className="w-full h-auto rounded-lg border border-gray-600 mb-3 md:mb-0"
                />
              </div>
              <div className="col-span-2"> 
                <h2 className="text-3xl md:text-4xl font-semibold text-(--text-primary) whitespace-nowrap mb-2">
                  Hello, I'm Do Gia Huy.
                </h2> 
                <h2 className="text-1xl md:text-2xl font-semibold text-(--text-secondary) whitespace-nowrap mb-5">
                  AI Student at <span className="text-(--accent)">Swinburne University</span>
                </h2>  
                <p>
                  I'm a passionate AI student based in Ho Chi Minh City, Vietnam. 
                  With a strong foundation in machine learning and data analysis,
                  I am dedicated to building intelligent systems that bridge the gap between complex data and human understanding.
                </p>

                <div className="flex-1 h-px my-8 bg-(--border-color)"></div> 

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
                  <div className="mb-4">
                    <h3 className="text-base text-(--text-primary) mb-2 flex items-center"><FaAward className="inline mr-2 text-(--accent)" /> CURRENT STATUS</h3>
                    <p className="text-(--text-primary) mb-2">AI Student at Swinburne University</p>  
                    <p className="text-(--text-secondary) text-sm">
                      Currently in my third year, focusing on building a strong foundation in artificial intelligence while applying concepts through coursework and personal projects.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-base text-(--text-primary) mb-2 flex items-center"><FaRocket className="inline mr-2 text-(--accent)" /> CARREER GOALS</h3>
                    <p className="text-(--text-primary) mb-2">Seeking AI-Focused Roles</p>
                    <p className="text-(--text-secondary) text-sm">
                      Looking for internship or entry-level opportunities where I can learn from real-world systems, grow my technical skills, and contribute to meaningful AI-driven solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "academic" && (
            <div className="text-(--text-secondary) space-y-4"> 
                <h2 className="text-3xl md:text-4xl font-semibold text-(--text-primary) whitespace-nowrap mb-2">
                  Why choosing AI?
                </h2> 
                <p className="mt-4">
                  I chose AI because I'm fascinated by systems that can improve themselves, machines that don't just execute instructions but learn from experience. The field sits at this intersection of mathematics, engineering, and philosophy that feels endlessly explorable.
                </p>
                <h2 className="text-1xl md:text-2xl font-semibold text-(--text-secondary) whitespace-nowrap mb-5">
                  Core <span className="text-(--accent)">Interests</span>
                </h2>
                <div className="border-l-2 pl-5 py-2 mb-5 border-(--accent)">
                  <p className="text-(--text-primary) font-medium">Deep Learning & Neural Architecture</p>
                  <p>How model design choices affect learning dynamics. Currently exploring attention mechanisms and their applications beyond NLP.</p>
                </div>
                <div className="border-l-2 pl-5 py-2 mb-5 border-(--accent)">
                  <p className="text-(--text-primary) font-medium">Reinforcement Learning</p>
                  <p>The challenge of getting agents to learn optimal behavior through trial and error. Working on understanding exploration-exploitation tradeoffs.</p>
                </div>
                <div className="border-l-2 pl-5 py-2 border-(--accent)">
                  <p className="text-(--text-primary) font-medium">Applied ML Systems</p>
                  <p>Bridging the gap between research and production. Interested in model optimization, deployment, and building reliable ML pipelines.</p>
                </div>
            </div>
          )}  

          {activeTab === "skills" && (
            <div className="text-(--text-secondary) space-y-4"> 
                <h2 className="text-3xl md:text-4xl font-semibold text-(--text-primary) whitespace-nowrap mb-2">
                  How I Think & Work?
                </h2> 
                <p className="mt-4 mb-7">
                  I value understanding over memorization. When I learn something new, I prefer to implement it from scratch first, even if it's slower - because that's where the real learning happens.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-(--bg-secondary) border border-(--border-color) rounded-lg p-6 hover:border-(--accent) transition-colors">
                    <h5 className="mb-3 text-xl flex items-center text-(--text-primary) font-semibold"><BiErrorAlt className="mr-2 text-(--accent)"/>Problem-Solving Approach</h5>
                    <p>I decompose complex problems into testable prototypes, iterating based on data and treating setbacks as insights rather than failures.</p>
                  </div> 
                  <div className="bg-(--bg-secondary) border border-(--border-color) rounded-lg p-6 hover:border-(--accent) transition-colors">
                    <h5 className="mb-3 text-xl flex items-center text-(--text-primary) font-semibold"><BiBookBookmark className="mr-2 text-(--accent)"/>Learning Philosophy</h5>
                    <p>I learn best through action; while reading provides direction, coding and experimenting solidify concepts. I use a technical journal to document results and clarify trade-offs.</p>
                  </div> 
                  <div className="bg-(--bg-secondary) border border-(--border-color) rounded-lg p-6 hover:border-(--accent) transition-colors">
                    <h5 className="mb-3 text-xl flex items-center text-(--text-primary) font-semibold"><PiStrategyBold className="mr-2 text-(--accent)"/>Data Strategy</h5>
                    <p>Treating raw data as the primary source of truth. Implementing robust pipelines for data integrity and insight.</p>
                  </div> 
                  <div className="bg-(--bg-secondary) border border-(--border-color) rounded-lg p-6 hover:border-(--accent) transition-colors">
                    <h5 className="mb-3 text-xl flex items-center text-(--text-primary) font-semibold"><TbTools className="mr-2 text-(--accent)"/>Technical Toolkit</h5>
                    <p>I prioritize solving problems effectively over collecting tools, using Python (PyTorch, scikit-learn, NumPy), Git, and cloud platforms as means to that end.</p>
                  </div> 
                </div>
            </div>
          )}

          {activeTab === "personal" && (
            <div className="text-(--text-secondary) space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-(--text-primary) whitespace-nowrap mb-6">
                Beyond the Code.
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-(--text-primary) mb-3">Life in Ho Chi Minh City</h3>
                  <p>
                    I'm based in Ho Chi Minh City, Vietnam - a dynamic and fast-moving environment that constantly pushes me to adapt and improve. Growing up here shaped my resilience, creativity, and ability to think practically when solving problems in both technology and life.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-(--text-primary) mb-3">Passions & Interests</h3>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start">
                      <span className="text-(--accent) mr-3 mt-1">▪</span>
                      <span>
                        <strong>Football:</strong> I enjoy watching high-level football matches, especially games featuring Cristiano Ronaldo. I admire his discipline, mindset, and relentless drive for excellence, qualities I try to apply in my own learning journey.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-(--accent) mr-3 mt-1">▪</span>
                      <span>
                        <strong>Music:</strong> Music is my daily companion while coding or relaxing. I often listen to Justin Bieber and Sơn Tùng M-TP - their evolution, creativity, and global influence inspire me to continuously improve and stay original.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-(--accent) mr-3 mt-1">▪</span>
                      <span>
                        <strong>Gaming & Strategy:</strong> I enjoy games that require strategic thinking and decision-making. They sharpen my ability to analyze systems, predict outcomes, and optimize solutions.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-(--accent) mr-3 mt-1">▪</span>
                      <span>
                        <strong>Reading & Self-Development:</strong> I regularly read about technology, productivity, and mindset. I'm particularly interested in topics around AI, complex systems, and decision-making.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-(--text-primary) mb-3">Core Values</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-(--bg-secondary) border-l-2 border-(--accent) pl-4 py-3 rounded">
                      <h4 className="font-semibold text-(--text-primary) mb-1">Discipline</h4>
                      <p className="text-sm">
                        Inspired by elite athletes, I believe consistency and discipline compound into long-term success.
                      </p>
                    </div>
                    <div className="bg-(--bg-secondary) border-l-2 border-(--accent) pl-4 py-3 rounded">
                      <h4 className="font-semibold text-(--text-primary) mb-1">Continuous Learning</h4>
                      <p className="text-sm">
                        Technology evolves fast, I make sure I evolve with it through constant practice and study.
                      </p>
                    </div>
                    <div className="bg-(--bg-secondary) border-l-2 border-(--accent) pl-4 py-3 rounded">
                      <h4 className="font-semibold text-(--text-primary) mb-1">Impact</h4>
                      <p className="text-sm">
                        I aim to build systems that genuinely help people and solve meaningful problems.
                      </p>
                    </div>
                    <div className="bg-(--bg-secondary) border-l-2 border-(--accent) pl-4 py-3 rounded">
                      <h4 className="font-semibold text-(--text-primary) mb-1">Growth Mindset</h4>
                      <p className="text-sm">
                        Every challenge is an opportunity to improve — whether in coding, academics, or personal development.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-(--bg-secondary) border border-(--border-color) rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-(--text-primary) mb-3">Fun Facts</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-(--accent) mr-3">✦</span>
                      <span>I rarely miss big matches when Cristiano Ronaldo plays, match analysis is my version of “studying game strategy.”</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-(--accent) mr-3">✦</span>
                      <span>My coding sessions often come with a Justin Bieber or Sơn Tùng M-TP playlist in the background.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-(--accent) mr-3">✦</span>
                      <span>I like connecting concepts from football strategy and music production to software architecture thinking.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="text-(--text-secondary) space-y-4">
              <Gallery />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;