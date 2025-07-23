import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, main, techStack, image, demoLink, sourceLink }) => {
  return (
    <div className="p-4 md:p-6 w-full max-w-[380px] h-full bg-[#0c0e19] rounded-2xl shadow-md hover:shadow-2xl shadow-slate-900 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] flex flex-col">
      <img
        className="rounded-xl object-cover w-full h-48 mb-4"
        src={image}
        alt="project"
      />
      <h3 className="px-2 text-xl md:text-2xl font-semibold text-white">
        {title}
      </h3>
      <ul className="px-2 text-sm text-gray-300 mt-2 leading-relaxed list-disc list-inside">
        {main.map((point, index) => (
          <li key={index} className="mb-1">{point}</li>
        ))}
      </ul>
      <p className="px-2 text-sm text-gray-400 mt-2">
        <span className="font-semibold text-white">Tech Stack:</span> {techStack.join(", ")}
      </p>

      <div className="flex-grow"></div>

      <div className="flex gap-3 mt-6 px-2">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
          >
            <FaExternalLinkAlt className="text-sm" />
            Demo
          </a>
        )}
        {sourceLink && (
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
          >
            <FaGithub className="text-base" />
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};


export default ProjectCard;
