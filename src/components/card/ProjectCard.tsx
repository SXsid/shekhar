import React from "react";
import { TbWorldShare } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IProjectCard } from "@/Types/type";

function ProjectCard({ name, desc, Techstack, gitHubLink, liveLink }: IProjectCard) {
  return (
    <div
      className="space-y-3 w-full rounded-xl h-auto break-inside-avoid flex flex-col p-4 md:p-5 relative transition-colors"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        color: "var(--fg)",
      }}
    >
      {liveLink && (
        <a
          className="top-4 absolute right-4 flex gap-1 items-center rounded-full px-2 py-0.5 text-xs transition-colors"
          style={{
            background: "var(--bg-hover)",
            color: "var(--accent)",
            border: "1px solid var(--border)",
          }}
          href={liveLink}
          target="_blank"
        >
          <TbWorldShare size={11} />
          <span>Live</span>
        </a>
      )}

      <div className="flex flex-col gap-1.5">
        <h3
          className="font-display font-semibold text-lg mt-1 pr-16 leading-tight"
          style={{ color: "var(--fg)" }}
        >
          {name}
        </h3>

        <div className="flex flex-wrap gap-1.5 mt-1 mb-2">
          {Techstack.map((stack, index) => (
            <span className="tech-pill" key={index}>
              {stack.icon} {stack.name}
            </span>
          ))}
        </div>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
        {desc}
      </p>

      <a
        target="_blank"
        href={gitHubLink}
        className="flex gap-1.5 items-center text-sm group mt-auto pt-2 inline-block w-fit transition-colors"
        style={{
          color: "var(--fg-muted)",
          borderTop: "1px solid var(--border)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
      >
        <FaGithub size={13} /> view project
        <GoArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  );
}

export default ProjectCard;
