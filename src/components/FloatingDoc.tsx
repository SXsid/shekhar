"use client";
import React, { useEffect, useState } from "react";
import { FiHome, FiFolder, FiBookOpen, FiBook } from "react-icons/fi";

const tabs = [
  { label: "Home",     icon: <FiHome     size={15} />, href: "/"         },
  { label: "Projects", icon: <FiFolder   size={15} />, href: "/projects" },
  { label: "Blogs",    icon: <FiBookOpen size={15} />, href: "/blogs"    },
  { label: "Shelf",    icon: <FiBook     size={15} />, href: "/shelf"    },
];

export function FloatingDock({ className }: { className?: string }) {
  const [active, setActive] = useState("/");

  // Sync active tab with current pathname on mount + navigation
  useEffect(() => {
    const sync = () => setActive(window.location.pathname);
    sync();
    document.addEventListener("astro:after-swap", sync);
    return () => document.removeEventListener("astro:after-swap", sync);
  }, []);

  return (
    <nav
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2px",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "999px",
        padding: "5px 6px",
        backdropFilter: "blur(12px)",
      }}
    >
      {tabs.map((tab) => {
        const isActive = active === tab.href;
        return (
          <a
            key={tab.href}
            href={tab.href}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "7px 14px",
              borderRadius: "999px",
              fontSize: "0.78rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: isActive ? 600 : 400,
              color: isActive ? "var(--bg)" : "var(--fg-muted)",
              background: isActive ? "var(--fg)" : "transparent",
              textDecoration: "none",
              transition: "background 0.18s ease, color 0.18s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = "var(--fg)";
                e.currentTarget.style.background = "var(--bg-hover)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = "var(--fg-muted)";
                e.currentTarget.style.background = "transparent";
              }
            }}
          >
            <span style={{ display: "flex", alignItems: "center", opacity: isActive ? 1 : 0.75 }}>
              {tab.icon}
            </span>
            {tab.label}
          </a>
        );
      })}
    </nav>
  );
}
