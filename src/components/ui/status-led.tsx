import { cn } from "@/lib/cn";

export type UiTone = "cyan" | "amber" | "green" | "blue";

type StatusLEDProps = {
  active?: boolean;
  className?: string;
  label?: string;
  pulse?: boolean;
  size?: "sm" | "md" | "lg";
  tone?: UiTone;
};

const toneClasses: Record<UiTone, string> = {
  cyan: "bg-cyan-muted shadow-[var(--glow-cyan)]",
  amber: "bg-amber-soft shadow-[var(--glow-amber)]",
  green: "bg-green-soft shadow-[var(--glow-green)]",
  blue: "bg-blue-soft shadow-[0_0_20px_rgba(139,185,255,0.34)]",
};

const ringClasses: Record<UiTone, string> = {
  cyan: "border-cyan-muted/40 bg-cyan-muted/10",
  amber: "border-amber-soft/40 bg-amber-soft/10",
  green: "border-green-soft/40 bg-green-soft/10",
  blue: "border-blue-soft/40 bg-blue-soft/10",
};

const sizeClasses = {
  sm: {
    ring: "h-3 w-3",
    core: "h-1.5 w-1.5",
  },
  md: {
    ring: "h-4 w-4",
    core: "h-2 w-2",
  },
  lg: {
    ring: "h-5 w-5",
    core: "h-2.5 w-2.5",
  },
};

export function StatusLED({
  active = false,
  className,
  label,
  pulse = true,
  size = "md",
  tone = "cyan",
}: StatusLEDProps) {
  return (
    <span
      aria-hidden={label ? undefined : "true"}
      aria-label={label}
      className={cn(
        "relative grid shrink-0 place-items-center rounded-[3px] border",
        sizeClasses[size].ring,
        active ? ringClasses[tone] : "border-foreground/15 bg-foreground/5",
        className,
      )}
      role={label ? "img" : undefined}
    >
      <span
        className={cn(
          "rounded-[2px]",
          sizeClasses[size].core,
          active ? toneClasses[tone] : "bg-foreground/25",
          pulse && active && "animate-[led-pulse_2.4s_ease-in-out_infinite]",
        )}
      />
      {active ? (
        <span
          className={cn(
            "absolute inset-[-4px] rounded-[4px] opacity-50 blur-[2px]",
            toneClasses[tone],
            pulse && "animate-[node-pulse_2.8s_ease-in-out_infinite]",
          )}
        />
      ) : null}
    </span>
  );
}
