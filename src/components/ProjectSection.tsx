"use client";
import React from "react";
import ProjectCard from "./card/ProjectCard";
import { TechstackData } from "@/lib/data";
import { motion } from "motion/react";
import Intro from "./Intro/Intro";
import projects from "@/data/projects.json";

function ProjectSection() {
  const topProjects = projects.filter(p => p.isTopProject);
  const archiveProjects = projects.filter(p => !p.isTopProject);

  const getTechstack = (keys: string[]) => {
    return keys.map((key) => (TechstackData as any)[key]).filter(Boolean);
  };

  return (
    <div className="flex flex-col items-center w-full mx-4 md:m-0">
      <Intro
        title="Top Projects"
        desc="A selection of my best work, highlighting complex systems and full-stack development."
      />

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1, duration: 0.7 }}
        viewport={{ once: true, margin: "-50px" }}
        className="columns-1 md:columns-2 lg:columns-3 gap-6 w-full space-y-6"
      >
        {topProjects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            desc={project.desc}
            liveLink={project.liveLink}
            gitHubLink={project.gitHubLink}
            Techstack={getTechstack(project.techstack)}
          />
        ))}
      </motion.div>

      <div className="mt-16 w-full">
        <Intro
          title="Archive"
          desc="Other interesting things I've built along the way."
        />
        
        <div className="flex flex-col gap-2 mt-4">
          {archiveProjects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-neutral-300 rounded-lg hover:bg-white/80 bg-white/40 transition-colors shadow-sm">
              <div>
                <h3 className="text-[#333333] font-semibold">{project.name}</h3>
                <p className="text-neutral-600 text-sm mt-1">{project.desc}</p>
              </div>
              <div className="flex gap-4 mt-2 md:mt-0 text-sm">
                {project.liveLink && <a href={project.liveLink} target="_blank" className="text-green-500 hover:text-green-400">Live</a>}
                {project.gitHubLink && <a href={project.gitHubLink} target="_blank" className="text-blue-500 hover:text-blue-400">GitHub</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
