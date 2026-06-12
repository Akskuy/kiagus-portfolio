"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MicroLabel } from "@/components/ui/micro-label";
import { ScanlineOverlay } from "@/components/ui/scanline-overlay";
import { StatusLED, type UiTone } from "@/components/ui/status-led";
import { cn } from "@/lib/cn";

type IdentityToCommandGateProps = {
  active: boolean;
  className?: string;
  onActivate: () => void;
  scrollArmed?: boolean;
};

const packetTargets = [
  { delay: 0, tone: "cyan", x: -186, y: -118 },
  { delay: 0.14, tone: "green", x: 34, y: -166 },
  { delay: 0.28, tone: "cyan", x: 190, y: -116 },
] satisfies Array<{ delay: number; tone: UiTone; x: number; y: number }>;

const routeTargets = [
  {
    path: "M260 258 C224 210 164 156 118 122",
    tone: "cyan",
    x: 118,
    y: 122,
  },
  {
    path: "M260 258 C254 184 294 92 346 64",
    tone: "green",
    x: 346,
    y: 64,
  },
  {
    path: "M260 258 C308 214 386 158 430 124",
    tone: "cyan",
    x: 430,
    y: 124,
  },
] satisfies Array<{ path: string; tone: UiTone; x: number; y: number }>;

const monitorSlots = [
  "left-[6%] top-[22%] h-[42%] w-[23%] -skew-y-3",
  "left-[49%] top-[5%] h-[50%] w-[23%]",
  "right-[7%] top-[20%] h-[44%] w-[24%] skew-y-3",
];

const statusSteps = [
  { label: "IDENTITY ROUTED", tone: "cyan" },
  { label: "CAPABILITY LINK", tone: "green" },
] satisfies Array<{ label: string; tone: UiTone }>;

const toneGlowClasses: Record<UiTone, string> = {
  cyan: "bg-cyan-muted/80 shadow-[0_0_14px_rgba(113,217,210,0.32)]",
  amber: "bg-amber-soft/65 shadow-[0_0_12px_rgba(246,195,111,0.24)]",
  green: "bg-green-soft/75 shadow-[0_0_14px_rgba(141,225,156,0.28)]",
  blue: "bg-cyan-muted/70 shadow-[0_0_14px_rgba(113,217,210,0.28)]",
};

const routeStroke: Record<UiTone, string> = {
  cyan: "rgba(113,217,210,0.48)",
  amber: "rgba(246,195,111,0.4)",
  green: "rgba(141,225,156,0.46)",
  blue: "rgba(113,217,210,0.42)",
};

export function IdentityToCommandGate({
  active,
  className,
  onActivate,
  scrollArmed = false,
}: IdentityToCommandGateProps) {
  const reduceMotion = useReducedMotion();
  const triggerTone: UiTone = active ? "green" : scrollArmed ? "amber" : "cyan";
  const triggerActive = active || scrollArmed;

  return (
    <div className={cn("pointer-events-none absolute inset-0 z-30", className)}>
      <button
        aria-label="Activate capability link transition from the identity lanyard"
        aria-pressed={active}
        className={cn(
          "pointer-events-auto absolute right-1 top-0 z-50 inline-flex items-center gap-1.5 rounded-[2px] border border-transparent bg-transparent px-1.5 py-1 font-mono text-[0.46rem] font-black uppercase tracking-[0.16em] outline-none transition-[opacity,border-color,background-color] duration-300 focus-visible:ring-2 focus-visible:ring-cyan-muted/65 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:-right-5 md:top-0",
          active
            ? "border-green-soft/18 bg-green-soft/[0.035] text-green-soft/75 opacity-85"
            : "text-cyan-muted/48 opacity-45 hover:border-cyan-muted/18 hover:bg-cyan-muted/[0.035] hover:text-cyan-muted/72 hover:opacity-80",
        )}
        onClick={onActivate}
        type="button"
      >
        <StatusLED active={triggerActive} size="sm" tone={triggerTone} />
        CAPABILITY LINK
      </button>

      <motion.div
        aria-hidden="true"
        animate={{ opacity: active ? 1 : 0 }}
        className="absolute inset-x-[-30%] top-[1%] hidden h-[64%] md:block"
        initial={false}
        transition={{ duration: reduceMotion ? 0.01 : 0.46, ease: [0.16, 1, 0.3, 1] }}
      >
        <MonitorWakeField active={active} reduceMotion={reduceMotion} />
        <RouteMesh active={active} reduceMotion={reduceMotion} />
        <StatusStack active={active} reduceMotion={reduceMotion} />
      </motion.div>

      <LanyardScanOverlay active={active} reduceMotion={reduceMotion} />
      <PacketBurst active={active} reduceMotion={reduceMotion} />
    </div>
  );
}

function LanyardScanOverlay({
  active,
  reduceMotion,
}: {
  active: boolean;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ opacity: active ? 1 : 0 }}
      className="absolute left-1/2 top-[30%] z-40 h-[50%] w-[62%] -translate-x-1/2 overflow-hidden rounded-[18px] border border-cyan-muted/8 shadow-[0_0_24px_rgba(113,217,210,0.06)] md:w-[60%]"
      initial={false}
      style={{
        clipPath:
          "polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)",
      }}
      transition={{ duration: reduceMotion ? 0.01 : 0.28 }}
    >
      <span className="absolute inset-2 rounded-[14px] border border-cyan-muted/8" />
      <ScanlineOverlay active={active} className="opacity-[0.08]" intensity="subtle" sweep />
      <motion.span
        animate={{
          opacity: active ? [0.06, 0.23, 0.08] : 0,
          y: active ? ["-42%", "96%", "96%"] : "-42%",
        }}
        className="absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-transparent via-cyan-muted/18 to-transparent"
        transition={{
          duration: reduceMotion ? 0.01 : 1.55,
          ease: [0.16, 1, 0.3, 1],
          repeat: active && !reduceMotion ? Infinity : 0,
          repeatDelay: 1.8,
        }}
      />
    </motion.div>
  );
}

function PacketBurst({
  active,
  reduceMotion,
}: {
  active: boolean;
  reduceMotion: boolean | null;
}) {
  return (
    <span aria-hidden="true" className="absolute inset-0 z-45">
      {packetTargets.map((target, index) => (
        <motion.span
          animate={
            active
              ? {
                  opacity: [0, 0.78, 0.16, 0],
                  scale: [0.35, 0.82, 0.58, 0.24],
                  x: [0, target.x * 0.22, target.x * 0.7, target.x],
                  y: [0, target.y * 0.22, target.y * 0.72, target.y],
                }
              : { opacity: 0, scale: 0.2, x: 0, y: 0 }
          }
          className={cn(
            "absolute left-1/2 top-[58%] h-1.5 w-1.5 rounded-[2px]",
            toneGlowClasses[target.tone],
          )}
          key={`${target.x}-${target.y}-${index}`}
          transition={{
            delay: target.delay,
            duration: reduceMotion ? 0.01 : 1.8,
            ease: [0.16, 1, 0.3, 1],
            repeat: active && !reduceMotion ? Infinity : 0,
            repeatDelay: 1.85,
          }}
        />
      ))}
    </span>
  );
}

function RouteMesh({
  active,
  reduceMotion,
}: {
  active: boolean;
  reduceMotion: boolean | null;
}) {
  return (
    <svg
      className="absolute inset-0 overflow-visible"
      fill="none"
      role="presentation"
      viewBox="0 0 520 300"
    >
      <defs>
        <filter id="identity-route-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur result="blur" stdDeviation="2.1" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.circle
        animate={{ opacity: active ? [0.12, 0.52, 0.24] : 0, r: active ? [2.5, 4, 3] : 2 }}
        cx="260"
        cy="258"
        fill="rgba(113,217,210,0.5)"
        filter="url(#identity-route-glow)"
        transition={{
          duration: reduceMotion ? 0.01 : 2.4,
          repeat: active && !reduceMotion ? Infinity : 0,
        }}
      />
      {routeTargets.map((target, index) => (
        <g key={target.path}>
          <motion.path
            animate={
              active
                ? { opacity: [0.04, 0.48, 0.2], pathLength: [0, 1, 1] }
                : { opacity: 0, pathLength: 0 }
            }
            d={target.path}
            filter="url(#identity-route-glow)"
            stroke={routeStroke[target.tone]}
            strokeDasharray="9 14"
            strokeLinecap="round"
            strokeWidth="1.15"
            transition={{
              delay: index * 0.16,
              duration: reduceMotion ? 0.01 : 1.55,
              ease: [0.16, 1, 0.3, 1],
              repeat: active && !reduceMotion ? Infinity : 0,
              repeatDelay: 2.05,
            }}
          />
          <motion.circle
            animate={{
              opacity: active ? [0, 0.68, 0.34] : 0,
              r: active ? [1.5, 3.4, 2.2] : 1.5,
            }}
            cx={target.x}
            cy={target.y}
            fill={routeStroke[target.tone]}
            filter="url(#identity-route-glow)"
            transition={{
              delay: index * 0.16 + 0.45,
              duration: reduceMotion ? 0.01 : 1.55,
              repeat: active && !reduceMotion ? Infinity : 0,
              repeatDelay: 2.05,
            }}
          />
        </g>
      ))}
    </svg>
  );
}

function MonitorWakeField({
  active,
  reduceMotion,
}: {
  active: boolean;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.div
      animate={{
        opacity: active ? [0.24, 0.54, 0.36] : 0,
        scale: active ? [0.995, 1.004, 1] : 0.995,
      }}
      className="absolute inset-x-[4%] top-[2%] h-[62%]"
      transition={{
        duration: reduceMotion ? 0.01 : 2.6,
        repeat: active && !reduceMotion ? Infinity : 0,
        repeatType: "mirror",
      }}
    >
      <span className="absolute inset-x-[18%] top-[8%] h-[74%] rounded-sm border border-green-soft/10 bg-[radial-gradient(circle_at_50%_36%,rgba(48,92,83,0.24),transparent_15rem)] shadow-[0_0_54px_rgba(49,120,105,0.1),inset_0_0_38px_rgba(113,217,210,0.045)]" />
      {monitorSlots.map((slot, index) => (
        <span
          className={cn(
            "absolute overflow-hidden rounded-sm border border-green-soft/10 bg-green-soft/[0.018] p-2 shadow-[0_0_18px_rgba(49,120,105,0.08)]",
            slot,
          )}
          key={slot}
        >
          <span className="absolute inset-0 micro-grid opacity-18" />
          <ScanlineOverlay active={active} className="opacity-[0.07]" intensity="subtle" sweep={index === 1} />
          <span className="relative z-10 block space-y-2">
            {Array.from({ length: index === 1 ? 5 : 3 }, (_, row) => (
              <span
                className="block h-px rounded-full bg-gradient-to-r from-green-soft/38 via-cyan-muted/22 to-transparent"
                key={row}
                style={{
                  width: `${34 + ((row * 19 + index * 9) % 42)}%`,
                }}
              />
            ))}
          </span>
        </span>
      ))}
    </motion.div>
  );
}

function StatusStack({
  active,
  reduceMotion,
}: {
  active: boolean;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.div
      animate={{ opacity: active ? 0.86 : 0, x: active ? 0 : 5 }}
      className="absolute right-[15%] top-[54%] grid gap-1"
      transition={{ duration: reduceMotion ? 0.01 : 0.42, delay: reduceMotion ? 0 : 0.28 }}
    >
      {statusSteps.map((step, index) => (
        <motion.span
          animate={{ opacity: active ? 1 : 0, x: active ? 0 : 5 }}
          key={step.label}
          transition={{
            delay: reduceMotion ? 0 : 0.34 + index * 0.16,
            duration: reduceMotion ? 0.01 : 0.36,
          }}
        >
          <MicroLabel
            active={active}
            className="border-cyan-muted/14 bg-background/28 px-1.5 py-0.5 text-[0.46rem] tracking-[0.11em] shadow-none backdrop-blur-sm"
            led
            tone={step.tone}
          >
            {step.label}
          </MicroLabel>
        </motion.span>
      ))}
      <span className="mt-1 h-px w-28 bg-gradient-to-r from-transparent via-green-soft/26 to-transparent" />
    </motion.div>
  );
}
