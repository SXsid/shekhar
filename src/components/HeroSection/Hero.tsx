import Image from 'next/image'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";

import Link from 'next/link';

function Hero() {
  return (
    <div className='md:w-[800px] m-12 md:mx-0 border border-neutral-800 h-auto flex md:mb-16  mb-10 md:mt-28  mnt-16  md:p-8 p-4 md:gap-6 gap-4 rounded-2xl bg-neutral-900/80 z-10 shadow-sm backdrop-blur-2xl '>
    
      <div className=' left-6 md:w-24 md:h-24 w-16 h-16'>
        <Image 
          src={"https://i.pinimg.com/736x/1b/56/11/1b5611ea543ac6762069dbca96167711.jpg"} 
          width={120} 
          height={120} 
          alt='myImage' 
          className='rounded-xl border-2 border-neutral-800 object-cover'
        />
      </div>

     
      <div className='flex justify-between flex-1  '>
       
        <div className='flex flex-col md:gap-4 gap-2 items-start'>
          <h1 className='md:text-xl  font-display font-semibold text-neutral-200'>Sudhanshu Shekhar</h1>
          <div className='flex gap-2 items-center text-neutral-400 '>
            <MdOutlineLocationOn className='text-neutral-300  '/>
            <p className='text-neutral-400'>Delhi, India</p>
        </div>
      
          <div className='flex gap-2 items-center text-neutral-400 cursor-pointer group'>
            <IoMailUnreadOutline className='text-neutral-300  group-hover:text-white'/>
            <Link href={"mailto:contact.sidshekhar@gmail.com"} className='group-hover:text-white'>contact.sidshekhar@gmail.com</Link>
          </div>
          
          <div className='flex gap-2 items-center text-neutral-400 group cursor-pointer'>
            <CiLinkedin className='text-neutral-300 group-hover:text-white'/>
            <Link href={"https://www.linkedin.com/in/shekharsid/"} target='_blank' className='group-hover:text-white'>shekharsid</Link>
          </div>
          <h4 className='text-neutral-300  font-sans text-md mt-2'>Backend and Infrastructure guy</h4>
        </div>

        
        <div className=' gap-4 h-fit hidden md:flex'>
          <Link target='_blank' href="https://github.com/SXsid" className='w-10 h-10 flex justify-center items-center bg-neutral-950 border border-neutral-800 text-white rounded-md hover:bg-neutral-900 transition-colors'>
            <FaGithub size={18}  />
          </Link>
          <Link target='_blank' href="https://x.com/shekharTwts" className='w-10 h-10 flex justify-center items-center bg-neutral-950 border border-neutral-800 text-white rounded-md hover:bg-neutral-900 transition-colors'>
            <FaXTwitter size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero