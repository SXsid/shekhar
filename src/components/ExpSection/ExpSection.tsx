"use client"
import React from 'react'
import Intro from '../Intro/Intro'
import { motion } from 'motion/react'
import experienceData from '@/data/experience.json'

function ExpSection() {
  return (
    <motion.div 
    initial={{
      y:40,
      opacity:0,
      filter:"blur(5px)"

    }}
    whileInView={{
      y:0,
      opacity:1,
      filter:"blur(0px)"
    }}
    viewport={{
      once:true,
      margin:"-50px"

    }}
    transition={{ 
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
      duration: 0.7
    }}
    
    className='flex flex-col md:w-[800px] mx-4 lg:mx-0 mb-5'>
      <div id="experience" className="flex flex-col relative gap-8 mt-8 border-l-2 border-[#586e75] ml-4 lg:ml-8 pl-8 py-4">
        {experienceData.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Git Commit Node */}
            <div className="absolute -left-[42px] top-1.5 w-5 h-5 rounded-full border-4 border-[#f4f4f0] bg-[#cb4b16] group-hover:scale-110 transition-transform shadow-sm z-10"></div>
            {/* Git Branch Curve (optional visual enhancement) */}
            {index !== experienceData.length - 1 && (
              <div className="absolute -left-[32px] top-6 w-0.5 h-full bg-[#586e75] opacity-50 block sm:hidden"></div>
            )}
            
            <div className="flex flex-col gap-1 p-4 bg-white/40 border border-neutral-300 border-dashed rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
              <div className="absolute -left-4 top-3 w-4 h-0.5 bg-neutral-300 border-dashed"></div>
              <h3 className="text-lg font-bold font-display text-[#333333]">{exp.positionTitle}</h3>
              <h4 className="text-md text-[#586e75] font-sans font-medium">{exp.companyName || 'Freelance'}</h4>
              <div className="text-sm text-neutral-500 mt-1 font-mono bg-white/60 px-2 py-0.5 rounded-md w-fit border border-neutral-200">
                {exp.from} — {exp.to}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default ExpSection