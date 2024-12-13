import Link from 'next/link'
import React from 'react'
import { MdOutlineCloudDownload } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { about } from '../data';

const About = () => {
 
  return (
   <div className='flex flex-col items-center gap-2'>
    <div className="flex items-center justify-center font-bold text-xl sm:text-2xl md:text-3xl lg:col-span-2 text-center p-4">
      About Me
    </div>
     <div className=' flex flex-col items-center '>
        <div>{about.description}</div>
        <div className='flex flex-col lg:flex-row  items-center justify-center lg:gap-4'>
        <Link href="/projects/contact"><button className="flex items-center gap-2 rounded-full bg-none py-2 px-6 sm:py-3 sm:px-8 mt-4 text-sm sm:text-base md:text-lg">Contact Me <FaPhoneAlt/></button></Link>
       <Link href="#"><button className="flex items-center  gap-2  rounded-full bg-none py-2 px-6 sm:py-3 sm:px-8 mt-4 text-sm sm:text-base md:text-lg">Download CV <MdOutlineCloudDownload/></button></Link>
        </div>
    </div>
   </div>
  )
}

export default About