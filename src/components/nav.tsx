'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';




const Nav = ({links}) => {
    const pathname= usePathname()
  return (
    <div className='flex flex-col  sm:flex-row gap-8'>
        {links.map((link, index)=>{
            return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize transition-all`}>{link.name}</Link>
        })}
    </div>
  )
}

export default Nav