"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AvatarCore } from "@/components/sections/identity/avatar-core";
import { BootConsole } from "@/components/sections/identity/boot-console";
import { ContactDock } from "@/components/sections/identity/contact-dock";
import { IdentityDashboard } from "@/components/sections/identity/identity-dashboard";
import { IdentityStatCard } from "@/components/sections/identity/identity-stat-card";
import { MonitorTransitionHook } from "@/components/sections/identity/monitor-transition-hook";
import { DataStream } from "@/components/motion/data-stream";
import { useGsapScrollScene } from "@/hooks/use-gsap-scroll-scene";
import { cn } from "@/lib/cn";

const statCards = [
  {
    label: "Data Science Foundation",
    detail: "Statistics, data systems, and AI problem formulation.",
    marker: "DS",
    tone: "cyan" as const,
  },
  {
    label: "AI Product Builder",
    detail: "Turns product logic into intelligent workflow systems.",
    marker: "AI",
    tone: "green" as const,
  },
  {
    label: "System Architecture",
    detail: "Owns data flow, decision rules, and technical direction.",
    marker: "SA",
    tone: "blue" as const,
  },
  {
    label: "Workflow Automation",
    detail: "Designs automation from input pipelines to review states.",
    marker: "WA",
    tone: "cyan" as const,
  },
  {
    label: "Project-Based Experience",
    detail: "Applied work across data processing and web solutions.",
    marker: "PX",
    tone: "amber" as const,
  },
  {
    label: "National-Level Achievement",
    detail: "Credibility through national innovation competition results.",
    marker: "NA",
    tone: "green" as const,
  },
];

const serverLights = Array.from({ length: 28 }, (_, index) => index);
const particles = Array.from({ length: 18 }, (_, index) => index);

export function IdentitySnapshotSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleProgress = useCallback((progress: number) => {
    setScrollProgress(progress);
  }, []);

  useGsapScrollScene(sectionRef, {
    start: "top top",
    end: "bottom bottom",
    scrub: 0.7,
    onProgress: handleProgress,
  });

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen overflow-hidden px-[var(--page-pad)] py-8 md:py-10"
      aria-label="Slide 1 Identity Snapshot"
    >
      <IdentityDataCenterBackdrop progress={scrollProgress} />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-[var(--shell-max)] gap-5">
        <div className="grid flex-1 gap-5 xl:grid-cols-[minmax(21rem,0.96fr)_minmax(17rem,0.78fr)_minmax(19rem,0.86fr)] xl:items-center">
          <motion.div
            className="grid gap-4"
            style={{
              transform: `translate3d(${scrollProgress * -14}px, ${scrollProgress * 6}px, 0)`,
            }}
          >
            <IdentityDashboard
              isAboutOpen={aboutOpen}
              onCloseAbout={() => setAboutOpen(false)}
            />
            <BootConsole />
          </motion.div>

          <motion.div
            className="relative grid gap-4"
            style={{
              transform: `translateY(${scrollProgress * -16}px) scale(${1 + scrollProgress * 0.018})`,
            }}
          >
            <div className="absolute left-1/2 top-6 h-[70%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-muted/40 to-transparent" />
            <AvatarCore
              isAboutOpen={aboutOpen}
              onToggleAbout={() => setAboutOpen((current) => !current)}
            />
            <div className="rounded-md border border-cyan-muted/15 bg-background/45 p-3 shadow-[var(--shadow-panel)] backdrop-blur-sm">
              <DataStream tone="cyan" />
            </div>
            <MonitorTransitionHook />
          </motion.div>

          <motion.div
            className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1"
            style={{
              transform: `translate3d(${scrollProgress * 14}px, ${scrollProgress * 5}px, 0)`,
            }}
          >
            {statCards.map((card) => (
              <IdentityStatCard key={card.label} {...card} />
            ))}
          </motion.div>
        </div>

        <ContactDock />
      </div>
    </section>
  );
}

function IdentityDataCenterBackdrop({ progress }: { progress: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(113,217,210,0.16),transparent_24rem),linear-gradient(180deg,rgba(5,7,10,0.1),rgba(5,7,10,0.96))]"
        style={{
          transform: `scale(${1 + progress * 0.035})`,
        }}
      />

      <div className="absolute inset-x-[8%] top-[17%] h-[46%] rounded-[24px] border border-cyan-muted/10 bg-surface-0/40 shadow-[inset_0_0_80px_rgba(113,217,210,0.08)]" />

      <div className="absolute left-0 top-[10%] hidden h-[82%] w-[14%] skew-y-[-7deg] border-r border-cyan-muted/20 bg-surface-1/80 shadow-[var(--shadow-panel)] md:block">
        <ServerLightGrid reverse={false} />
      </div>
      <div className="absolute right-0 top-[10%] hidden h-[82%] w-[14%] skew-y-[7deg] border-l border-cyan-muted/20 bg-surface-1/80 shadow-[var(--shadow-panel)] md:block">
        <ServerLightGrid reverse />
      </div>

      <div
        className="absolute inset-x-[12%] bottom-[12%] h-[34%] origin-bottom border-t border-cyan-muted/20 bg-[linear-gradient(rgba(113,217,210,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(113,217,210,0.16)_1px,transparent_1px)] bg-[length:44px_26px] opacity-70"
        style={{
          transform: `perspective(760px) rotateX(64deg) translateY(${progress * 24}px)`,
        }}
      />

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

      <div className="absolute inset-x-[18%] top-[46%] h-px overflow-hidden bg-cyan-muted/20">
        <span className="absolute top-0 h-px w-28 bg-cyan-muted shadow-[var(--glow-cyan)] animate-[data-packet-x_4.8s_linear_infinite]" />
      </div>
      <div className="absolute inset-x-[16%] top-[70%] h-px overflow-hidden bg-amber-soft/20">
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
