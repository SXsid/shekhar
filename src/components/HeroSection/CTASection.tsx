"use client";
import React from "react";

function CTAButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 22px",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    fontFamily: "'Inter', sans-serif",
    textDecoration: "none",
    transition:
      "opacity 0.14s, color 0.14s, border-color 0.14s, background 0.14s",
  };
  return (
    <a
      target="_blank"
      href={href}
      style={
        primary
          ? {
              ...base,
              background: "var(--fg)",
              color: "var(--bg)",
              border: "1.5px solid transparent",
              fontWeight: 600,
            }
          : {
              ...base,
              background: "transparent",
              color: "var(--fg-muted)",
              border: "1px solid var(--border)",
            }
      }
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        if (primary) {
          el.style.opacity = "0.82";
        } else {
          el.style.color = "var(--fg)";
          el.style.borderColor = "var(--fg-sub)";
          el.style.background = "var(--bg-hover)";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        if (primary) {
          el.style.opacity = "1";
        } else {
          el.style.color = "var(--fg-muted)";
          el.style.borderColor = "var(--border)";
          el.style.background = "transparent";
        }
      }}
    >
      {children}
    </a>
  );
}

export default function CTASection() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        flexWrap: "wrap",
        marginBottom: "20px",
      }}
    >
      <CTAButton href="https://cal.com/sudhanshu-shekhar-ohi3pb/15min" primary>
        Schedule a call{" "}
        <span className=" align-middle inline-block bg-green-100 text-green-800 h-1 w-1 rounded-full"></span>
      </CTAButton>
      <CTAButton href="mailto:contact.sidshekhar@gmail.com">
        Drop a mail
      </CTAButton>
    </div>
  );
}
