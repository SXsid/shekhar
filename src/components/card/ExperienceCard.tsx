import React from 'react'
import Image from 'next/image'
import { IExperienceCard } from '@/Types/type'
import { motion } from 'motion/react'

function ExperienceCard({ positionTitle, companyName, from, to, imageURL, isFirst, isLast ,bgcolor}:IExperienceCard&{isFirst:boolean,isLast:boolean}) {
  return (
    <motion.div
    initial={{
      x:-30,
      opacity:0,
      filter:"blur(3px)"
    }}
    whileInView={{
      x:0,
      opacity:1,
      filter:"blur(0px)"
    }}
    viewport={{
      once:true
    }}
    
    className="flex py-4 pl-10 pr-2 sm:pl-12 relative">
      
      <div className="flex  sm:flex-row w-full rounded-lg lg:px-4 py-4 ">
       
        <div className=" lg:mr-4  mr-2 mb-3 sm:mb-0">
          <div className="w-12 h-12 rounded-full overflow-hidden" style={{backgroundColor:bgcolor}}>
            {imageURL && (
              <Image 
                src={imageURL} 
                alt={companyName} 
                width={48} 
                height={48}
                className="w-full h-full object-contain" 
              />
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className=" lg:flex lg:justify-between lg:w-[80%]">
          <div>
          <h3 className="text-lg font-light font-body   ">{positionTitle}</h3>
          <h4 className="text-md text-neutral-400 font-sans font-light">{companyName}</h4>
          </div>
          <div className="text-sm hidden lg:block text-gray-500 dark:text-gray-400 mt-1">
            <span>{from}</span>
            <span className="mx-2">—</span>
            <span>{to}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ExperienceCard