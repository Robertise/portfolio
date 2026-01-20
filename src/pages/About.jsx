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
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white whitespace-nowrap">
            <span className="text-gray-500">01.</span> ABOUT ME
          </h2>
          <div className="flex-1 h-px mx-5 bg-gray-800"></div>
          <span className="text-sm text-gray-500 uppercase tracking-wider whitespace-nowrap">
            // Who I Am
          </span>
        </div>

        <div className="border-b border-gray-800 mb-8">
          <div className="flex space-x-10 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 pb-4 border-b-2 ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-gray-400 hover:text-blue-400"
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
            <div className="text-gray-300 space-y-4 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
              <div className="col-span-1">
                <img 
                  src={profileImage} 
                  alt="Gia Huy" 
                  className="w-full h-auto rounded-lg border border-gray-600 mb-3 md:mb-0"
                />
              </div>
              <div className="col-span-2"> 
                <h2 className="text-3xl md:text-4xl font-semibold text-white whitespace-nowrap mb-2">
                  Hello, I'm Do Gia Huy.
                </h2> 
                <h2 className="text-1xl md:text-2xl font-semibold text-gray-400 whitespace-nowrap mb-5">
                  AI Student at <span className="text-blue-400">Swinburne University</span>
                </h2>  
                <p>
                  I'm a passionate AI student based in Ho Chi Minh City, Vietnam. 
                  With a strong foundation in machine learning and data analysis,
                  I am dedicated to building intelligent systems that bridge the gap between complex data and human understanding.
                </p>

                <div className="flex-1 h-px my-8 bg-gray-800"></div> 

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
                  <div className="mb-4">
                    <h3 className="text-base text-gray-400 mb-2 flex items-center"><FaAward className="inline mr-2 text-blue-700" /> CURRENT STATUS</h3>
                    <p className="text-white mb-2">AI Student at Swinburne University</p>  
                    <p className="text-gray-400 text-sm">
                      Currently in my third year, focusing on building a strong foundation in artificial intelligence while applying concepts through coursework and personal projects.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-base text-gray-400 mb-2 flex items-center"><FaRocket className="inline mr-2 text-blue-700" /> CARREER GOALS</h3>
                    <p className="text-white mb-2">Seeking AI-Focused Roles</p>
                    <p className="text-gray-400 text-sm">
                      Looking for internship or entry-level opportunities where I can learn from real-world systems, grow my technical skills, and contribute to meaningful AI-driven solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "academic" && (
            <div className="text-gray-300 space-y-4"> 
                <h2 className="text-3xl md:text-4xl font-semibold text-white whitespace-nowrap mb-2">
                  Why choosing AI?
                </h2> 
                <p className="mt-4">
                  I chose AI because I'm fascinated by systems that can improve themselves, machines that don't just execute instructions but learn from experience. The field sits at this intersection of mathematics, engineering, and philosophy that feels endlessly explorable.
                </p>
                <h2 className="text-1xl md:text-2xl font-semibold text-gray-400 whitespace-nowrap mb-5">
                  Core <span className="text-blue-400">Interests</span>
                </h2>
                <div className="border-l pl-5 py-2 mb-5">
                  <p className="text-white font-medium">Deep Learning & Neural Architecture</p>
                  <p>How model design choices affect learning dynamics. Currently exploring attention mechanisms and their applications beyond NLP.</p>
                </div>
                <div className="border-l pl-5 py-2 mb-5">
                  <p className="text-white font-medium">Reinforcement Learning</p>
                  <p>The challenge of getting agents to learn optimal behavior through trial and error. Working on understanding exploration-exploitation tradeoffs.</p>
                </div>
                <div className="border-l pl-5 py-2">
                  <p className="text-white font-medium">Applied ML Systems</p>
                  <p>Bridging the gap between research and production. Interested in model optimization, deployment, and building reliable ML pipelines.</p>
                </div>
            </div>
          )}  

          {activeTab === "skills" && (
            <div className="text-gray-300 space-y-4"> 
                <h2 className="text-3xl md:text-4xl font-semibold text-white whitespace-nowrap mb-2">
                  How I Think & Work?
                </h2> 
                <p className="mt-4 mb-7">
                  I value understanding over memorization. When I learn something new, I prefer to implement it from scratch first, even if it's slower - because that's where the real learning happens.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#1a1f3a] border border-[#2a2f4a] rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                    <h5 className="mb-3 text-xl flex items-center text-white font-semibold"><BiErrorAlt className="mr-2 text-blue-400"/>Problem-Solving Approach</h5>
                    <p>I decompose complex problems into testable prototypes, iterating based on data and treating setbacks as insights rather than failures.</p>
                  </div> 
                  <div className="bg-[#1a1f3a] border border-[#2a2f4a] rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                    <h5 className="mb-3 text-xl flex items-center text-white font-semibold"><BiBookBookmark className="mr-2 text-blue-400"/>Learning Philosophy</h5>
                    <p>I learn best through action; while reading provides direction, coding and experimenting solidify concepts. I use a technical journal to document results and clarify trade-offs.</p>
                  </div> 
                  <div className="bg-[#1a1f3a] border border-[#2a2f4a] rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                    <h5 className="mb-3 text-xl flex items-center text-white font-semibold"><PiStrategyBold className="mr-2 text-blue-400"/>Data Strategy</h5>
                    <p>Treating raw data as the primary source of truth. Implementing robust pipelines for data integrity and insight.</p>
                  </div> 
                  <div className="bg-[#1a1f3a] border border-[#2a2f4a] rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                    <h5 className="mb-3 text-xl flex items-center text-white font-semibold"><TbTools className="mr-2 text-blue-400"/>Technical Toolkit</h5>
                    <p>I prioritize solving problems effectively over collecting tools, using Python (PyTorch, scikit-learn, NumPy), Git, and cloud platforms as means to that end.</p>
                  </div> 
                </div>
            </div>
          )}
          {activeTab === "personal" && (
            <div>  
              <h2 className="text-3xl md:text-4xl font-semibold text-white whitespace-nowrap mb-5">
                Beyond the Code.
              </h2> 
              <p>
                When I’m not immersed in AI algorithms and datasets, you will usually find me exploring the vibrant culture of Ho Chi Minh City, 
                enjoying a great cup of coffee, or staying active through gaming and outdoor adventures.              
                </p>
            </div>
          )}
          {activeTab === "gallery" && (
            <div className="text-gray-300 space-y-4">
              <Gallery />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;