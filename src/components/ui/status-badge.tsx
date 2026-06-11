import { cn } from "@/lib/cn";

type StatusBadgeProps = {
  label: string;
  tone?: "cyan" | "amber" | "green" | "blue";
  className?: string;
};

const toneClasses = {
  cyan: "border-cyan-muted/30 bg-cyan-muted/10 text-cyan-muted",
  amber: "border-amber-soft/30 bg-amber-soft/10 text-amber-soft",
  green: "border-green-soft/30 bg-green-soft/10 text-green-soft",
  blue: "border-blue-soft/30 bg-blue-soft/10 text-blue-soft",
};

export function StatusBadge({
  label,
  tone = "cyan",
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-sm border px-2.5 py-1 font-mono text-xs uppercase",
        toneClasses[tone],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-[2px] bg-current animate-[node-pulse_2.8s_ease-in-out_infinite]" />
      {label}
    </span>
  );
}
