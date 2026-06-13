"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

type PinnedJourneyStageProps = {
  ariaLabel?: string;
  children: ReactNode | ((progress: number) => ReactNode);
  className?: string;
  progress?: number;
};

export function PinnedJourneyStage({
  ariaLabel = "Pinned cinematic journey stage",
  children,
  className,
  progress = 0,
}: PinnedJourneyStageProps) {
  const style = {
    "--journey-progress": progress,
  } as CSSProperties;

  return (
    <div
      aria-label={ariaLabel}
      className={cn(
        "sticky top-0 isolate h-[100svh] overflow-hidden bg-background",
        className,
      )}
      data-journey-stage="pinned"
      data-journey-progress={progress.toFixed(3)}
      role="region"
      style={style}
    >
      {typeof children === "function" ? children(progress) : children}
    </div>
  );
}
