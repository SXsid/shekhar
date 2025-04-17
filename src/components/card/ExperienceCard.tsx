import React from 'react'
import Image from 'next/image'
import { IExperienceCard } from '@/Types/type'

// Add isFirst and isLast props to handle special styling for first and last cards
function ExperienceCard({ positionTitle, companyName, from, to, imageURL, isFirst, isLast ,bgcolor}:IExperienceCard&{isFirst:boolean,isLast:boolean}) {
  return (
    <div className="flex py-4 pl-10 pr-2 sm:pl-12 relative">
      {/* Card content */}
      <div className="flex  sm:flex-row w-full rounded-lg lg:px-4 py-4 shadow-sm">
        {/* Image */}
        <div className=" lg:mr-4  mr-2 mb-3 sm:mb-0">
          <div className="w-12 h-12 rounded-full overflow-hidde" style={{backgroundColor:bgcolor}}>
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
    </div>
  )
}

export default ExperienceCard