import { type UiTone } from "@/components/ui/status-led";
import { cn } from "@/lib/cn";

type ScannerBeamProps = {
  active?: boolean;
  className?: string;
  direction?: "horizontal" | "vertical";
  tone?: UiTone;
};

const toneClasses: Record<UiTone, string> = {
  cyan: "via-cyan-muted/45 shadow-[var(--glow-cyan)]",
  amber: "via-amber-soft/45 shadow-[var(--glow-amber)]",
  green: "via-green-soft/45 shadow-[var(--glow-green)]",
  blue: "via-blue-soft/45 shadow-[0_0_22px_rgba(139,185,255,0.3)]",
};

export function ScannerBeam({
  active = false,
  className,
  direction = "horizontal",
  tone = "cyan",
}: ScannerBeamProps) {
  const isVertical = direction === "vertical";

  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute z-30 bg-gradient-to-r from-transparent to-transparent opacity-0 blur-[0.5px]",
        toneClasses[tone],
        isVertical
          ? "bottom-0 top-0 left-0 w-16 animate-[scanner-beam-x_2.8s_ease-in-out_infinite]"
          : "left-0 right-0 top-0 h-16 animate-[scanner-beam-y_2.8s_ease-in-out_infinite]",
        active
          ? "opacity-100"
          : "opacity-0 group-hover/reveal:opacity-65 group-hover/button:opacity-65 group-hover/panel:opacity-65",
        className,
      )}
    />
  );
}
