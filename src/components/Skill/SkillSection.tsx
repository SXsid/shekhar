import React from "react";
import Intro from "../Intro/Intro";
import { ISkillCard } from "@/Types/type";
import { skillData } from "@/lib/data";

function SkillSection() {
  return (
    <div className=" flex-col md:w-[800px] hidden md:flex mt-10   ">
      <Intro
        title="Skills"
        desc="Here are some of the skills I have acquired over the years of my journey in the tech industry. I am always looking to learn more and improve my skillset."
      />
      <div className="flex flex-col gap-4">
        {skillData.map((skill, index) => (
          <SkillType
            key={index}
            name={skill.name}
            items={skill.items}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillSection;

function SkillType({ name, items, index }: ISkillCard & { index: number }) {
  return (
    <div className="flex gap-6  items-center">
      <div className="font-display ">
        <span className="mr-1">{index + 1}.</span>
        {name}
      </div>
      <div className="flex gap-2">
        {items.map((item, key) => (
          <div
            className="bg-white border text-neutral-600 font-medium text-md border-neutral-300 px-2 rounded-md shadow-sm"
            key={key}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
