'use client'

import EducationExperience from "@/components/edu";
import Hero from "@/components/hero";
import ToolKit from "@/components/toolkit";
import About from "./about/page";
import Connect from "@/components/connect";
import SubNav from "@/components/subnav";



const Home = () => {

  return (
    <div>
      <SubNav />
      <div className="px-10 flex flex-col gap-10">
        <Hero />
        <About />
        <div>
          <div className="flex items-center justify-center font-bold text-xl sm:text-2xl md:text-3xl lg:col-span-2 text-center p-4">
            Technical Proficiencies
          </div>
          <ToolKit size={100} />
        </div>
        <EducationExperience />
        <Connect  />
        <div></div>
      </div>
    </div>
  );
}

export default Home;
