import { DataPacketLine } from "@/components/ui/data-packet-line";
import { MicroLabel } from "@/components/ui/micro-label";
import { StatusLED, type UiTone } from "@/components/ui/status-led";
import { cn } from "@/lib/cn";

type PixelSeparatorProps = {
  active?: boolean;
  className?: string;
  label?: string;
  tone?: UiTone;
};

export function PixelSeparator({
  active = true,
  className,
  label,
  tone = "cyan",
}: PixelSeparatorProps) {
  return (
    <div className={cn("relative grid min-h-5 grid-cols-[1fr_auto_1fr] items-center gap-3", className)}>
      <DataPacketLine active={active} tone={tone} />
      {label ? (
        <MicroLabel active={active} className="px-1.5 py-0.5" tone={tone}>
          {label}
        </MicroLabel>
      ) : (
        <StatusLED active={active} size="sm" tone={tone} />
      )}
      <DataPacketLine active={active} tone={tone} />
    </div>
  );
}
