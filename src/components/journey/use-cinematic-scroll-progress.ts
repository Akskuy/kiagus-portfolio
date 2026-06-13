"use client";

import { useEffect, useState, type RefObject } from "react";

type UseCinematicScrollProgressOptions = {
  enabled?: boolean;
};

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function useCinematicScrollProgress<T extends HTMLElement>(
  ref: RefObject<T | null>,
  { enabled = true }: UseCinematicScrollProgressOptions = {},
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let frame = 0;
    const visualViewport = window.visualViewport;

    function measure() {
      const element = ref.current;

      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = visualViewport?.height ?? window.innerHeight;
      const scrollableDistance = Math.max(1, rect.height - viewportHeight);
      const nextProgress = clamp01(-rect.top / scrollableDistance);

      setProgress((currentProgress) =>
        Math.abs(currentProgress - nextProgress) > 0.001
          ? nextProgress
          : currentProgress,
      );
    }

    function requestMeasure() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(measure);
    }

    requestMeasure();
    window.addEventListener("scroll", requestMeasure, { passive: true });
    window.addEventListener("resize", requestMeasure);
    visualViewport?.addEventListener("resize", requestMeasure);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestMeasure);
      window.removeEventListener("resize", requestMeasure);
      visualViewport?.removeEventListener("resize", requestMeasure);
    };
  }, [enabled, ref]);

  return progress;
}
