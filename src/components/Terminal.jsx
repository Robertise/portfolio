import { FaArrowRightLong } from "react-icons/fa6";

export default function Terminal() {
  return (
    <div className="flex justify-center p-4 mt-20">
      <div className="w-full max-w-[1000px] bg-[var(--terminal-bg)] rounded-lg overflow-hidden shadow-2xl flex flex-col border border-gray-700">
        {/* Terminal Header */}
        <div className="bg-[var(--terminal-header)] px-4 py-2 flex items-center border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="flex-1 text-center pr-[60px] text-gray-500 text-sm font-mono">
            user@portfolio: ~
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-16 pt-15">
          <div className="text-white space-y-1 mb-10">
            <div className="flex flex-row items-center gap-2">
              <FaArrowRightLong color="#27c93f"/> 
              <p className="text-gray-400"><span className="text-blue-500">~</span> whoami</p>
            </div>
            <div className="px-5 ml-1.5 border-l border-gray-500 tracking-wider font-normal">
              <p className="text-4xl font-[Pridi] md:text-7xl font-medium mb-4 mt-2 tracking-wider [word-spacing:-0.15em]">Gia Huy</p> 
              <p className="text-lg md:text-xl text-blue-500">AI Student @ Swinburne University<br/>Based in Ho Chi Minh City, Vietnam</p>
            </div> 
          </div>
          
          <div className="text-white space-y-1 mb-10">
            <div className="flex flex-row items-center gap-2">
              <FaArrowRightLong color="#27c93f"/> 
              <p className="text-gray-400"><span className="text-blue-500">~</span> cat mission.txt</p>
            </div>
            <div className="px-5 ml-1.5 border-l border-gray-500 tracking-wider font-normal"> 
              <p className="">"Building intelligent systems through logic and curiosity.<br/>
                Dedicated to creating efficient and scalable AI solutions that bridge the gap between complex data and human understanding."</p>
            </div> 
          </div>

          <div className="text-white space-y-1">
            <button className="bg-blue-600 text-white mr-4 px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              View Projects ➔
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition duration-300">
              Contact Me
            </button> 
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="bg-[var(--terminal-header)] px-4 py-2 flex items-center border-t border-gray-700">
          <div className="flex gap-2 items-center"> 
            <div className="w-2 h-2 rounded-full bg-[#1ca530] mr-1"></div>
            <div className="text-sm text-gray-500">Status: Online <span className="px-2.5">|</span> Branch: main</div>
          </div>
          <div className="flex-1 text-end text-gray-500 text-sm font-mono">
            <div className="text-sm text-gray-500 ">UTF-8</div> 
          </div>
        </div>
      </div>
    </div>
  );
}