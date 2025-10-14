"use client";
import React from "react";
import ProjectCard from "./card/ProjectCard";
import { ProjectStaticData } from "@/lib/ProjectData";
import { motion } from "motion/react";
import Intro from "./Intro/Intro";

function ProjectSection() {
  return (
    <div className="flex flex-col items-center    mx-4 md:m-0">
      <Intro
        title="Projects"
        desc="I've been actively engaged in a few side projects lately, exploring diverse technologies & ideas. Here’s a quick glimpse of my ongoing and completed projects.."
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          filter: "blur(5px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 1,
          duration: 0.7,
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-4"
      >
        {ProjectStaticData.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            desc={project.desc}
            liveLink={project.liveLink}
            gitHubLink={project.gitHubLink}
            Techstack={project.Techstack}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default ProjectSection;
