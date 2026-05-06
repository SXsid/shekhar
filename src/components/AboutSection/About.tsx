import React from "react";
function About() {
  return (
    <div className="md:w-[800px] mt-10 md:mt-16 mx-6 md:mx-0">
      <div className="text-[#333333] font-body md:text-lg text-base leading-relaxed flex flex-col gap-5 mb-16">
        <p>
          Hey! I'm <span className="font-bold text-[#cb4b16]">Sudhanshu</span>a
          self-taught{" "}
          <span className="font-bold underline decoration-[#cb4b16] decoration-2 underline-offset-4">
            Backend & Infrastructure Engineer
          </span>{" "}
          who likes understanding how things actually work under the hood.
        </p>
        <p>
          I've shipped production systems across two backend contracts building
          async APIs that handle real traffic, wiring up monitoring stacks, and
          making sure things don't fall over when they're supposed to stay up. I
          care about the boring stuff: reliability, observability, and not
          having to wake up at 3am.
        </p>
        <p>
          Outside of work I build tools I wish existed.{" "}
          <span className="bg-[#fdf6e3] border border-[#eee8d5] px-1.5 py-0.5 rounded font-mono text-sm text-[#586e75]">
            gomon
          </span>{" "}
          a Go-based nodemon alternative . Small thing, but people use it. That
          matters to me.
        </p>
        <p>
          Currently going deep on systems design, database internals, and
          production-grade backend patterns. Always open to work that's
          genuinely hard to build.
        </p>
      </div>
    </div>
  );
}
export default About;
