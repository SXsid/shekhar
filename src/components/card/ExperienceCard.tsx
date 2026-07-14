import React from "react";
import { IExperienceCard } from "@/Types/type";

function ExperienceCard({
  positionTitle,
  companyName,
  from,
  to,
  imageURL,
  bgcolor,
}: IExperienceCard & { isFirst: boolean; isLast: boolean }) {
  return (
    <div className="flex py-3 pl-10 pr-2 sm:pl-12 relative">
      <div className="flex sm:flex-row w-full py-2">
        {/* Logo */}
        <div className="lg:mr-4 mr-2 mb-3 sm:mb-0">
          <div
            className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
            style={{ backgroundColor: bgcolor }}
          >
            {imageURL && (
              <img
                src={imageURL}
                alt={companyName ?? "freelance"}
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="lg:flex lg:justify-between lg:w-full">
          <div>
            <h3 className="text-base font-medium" style={{ color: "var(--fg)" }}>
              {positionTitle}
            </h3>
            <h4 className="text-sm" style={{ color: "var(--fg-muted)" }}>
              {companyName}
            </h4>
          </div>
          <div
            className="text-xs hidden lg:block mt-1 font-mono"
            style={{ color: "var(--fg-muted)" }}
          >
            {from} — {to}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
