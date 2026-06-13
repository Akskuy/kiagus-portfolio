"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { cn } from "@/lib/cn";

type CapabilityMatrixSceneProps = {
  floorShift: number;
  shellForm: number;
  titleMorph: number;
};

type CapabilityTerminal = {
  bullets: string[];
  command: string;
  context: string;
  description: string;
  glyph: "statistics" | "ai" | "data" | "system" | "web" | "leadership";
  title: string;
};

const capabilityTerminals: CapabilityTerminal[] = [
  {
    bullets: ["Uncertainty reasoning", "Probability concepts", "Inference logic", "Data interpretation"],
    command: "RUN_STATISTICAL_LOGIC",
    context: "Related context: Statistical Reasoning.",
    description:
      "Builds reasoning from uncertainty, probability, inference, sampling, and statistical modeling.",
    glyph: "statistics",
    title: "STATISTICAL THINKING",
  },
  {
    bullets: ["AI problem framing", "Product direction", "Workflow value", "Solution framing"],
    command: "RUN_AI_PRODUCT_FLOW",
    context: "Related context: Machine Learning Thinking and Team/Product Direction.",
    description:
      "Connects AI concepts to practical product direction, user value, workflow logic, and implementation choices.",
    glyph: "ai",
    title: "AI PRODUCT LOGIC",
  },
  {
    bullets: ["Collection logic", "Cleaning flow", "Validation steps", "Decision-ready output"],
    command: "RUN_DATA_PIPELINE",
    context: "Related context: Data Workflow.",
    description:
      "Covers data collection, cleaning, transformation, validation, visualization, and decision-ready output.",
    glyph: "data",
    title: "DATA WORKFLOW",
  },
  {
    bullets: ["Requirements", "Actors", "Process flow", "System behavior"],
    command: "RUN_SYSTEM_ANALYSIS",
    context: "Related context: System Analysis.",
    description:
      "Understands users, requirements, workflows, system behavior, and process structure before building solutions.",
    glyph: "system",
    title: "SYSTEM ANALYSIS",
  },
  {
    bullets: ["Interface workflow", "Portal logic", "Dashboard framing", "Interactive system concept"],
    command: "RUN_WEB_SOLUTION",
    context: "Related context: Web-Based Solution Logic.",
    description:
      "Frames websites, dashboards, portals, and interactive tools as structured workflow systems.",
    glyph: "web",
    title: "WEB-BASED SOLUTION",
  },
  {
    bullets: ["Team execution", "Coordination", "Quality control", "Collaboration"],
    command: "RUN_TEAM_DIRECTION",
    context: "Related context: Team and Product Direction.",
    description:
      "Supports project direction, team coordination, execution planning, collaboration, and quality control.",
    glyph: "leadership",
    title: "LEADERSHIP & TEAM DIRECTION",
  },
];

const rackModules = Array.from({ length: 9 }, (_, index) => index);
const rackLights = Array.from({ length: 6 }, (_, index) => index);
const deskKeys = Array.from({ length: 42 }, (_, index) => index);
const deskMeters = Array.from({ length: 8 }, (_, index) => index);

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function CapabilityMatrixScene({
  floorShift,
  shellForm,
  titleMorph,
}: CapabilityMatrixSceneProps) {
  const shell = clamp01(shellForm);
  const terminalReveal = clamp01((shell - 0.18) / 0.82);
  const roomDepth = clamp01(floorShift);
  const titleReady = clamp01(shell * 0.9 + titleMorph * 0.1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedTerminal = capabilityTerminals[selectedIndex] ?? capabilityTerminals[0]!;

  const sceneStyle = {
    opacity: shell,
    transform: `translate3d(0, ${(1 - shell) * 18}px, 0) scale(${0.982 + shell * 0.018})`,
  } as CSSProperties;

  return (
    <div
      aria-hidden={shell < 0.08}
      aria-label="Capability Matrix command center"
      className="pointer-events-none absolute inset-0 z-[12] overflow-hidden"
      style={sceneStyle}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(113,217,210,0.16),transparent_25rem),radial-gradient(circle_at_50%_70%,rgba(141,225,156,0.08),transparent_22rem),linear-gradient(180deg,rgba(2,5,8,0.28),rgba(2,4,7,0.96))]"
        style={{ opacity: shell }}
      />

      <div
        className="absolute inset-x-[8%] top-[9%] h-[70%] rounded-[10px] border border-cyan-muted/10 bg-[linear-gradient(180deg,rgba(8,14,20,0.46),rgba(3,7,10,0.62))] shadow-[inset_0_0_90px_rgba(113,217,210,0.07)]"
        style={{
          opacity: shell * 0.82,
          transform: `perspective(1200px) rotateX(${roomDepth * 1.2}deg) scaleX(${0.96 + roomDepth * 0.04})`,
        }}
      />

      <ServerRack side="left" strength={shell} />
      <ServerRack side="right" strength={shell} />

      <TitleRail strength={titleReady} />
      <CapabilityTerminalGrid
        selectedIndex={selectedIndex}
        strength={terminalReveal}
        onSelect={setSelectedIndex}
      />
      <CapabilityInfoDock strength={terminalReveal} terminal={selectedTerminal} />
      <CommandDesk strength={terminalReveal} floorShift={roomDepth} />

      <div
        className="absolute inset-x-[16%] bottom-[1.5%] h-[36%] origin-bottom border-t border-cyan-muted/10 bg-[linear-gradient(rgba(113,217,210,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(113,217,210,0.1)_1px,transparent_1px)] bg-[length:46px_25px]"
        style={{
          opacity: shell * 0.32,
          transform: `perspective(920px) rotateX(${68 - roomDepth * 5}deg) translateY(${16 - roomDepth * 34}px) scaleX(${0.9 + roomDepth * 0.1})`,
        }}
      />
    </div>
  );
}

function TitleRail({ strength }: { strength: number }) {
  return (
    <div
      className="absolute left-1/2 top-[3.5%] flex h-[8%] w-[min(52vw,41rem)] items-center justify-center overflow-hidden rounded-[5px] border border-cyan-muted/28 bg-[linear-gradient(90deg,rgba(3,7,10,0.76),rgba(15,31,39,0.92)_50%,rgba(3,7,10,0.76))] shadow-[0_0_36px_rgba(113,217,210,0.16),inset_0_0_24px_rgba(113,217,210,0.08)]"
      style={{
        opacity: strength,
        transform: `translateX(-50%) translateY(${(1 - strength) * -14}px) scale(${0.96 + strength * 0.04})`,
      }}
    >
      <span className="absolute inset-1 rounded-[3px] border border-foreground/10" />
      <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-muted/80 to-transparent" />
      <span className="absolute inset-x-14 bottom-0 h-px bg-gradient-to-r from-transparent via-green-soft/34 to-transparent" />
      <span className="absolute left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-[2px] bg-green-soft/80 shadow-[var(--glow-green)] animate-[node-pulse_3.4s_ease-in-out_infinite]" />
      <span className="absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-[2px] bg-cyan-muted/80 shadow-[var(--glow-cyan)] animate-[node-pulse_3.8s_ease-in-out_infinite]" />
      <span className="relative z-10 font-mono text-[clamp(1.15rem,2.6vw,2.35rem)] font-black uppercase leading-none tracking-[0.1em] text-cyan-muted drop-shadow-[0_0_18px_rgba(113,217,210,0.24)]">
        CAPABILITY MATRIX
      </span>
    </div>
  );
}

function CapabilityTerminalGrid({
  onSelect,
  selectedIndex,
  strength,
}: {
  onSelect: (index: number) => void;
  selectedIndex: number;
  strength: number;
}) {
  return (
    <div
      className="pointer-events-auto absolute left-1/2 top-[16%] grid h-[45%] w-[min(62vw,50rem)] grid-cols-3 grid-rows-2 gap-[clamp(0.75rem,1.3vw,1.2rem)]"
      style={{
        opacity: strength,
        transform: `translateX(-50%) translateY(${(1 - strength) * 24}px) scale(${0.94 + strength * 0.06})`,
      }}
    >
      {capabilityTerminals.map((terminal, index) => (
        <CapabilityTerminalPanel
          index={index}
          selected={selectedIndex === index}
          key={terminal.command}
          strength={strength}
          terminal={terminal}
          onSelect={() => onSelect(index)}
        />
      ))}
    </div>
  );
}

function CapabilityTerminalPanel({
  index,
  onSelect,
  selected,
  strength,
  terminal,
}: {
  index: number;
  onSelect: () => void;
  selected: boolean;
  strength: number;
  terminal: CapabilityTerminal;
}) {
  return (
    <button
      aria-pressed={selected}
      className={cn(
        "group/terminal relative isolate cursor-pointer overflow-hidden rounded-[8px] border bg-[linear-gradient(180deg,rgba(8,22,27,0.9),rgba(2,8,11,0.97)_74%)] p-3 text-left shadow-[0_18px_46px_rgba(0,0,0,0.52),inset_0_0_34px_rgba(113,217,210,0.08)] outline-none transition-[border-color,filter,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-cyan-muted/60 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-cyan-muted/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        selected
          ? "border-green-soft/54 shadow-[0_20px_54px_rgba(0,0,0,0.56),0_0_28px_rgba(141,225,156,0.16),inset_0_0_36px_rgba(141,225,156,0.1)]"
          : "border-cyan-muted/32",
      )}
      onClick={onSelect}
      style={{
        clipPath:
          "polygon(14px 0, calc(100% - 18px) 0, 100% 16px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 16px), 0 14px)",
        transform: `translateY(${(1 - strength) * (index < 3 ? -16 : 16)}px)`,
      }}
      type="button"
    >
      <span className="absolute inset-1 rounded-[5px] border border-foreground/10" />
      <span className="absolute inset-0 micro-grid opacity-35" />
      <span className="scanline-mask absolute inset-0 opacity-[0.12] animate-[scanline-drift_9s_linear_infinite]" />
      <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-muted/70 to-transparent animate-[border-lap-x_4.6s_linear_infinite]" />
      <span className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-green-soft/34 to-transparent" />

      <span
        className={cn(
          "absolute left-3 top-3 h-2 w-2 rounded-[2px] animate-[node-pulse_3.5s_ease-in-out_infinite]",
          selected ? "bg-amber-soft/90 shadow-[var(--glow-amber)]" : "bg-green-soft/80 shadow-[var(--glow-green)]",
        )}
      />
      <span className="absolute right-3 top-3 h-1.5 w-8 rounded-sm border border-cyan-muted/18 bg-cyan-muted/10" />

      <div className="relative z-10 grid h-full grid-rows-[1fr_auto_auto] place-items-center gap-2 pt-2 text-center">
        <CapabilityGlyph glyph={terminal.glyph} />

        <h3 className="font-mono text-[clamp(0.68rem,1.05vw,0.95rem)] font-black uppercase leading-5 tracking-[0.08em] text-foreground">
          {terminal.title}
        </h3>

        <span className="max-w-full rounded-[3px] border border-green-soft/14 bg-green-soft/8 px-2 py-1 font-mono text-[clamp(0.43rem,0.6vw,0.58rem)] font-bold uppercase leading-3 tracking-[0.08em] text-green-soft/78">
          {terminal.command}
        </span>
        <span
          className={cn(
            "absolute bottom-3 right-3 font-mono text-[0.43rem] font-bold uppercase tracking-[0.14em] text-amber-soft/70 transition-opacity duration-300",
            selected
              ? "opacity-100"
              : "opacity-0 group-hover/terminal:opacity-100 group-focus-visible/terminal:opacity-100",
          )}
        >
          {selected ? "ACTIVE" : "SELECT"}
        </span>
      </div>
    </button>
  );
}

function CapabilityInfoDock({
  strength,
  terminal,
}: {
  strength: number;
  terminal: CapabilityTerminal;
}) {
  return (
    <div
      className="absolute left-1/2 top-[62%] grid h-[10.5%] w-[min(62vw,50rem)] grid-cols-[1.08fr_0.92fr] gap-3"
      style={{
        opacity: strength,
        transform: `translateX(-50%) translateY(${(1 - strength) * 18}px)`,
      }}
    >
      <div className="relative overflow-hidden rounded-[7px] border border-cyan-muted/18 bg-[linear-gradient(135deg,rgba(3,12,15,0.9),rgba(8,22,27,0.76))] px-4 py-3 shadow-[inset_0_0_22px_rgba(113,217,210,0.06)]">
        <span className="absolute inset-1 rounded-[4px] border border-foreground/8" />
        <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-muted/56 to-transparent" />
        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="mb-1 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-[2px] bg-green-soft/80 shadow-[var(--glow-green)]" />
              <span className="font-mono text-[0.5rem] font-black uppercase tracking-[0.22em] text-cyan-muted/62">
                Detail Panel
              </span>
            </div>
            <div className="truncate font-mono text-[clamp(0.66rem,0.85vw,0.82rem)] font-black uppercase tracking-[0.11em] text-foreground">
              {terminal.title}
            </div>
            <div className="truncate font-mono text-[0.5rem] font-bold uppercase tracking-[0.12em] text-green-soft/68">
              {terminal.command}
            </div>
          </div>
          <div className="grid min-w-[12.5rem] grid-cols-2 gap-x-2 gap-y-1 pt-1">
            {terminal.bullets.slice(0, 4).map((bullet) => (
              <span
                className="truncate border-l border-cyan-muted/24 pl-2 text-[0.48rem] font-bold uppercase tracking-[0.09em] text-cyan-muted/68"
                key={bullet}
              >
                {bullet}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[7px] border border-cyan-muted/16 bg-[linear-gradient(135deg,rgba(2,8,11,0.9),rgba(7,18,22,0.72))] px-4 py-3 shadow-[inset_0_0_22px_rgba(113,217,210,0.05)]">
        <span className="absolute inset-1 rounded-[4px] border border-foreground/8" />
        <span className="absolute right-4 top-3 h-1.5 w-8 rounded-sm bg-gradient-to-r from-cyan-muted/34 to-green-soft/52" />
        <div className="relative z-10">
          <div className="mb-1 font-mono text-[0.5rem] font-black uppercase tracking-[0.22em] text-cyan-muted/62">
            Capability Tooltip
          </div>
          <p className="line-clamp-2 text-[0.58rem] font-semibold leading-relaxed tracking-[0.06em] text-foreground/64">
            {terminal.description}
          </p>
          <div className="mt-1 truncate font-mono text-[0.48rem] uppercase tracking-[0.12em] text-amber-soft/62">
            {terminal.context}
          </div>
        </div>
      </div>
    </div>
  );
}

function CapabilityGlyph({ glyph }: { glyph: CapabilityTerminal["glyph"] }) {
  if (glyph === "statistics") {
    return (
      <span className="relative h-14 w-16">
        {[0, 1, 2, 3].map((bar) => (
          <span
            className="absolute bottom-2 w-2 rounded-t-[2px] border border-cyan-muted/50 bg-cyan-muted/35 shadow-[var(--glow-cyan)]"
            key={bar}
            style={{
              height: `${32 + bar * 13}%`,
              left: `${14 + bar * 17}%`,
            }}
          />
        ))}
        <span className="absolute bottom-1 left-2 right-2 h-px bg-cyan-muted/70" />
      </span>
    );
  }

  if (glyph === "ai") {
    return (
      <span className="relative h-14 w-16">
        <span className="absolute left-3 top-2 h-10 w-10 rounded-full border border-cyan-muted/58 shadow-[inset_0_0_16px_rgba(113,217,210,0.18),var(--glow-cyan)]" />
        {[0, 1, 2, 3, 4].map((node) => (
          <span
            className="absolute h-2 w-2 rounded-[2px] bg-cyan-muted shadow-[var(--glow-cyan)]"
            key={node}
            style={{
              left: `${16 + ((node * 17) % 36)}%`,
              top: `${18 + ((node * 23) % 48)}%`,
            }}
          />
        ))}
        <span className="absolute right-2 top-4 h-px w-5 rotate-45 bg-cyan-muted/70" />
        <span className="absolute right-4 bottom-4 h-px w-6 -rotate-12 bg-green-soft/50" />
      </span>
    );
  }

  if (glyph === "data") {
    return (
      <span className="relative h-14 w-16">
        {[0, 1, 2].map((layer) => (
          <span
            className="absolute left-3 h-5 w-10 rounded-[50%] border border-cyan-muted/56 bg-cyan-muted/18 shadow-[inset_0_0_10px_rgba(113,217,210,0.16)]"
            key={layer}
            style={{ top: `${8 + layer * 12}px` }}
          />
        ))}
        <span className="absolute left-3 top-[1.1rem] h-8 w-10 border-x border-cyan-muted/46 bg-cyan-muted/10" />
      </span>
    );
  }

  if (glyph === "system") {
    return (
      <span className="relative h-14 w-16">
        <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-cyan-muted/42 shadow-[var(--glow-cyan)]" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((tooth) => (
          <span
            className="absolute left-1/2 top-1/2 h-2 w-3 rounded-[1px] bg-cyan-muted/70"
            key={tooth}
            style={{
              transform: `translate(-50%, -50%) rotate(${tooth * 45}deg) translateY(-1.72rem)`,
            }}
          />
        ))}
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background shadow-[inset_0_0_0_1px_rgba(113,217,210,0.7)]" />
      </span>
    );
  }

  if (glyph === "web") {
    return (
      <span className="relative h-14 w-16 rounded-[4px] border border-cyan-muted/56 bg-cyan-muted/10 shadow-[var(--glow-cyan)]">
        <span className="absolute inset-x-0 top-3 h-px bg-cyan-muted/70" />
        <span className="absolute left-2 top-1.5 h-1.5 w-1.5 rounded-[1px] bg-amber-soft/80 shadow-[var(--glow-amber)]" />
        <span className="absolute left-3 right-3 top-6 grid grid-cols-3 gap-1">
          {[0, 1, 2, 3, 4, 5].map((cell) => (
            <span className="h-2 rounded-[1px] bg-cyan-muted/38" key={cell} />
          ))}
        </span>
      </span>
    );
  }

  return (
    <span className="relative h-14 w-16">
      {[0, 1, 2].map((person) => (
        <span
          className="absolute top-3 h-5 w-5 rounded-full border border-cyan-muted/46 bg-cyan-muted/35 shadow-[var(--glow-cyan)]"
          key={person}
          style={{ left: `${10 + person * 30}%` }}
        />
      ))}
      <span className="absolute bottom-2 left-2 h-5 w-12 rounded-t-[16px] border border-cyan-muted/46 bg-cyan-muted/18" />
    </span>
  );
}

function ServerRack({
  side,
  strength,
}: {
  side: "left" | "right";
  strength: number;
}) {
  return (
    <div
      className={cn(
        "absolute top-[12%] hidden h-[74%] w-[14%] overflow-hidden rounded-[8px] border border-cyan-muted/14 bg-[linear-gradient(180deg,rgba(9,16,24,0.88),rgba(1,4,7,0.96))] p-3 shadow-[0_26px_70px_rgba(0,0,0,0.55),inset_0_0_32px_rgba(113,217,210,0.06)] md:block",
        side === "left" ? "left-[3%] -skew-y-3" : "right-[3%] skew-y-3",
      )}
      style={{
        opacity: strength,
        transform: `translateX(${(1 - strength) * (side === "left" ? -24 : 24)}px)`,
      }}
    >
      <span className="absolute inset-1 rounded-[5px] border border-foreground/8" />
      <span className="absolute inset-0 micro-grid opacity-25" />
      <div className="relative z-10 grid h-full content-between gap-2">
        {rackModules.map((module) => (
          <span
            className="relative h-10 overflow-hidden rounded-[4px] border border-cyan-muted/12 bg-background/58 shadow-[inset_0_0_14px_rgba(113,217,210,0.04)]"
            key={`${side}-${module}`}
          >
            <span className="absolute inset-x-2 top-2 h-px bg-gradient-to-r from-cyan-muted/45 to-transparent" />
            <span className="absolute left-2 right-2 bottom-2 grid grid-cols-6 gap-1">
              {rackLights.map((light) => (
                <span
                  className={cn(
                    "h-1.5 rounded-[1px] animate-[screen-flicker_5s_steps(4,end)_infinite]",
                    (light + module) % 5 === 0
                      ? "bg-amber-soft/80 shadow-[var(--glow-amber)]"
                      : (light + module) % 3 === 0
                        ? "bg-green-soft/70"
                        : "bg-cyan-muted/65",
                  )}
                  key={light}
                  style={{ animationDelay: `${(light + module) * 0.13}s` }}
                />
              ))}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function CommandDesk({
  floorShift,
  strength,
}: {
  floorShift: number;
  strength: number;
}) {
  return (
    <div
      className="absolute left-1/2 bottom-[2.5%] h-[21%] w-[min(75vw,64rem)] overflow-hidden rounded-t-[18px] border border-cyan-muted/18 bg-[linear-gradient(180deg,rgba(18,28,35,0.84),rgba(3,7,10,0.98)_72%)] shadow-[0_28px_90px_rgba(0,0,0,0.68),inset_0_0_42px_rgba(113,217,210,0.07)]"
      style={{
        opacity: strength,
        transform: `translateX(-50%) perspective(960px) rotateX(${56 - floorShift * 8}deg) translateY(${(1 - strength) * 32}px) scale(${0.96 + strength * 0.04})`,
        transformOrigin: "50% 100%",
      }}
    >
      <span className="absolute inset-3 rounded-t-[12px] border border-foreground/8" />
      <span className="absolute left-[5%] top-[18%] h-[54%] w-[24%] rounded-[8px] border border-cyan-muted/14 bg-cyan-muted/6 shadow-[inset_0_0_22px_rgba(113,217,210,0.05)]">
        <span className="absolute inset-3 grid grid-cols-3 gap-2">
          {[0, 1, 2, 3, 4, 5].map((pad) => (
            <span
              className={cn(
                "rounded-[3px] border shadow-[inset_0_0_10px_rgba(0,0,0,0.26)]",
                pad % 3 === 0
                  ? "border-green-soft/18 bg-green-soft/10"
                  : "border-cyan-muted/16 bg-cyan-muted/9",
              )}
              key={pad}
            />
          ))}
        </span>
      </span>

      <span className="absolute left-1/2 top-[16%] grid h-[58%] w-[34%] -translate-x-1/2 grid-cols-7 gap-1 rounded-[8px] border border-cyan-muted/16 bg-background/68 p-3 shadow-[inset_0_0_22px_rgba(113,217,210,0.05)]">
        {deskKeys.map((key) => (
          <span
            className="rounded-[2px] border border-cyan-muted/10 bg-surface-2/90 shadow-[0_2px_0_rgba(0,0,0,0.4)]"
            key={key}
          />
        ))}
      </span>

      <span className="absolute right-[5%] top-[18%] h-[54%] w-[24%] rounded-[8px] border border-cyan-muted/14 bg-background/52 shadow-[inset_0_0_22px_rgba(113,217,210,0.05)]">
        <span className="absolute inset-x-4 top-4 grid grid-cols-4 gap-2">
          {deskMeters.map((meter) => (
            <span
              className={cn(
                "h-3 rounded-[2px] border",
                meter % 4 === 0
                  ? "border-amber-soft/28 bg-amber-soft/18 shadow-[var(--glow-amber)]"
                  : meter % 3 === 0
                    ? "border-green-soft/24 bg-green-soft/12"
                    : "border-cyan-muted/18 bg-cyan-muted/10",
              )}
              key={meter}
            />
          ))}
        </span>
        <span className="absolute bottom-5 left-4 right-4 h-px bg-gradient-to-r from-cyan-muted/30 via-green-soft/24 to-transparent" />
      </span>
    </div>
  );
}
