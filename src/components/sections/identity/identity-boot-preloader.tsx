"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DataPacketLine } from "@/components/ui/data-packet-line";
import { MicroLabel } from "@/components/ui/micro-label";
import { PixelSeparator } from "@/components/ui/pixel-separator";
import { ScannerBeam } from "@/components/ui/scanner-beam";
import { StatusLED } from "@/components/ui/status-led";
import { cn } from "@/lib/cn";

type IdentityBootPreloaderProps = {
  onComplete: () => void;
};

const bootLines = [
  "Initialize identity room environment",
  "Mount lanyard pass rig",
  "Sync portrait asset and access chips",
  "Calibrate scanner sweep",
  "Release Scene 1 interface",
];

const progressSegments = Array.from({ length: 18 }, (_, index) => index);

export function IdentityBootPreloader({ onComplete }: IdentityBootPreloaderProps) {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = reduceMotion ? 900 : 3300;
    const startedAt = window.performance.now();

    const interval = window.setInterval(() => {
      const elapsed = window.performance.now() - startedAt;
      setProgress(Math.min(100, Math.round((elapsed / duration) * 100)));
    }, 80);

    const releaseTimer = window.setTimeout(() => {
      setProgress(100);
      onComplete();
    }, duration + 260);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(releaseTimer);
    };
  }, [onComplete, reduceMotion]);

  const activeLine = useMemo(
    () => Math.min(bootLines.length - 1, Math.floor((progress / 100) * bootLines.length)),
    [progress],
  );

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="absolute inset-0 z-50 grid place-items-center overflow-hidden bg-background/95 px-[var(--page-pad)] backdrop-blur-xl"
      exit={{
        clipPath: "inset(0 0 100% 0)",
        opacity: 0,
        transition: { duration: reduceMotion ? 0.01 : 0.78, ease: [0.16, 1, 0.3, 1] },
      }}
      initial={{ opacity: 0, y: 12 }}
      role="status"
    >
      <div className="absolute inset-0 pixel-grid opacity-25 animate-[grid-drift_22s_linear_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(113,217,210,0.18),transparent_25rem),linear-gradient(180deg,rgba(5,7,10,0.1),rgba(5,7,10,0.9))]" />
      <div className="absolute left-[12%] right-[12%] top-[14%] h-px bg-cyan-muted/20">
        <span className="absolute top-0 h-px w-28 bg-cyan-muted shadow-[var(--glow-cyan)] animate-[data-packet-x_3.8s_linear_infinite]" />
      </div>
      <div className="absolute inset-x-[16%] bottom-[16%] h-px bg-amber-soft/20">
        <span className="absolute top-0 h-px w-24 bg-amber-soft shadow-[var(--glow-amber)] animate-[data-packet-x_4.6s_linear_infinite]" />
      </div>

      <motion.div
        animate={{
          filter: progress > 96 ? "brightness(1.2)" : "brightness(1)",
          scale: progress > 96 ? 0.985 : 1,
        }}
        className="alive-border relative w-full max-w-2xl overflow-hidden rounded-md border border-cyan-muted/35 bg-surface-1/90 p-4 shadow-[var(--shadow-panel)] md:p-5"
      >
        <ScannerBeam active tone="cyan" />
        <span className="absolute inset-1 rounded-sm border border-foreground/10" aria-hidden="true" />
        <span className="scanline-mask absolute inset-0 opacity-30 animate-[scanline-drift_7s_linear_infinite]" aria-hidden="true" />
        <span className="absolute inset-0 micro-grid opacity-50" aria-hidden="true" />

        <div className="relative z-10 grid gap-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <MicroLabel active led tone="cyan">
                identity system startup
              </MicroLabel>
              <h2 className="mt-4 font-mono text-xl font-black uppercase leading-none text-foreground md:text-3xl">
                Mounting Kiagus Arif Rahman
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-foreground/65">
                Preparing the premium lanyard identity pass, scanner frame, and
                scene interface.
              </p>
            </div>
            <div className="grid justify-items-end gap-2 font-mono text-xs uppercase text-cyan-muted">
              <StatusLED active size="lg" tone={progress > 92 ? "green" : "cyan"} />
              <span className={progress > 92 ? "text-green-soft terminal-cursor" : "terminal-cursor"}>
                {progress > 92 ? "release ready" : "booting"}
              </span>
            </div>
          </div>

          <PixelSeparator active label="system rail" tone="cyan" />

          <div className="grid gap-2 font-mono text-xs uppercase tracking-[0.08em]">
            {bootLines.map((line, index) => {
              const isComplete = index < activeLine || progress >= 100;
              const isActive = index === activeLine && progress < 100;

              return (
                <div
                  className={cn(
                    "grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-sm border px-3 py-2",
                    isComplete
                      ? "border-green-soft/25 bg-green-soft/10 text-green-soft"
                      : isActive
                        ? "border-cyan-muted/30 bg-cyan-muted/10 text-cyan-muted"
                        : "border-foreground/10 bg-background/45 text-foreground/40",
                  )}
                  key={line}
                >
                  <StatusLED active={isComplete || isActive} size="sm" tone={isComplete ? "green" : "cyan"} />
                  <span>{line}</span>
                  <span>{isComplete ? "OK" : isActive ? "RUN" : "--"}</span>
                </div>
              );
            })}
          </div>

          <div className="grid gap-3">
            <div className="grid grid-cols-[repeat(18,minmax(0,1fr))] gap-1" aria-hidden="true">
              {progressSegments.map((segment) => {
                const isActive = segment <= Math.floor((progress / 100) * (progressSegments.length - 1));

                return (
                  <span
                    className={cn(
                      "h-2 rounded-[1px] border",
                      isActive
                        ? "border-cyan-muted/50 bg-cyan-muted shadow-[var(--glow-cyan)]"
                        : "border-cyan-muted/15 bg-background/70",
                    )}
                    key={segment}
                  />
                );
              })}
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 font-mono text-xs uppercase text-foreground/55">
              <span>00</span>
              <DataPacketLine active tone={progress > 92 ? "green" : "cyan"} />
              <span>{String(progress).padStart(3, "0")}%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
