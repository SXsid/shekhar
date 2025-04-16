"use client"
import { IBlogCard } from '@/Types/type'
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'

function BlogCard({title, dateOfpublish, link, logo, color, topic}: IBlogCard) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
        filter: "blur(5px)"
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        filter: "blur(0px)"
      }}
      viewport={{
        once: true,
      }}
      className='bg-neutral-900/90 hidden md:block w-[760px] rounded-xl h-auto py-3  px-2 overflow-hidden hover:scale-95 transition-transform duration-300'
    >
      <Link href={link} target="_blank" className="block w-full">
        <div className='flex items-center gap-3 w-full'>
          <div className="rounded-xl p-2 flex-shrink-0" style={{backgroundColor: `${color}33`}}>
            {logo}
          </div>
          <div className='flex flex-col flex-1 min-w-0'>
          <div className="flex justify-between gap-2 items-start flex-wrap">
  <h2 className="font-display text-base font-normal leading-tight flex-1 break-words flex-wrap min-w-[70%]" >
    {title}
  </h2>
  <span
    className="px-2 py-1  font-mono text-xs rounded-full flex-shrink-0 whitespace-nowrap"
    style={{ backgroundColor: `${color}1A`, color: color }}
  >
    {topic}
  </span>
</div>
            <p className='font-semibold font-body text-sm mt-1 truncate text-neutral-600'>{dateOfpublish}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default BlogCard