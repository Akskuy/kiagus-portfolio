/* eslint-disable @next/next/no-img-element */
"use client";

import type { PointerEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { StatusLED } from "@/components/ui/status-led";
import { cn } from "@/lib/cn";

type AvatarCoreProps = {
  bootReleased?: boolean;
  isAboutOpen: boolean;
  onToggleAbout: () => void;
  className?: string;
};

const aboutChips = [
  "DATA SCIENCE",
  "AI PRODUCT",
  "SYSTEM WORKFLOW",
  "LEADERSHIP",
];

export function AvatarCore({
  bootReleased = true,
  isAboutOpen,
  onToggleAbout,
  className,
}: AvatarCoreProps) {
  const reduceMotion = useReducedMotion();
  const [settled, setSettled] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 18, mass: 0.45 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 18, mass: 0.45 });
  const rotateY = useTransform(springX, [-1, 1], [-4.5, 4.5]);
  const rotateX = useTransform(springY, [-1, 1], [3.4, -3.4]);
  const rotateZ = useTransform(springX, [-1, 1], [-0.4, 0.4]);
  const parallaxX = useTransform(springX, [-1, 1], [-3, 3]);
  const parallaxY = useTransform(springY, [-1, 1], [-2, 2]);
  const isSettled = bootReleased && settled;

  useEffect(() => {
    if (!bootReleased) {
      pointerX.set(0);
      pointerY.set(0);
      return;
    }

    const settleDelay = reduceMotion ? 20 : 1450;
    const settleTimer = window.setTimeout(() => setSettled(true), settleDelay);

    return () => window.clearTimeout(settleTimer);
  }, [bootReleased, pointerX, pointerY, reduceMotion]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!isSettled || reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    pointerX.set(Math.max(-1, Math.min(1, x)));
    pointerY.set(Math.max(-1, Math.min(1, y)));
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.div
      animate={
        bootReleased
          ? reduceMotion
            ? { opacity: 1, rotateZ: 0, scale: 1, y: 0 }
            : {
                opacity: [0, 1, 1, 1, 1],
                rotateZ: [-4.4, 2.05, -0.95, 0.28, 0],
                scale: [0.982, 1.004, 0.998, 1, 1],
                y: [-350, 32, -15, 5, 0],
              }
          : { opacity: 0, rotateZ: -4.4, scale: 0.982, y: -350 }
      }
      className={cn(
        "relative mx-auto grid w-[min(72vw,18.75rem)] place-items-center pt-[5.45rem] md:w-[19.5rem] md:pt-[5.75rem]",
        className,
      )}
      initial={false}
      style={{ perspective: "1500px" }}
      transition={
        reduceMotion
          ? { duration: 0.01 }
          : {
              duration: 1.34,
              ease: [0.16, 1, 0.3, 1],
              times: [0, 0.54, 0.73, 0.9, 1],
            }
      }
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 h-16 w-[84%] rounded-[50%] bg-black/70 blur-2xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 h-24 w-[76%] bg-[radial-gradient(ellipse_at_center,rgba(113,217,210,0.2),rgba(113,217,210,0.05)_42%,transparent_74%)] blur-xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[13%] top-[5.55rem] h-px bg-gradient-to-r from-transparent via-cyan-muted/65 to-transparent"
      />

      <motion.div
        className={cn(
          "relative grid w-full place-items-center",
          isSettled && "animate-[lanyard-hang-idle_6.8s_ease-in-out_infinite]",
        )}
        onPointerLeave={resetPointer}
        onPointerMove={handlePointerMove}
        onPointerUp={resetPointer}
        style={{
          rotateX,
          rotateY,
          rotateZ,
          transformStyle: "preserve-3d",
        }}
      >
        <LanyardHardware active={bootReleased} settled={isSettled} />

        <motion.button
          aria-label={
            isAboutOpen
              ? "Return lanyard pass to front identity view"
              : "Flip lanyard pass to reveal About Kiagus"
          }
          aria-pressed={isAboutOpen}
          className="group/lanyard relative z-20 h-[25rem] w-full cursor-pointer rounded-[18px] outline-none focus-visible:ring-2 focus-visible:ring-cyan-muted/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-[26.75rem]"
          onClick={onToggleAbout}
          style={{ x: parallaxX, y: parallaxY, transformStyle: "preserve-3d" }}
          type="button"
          whileHover={isSettled ? { filter: "brightness(1.07)", y: -2 } : undefined}
          whileTap={{ filter: "brightness(1.15)", scale: 0.985 }}
        >
          <LanyardCardDepth active={isAboutOpen} />

          <motion.span
            animate={{ rotateY: isAboutOpen ? 180 : 0 }}
            className="absolute inset-0 block"
            style={{ transformStyle: "preserve-3d" }}
            transition={{ type: "spring", stiffness: 170, damping: 22, mass: 0.85 }}
          >
            <CardFace side="front">
              <FrontPhotoFace />
            </CardFace>

            <CardFace side="back">
              <BackInfoFace />
            </CardFace>
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function LanyardHardware({
  active,
  settled,
}: {
  active: boolean;
  settled: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-[-5.45rem] z-40 h-[7.4rem] w-[12rem] -translate-x-1/2"
      style={{ transform: "translateZ(58px)" }}
    >
      <span className="absolute left-[18%] top-0 h-[6.25rem] w-[0.9rem] origin-bottom -rotate-[15deg] overflow-hidden rounded-full border border-cyan-muted/35 bg-surface-2 shadow-[0_0_18px_rgba(113,217,210,0.18)]">
        <span
          className={cn(
            "absolute inset-0 bg-[linear-gradient(180deg,rgba(113,217,210,0.5)_0_15%,rgba(255,255,255,0.12)_15%_25%,transparent_25%_42%,rgba(139,185,255,0.3)_42%_56%,transparent_56%_74%,rgba(113,217,210,0.38)_74%_100%)] bg-[length:100%_26px]",
            active && "animate-[strap-tension_3.8s_linear_infinite]",
          )}
        />
        <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/20" />
      </span>

      <span className="absolute right-[18%] top-0 h-[6.25rem] w-[0.9rem] origin-bottom rotate-[15deg] overflow-hidden rounded-full border border-cyan-muted/35 bg-surface-2 shadow-[0_0_18px_rgba(113,217,210,0.18)]">
        <span
          className={cn(
            "absolute inset-0 bg-[linear-gradient(180deg,rgba(113,217,210,0.5)_0_15%,rgba(255,255,255,0.12)_15%_25%,transparent_25%_42%,rgba(139,185,255,0.3)_42%_56%,transparent_56%_74%,rgba(113,217,210,0.38)_74%_100%)] bg-[length:100%_26px]",
            active && "animate-[strap-tension_3.8s_linear_infinite_reverse]",
          )}
        />
        <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/20" />
      </span>

      <span className="absolute left-1/2 top-[3.25rem] h-9 w-9 -translate-x-1/2 rounded-full border border-amber-soft/60 bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.28),rgba(28,34,42,0.94)_58%)] shadow-[var(--glow-amber)]">
        <span className="absolute inset-1 rounded-full border border-cyan-muted/30 bg-background/80 shadow-[inset_0_0_12px_rgba(0,0,0,0.55)]" />
        <span className="absolute inset-y-1 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-amber-soft/85 to-transparent animate-[hook-glint_3.2s_ease-in-out_infinite]" />
      </span>

      <span className="absolute left-1/2 top-[4.68rem] h-9 w-[7.7rem] -translate-x-1/2 rounded-[7px] border border-cyan-muted/45 bg-[linear-gradient(180deg,rgba(243,249,255,0.18),rgba(21,27,33,0.96)_36%,rgba(8,12,18,0.98))] shadow-[0_16px_32px_rgba(0,0,0,0.38),var(--glow-cyan)]">
        <span className="absolute inset-1 rounded-[5px] border border-foreground/10" />
        <span className="absolute inset-x-3 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-muted/85 to-transparent animate-[sweep-light_3.8s_linear_infinite]" />
        <span className="absolute left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-[2px] bg-green-soft shadow-[var(--glow-green)] animate-[node-pulse_2.6s_ease-in-out_infinite]" />
        <span className="absolute right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-[2px] bg-amber-soft shadow-[var(--glow-amber)] animate-[node-pulse_3s_ease-in-out_infinite]" />
      </span>

      <span className="absolute left-1/2 top-[5.68rem] h-[1.85rem] w-[9.3rem] -translate-x-1/2 rounded-t-[11px] border-x border-t border-cyan-muted/40 bg-[linear-gradient(180deg,rgba(113,217,210,0.24),rgba(10,16,22,0.95))] shadow-[0_-10px_24px_rgba(113,217,210,0.12)]">
        <span className="absolute left-1/2 top-1 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <span className="absolute left-4 top-[0.58rem] h-3.5 w-4 rounded-[3px] border border-amber-soft/35 bg-background/75 shadow-[var(--glow-amber)]" />
        <span className="absolute right-4 top-[0.58rem] h-3.5 w-4 rounded-[3px] border border-cyan-muted/35 bg-background/75 shadow-[var(--glow-cyan)]" />
        <span
          className={cn(
            "absolute left-1/2 top-[0.48rem] h-2 w-12 -translate-x-1/2 rounded-full bg-cyan-muted/20 blur-sm",
            settled && "animate-[node-pulse_3.6s_ease-in-out_infinite]",
          )}
        />
      </span>
    </span>
  );
}

function LanyardCardDepth({ active }: { active: boolean }) {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span
        className={cn(
          "absolute -inset-x-1 top-2 bottom-[-0.65rem] rounded-[20px] border border-cyan-muted/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(13,18,24,0.98)_38%,rgba(113,217,210,0.1))] shadow-[0_30px_70px_rgba(0,0,0,0.6)]",
          active && "border-green-soft/20 shadow-[0_30px_78px_rgba(141,225,156,0.16)]",
        )}
        style={{
          clipPath:
            "polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)",
          transform: "translateZ(-24px)",
        }}
      />
      <span
        className="absolute -right-1 top-10 bottom-7 w-2 rounded-r-[12px] border-r border-cyan-muted/20 bg-gradient-to-b from-white/15 via-cyan-muted/15 to-background/85"
        style={{ transform: "translateZ(-12px)" }}
      />
      <span
        className="absolute inset-x-5 -bottom-2 h-4 rounded-b-[14px] border-x border-b border-cyan-muted/20 bg-[linear-gradient(180deg,rgba(12,18,24,0.96),rgba(2,4,8,0.98))] shadow-[0_14px_26px_rgba(0,0,0,0.45)]"
        style={{ transform: "translateZ(-16px)" }}
      />
    </span>
  );
}

function CardFace({
  children,
  side,
}: {
  children: ReactNode;
  side: "front" | "back";
}) {
  const isFront = side === "front";

  return (
    <span
      className={cn(
        "absolute inset-0 block overflow-hidden rounded-[18px] border bg-surface-0 shadow-[0_28px_68px_rgba(0,0,0,0.52),var(--shadow-panel)]",
        isFront ? "border-cyan-muted/45" : "border-green-soft/45",
      )}
      style={{
        backfaceVisibility: "hidden",
        clipPath:
          "polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)",
        transform: isFront ? "rotateY(0deg)" : "rotateY(180deg)",
        transformStyle: "preserve-3d",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-1 rounded-[13px] border",
          isFront ? "border-cyan-muted/20" : "border-green-soft/20",
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-3 right-3 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
          isFront ? "via-cyan-muted/80" : "via-green-soft/80",
          "animate-[border-lap-x_3.4s_linear_infinite]",
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          "absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-transparent to-transparent",
          isFront ? "via-amber-soft/70" : "via-green-soft/70",
          "animate-[border-lap-x_4s_linear_infinite_reverse]",
        )}
      />
      <span className="absolute inset-0 micro-grid opacity-35" aria-hidden="true" />
      {children}
    </span>
  );
}

function FrontPhotoFace() {
  return (
    <span className="relative z-10 block h-full p-3 md:p-3.5">
      <span
        className="relative block h-full overflow-hidden rounded-[14px] border border-cyan-muted/30 bg-[radial-gradient(circle_at_50%_20%,rgba(113,217,210,0.12),transparent_8rem),linear-gradient(180deg,rgba(7,11,16,0.98),rgba(2,5,9,0.98))] shadow-[inset_0_0_34px_rgba(113,217,210,0.1)]"
        style={{
          clipPath:
            "polygon(12px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 12px)",
          transform: "translateZ(28px)",
        }}
      >
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.08),transparent_8rem)]" />
        <span className="relative z-10 grid h-full place-items-center overflow-hidden p-2">
          <img
            alt="Kiagus Arif Rahman"
            className="block h-full w-full object-contain object-center contrast-[1.04] saturate-[1.03]"
            draggable={false}
            src="/avatar/fotokiagus.jpeg"
          />
        </span>
        <span className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_24%,transparent_78%,rgba(0,0,0,0.16))]" />
        <span className="scanline-mask pointer-events-none absolute inset-0 z-20 opacity-[0.12] animate-[scanline-drift_7s_linear_infinite]" />
        <span className="pointer-events-none absolute inset-y-0 -left-1/3 z-20 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[holo-sweep_5.4s_ease-in-out_infinite]" />
        <CornerAccents tone="cyan" />
      </span>
    </span>
  );
}

function BackInfoFace() {
  return (
    <span className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] gap-3 p-4 text-left md:p-5">
      <span
        className="relative overflow-hidden rounded-[12px] border border-green-soft/25 bg-[linear-gradient(180deg,rgba(141,225,156,0.14),rgba(6,12,10,0.68))] p-3 text-center shadow-[inset_0_0_22px_rgba(141,225,156,0.08),0_12px_24px_rgba(0,0,0,0.24)]"
        style={{ transform: "translateZ(26px)" }}
      >
        <span className="absolute left-3 top-3">
          <StatusLED active size="sm" tone="green" />
        </span>
        <span className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.18em] text-green-soft">
          ABOUT KIAGUS
        </span>
        <span className="mt-2 block font-mono text-[1rem] font-black uppercase leading-5 text-foreground">
          COMPILED IDENTITY DATA
        </span>
      </span>

      <span
        className="relative grid min-h-0 content-center gap-3 overflow-hidden rounded-[14px] border border-green-soft/20 bg-[radial-gradient(circle_at_50%_0%,rgba(141,225,156,0.13),transparent_7rem),linear-gradient(180deg,rgba(141,225,156,0.1),rgba(7,12,11,0.76))] p-4 shadow-[inset_0_0_28px_rgba(141,225,156,0.07)]"
        style={{ transform: "translateZ(24px)" }}
      >
        <span className="absolute inset-0 micro-grid opacity-45" aria-hidden="true" />
        <span className="scanline-mask absolute inset-0 opacity-[0.18] animate-[scanline-drift_7s_linear_infinite]" aria-hidden="true" />
        <span className="relative z-10 block font-mono text-[0.9rem] font-black uppercase leading-5 text-foreground">
          Kiagus Arif Rahman
        </span>
        <span className="relative z-10 block font-mono text-[0.58rem] uppercase tracking-[0.15em] text-green-soft/80">
          Data Scientist / AI Product Builder
        </span>
        <p className="relative z-10 text-[0.82rem] leading-5 text-foreground/75">
          Kiagus Arif Rahman is a Data Science undergraduate focused on data
          workflows, AI product direction, and system-based problem solving.
        </p>
        <span className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-green-soft/55 to-transparent" />
      </span>

      <span className="grid grid-cols-2 gap-2">
        {aboutChips.map((chip) => (
          <span
            className="relative overflow-hidden rounded-[5px] border border-green-soft/20 bg-green-soft/10 px-2 py-2 text-center font-mono text-[0.54rem] font-bold uppercase leading-3 text-green-soft"
            key={chip}
          >
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-soft/65 to-transparent animate-[sweep-light_3.4s_linear_infinite]" />
            <span className="relative z-10">{chip}</span>
          </span>
        ))}
      </span>

      <CornerAccents tone="green" />
    </span>
  );
}

function CornerAccents({ tone }: { tone: "cyan" | "green" }) {
  const borderClass = tone === "cyan" ? "border-cyan-muted/70" : "border-green-soft/70";

  return (
    <span className="pointer-events-none absolute inset-3 z-30" aria-hidden="true">
      {[
        "left-0 top-0 border-l border-t",
        "right-0 top-0 border-r border-t",
        "bottom-0 left-0 border-b border-l",
        "bottom-0 right-0 border-b border-r",
      ].map((position) => (
        <span
          className={cn(
            "absolute h-5 w-5 animate-[corner-spark_4.2s_ease-in-out_infinite]",
            borderClass,
            position,
          )}
          key={`${tone}-${position}`}
        />
      ))}
    </span>
  );
}
