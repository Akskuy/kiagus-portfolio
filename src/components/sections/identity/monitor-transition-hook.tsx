"use client";

import { motion } from "framer-motion";
import { DataStream } from "@/components/motion/data-stream";
import { PixelPanel } from "@/components/ui/pixel-panel";

export function MonitorTransitionHook() {
  return (
    <PixelPanel className="mt-2 w-full max-w-[18rem] rounded-sm p-1.5" tone="amber">
      <motion.div
        className="relative rounded-sm border border-cyan-muted/20 bg-background/75 p-1 animate-[monitor-pulse_4.8s_ease-in-out_infinite]"
        whileHover={{ y: -4, filter: "brightness(1.12)" }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="absolute -top-1 left-1/2 h-1 w-12 -translate-x-1/2 rounded-t-sm border-x border-t border-cyan-muted/25 bg-surface-2" />
        <div className="relative h-11 overflow-hidden rounded-sm border border-cyan-muted/25 bg-[radial-gradient(circle_at_50%_45%,rgba(113,217,210,0.18),transparent_7rem),linear-gradient(180deg,rgba(11,17,24,0.9),rgba(5,7,10,0.98))]">
          <div className="absolute inset-0 micro-grid opacity-70" />
          <div className="absolute left-5 right-5 top-2">
            <DataStream tone="cyan" />
          </div>
          <div className="absolute bottom-2 left-8 right-12">
            <DataStream tone="amber" />
          </div>
          <span className="absolute left-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-[2px] bg-amber-soft shadow-[var(--glow-amber)] animate-[node-pulse_2.8s_ease-in-out_infinite]" />
          <span className="absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-[2px] bg-cyan-muted shadow-[var(--glow-cyan)] animate-[node-pulse_2.8s_ease-in-out_infinite] [animation-delay:0.24s]" />

          <div className="absolute inset-0 grid place-items-center px-3 text-center">
            <h3 className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cyan-muted md:text-xs">
              NEXT: CAPABILITY MATRIX
            </h3>
          </div>

          <span
            className="scanline-mask absolute inset-0 opacity-35 animate-[scanline-drift_7s_linear_infinite]"
            aria-hidden="true"
          />
        </div>
        <span className="mx-auto mt-1 block h-1 w-20 rounded-b-sm border-x border-b border-cyan-muted/20 bg-surface-2" />
      </motion.div>
    </PixelPanel>
  );
}
