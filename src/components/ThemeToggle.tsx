"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode, MdOutlineDesktopWindows } from "react-icons/md";

type Theme = "light" | "dark" | "system";

const icons: Record<Theme, React.ReactNode> = {
  light:  <MdOutlineLightMode size={15} />,
  dark:   <MdOutlineDarkMode  size={15} />,
  system: <MdOutlineDesktopWindows size={15} />,
};

const cycle: Theme[] = ["light", "dark", "system"];
const labels: Record<Theme, string> = { light: "Light", dark: "Dark", system: "System" };

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.toggle("dark", prefersDark);
  } else {
    root.classList.toggle("dark", theme === "dark");
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  // Initialise from localStorage on mount
  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "light";
    setTheme(saved);
    applyTheme(saved);

    // Watch system preference if theme === "system"
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if ((localStorage.getItem("theme") as Theme) === "system") applyTheme("system");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggle = () => {
    const next = cycle[(cycle.indexOf(theme) + 1) % cycle.length];
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  return (
    <button
      onClick={toggle}
      title={`Theme: ${labels[theme]}`}
      className="icon-btn"
      aria-label="Toggle theme"
      style={{ fontSize: "0.9rem" }}
    >
      {icons[theme]}
    </button>
  );
}
