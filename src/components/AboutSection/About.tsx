import React from "react";

function About() {
  return (
    <div className="md:w-[800px] mt-10 md:mt-16 mx-6 md:mx-0">
      <h2 className="font-display text-2xl font-bold text-[#333333] mb-6 border-b-2 border-neutral-200 pb-2 w-fit">Summary</h2>

      <div className="text-[#333333] font-body md:text-lg text-base leading-relaxed flex flex-col gap-5 mb-16">
        <p>
          Hey! I am <span className="font-bold text-[#cb4b16]">Sudhanshu</span>, currently working as a <span className="font-bold underline decoration-[#cb4b16] decoration-2 underline-offset-4">Backend Contract Developer</span>.
        </p>
        <p>
          I have a strong background in distributed systems, API design, and infrastructure. Over the past few years, I have built <span className="bg-[#fdf6e3] border border-[#eee8d5] px-1.5 py-0.5 rounded font-mono text-sm text-[#586e75]">scalable microservices</span>, worked extensively with Go and Node.js, and managed complex database deployments.
        </p>
        <p>
          I am deeply passionate about open-source and constantly looking for opportunities to build challenging backend architectures. What I really want to build next are robust data pipelines and low-latency systems.
        </p>
      </div>
    </div>
  );
}

export default About;
