import { works } from '@/app/data'
import React from 'react'
import Image from "next/image"

const Work = () => {
  return (
    <div className='py-10 px-20 grid grid-cols-1 gap-2'>
      <div className='font-bold text-2xl'>{works.title}</div>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
        {works.items.map((work, index)=>(
          <div key={index} className='hover:bg-hoverBg p-5 bg-border grid grid-cols-1 xl:grid-cols-[1fr_2fr] rounded-xl gap-5 cursor-pointer'> 
            <Image src={work.src} alt={work.alt} width={200} height={200}   className='  p-1 rounded-md'/>
            <div className='grid grid-cols-1 '>
            <div>
            <div className='font-bold text-xl'>{work.siteName}</div>
            <div className='font-thin text-accent'>{work.subtitle}</div>
            </div>
            <div>{work.description}</div>
            <ul className='font-light flex gap-4 mt-2'>
              <li>{work.language}</li>
              <li>{work.style}</li></ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work