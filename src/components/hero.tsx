import React from 'react'
import Image from 'next/image'
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import Link from 'next/link';
import { intro } from '@/app/data';




const Hero = () => {
  
 return (
  <div className='grid grid-cols-1 xl:grid-cols-[1fr_auto] items-center justify-center p-5 xl:p-10 '>
    <div className='xl:w-[50%] flex flex-col justify-center items-center xl:justify-start xl:items-start  gap-4 '>
    <Image
        src="/UjjwalSingh.png"
        width={150}
        height={150}
        alt='profile'
        className='rounded-full sm:hidden '
      />
      <div className='font-bold  text-xl xl:text-3xl text-center xl:text-left'>{intro.title}</div>
    <Link href="/projects/work">
    <button className='bg-btn-bg text-btn-text px-6 py-3 rounded-full gap-3  hover:bg-btn-hover'>
      <div className='text-sm sm:text-base md:text-lg flex items-center gap-3'>View Work <LiaExternalLinkAltSolid size={24}/> </div>
    </button></Link>
    </div>
    <Image
        src="/UjjwalSingh.png"
        width={250}
        height={250}
        alt='profile'
        className='rounded-full sm:block hidden  '
      />
    
  </div>
);

}

export default Hero