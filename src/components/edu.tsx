import { Education } from '@/app/data'
import Link from 'next/link';
import React from 'react'


const EducationExperience = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6">
  {/* Title Section */}
  <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:col-span-2 text-center p-4">
    Education
  </div>

  {/* Education Section */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
    {Education.map((edu, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 w-full"
      >
        <div className="font-bold text-xl">{edu.level}</div>
        <Link href={edu.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-lg">
          {edu.institution}
        </Link>
        <div className="text-gray-500">{edu.address}</div>
      </div>
    ))}
  </div>
</div>

      

      );
      
}

export default EducationExperience