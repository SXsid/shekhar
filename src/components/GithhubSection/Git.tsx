import GitHubCalendar from "react-github-calendar";
import React from "react";

function Git() {
  const theme = {
    light: ["var(--bg-card)", "#c98a3d", "#b8742f", "#9a5d22", "#7a4318"],
    dark:  ["var(--bg-card)", "#d4894e", "#b8742f", "#9a5d22", "#7a4318"],
  };

  return (
    <div className="overflow-x-auto px-4 md:px-0 mb-10 block w-full">
      <div className="w-fit md:w-[800px] mx-auto">
        <GitHubCalendar
          username="SXsid"
          theme={theme}
          blockSize={11}
          blockMargin={3}
          fontSize={14}
          blockRadius={3}
          colorScheme="light"
        />
      </div>
    </div>
  );
}

export default Git;
