"use client";

import { useRef, type CSSProperties } from "react";
import { PinnedJourneyStage } from "@/components/journey/pinned-journey-stage";
import { useCinematicScrollProgress } from "@/components/journey/use-cinematic-scroll-progress";
import { IdentitySnapshotSection } from "@/components/sections/identity/identity-snapshot-section";

const JOURNEY_SCROLL_DISTANCE = "h-[260svh]";

export function CinematicJourney() {
  const journeyRef = useRef<HTMLElement | null>(null);
  const progress = useCinematicScrollProgress(journeyRef);
  const style = {
    "--journey-progress": progress,
  } as CSSProperties;

  return (
    <main
      aria-label="Kiagus Arif Rahman cinematic portfolio journey"
      className={`relative ${JOURNEY_SCROLL_DISTANCE} bg-background`}
      data-cinematic-progress={progress.toFixed(3)}
      ref={journeyRef}
      style={style}
    >
      <PinnedJourneyStage
        ariaLabel="Pinned cinematic portfolio viewport"
        progress={progress}
      >
        {(stageProgress) => (
          <IdentitySnapshotSection journeyProgress={stageProgress} />
        )}
      </PinnedJourneyStage>
    </main>
  );
}
