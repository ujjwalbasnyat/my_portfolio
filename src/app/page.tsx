'use client'
// import EducationExperience from "@/components/edu";
import Hero from "@/components/hero";
import ToolKit from "@/components/toolkit";
import About from "./about/page";
import Connect from "@/components/connect";
import SubNav from "@/components/subnav";

const Home = () => {

  return (
    <div>
      <SubNav />
      <div className="px-10 flex flex-col gap-20">
        <Hero />
        <About />
          <ToolKit />
        <Connect />
        <div></div>
      </div>
    </div>
  );
}

export default Home;
