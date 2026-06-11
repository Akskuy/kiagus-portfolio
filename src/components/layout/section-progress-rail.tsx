"use client";

import { motion } from "framer-motion";
import { foundationRail, railSections } from "@/config/navigation";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { cn } from "@/lib/cn";

const allNodes = [foundationRail, ...railSections];

export function SectionProgressRail() {
  const progress = useScrollProgress();
  const plannedProgress = Math.min(railSections.length - 1, Math.floor(progress * railSections.length));

  const jumpToProgress = (index: number) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const target = index === 0 ? 0 : (scrollable * (index - 1)) / Math.max(1, railSections.length - 1);

    window.scrollTo({
      top: target,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <nav
      className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      aria-label="Portfolio progress foundation"
    >
      <div className="alive-border relative rounded-md border border-cyan-muted/25 bg-surface-1/90 p-2 shadow-[var(--shadow-panel)] backdrop-blur-md">
        <div className="absolute left-1/2 top-4 h-[calc(100%-2rem)] w-px -translate-x-1/2 overflow-hidden bg-cyan-muted/20">
          <motion.span
            className="absolute left-0 top-0 block w-px bg-gradient-to-b from-cyan-muted via-amber-soft to-green-soft shadow-[var(--glow-cyan)]"
            style={{ height: `${Math.max(8, progress * 100)}%` }}
          />
        </div>

        <ol className="relative z-10 flex flex-col gap-3">
          {allNodes.map((node) => {
            const isFoundation = node.status === "foundation";
            const isActive = isFoundation ? progress < 0.04 : node.index - 1 <= plannedProgress;

            return (
              <li key={node.id} className="group relative flex items-center justify-end">
                <motion.button
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-sm border bg-background/90 font-mono text-[11px] text-foreground/60 outline-none",
                    "focus-visible:ring-2 focus-visible:ring-cyan-muted/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive
                      ? "border-cyan-muted/70 text-cyan-muted shadow-[var(--glow-cyan)]"
                      : "border-cyan-muted/20",
                  )}
                  type="button"
                  aria-label={`${node.label} ${node.status}`}
                  onClick={() => jumpToProgress(node.index)}
                  whileHover={{
                    x: -4,
                    scale: 1.08,
                    filter: "brightness(1.18)",
                  }}
                  whileTap={{ scale: 0.94 }}
                >
                  <span className="absolute inset-1 rounded-[2px] border border-current/20 animate-[node-pulse_3.4s_ease-in-out_infinite]" />
                  {isFoundation ? "G" : String(node.index).padStart(2, "0")}
                </motion.button>

                <span className="pointer-events-none absolute right-12 min-w-48 rounded-sm border border-cyan-muted/20 bg-surface-0/95 px-3 py-2 font-mono text-xs uppercase text-foreground/75 opacity-0 shadow-[var(--shadow-panel)] group-hover:opacity-100">
                  {node.label}
                  <span className="ml-2 text-cyan-muted/80">{node.status}</span>
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
