
import React from "react";
import { TbWorldShare } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IProjectCard } from "@/Types/type";

function ProjectCard({
  name,
  desc,
  Techstack,
  gitHubLink,
  liveLink,
  previewLink,
}: IProjectCard) {
  return (
    <div
      className="space-y-3 w-full rounded-2xl h-auto break-inside-avoid flex flex-col border border-neutral-300 z-10 bg-white/60 hover:bg-white/80 transition-colors shadow-sm relative text-[#333333] p-4 md:p-6"
      key={name}
    >
      {liveLink && (
        <a
          className="top-4 absolute right-4 flex gap-1.5 items-center bg-green-100 hover:bg-green-200 
        transition-colors rounded-2xl px-2 text-green-700 font-mono text-xs md:text-sm py-0.5"
          href={liveLink}
          target="_blank"
        >
          <TbWorldShare className="text-xs" />
          <span className="font-body">Live</span>
        </a>
      )}
      <div className="flex flex-col gap-2">
        <h3 className=" font-display font-semibold text-xl text-[#333333] mt-1 pr-16 leading-tight">
          {name}
        </h3>

        <div className="flex flex-wrap gap-2 mt-2 mb-4">
          {Techstack.map((stack, index) => (
            <div
              key={index}
              className={`font-code inline-flex px-2.5 text-xs font-medium items-center gap-1.5 rounded-full bg-neutral-100 border border-neutral-200 py-1 text-neutral-600`}
            >
              {stack.icon} {stack.name}
            </div>
          ))}
        </div>
      </div>
      <p className="text-neutral-600 text-sm mb-4 font-body leading-relaxed">
        {desc}
      </p>
      <a
        target="_blank"
        href={gitHubLink}
        className="flex gap-1.5 items-center transition-colors text-sm hover:text-black text-neutral-500 group hover:cursor-pointer font-sans mt-auto pt-2 border-t border-neutral-200/50 inline-block w-fit"
      >
        <FaGithub className="text-md" /> view Project Details{" "}
        <GoArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
}

export default ProjectCard;
