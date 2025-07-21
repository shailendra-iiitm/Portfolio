import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaPython, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiCplusplus, SiTailwindcss, SiExpress, SiPostman, SiMysql, SiVercel, SiRender, SiArduino, SiShell, SiGit } from "react-icons/si";
import { MdLaptopMac, MdCode } from "react-icons/md";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#465697] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10">
        <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-4 gradient-text animate-fadeInUp">
          Skills & Experience
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto animate-fadeInUp delay-300">
          My technical expertise and professional journey across various domains
        </p>
        
        <div className="flex flex-wrap items-start justify-around">
          <div className="md:w-2/5 py-10">
            {/* Programming Languages */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-white mb-6 text-center gradient-text">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {[
                  { Icon: SiCplusplus, color: "#00599C", name: "C/C++" },
                  { Icon: FaJs, color: "#F7DF1E", name: "JavaScript (ES6+)" },
                  { Icon: FaPython, color: "#3776AB", name: "Python" },
                  { Icon: SiMysql, color: "#4479A1", name: "SQL" },
                ].map(({ Icon, color, name }, index) => (
                  <div 
                    key={name}
                    className="group p-4 bg-zinc-950/80 backdrop-blur-sm flex flex-col items-center rounded-2xl hover:bg-zinc-900 transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                    title={name}
                  >
                    <Icon 
                      color={color} 
                      size={50} 
                      className="group-hover:scale-110 transition-transform duration-300 mb-2"
                    />
                    <span className="text-sm text-white text-center font-medium mt-1 group-hover:text-[#6d8bff] transition-colors duration-300">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Web & Frameworks */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-white mb-6 text-center gradient-text">
                Web & Frameworks
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {[
                  { Icon: FaReact, color: "#61DAFB", name: "React" },
                  { Icon: FaNodeJs, color: "#339933", name: "Node.js" },
                  { Icon: SiExpress, color: "#ffffff", name: "Express.js" },
                  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
                  { Icon: FaHtml5, color: "#E34F26", name: "HTML5" },
                  { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
                ].map(({ Icon, color, name }, index) => (
                  <div 
                    key={name}
                    className="group p-4 bg-zinc-950/80 backdrop-blur-sm flex flex-col items-center rounded-2xl hover:bg-zinc-900 transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer animate-fadeInUp"
                    style={{ animationDelay: `${(index + 4) * 100}ms` }}
                    title={name}
                  >
                    <Icon 
                      color={color} 
                      size={50} 
                      className="group-hover:scale-110 transition-transform duration-300 mb-2"
                    />
                    <span className="text-sm text-white text-center font-medium mt-1 group-hover:text-[#6d8bff] transition-colors duration-300">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & DevOps */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-white mb-6 text-center gradient-text">
                Tools & DevOps
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {[
                  { Icon: SiGit, color: "#F05032", name: "Git" },
                  { Icon: FaGithub, color: "#ffffff", name: "GitHub" },
                  { Icon: SiPostman, color: "#FF6C37", name: "Postman" },
                  { Icon: MdCode, color: "#007ACC", name: "VS Code" },
                  { Icon: SiShell, color: "#89E051", name: "Shell Scripting" },
                  { Icon: SiRender, color: "#46E3B7", name: "Render" },
                  { Icon: SiVercel, color: "#ffffff", name: "Vercel" },
                  { Icon: SiArduino, color: "#00979D", name: "Arduino" }
                ].map(({ Icon, color, name }, index) => (
                  <div 
                    key={name}
                    className="group p-4 bg-zinc-950/80 backdrop-blur-sm flex flex-col items-center rounded-2xl hover:bg-zinc-900 transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer animate-fadeInUp"
                    style={{ animationDelay: `${(index + 10) * 100}ms` }}
                    title={name}
                  >
                    <Icon 
                      color={color} 
                      size={50} 
                      className="group-hover:scale-110 transition-transform duration-300 mb-2"
                    />
                    <span className="text-sm text-white text-center font-medium mt-1 group-hover:text-[#6d8bff] transition-colors duration-300">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {[
              {
                icon: MdLaptopMac,
                color: "#ffffff",
                title: "Full Stack Web Development Intern - Zidio Development",
                period: "Present",
                tasks: [
                  "Building Excel Analytics Application with React and Node.js",
                  "Developing full-stack blogging website with modern UI/UX",
                  "Implementing data visualization and analytics features",
                  "Working with team on scalable web applications",
                  "Backend API development and database integration"
                ]
              },
              {
                icon: FaReact,
                color: "#61DAFB",
                title: "Web Development Intern - PW Skills",
                period: "Present",
                tasks: [
                  "Developed TummySmiles - Food Donation System",
                  "Full-stack application with React, Node.js, MongoDB",
                  "Implemented JWT authentication and role-based access",
                  "Real-time tracking with geo-tagging features",
                  "Admin dashboard with analytics and user management"
                ]
              },
              {
                icon: MdLaptopMac,
                color: "#ffffff",
                title: "Summer Research Intern - IIT Ropar",
                period: "June 2024 - July 2024",
                tasks: [
                  "Developed advanced MAC protocols for Next Gen Wireless Communication",
                  "Engineered CSMA/CA-based protocol with enhanced collision handling",
                  "Conducted BER performance evaluations using C++ and MATLAB"
                ]
              }
            ].map(({ icon: IconComponent, color, title, period, tasks }, index) => (
              <div 
                key={title}
                className="group flex gap-6 glass-effect rounded-xl p-6 hover:bg-slate-950/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInRight"
                style={{ animationDelay: `${(index + 7) * 150}ms` }}
              >
                <div className="flex-shrink-0">
                  <IconComponent 
                    color={color} 
                    size={50} 
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-white">
                  <h2 className="text-lg font-semibold leading-tight mb-1 group-hover:text-[#5a6bb8] transition-colors duration-300">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-3 font-thin">
                    {period}
                  </p>
                  <ul className="text-sm space-y-1">
                    {tasks.map((task, taskIndex) => (
                      <li 
                        key={taskIndex}
                        className="flex items-start gap-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                      >
                        <span className="text-[#465697] mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
