import { type UiTone } from "@/components/ui/status-led";
import { cn } from "@/lib/cn";

type DataPacketLineProps = {
  active?: boolean;
  className?: string;
  direction?: "horizontal" | "vertical";
  tone?: UiTone;
};

const toneClasses: Record<UiTone, string> = {
  cyan: "bg-cyan-muted shadow-[var(--glow-cyan)]",
  amber: "bg-amber-soft shadow-[var(--glow-amber)]",
  green: "bg-green-soft shadow-[var(--glow-green)]",
  blue: "bg-blue-soft shadow-[0_0_20px_rgba(139,185,255,0.34)]",
};

const lineClasses: Record<UiTone, string> = {
  cyan: "from-transparent via-cyan-muted/45 to-transparent",
  amber: "from-transparent via-amber-soft/45 to-transparent",
  green: "from-transparent via-green-soft/45 to-transparent",
  blue: "from-transparent via-blue-soft/45 to-transparent",
};

export function DataPacketLine({
  active = true,
  className,
  direction = "horizontal",
  tone = "cyan",
}: DataPacketLineProps) {
  const isVertical = direction === "vertical";

  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative block overflow-hidden",
        isVertical ? "h-full w-px" : "h-px w-full",
        className,
      )}
    >
      <span
        className={cn(
          "absolute inset-0",
          isVertical ? "bg-gradient-to-b" : "bg-gradient-to-r",
          lineClasses[tone],
        )}
      />
      <span
        className={cn(
          "absolute rounded-full",
          toneClasses[tone],
          isVertical
            ? "left-1/2 h-7 w-1 -translate-x-1/2 animate-[packet-run-y_3.4s_linear_infinite]"
            : "top-1/2 h-1 w-7 -translate-y-1/2 animate-[packet-run-x_3.4s_linear_infinite]",
          !active && "opacity-35 [animation-play-state:paused]",
        )}
      />
      <span
        className={cn(
          "absolute rounded-[2px]",
          toneClasses[tone],
          isVertical
            ? "left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2"
            : "left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2",
        )}
      />
      <span
        className={cn(
          "absolute rounded-[2px]",
          toneClasses[tone],
          isVertical
            ? "bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2"
            : "right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2",
        )}
      />
    </span>
  );
}
