"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import ThemeToggle from "@/components/ThemeToggle";

const AVATAR = 72; // avatar size px
const HANG = 36; // how many px below banner the avatar hangs

/* ── Social chip ──────────────────────────────────────────── */
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
        fontFamily: "'Inter',sans-serif",
        textDecoration: "none",
        background: "var(--bg-hover)",
        border: "1px solid var(--border)",
        color: "var(--fg-muted)",
        transition: "color .14s,border-color .14s,background .14s",
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

/* ── CTA button ───────────────────────────────────────────── */
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
    fontFamily: "'Inter',sans-serif",
    textDecoration: "none",
    transition: "opacity .14s,color .14s,border-color .14s,background .14s",
  };
  return (
    <a
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
        primary
          ? (el.style.opacity = ".82")
          : ((el.style.color = "var(--fg)"),
            (el.style.borderColor = "var(--fg-sub)"),
            (el.style.background = "var(--bg-hover)"));
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        primary
          ? (el.style.opacity = "1")
          : ((el.style.color = "var(--fg-muted)"),
            (el.style.borderColor = "var(--border)"),
            (el.style.background = "transparent"));
      }}
    >
      {children}
    </a>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <div className="w-full md:w-[800px] mt-6 md:mt-10">
      {/*
       ┌──────────────────────────────────────────────────────┐
       │  ONE container — same width as banner                 │
       │  • rounded-2xl corners, border, auto height           │
       │  • overflow:hidden clips the banner image cleanly     │
       │    at the rounded top corners                         │
       │  • The BANNER div inside is overflow:visible so the   │
       │    avatar (absolute bottom:-HANG) isn't clipped by    │
       │    the banner — it just falls into the content area   │
       │    which is still inside this outer container         │
       └──────────────────────────────────────────────────────┘
      */}
      <div
        style={{
          borderRadius: "16px",
          overflow: "hidden" /* clips banner image corners */,
          border: "1px solid var(--border)",
          background: "var(--bg-card)" /* content area bg */,
          width: "100%",
        }}
      >
        {/* ── Banner ──────────────────────────────────────── */}
        {/*
          overflow:visible lets the avatar div (positioned at
          bottom:-HANG) visually extend below this div into
          the content area — the outer container's overflow:hidden
          only clips things beyond ITS own rounded border, not
          things still inside the container.
        */}
        <div
          style={{
            position: "relative",
            height: "clamp(180px,28vw,240px)",
            overflow: "visible",
          }}
        >
          {/* Image — absolutely fills banner, rounded top corners via outer overflow:hidden */}
          <img
            src="/banner.png"
            alt="banner"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 40%",
              display: "block",
            }}
          />

          {/* Bottom fade so text below stays readable */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom,transparent 40%,rgba(0,0,0,0.5) 100%)",
            }}
          />

          {/* Theme toggle — top-right of banner */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              zIndex: 10,
            }}
          >
            <ThemeToggle />
          </div>

          {/*
            Avatar — overlays the banner.
            bottom: -HANG  →  top half inside banner, bottom half
                              inside content area (all still within
                              the outer container, never clipped).
            border colour matches bg-card so it "cuts out" cleanly.
          */}
          <div
            style={{
              position: "absolute",
              bottom: `-${HANG}px`,
              left: "20px",
              zIndex: 20,
            }}
          >
            <img
              src="https://i.ibb.co/spWbbdZM/Screenshot-from-2025-12-23-03-19-13.png"
              alt="Sudhanshu Shekhar"
              style={{
                width: `${AVATAR}px`,
                height: `${AVATAR}px`,
                borderRadius: "12px",
                objectFit: "cover",
                display: "block",
                border: "3px solid var(--bg-card)",
                boxShadow: "0 0 0 1px var(--border)",
              }}
            />
          </div>
        </div>

        {/* ── Profile content ─────────────────────────────── */}
        {/* padding-top = HANG + gap so first content clears avatar bottom */}
        <div
          style={{
            padding: `${HANG + 14}px 20px 24px`,
          }}
        >
          {/* Name + Resume */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "4px",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                <h1
                  style={{
                    color: "var(--fg)",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  Sudhanshu Shekhar
                </h1>
                <span
                  style={{
                    color: "var(--fg-sub)",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "0.82rem",
                  }}
                >
                  @sidshekhar
                </span>
              </div>
              <p
                style={{
                  color: "var(--fg-muted)",
                  fontFamily: "'Inter',sans-serif",
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

            {/* Resume */}
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
                fontFamily: "'Inter',sans-serif",
                textDecoration: "none",
                background: "var(--bg-hover)",
                border: "1px solid var(--border)",
                color: "var(--fg-muted)",
                transition: "color .14s,border-color .14s",
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

          {/* Bio */}
          <p
            style={{
              color: "var(--fg-muted)",
              maxWidth: "520px",
              lineHeight: 1.7,
              margin: "12px 0 16px",
              fontFamily: "ui-serif,Georgia,serif",
              fontSize: "0.9rem",
            }}
          >
            Self-taught{" "}
            <span style={{ color: "var(--fg)", fontWeight: 600 }}>
              Backend &amp; Infrastructure Engineer
            </span>{" "}
            — I build systems that stay up, ship tools people actually use, and
            care about reliability, observability, and clean code.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "20px",
            }}
          >
            <CTAButton
              href="https://cal.com/sudhanshu-shekhar-ohi3pb/15min"
              primary
            >
              Schedule a call ·
            </CTAButton>
            <CTAButton href="mailto:contact.sidshekhar@gmail.com">
              Drop a mail
            </CTAButton>
          </div>

          {/* Find me on the internet */}
          <p
            style={{
              color: "var(--fg-sub)",
              fontFamily: "'Inter',sans-serif",
              fontSize: "0.8rem",
              marginBottom: "8px",
            }}
          >
            Find me on the{" "}
            <span style={{ color: "var(--fg)", fontWeight: 600 }}>
              internet
            </span>
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
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
      </div>
    </div>
  );
}
