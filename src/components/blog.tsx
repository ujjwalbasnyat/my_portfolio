'use client'
import { blogs } from '@/app/data';
import React from 'react'

  

const Blog = () => {
  return (
    <div className='grid grid-cols-1 gap-4'>
        <div className='font-bold text-xl'>{blogs.heading}</div>
        <div className='grid grid-cols-1 xl:grid-cols-3   gap-4'>
            {blogs.contents.map((blog,index)=>(
            <div key={index} className='p-4 grid grid-cols-1 gap-2 bg-border'>
                <div>{blog.title}</div>
                <div className='font-light'>{blog.description}</div>
            </div>
        ))}</div>
    </div>
  )
}

export default Blog;