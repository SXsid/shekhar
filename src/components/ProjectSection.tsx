"use client"
import React from 'react'
import ProjectCard from './card/ProjectCard'
import { ProjectStaticData } from '@/lib/ProjectData'
import { motion } from 'motion/react'

function ProjectSection() {
  return (
    <motion.div 
    initial={{
        opacity:0,
        y:50,
        filter:"blur(5px)"

    }}
    whileInView={{
        opacity:1,
        y:0,
        filter:"blur(0px)"
    }}
    transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
        duration: 0.7
      }}
    viewport={{ once: true, margin: "-50px" }}
    className='grid  md:grid-cols-2 gap-3 my-6'>
        {ProjectStaticData.map((project,index)=>(
      <ProjectCard key={index} name={project.name}desc={project.desc} liveLink={project.liveLink} gitHubLink={project.gitHubLink} Techstack={project.Techstack}/> 
    ))}
    </motion.div>
  )
}

export default ProjectSection
