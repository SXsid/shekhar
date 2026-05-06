import GitHubCalendar from "react-github-calendar";
import React from "react";

function Git() {
  const gradientTheme = {
    light: [
      "transparent", // empty
      "#c98a3d", // 1 contrib pops
      "#b8742f",
      "#9a5d22",
      "#7a4318",
    ],

    dark: ["transparent", "#ffb347", "#d98c2b", "#a8651a", "#7a4318"],
  };
  return (
    <div className="overflow-x-auto px-2 md:px-0 mb-10 block">
      <div className="w-[fit-content] md:w-[800px] mx-auto">
        <GitHubCalendar
          username="SXsid"
          theme={gradientTheme}
          blockSize={12}
          blockMargin={3}
          fontSize={16}
          blockRadius={5}
        />
      </div>
    </div>
  );
}

export default Git;
