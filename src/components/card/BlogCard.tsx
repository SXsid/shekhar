"use client"
import { IBlogCard } from '@/Types/type'
import { motion } from 'motion/react'
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
      className='bg-transparent border-b border-dashed border-neutral-300 hidden md:block w-[760px] rounded-none h-auto py-4 px-2 overflow-hidden hover:scale-[0.98] transition-transform duration-300'
    >
      <a href={link} target="_blank" className="block w-full">
        <div className='flex items-center gap-4 w-full'>
          {logo && (
            <div className="rounded-xl p-2 flex-shrink-0" style={{backgroundColor: `${color}1A`}}>
              {logo}
            </div>
          )}
          <div className='flex flex-col flex-1 min-w-0'>
            <div className="flex justify-between gap-2 items-start flex-wrap">
              <h2 className="font-display text-lg font-semibold text-[#333333] leading-tight flex-1 break-words flex-wrap min-w-[70%]" >
                {title}
              </h2>
              <span
                className="px-2 py-0.5 font-mono text-xs rounded-full flex-shrink-0 whitespace-nowrap border"
                style={{ backgroundColor: `${color}0A`, color: color, borderColor: `${color}33` }}
              >
                {topic}
              </span>
            </div>
            <p className='font-medium font-mono text-xs mt-2 text-[#586e75]'>{dateOfpublish}</p>
          </div>
        </div>
      </a>
    </motion.div>
  )
}

export default BlogCard