"use client"
import { ExpData } from '@/lib/data'
import React from 'react'
import ExperienceCard from '../card/ExperienceCard'
import Intro from '../Intro/Intro'
import { motion } from 'motion/react'

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
        <Intro title='Experience' desc='A breif about my work experiences where I have worked at and where I am currently working at.

'/>
      <div className='flex flex-col relative'>
        
        <div className='absolute left-4 top-10 bottom-6 w-0.5 bg-gray-300 dark:bg-gray-700 block sm:hidden'></div>
        
        {ExpData.map((exp, index) => (
          <div key={index} className="relative">
            {/* Circle connector */}
            <div className="absolute left-[17px] top-10 w-3 h-3 rounded-full bg-neutral-500 transform -translate-x-1.5 block sm:hidden z-10"></div>
            
            <ExperienceCard 
              positionTitle={exp.positionTitle}
              companyName={exp.companyName}
              from={exp.from}
              to={exp.to}
              imageURL={exp.imageURL}
              isFirst={index === 0}
              isLast={index === ExpData.length - 1}
              bgcolor={exp.bgcolor}
            />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default ExpSection