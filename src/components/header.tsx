'use client'
import React, { useState } from "react";
import Link from "next/link";
import Nav from "./nav";
import MobileNav from "./mobilenav";


const Header = () => {
  const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "work",
        path: "/projects/work"
    },
    {
        name: "resume",
        path: "/projects/resume"
    },
    {
        name: "contact",
        path: "/projects/contact"
    },
]

  return (
    <nav className=" py-5 px-10 bg-background bg-opacity-50  backdrop-blur-lg flex justify-between items-center">
      <Link href="/" className="font-bold text-white text-2xl">Ujjwal <span>.</span></Link>
      <div className="hidden xl:flex items-center gap-8 ">
      <Nav links={links}/>
      <Link href="/projects/contact"><button className="px-4 py-3 bg-accent rounded-md text-background">Hire me</button></Link>
      </div>
      
      <div className="xl:hidden">
        <MobileNav links={links} />
      </div>
    </nav>
  );
};

export default Header;
