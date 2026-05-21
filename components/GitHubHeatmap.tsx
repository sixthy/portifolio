"use client";

import { useMemo } from "react";

function generateFakeContributions(): number[][] {
  const weeks = 53;
  const days = 7;
  const grid: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      const r = Math.random();
      if (r < 0.45) week.push(0);
      else if (r < 0.65) week.push(1);
      else if (r < 0.80) week.push(2);
      else if (r < 0.92) week.push(3);
      else week.push(4);
    }
    grid.push(week);
  }
  // sprinkle a few special pink cells
  grid[32][1] = 5;
  grid[33][2] = 5;
  return grid;
}

const COLORS = [
  "#161b22", // 0 - empty
  "#0e4429", // 1
  "#006d32", // 2
  "#26a641", // 3
  "#39d353", // 4
  "#e040fb", // 5 - special
];

export default function GitHubHeatmap({ handle }: { handle: string }) {
  const grid = useMemo(() => generateFakeContributions(), []);

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <div className="flex gap-[3px]" style={{ minWidth: "700px" }}>
          {grid.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((level, di) => (
                <div
                  key={di}
                  className="w-[10px] h-[10px] rounded-[2px]"
                  style={{ backgroundColor: COLORS[level] ?? COLORS[0] }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 h-[2px] w-40 bg-[#26a641] rounded-full" />
      <div className="mt-4 flex items-center justify-between text-xs text-[#6b7280]">
        <span>{handle} on GitHub</span>
        <a
          href={`https://github.com/${handle.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-white transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          View Profile
        </a>
      </div>
    </div>
  );
}
