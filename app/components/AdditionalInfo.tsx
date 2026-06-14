"use client";

import { useState } from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import GitHubLinks from "./GitHubLinks";

const donutData = [
  { label: "Built by me", value: 75, color: "#8b5cf6" },
  { label: "Assisted by AI", value: 25, color: "#14b8a6" },
];

function DonutChart() {
  const radius = 60;
  const strokeWidth = 20;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  let offset = 0;

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
      <svg
        width={radius * 2}
        height={radius * 2}
        className="-rotate-90 shrink-0"
      >
        {donutData.map((slice) => {
          const segmentLength = (slice.value / 100) * circumference;
          const dashArray = `${segmentLength} ${circumference - segmentLength}`;
          const dashOffset = -offset;
          offset += segmentLength;

          return (
            <circle
              key={slice.label}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              fill="transparent"
              stroke={slice.color}
              strokeWidth={strokeWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          );
        })}
        <text
          x={radius}
          y={radius + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white text-xl font-bold"
          transform="rotate(90, 60, 60)"
        >
          100%
        </text>
      </svg>

      <div className="space-y-2">
        {donutData.map((slice) => (
          <div key={slice.label} className="flex items-center gap-2 text-sm">
            <span
              className="h-3 w-3 shrink-0 rounded-full"
              style={{ backgroundColor: slice.color }}
            />
            <span className="text-gray-300">{slice.label}</span>
            <span className="ml-auto font-semibold text-white">
              {slice.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AdditionalInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="border-t border-white/5 px-6 py-8 sm:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-white/5 px-5 py-2 text-sm font-medium text-violet-300 transition hover:border-violet-400 hover:bg-white/10"
        >
          <ExternalLinkIcon className="h-4 w-4" />
          {isOpen ? "Hide" : "Show"} Additional Info
        </button>

        {isOpen ? (
          <div className="mt-8 space-y-10 text-left">
            {/* Contribution donut */}
            <div className="rounded-xl border border-white/5 bg-white/2 p-6 sm:p-8">
              <h3 className="mb-6 text-center text-lg font-semibold text-white">
                Project Breakdown
              </h3>
              <div className="flex justify-center">
                <DonutChart />
              </div>
              <p className="mt-6 text-center text-sm text-gray-500">
                Core functionality — auth, CRUD, database schema, and routing —
                was built by me. The landing page, component extraction, and
                performance refactoring were assisted by AI following Vercel
                React best practices and Tailwind best practices.
              </p>
            </div>
            <GitHubLinks />
          </div>
        ) : null}
      </div>
    </section>
  );
}
