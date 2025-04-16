
import Link from 'next/link';
import React from 'react'
import { TbWorldShare } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IProjectCard } from '@/Types/type';



function ProjectCard({name,desc,Techstack,gitHubLink,liveLink,previewLink}:IProjectCard) {
  return (
    <div
    
    
    className='space-y-1   w-full rounded-2xl    md:min-h-[270px] h-[170px] flex flex-col	border border-neutral-800 z-10 bg-neutral-900/90 backdrop-blur-sm relative text-neutral-200 p-4 md:p-6' key={name} >
        <Link className='top-4 absolute right-4 flex gap-1.5 items-center bg-green-950/90 hover:bg-green-900/90 
        transition-colors backdrop-blur-sm rounded-2xl px-2 text-green-500 font-mono' href={liveLink}> <TbWorldShare className='text-xs'/><span className='font-mono'>Live</span></Link>
        
        <h3 className=' font-display font-medium text-lg text-white mt-1 mb-2'>{name}</h3>
        <p className='text-neutral-400 text-sm mb-4 hidden md:block font-body'>{desc}</p>
        <div className='flex flex-wrap gap-2 mb-8'>
            {Techstack.map((stack,index)=>(
                <div key={index} className={` font-code  inline-flex px-2 text-xs font-extralight items-center gap-1 rounded-full  bg-neutral-800/80 py-1`}
                > {stack.icon} {stack.name}</div>
            ))}
        </div>
        <Link href={gitHubLink} 
        className='flex bottom-4 absolute gap-1.5 items-center transition-colors text-sm hover:text-white text-gray-400 group hover:cursor-pointer font-sans'>
            <FaGithub className='text-md'/> view Project Details <GoArrowUpRight className='group-hover:translate-x-0.5 group-hover:scale-110 transition-transform  duration-300'/>
        </Link>

      
    </div>
  )
}

export default ProjectCard
