"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type AvatarCoreProps = {
  isAboutOpen: boolean;
  onToggleAbout: () => void;
  className?: string;
};

const pixelNodes = [
  "left-[8%] top-[22%]",
  "left-[17%] top-[68%]",
  "right-[9%] top-[30%]",
  "right-[19%] bottom-[20%]",
  "left-[44%] -top-1",
  "right-[42%] -bottom-1",
];

export function AvatarCore({
  isAboutOpen,
  onToggleAbout,
  className,
}: AvatarCoreProps) {
  return (
    <motion.button
      type="button"
      aria-pressed={isAboutOpen}
      aria-label="Toggle About Kiagus panel"
      onClick={onToggleAbout}
      className={cn(
        "group relative mx-auto grid w-full max-w-[18rem] place-items-center outline-none md:max-w-[21rem]",
        className,
      )}
      whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="absolute -inset-8 rounded-full bg-cyan-muted/10 blur-3xl animate-[avatar-glow_5.8s_ease-in-out_infinite]" />
      <span className="absolute -inset-5 rounded-md border border-cyan-muted/20 bg-background/30 shadow-[var(--glow-cyan)]" />

      <span className="absolute -inset-3 rounded-md border border-dashed border-cyan-muted/25 animate-[node-pulse_5.2s_ease-in-out_infinite]" />

      {pixelNodes.map((position, index) => (
        <span
          key={position}
          className={cn(
            "absolute h-2 w-2 rounded-[2px] bg-cyan-muted shadow-[var(--glow-cyan)] animate-[node-pulse_3.2s_ease-in-out_infinite]",
            position,
          )}
          style={{ animationDelay: `${index * 0.32}s` }}
        />
      ))}

      <span className="relative z-10 w-full overflow-hidden rounded-md border border-cyan-muted/30 bg-surface-0 p-2 shadow-[var(--shadow-panel)]">
        <span className="relative block aspect-[3/4] overflow-hidden rounded-sm bg-background">
          <Image
            src="/avatar/fotokiagus.jpeg"
            alt="Kiagus Arif Rahman"
            fill
            priority
            sizes="(max-width: 768px) 70vw, 340px"
            className="object-cover object-[50%_22%] grayscale-[0.12] contrast-[1.12] saturate-[0.88] sepia-[0.08] animate-[pixel-shift_8s_steps(2,end)_infinite]"
          />

          <span
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(113,217,210,0.08)_1px,transparent_1px),linear-gradient(rgba(113,217,210,0.08)_1px,transparent_1px)] bg-[length:10px_10px] mix-blend-screen"
            aria-hidden="true"
          />
          <span
            className="scanline-mask absolute inset-0 opacity-45 animate-[scanline-drift_6s_linear_infinite]"
            aria-hidden="true"
          />
          <span
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/40 to-transparent"
            aria-hidden="true"
          />
          <span
            className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-cyan-muted/10 to-transparent animate-[sweep-light_4.5s_linear_infinite]"
            aria-hidden="true"
          />
        </span>
      </span>

      <span className="relative z-20 mt-4 inline-flex items-center gap-2 rounded-sm border border-cyan-muted/30 bg-background/75 px-4 py-2 font-mono text-xs font-semibold uppercase text-cyan-muted shadow-[var(--glow-cyan)]">
        <span className="h-1.5 w-1.5 rounded-[2px] bg-current animate-[node-pulse_2.6s_ease-in-out_infinite]" />
        {isAboutOpen ? "Hide About Kiagus" : "About Kiagus"}
      </span>
    </motion.button>
  );
}
