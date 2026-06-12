"use client";

import type { ReactNode } from "react";
import { AnimatedBorder } from "@/components/ui/animated-border";
import { DataPacketLine } from "@/components/ui/data-packet-line";
import { IconTile } from "@/components/ui/icon-tile";
import { MicroLabel } from "@/components/ui/micro-label";
import { PixelPanel } from "@/components/ui/pixel-panel";
import { ScannerBeam } from "@/components/ui/scanner-beam";
import { type UiTone } from "@/components/ui/status-led";
import { cn } from "@/lib/cn";

type PremiumPlaceholderProps = {
  className?: string;
  icon?: ReactNode;
  label?: string;
  note?: string;
  title?: string;
  tone?: UiTone;
};

export function PremiumPlaceholder({
  className,
  icon,
  label = "asset pending",
  note = "Replace with a real project asset later.",
  title = "Premium Placeholder",
  tone = "cyan",
}: PremiumPlaceholderProps) {
  return (
    <PixelPanel
      active
      className={cn("group/reveal min-h-52 p-4", className)}
      tone={tone}
    >
      <AnimatedBorder active cornerSize="lg" tone={tone} />
      <ScannerBeam active tone={tone} />

      <div className="relative z-10 flex h-full min-h-44 flex-col justify-between gap-5">
        <div className="flex items-center justify-between gap-3">
          <MicroLabel active led tone={tone}>
            {label}
          </MicroLabel>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-foreground/40 terminal-cursor">
            slot_ready
          </span>
        </div>

        <div className="grid place-items-center">
          <IconTile active className="h-20 w-20 text-lg font-black" tone={tone}>
            {icon ?? "PX"}
          </IconTile>
        </div>

        <div className="space-y-3">
          <DataPacketLine tone={tone} />
          <div>
            <h3 className="font-mono text-sm font-semibold uppercase text-foreground">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-foreground/60">{note}</p>
          </div>
        </div>
      </div>
    </PixelPanel>
  );
}
