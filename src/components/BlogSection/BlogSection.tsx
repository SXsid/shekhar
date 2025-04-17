import { BlogData } from '@/lib/data'
import React from 'react'
import BlogCard from '../card/BlogCard'
import Intro from '../Intro/Intro'

function BlogSection() {
  return (
    <div className='md:flex  hidden flex-col w-[800px] mt-6'>

        <Intro title='Blogs' desc='A collection of my blogs where I share experiences and ideas on technology, programming languages, databases, cloud and frameworks'/>
        <div className='flex flex-col  justify-center items-center mt-6 gap-3'>
      {BlogData.map((blog,index)=>(
        <BlogCard key={index} title={blog.title} dateOfpublish={blog.dateOfpublish} logo={blog.logo} 
        link={blog.link} topic={blog.topic}
        color={blog.color}
        />
      ))}
    </div>
    </div>
  )
}

export default BlogSection
