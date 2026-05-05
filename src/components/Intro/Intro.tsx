import React from "react";

function Intro({ title, desc }: { title: string; desc: string }) {
  return (
    <>
      <h2 className="font-display mt-10 text-2xl font-bold text-center text-[#333333]">
        {title}
      </h2>
      <p className="font-body text-neutral-600 mb-4 mt-2 font-light text-md max-w-2xl text-center mx-auto">
        {desc}
      </p>
    </>
  );
}

export default Intro;
