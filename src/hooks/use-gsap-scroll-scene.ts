"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

type ScrollSceneOptions = {
  enabled?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  onProgress?: (progress: number) => void;
};

gsap.registerPlugin(ScrollTrigger);

export function useGsapScrollScene<T extends HTMLElement>(
  ref: RefObject<T | null>,
  {
    enabled = true,
    start = "top top",
    end = "bottom bottom",
    scrub = 0.7,
    pin = false,
    onProgress,
  }: ScrollSceneOptions = {},
) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!enabled || reduceMotion || !ref.current) {
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start,
      end,
      scrub,
      pin,
      onUpdate: (self) => onProgress?.(self.progress),
    });

    return () => {
      trigger.kill();
    };
  }, [enabled, end, onProgress, pin, reduceMotion, ref, scrub, start]);
}
