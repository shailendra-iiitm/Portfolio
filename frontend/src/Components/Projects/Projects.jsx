import React from "react";
import ProjectCard from "./ProjectCard";
import GuidelyImg from "../../assets/Guidely.jpg";
import scribbleNSenseImg from "../../assets/scribbleNsense.jpg";
import blogImg from "../../assets/image.png";

const projectData = [
  {
    title: "Guidely ",
    main: [
      "A Full-Stack Mentorship Platform",
      "Scalable mentorship platform connecting guides with learners",
      "Built with React (Vite), Tailwind CSS, and Node.js (Express)",
      "Role-based authentication and authorization system",
      "Real-time booking logic and availability management",
      "Session scheduling and secure sign-up/sign-in",
      "Razorpay integration for seamless payment processing",
      "Dynamic dashboards for guides and learners",
      "Protected routes and session tokens for security",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "JWT Auth"],
    image: GuidelyImg,
    demoLink: "https://guidely-edu.vercel.app",
    sourceLink: "https://github.com/shailendra-iiitm/Guidely",
  },
  {
    title: "ScribbleNSense",
    main: [
      "AI-powered visual and math problem solver",
      "React (Vite) frontend with FastAPI backend",
      "Processes handwritten input from HTML canvas",
      "Gemini Vision API for content extraction and classification",
      "MathJax for rendering LaTeX-based expressions",
      "Draggable component-based UI for step-wise solutions",
      "CORS handling, async I/O, and REST API routing",
      "PIL for image decoding with OpenCV preprocessing plans",
    ],
    techStack: ["React", "FastAPI", "Gemini Vision API", "MathJax", "PIL", "OpenCV"],
    image: scribbleNSenseImg,
    demoLink: "https://scribble-n-sense.vercel.app",
    sourceLink: "https://github.com/shailendra-iiitm/scribbleNsense",
  }
];

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#465697] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float delay-1000"></div>
      </div>
      
      <div className="relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 gradient-text animate-fadeInUp">
          Featured Projects
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto animate-fadeInUp delay-300">
          A showcase of my latest work in full-stack development, AI integration, and research projects
        </p>
        
        <div className="py-12 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center max-w-7xl mx-auto">
          {projectData.map((project, index) => (
            <div 
              key={index}
              className="animate-fadeInUp hover-glow w-full flex justify-center"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard
                title={project.title}
                main={project.main}
                techStack={project.techStack}
                image={project.image}
                demoLink={project.demoLink}
                sourceLink={project.sourceLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
