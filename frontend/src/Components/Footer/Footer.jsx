import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0c0e19] text-white py-12 px-6 md:px-24 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Let's Connect</h2>
            <p className="text-gray-400 max-w-md">
              Interested in working together or have questions? Feel free to reach out!
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex flex-col gap-2 mb-6">
              <a 
                href="mailto:shailendra.iiitsm@gmail.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <MdOutlineEmail className="text-blue-400" size={20} />
                shailendra.iiitsm@gmail.com
              </a>
              <a 
                href="tel:+918604434817" 
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                +91 86044 34817
              </a>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/shailendra-shukla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-[#1a1d2e] rounded-full text-gray-300 hover:text-blue-400 hover:bg-[#252a3d] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a 
                href="https://github.com/shailendra-iiitm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-[#1a1d2e] rounded-full text-gray-300 hover:text-blue-400 hover:bg-[#252a3d] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://x.com/SHAILENDRA86156" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-[#1a1d2e] rounded-full text-gray-300 hover:text-blue-400 hover:bg-[#252a3d] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a 
                href="https://instagram.com/shailendra.shukla.1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-[#1a1d2e] rounded-full text-gray-300 hover:text-blue-400 hover:bg-[#252a3d] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Shailendra Shukla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;