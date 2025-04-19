"use client";
import React, { useEffect, useState } from "react";

function Quote() {
  const fullText = "NOT GIVING UP ,IS MY MAGIC";
  const [currText, setCurrText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingInterval:NodeJS.Timeout;

    if (isTyping) {
      typingInterval = setInterval(() => {
        if (index >= fullText.length) {
          clearInterval(typingInterval);
          setIsTyping(false);
          setTimeout(() => {
            setCurrText("");
            setIndex(0);
            setIsTyping(true);
          }, 500); 
        } else {
          setCurrText(prev => prev + fullText[index]);
          setIndex(prevIndex => prevIndex + 1);
        }
      }, 150);
    }

    return () => clearInterval(typingInterval);
  }, [isTyping, index]);

  return (
   <div className="border border-dashed border-neutral-600 md:w-[800px] w-full md:h-[180px] h-[100px] mt-10 relative">
    <div className="absolute top-4 left-4 z-10 w-4 h-4 bg-neutral-950 rounded-full flex justify-center items-center">
        <div className="bg-green-500 rounded-full w-1 h-1"></div>
    </div>
      <div className="absolute top-4  right-4  z-10 w-4 h-4 bg-neutral-950 rounded-full flex justify-center items-center">
        <div className="bg-green-500 rounded-full w-1 h-1"></div>
    </div>
      <div className="absolute bottom-4 left-4 z-10 w-4 h-4 bg-neutral-950 rounded-full flex justify-center items-center">
        <div className="bg-green-500 rounded-full w-1 h-1"></div>
    </div>
      <div className="absolute bottom-4 right-4 z-10 w-4 h-4 bg-neutral-950 rounded-full flex justify-center items-center">
        <div className="bg-green-500 rounded-full w-1 h-1"></div>
    </div>
      
      {/* Border lines */}
      <div className="absolute top-5 left-0 right-0 h-px bg-neutral-700"></div>
      <div className="absolute bottom-5 left-0 right-0 h-px bg-neutral-700"></div>
      <div className="absolute left-5 top-0 bottom-0 w-px bg-neutral-700"></div>
      <div className="absolute right-5 top-0 bottom-0 w-px bg-neutral-700"></div>
    
     <div className=" w-full h-full  border-neutral-800/80 flex items-center justify-center">
        <div className="md:text-2xl font-display text-neutral-400 text-xs font-extralight md:font-normal">
    ❝
      <span className="mx-2">{currText}</span>❞
    
    </div>
        </div>
   </div>
  );
}

export default Quote;