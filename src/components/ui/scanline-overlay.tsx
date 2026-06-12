import { cn } from "@/lib/cn";

type ScanlineOverlayProps = {
  active?: boolean;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
  sweep?: boolean;
};

const intensityClasses = {
  subtle: "opacity-16",
  medium: "opacity-28",
  strong: "opacity-42",
};

export function ScanlineOverlay({
  active = true,
  className,
  intensity = "medium",
  sweep = false,
}: ScanlineOverlayProps) {
  return (
    <span
      className={cn(
        "scanline-mask absolute inset-0",
        intensityClasses[intensity],
        active
          ? "animate-[scanline-drift_10s_linear_infinite]"
          : "[animation-play-state:paused]",
        sweep && "after:absolute after:inset-x-0 after:top-[-35%] after:h-1/3 after:bg-gradient-to-b after:from-transparent after:via-cyan-muted/18 after:to-transparent after:animate-[scanline-sweep_4.8s_ease-in-out_infinite]",
        className,
      )}
      aria-hidden="true"
    />
  );
}
