"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { AnimatedBorder } from "@/components/ui/animated-border";
import { MicroLabel } from "@/components/ui/micro-label";
import { ScanlineOverlay } from "@/components/ui/scanline-overlay";
import { cn } from "@/lib/cn";

type PixelPanelProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children?: ReactNode;
  frameLabel?: string;
  tone?: "cyan" | "amber" | "green" | "blue";
  active?: boolean;
  withScanline?: boolean;
};

const toneClasses = {
  cyan: "border-cyan-muted/30 shadow-[0_0_24px_rgba(113,217,210,0.1)]",
  amber: "border-amber-soft/30 shadow-[0_0_24px_rgba(241,185,90,0.1)]",
  green: "border-green-soft/30 shadow-[0_0_24px_rgba(141,225,156,0.1)]",
  blue: "border-blue-soft/30 shadow-[0_0_24px_rgba(139,185,255,0.1)]",
};

export function PixelPanel({
  className,
  frameLabel,
  tone = "cyan",
  active = false,
  withScanline = true,
  children,
  ...props
}: PixelPanelProps) {
  return (
    <motion.div
      className={cn(
        "alive-border group/panel micro-grid relative isolate overflow-hidden rounded-md border bg-surface-1/90 p-4 text-foreground shadow-[var(--shadow-panel)] backdrop-blur-md",
        "animate-[panel-breathe_7s_ease-in-out_infinite]",
        toneClasses[tone],
        active && "border-cyan-muted/60 bg-surface-2/90 shadow-[var(--glow-cyan)]",
        className,
      )}
      whileHover={{
        y: -4,
        rotateX: 1.2,
        rotateY: -1.2,
        filter: "brightness(1.08)",
      }}
      whileTap={{ scale: 0.985, filter: "brightness(1.16)" }}
      {...props}
    >
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white/[0.07] to-transparent"
        aria-hidden="true"
      />
      <AnimatedBorder active={active} tone={tone} />
      <span
        className="pointer-events-none absolute inset-1 rounded-[3px] border border-foreground/10"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute left-3 top-0 h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent text-cyan-muted animate-[sweep-light_4.6s_linear_infinite]"
        aria-hidden="true"
      />
      {frameLabel ? (
        <MicroLabel
          active={active}
          className="absolute right-3 top-3 z-20"
          tone={tone}
        >
          {frameLabel}
        </MicroLabel>
      ) : null}
      {withScanline ? (
        <ScanlineOverlay active intensity={active ? "medium" : "subtle"} sweep={active} />
      ) : null}
      {children}
    </motion.div>
  );
}
