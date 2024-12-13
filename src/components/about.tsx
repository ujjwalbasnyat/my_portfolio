import { about } from '@/app/data'
import Link from 'next/link'

const About = () => {
 
  return (
   <div className='flex flex-col items-center gap-2  p-5 xl:px-10 xl:py-5 '>
    <div className="text-xl sm:text-2xl md:text-3xl lg:col-span-2 text-center p-4">
      {about.title}
    </div>
     <div className=''>
        <div className='text-xl xl:text-2xl font-light'>{about.description}</div>
        <div className='flex   items-center justify-center gap-4'>
        <Link href="/projects/contact"><button className="flex items-center gap-2 rounded-full bg-none py-2 px-6 sm:py-3 sm:px-8 mt-4 text-sm sm:text-base md:text-lg">Contact Me </button></Link>
       <Link href="#"><button className="flex items-center  gap-2  rounded-full bg-none py-2 px-6 sm:py-3 sm:px-8 mt-4 text-sm sm:text-base md:text-lg">Download CV </button></Link>
        </div>
    </div>
   </div>
  )
}

export default About