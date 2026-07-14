import React from "react";
import Intro from "../Intro/Intro";
import { skillData } from "@/lib/data";
import { ISkillCard } from "@/Types/type";

function SkillSection() {
  return (
    <div className="flex-col md:w-[800px] hidden md:flex mt-10 px-0">
      <Intro
        title="Skills"
        desc="Here are some of the skills I have acquired over the years. I am always looking to learn more."
      />
      <div className="flex flex-col gap-3 mt-2">
        {skillData.map((skill, index) => (
          <SkillType key={index} name={skill.name} items={skill.items} index={index} />
        ))}
      </div>
    </div>
  );
}

export default SkillSection;

function SkillType({ name, items, index }: ISkillCard & { index: number }) {
  return (
    <div className="flex gap-4 items-start">
      <div
        className="text-sm font-mono w-28 flex-shrink-0 pt-0.5"
        style={{ color: "var(--fg-muted)" }}
      >
        <span className="mr-1 opacity-50">{index + 1}.</span>
        {name}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item, key) => (
          <span className="code-badge" key={key}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
