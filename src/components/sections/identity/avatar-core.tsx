"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type AvatarCoreProps = {
  isAboutOpen: boolean;
  onToggleAbout: () => void;
  className?: string;
};

const pixelNodes = [
  "left-[2%] top-[20%]",
  "left-[8%] bottom-[23%]",
  "right-[2%] top-[28%]",
  "right-[10%] bottom-[22%]",
  "left-[46%] -top-3",
  "right-[42%] -bottom-2",
];

const techTags = ["Statistics", "Data Systems", "AI Products", "Workflows"];

export function AvatarCore({
  isAboutOpen,
  onToggleAbout,
  className,
}: AvatarCoreProps) {
  return (
    <div
      className={cn(
        "group relative mx-auto grid w-full max-w-[18rem] place-items-center md:max-w-[20rem]",
        className,
      )}
      style={{ perspective: "1300px" }}
    >
      <span
        className="absolute -inset-12 rounded-full bg-cyan-muted/10 blur-3xl animate-[avatar-glow_5.8s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <span
        className="absolute -top-12 h-14 w-24 rounded-b-md border-x border-b border-cyan-muted/30 bg-[linear-gradient(90deg,rgba(113,217,210,0.12)_25%,transparent_25%,transparent_50%,rgba(113,217,210,0.12)_50%,rgba(113,217,210,0.12)_75%,transparent_75%)] bg-[length:12px_12px] shadow-[var(--glow-cyan)] animate-[lanyard-sway_5.4s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <span
        className="absolute -top-2 z-30 h-5 w-16 rounded-sm border border-amber-soft/40 bg-surface-2 shadow-[var(--glow-amber)]"
        aria-hidden="true"
      >
        <span className="absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-amber-soft/70 to-transparent animate-[sweep-light_3.8s_linear_infinite]" />
      </span>
      <span
        className="absolute -inset-4 rounded-md border border-dashed border-cyan-muted/24 animate-[node-pulse_5.2s_ease-in-out_infinite]"
        aria-hidden="true"
      />

      {pixelNodes.map((position, index) => (
        <span
          key={position}
          className={cn(
            "absolute h-2 w-2 rounded-[2px] bg-cyan-muted shadow-[var(--glow-cyan)] animate-[node-pulse_3.2s_ease-in-out_infinite]",
            position,
          )}
          style={{ animationDelay: `${index * 0.32}s` }}
          aria-hidden="true"
        />
      ))}

      <motion.button
        type="button"
        aria-pressed={isAboutOpen}
        aria-label="Toggle About Kiagus panel"
        onClick={onToggleAbout}
        className="relative h-[21.5rem] w-full rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-muted/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-[23rem]"
        whileHover={{ y: -9, rotateX: 2.6, filter: "brightness(1.08)" }}
        whileTap={{ scale: 0.97, filter: "brightness(1.18)" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <CardShell side="front" isVisible={!isAboutOpen}>
          <span className="relative z-10 flex h-full flex-col">
            <span className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-cyan-muted/20 px-3 py-2 font-mono uppercase">
              <span>
                <span className="block text-[0.62rem] tracking-[0.22em] text-cyan-muted">
                  Identity Pass
                </span>
                <span className="mt-1 block text-sm font-bold text-foreground">
                  Kiagus Arif
                </span>
              </span>
              <span className="rounded-sm border border-amber-soft/35 bg-amber-soft/10 px-2 py-1 text-[0.65rem] text-amber-soft shadow-[var(--glow-amber)]">
                KAR-01
              </span>
            </span>

            <span className="relative m-3 mb-2 block flex-1 overflow-hidden rounded-sm border border-cyan-muted/30 bg-background shadow-[inset_0_0_26px_rgba(113,217,210,0.12)]">
              <Image
                src="/avatar/fotokiagus.jpeg"
                alt="Kiagus Arif Rahman"
                fill
                priority
                sizes="(max-width: 768px) 72vw, 340px"
                className="object-cover object-[50%_18%] grayscale-[0.08] contrast-[1.18] saturate-[0.92] sepia-[0.08] animate-[pixel-shift_8s_steps(2,end)_infinite]"
              />
              <span
                className="absolute inset-0 bg-[linear-gradient(90deg,rgba(113,217,210,0.09)_1px,transparent_1px),linear-gradient(rgba(113,217,210,0.08)_1px,transparent_1px)] bg-[length:10px_10px] mix-blend-screen"
                aria-hidden="true"
              />
              <span
                className="scanline-mask absolute inset-0 opacity-45 animate-[scanline-drift_6s_linear_infinite]"
                aria-hidden="true"
              />
              <span
                className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-cyan-muted/18 to-transparent animate-[holo-sweep_4.8s_ease-in-out_infinite]"
                aria-hidden="true"
              />
              <span
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/40 to-transparent"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-3 left-3 rounded-sm border border-cyan-muted/30 bg-background/75 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-cyan-muted"
                aria-hidden="true"
              >
                Live Portrait
              </span>
            </span>

            <span className="grid grid-cols-3 gap-2 px-3 pb-3 font-mono text-[0.58rem] uppercase text-foreground/70">
              {["AI", "DATA", "SYSTEM"].map((chip) => (
                <span
                  key={chip}
                  className="relative overflow-hidden rounded-sm border border-cyan-muted/20 bg-cyan-muted/10 px-2 py-1 text-center"
                >
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-muted/70 to-transparent animate-[sweep-light_3.5s_linear_infinite]" />
                  {chip}
                </span>
              ))}
            </span>
          </span>
        </CardShell>

        <CardShell side="back" isVisible={isAboutOpen}>
          <span className="relative z-10 grid h-full content-between gap-4 p-4 text-left">
            <span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-green-soft terminal-cursor">
                About Kiagus
              </span>
              <span className="mt-4 block font-mono text-lg font-semibold uppercase leading-6 text-foreground">
                Owns system logic behind AI-assisted builds.
              </span>
              <span className="mt-3 block text-sm leading-6 text-foreground/75">
                Undergraduate Data Science student focused on statistics, data
                systems, AI problem formulation, workflow automation, and
                web-based solution implementation.
              </span>
            </span>

            <span className="grid gap-2">
              <span className="h-px bg-gradient-to-r from-green-soft/0 via-green-soft/70 to-green-soft/0 animate-[sweep-light_4s_linear_infinite]" />
              <span className="flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="relative overflow-hidden rounded-sm border border-cyan-muted/25 bg-cyan-muted/10 px-2.5 py-1 font-mono text-[0.62rem] uppercase text-cyan-muted"
                  >
                    <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-muted/70 to-transparent animate-[sweep-light_3.2s_linear_infinite]" />
                    {tag}
                  </span>
                ))}
              </span>
            </span>
          </span>
        </CardShell>
      </motion.button>

      {!isAboutOpen ? (
        <motion.button
          type="button"
          onClick={onToggleAbout}
          className="alive-border relative z-20 mt-3 inline-flex items-center gap-2 overflow-hidden rounded-sm border border-cyan-muted/35 bg-background/80 px-3.5 py-1.5 font-mono text-xs font-semibold uppercase text-cyan-muted shadow-[var(--glow-cyan)] outline-none focus-visible:ring-2 focus-visible:ring-cyan-muted/70"
          whileHover={{ y: -2, filter: "brightness(1.16)" }}
          whileTap={{ scale: 0.96, filter: "brightness(1.24)" }}
        >
          <span className="h-1.5 w-1.5 rounded-[2px] bg-current animate-[node-pulse_2.6s_ease-in-out_infinite]" />
          About Kiagus
          <span className="absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-current to-transparent animate-[sweep-light_3.2s_linear_infinite]" />
        </motion.button>
      ) : null}
    </div>
  );
}

function CardShell({
  children,
  isVisible,
  side,
}: {
  children: ReactNode;
  isVisible: boolean;
  side: "front" | "back";
}) {
  return (
    <motion.span
      className={cn(
        "alive-border absolute inset-0 block overflow-hidden rounded-md border bg-surface-0 shadow-[var(--shadow-panel)]",
        side === "front" ? "border-cyan-muted/35" : "border-green-soft/35",
      )}
      animate={{
        opacity: isVisible ? 1 : 0,
        rotateY:
          side === "front"
            ? isVisible
              ? 0
              : -180
            : isVisible
              ? 0
              : 180,
        zIndex: isVisible ? 3 : 1,
      }}
      transition={{ type: "spring", stiffness: 165, damping: 23 }}
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
      }}
    >
      <span className="absolute inset-1 rounded-sm border border-foreground/10" aria-hidden="true" />
      <span className="absolute inset-0 micro-grid opacity-65" aria-hidden="true" />
      <span
        className="scanline-mask absolute inset-0 opacity-35 animate-[scanline-drift_7s_linear_infinite]"
        aria-hidden="true"
      />
      <span
        className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[holo-sweep_5.8s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute inset-2 z-20" aria-hidden="true">
        {[
          "left-0 top-0 border-l border-t",
          "right-0 top-0 border-r border-t",
          "bottom-0 left-0 border-b border-l",
          "bottom-0 right-0 border-b border-r",
        ].map((position) => (
          <span
            key={`${side}-${position}`}
            className={cn(
              "absolute h-4 w-4 border-cyan-muted/65 animate-[corner-spark_4.2s_ease-in-out_infinite]",
              position,
            )}
          />
        ))}
      </span>
      {children}
    </motion.span>
  );
}
