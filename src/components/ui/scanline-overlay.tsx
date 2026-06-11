import { cn } from "@/lib/cn";

type ScanlineOverlayProps = {
  className?: string;
};

export function ScanlineOverlay({ className }: ScanlineOverlayProps) {
  return (
    <span
      className={cn(
        "scanline-mask absolute inset-0 opacity-28 animate-[scanline-drift_10s_linear_infinite]",
        className,
      )}
      aria-hidden="true"
    />
  );
}
