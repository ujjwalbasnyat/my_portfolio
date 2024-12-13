'use client'
import Hero from "@/components/hero";
import ToolKit from "@/components/toolkit";
import About from "./about/page";
import SubNav from "@/components/subnav";

const Home = () => {

  return (
    <div className="">
      <SubNav />
      <div className="flex flex-col gap-20">
        <Hero />
        <ToolKit />
        <About />
          
      </div>
    </div>
  );
}

export default Home;
