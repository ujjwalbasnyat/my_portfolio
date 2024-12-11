import Link from 'next/link'
import React from 'react'

const About = () => {
 
  return (
   <div className='flex flex-col items-center gap-2'>
    <div className="flex items-center justify-center font-bold text-xl sm:text-2xl md:text-3xl lg:col-span-2 text-center p-4">
      About Me
    </div>
     <div className=''>
        I&apos;m a Web Developer and Aspiring Data Scientist with a passion for creating clean, user-friendly digital experiences. I specialize in frontend development, interactive designs, and responsive websites, and I&apos;m equally fascinated by the power of data science to solve real-world problems.
        Currently, I&apos;m pursuing a Bachelor&apos;s degree in Mathematics, where I&apos;m honing my skills in both web technologies and data analysis. My journey in tech is driven by curiosity and a desire to combine creativity with data-driven insights to deliver impactful solutions.
        When I&apos;m not coding or analyzing datasets, you&apos;ll find me exploring nature trails.<br/>
        <Link href="" className='font-semibold'>Let&apos;s work together to create something amazing!</Link><br/>
        <button className="rounded-full bg-none py-2 px-6 sm:py-3 sm:px-8 mt-4 text-sm sm:text-base md:text-lg">
  Contact Me
</button>
    </div>
   </div>
  )
}

export default About