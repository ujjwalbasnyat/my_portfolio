'use client'
import Hero from "@/components/hero";
import ToolKit from "@/components/toolkit";
import SubNav from "@/components/subnav";
import About from "@/components/about";

const Home = () => {

  return (
    <div>
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
