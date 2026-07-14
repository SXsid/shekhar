import React from "react";

function Intro({ title, desc }: { title: string; desc: string }) {
  return (
    <>
      <h2 className="font-display mt-10 text-xl font-semibold text-center" style={{ color: "var(--fg)" }}>
        {title}
      </h2>
      <p className="font-body mb-4 mt-1.5 font-light text-sm max-w-2xl text-center mx-auto" style={{ color: "var(--fg-muted)" }}>
        {desc}
      </p>
    </>
  );
}

export default Intro;
