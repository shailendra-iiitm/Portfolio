import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import ResumeViewer from "../ResumeViewer/ResumeViewer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#0f0f1a] to-[#1a1a2e] fixed top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 md:px-12 flex justify-between items-center">
        {/* Logo/Brand */}
        <a href="https://www.linkedin.com/in/shailendra-shukla/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#465697] to-[#6d8bff] tracking-wide hover:scale-105 transition-transform duration-300">
            Shailendra Shukla
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#About" 
            className="text-white hover:text-[#6d8bff] transition-all duration-300 font-medium relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6d8bff] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#Experience" 
            className="text-white hover:text-[#6d8bff] transition-all duration-300 font-medium relative group"
          >
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6d8bff] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#Projects" 
            className="text-white hover:text-[#6d8bff] transition-all duration-300 font-medium relative group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6d8bff] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#contact" 
            className="text-white hover:text-[#6d8bff] transition-all duration-300 font-medium relative group"
          >
            Get in Touch
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6d8bff] transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          {/* Resume Button */}
          <button
            className="group bg-gradient-to-r from-[#465697] to-[#6d8bff] text-white px-4 py-2 rounded-full font-semibold hover:from-[#6d8bff] hover:to-[#465697] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => setIsResumeOpen(true)}
            title="View Resume"
          >
            <span className="flex items-center gap-2">
              <span className="group-hover:rotate-12 transition-transform duration-300">📄</span>
              <span>Resume</span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiCloseLine size={28} className="text-[#6d8bff] hover:rotate-90 transition-all duration-300" />
          ) : (
            <RiMenu2Line size={28} className="hover:rotate-180 transition-all duration-300" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden absolute top-16 left-0 right-0 bg-[#1a1a2e] shadow-xl transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
        >
          <div className="px-6 py-4 space-y-4">
            <a 
              href="#About" 
              className="block text-white hover:text-[#6d8bff] transition-all duration-300 font-medium py-2 border-b border-[#2d2d42]"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#Experience" 
              className="block text-white hover:text-[#6d8bff] transition-all duration-300 font-medium py-2 border-b border-[#2d2d42]"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#Projects" 
              className="block text-white hover:text-[#6d8bff] transition-all duration-300 font-medium py-2 border-b border-[#2d2d42]"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="block text-white hover:text-[#6d8bff] transition-all duration-300 font-medium py-2 border-b border-[#2d2d42]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            
            {/* Mobile Resume Button */}
            <button
              className="w-full mt-4 bg-gradient-to-r from-[#465697] to-[#6d8bff] text-white px-4 py-3 rounded-lg font-semibold hover:from-[#6d8bff] hover:to-[#465697] transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => {
                setIsResumeOpen(true);
                setIsOpen(false);
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <span>📄</span>
                <span>View Resume</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Resume Viewer Modal */}
      <ResumeViewer 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;