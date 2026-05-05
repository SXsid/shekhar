import GitHubCalendar from 'react-github-calendar';
import React from 'react';

function Git() {
    const gradientTheme = {
        light: [
            '#e8e4db', // empty paper
            '#d1c7b7', // light tan
            '#a99a86', // medium brown
            '#786854', // dark brown
            '#473a2b', // darkest ink
        ],
        dark: [
            '#e6e6e6', // empty
            '#cccccc',
            '#999999',
            '#666666',
            '#333333', // full
        ],
    };

  return (
    <div className="overflow-x-auto px-2 md:px-0 mb-10 hidden md:block" >
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
