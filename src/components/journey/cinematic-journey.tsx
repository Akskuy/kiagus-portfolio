"use client";

import { useRef, type CSSProperties } from "react";
import { PinnedJourneyStage } from "@/components/journey/pinned-journey-stage";
import { useCinematicScrollProgress } from "@/components/journey/use-cinematic-scroll-progress";
import { IdentitySnapshotSection } from "@/components/sections/identity/identity-snapshot-section";

const JOURNEY_SCROLL_DISTANCE = "h-[300svh]";

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function CinematicJourney() {
  const journeyRef = useRef<HTMLElement | null>(null);
  const progress = useCinematicScrollProgress(journeyRef);
  const identityToCapabilityProgress = clamp01(progress / 0.48);
  const capabilityToKnowledgeProgress = clamp01((progress - 0.48) / 0.52);
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
        {() => (
          <IdentitySnapshotSection
            journeyProgress={identityToCapabilityProgress}
            knowledgeProgress={capabilityToKnowledgeProgress}
          />
        )}
      </PinnedJourneyStage>
    </main>
  );
}
