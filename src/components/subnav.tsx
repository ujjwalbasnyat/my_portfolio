import Link from 'next/link'
import React from 'react'


function SubNav() {
    return (
        <div className='sticky top-0 flex justify-end items-center p-4 bg-slate-100 bg-opacity-50 backdrop-blur-lg sm:mt-0 z-20'>
          <Link href="https://www.linkedin.com/in/ujjwal-basnet-50b024330/" target="_blank" rel="noopener noreferrer" className='pr-2'>
            
              Linkedin
          </Link>
          <span>/</span>
          <Link href="https://github.com/ujjwalbasnyat" target="_blank" rel="noopener noreferrer" className='pl-2'>
            
              Github
          </Link>
        </div>
      );
}

export default SubNav