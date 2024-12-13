import { socials } from "@/app/data"
import Link from "next/link"


const Footer = () => {
  return (
    
      <div className=' py-2 px-10 gap-2 bg-border flex flex-col xl:flex-row  items-center justify-between'>
        <div className="block sm:block hidden">&copy; {new Date().getFullYear()} Ujjwal Singh Basnet. All rights reserved.</div>
        <div className="flex gap-5 text-2xl  ">
          {socials.map((social,index)=>(
            <Link href={social.link} key={index} target="_blank" rel="noopener noreferrer">{social.icon}</Link>
          ))}
        </div>
        <div className="block xl:hidden">&copy; {new Date().getFullYear()} Ujjwal Singh Basnet. All rights reserved.</div>
      </div>
  )
}

export default Footer