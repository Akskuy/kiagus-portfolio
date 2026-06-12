"use client";

import {
  BriefcaseBusiness,
  GraduationCap,
  MonitorCog,
  Trophy,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import {
  InteractiveRevealPanel,
  type InteractiveRevealVariant,
} from "@/components/ui/interactive-reveal-panel";

type IdentityStatCardProps = {
  className?: string;
  description: string;
  icon: "science" | "project" | "achievement" | "leadership" | "workflow" | "system";
  label: string;
  marker: string;
  title: string;
  variant?: InteractiveRevealVariant;
};

const icons: Record<IdentityStatCardProps["icon"], LucideIcon> = {
  science: GraduationCap,
  project: BriefcaseBusiness,
  achievement: Trophy,
  leadership: Users,
  workflow: Workflow,
  system: MonitorCog,
};

export function IdentityStatCard({
  className,
  description,
  icon,
  label,
  marker,
  title,
  variant = "access-scan",
}: IdentityStatCardProps) {
  const Icon = icons[icon];

  return (
    <InteractiveRevealPanel
      className={className}
      description={description}
      icon={<Icon className="h-5 w-5" strokeWidth={1.9} />}
      label={`${marker} / ${label}`}
      title={title}
      variant={variant}
    />
  );
}
