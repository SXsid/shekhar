"use client";
import React from "react";
import ProjectCard from "./card/ProjectCard";
import { TechstackData } from "@/lib/data";
import Intro from "./Intro/Intro";
import projects from "@/data/projects.json";

function ProjectSection() {
  const topProjects = projects.filter((p) => p.isTopProject);
  const archiveProjects = projects.filter((p) => !p.isTopProject);

  const getTechstack = (keys: string[]) =>
    keys.map((key) => (TechstackData as any)[key]).filter(Boolean);

  return (
    <div className="flex flex-col items-center w-full mx-4 md:m-0">
      <Intro
        title="Top Projects"
        desc="A selection of my best work, highlighting complex systems and full-stack development."
      />

      {/* Desktop: masonry cards */}
      <div className="hidden md:columns-2 lg:columns-3 gap-5 w-full space-y-5 md:block mt-4">
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
      </div>

      {/* Mobile: simple link list */}
      <ul className="block md:hidden w-full px-2 mt-3 space-y-3 list-none">
        {topProjects.map((project, index) => (
          <li key={index}>
            <a
              href={project.liveLink || project.gitHubLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline underline-offset-4 transition-colors"
              style={{ color: "var(--accent)", textDecorationColor: "var(--border)" }}
            >
              {project.name}
            </a>
            <p className="text-xs mt-0.5 leading-snug" style={{ color: "var(--fg-muted)" }}>
              {project.desc}
            </p>
          </li>
        ))}
      </ul>

      {/* Archive */}
      <div className="mt-12 w-full">
        <Intro
          title="Archive"
          desc="Other interesting things I've built along the way."
        />

        {/* Desktop archive rows */}
        <div className="hidden md:flex flex-col gap-2 mt-3">
          {archiveProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg transition-colors"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div>
                <h3 className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
                  {project.name}
                </h3>
                <p className="text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>
                  {project.desc}
                </p>
              </div>
              <div className="flex gap-4 mt-2 md:mt-0 text-xs">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="underline underline-offset-2 transition-colors"
                    style={{ color: "var(--accent)" }}
                  >
                    Live
                  </a>
                )}
                {project.gitHubLink && (
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    className="underline underline-offset-2 transition-colors"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile archive list */}
        <ul className="block md:hidden w-full px-2 mt-3 space-y-3 list-none">
          {archiveProjects.map((project, index) => (
            <li key={index}>
              <div className="flex gap-2 items-baseline flex-wrap">
                <span className="text-sm font-medium" style={{ color: "var(--fg)" }}>
                  {project.name}
                </span>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="text-xs underline underline-offset-2"
                    style={{ color: "var(--accent)" }}
                  >
                    Live
                  </a>
                )}
                {project.gitHubLink && (
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    className="text-xs underline underline-offset-2"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    GitHub
                  </a>
                )}
              </div>
              <p className="text-xs mt-0.5 leading-snug" style={{ color: "var(--fg-muted)" }}>
                {project.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectSection;
