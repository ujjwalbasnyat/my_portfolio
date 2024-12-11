import React from 'react'
import { RiNextjsLine, RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";
import { FaGitAlt, FaGithub, FaPython } from "react-icons/fa";

interface ToolKitProps {
  size: number;  // Define 'size' prop as a number
}

const ToolKit: React.FC<ToolKitProps> = ({size}) => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center justify-center py-5'>
          <div className="relative group inline-flex items-center justify-center space-x-2 p-2 transition-all duration-300 transform hover:scale-105 ">
            <span className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Nextjs
            </span>
            <RiNextjsLine size={size} />
          </div>
          <div className="relative group inline-flex items-center justify-center space-x-2 p-2 lg:border-l-[2px] transition-all duration-300 transform hover:scale-105">
            <span className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Tailwind
            </span>
            <RiTailwindCssFill size={size} />
          </div>
          <div className="relative group inline-flex items-center justify-center space-x-2 p-2 lg:border-l-[2px] transition-all duration-300 transform hover:scale-105">
            <span className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Reactjs
            </span>
            <RiReactjsLine size={size} />
          </div>
          <div className="relative group inline-flex items-center justify-center space-x-2 p-2 lg:border-l-[2px] transition-all duration-300 transform hover:scale-105">
            <span className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Python
            </span>
            <FaPython size={size} />
          </div>
          <div className="relative group inline-flex items-center justify-center space-x-2 p-2 lg:border-l-[2px] transition-all duration-300 transform hover:scale-105">
            <span className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Git
            </span>
            <FaGitAlt size={size} />
          </div>
          <div className="relative group inline-flex items-center justify-center space-x-2 p-2 lg:border-l-[2px] transition-all duration-300 transform hover:scale-105">
            <span className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Github
            </span>
            <FaGithub size={size} />
          </div>
        </div>
      );
      
}

export default ToolKit