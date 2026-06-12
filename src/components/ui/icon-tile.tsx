import type { ReactNode } from "react";
import { ScannerBeam } from "@/components/ui/scanner-beam";
import { StatusLED, type UiTone } from "@/components/ui/status-led";
import { cn } from "@/lib/cn";

type IconTileProps = {
  active?: boolean;
  children?: ReactNode;
  className?: string;
  label?: string;
  tone?: UiTone;
};

const toneClasses: Record<UiTone, string> = {
  cyan: "border-cyan-muted/40 bg-cyan-muted/10 text-cyan-muted shadow-[var(--glow-cyan)]",
  amber: "border-amber-soft/40 bg-amber-soft/10 text-amber-soft shadow-[var(--glow-amber)]",
  green: "border-green-soft/40 bg-green-soft/10 text-green-soft shadow-[var(--glow-green)]",
  blue: "border-blue-soft/40 bg-blue-soft/10 text-blue-soft shadow-[0_0_20px_rgba(139,185,255,0.22)]",
};

export function IconTile({
  active = false,
  children,
  className,
  label,
  tone = "cyan",
}: IconTileProps) {
  return (
    <span
      aria-label={label}
      className={cn(
        "group/button relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-sm border",
        toneClasses[tone],
        active && "animate-[micro-breathe_4.8s_ease-in-out_infinite]",
        className,
      )}
      role={label ? "img" : undefined}
    >
      <span className="absolute inset-0 micro-grid opacity-60" aria-hidden="true" />
      <ScannerBeam active={active} tone={tone} />
      <span className="relative z-10 grid place-items-center">{children}</span>
      <StatusLED
        active={active}
        className="absolute bottom-1 right-1"
        size="sm"
        tone={tone}
      />
    </span>
  );
}
