"use client";
import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function ProfileHeader() {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <h1
            style={{
              color: "var(--fg)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 700,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Sudhanshu Shekhar
          </h1>
          <span style={{ color: "var(--fg-sub)", fontFamily: "'Inter', sans-serif", fontSize: "0.82rem" }}>
            @sidshekhar
          </span>
        </div>
        <p
          style={{
            color: "var(--fg-muted)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.78rem",
            margin: "4px 0 0",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <MdOutlineLocationOn size={12} />
          Delhi, India · Backend &amp; Infrastructure Engineer
        </p>
      </div>

      {/* Resume Link */}
      <a
        href="#"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          flexShrink: 0,
          fontSize: "0.78rem",
          padding: "6px 12px",
          borderRadius: "8px",
          fontFamily: "'Inter', sans-serif",
          textDecoration: "none",
          background: "var(--bg-hover)",
          border: "1px solid var(--border)",
          color: "var(--fg-muted)",
          transition: "color 0.14s, border-color 0.14s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.color = "var(--fg)";
          el.style.borderColor = "var(--fg-sub)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.color = "var(--fg-muted)";
          el.style.borderColor = "var(--border)";
        }}
      >
        Resume <HiOutlineExternalLink size={11} />
      </a>
    </div>
  );
}
