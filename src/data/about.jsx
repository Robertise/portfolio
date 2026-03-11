import { FaAward, FaRocket, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import introNetwork from "../assets/intro_to_network.png";
import switchingRouting from "../assets/switching_routing_wireless.png";
import pythonCourse from "../assets/learn_python3.png";
import jsCourse from "../assets/learn_js.png";
import kotlinCourse from "../assets/learn_kotlin.png";
import chatbotCourse from "../assets/build_chatbots_python.png";

export const certificatesData = [
  {
    title: "Introduction to Networking",
    issuer: "CCNA (Cisco Certified Network Associate)",
    url: "https://www.netacad.com/certificates/?issuanceId=a39a3101-ecbe-4a2a-81af-860cab70033c",
    receivedDate: "Dec 2024",
    description: "Covered core networking concepts including the OSI model, IP addressing, protocols, and how data flows across networks.",
    image: introNetwork,
  },
  {
    title: "Switching, Routing, and Wireless Essentials",
    issuer: "CCNA (Cisco Certified Network Associate)",
    url: "https://www.netacad.com/certificates/?issuanceId=41e19311-4e5a-4755-b6ad-9f15c02b3299",
    receivedDate: "Jan 2025",
    description: "Configured network hardware (routers/switches), VLANs, and wireless infrastructure.",
    image: switchingRouting,
  },
  {
    title: "Learn Python 3 Course",
    issuer: "Codecademy",
    url: "https://www.codecademy.com/profiles/Robertise/certificates/6c152bd262967f8c941c9707ed636bda",
    receivedDate: "May 2025",
    description: "Built a solid foundation in Python covering syntax, data structures, functions, and object-oriented programming.",
    image: pythonCourse,
  },
  {
    title: "Learn JavaScript Course",
    issuer: "Codecademy",
    url: "https://www.codecademy.com/profiles/Robertise/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
    receivedDate: "Aug 2025",
    description: "Explored JavaScript fundamentals including DOM manipulation, event handling, and asynchronous programming.",
    image: jsCourse,
  },
  {
    title: "Learn Kotlin Course",
    issuer: "Codecademy",
    url: "https://www.codecademy.com/profiles/Robertise/certificates/a549293c6e8d62a61ef1bec410b58162",
    receivedDate: "Aug 2025",
    description: "Gained hands-on experience with Kotlin for Android development, covering classes, lambdas, and coroutines.",
    image: kotlinCourse,
  },
  {
    title: "Build Chatbots with Python Skill Path",
    issuer: "Codecademy",
    url: "https://www.codecademy.com/profiles/Robertise/certificates/5e15fa478b1c550011ec7046",
    receivedDate: "Aug 2025",
    description: "Applied Python to design and build conversational chatbots, covering NLP basics, intent recognition, and dialog flow.",
    image: chatbotCourse,
  }
];

export const educationData = [
  {
    year: "2023 - Present",
    degree: "Bachelor of Science in Artificial Intelligence",
    school: "Swinburne University of Technology",
    details:
      "Focusing on machine learning, deep learning, and data analysis. Currently in Year 3.",
  }
];

export const achievementsData = [
  "Best Performance Award in COS10009 - Introduction to Programming",
  "Best Performance Award in COS30017 - Software Development for Mobile Devices"
];

export const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    url: "https://github.com/Robertise",
    color: "hover:text-gray-500 hover:border-gray-500",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/do-huy-294353354/",
    color: "hover:text-blue-400 hover:border-blue-400",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    url: "https://instagram.com",
    color: "hover:text-pink-400 hover:border-pink-400",
  },
  {
    icon: SiGmail,
    label: "Email",
    url: "mailto:giahuydo705@gmail.com",
    color: "hover:text-red-400 hover:border-red-400",
  },
];