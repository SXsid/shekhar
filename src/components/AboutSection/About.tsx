import React from "react";
import Link from "next/link";

function About() {
  return (
    <div className="md:w-[800px] ">
      <h2 className="   font-display text-lg text-white mb-4">About Me</h2>

      <div className="text-neutral-400 font-display md:font-normal font-light md:text-lg text-sm flex flex-col gap-4 md:gap-6 flex-wrap mb-12">
        <p>I'm Sudhanshu Shekhar, a Software Engineer from india.</p>
        <p>I build scalable, engaging, and accessible digital experiences.</p>
        <p>
          I'm currently working as a{" "}
          <span className="text-orange-600 underline">
            freelance backend developer{" "}
          </span>
          , building and deploying high-quality backend for their clients.
        </p>
      </div>
    </div>
  );
}

export default About;
