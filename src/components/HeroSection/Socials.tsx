"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";

function SocialChip({
  icon,
  label,
  href,
  target = "_blank",
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  target?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 14px",
        borderRadius: "9999px",
        fontSize: "0.78rem",
        fontFamily: "'Inter', sans-serif",
        textDecoration: "none",
        background: "var(--bg-hover)",
        border: "1px solid var(--border)",
        color: "var(--fg-muted)",
        transition: "color 0.14s, border-color 0.14s, background 0.14s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "var(--fg)";
        el.style.borderColor = "var(--fg-sub)";
        el.style.background = "var(--bg-card)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "var(--fg-muted)";
        el.style.borderColor = "var(--border)";
        el.style.background = "var(--bg-hover)";
      }}
    >
      <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>
      {label}
    </a>
  );
}

export default function Socials() {
  return (
    <div>
      <p style={{ color: "var(--fg-sub)", fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", marginBottom: "8px" }}>
        Find me on the <span style={{ color: "var(--fg)", fontWeight: 600 }}>internet</span>
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        <SocialChip
          icon={<FaGithub size={13} />}
          label="GitHub"
          href="https://github.com/SXsid"
        />
        <SocialChip
          icon={<CiLinkedin size={14} />}
          label="LinkedIn"
          href="https://www.linkedin.com/in/shekharsid/"
        />
        <SocialChip
          icon={<FaXTwitter size={12} />}
          label="Twitter"
          href="https://x.com/shekharTwts"
        />
        <SocialChip
          icon={<IoMailOutline size={13} />}
          label="Email"
          href="mailto:contact.sidshekhar@gmail.com"
          target="_self"
        />
      </div>
    </div>
  );
}
