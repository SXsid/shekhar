"use client";
import { IBlogCard } from "@/Types/type";
import React from "react";

function BlogCard({ title, dateOfpublish, link, logo, color, topic }: IBlogCard) {
  return (
    <div
      className="w-full md:w-[760px] py-4 px-2 transition-colors"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <a href={link} target="_blank" className="block w-full group">
        <div className="flex items-center gap-4 w-full">
          {logo && (
            <div
              className="rounded-lg p-2 flex-shrink-0"
              style={{ backgroundColor: `${color}18` }}
            >
              {logo}
            </div>
          )}
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex justify-between gap-2 items-start flex-wrap">
              <h2
                className="text-base font-semibold leading-snug flex-1 min-w-[70%] group-hover:underline group-hover:underline-offset-4 transition-all"
                style={{ color: "var(--fg)" }}
              >
                {title}
              </h2>
              <span
                className="text-xs font-mono px-2 py-0.5 rounded-full flex-shrink-0 whitespace-nowrap"
                style={{
                  backgroundColor: `${color}15`,
                  color: color,
                  border: `1px solid ${color}30`,
                }}
              >
                {topic}
              </span>
            </div>
            <p className="font-mono text-xs mt-1.5" style={{ color: "var(--fg-muted)" }}>
              {dateOfpublish}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default BlogCard;