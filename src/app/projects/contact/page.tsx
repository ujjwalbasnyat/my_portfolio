import { contact } from '@/app/data'
import React from 'react'

const Contact = () => {
  return (
    <div className='p-5   xl:px-20 xl:py-10 grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10 items-center'>
      <div className='bg-border p-10 rounded-md'>
      <div className='text-3xl font-bold text-accent text-center xl:text-left'>{contact.title}</div>
      <div className='font-light py-4'>{contact.subtitle}</div>
      <form action="" className='grid grid-cols-1 gap-5  '>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 font-light'>
        <input type="text" placeholder='Firstname'className='p-2 bg-background rounded-md'/>
        <input type="text" placeholder='Lastname' className='p-2 bg-background rounded-md'/>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 font-light'>
        <input type="email" placeholder='Email address' className='p-2 bg-background rounded-md'/>
        <input type="email" placeholder='Phone number' className='p-2 bg-background rounded-md'/>
        </div>
        <select name="" id="" className='p-2 bg-background rounded-md font-light'>
          <option value="">UI/UX design</option>
          <option value="">Web Development</option>
          <option value="">Data Analysis</option>
        </select>
        <textarea name="" id="" placeholder='Enter your message here.' className='p-2 bg-background rounded-md font-light'></textarea>
        <button className='rounded-full  p-3 bg-accent xl:w-[20%] text-buttonBg hover:bg-white'>Send message</button>
      </form>
      </div>
      <div className='grid grid-cols-1 gap-5'>
        {contact.info.map((item,index)=>(
          <div key={index} className='flex  items-center gap-10'>
            <div className='bg-border p-4 text-xl text-accent rounded-md'>{item.icon}</div>
            <div className='flex flex-col'>
            <div className='font-light'>{item.fieldName}</div>
            <div>{item.fieldValue}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact