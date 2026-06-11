import type { ReactNode } from "react";
import { SectionProgressRail } from "@/components/layout/section-progress-rail";
import { AmbientSystem } from "@/components/motion/ambient-system";
import { MotionProvider } from "@/components/motion/motion-provider";
import { ScrollProgressController } from "@/components/motion/scroll-progress-controller";

type GlobalShellProps = {
  children: ReactNode;
};

export function GlobalShell({ children }: GlobalShellProps) {
  return (
    <MotionProvider>
      <ScrollProgressController />
      <AmbientSystem />
      <SectionProgressRail />
      <div className="relative z-10 min-h-screen">{children}</div>
    </MotionProvider>
  );
}
