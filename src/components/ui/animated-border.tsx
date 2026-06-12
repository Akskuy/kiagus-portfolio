import { type UiTone } from "@/components/ui/status-led";
import { cn } from "@/lib/cn";

type AnimatedBorderProps = {
  active?: boolean;
  className?: string;
  cornerSize?: "sm" | "md" | "lg";
  tone?: UiTone;
};

const toneClasses: Record<UiTone, string> = {
  cyan: "border-cyan-muted/65 text-cyan-muted",
  amber: "border-amber-soft/65 text-amber-soft",
  green: "border-green-soft/65 text-green-soft",
  blue: "border-blue-soft/65 text-blue-soft",
};

const traceClasses: Record<UiTone, string> = {
  cyan: "from-transparent via-cyan-muted/80 to-transparent",
  amber: "from-transparent via-amber-soft/80 to-transparent",
  green: "from-transparent via-green-soft/80 to-transparent",
  blue: "from-transparent via-blue-soft/80 to-transparent",
};

const cornerSizeClasses = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export function AnimatedBorder({
  active = false,
  className,
  cornerSize = "md",
  tone = "cyan",
}: AnimatedBorderProps) {
  const corners = [
    "left-0 top-0 border-l border-t",
    "right-0 top-0 border-r border-t",
    "bottom-0 left-0 border-b border-l",
    "bottom-0 right-0 border-b border-r",
  ];

  return (
    <span
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 z-20", className)}
    >
      <span className="absolute inset-1 rounded-[3px] border border-foreground/10" />
      <span
        className={cn(
          "absolute left-2 right-2 top-0 h-px bg-gradient-to-r",
          traceClasses[tone],
          active
            ? "animate-[border-lap-x_2.8s_linear_infinite]"
            : "opacity-60 animate-[border-lap-x_5.8s_linear_infinite]",
        )}
      />
      <span
        className={cn(
          "absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r",
          traceClasses[tone],
          active
            ? "animate-[border-lap-x_3.1s_linear_infinite_reverse]"
            : "opacity-50 animate-[border-lap-x_6.2s_linear_infinite_reverse]",
        )}
      />
      <span
        className={cn(
          "absolute bottom-2 top-2 left-0 w-px bg-gradient-to-b",
          traceClasses[tone],
          active
            ? "animate-[border-lap-y_3s_linear_infinite]"
            : "opacity-50 animate-[border-lap-y_6s_linear_infinite]",
        )}
      />
      <span
        className={cn(
          "absolute bottom-2 top-2 right-0 w-px bg-gradient-to-b",
          traceClasses[tone],
          active
            ? "animate-[border-lap-y_2.7s_linear_infinite_reverse]"
            : "opacity-50 animate-[border-lap-y_5.7s_linear_infinite_reverse]",
        )}
      />

      <span className="absolute inset-2">
        {corners.map((position) => (
          <span
            key={position}
            className={cn(
              "absolute",
              cornerSizeClasses[cornerSize],
              toneClasses[tone],
              active && "animate-[corner-spark_3.2s_ease-in-out_infinite]",
              position,
            )}
          />
        ))}
      </span>
    </span>
  );
}
