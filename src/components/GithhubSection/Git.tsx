import GitHubCalendar from 'react-github-calendar';
import React from 'react';

function Git() {
    const gradientTheme = {
        light: [
            '#1a1a1a', // neutral-950 (darkest)
        
            '#999999', // neutral-500
            '#b3b3b3', // neutral-400
          
            '#e6e6e6', // neutral-200
            '#ffffff', // pure white
        ],
        dark: [
            '#333333', // neutral-900
            
            '#999999', // neutral-500
            '#b3b3b3', // neutral-400
            
            '#f2f2f2', // very light gray
            '#ffffff', // pure white
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
