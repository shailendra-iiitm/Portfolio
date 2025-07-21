import React from "react";
import avatarImg from "../../assets/heroImage.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20 min-h-screen relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-80 h-80 bg-gradient-to-r from-[#465697] to-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-float"></div>
        <div className="absolute -bottom-8 -right-4 w-80 h-80 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-[#5a6bb8] rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-float delay-500"></div>
        
        {/* Premium floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-float delay-200"></div>
        <div className="absolute top-60 right-40 w-1 h-1 bg-[#465697]/40 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-40 left-60 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-float delay-1200"></div>
      </div>
      
      <div className="md:w-2/4 md:pt-10 order-2 md:order-1 relative z-10 animate-fadeInLeft">
        {/* Enhanced title with premium typography */}
        <div className="relative mb-6">
          <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter animate-slideDown relative">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              <TextChange />
            </span>
          </h1>
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-[#465697] to-purple-500 rounded-full animate-fadeInUp delay-500"></div>
        </div>
        
        <p className="text-sm md:text-2xl tracking-tight mt-6 animate-fadeInUp opacity-90 hover:opacity-100 transition-opacity duration-300 font-light text-gray-300">
          <span className="text-[#6d8bff] font-medium">IIITian</span> | Aspiring <span className="text-[#6d8bff] font-medium">Software Development Engineer</span>
        </p>
        
        {/* Premium button design */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12 animate-fadeInUp delay-300">
          <button
            className="group relative text-white py-3 px-8 text-sm md:text-lg md:py-4 md:px-10 font-semibold rounded-2xl bg-gradient-to-r from-[#465697] via-[#5a6bb8] to-[#6d8bff] hover:from-[#6d8bff] hover:via-[#5a6bb8] hover:to-[#465697] duration-500 transform hover:scale-105 hover:-translate-y-2 transition-all shadow-xl hover:shadow-2xl hover:shadow-[#465697]/40 overflow-hidden"
            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative flex items-center gap-3">
              <span>Contact Me</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300 text-lg">→</span>
            </span>
          </button>
          
          <button
            className="group relative text-[#465697] border-2 border-[#465697]/60 py-3 px-8 text-sm md:text-lg md:py-4 md:px-10 hover:bg-[#465697] hover:text-white hover:border-[#465697] duration-500 transform hover:scale-105 hover:-translate-y-2 font-semibold rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:shadow-[#465697]/40 backdrop-blur-md bg-white/5 hover:bg-[#465697]/90 overflow-hidden"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf';
              link.download = 'Shailendra_Shukla_Resume.pdf';
              link.click();
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#465697]/0 via-[#465697]/20 to-[#465697]/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative flex items-center gap-3">
              <span className="group-hover:rotate-12 transition-transform duration-300 text-lg">📄</span>
              <span>Download Resume</span>
            </span>
          </button>
        </div>
      </div>
      
      {/* Premium image design */}
      <div className="order-1 md:order-2 mb-8 md:mb-0 relative z-10 animate-fadeInRight md:-ml-48">
        <div className="relative group">
          {/* Multiple layered glows for premium effect */}
          <div className="absolute -inset-8 bg-gradient-to-r from-[#465697] via-purple-500 to-[#5a6bb8] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
          <div className="absolute -inset-6 bg-gradient-to-r from-purple-400 via-blue-400 to-[#6d8bff] rounded-full blur-xl opacity-15 group-hover:opacity-30 transition-opacity duration-700 animate-pulse delay-300"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-white via-[#465697] to-white rounded-full blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-700 animate-pulse delay-500"></div>
          
          {/* Static premium image container (no rotation) */}
          <div className="relative rounded-full p-1 bg-gradient-to-tr from-[#465697] via-purple-500 to-[#6d8bff]">
            <div className="rounded-full p-2 bg-gradient-to-br from-gray-900 to-black">
              <img 
                className="relative w-[280px] h-[280px] rounded-full md:w-[500px] md:h-[500px] object-cover shadow-2xl shadow-[#465697]/50 hover:shadow-[#465697]/70 transform hover:scale-105 transition-all duration-700 border-2 border-white/10 hover:border-white/20" 
                src={avatarImg} 
                alt="Shailendra Shukla"
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </div>
          
          {/* Premium overlay effects */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-white/15 hover:from-white/5 hover:via-white/10 hover:to-white/25 transition-all duration-700 pointer-events-none"></div>
          
          {/* Floating accent dots around image */}
          <div className="absolute -top-4 -right-4 w-3 h-3 bg-gradient-to-r from-[#465697] to-purple-500 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute -bottom-6 -left-6 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse delay-500 opacity-50"></div>
          <div className="absolute top-8 -left-8 w-1.5 h-1.5 bg-gradient-to-r from-blue-300 to-[#6d8bff] rounded-full animate-pulse delay-1000 opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;