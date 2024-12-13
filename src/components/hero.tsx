import React from 'react'
import Image from 'next/image'
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import Link from 'next/link';




const Hero = () => {
  
 return (
  <div className='flex flex-col items-center justify-center p-10 gap-5'>
    <div className='flex flex-col items-center justify-center p-5'>
      <Image
        src="/ujjwalsingh.jpg"
        width={150}
        height={150}
        alt='profile'
        className='rounded-full'
      />
      <div className='flex flex-col items-center text-primary'>
        <div className='text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
          Web Developer
        </div>
        
          <h2
           
            className='text-center text-3xl sm:text-2xl md:text-3xl lg:text-4xl'
          >
            Hi! I&apos;m Ujjwal Singh Basnet
          </h2>
        
        <div className='text-center lg:w-[60%] w-full'>
        I&apos;m committed to creating user-centric websites. I leverage modern tools to build clean and efficient digital experiences. My goal is to combine functionality with aesthetics to deliver solutions that leave a lasting impression.
        </div>
      </div>
    </div>
    <Link href="/projects/work">
    <button className='bg-btn-bg text-btn-text px-6 py-3 rounded-full flex items-center gap-3 hover:bg-btn-hover'>
      <div className='text-sm sm:text-base md:text-lg flex items-center gap-3'>View Work <LiaExternalLinkAltSolid size={24}/> </div>
    </button></Link>
  </div>
);

}

export default Hero