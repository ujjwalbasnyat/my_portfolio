'use client'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Connect = () => {
    return (
        <div className="flex flex-col items-center">
          <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center p-4">
            Let&apos;s Connect
          </div>
    
          <div className="bg-white grid shadow-md rounded-lg p-6 hover:shadow-lg w-full sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]">
            <div className="flex items-center justify-center gap-6 mb-6">
              <Link href="https://www.linkedin.com/in/ujjwal-basnet-50b024330/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} />
              </Link>
              <Link href="https://github.com/ujjwalbasnyat" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} />
              </Link>
            </div>
    
            <div className="text-center space-y-3">
              <div className="font-semibold text-lg">Ph. +977 9840267930</div>
    
              <div>
                <Link
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold"
                >
                  Email. asujjwalbasnyat@gmail.com
                </Link>
              </div>
    
              <div>
                <Link
                  href="https://ujjwalsinghbasnet.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-lg"
                >
                  Website. ujjwalsinghbasnet.com.np
                </Link>
              </div>
              <div className='flex flex-col gap-2'>
              <div>I&apos;m also available at</div>
              <div className='flex gap-2 items-center justify-center'>
                <Link href="https://www.facebook.com/uzal.basnet.969" target="_blank" rel="noopener noreferrer"><FaFacebook size={30}/></Link>
                <Link href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30}/></Link>
                <Link href="https://www.instagram.com/uzolify.io/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30}/></Link>
              </div>
              </div>
            </div>
            
          </div>

          
        </div>
      );
}

export default Connect