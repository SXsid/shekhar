import GitHubCalendar from "react-github-calendar";
import React from "react";

function Git() {
  const theme = {
    light: ["var(--bg-card)", "#c98a3d", "#b8742f", "#9a5d22", "#7a4318"],
    dark:  ["var(--bg-card)", "#d4894e", "#b8742f", "#9a5d22", "#7a4318"],
  };

  return (
    <div className="overflow-x-auto block w-full">
      <div className="w-fit mx-auto" style={{ maxWidth: "100%" }}>
        <GitHubCalendar
          username="SXsid"
          theme={theme}
          blockSize={10}
          blockMargin={3}
          fontSize={13}
          blockRadius={2}
          colorScheme="light"
        />
      </div>
    </div>
  );
}

export default Git;
