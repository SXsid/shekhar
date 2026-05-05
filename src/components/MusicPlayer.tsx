"use client";
import React, { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("https://upload.wikimedia.org/wikipedia/commons/c/c5/Acoustic_Blues_Guitar.ogg");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2; // 20 percent volume

    // Play on first user interaction to bypass browser autoplay blocks
    const startAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(e => console.log("Audio play blocked", e));
        // Remove listeners after it starts playing once
        document.removeEventListener("click", startAudio);
        document.removeEventListener("keydown", startAudio);
        document.removeEventListener("scroll", startAudio);
      }
    };

    document.addEventListener("click", startAudio);
    document.addEventListener("keydown", startAudio);
    document.addEventListener("scroll", startAudio);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener("click", startAudio);
      document.removeEventListener("keydown", startAudio);
      document.removeEventListener("scroll", startAudio);
    };
  }, []);

  // Invisible component
  return null;
}
