import React from "react";

export default function About() {
  return (
    <div className="md:w-[800px] mt-6 md:mt-8 px-4 md:px-0 mb-10">
      <p
        className="text-base leading-relaxed"
        style={{ color: "var(--fg-muted)" }}
      >
        Self-taught{" "}
        <span style={{ color: "var(--fg)", fontWeight: 600 }}>
          Backend &amp; Infrastructure Engineer
        </span>{" "}
        — I build systems that stay up, ship tools people actually use, and care
        about the boring stuff: reliability, observability, and clean code.
      </p>
    </div>
  );
}
