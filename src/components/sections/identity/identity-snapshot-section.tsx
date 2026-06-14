"use client";

import { useCallback, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CapabilityMatrixScene } from "@/components/sections/capability/capability-matrix-scene";
import { ExperienceDistrictScene } from "@/components/sections/experience/experience-district-scene";
import { AvatarCore } from "@/components/sections/identity/avatar-core";
import { IdentityBootPreloader } from "@/components/sections/identity/identity-boot-preloader";
import { IdentityStatCard } from "@/components/sections/identity/identity-stat-card";
import { KnowledgeLibraryScene } from "@/components/sections/knowledge/knowledge-library-scene";
import { cn } from "@/lib/cn";

const leftCards = [
  {
    title: "Data Science Student",
    label: "Academic Foundation",
    description:
      "Undergraduate Data Science student with foundations in statistics, data systems, probabilistic reasoning, and AI problem formulation.",
    marker: "SCI",
    icon: "science" as const,
  },
  {
    title: "Project-Based Experience",
    label: "Practical Builder",
    description:
      "Experienced in team-based and individual projects involving data processing, workflow design, web-based solutions, and system-oriented implementation.",
    marker: "PRJ",
    icon: "project" as const,
  },
  {
    title: "National-Level Achievement",
    label: "Competition Credibility",
    description:
      "Achievement record includes Champion at COMPFEST 16 AI Innovation Challenge, Runner-up at ICONIC IT UI/UX Competition, and Best 2nd Product in Bangkit Program.",
    marker: "NAT",
    icon: "achievement" as const,
  },
];

const rightCards = [
  {
    title: "Leadership Experience",
    label: "Team Direction",
    description:
      "Led and coordinated technical and organizational teams, including roles in Avalon AI Community, regional student forum activities, and project-based team collaboration.",
    marker: "LED",
    icon: "leadership" as const,
  },
  {
    title: "End-to-End Data Workflow",
    label: "Data to Output",
    description:
      "Experienced in processing, cleaning, validating, structuring, and packaging raw data into usable outputs aligned with stakeholder or project needs.",
    marker: "FLOW",
    icon: "workflow" as const,
  },
  {
    title: "System Design & AI Solutions",
    label: "System Thinking",
    description:
      "Focuses on translating problems into structured workflows, AI product logic, system concepts, and implementation-ready digital solution designs.",
    marker: "SYS",
    icon: "system" as const,
  },
];

const serverLights = Array.from({ length: 44 }, (_, index) => index);
const particles = Array.from({ length: 24 }, (_, index) => index);
const monitorRows = Array.from({ length: 7 }, (_, index) => index);
const wallScreens = Array.from({ length: 10 }, (_, index) => index);
const capabilityTerminals = [
  {
    command: "RUN_STATISTICAL_LOGIC",
    title: "STATISTICAL THINKING",
  },
  {
    command: "RUN_AI_PRODUCT_FLOW",
    title: "AI PRODUCT LOGIC",
  },
  {
    command: "RUN_DATA_PIPELINE",
    title: "DATA WORKFLOW",
  },
  {
    command: "RUN_SYSTEM_ANALYSIS",
    title: "SYSTEM ANALYSIS",
  },
  {
    command: "RUN_WEB_SOLUTION",
    title: "WEB-BASED SOLUTION",
  },
  {
    command: "RUN_TEAM_DIRECTION",
    title: "LEADERSHIP & TEAM DIRECTION",
  },
] as const;

type IdentityCard = (typeof leftCards)[number] | (typeof rightCards)[number];

type IdentitySceneMorph = {
  floorShift: number;
  lanyardDock: number;
  panelCollapse: number;
  progress: number;
  roomLighting: number;
  shellForm: number;
  titleMorph: number;
};

type IdentitySnapshotSectionProps = {
  experienceProgress?: number;
  journeyProgress?: number;
  knowledgeProgress?: number;
};

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function smoothStep(value: number) {
  const clamped = clamp01(value);

  return clamped * clamped * (3 - 2 * clamped);
}

function segment(progress: number, start: number, end: number) {
  return smoothStep((clamp01(progress) - start) / (end - start));
}

function getIdentitySceneMorph(progress: number): IdentitySceneMorph {
  const currentProgress = clamp01(progress);

  return {
    floorShift: segment(currentProgress, 0.65, 1),
    lanyardDock: segment(currentProgress, 0.45, 0.65),
    panelCollapse: segment(currentProgress, 0.25, 0.45),
    progress: currentProgress,
    roomLighting: segment(currentProgress, 0.65, 1),
    shellForm: segment(currentProgress, 0.65, 1),
    titleMorph: segment(currentProgress, 0.55, 0.8),
  };
}

export function IdentitySnapshotSection({
  experienceProgress = 0,
  journeyProgress = 0,
  knowledgeProgress = 0,
}: IdentitySnapshotSectionProps) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [bootComplete, setBootComplete] = useState(false);
  const morph = getIdentitySceneMorph(journeyProgress);

  const toggleAbout = useCallback(() => {
    setAboutOpen((current) => !current);
  }, []);

  const handleBootComplete = useCallback(() => {
    setBootComplete(true);
  }, []);

  return (
    <section
      className="relative isolate h-[100svh] overflow-hidden px-[var(--page-pad)] py-3 md:py-4"
      aria-label="Identity Snapshot"
    >
      <IdentityDataCenterBackdrop
        progress={morph.floorShift}
        shellForm={morph.shellForm}
      />
      <CapabilityMatrixScene
        archiveProgress={knowledgeProgress}
        floorShift={morph.floorShift}
        shellForm={morph.shellForm}
        titleMorph={morph.titleMorph}
      />
      <KnowledgeLibraryScene
        districtProgress={experienceProgress}
        progress={knowledgeProgress}
      />
      <ExperienceDistrictScene progress={experienceProgress} />

      <motion.div
        animate={{
          filter: bootComplete ? "blur(0px)" : "blur(12px)",
          opacity: bootComplete ? 1 : 0,
          scale: bootComplete ? 1 : 0.985,
        }}
        aria-hidden={!bootComplete}
        className={cn(
          "relative z-10 mx-auto grid h-full w-full max-w-[var(--shell-max)] grid-rows-[auto_minmax(0,1fr)] gap-3",
          !bootComplete && "pointer-events-none",
        )}
        initial={false}
        transition={{ duration: 0.74, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.header
          className="relative mx-auto w-full max-w-5xl text-center"
          style={{
            transform: `translate3d(0, ${morph.titleMorph * -10}px, 0) scale(${1 - morph.titleMorph * 0.07})`,
            transformOrigin: "top center",
          }}
        >
          <span className="absolute left-[8%] right-[8%] top-0 hidden h-px bg-gradient-to-r from-transparent via-cyan-muted/40 to-transparent md:block">
            <span className="absolute top-0 h-px w-20 bg-cyan-muted shadow-[var(--glow-cyan)] animate-[sweep-light_4.4s_linear_infinite]" />
          </span>
          <span className="pointer-events-none absolute inset-x-[3%] top-3 hidden h-11 md:block" aria-hidden="true">
            <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-cyan-muted/45 animate-[corner-spark_4.2s_ease-in-out_infinite]" />
            <span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-cyan-muted/45 animate-[corner-spark_4.2s_ease-in-out_infinite]" />
          </span>
          <h1
            className="font-mono text-[clamp(2.25rem,5.4vw,5.1rem)] font-black uppercase leading-none text-foreground drop-shadow-[0_0_18px_rgba(113,217,210,0.22)]"
            style={{
              clipPath: `inset(0 ${morph.titleMorph * 42}% 0 ${morph.titleMorph * 42}%)`,
              opacity: 1 - morph.titleMorph,
              transform: `translate3d(0, ${morph.titleMorph * -12}px, 0)`,
            }}
          >
            KIAGUS ARIF RAHMAN
          </h1>
          <h2
            aria-hidden={morph.titleMorph < 0.05}
            className="pointer-events-none absolute left-1/2 top-1 flex h-12 w-[min(82vw,44rem)] items-center justify-center overflow-hidden rounded-[4px] border border-cyan-muted/24 bg-[linear-gradient(90deg,rgba(4,8,12,0.36),rgba(13,25,33,0.72)_48%,rgba(4,8,12,0.36))] px-6 font-mono text-[clamp(1.25rem,3vw,2.55rem)] font-black uppercase leading-none text-cyan-muted shadow-[0_0_32px_rgba(113,217,210,0.12),inset_0_0_20px_rgba(113,217,210,0.06)]"
            style={{
              opacity: morph.titleMorph * (1 - morph.shellForm),
              transform: `translate3d(-50%, ${(1 - morph.titleMorph) * 12}px, 0) scale(${0.94 + morph.titleMorph * 0.06})`,
            }}
          >
            <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-muted/55 to-transparent" />
            <span className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-green-soft/30 to-transparent" />
            <span className="absolute left-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-[2px] bg-green-soft/80 shadow-[var(--glow-green)] animate-[node-pulse_3.2s_ease-in-out_infinite]" />
            <span className="absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-[2px] bg-cyan-muted/80 shadow-[var(--glow-cyan)] animate-[node-pulse_3.7s_ease-in-out_infinite]" />
            <span className="relative z-10">CAPABILITY MATRIX</span>
          </h2>
          <p
            className="mt-2 font-mono text-[clamp(0.95rem,1.8vw,1.45rem)] uppercase text-cyan-muted"
            style={{
              opacity: 1 - morph.titleMorph * 0.92,
              transform: `translate3d(0, ${morph.titleMorph * -6}px, 0)`,
            }}
          >
            Data Scientist • AI Product Builder • AI Builder
          </p>
          <p
            className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-foreground/75 md:text-base"
            style={{
              opacity: 1 - morph.titleMorph,
              transform: `translate3d(0, ${morph.titleMorph * -8}px, 0)`,
            }}
          >
            Strong Data Science Foundation for intelligent workflows and AI
            products.
          </p>
        </motion.header>

        <div className="relative grid min-h-0 items-center gap-4 lg:grid-cols-[minmax(12rem,0.72fr)_minmax(20rem,1fr)_minmax(12rem,0.72fr)]">
          <motion.div
            className="z-20 grid gap-3 sm:grid-cols-3 lg:grid-cols-1"
            style={getPanelColumnStyle("left", morph)}
          >
            {leftCards.map((card, index) => (
              <MorphingIdentityPanel
                card={card}
                collapse={morph.panelCollapse}
                index={index}
                key={card.label}
                side="left"
              />
            ))}
          </motion.div>

          <motion.div
            className="relative z-10 mx-auto grid w-full max-w-[29rem] place-items-center"
            style={getLanyardDockStyle(morph)}
          >
            <MonitorWall morph={morph} />
            <AvatarCore
              bootReleased={bootComplete}
              isAboutOpen={aboutOpen}
              onToggleAbout={toggleAbout}
              className="relative z-20"
            />
          </motion.div>

          <motion.div
            className="z-20 grid gap-3 sm:grid-cols-3 lg:grid-cols-1"
            style={getPanelColumnStyle("right", morph)}
          >
            {rightCards.map((card, index) => (
              <MorphingIdentityPanel
                card={card}
                collapse={morph.panelCollapse}
                index={index}
                key={card.label}
                side="right"
              />
            ))}
          </motion.div>
        </div>

      </motion.div>

      <AnimatePresence>
        {!bootComplete ? <IdentityBootPreloader onComplete={handleBootComplete} /> : null}
      </AnimatePresence>
    </section>
  );
}

function getPanelColumnStyle(
  side: "left" | "right",
  morph: IdentitySceneMorph,
): CSSProperties {
  const direction = side === "left" ? -1 : 1;
  const depth = morph.panelCollapse * -82 + morph.shellForm * -96;

  return {
    filter: `brightness(${1 - morph.shellForm * 0.14})`,
    opacity: Math.max(0, 1 - morph.shellForm * 1.08),
    transform: `perspective(1050px) translate3d(${direction * (morph.panelCollapse * 12 + morph.shellForm * 30)}px, ${morph.shellForm * 8}px, ${depth}px) rotateY(${direction * (morph.panelCollapse * 4 + morph.shellForm * 7)}deg) scale(${1 - morph.shellForm * 0.05})`,
    transformOrigin: side === "left" ? "right center" : "left center",
    transformStyle: "preserve-3d",
  };
}

function getLanyardDockStyle(morph: IdentitySceneMorph): CSSProperties {
  return {
    filter: `brightness(${1 - morph.shellForm * 0.14})`,
    opacity: Math.max(0, 1 - morph.shellForm * 1.2),
    pointerEvents: morph.shellForm > 0.62 ? "none" : "auto",
    transform: `perspective(1200px) translate3d(0, ${morph.lanyardDock * -108 + morph.shellForm * -112}px, ${morph.lanyardDock * -210 + morph.shellForm * -120}px) scale(${1 - morph.lanyardDock * 0.3 - morph.shellForm * 0.24})`,
    transformStyle: "preserve-3d",
    visibility: morph.shellForm > 0.98 ? "hidden" : "visible",
  };
}

function MorphingIdentityPanel({
  card,
  collapse,
  index,
  side,
}: {
  card: IdentityCard;
  collapse: number;
  index: number;
  side: "left" | "right";
}) {
  const direction = side === "left" ? 1 : -1;
  const offsetY = (index - 1) * 7;
  const panelStyle = {
    marginLeft: side === "left" ? `${collapse * -5.7}rem` : undefined,
    minHeight: `${5.7 + collapse * 2.25}rem`,
    pointerEvents: collapse > 0.72 ? "none" : "auto",
    transform: `translate3d(${direction * collapse * (9 + index * 2)}px, ${collapse * offsetY}px, 0) scaleX(${1 - collapse * 0.04}) scaleY(${1 - collapse * 0.08})`,
    transformOrigin: side === "left" ? "right center" : "left center",
    transformStyle: "preserve-3d",
    width: `calc(100% + ${collapse * 5.7}rem)`,
  } as CSSProperties;
  const cardStyle = {
    clipPath: `polygon(${collapse * 10}px 0, calc(100% - ${collapse * 10}px) 0, 100% ${collapse * 11}px, 100% calc(100% - ${collapse * 11}px), calc(100% - ${collapse * 10}px) 100%, ${collapse * 10}px 100%, 0 calc(100% - ${collapse * 11}px), 0 ${collapse * 11}px)`,
    opacity: 1 - collapse,
    transform: `translateZ(${(1 - collapse) * 14}px)`,
  } as CSSProperties;

  return (
    <motion.div className="relative" style={panelStyle}>
      <div className="relative" style={cardStyle}>
        <IdentityStatCard {...card} />
      </div>
      <TerminalSocketShell collapse={collapse} index={index} side={side} />
    </motion.div>
  );
}

function TerminalSocketShell({
  collapse,
  index,
  side,
}: {
  collapse: number;
  index: number;
  side: "left" | "right";
}) {
  const direction = side === "left" ? 1 : -1;
  const slotNumber = side === "left" ? index + 1 : index + 4;
  const terminal = capabilityTerminals[slotNumber - 1];

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 block overflow-hidden rounded-[8px] border border-cyan-muted/20 bg-[linear-gradient(135deg,rgba(113,217,210,0.12),rgba(5,9,13,0.82)_48%,rgba(1,4,7,0.92))] shadow-[0_18px_44px_rgba(0,0,0,0.42),inset_0_0_24px_rgba(113,217,210,0.07)]"
      style={{
        clipPath:
          "polygon(12px 0, calc(100% - 16px) 0, 100% 14px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 14px), 0 12px)",
        opacity: collapse,
        transform: `translate3d(${direction * (1 - collapse) * 18}px, 0, ${collapse * 20}px)`,
      }}
    >
      <span className="absolute inset-1 rounded-[5px] border border-foreground/8" />
      <span className="absolute inset-0 micro-grid opacity-45" />
      <span
        className={cn(
          "absolute top-3 h-2 w-2 rounded-[2px] shadow-[var(--glow-cyan)] animate-[node-pulse_3.4s_ease-in-out_infinite]",
          index === 1 ? "bg-green-soft" : "bg-cyan-muted",
          side === "left" ? "right-3" : "left-3",
        )}
      />
      <span
        className={cn(
          "absolute top-3 h-2 w-10 rounded-sm border border-cyan-muted/15 bg-cyan-muted/8",
          side === "left" ? "left-3" : "right-3",
        )}
      />
      <span className="absolute left-4 right-4 top-[2.7rem] h-px bg-gradient-to-r from-transparent via-cyan-muted/24 to-transparent" />
      <span className="absolute left-4 right-4 top-[2.95rem] rounded-[4px] border border-cyan-muted/14 bg-background/42 px-3 py-2.5 text-center font-mono uppercase text-cyan-muted/86 shadow-[inset_0_0_18px_rgba(113,217,210,0.05)]">
        <span className="block text-[0.48rem] font-bold tracking-[0.18em] text-foreground/42">
          SLOT {String(slotNumber).padStart(2, "0")}
        </span>
        <span className="mt-1 block text-[0.68rem] font-black leading-4 tracking-[0.08em] text-cyan-muted">
          {terminal.title}
        </span>
        <span className="mt-2 block rounded-[3px] border border-green-soft/12 bg-green-soft/7 px-2 py-1 text-[0.46rem] font-bold leading-3 tracking-[0.08em] text-green-soft/76">
          {terminal.command}
        </span>
      </span>
      <span className="absolute left-4 right-4 top-[58%] h-px bg-gradient-to-r from-transparent via-cyan-muted/46 to-transparent" />
      <span className="absolute bottom-4 left-1/2 flex h-6 w-24 -translate-x-1/2 items-center gap-2 rounded-[3px] border border-green-soft/14 bg-green-soft/7 px-2.5">
        <span className="h-1.5 w-1.5 rounded-[2px] bg-green-soft/80 shadow-[var(--glow-green)]" />
        <span className="h-px flex-1 bg-gradient-to-r from-green-soft/42 to-transparent" />
        <span className="h-1.5 w-5 rounded-[2px] bg-cyan-muted/28" />
      </span>
      <span className="absolute bottom-3 left-4 grid h-7 w-16 grid-cols-4 items-end gap-1 opacity-40">
        {wallScreens.slice(0, 4).map((screen) => (
          <span
            className="rounded-[1px] bg-cyan-muted/45 animate-[screen-flicker_4.8s_steps(4,end)_infinite]"
            key={`${side}-${index}-${screen}`}
            style={{
              animationDelay: `${screen * 0.12 + index * 0.08}s`,
              height: `${24 + ((screen + index) * 13) % 58}%`,
              opacity: 0.5 + collapse * 0.35,
            }}
          />
        ))}
      </span>
    </span>
  );
}

function MonitorWall({ morph }: { morph: IdentitySceneMorph }) {
  const shell = morph.shellForm;

  return (
    <div
      className="pointer-events-none absolute inset-x-[-32%] top-[2%] z-0 hidden h-[64%] md:block"
      aria-hidden="true"
      style={{
        opacity: 1 - shell * 0.08,
        transform: `translate3d(0, ${shell * -14}px, 0) scale(${1 + shell * 0.12})`,
        transformOrigin: "50% 40%",
      }}
    >
      <div className="absolute inset-x-[18%] top-[8%] h-[74%] rounded-sm border border-cyan-muted/10 bg-surface-0/50 shadow-[inset_0_0_70px_rgba(113,217,210,0.08)]" />
      <ScreenFrame
        className="left-[6%] top-[22%] h-[42%] w-[23%]"
        label="SIG-A"
        style={{
          transform: `skewY(-3deg) translate3d(${shell * -30}px, ${shell * 9}px, 0) scale(${1 - shell * 0.08})`,
        }}
        tone="cyan"
      />
      <ScreenFrame
        className="left-[28%] top-[7%] h-[48%] w-[20%]"
        label="MAP"
        style={{
          transform: `skewY(-1deg) translate3d(${shell * -16}px, ${shell * -15}px, 0) scale(${1 - shell * 0.05})`,
        }}
        tone="blue"
        dense
      />
      <ScreenFrame
        className="left-[49%] top-[5%] h-[50%] w-[23%]"
        label="CORE"
        style={{
          transform: `translate3d(0, ${shell * -18}px, 0) scale(${1 + shell * 0.08})`,
        }}
        tone="cyan"
        dense
      />
      <ScreenFrame
        className="right-[7%] top-[20%] h-[44%] w-[24%]"
        label="FLOW"
        style={{
          transform: `skewY(3deg) translate3d(${shell * 30}px, ${shell * 9}px, 0) scale(${1 - shell * 0.08})`,
        }}
        tone="green"
        reverse
      />
      <div
        className="absolute left-[18%] right-[18%] bottom-[18%] h-10 rounded-sm border border-cyan-muted/10 bg-surface-1/70 shadow-[var(--shadow-panel)]"
        style={{
          opacity: 1 - shell * 0.32,
          transform: `translate3d(0, ${shell * 18}px, 0) scaleX(${1 + shell * 0.12})`,
        }}
      >
        <span className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-muted/40 to-transparent" />
        <span className="absolute left-[18%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-[2px] bg-cyan-muted shadow-[var(--glow-cyan)] animate-[node-pulse_2.5s_ease-in-out_infinite]" />
        <span className="absolute right-[20%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-[2px] bg-amber-soft shadow-[var(--glow-amber)] animate-[node-pulse_3s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}

function ScreenFrame({
  className,
  dense = false,
  reverse = false,
  label,
  style,
  tone,
}: {
  className: string;
  dense?: boolean;
  reverse?: boolean;
  label: string;
  style?: CSSProperties;
  tone: "cyan" | "green" | "blue";
}) {
  const ledClass =
    tone === "green"
      ? "bg-green-soft shadow-[var(--glow-green)]"
      : tone === "blue"
        ? "bg-blue-soft shadow-[0_0_18px_rgba(139,185,255,0.32)]"
        : "bg-cyan-muted shadow-[var(--glow-cyan)]";

  return (
    <div
      className={cn(
        "alive-border absolute overflow-hidden rounded-sm border border-cyan-muted/20 bg-surface-1/70 p-1 shadow-[var(--shadow-panel)]",
        className,
      )}
      style={style}
    >
      <div className="relative h-full overflow-hidden rounded-[2px] border border-foreground/10 bg-background/70 p-3">
        <span className="absolute inset-0 micro-grid opacity-60" />
        <span className="scanline-mask absolute inset-0 opacity-25 animate-[scanline-drift_8s_linear_infinite]" />
        <span className="absolute left-3 top-3 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-cyan-muted/60">
          {label}
        </span>
        <span
          className={cn(
            "absolute right-3 top-3 h-1.5 w-1.5 rounded-[2px] animate-[node-pulse_2.8s_ease-in-out_infinite]",
            ledClass,
          )}
        />
        <MonitorLines reverse={reverse} dense={dense} />
        <ReadoutBars tone={tone} />
      </div>
    </div>
  );
}

function MonitorLines({
  reverse,
  dense = false,
}: {
  reverse: boolean;
  dense?: boolean;
}) {
  return (
    <div className="relative h-full overflow-hidden rounded-sm p-4">
      {monitorRows.slice(0, dense ? 7 : 5).map((row) => (
        <span
          key={row}
          className={cn(
            "absolute h-px bg-gradient-to-r from-transparent via-cyan-muted/60 to-transparent",
            reverse ? "right-4" : "left-4",
          )}
          style={{
            top: `${18 + row * 12}%`,
            width: `${32 + ((row * 17) % 48)}%`,
            animation: "sweep-light 4.8s linear infinite",
            animationDelay: `${row * 0.18}s`,
          }}
        />
      ))}
    </div>
  );
}

function ReadoutBars({ tone }: { tone: "cyan" | "green" | "blue" }) {
  const color =
    tone === "green"
      ? "bg-green-soft/70"
      : tone === "blue"
        ? "bg-blue-soft/70"
        : "bg-cyan-muted/70";

  return (
    <div className="absolute bottom-3 left-3 grid h-10 w-20 grid-cols-6 items-end gap-1">
      {wallScreens.slice(0, 6).map((screen) => (
        <span
          key={screen}
          className={cn("rounded-[1px] animate-[screen-flicker_4.2s_steps(4,end)_infinite]", color)}
          style={{
            height: `${22 + ((screen * 17) % 64)}%`,
            animationDelay: `${screen * 0.16}s`,
          }}
        />
      ))}
    </div>
  );
}

function IdentityDataCenterBackdrop({
  progress,
  shellForm,
}: {
  progress: number;
  shellForm: number;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(113,217,210,0.17),transparent_23rem),linear-gradient(180deg,rgba(5,7,10,0.06),rgba(5,7,10,0.96))]"
        style={{
          transform: `scale(${1 + progress * 0.035})`,
        }}
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(113,217,210,0.1),transparent_24rem),linear-gradient(180deg,rgba(2,4,7,0.08),rgba(1,3,6,0.76))]"
        style={{ opacity: shellForm * 0.86 }}
      />

      <div
        className="absolute inset-x-[5%] top-[8%] h-[78%] rounded-[18px] border border-cyan-muted/10 bg-surface-0/30 shadow-[inset_0_0_90px_rgba(113,217,210,0.08)]"
        style={{
          transform: `scaleX(${1 + shellForm * 0.035}) translateY(${shellForm * -5}px)`,
        }}
      />
      <div
        className="absolute left-[24%] right-[24%] top-[7%] hidden h-8 rounded-b-sm border-x border-b border-cyan-muted/15 bg-surface-2/70 shadow-[var(--glow-cyan)] md:block"
        style={{
          opacity: 1 - shellForm * 0.22,
          transform: `translateY(${shellForm * -10}px) scaleX(${1 + shellForm * 0.1})`,
        }}
      >
        <span className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-muted/50 to-transparent animate-[sweep-light_5s_linear_infinite]" />
        <span className="absolute left-1/2 top-1/2 h-2 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-muted/30 blur-sm animate-[node-pulse_3.8s_ease-in-out_infinite]" />
      </div>

      <div className="absolute left-0 top-[8%] hidden h-[78%] w-[13%] skew-y-[-7deg] border-r border-cyan-muted/20 bg-surface-1/80 shadow-[var(--shadow-panel)] md:block">
        <ServerLightGrid reverse={false} />
      </div>
      <div className="absolute right-0 top-[8%] hidden h-[78%] w-[13%] skew-y-[7deg] border-l border-cyan-muted/20 bg-surface-1/80 shadow-[var(--shadow-panel)] md:block">
        <ServerLightGrid reverse />
      </div>
      <SideConsole side="left" />
      <SideConsole side="right" />

      <div
        className="absolute inset-x-[9%] bottom-[9%] h-[36%] origin-bottom border-t border-cyan-muted/20 bg-[linear-gradient(rgba(113,217,210,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(113,217,210,0.16)_1px,transparent_1px)] bg-[length:44px_26px] opacity-65"
        style={{
          opacity: 0.65 + shellForm * 0.18,
          transform: `perspective(820px) rotateX(${64 + progress * 5}deg) translateY(${progress * -24}px) scaleX(${1 + progress * 0.18})`,
        }}
      >
        <FloorSignalNodes />
      </div>

      <div className="absolute inset-0">
        {particles.map((particle) => (
          <span
            key={particle}
            className="absolute h-1 w-1 rounded-[1px] bg-cyan-muted/70 animate-[particle-drift_8s_linear_infinite]"
            style={{
              left: `${8 + ((particle * 17) % 84)}%`,
              top: `${16 + ((particle * 23) % 68)}%`,
              animationDelay: `${particle * 0.37}s`,
              animationDuration: `${7 + (particle % 5)}s`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-x-[14%] top-[44%] h-px overflow-hidden bg-cyan-muted/20"
        style={{ opacity: 1 - shellForm }}
      >
        <span className="absolute top-0 h-px w-28 bg-cyan-muted shadow-[var(--glow-cyan)] animate-[data-packet-x_4.8s_linear_infinite]" />
      </div>
      <div
        className="absolute inset-x-[12%] top-[72%] h-px overflow-hidden bg-amber-soft/20"
        style={{ opacity: 1 - shellForm }}
      >
        <span className="absolute top-0 h-px w-24 bg-amber-soft shadow-[var(--glow-amber)] animate-[data-packet-x_5.6s_linear_infinite]" />
      </div>
    </div>
  );
}

function ServerLightGrid({ reverse }: { reverse: boolean }) {
  return (
    <div className="grid h-full grid-cols-4 content-around gap-3 p-5">
      {serverLights.map((light) => (
        <span
          key={light}
          className={cn(
            "h-1.5 rounded-full animate-[server-light_4.8s_steps(4,end)_infinite]",
            light % 5 === 0
              ? "bg-amber-soft"
              : light % 3 === 0
                ? "bg-green-soft"
                : "bg-cyan-muted",
            reverse && "translate-y-3",
          )}
          style={{
            animationDelay: `${light * 0.11}s`,
          }}
        />
      ))}
    </div>
  );
}

function SideConsole({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={cn(
        "absolute top-[30%] hidden h-[34%] w-[9%] rounded-sm border border-cyan-muted/15 bg-background/45 shadow-[var(--shadow-panel)] md:block",
        side === "left" ? "left-[13%] -skew-y-6" : "right-[13%] skew-y-6",
      )}
      aria-hidden="true"
    >
      <span className="absolute inset-1 rounded-sm border border-foreground/10" />
      <span className="absolute inset-0 micro-grid opacity-60" />
      <span className="scanline-mask absolute inset-0 opacity-20 animate-[scanline-drift_7s_linear_infinite]" />
      <span className="absolute left-3 right-3 top-5 h-px bg-gradient-to-r from-transparent via-cyan-muted/70 to-transparent animate-[sweep-light_4s_linear_infinite]" />
      <span className="absolute left-4 top-10 h-2 w-2 rounded-[2px] bg-amber-soft shadow-[var(--glow-amber)] animate-[node-pulse_3.2s_ease-in-out_infinite]" />
      <span className="absolute bottom-6 right-4 h-2 w-2 rounded-[2px] bg-green-soft shadow-[var(--glow-green)] animate-[node-pulse_3.8s_ease-in-out_infinite]" />
      <span className="absolute bottom-4 left-4 right-4 h-12 rounded-sm border border-cyan-muted/15 bg-cyan-muted/10">
        <span className="absolute inset-x-2 top-3 h-px bg-cyan-muted/45" />
        <span className="absolute inset-x-2 top-6 h-px bg-blue-soft/35" />
        <span className="absolute inset-x-2 top-9 h-px bg-green-soft/35" />
      </span>
    </div>
  );
}

function FloorSignalNodes() {
  return (
    <span className="absolute inset-0" aria-hidden="true">
      {[0, 1, 2, 3, 4, 5].map((node) => (
        <span
          key={node}
          className="absolute h-2 w-2 rounded-[2px] bg-cyan-muted shadow-[var(--glow-cyan)] animate-[node-pulse_3.2s_ease-in-out_infinite]"
          style={{
            left: `${18 + node * 12}%`,
            top: `${22 + ((node * 19) % 42)}%`,
            animationDelay: `${node * 0.22}s`,
          }}
        />
      ))}
    </span>
  );
}
