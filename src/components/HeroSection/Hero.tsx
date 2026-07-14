import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import ThemeToggle from "@/components/ThemeToggle";

/* ── Mobile view: name + compact icon row ─────────────── */
function MobileHero() {
  return (
    <div className="flex md:hidden flex-col pt-8 pb-2 px-2 w-full">
      {/* Name + role */}
      <div className="mb-4">
        <h1 className="text-base font-semibold leading-tight" style={{ color: "var(--fg)" }}>
          Sudhanshu Shekhar
        </h1>
        <p className="text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>
          Backend &amp; Infrastructure Engineer · Delhi, India
        </p>
      </div>

      {/* Icon links row */}
      <div className="flex items-center gap-3" style={{ color: "var(--fg-muted)" }}>
        <a href="https://github.com/SXsid" target="_blank" aria-label="GitHub"
          className="transition-colors hover:opacity-100 opacity-70"
          style={{ color: "var(--fg-muted)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
        >
          <FaGithub size={17} />
        </a>
        <a href="https://x.com/shekharTwts" target="_blank" aria-label="Twitter"
          className="transition-colors"
          style={{ color: "var(--fg-muted)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
        >
          <FaXTwitter size={16} />
        </a>
        <a href="https://www.linkedin.com/in/shekharsid/" target="_blank" aria-label="LinkedIn"
          className="transition-colors"
          style={{ color: "var(--fg-muted)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
        >
          <CiLinkedin size={19} />
        </a>
        <a href="mailto:contact.sidshekhar@gmail.com" aria-label="Email"
          className="transition-colors"
          style={{ color: "var(--fg-muted)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
        >
          <IoMailUnreadOutline size={18} />
        </a>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

/* ── Desktop hero card ─────────────────────────────────── */
function DesktopHero() {
  return (
    <div className="hidden md:flex md:w-[800px] mt-24 mb-8 items-center gap-5">
      {/* Avatar */}
      <img
        src="https://i.ibb.co/spWbbdZM/Screenshot-from-2025-12-23-03-19-13.png"
        width={64}
        height={64}
        alt="Sudhanshu Shekhar"
        className="rounded-lg object-cover flex-shrink-0"
        style={{ border: "1px solid var(--border)" }}
      />

      {/* Info */}
      <div className="flex flex-col gap-1 flex-1">
        <h1 className="text-base font-semibold leading-tight" style={{ color: "var(--fg)" }}>
          Sudhanshu Shekhar
        </h1>
        <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
          Backend &amp; Infrastructure Engineer
        </p>
        <div className="flex items-center gap-1 text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>
          <MdOutlineLocationOn size={12} />
          <span>Delhi, India</span>
          <span className="mx-1" style={{ opacity: 0.3 }}>·</span>
          <a
            href="mailto:contact.sidshekhar@gmail.com"
            className="transition-colors"
            onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
          >
            contact.sidshekhar@gmail.com
          </a>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <a
          target="_blank"
          href="https://github.com/SXsid"
          aria-label="GitHub"
          className="icon-btn"
        >
          <FaGithub size={14} />
        </a>
        <a
          target="_blank"
          href="https://x.com/shekharTwts"
          aria-label="Twitter / X"
          className="icon-btn"
        >
          <FaXTwitter size={13} />
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <MobileHero />
      <DesktopHero />
    </>
  );
}
