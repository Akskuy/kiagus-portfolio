"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { DataPacketLine } from "@/components/ui/data-packet-line";
import { StatusLED } from "@/components/ui/status-led";
import { cn } from "@/lib/cn";

type PixelButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children?: ReactNode;
  tone?: "cyan" | "amber" | "green";
  isActive?: boolean;
};

const toneClasses = {
  cyan: "border-cyan-muted/40 text-cyan-muted shadow-[0_0_18px_rgba(113,217,210,0.1)]",
  amber: "border-amber-soft/40 text-amber-soft shadow-[0_0_18px_rgba(241,185,90,0.1)]",
  green: "border-green-soft/40 text-green-soft shadow-[0_0_18px_rgba(141,225,156,0.1)]",
};

export function PixelButton({
  className,
  tone = "cyan",
  isActive = false,
  type = "button",
  children,
  ...props
}: PixelButtonProps) {
  return (
    <motion.button
      className={cn(
        "alive-border group/button relative isolate inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-sm border bg-surface-1/90 px-4 py-2 font-mono text-sm font-semibold uppercase outline-none",
        "focus-visible:ring-2 focus-visible:ring-cyan-muted/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        toneClasses[tone],
        isActive && "bg-cyan-muted/10 text-foreground shadow-[var(--glow-cyan)]",
        className,
      )}
      type={type}
      whileHover={{
        y: -2,
        scale: 1.015,
        filter: "brightness(1.12)",
      }}
      whileTap={{ scale: 0.96, filter: "brightness(1.22)" }}
      {...props}
    >
      <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent animate-[sweep-light_3.4s_linear_infinite]" />
      <span className="absolute inset-1 rounded-[2px] border border-current/15" />
      <span className="absolute bottom-1 left-3 right-3">
        <DataPacketLine active={isActive} tone={tone} />
      </span>
      <span className="relative z-10">{children}</span>
      <StatusLED active={isActive} size="sm" tone={tone} />
    </motion.button>
  );
}
