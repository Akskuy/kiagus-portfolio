"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  MonitorCog,
  Trophy,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { DataStream } from "@/components/motion/data-stream";
import { PixelPanel } from "@/components/ui/pixel-panel";
import { cn } from "@/lib/cn";

type IdentityStatCardProps = {
  label: string;
  detail: string;
  marker: string;
  icon: "science" | "project" | "achievement" | "leadership" | "workflow" | "system";
  tone?: "cyan" | "amber" | "green" | "blue";
  className?: string;
};

const icons: Record<IdentityStatCardProps["icon"], LucideIcon> = {
  science: GraduationCap,
  project: BriefcaseBusiness,
  achievement: Trophy,
  leadership: Users,
  workflow: Workflow,
  system: MonitorCog,
};

const toneClasses = {
  cyan: {
    icon: "border-cyan-muted/40 bg-cyan-muted/10 text-cyan-muted shadow-[var(--glow-cyan)]",
    led: "bg-cyan-muted shadow-[var(--glow-cyan)]",
    line: "from-cyan-muted/0 via-cyan-muted/80 to-cyan-muted/0",
  },
  amber: {
    icon: "border-amber-soft/40 bg-amber-soft/10 text-amber-soft shadow-[var(--glow-amber)]",
    led: "bg-amber-soft shadow-[var(--glow-amber)]",
    line: "from-amber-soft/0 via-amber-soft/80 to-amber-soft/0",
  },
  green: {
    icon: "border-green-soft/40 bg-green-soft/10 text-green-soft shadow-[var(--glow-green)]",
    led: "bg-green-soft shadow-[var(--glow-green)]",
    line: "from-green-soft/0 via-green-soft/80 to-green-soft/0",
  },
  blue: {
    icon: "border-blue-soft/40 bg-blue-soft/10 text-blue-soft shadow-[0_0_20px_rgba(139,185,255,0.2)]",
    led: "bg-blue-soft shadow-[0_0_20px_rgba(139,185,255,0.34)]",
    line: "from-blue-soft/0 via-blue-soft/80 to-blue-soft/0",
  },
};

export function IdentityStatCard({
  label,
  detail,
  marker,
  icon,
  tone = "cyan",
  className,
}: IdentityStatCardProps) {
  const Icon = icons[icon];
  const toneClass = toneClasses[tone];

  return (
    <motion.div
      className={cn("group relative", className)}
      title={detail}
      whileHover={{ y: -7, rotateX: 2.4, filter: "brightness(1.16)" }}
      whileTap={{ scale: 0.975, filter: "brightness(1.22)" }}
    >
      <PixelPanel
        className="h-full min-h-[5.25rem] rounded-sm p-2.5 md:p-3"
        tone={tone}
      >
        <CornerSet />
        <div className="absolute inset-x-5 top-1.5">
          <DataStream tone={tone === "amber" ? "amber" : tone === "green" ? "green" : "cyan"} />
        </div>

        <div className="relative z-10 grid grid-cols-[auto_1fr_auto] items-center gap-2.5">
          <div
            className={cn(
              "relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-sm border",
              toneClass.icon,
            )}
          >
            <span
              className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)] animate-[holo-sweep_4.2s_ease-in-out_infinite]"
              aria-hidden="true"
            />
            <Icon className="relative z-10 h-6 w-6" strokeWidth={1.8} />
            <span
              className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-[2px] bg-current animate-[node-pulse_2.4s_ease-in-out_infinite]"
              aria-hidden="true"
            />
          </div>

          <div className="min-w-0">
            <div className="mb-1 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-foreground/45">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-[2px] animate-[node-pulse_2.8s_ease-in-out_infinite]",
                  toneClass.led,
                )}
                aria-hidden="true"
              />
              <span>{marker}</span>
            </div>
            <h3 className="text-balance font-mono text-[0.78rem] font-semibold uppercase leading-5 text-foreground md:text-[0.9rem]">
              {label}
            </h3>
          </div>

          <div className="hidden w-12 md:block" aria-hidden="true">
            <MiniReadout marker={marker} tone={tone} />
          </div>
        </div>

        <div
          className={cn(
            "absolute inset-x-4 bottom-2 h-px bg-gradient-to-r animate-[sweep-light_3.8s_linear_infinite]",
            toneClass.line,
          )}
          aria-hidden="true"
        />
        <span
          className="absolute bottom-1.5 right-3 font-mono text-[0.55rem] uppercase text-foreground/35 opacity-0 group-hover:opacity-100"
          aria-hidden="true"
        >
          signal live
        </span>
      </PixelPanel>
    </motion.div>
  );
}

function CornerSet() {
  return (
    <span className="pointer-events-none absolute inset-2 z-10" aria-hidden="true">
      {[
        "left-0 top-0 border-l border-t",
        "right-0 top-0 border-r border-t",
        "bottom-0 left-0 border-b border-l",
        "bottom-0 right-0 border-b border-r",
      ].map((position) => (
        <span
          key={position}
          className={cn(
            "absolute h-3 w-3 border-cyan-muted/60 animate-[corner-spark_4.2s_ease-in-out_infinite]",
            position,
          )}
        />
      ))}
    </span>
  );
}

function MiniReadout({
  marker,
  tone,
}: {
  marker: string;
  tone: IdentityStatCardProps["tone"];
}) {
  const lineTone =
    tone === "amber"
      ? "bg-amber-soft/70"
      : tone === "green"
        ? "bg-green-soft/70"
        : tone === "blue"
          ? "bg-blue-soft/70"
          : "bg-cyan-muted/70";

  return (
    <div className="relative h-11 overflow-hidden rounded-sm border border-cyan-muted/20 bg-background/60 p-1.5">
      <span className="absolute inset-0 micro-grid opacity-60" />
      <span className="scanline-mask absolute inset-0 opacity-20 animate-[scanline-drift_6s_linear_infinite]" />
      <span className="relative z-10 grid h-full grid-cols-4 items-end gap-1">
        {[0, 1, 2, 3].map((bar) => (
          <span
            key={`${marker}-${bar}`}
            className={cn("rounded-[1px] animate-[server-light_4s_steps(4,end)_infinite]", lineTone)}
            style={{
              height: `${28 + ((bar * 19 + marker.length * 7) % 54)}%`,
              animationDelay: `${bar * 0.18}s`,
            }}
          />
        ))}
      </span>
    </div>
  );
}
