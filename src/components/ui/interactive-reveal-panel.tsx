"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useId, useMemo, useState } from "react";
import { AnimatedBorder } from "@/components/ui/animated-border";
import { DataPacketLine } from "@/components/ui/data-packet-line";
import { IconTile } from "@/components/ui/icon-tile";
import { MicroLabel } from "@/components/ui/micro-label";
import { PixelSeparator } from "@/components/ui/pixel-separator";
import { ScanlineOverlay } from "@/components/ui/scanline-overlay";
import { ScannerBeam } from "@/components/ui/scanner-beam";
import { StatusLED, type UiTone } from "@/components/ui/status-led";
import { cn } from "@/lib/cn";

export type InteractiveRevealVariant =
  | "access-scan"
  | "terminal-execute"
  | "hatch-unlock"
  | "hologram-project"
  | "decrypt-file"
  | "circuit-activate"
  | "pixel-assemble";

type InteractiveRevealPanelProps = {
  className?: string;
  defaultOpen?: boolean;
  description: string;
  icon?: ReactNode;
  label: string;
  title: string;
  variant: InteractiveRevealVariant;
};

type VariantConfig = {
  action: string;
  activeStatus: string;
  closedStatus: string;
  contentLabel: string;
  glyph: string;
  openClip: string;
  closedClip: string;
  tone: UiTone;
};

const variantConfig: Record<InteractiveRevealVariant, VariantConfig> = {
  "access-scan": {
    action: "ACCESS_SCAN",
    activeStatus: "identity_unlocked",
    closedStatus: "scan_ready",
    contentLabel: "compiled identity data",
    glyph: "ID",
    closedClip: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
    openClip: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
    tone: "cyan",
  },
  "terminal-execute": {
    action: "RUN_DETAIL",
    activeStatus: "process_live",
    closedStatus: "command_idle",
    contentLabel: "terminal output",
    glyph: ">_",
    closedClip: "polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
    openClip: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
    tone: "green",
  },
  "hatch-unlock": {
    action: "UNLOCK_HATCH",
    activeStatus: "hatch_open",
    closedStatus: "bolt_locked",
    contentLabel: "vault detail",
    glyph: "HX",
    closedClip: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
    openClip: "polygon(18px 0, calc(100% - 8px) 0, 100% 18px, calc(100% - 18px) 100%, 0 100%, 0 8px)",
    tone: "amber",
  },
  "hologram-project": {
    action: "PROJECT_HOLOGRAM",
    activeStatus: "projection_stable",
    closedStatus: "emitter_idle",
    contentLabel: "hologram layer",
    glyph: "HG",
    closedClip: "polygon(0 10px, 10px 0, 100% 0, 100% 100%, 0 100%)",
    openClip: "polygon(0 18px, 18px 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
    tone: "blue",
  },
  "decrypt-file": {
    action: "DECRYPT_FILE",
    activeStatus: "file_resolved",
    closedStatus: "encrypted",
    contentLabel: "resolved file",
    glyph: "DX",
    closedClip: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
    openClip: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
    tone: "green",
  },
  "circuit-activate": {
    action: "ACTIVATE_CIRCUIT",
    activeStatus: "circuit_hot",
    closedStatus: "node_wait",
    contentLabel: "connected signal",
    glyph: "CN",
    closedClip: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    openClip: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
    tone: "cyan",
  },
  "pixel-assemble": {
    action: "ASSEMBLE_PIXELS",
    activeStatus: "pixels_locked",
    closedStatus: "blocks_wait",
    contentLabel: "assembled packet",
    glyph: "PX",
    closedClip: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
    openClip: "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)",
    tone: "amber",
  },
};

const textToneClasses: Record<UiTone, string> = {
  cyan: "text-cyan-muted",
  amber: "text-amber-soft",
  green: "text-green-soft",
  blue: "text-blue-soft",
};

const borderToneClasses: Record<UiTone, string> = {
  cyan: "border-cyan-muted/35 shadow-[var(--glow-cyan)]",
  amber: "border-amber-soft/35 shadow-[var(--glow-amber)]",
  green: "border-green-soft/35 shadow-[var(--glow-green)]",
  blue: "border-blue-soft/35 shadow-[0_0_22px_rgba(139,185,255,0.2)]",
};

export function InteractiveRevealPanel({
  className,
  defaultOpen = false,
  description,
  icon,
  label,
  title,
  variant,
}: InteractiveRevealPanelProps) {
  const panelId = useId();
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const config = variantConfig[variant];
  const descriptionLines = useMemo(() => splitDescription(description), [description]);

  return (
    <motion.article
      animate={{
        clipPath: isOpen ? config.openClip : config.closedClip,
        filter: isOpen ? "brightness(1.08)" : "brightness(1)",
      }}
      className={cn(
        "group/reveal relative isolate overflow-hidden border bg-surface-1/90 text-foreground shadow-[var(--shadow-panel)] backdrop-blur-md",
        "micro-grid rounded-md transition-colors duration-300",
        borderToneClasses[config.tone],
        isOpen && "bg-surface-2/95",
        className,
      )}
      data-reveal-state={isOpen ? "active-idle" : "trigger-ready"}
      data-reveal-variant={variant}
      initial={false}
      style={{ transformStyle: "preserve-3d" }}
      transition={
        reduceMotion
          ? { duration: 0.01 }
          : { duration: 0.48, ease: [0.16, 1, 0.3, 1] }
      }
    >
      <AnimatedBorder active={isOpen} cornerSize="lg" tone={config.tone} />
      <ScanlineOverlay active intensity={isOpen ? "medium" : "subtle"} sweep={isOpen} />
      <ScannerBeam active={isOpen} tone={config.tone} />
      <VariantStageArtifact active={isOpen} tone={config.tone} variant={variant} />

      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        className="relative z-20 grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 p-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-muted/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:p-3.5"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <IconTile active={isOpen} label={`${label} icon`} tone={config.tone}>
          <span className="font-mono text-xs font-black uppercase">
            {icon ?? config.glyph}
          </span>
        </IconTile>

        <span className="min-w-0">
          <span className="mb-2 flex flex-wrap items-center gap-2">
            <MicroLabel active={isOpen} led tone={config.tone}>
              {label}
            </MicroLabel>
            <span
              className={cn(
                "font-mono text-[0.58rem] uppercase tracking-[0.16em] text-foreground/40",
                isOpen && textToneClasses[config.tone],
              )}
            >
              {isOpen ? config.activeStatus : config.closedStatus}
            </span>
          </span>
          <span className="block text-balance font-mono text-[0.82rem] font-semibold uppercase leading-5 text-foreground md:text-[0.92rem]">
            {title}
          </span>
        </span>

        <span className="grid justify-items-end gap-2">
          <StatusLED active={isOpen} label={isOpen ? "Open" : "Closed"} tone={config.tone} />
          <span
            className={cn(
              "font-mono text-[0.56rem] uppercase tracking-[0.14em]",
              textToneClasses[config.tone],
              isOpen && "terminal-cursor",
            )}
          >
            {isOpen ? "live" : "tap"}
          </span>
        </span>
      </button>

      <motion.div
        animate={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          opacity: isOpen ? 1 : 0.72,
        }}
        className="relative z-10 grid"
        id={panelId}
        initial={false}
        transition={
          reduceMotion
            ? { duration: 0.01 }
            : { duration: 0.42, ease: [0.16, 1, 0.3, 1] }
        }
      >
        <div className="overflow-hidden">
          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                animate={{
                  clipPath: "inset(0% 0% 0% 0%)",
                  rotateX: 0,
                  skewX: 0,
                }}
                className={cn(
                  "relative mx-3 mb-3 overflow-hidden rounded-sm border bg-background/70 p-3 shadow-[inset_0_0_28px_rgba(113,217,210,0.08)] md:mx-3.5 md:mb-3.5",
                  borderToneClasses[config.tone],
                  variant === "hologram-project" && "bg-blue-soft/10",
                  variant === "terminal-execute" && "bg-green-soft/5",
                  variant === "hatch-unlock" && "bg-amber-soft/10",
                )}
                exit={{
                  clipPath: "inset(0% 50% 100% 50%)",
                  rotateX: -8,
                  transition: { duration: 0.2 },
                }}
                initial={{
                  clipPath: "inset(0% 48% 100% 48%)",
                  rotateX: -12,
                  skewX: variant === "hologram-project" ? -3 : 0,
                }}
                transition={
                  reduceMotion
                    ? { duration: 0.01 }
                    : { duration: 0.46, delay: 0.06, ease: [0.16, 1, 0.3, 1] }
                }
              >
                <div className="absolute inset-0 micro-grid opacity-50" aria-hidden="true" />
                <ScanlineOverlay active intensity="subtle" sweep />
                <PanelContentTexture tone={config.tone} variant={variant} />

                <div className="relative z-10 space-y-3">
                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <MicroLabel active tone={config.tone}>
                      {config.action}
                    </MicroLabel>
                    <DataPacketLine active tone={config.tone} />
                  </div>

                  <div className="space-y-2 font-mono text-[0.72rem] leading-5 text-foreground/75">
                    <p className={cn("uppercase tracking-[0.14em]", textToneClasses[config.tone])}>
                      {config.contentLabel}
                    </p>
                    {descriptionLines.map((line, index) => (
                      <motion.p
                        animate={{
                          clipPath: "inset(0% 0% 0% 0%)",
                          filter: "blur(0px)",
                          x: 0,
                        }}
                        className="relative pl-4"
                        initial={{
                          clipPath: "inset(0% 100% 0% 0%)",
                          filter: "blur(2px)",
                          x: variant === "pixel-assemble" ? 0 : -6,
                        }}
                        key={`${title}-${index}-${line}`}
                        transition={{
                          duration: reduceMotion ? 0.01 : 0.32,
                          delay: reduceMotion ? 0 : 0.14 + index * 0.08,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <span
                          className={cn(
                            "absolute left-0 top-[0.62em] h-1.5 w-1.5 rounded-[2px]",
                            textToneClasses[config.tone],
                            "bg-current shadow-[0_0_10px_currentColor]",
                          )}
                        />
                        {line}
                      </motion.p>
                    ))}
                  </div>

                  <PixelSeparator active label="signal live" tone={config.tone} />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.article>
  );
}

function splitDescription(description: string) {
  const parts = description
    .split(". ")
    .map((part, index, list) =>
      index < list.length - 1 && !part.endsWith(".") ? `${part}.` : part,
    )
    .map((part) => part.trim())
    .filter(Boolean);

  return parts.length > 0 ? parts : [description];
}

function VariantStageArtifact({
  active,
  tone,
  variant,
}: {
  active: boolean;
  tone: UiTone;
  variant: InteractiveRevealVariant;
}) {
  if (variant === "terminal-execute") {
    return (
      <span className="pointer-events-none absolute inset-x-3 bottom-2 z-0 font-mono text-[0.56rem] uppercase text-green-soft/35 terminal-cursor">
        run --detail --panel
      </span>
    );
  }

  if (variant === "hatch-unlock") {
    return (
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-4 top-1 z-0 flex justify-between">
        {[0, 1, 2, 3, 4].map((bolt) => (
          <span
            className={cn(
              "h-1.5 w-5 rounded-b-sm border-x border-b border-amber-soft/35 bg-amber-soft/10",
              active && "animate-[hatch-bolt_1.8s_ease-in-out_infinite]",
            )}
            key={bolt}
            style={{ animationDelay: `${bolt * 0.08}s` }}
          />
        ))}
      </span>
    );
  }

  if (variant === "circuit-activate") {
    return (
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <span className="absolute left-16 right-10 top-5 h-px bg-cyan-muted/25" />
        <span className="absolute bottom-5 left-10 right-16 h-px bg-cyan-muted/20" />
        {[18, 42, 68].map((left, index) => (
          <span
            className={cn(
              "absolute top-5 h-1.5 w-1.5 rounded-[2px] bg-cyan-muted shadow-[var(--glow-cyan)]",
              active && "animate-[circuit-node_2.2s_ease-in-out_infinite]",
            )}
            key={left}
            style={{ left: `${left}%`, animationDelay: `${index * 0.2}s` }}
          />
        ))}
      </span>
    );
  }

  if (variant === "pixel-assemble") {
    return (
      <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 z-0 grid grid-cols-4 gap-1 opacity-55">
        {Array.from({ length: 12 }, (_, index) => (
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-[1px] bg-amber-soft",
              active && "animate-[pixel-flicker_2.4s_steps(2,end)_infinite]",
            )}
            key={index}
            style={{ animationDelay: `${index * 0.07}s` }}
          />
        ))}
      </span>
    );
  }

  if (variant === "decrypt-file") {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute bottom-3 right-4 z-0 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-green-soft/35",
          active && "animate-[decrypt-jitter_1.6s_steps(2,end)_infinite]",
        )}
      >
        7f:a9:00:resolve
      </span>
    );
  }

  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-x-4 bottom-2 z-0">
      <DataPacketLine active={active} tone={tone} />
    </span>
  );
}

function PanelContentTexture({
  tone,
  variant,
}: {
  tone: UiTone;
  variant: InteractiveRevealVariant;
}) {
  if (variant === "hologram-project") {
    return (
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(139,185,255,0.16),transparent)] animate-[hologram-shimmer_3.8s_ease-in-out_infinite]"
      />
    );
  }

  if (variant === "hatch-unlock") {
    return (
      <span aria-hidden="true" className="absolute inset-x-0 top-0 flex justify-evenly">
        {[0, 1, 2, 3, 4, 5].map((tooth) => (
          <span
            className="h-3 w-px bg-amber-soft/45 shadow-[var(--glow-amber)]"
            key={tooth}
          />
        ))}
      </span>
    );
  }

  if (variant === "pixel-assemble") {
    return (
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(241,185,90,0.12)_1px,transparent_1px),linear-gradient(rgba(241,185,90,0.08)_1px,transparent_1px)] bg-[length:9px_9px] animate-[pixel-flicker_4s_steps(2,end)_infinite]"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={cn(
        "absolute inset-x-0 top-0 h-px bg-current",
        textToneClasses[tone],
        "animate-[sweep-light_3.8s_linear_infinite]",
      )}
    />
  );
}
