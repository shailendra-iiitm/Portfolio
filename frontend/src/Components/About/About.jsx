import React from "react";
import AboutImg from "../../assets/chatGpt.png";
import { FaCode, FaServer, FaMicrochip } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="About"
      className="text-white relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-[#465697] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float delay-1000"></div>
      </div>
      
      <div className="glass-effect rounded-2xl shadow-2xl mx-0 md:mx-20 p-8 md:p-12 relative z-10 border border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center gradient-text animate-fadeInUp">
            About Me
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto animate-fadeInUp delay-300">
            Passionate about creating innovative solutions through technology and continuous learning
          </p>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
            {/* Image Container */}
            <div className="w-full md:w-auto flex justify-center animate-fadeInLeft">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#465697] to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img 
                  className="relative h-64 md:h-80 rounded-2xl object-contain hover:scale-105 transition-transform duration-500 border border-white/10"
                  src={AboutImg} 
                  alt="About" 
                />
              </div>
            </div>
            
            {/* Skills Container */}
            <div className="flex-1 space-y-8 animate-fadeInRight">
              {[
                {
                  Icon: FaCode,
                  title: "FullStack Developer",
                  description: "Passionate about building scalable and efficient web applications with React, Node.js, and Express. Experienced in creating responsive UIs, REST APIs, and database architecture. Currently exploring AI, IoT, and Deep Learning to broaden technical impact and innovation."
                },
                {
                  Icon: FaServer,
                  title: "C++ Developer", 
                  description: "Proficient in C++ programming with strong foundation in data structures, algorithms, and object-oriented programming. Experienced in system-level programming, performance optimization, and developing efficient solutions for complex computational problems."
                },
                {
                  Icon: FaMicrochip,
                  title: "AI & Deep Learning Enthusiast",
                  description: "Actively exploring Artificial Intelligence, Deep Learning, and IoT technologies. Completed certifications in AI from IIT Guwahati and Deep Learning from IIT Kharagpur. Working on AI-powered applications like ScribbleNSense for visual math problem solving."
                }
              ].map(({ Icon, title, description }, index) => (
                <div 
                  key={title}
                  className="group flex gap-6 items-start p-6 rounded-xl glass-effect hover:bg-white/5 transition-all duration-500 transform hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${(index + 2) * 200}ms` }}
                >
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-[#465697] to-[#5a6bb8] rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-[#5a6bb8] transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;