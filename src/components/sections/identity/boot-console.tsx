"use client";

import { useEffect, useState } from "react";
import { PixelPanel } from "@/components/ui/pixel-panel";

const bootLines = [
  "Loading identity profile...",
  "Checking data science foundation...",
  "Mounting AI product builder layer...",
  "Syncing workflow automation logic...",
  "Preparing contact actions...",
];

export function BootConsole() {
  const [visibleLines, setVisibleLines] = useState(1);
  const [progress, setProgress] = useState(12);

  useEffect(() => {
    const lineTimer = window.setInterval(() => {
      setVisibleLines((current) => Math.min(bootLines.length, current + 1));
    }, 620);

    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          return 100;
        }

        return Math.min(100, current + 7);
      });
    }, 260);

    return () => {
      window.clearInterval(lineTimer);
      window.clearInterval(progressTimer);
    };
  }, []);

  return (
    <PixelPanel className="p-4" tone="cyan">
      <div>
        <p className="font-mono text-xs font-semibold uppercase text-cyan-muted terminal-cursor">
          Identity system warming up
        </p>
        <p className="mt-2 text-xs leading-5 text-foreground/60">
          A compact live check for Kiagus&apos;s profile, skills, and contact
          actions.
        </p>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-sm border border-cyan-muted/25 bg-background">
        <div
          className="h-full bg-gradient-to-r from-cyan-muted via-blue-soft to-green-soft shadow-[var(--glow-cyan)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-4 space-y-2 font-mono text-xs text-cyan-muted/80">
        {bootLines.slice(0, visibleLines).map((line, index) => (
          <p key={line} className="terminal-cursor">
            {String(index + 1).padStart(2, "0")} / {line}{" "}
            <span className="text-green-soft">
              {index + 1 < visibleLines || progress === 100 ? "OK" : "--"}
            </span>
          </p>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-cyan-muted/20 pt-3 font-mono text-xs uppercase">
        <span className="text-foreground/50">Status</span>
        <span className="text-green-soft">
          {progress >= 100 ? "Identity active" : "Loading"}
        </span>
      </div>
    </PixelPanel>
  );
}
