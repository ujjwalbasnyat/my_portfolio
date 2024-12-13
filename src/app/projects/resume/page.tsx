'use client'
import Aboutme from '@/components/aboutme';
import Education from '@/components/education';
import Skills from '@/components/skills';
import  { useState } from 'react'


const Resume = () => {

  const [activeTab, setActiveTab] = useState<"skills" | "education" | "aboutme">("skills");

  const renderComponent = () => {
    if(activeTab === "skills"){
      return <Skills/>
    }
    if(activeTab === "education"){
      return <Education/>
    }
    if(activeTab === "aboutme"){
      return <Aboutme/>
    }
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-[1fr_2fr]  items-top gap-20  p-20 xl:h-screen'>
      <div className='grid grid-cols-3 xl:grid-cols-1 gap-4  h-10 xl:h-32'>
          <button className={`${activeTab === "skills"  ? "bg-white text-black" : ""} text-center rounded-md xl:rounded-none xl:py-4 xl:px-10   hover:text-white`} onClick={() => setActiveTab("skills")}> My Skills</button>
          <button className={`${activeTab === "education"  ? "bg-white text-black" : ""} text-center rounded-md xl:rounded-none xl:py-4 xl:px-10  hover:text-white`} onClick={() => setActiveTab("education")}>Education</button>
          <button className={`${activeTab === "aboutme"  ? "bg-white text-black" : ""}  text-center rounded-md xl:rounded-none xl:py-4 xl:px-10  hover:text-white `} onClick={() => setActiveTab("aboutme")}>About Me</button>
      </div>
      <div className=''>
        {renderComponent()}
      </div>
    </div>
  )
}

export default Resume