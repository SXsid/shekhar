"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import ThemeToggle from "@/components/ThemeToggle";

const AVATAR_SIZE = 72;
const AVATAR_HALF = AVATAR_SIZE / 2;

/* ── Social chip ──────────────────────────────────────────── */
function SocialChip({
  icon, label, href, target = "_blank",
}: {
  icon: React.ReactNode; label: string; href: string; target?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        padding: "6px 12px", borderRadius: "9999px", fontSize: "0.78rem",
        fontFamily: "'Inter', sans-serif", textDecoration: "none",
        background: "var(--bg-card)", border: "1px solid var(--border)",
        color: "var(--fg-muted)", transition: "color 0.14s, border-color 0.14s, background 0.14s",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "var(--fg)";
        el.style.borderColor = "var(--fg-sub)";
        el.style.background = "var(--bg-hover)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "var(--fg-muted)";
        el.style.borderColor = "var(--border)";
        el.style.background = "var(--bg-card)";
      }}
    >
      <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>
      {label}
    </a>
  );
}

/* ── CTA button ───────────────────────────────────────────── */
function CTAButton({
  href, children, primary = false,
}: {
  href: string; children: React.ReactNode; primary?: boolean;
}) {
  return (
    <a
      href={href}
      style={primary ? {
        display: "inline-flex", alignItems: "center", gap: "6px",
        padding: "8px 20px", borderRadius: "9999px", fontSize: "0.875rem",
        fontFamily: "'Inter', sans-serif", fontWeight: 600, textDecoration: "none",
        background: "var(--fg)", color: "var(--bg)", border: "1.5px solid transparent",
        transition: "opacity 0.14s",
      } : {
        display: "inline-flex", alignItems: "center", gap: "6px",
        padding: "8px 20px", borderRadius: "9999px", fontSize: "0.875rem",
        fontFamily: "'Inter', sans-serif", textDecoration: "none",
        background: "transparent", color: "var(--fg-muted)",
        border: "1px solid var(--border)", transition: "color 0.14s, border-color 0.14s, background 0.14s",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        if (primary) { el.style.opacity = "0.82"; }
        else { el.style.color = "var(--fg)"; el.style.borderColor = "var(--fg-sub)"; el.style.background = "var(--bg-card)"; }
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        if (primary) { el.style.opacity = "1"; }
        else { el.style.color = "var(--fg-muted)"; el.style.borderColor = "var(--border)"; el.style.background = "transparent"; }
      }}
    >
      {children}
    </a>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <div
      className="w-full md:w-[800px] mt-6 md:mt-10 px-0"
      style={{ position: "relative" }}
    >
      {/*
        ┌─────────────────────────────────────────┐
        │  BANNER — standalone rounded card        │
        │  overflow: visible so avatar can hang    │
        │  below it. The inner <img> wrapper has   │
        │  overflow: hidden for the rounded crop.  │
        └─────────────────────────────────────────┘
      */}
      <div
        style={{
          position: "relative",
          height: "clamp(160px, 26vw, 218px)",
          overflow: "visible",   /* MUST be visible so avatar isn't clipped */
        }}
      >
        {/* Actual banner image — clipped with rounded corners */}
        <div
          style={{
            position: "absolute", inset: 0,
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
        >
          <img
            src="/banner.png"
            alt="banner"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", display: "block" }}
          />
          {/* bottom fade */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.55) 100%)",
          }} />
        </div>

        {/* Theme toggle pinned top-right of banner */}
        <div style={{ position: "absolute", top: "12px", right: "12px", zIndex: 10 }}>
          <ThemeToggle />
        </div>

        {/*
          Avatar: absolutely positioned relative to the BANNER div.
          bottom: -AVATAR_HALF places it so the top half is inside the
          banner area and the bottom half hangs below — bridging
          banner → open page background.
          The avatar border matches var(--bg) (page background) not bg-card.
        */}
        <div
          style={{
            position: "absolute",
            bottom: `-${AVATAR_HALF}px`,
            left: "16px",
            zIndex: 20,
          }}
        >
          <img
            src="https://i.ibb.co/spWbbdZM/Screenshot-from-2025-12-23-03-19-13.png"
            alt="Sudhanshu Shekhar"
            style={{
              width: `${AVATAR_SIZE}px`,
              height: `${AVATAR_SIZE}px`,
              borderRadius: "12px",
              objectFit: "cover",
              display: "block",
              border: "3px solid var(--bg)",       /* page bg = seamless blend */
              boxShadow: "0 0 0 1px var(--border)",
            }}
          />
        </div>
      </div>

      {/*
        ┌─────────────────────────────────────────┐
        │  CONTENT — plain page background         │
        │  NO card wrapper. padding-top clears     │
        │  the avatar that hangs below the banner. │
        └─────────────────────────────────────────┘
      */}
      <div
        className="px-1"
        style={{ paddingTop: `${AVATAR_HALF + 14}px` }}
      >
        {/* Name + Resume */}
        <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1
                style={{ color: "var(--fg)", fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.2 }}
              >
                Sudhanshu Shekhar
              </h1>
              <span style={{ color: "var(--fg-sub)", fontFamily: "'Inter', sans-serif", fontSize: "0.82rem" }}>
                @sidshekhar
              </span>
            </div>
            <p
              className="flex items-center gap-1 mt-0.5"
              style={{ color: "var(--fg-muted)", fontFamily: "'Inter', sans-serif", fontSize: "0.78rem" }}
            >
              <MdOutlineLocationOn size={12} />
              Delhi, India · Backend &amp; Infrastructure Engineer
            </p>
          </div>

          {/* Resume */}
          <a
            href="#"
            className="flex items-center gap-1 flex-shrink-0"
            style={{
              fontSize: "0.78rem", padding: "6px 12px", borderRadius: "8px",
              fontFamily: "'Inter', sans-serif", textDecoration: "none",
              background: "var(--bg-card)", border: "1px solid var(--border)",
              color: "var(--fg-muted)", transition: "color 0.14s, border-color 0.14s",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--fg)"; el.style.borderColor = "var(--fg-sub)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--fg-muted)"; el.style.borderColor = "var(--border)"; }}
          >
            Resume <HiOutlineExternalLink size={11} />
          </a>
        </div>

        {/* Bio */}
        <p
          className="mt-3 mb-4"
          style={{
            color: "var(--fg-muted)", maxWidth: "520px", lineHeight: 1.7,
            fontFamily: "ui-serif, Georgia, serif", fontSize: "0.9rem",
          }}
        >
          Self-taught{" "}
          <span style={{ color: "var(--fg)", fontWeight: 600 }}>
            Backend &amp; Infrastructure Engineer
          </span>{" "}
          — I build systems that stay up, ship tools people actually use, and
          care about reliability, observability, and clean code.
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 flex-wrap mb-5">
          <CTAButton href="mailto:contact.sidshekhar@gmail.com" primary>Schedule a call ·</CTAButton>
          <CTAButton href="mailto:contact.sidshekhar@gmail.com">Drop a mail</CTAButton>
        </div>

        {/* Socials */}
        <p
          className="mb-2"
          style={{ color: "var(--fg-sub)", fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
        >
          Find me on the{" "}
          <span style={{ color: "var(--fg)", fontWeight: 600 }}>internet</span>
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <SocialChip icon={<FaGithub size={13} />}   label="GitHub"   href="https://github.com/SXsid" />
          <SocialChip icon={<CiLinkedin size={14} />} label="LinkedIn" href="https://www.linkedin.com/in/shekharsid/" />
          <SocialChip icon={<FaXTwitter size={12} />} label="Twitter"  href="https://x.com/shekharTwts" />
          <SocialChip icon={<IoMailOutline size={13} />} label="Email" href="mailto:contact.sidshekhar@gmail.com" target="_self" />
        </div>
      </div>
    </div>
  );
}
