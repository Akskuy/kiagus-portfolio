import type { ReactNode } from "react";
import { StatusLED, type UiTone } from "@/components/ui/status-led";
import { cn } from "@/lib/cn";

type MicroLabelProps = {
  active?: boolean;
  children: ReactNode;
  className?: string;
  led?: boolean;
  tone?: UiTone;
};

const toneClasses: Record<UiTone, string> = {
  cyan: "border-cyan-muted/25 bg-cyan-muted/10 text-cyan-muted",
  amber: "border-amber-soft/25 bg-amber-soft/10 text-amber-soft",
  green: "border-green-soft/25 bg-green-soft/10 text-green-soft",
  blue: "border-blue-soft/25 bg-blue-soft/10 text-blue-soft",
};

export function MicroLabel({
  active = false,
  children,
  className,
  led = false,
  tone = "cyan",
}: MicroLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-sm border px-2 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em]",
        toneClasses[tone],
        active && "shadow-[0_0_18px_rgba(113,217,210,0.14)]",
        className,
      )}
    >
      {led ? <StatusLED active={active} size="sm" tone={tone} /> : null}
      {children}
    </span>
  );
}
