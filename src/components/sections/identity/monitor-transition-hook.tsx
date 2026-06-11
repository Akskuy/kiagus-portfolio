"use client";

import { motion } from "framer-motion";
import { DataStream } from "@/components/motion/data-stream";
import { PixelPanel } from "@/components/ui/pixel-panel";

export function MonitorTransitionHook() {
  return (
    <PixelPanel className="p-3" tone="amber">
      <motion.div
        className="rounded-md border border-cyan-muted/20 bg-background/75 p-2 animate-[monitor-pulse_4.8s_ease-in-out_infinite]"
        whileHover={{ y: -4, filter: "brightness(1.12)" }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative min-h-24 overflow-hidden rounded-sm border border-cyan-muted/20 bg-[radial-gradient(circle_at_50%_45%,rgba(113,217,210,0.16),transparent_8rem),linear-gradient(180deg,rgba(11,17,24,0.88),rgba(5,7,10,0.96))]">
          <div className="absolute inset-0 micro-grid opacity-70" />
          <div className="absolute left-5 right-5 top-5">
            <DataStream tone="cyan" />
          </div>
          <div className="absolute bottom-5 left-8 right-12">
            <DataStream tone="amber" />
          </div>

          <div className="absolute inset-0 grid place-items-center p-5 text-center">
            <div>
              <h3 className="font-mono text-sm font-semibold uppercase text-cyan-muted md:text-base">
                NEXT: CAPABILITY MATRIX
              </h3>
            </div>
          </div>

          <span
            className="scanline-mask absolute inset-0 opacity-35 animate-[scanline-drift_7s_linear_infinite]"
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </PixelPanel>
  );
}
