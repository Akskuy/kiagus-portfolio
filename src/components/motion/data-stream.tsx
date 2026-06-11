import { cn } from "@/lib/cn";

type DataStreamProps = {
  className?: string;
  direction?: "horizontal" | "vertical";
  tone?: "cyan" | "amber" | "green";
};

const toneClasses = {
  cyan: "from-transparent via-cyan-muted/50 to-transparent bg-cyan-muted",
  amber: "from-transparent via-amber-soft/50 to-transparent bg-amber-soft",
  green: "from-transparent via-green-soft/50 to-transparent bg-green-soft",
};

export function DataStream({
  className,
  direction = "horizontal",
  tone = "cyan",
}: DataStreamProps) {
  const isVertical = direction === "vertical";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        isVertical ? "h-full w-px" : "h-px w-full",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute inset-0",
          isVertical
            ? "bg-gradient-to-b"
            : "bg-gradient-to-r",
          toneClasses[tone],
        )}
      />
      <span
        className={cn(
          "absolute rounded-full blur-[1px] animate-[sweep-light_3.8s_linear_infinite]",
          isVertical
            ? "left-1/2 h-10 w-1 -translate-x-1/2"
            : "top-1/2 h-1 w-10 -translate-y-1/2",
          toneClasses[tone].split(" ").at(-1),
          isVertical && "rotate-90",
        )}
      />
    </div>
  );
}
