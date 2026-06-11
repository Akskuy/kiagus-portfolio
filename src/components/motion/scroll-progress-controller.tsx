"use client";

import { useEffect } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ScrollProgressController() {
  const progress = useScrollProgress();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scroll-progress",
      progress.toFixed(4),
    );
  }, [progress]);

  return null;
}
