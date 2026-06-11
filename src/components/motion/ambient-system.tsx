import { cn } from "@/lib/cn";

type AmbientSystemProps = {
  className?: string;
};

const packetLines = [
  { top: "14%", left: "8%", width: "22rem", delay: "0s" },
  { top: "36%", left: "62%", width: "18rem", delay: "1.2s" },
  { top: "66%", left: "18%", width: "20rem", delay: "2.4s" },
  { top: "78%", left: "58%", width: "24rem", delay: "3.2s" },
];

export function AmbientSystem({ className }: AmbientSystemProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-70">
        <div className="pixel-grid reduce-heavy-motion absolute -inset-8 animate-[grid-drift_18s_linear_infinite]" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(63,185,170,0.16),transparent_28rem),radial-gradient(circle_at_78%_26%,rgba(139,185,255,0.12),transparent_28rem),linear-gradient(180deg,rgba(5,7,10,0.18),rgba(5,7,10,0.96))]" />

      <div className="scanline-mask absolute inset-0 opacity-25 animate-[scanline-drift_12s_linear_infinite]" />

      {packetLines.map((line) => (
        <div
          key={`${line.top}-${line.left}`}
          className="absolute h-px overflow-visible bg-gradient-to-r from-transparent via-cyan-muted/30 to-transparent"
          style={{
            top: line.top,
            left: line.left,
            width: line.width,
          }}
        >
          <span
            className="absolute top-1/2 h-1.5 w-8 -translate-y-1/2 rounded-full bg-cyan-muted/70 blur-[1px] animate-[sweep-light_4.8s_linear_infinite]"
            style={{ animationDelay: line.delay }}
          />
        </div>
      ))}

      <div className="absolute left-[12%] top-[18%] h-2 w-2 rounded-[2px] bg-green-soft/70 animate-[node-pulse_3.6s_ease-in-out_infinite]" />
      <div className="absolute right-[19%] top-[48%] h-2 w-2 rounded-[2px] bg-amber-soft/70 animate-[node-pulse_4.2s_ease-in-out_infinite]" />
      <div className="absolute bottom-[16%] left-[42%] h-2 w-2 rounded-[2px] bg-blue-soft/70 animate-[node-pulse_5s_ease-in-out_infinite]" />
    </div>
  );
}
