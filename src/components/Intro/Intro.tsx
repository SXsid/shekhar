import React from "react";

function Intro({ title, desc }: { title: string; desc: string }) {
  return (
    <>
      <h2 className="font-display mt-10 text-2xl font-bold text-center text-white">
        {title}
      </h2>
      <p className="font-body text-neutral-400 mb-4 mt-2 font-light text-md">
        {desc}
      </p>
    </>
  );
}

export default Intro;
