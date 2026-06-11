"use client";

import { motion } from "framer-motion";
import { PixelPanel } from "@/components/ui/pixel-panel";
import { cn } from "@/lib/cn";

type IdentityStatCardProps = {
  label: string;
  detail: string;
  marker: string;
  tone?: "cyan" | "amber" | "green" | "blue";
  className?: string;
};

export function IdentityStatCard({
  label,
  detail,
  marker,
  tone = "cyan",
  className,
}: IdentityStatCardProps) {
  return (
    <motion.div
      className={cn("group relative", className)}
      whileHover={{ y: -5, rotateX: 1.5, filter: "brightness(1.12)" }}
      whileTap={{ scale: 0.98 }}
    >
      <PixelPanel className="h-full min-h-28 p-4" tone={tone}>
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-cyan-muted/30 bg-background/70 font-mono text-sm font-semibold text-cyan-muted shadow-[var(--glow-cyan)]">
            <span className="animate-[node-pulse_3.3s_ease-in-out_infinite]">
              {marker}
            </span>
          </div>
          <div>
            <h3 className="font-mono text-sm font-semibold uppercase leading-5 text-foreground">
              {label}
            </h3>
            <p className="mt-2 text-xs leading-5 text-foreground/60">
              {detail}
            </p>
          </div>
        </div>

        <span
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-muted/70 to-transparent animate-[sweep-light_3.8s_linear_infinite]"
          aria-hidden="true"
        />
      </PixelPanel>
    </motion.div>
  );
}
