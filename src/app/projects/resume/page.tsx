'use client'
import Aboutme from '@/components/aboutme';
import Blog from '@/components/blog';
import Education from '@/components/education';
import Skills from '@/components/skills';
import  { useState } from 'react'


const Resume = () => {

  const [activeTab, setActiveTab] = useState<"skills" | "education" | "aboutme" | "blog">("skills");

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
    if(activeTab === "blog"){
      return <Blog/>
    }
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-[1fr_2fr]  items-top gap-20  p-5 xl:p-20 '>
      <div className='grid grid-cols-4 xl:grid-cols-1 gap-4   h-10 xl:h-32'>
          <button className={`${activeTab === "skills"  ? "bg-white text-black" : ""} text-center  rounded-md xl:rounded-none xl:py-4 xl:px-10    hover:text-white`} onClick={() => setActiveTab("skills")}> My Skills</button>
          <button className={`${activeTab === "education"  ? "bg-white text-black" : ""} text-center  rounded-md xl:rounded-none xl:py-4 xl:px-10  hover:text-white`} onClick={() => setActiveTab("education")}>Education</button>
          <button className={`${activeTab === "aboutme"  ? "bg-white text-black" : ""}  text-center rounded-md xl:rounded-none xl:py-4 xl:px-10  hover:text-white `} onClick={() => setActiveTab("aboutme")}>About Me</button>
          <button className={`${activeTab === "blog"  ? "bg-white text-black" : ""}  text-center rounded-md xl:rounded-none xl:py-4 xl:px-10  hover:text-white `} onClick={() => setActiveTab("blog")}>Blog</button>
      </div>
      <div className=''>
        {renderComponent()}
      </div>
    </div>
  )
}

export default Resume