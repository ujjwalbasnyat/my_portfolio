import Link from 'next/link'

function SubNav() {
    return (
        <div className='flex items-center justify-between sticky top-0 flex justify-end items-center p-4 bg-slate-100 bg-opacity-50 backdrop-blur-lg sm:mt-0 z-20'>
          <Link href="/" className='font-bold text-xl'>Ujjwal S. Basnet</Link>
          <div>
          <Link href="https://www.linkedin.com/in/ujjwal-basnet-50b024330/" target="_blank" rel="noopener noreferrer" className='pr-2'>Linkedin</Link>
          <span>/</span>
          <Link href="https://github.com/ujjwalbasnyat" target="_blank" rel="noopener noreferrer" className='pl-2'>Github</Link>
          </div>
        </div>
      );
}

export default SubNav