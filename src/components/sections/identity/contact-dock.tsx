"use client";

import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import { DataStream } from "@/components/motion/data-stream";

export function ContactDock() {
  return (
    <motion.div
      className="alive-border relative z-30 overflow-hidden rounded-sm border border-cyan-muted/30 bg-surface-1/90 px-3 py-2 shadow-[var(--shadow-panel)] backdrop-blur-md md:px-5"
      whileHover={{ y: -3, filter: "brightness(1.1)" }}
      whileTap={{ scale: 0.992 }}
    >
      <span className="absolute inset-1 rounded-sm border border-foreground/10" aria-hidden="true" />
      <span
        className="scanline-mask absolute inset-0 opacity-25 animate-[scanline-drift_9s_linear_infinite]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-8 top-0">
        <DataStream tone="cyan" />
      </div>
      <div className="absolute inset-x-14 bottom-0">
        <DataStream tone="amber" />
      </div>

      <div className="pointer-events-none absolute inset-3" aria-hidden="true">
        {[
          "left-0 top-0 border-l border-t",
          "right-0 top-0 border-r border-t",
          "bottom-0 left-0 border-b border-l",
          "bottom-0 right-0 border-b border-r",
        ].map((position) => (
          <span
            key={position}
            className={`absolute h-4 w-4 border-cyan-muted/60 animate-[corner-spark_4s_ease-in-out_infinite] ${position}`}
          />
        ))}
      </div>

      <div className="relative z-10 grid items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.06em] text-foreground/80 sm:grid-cols-[1fr_auto_1fr] md:text-sm">
        <div className="relative flex min-h-10 items-center justify-center gap-3 overflow-hidden rounded-sm border border-amber-soft/25 bg-background/45 px-3 py-1.5 sm:justify-start">
          <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(241,185,90,0.08)_1px,transparent_1px)] bg-[length:14px_14px] animate-[led-chase_2.2s_linear_infinite]" />
          <span className="relative z-10 h-2 w-2 rounded-[2px] bg-amber-soft shadow-[var(--glow-amber)] animate-[node-pulse_2.8s_ease-in-out_infinite]" />
          <span className="relative z-10">Scene 01 online</span>
          <span className="absolute inset-x-4 bottom-1 h-px bg-gradient-to-r from-transparent via-amber-soft/60 to-transparent animate-[sweep-light_3.8s_linear_infinite]" />
        </div>

        <span className="relative hidden h-10 w-12 place-items-center font-mono text-cyan-muted sm:grid">
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-muted/45 to-transparent" />
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-cyan-muted shadow-[var(--glow-cyan)] animate-[node-pulse_2.2s_ease-in-out_infinite]" />
          <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-muted/40 to-transparent animate-[sweep-light_4s_linear_infinite]" />
          <span className="relative z-10 text-foreground/70">|</span>
        </span>

        <div className="relative flex min-h-10 items-center justify-center gap-3 overflow-hidden rounded-sm border border-cyan-muted/25 bg-background/45 px-3 py-1.5 sm:justify-end">
          <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(113,217,210,0.08)_1px,transparent_1px)] bg-[length:12px_12px] animate-[led-chase_1.8s_linear_infinite]" />
          <span className="relative z-10">Scroll to explore</span>
          <span className="relative z-10 grid h-7 w-7 place-items-center rounded-sm border border-cyan-muted/35 bg-cyan-muted/10 text-cyan-muted shadow-[var(--glow-cyan)]">
            <ChevronsDown className="h-5 w-5 animate-[badge-float_1.8s_ease-in-out_infinite]" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
