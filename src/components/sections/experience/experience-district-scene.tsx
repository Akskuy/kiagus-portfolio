/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type ExperienceDistrictSceneProps = {
  progress: number;
};

type DistrictAccent = "teal" | "pink" | "amber" | "violet" | "green" | "cyan";

type District = {
  accent: DistrictAccent;
  buildingSign: string;
  category: string;
  description: string;
  evidenceAction: string;
  evidenceSlots: string[];
  evidenceText: string;
  id: string;
  impact: Array<{
    label: string;
    value: string;
  }>;
  position: {
    height: string;
    left: string;
    top: string;
    width: string;
  };
  responsibilities: string[];
  role: string;
  shape: "tower" | "institution" | "office" | "studio" | "store" | "community";
  subtitle: string;
  tags: string[];
  title: string;
};

const districts: District[] = [
  {
    accent: "teal",
    buildingSign: "AVALON AI",
    category: "Community & Non-Profit",
    description:
      "Leading the Data Science & AI division in a community of 200+ active members. Managed data, AI, software, and UI/UX teams to deliver high-quality solutions and meaningful impact.",
    evidenceAction: "VIEW FULL EVIDENCE",
    evidenceSlots: ["Report Slot", "Project Docs", "Activity Slot"],
    evidenceText: "Reports, project docs, and community activities",
    id: "01",
    impact: [
      { value: "200+", label: "Active Community Members" },
      { value: "Multiple", label: "Projects & Initiatives" },
      { value: "Improved", label: "Team Quality & Output" },
      { value: "Strong", label: "Collaboration Culture" },
    ],
    position: { left: "7.5%", top: "17.2%", width: "22%", height: "23.6%" },
    responsibilities: [
      "Defined technical direction and AI roadmap",
      "Managed Data, AI, Software, and UI/UX teams",
      "Set quality standards and solution architecture",
      "Mentored members from problem to solution",
      "Ensured accuracy, efficiency, and impact",
    ],
    role: "Head of Data Science & Artificial Intelligence",
    shape: "tower",
    subtitle: "Head of Data Science & Artificial Intelligence",
    tags: ["Leadership", "Team Management", "AI Direction", "Mentorship", "Quality Control", "Community Impact"],
    title: "AVALON AI COMMUNITY",
  },
  {
    accent: "pink",
    buildingSign: "STATISTICS ITS",
    category: "Academic & Department",
    description:
      "Worked on structured survey data and data packaging activities connected to academic or departmental data needs.",
    evidenceAction: "DOCUMENTATION SLOT",
    evidenceSlots: ["Survey Context", "Packaging Slot", "To Be Verified"],
    evidenceText: "Evidence Placeholder - Replace With Verified Proof",
    id: "02",
    impact: [
      { value: "Structured", label: "Survey Data Context" },
      { value: "Packaged", label: "Data Output Direction" },
      { value: "To Be Verified", label: "Outcome Evidence" },
      { value: "Placeholder", label: "Documentation Slot" },
    ],
    position: { left: "39%", top: "16.4%", width: "22%", height: "24.5%" },
    responsibilities: [
      "Worked with structured survey data context",
      "Supported academic data packaging activities",
      "Organized data needs into usable output direction",
      "Kept documentation status clear for verification",
    ],
    role: "Structured Survey & Data Packaging Project",
    shape: "institution",
    subtitle: "Structured Survey & Data Packaging Project",
    tags: ["Survey Data", "Data Packaging", "Academic Context", "Validation", "To Be Verified"],
    title: "DEPARTMENT OF STATISTICS ITS",
  },
  {
    accent: "amber",
    buildingSign: "SYSTEM OFFICE",
    category: "Project & Team",
    description:
      "Contributed to team-based web and data system projects with emphasis on analysis, workflow structure, and system direction.",
    evidenceAction: "CONTEXT SLOT",
    evidenceSlots: ["System Notes", "Workflow Slot", "Evidence Placeholder"],
    evidenceText: "Related Context - Evidence Placeholder",
    id: "03",
    impact: [
      { value: "Team-Based", label: "Project Context" },
      { value: "System", label: "Workflow Direction" },
      { value: "Analysis", label: "Requirement Thinking" },
      { value: "To Be Verified", label: "Delivery Evidence" },
    ],
    position: { left: "70.5%", top: "17.2%", width: "22%", height: "23.6%" },
    responsibilities: [
      "Analyzed web and data system workflows",
      "Supported system direction and requirements",
      "Connected data needs to web-based logic",
      "Aligned team context with implementation direction",
    ],
    role: "Data & System Analyst Multiple Web Systems",
    shape: "office",
    subtitle: "Data & System Analyst Multiple Web Systems",
    tags: ["System Analysis", "Web Workflow", "Team Project", "Data Logic", "Implementation Direction"],
    title: "INDEPENDENT TEAM PROJECT",
  },
  {
    accent: "violet",
    buildingSign: "CONTENT SYSTEMS",
    category: "Content & Systems",
    description:
      "Experience connected to content systems, editing workflows, and content performance organization.",
    evidenceAction: "DOCUMENTATION SLOT",
    evidenceSlots: ["Editing Flow", "Output Slot", "To Be Verified"],
    evidenceText: "Documentation Slot - Replace With Verified Proof",
    id: "04",
    impact: [
      { value: "Content", label: "Workflow Context" },
      { value: "Organized", label: "Output Direction" },
      { value: "Review", label: "Performance Observation" },
      { value: "Placeholder", label: "Evidence Slot" },
    ],
    position: { left: "7.5%", top: "40.6%", width: "22%", height: "22.3%" },
    responsibilities: [
      "Supported editing workflow organization",
      "Connected content output to system direction",
      "Observed content performance context",
      "Kept proof slots labeled as placeholders",
    ],
    role: "Dessydiniyanti & TernakUang",
    shape: "studio",
    subtitle: "Dessydiniyanti & TernakUang",
    tags: ["Content System", "Editing Workflow", "Output Organization", "Performance Context", "Evidence Placeholder"],
    title: "CONTENT SYSTEMS",
  },
  {
    accent: "green",
    buildingSign: "GTMURAH",
    category: "Operations & Service",
    description:
      "Experience connected to service, operations, and customer-facing workflow support.",
    evidenceAction: "CONTEXT SLOT",
    evidenceSlots: ["Service Flow", "Ops Slot", "To Be Verified"],
    evidenceText: "Related Context - Evidence Placeholder",
    id: "05",
    impact: [
      { value: "Service", label: "Workflow Support" },
      { value: "Operations", label: "Customer-Facing Context" },
      { value: "Structured", label: "Support Direction" },
      { value: "To Be Verified", label: "Outcome Proof" },
    ],
    position: { left: "39%", top: "41.3%", width: "22%", height: "21.6%" },
    responsibilities: [
      "Supported service and operations workflow",
      "Connected customer-facing needs to structured action",
      "Organized operational context for usable support",
      "Kept impact proof separate from placeholder context",
    ],
    role: "GTmurah",
    shape: "store",
    subtitle: "GTmurah",
    tags: ["Operations", "Service Workflow", "Customer Context", "Support Logic", "To Be Verified"],
    title: "CUSTOMER OPERATIONS",
  },
  {
    accent: "cyan",
    buildingSign: "BENEFITS",
    category: "Leadership & Initiative",
    description:
      "Experience connected to leadership, community coordination, communication, and initiative-building.",
    evidenceAction: "DOCUMENTATION SLOT",
    evidenceSlots: ["Initiative Slot", "Podcast Context", "To Be Verified"],
    evidenceText: "Documentation Slot - Replace With Verified Proof",
    id: "06",
    impact: [
      { value: "Leadership", label: "Community Context" },
      { value: "Coordination", label: "Initiative Direction" },
      { value: "Communication", label: "Podcast Context" },
      { value: "Placeholder", label: "Verified Proof Slot" },
    ],
    position: { left: "70.5%", top: "40.6%", width: "22%", height: "22.3%" },
    responsibilities: [
      "Supported leadership and community coordination",
      "Connected initiatives to communication flow",
      "Helped structure community-facing activity context",
      "Separated verified content from placeholder evidence",
    ],
    role: "BENEFITS & Podcast Panjul",
    shape: "community",
    subtitle: "BENEFITS & Podcast Panjul",
    tags: ["Leadership", "Community", "Communication", "Initiative", "Documentation Slot"],
    title: "LEADERSHIP & COMMUNITY",
  },
];

const accentStyles: Record<
  DistrictAccent,
  {
    bg: string;
    border: string;
    glow: string;
    mutedBg: string;
    text: string;
  }
> = {
  amber: {
    bg: "bg-amber-soft/14",
    border: "border-amber-soft/48",
    glow: "shadow-[0_0_28px_rgba(241,185,90,0.18)]",
    mutedBg: "bg-amber-soft/8",
    text: "text-amber-soft",
  },
  cyan: {
    bg: "bg-cyan-muted/14",
    border: "border-cyan-muted/48",
    glow: "shadow-[0_0_28px_rgba(113,217,210,0.18)]",
    mutedBg: "bg-cyan-muted/8",
    text: "text-cyan-muted",
  },
  green: {
    bg: "bg-green-soft/14",
    border: "border-green-soft/46",
    glow: "shadow-[0_0_28px_rgba(141,225,156,0.16)]",
    mutedBg: "bg-green-soft/8",
    text: "text-green-soft",
  },
  pink: {
    bg: "bg-pink-400/14",
    border: "border-pink-300/42",
    glow: "shadow-[0_0_28px_rgba(244,114,182,0.16)]",
    mutedBg: "bg-pink-300/8",
    text: "text-pink-200",
  },
  teal: {
    bg: "bg-teal-muted/16",
    border: "border-teal-muted/58",
    glow: "shadow-[0_0_34px_rgba(63,185,170,0.2)]",
    mutedBg: "bg-teal-muted/10",
    text: "text-teal-muted",
  },
  violet: {
    bg: "bg-violet-400/14",
    border: "border-violet-300/42",
    glow: "shadow-[0_0_28px_rgba(167,139,250,0.15)]",
    mutedBg: "bg-violet-300/8",
    text: "text-violet-200",
  },
};

const skylineBlocks = Array.from({ length: 26 }, (_, index) => ({
  height: 20 + ((index * 29) % 42),
  left: index * 4 - 3,
  width: 3.6 + ((index * 7) % 3),
}));

const midCityBlocks = Array.from({ length: 22 }, (_, index) => ({
  height: 18 + ((index * 19) % 30),
  left: index * 4.9 - 4,
  width: 4.4 + ((index * 5) % 4),
}));

const cityLights = Array.from({ length: 70 }, (_, index) => index);
const windowCells = Array.from({ length: 24 }, (_, index) => index);
const roadLines = Array.from({ length: 7 }, (_, index) => index);
const transitionWindows = Array.from({ length: 22 }, (_, index) => index);

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function smoothStep(value: number) {
  const clamped = clamp01(value);

  return clamped * clamped * (3 - 2 * clamped);
}

function segment(progress: number, start: number, end: number) {
  return smoothStep((clamp01(progress) - start) / (end - start));
}

export function ExperienceDistrictScene({ progress }: ExperienceDistrictSceneProps) {
  const stage = clamp01(progress);
  const mapOpen = segment(stage, 0.3, 0.56);
  const buildingsForm = segment(stage, 0.52, 0.76);
  const settle = segment(stage, 0.72, 0.94);
  const sceneOpacity = segment(stage, 0.2, 0.5);
  const [activeDistrictId, setActiveDistrictId] = useState("01");
  const activeDistrict = districts.find((district) => district.id === activeDistrictId) ?? districts[0]!;

  const handleSelectDistrict = useCallback((id: string) => {
    setActiveDistrictId(id);
  }, []);

  if (stage <= 0.02) {
    return null;
  }

  return (
    <section
      aria-hidden={stage < 0.72}
      aria-label="Experience District"
      className="absolute inset-0 z-[34] overflow-hidden bg-background"
      style={{
        opacity: sceneOpacity,
        pointerEvents: stage > 0.72 ? "auto" : "none",
        transform: `translate3d(0, ${(1 - mapOpen) * 10}px, 0) scale(${0.985 + mapOpen * 0.015})`,
      }}
    >
      <NightDistrictAtmosphere strength={mapOpen} />
      <ArchivePageToCityTransition progress={stage} />

      <div className="relative z-10 mx-auto h-full w-full max-w-[var(--shell-max)] px-[clamp(0.45rem,1.35vw,1rem)] py-[clamp(0.35rem,0.9vw,0.65rem)]">
        <ExperienceTitleRail strength={settle} />
        <DistrictMapStage
          activeDistrictId={activeDistrict.id}
          buildingsForm={buildingsForm}
          onSelect={handleSelectDistrict}
        />
        <SelectedDistrictPanel district={activeDistrict} strength={settle} />
        <DistrictNavigationStrip
          activeDistrictId={activeDistrict.id}
          onSelect={handleSelectDistrict}
          strength={settle}
        />
      </div>
    </section>
  );
}

function NightDistrictAtmosphere({ strength }: { strength: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_46%_17%,rgba(113,217,210,0.12),transparent_25rem),radial-gradient(circle_at_80%_42%,rgba(139,185,255,0.12),transparent_23rem),linear-gradient(180deg,rgba(3,11,22,0.98),rgba(2,6,13,0.98)_54%,rgba(1,4,8,1))]"
        style={{ opacity: 0.72 + strength * 0.28 }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(113,217,210,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(113,217,210,0.035)_1px,transparent_1px)] bg-[length:30px_30px] opacity-20" />

      <div className="absolute inset-x-0 top-0 h-[42%]">
        {cityLights.map((light) => (
          <span
            className="absolute h-1 w-1 rounded-[1px] bg-cyan-muted/72 animate-[screen-flicker_7s_steps(4,end)_infinite]"
            key={light}
            style={{
              animationDelay: `${light * 0.13}s`,
              left: `${2 + ((light * 23) % 96)}%`,
              opacity: strength * (0.25 + (light % 5) * 0.09),
              top: `${7 + ((light * 31) % 62)}%`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-x-0 bottom-[34%] h-[46%]"
        style={{
          opacity: strength * 0.74,
          transform: `translateY(${(1 - strength) * 22}px)`,
        }}
      >
        {skylineBlocks.map((block, index) => (
          <SkylineBlock
            block={block}
            index={index}
            key={`far-${index}`}
            layer="far"
          />
        ))}
      </div>

      <div
        className="absolute inset-x-0 bottom-[30%] h-[34%]"
        style={{
          opacity: strength * 0.9,
          transform: `translateY(${(1 - strength) * 15}px)`,
        }}
      >
        {midCityBlocks.map((block, index) => (
          <SkylineBlock
            block={block}
            index={index}
            key={`mid-${index}`}
            layer="mid"
          />
        ))}
      </div>

      <div
        className="absolute inset-x-[2%] bottom-[31.5%] h-[1px] bg-gradient-to-r from-transparent via-cyan-muted/24 to-transparent"
        style={{ opacity: strength }}
      />
      <div
        className="absolute inset-x-0 bottom-[25.2%] h-[8%] bg-[linear-gradient(180deg,rgba(27,68,84,0.2),rgba(3,10,16,0.58))]"
        style={{ opacity: strength }}
      >
        <span className="absolute inset-x-[5%] top-[32%] h-px bg-gradient-to-r from-transparent via-cyan-muted/35 to-transparent animate-[sweep-light_8s_linear_infinite]" />
        <span className="absolute inset-x-[12%] top-[62%] h-px bg-gradient-to-r from-transparent via-amber-soft/25 to-transparent" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,transparent_30rem,rgba(0,0,0,0.62))]" />
    </div>
  );
}

function SkylineBlock({
  block,
  index,
  layer,
}: {
  block: { height: number; left: number; width: number };
  index: number;
  layer: "far" | "mid";
}) {
  const windows = layer === "far" ? windowCells.slice(0, 10) : windowCells.slice(0, 16);

  return (
    <span
      className={cn(
        "absolute bottom-0 overflow-hidden rounded-t-[3px] border-t",
        layer === "far"
          ? "border-blue-soft/10 bg-[linear-gradient(180deg,rgba(15,37,55,0.8),rgba(5,12,20,0.92))]"
          : "border-cyan-muted/12 bg-[linear-gradient(180deg,rgba(12,31,42,0.86),rgba(3,9,15,0.96))] shadow-[0_0_24px_rgba(0,0,0,0.35)]",
      )}
      style={{
        height: `${block.height}%`,
        left: `${block.left}%`,
        width: `${block.width}%`,
      }}
    >
      <span className="absolute inset-1 grid grid-cols-3 content-start gap-1 pt-2">
        {windows.map((windowCell) => (
          <span
            className={cn(
              "h-1 rounded-[1px] animate-[screen-flicker_6s_steps(4,end)_infinite]",
              (windowCell + index) % 6 === 0 ? "bg-amber-soft/64" : "bg-cyan-muted/22",
            )}
            key={windowCell}
            style={{ animationDelay: `${(windowCell + index) * 0.12}s` }}
          />
        ))}
      </span>
    </span>
  );
}

function ArchivePageToCityTransition({ progress }: { progress: number }) {
  const unlock = segment(progress, 0.12, 0.34);
  const open = segment(progress, 0.32, 0.58);
  const dissolve = segment(progress, 0.66, 0.88);
  const opacity = unlock * (1 - dissolve);

  if (opacity <= 0.01) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[18%] right-[10%] top-[18%] z-[8] h-[39%]"
      style={{
        opacity,
        transform: `perspective(1200px) rotateX(${16 - open * 10}deg) translateY(${(1 - open) * 18}px) scale(${0.92 + open * 0.08})`,
      }}
    >
      <div className="absolute inset-x-[5%] top-0 h-full rounded-[10px] border border-amber-soft/18 bg-[linear-gradient(180deg,rgba(38,25,15,0.86),rgba(7,9,13,0.94))] shadow-[0_28px_90px_rgba(0,0,0,0.62),inset_0_0_34px_rgba(241,185,90,0.08)]" />
      <div
        className="absolute left-[4%] top-[5%] h-[90%] w-[45%] origin-right rounded-l-[9px] border border-amber-soft/22 bg-[linear-gradient(135deg,rgba(54,35,19,0.9),rgba(12,19,24,0.94))] shadow-[inset_0_0_36px_rgba(241,185,90,0.08)]"
        style={{ transform: `rotateY(${-open * 54}deg) skewY(${-open * 1.2}deg)` }}
      >
        <TransitionMapLines open={open} side="left" />
      </div>
      <div
        className="absolute right-[4%] top-[5%] h-[90%] w-[45%] origin-left rounded-r-[9px] border border-teal-muted/22 bg-[linear-gradient(225deg,rgba(38,26,17,0.9),rgba(5,22,34,0.96))] shadow-[inset_0_0_38px_rgba(63,185,170,0.09)]"
        style={{ transform: `rotateY(${open * 54}deg) skewY(${open * 1.2}deg)` }}
      >
        <TransitionMapLines open={open} side="right" />
      </div>
      <span className="absolute left-1/2 top-[4%] h-[92%] w-px -translate-x-1/2 bg-gradient-to-b from-amber-soft/42 via-teal-muted/28 to-transparent" />
      <span
        className="absolute inset-x-[10%] bottom-[9%] h-[38%] overflow-hidden rounded-t-[7px] border-t border-cyan-muted/16"
        style={{ opacity: open }}
      >
        {transitionWindows.map((windowCell) => (
          <span
            className="absolute bottom-0 w-[3.5%] rounded-t-[2px] bg-[linear-gradient(180deg,rgba(33,90,105,0.48),rgba(5,14,22,0.92))]"
            key={windowCell}
            style={{
              height: `${26 + ((windowCell * 19) % 68)}%`,
              left: `${windowCell * 4.5}%`,
            }}
          >
            <span className="absolute inset-x-1 top-2 grid grid-cols-2 gap-1">
              <span className="h-1 rounded-[1px] bg-amber-soft/60" />
              <span className="h-1 rounded-[1px] bg-cyan-muted/34" />
            </span>
          </span>
        ))}
      </span>
    </div>
  );
}

function TransitionMapLines({ open, side }: { open: number; side: "left" | "right" }) {
  return (
    <span className="absolute inset-0 overflow-hidden rounded-[inherit]">
      <span className="absolute inset-0 micro-grid opacity-25" />
      {roadLines.map((line) => (
        <span
          className={cn(
            "absolute h-px origin-left bg-gradient-to-r from-transparent via-teal-muted/62 to-transparent",
            side === "right" && "origin-right",
          )}
          key={line}
          style={{
            left: side === "left" ? "10%" : "auto",
            right: side === "right" ? "10%" : "auto",
            top: `${16 + line * 10}%`,
            transform: `rotate(${(line - 3) * (side === "left" ? 4 : -4)}deg) scaleX(${0.42 + open * 0.68})`,
            width: `${46 + line * 6}%`,
          }}
        />
      ))}
      <span
        className="absolute left-[18%] top-[36%] h-4 w-4 rounded-[3px] border border-teal-muted/50 bg-teal-muted/14 shadow-[var(--glow-cyan)]"
        style={{ opacity: open }}
      />
      <span
        className="absolute right-[20%] top-[58%] h-3 w-3 rounded-[2px] border border-amber-soft/46 bg-amber-soft/16 shadow-[var(--glow-amber)]"
        style={{ opacity: open }}
      />
    </span>
  );
}

function ExperienceTitleRail({ strength }: { strength: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-x-[9%] top-[1.1%] z-30 flex h-[9.5%] items-center justify-center overflow-hidden rounded-[7px] border border-cyan-muted/16 bg-[linear-gradient(90deg,rgba(1,6,12,0.42),rgba(7,22,31,0.84)_38%,rgba(9,31,38,0.9)_50%,rgba(7,22,31,0.84)_62%,rgba(1,6,12,0.42))] shadow-[0_0_34px_rgba(63,185,170,0.1),inset_0_0_24px_rgba(113,217,210,0.05)]"
      style={{
        opacity: strength,
        transform: `translateY(${(1 - strength) * -14}px) scale(${0.97 + strength * 0.03})`,
      }}
    >
      <span className="absolute inset-1 rounded-[5px] border border-foreground/6" />
      <span className="absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-cyan-muted/60 to-transparent" />
      <span className="absolute inset-x-[18%] bottom-0 h-px bg-gradient-to-r from-transparent via-amber-soft/30 to-transparent" />
      <span className="absolute left-[8%] top-1/2 h-1.5 w-16 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-muted/30 to-transparent" />
      <span className="absolute right-[8%] top-1/2 h-1.5 w-16 -translate-y-1/2 bg-gradient-to-r from-transparent via-amber-soft/24 to-transparent" />
      <span className="relative z-10 text-center font-mono text-[clamp(1.05rem,2.1vw,1.9rem)] font-black uppercase leading-none tracking-[0.14em] text-foreground drop-shadow-[0_0_18px_rgba(113,217,210,0.2)]">
        EXPERIENCE DISTRICT
      </span>
    </div>
  );
}

function DistrictMapStage({
  activeDistrictId,
  buildingsForm,
  onSelect,
}: {
  activeDistrictId: string;
  buildingsForm: number;
  onSelect: (id: string) => void;
}) {
  return (
    <div
      className="absolute inset-x-0 top-0 z-20 h-[64%]"
      style={{
        opacity: buildingsForm,
        transform: `translateY(${(1 - buildingsForm) * 16}px) scale(${0.98 + buildingsForm * 0.02})`,
      }}
    >
      <span className="pointer-events-none absolute inset-x-[3.2%] bottom-[1%] top-[12%] rounded-[14px] border border-cyan-muted/8 bg-[radial-gradient(circle_at_50%_24%,rgba(63,185,170,0.08),transparent_22rem),linear-gradient(180deg,rgba(4,13,20,0.32),rgba(1,5,9,0.74))] shadow-[inset_0_0_60px_rgba(0,0,0,0.42)]" />
      <RoadGrid />
      {districts.map((district) => (
        <DistrictBuildingButton
          active={activeDistrictId === district.id}
          district={district}
          key={district.id}
          onSelect={() => onSelect(district.id)}
        />
      ))}
    </div>
  );
}

function RoadGrid() {
  return (
    <div className="pointer-events-none absolute inset-x-[5.2%] bottom-[0.8%] top-[13.2%]" aria-hidden="true">
      <span className="absolute left-[4%] right-[4%] top-[49%] h-8 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,transparent,rgba(113,217,210,0.07)_20%,rgba(241,185,90,0.08)_50%,rgba(113,217,210,0.07)_80%,transparent)] blur-[1px]" />
      {[0, 1, 2].map((lane) => (
        <span
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-muted/22 to-transparent"
          key={`horizontal-lane-${lane}`}
          style={{ top: `${26 + lane * 24}%`, left: "3%", right: "3%" }}
        />
      ))}
      {[0, 1, 2, 3].map((lane) => (
        <span
          className="absolute bottom-[5%] top-[12%] w-px bg-gradient-to-b from-transparent via-cyan-muted/18 to-transparent"
          key={`vertical-lane-${lane}`}
          style={{ left: `${15 + lane * 23}%` }}
        />
      ))}
      {roadLines.map((line) => (
        <span
          className="absolute h-px bg-gradient-to-r from-transparent via-teal-muted/22 to-transparent"
          key={line}
          style={{
            left: `${4 + line * 3}%`,
            top: `${20 + line * 8}%`,
            transform: `rotate(${line % 2 === 0 ? -3 : 4}deg)`,
            width: `${82 - line * 4}%`,
          }}
        />
      ))}
      {[0, 1, 2, 3, 4, 5].map((node) => (
        <span
          className="absolute h-2 w-2 rounded-[2px] border border-amber-soft/28 bg-amber-soft/10 shadow-[0_0_12px_rgba(241,185,90,0.18)]"
          key={`road-node-${node}`}
          style={{ left: `${12 + node * 15}%`, top: `${35 + (node % 2) * 26}%` }}
        />
      ))}
      <span className="absolute inset-x-[8%] bottom-[8%] h-3 rounded-full bg-cyan-muted/5 blur-[2px]" />
    </div>
  );
}

function DistrictBuildingButton({
  active,
  district,
  onSelect,
}: {
  active: boolean;
  district: District;
  onSelect: () => void;
}) {
  const accent = accentStyles[district.accent];

  return (
    <button
      aria-label={`Select ${district.title}`}
      aria-pressed={active}
      className="group/district absolute isolate cursor-pointer text-left outline-none transition-[filter,transform] duration-300 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-cyan-muted/70"
      onClick={onSelect}
      style={district.position as CSSProperties}
      type="button"
    >
      <span
        className={cn(
          "absolute inset-x-[7%] bottom-[-2%] z-0 h-[13%] rounded-[50%] bg-black/64 blur-lg transition-opacity duration-300",
          active ? "opacity-95" : "opacity-60",
        )}
      />
      <span
        className={cn(
          "absolute left-1/2 top-0 z-30 grid w-[92%] -translate-x-1/2 grid-cols-[2.4rem_minmax(0,1fr)] items-center gap-2 overflow-hidden rounded-[6px] border px-2.5 py-2 shadow-[0_14px_34px_rgba(0,0,0,0.5),inset_0_0_18px_rgba(113,217,210,0.04)] transition-[border-color,filter,box-shadow,transform,background-color] duration-300 group-hover/district:-translate-y-1",
          active
            ? "border-teal-muted/70 bg-[linear-gradient(180deg,rgba(12,52,57,0.95),rgba(2,13,18,0.96))] shadow-[0_0_34px_rgba(63,185,170,0.28),0_14px_34px_rgba(0,0,0,0.55),inset_0_0_24px_rgba(113,217,210,0.1)]"
            : "border-cyan-muted/14 bg-[linear-gradient(180deg,rgba(3,12,18,0.82),rgba(1,6,11,0.94))] group-hover/district:border-cyan-muted/38",
        )}
        style={{
          clipPath:
            "polygon(12px 0, calc(100% - 14px) 0, 100% 12px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 12px 100%, 0 calc(100% - 12px), 0 10px)",
        }}
      >
        <span className="absolute inset-1 rounded-[4px] border border-foreground/8" />
        <span className="absolute inset-0 micro-grid opacity-20" />
        <span
          className={cn(
            "relative z-10 grid h-8 place-items-center rounded-[3px] border font-mono text-[0.72rem] font-black leading-none",
            active ? "border-teal-muted/64 bg-teal-muted/18 text-teal-muted shadow-[var(--glow-cyan)]" : cn(accent.mutedBg, "border-cyan-muted/16 text-cyan-muted/62"),
          )}
        >
          {district.id}
        </span>
        <span className="relative z-10 block min-w-0">
          <span
            className={cn(
              "line-clamp-2 block font-mono text-[clamp(0.52rem,0.76vw,0.7rem)] font-black uppercase leading-[1.12] tracking-[0.08em]",
              active ? "text-foreground" : "text-cyan-muted/78",
            )}
          >
            {district.title}
          </span>
          <span className="mt-1 line-clamp-2 block text-[clamp(0.4rem,0.58vw,0.52rem)] font-semibold leading-[1.2] text-foreground/58">
            {district.subtitle}
          </span>
        </span>
      </span>

      <span
        className={cn(
          "absolute left-1/2 top-[24%] z-20 h-[18%] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-muted/34 to-transparent transition-opacity duration-300",
          active ? "opacity-100" : "opacity-45",
        )}
      />

      <DistrictBuilding active={active} district={district} />
    </button>
  );
}

function DistrictBuilding({ active, district }: { active: boolean; district: District }) {
  const shapeClass = {
    community: "h-[66%] w-[86%] rounded-t-[10px]",
    institution: "h-[66%] w-[90%] rounded-t-[8px]",
    office: "h-[69%] w-[82%] rounded-t-[6px]",
    store: "h-[63%] w-[88%] rounded-t-[5px]",
    studio: "h-[64%] w-[84%] rounded-t-[12px]",
    tower: "h-[72%] w-[74%] rounded-t-[9px]",
  }[district.shape];

  return (
    <span
      className={cn(
        "absolute bottom-0 left-1/2 z-10 block -translate-x-1/2 overflow-hidden border bg-[linear-gradient(180deg,rgba(15,44,55,0.88),rgba(3,10,16,0.98))] shadow-[0_20px_48px_rgba(0,0,0,0.56),inset_0_0_24px_rgba(113,217,210,0.035)] transition-[filter,box-shadow,transform] duration-300 group-hover/district:-translate-y-1 group-hover/district:brightness-115",
        active
          ? "border-teal-muted/72 shadow-[0_0_40px_rgba(63,185,170,0.3),0_20px_50px_rgba(0,0,0,0.62),inset_0_0_28px_rgba(113,217,210,0.09)]"
          : "border-cyan-muted/13 opacity-[0.92]",
        shapeClass,
      )}
    >
      <BuildingRoof active={active} shape={district.shape} />
      {district.shape === "institution" ? <InstitutionFacade active={active} /> : null}
      {district.shape !== "institution" ? <ModernFacade active={active} district={district} /> : null}
      <span
        className={cn(
          "absolute left-1/2 top-[15%] flex min-h-7 w-[80%] -translate-x-1/2 items-center justify-center rounded-[3px] border px-2 text-center font-mono text-[clamp(0.45rem,0.66vw,0.6rem)] font-black uppercase tracking-[0.08em] transition-[filter,box-shadow] duration-300",
          active
            ? "border-teal-muted/58 bg-teal-muted/12 text-teal-muted shadow-[0_0_18px_rgba(63,185,170,0.22)]"
            : "border-cyan-muted/13 bg-black/28 text-cyan-muted/54",
        )}
      >
        {district.buildingSign}
      </span>
      {active ? (
        <span className="absolute right-[16%] top-[46%] h-8 w-7 rounded-[2px] border border-amber-soft/64 bg-amber-soft/22 shadow-[0_0_22px_rgba(241,185,90,0.34)] animate-[node-pulse_3.4s_ease-in-out_infinite]" />
      ) : null}
      <span className="absolute inset-x-0 bottom-0 h-[14%] border-t border-cyan-muted/10 bg-black/26" />
    </span>
  );
}

function BuildingRoof({ active, shape }: { active: boolean; shape: District["shape"] }) {
  const glow = active ? "border-teal-muted/54 bg-teal-muted/14 shadow-[0_0_18px_rgba(63,185,170,0.2)]" : "border-cyan-muted/14 bg-cyan-muted/7";

  if (shape === "tower") {
    return (
      <span className="absolute left-1/2 top-0 z-20 h-[20%] w-[58%] -translate-x-1/2 -translate-y-[42%]">
        <span className={cn("absolute bottom-0 left-1/2 h-[72%] w-[62%] -translate-x-1/2 rounded-t-[6px] border", glow)} />
        <span className="absolute left-1/2 top-0 h-[52%] w-px -translate-x-1/2 bg-gradient-to-b from-amber-soft/80 to-cyan-muted/30" />
      </span>
    );
  }

  if (shape === "institution") {
    return (
      <span className={cn("absolute left-1/2 top-0 z-20 h-[13%] w-[70%] -translate-x-1/2 -translate-y-[58%] rounded-t-[7px] border", glow)} />
    );
  }

  if (shape === "community") {
    return (
      <span className="absolute inset-x-[13%] top-0 z-20 flex -translate-y-[62%] justify-between">
        <span className={cn("h-8 w-[36%] rounded-t-[5px] border", glow)} />
        <span className={cn("h-6 w-[28%] rounded-t-[5px] border", glow)} />
      </span>
    );
  }

  return <span className={cn("absolute left-1/2 top-0 z-20 h-[10%] w-[56%] -translate-x-1/2 -translate-y-[48%] rounded-t-[5px] border", glow)} />;
}

function ModernFacade({ active, district }: { active: boolean; district: District }) {
  return (
    <span className="absolute inset-0">
      <span className="absolute inset-x-3 bottom-[15%] top-[36%] grid grid-cols-4 content-start gap-1.5">
        {windowCells.slice(0, 20).map((windowCell) => (
          <span
            className={cn(
              "h-2 rounded-[1px] border border-cyan-muted/7 animate-[screen-flicker_6.5s_steps(4,end)_infinite]",
              active && windowCell % 4 === 0
                ? "bg-teal-muted/48 shadow-[0_0_8px_rgba(63,185,170,0.26)]"
                : windowCell % 7 === 0
                  ? "bg-amber-soft/44 shadow-[0_0_8px_rgba(241,185,90,0.18)]"
                  : "bg-cyan-muted/13",
            )}
            key={`${district.id}-${windowCell}`}
            style={{ animationDelay: `${windowCell * 0.1}s` }}
          />
        ))}
      </span>
      <span className="absolute left-[12%] bottom-[4%] h-[22%] w-[24%] border border-cyan-muted/14 bg-black/26" />
      <span className="absolute right-[14%] bottom-[4%] h-[20%] w-[26%] border border-cyan-muted/12 bg-black/24" />
    </span>
  );
}

function InstitutionFacade({ active }: { active: boolean }) {
  return (
    <span className="absolute inset-0">
      <span className="absolute left-1/2 top-0 h-[18%] w-[62%] -translate-x-1/2 border-x border-t border-amber-soft/24 bg-[linear-gradient(180deg,rgba(241,185,90,0.16),rgba(0,0,0,0.18))]" />
      <span className="absolute left-[9%] right-[9%] top-[34%] grid grid-cols-5 gap-2">
        {[0, 1, 2, 3, 4].map((column) => (
          <span
            className="h-16 rounded-t-full border border-amber-soft/22 bg-black/24"
            key={column}
          >
            <span
              className={cn(
                "mx-auto mt-3 block h-8 w-[42%] rounded-t-full animate-[screen-flicker_5.8s_steps(4,end)_infinite]",
                active && column === 2 ? "bg-teal-muted/48 shadow-[0_0_10px_rgba(63,185,170,0.26)]" : "bg-amber-soft/28",
              )}
            />
          </span>
        ))}
      </span>
      <span className="absolute left-1/2 top-[42%] grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-amber-soft/36 bg-amber-soft/10 font-mono text-[0.58rem] font-black text-amber-soft shadow-[var(--glow-amber)]">
        ITS
      </span>
      <span className="absolute inset-x-[18%] bottom-0 h-[18%] border border-amber-soft/18 bg-black/28" />
    </span>
  );
}

function SelectedDistrictPanel({ district, strength }: { district: District; strength: number }) {
  return (
    <article
      className="absolute inset-x-[1.1%] top-[63.4%] z-50 h-[25.7%] overflow-hidden rounded-[8px] border border-cyan-muted/16 bg-[linear-gradient(180deg,rgba(3,12,18,0.92),rgba(1,6,11,0.98))] shadow-[0_24px_74px_rgba(0,0,0,0.64),inset_0_0_30px_rgba(113,217,210,0.045)]"
      style={{
        opacity: strength,
        transform: `translateY(${(1 - strength) * 24}px)`,
      }}
    >
      <span className="absolute inset-1 rounded-[5px] border border-foreground/6" />
      <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-muted/52 to-transparent" />
      <span className="absolute inset-0 micro-grid opacity-10" />

      <div className="relative z-10 grid h-full grid-cols-[1.34fr_1.02fr_0.98fr_1.06fr] gap-[clamp(0.55rem,1vw,0.9rem)] px-[clamp(0.7rem,1.45vw,1.25rem)] py-[clamp(0.58rem,1vw,0.82rem)]">
        <SelectedDistrictIdentity district={district} />
        <PanelColumn className="border-l border-cyan-muted/10 pl-[clamp(0.65rem,1.1vw,0.95rem)]" title="Key Responsibilities">
          <ul className="mt-2 grid gap-1.5">
            {district.responsibilities.slice(0, 5).map((responsibility) => (
              <li
                className="flex gap-2 text-[clamp(0.45rem,0.66vw,0.6rem)] font-semibold leading-[1.32] text-foreground/68"
                key={responsibility}
              >
                <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-[1px] bg-cyan-muted/76" />
                <span className="line-clamp-1">{responsibility}</span>
              </li>
            ))}
          </ul>
        </PanelColumn>
        <PanelColumn className="border-l border-cyan-muted/10 pl-[clamp(0.65rem,1.1vw,0.95rem)]" title="Impact & Outcome">
          <div className="mt-2 grid gap-1.5">
            {district.impact.map((item) => (
              <div
                className="grid grid-cols-[1.45rem_minmax(0,1fr)] items-center gap-2 rounded-[4px] border border-cyan-muted/9 bg-cyan-muted/4 px-2 py-1"
                key={`${district.id}-${item.value}-${item.label}`}
              >
                <span className="relative h-5 w-5 rounded-[3px] border border-teal-muted/30 bg-teal-muted/10">
                  <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-[2px] border border-teal-muted/54" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-mono text-[clamp(0.54rem,0.78vw,0.7rem)] font-black uppercase leading-none text-teal-muted">
                    {item.value}
                  </span>
                  <span className="mt-0.5 block truncate text-[clamp(0.42rem,0.62vw,0.54rem)] font-semibold leading-none text-foreground/58">
                    {item.label}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </PanelColumn>
        <PanelColumn className="border-l border-cyan-muted/10 pl-[clamp(0.65rem,1.1vw,0.95rem)]" title="Evidence Preview">
          <EvidencePreview district={district} />
        </PanelColumn>
      </div>
    </article>
  );
}

function SelectedDistrictIdentity({ district }: { district: District }) {
  const accent = accentStyles[district.accent];

  return (
    <div className="grid min-w-0 grid-cols-[5.6rem_minmax(0,1fr)] gap-[clamp(0.6rem,1vw,0.9rem)] pr-[clamp(0.25rem,0.8vw,0.75rem)]">
      <div className="relative min-h-0">
        <div className="mb-1 flex items-center gap-2 font-mono text-[0.5rem] font-black uppercase tracking-[0.16em] text-amber-soft">
          <span className="h-1.5 w-1.5 rounded-[2px] bg-teal-muted shadow-[var(--glow-cyan)]" />
          Selected District
        </div>
        <SelectedDistrictLanyard accent={district.accent} />
      </div>
      <div className="min-w-0">
        <div className="flex items-start gap-2">
          <span className={cn("grid h-8 w-9 shrink-0 place-items-center rounded-[3px] border font-mono text-[0.78rem] font-black", accent.bg, accent.border, accent.text)}>
            {district.id}
          </span>
          <div className="min-w-0">
            <h3 className="line-clamp-2 font-mono text-[clamp(0.72rem,1.18vw,1rem)] font-black uppercase leading-[1.08] tracking-[0.06em] text-foreground">
              {district.title}
            </h3>
            <p className="mt-1 line-clamp-2 font-mono text-[clamp(0.42rem,0.66vw,0.58rem)] font-bold uppercase leading-[1.2] tracking-[0.07em] text-teal-muted">
              {district.role}
            </p>
          </div>
        </div>
        <p className="mt-2 line-clamp-3 text-[clamp(0.48rem,0.72vw,0.62rem)] font-semibold leading-[1.45] text-foreground/68">
          {district.description}
        </p>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {district.tags.slice(0, 4).map((tag) => (
            <span
              className="truncate rounded-[3px] border border-cyan-muted/12 bg-cyan-muted/5 px-2 py-1 text-center text-[clamp(0.38rem,0.56vw,0.49rem)] font-bold leading-none text-foreground/62"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SelectedDistrictLanyard({ accent }: { accent: DistrictAccent }) {
  const accentClass = accentStyles[accent];

  return (
    <div className="relative mx-auto mt-1 h-[7.8rem] w-[5.25rem] pt-[1.15rem]">
      <span className="absolute left-[22%] top-0 h-[2.3rem] w-2 origin-bottom -rotate-[15deg] overflow-hidden rounded-full border border-cyan-muted/30 bg-surface-2 shadow-[0_0_14px_rgba(113,217,210,0.16)]">
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(113,217,210,0.48)_0_18%,rgba(255,255,255,0.12)_18%_28%,transparent_28%_52%,rgba(139,185,255,0.3)_52%_70%,rgba(113,217,210,0.32)_70%_100%)] bg-[length:100%_22px]" />
      </span>
      <span className="absolute right-[22%] top-0 h-[2.3rem] w-2 origin-bottom rotate-[15deg] overflow-hidden rounded-full border border-cyan-muted/30 bg-surface-2 shadow-[0_0_14px_rgba(113,217,210,0.16)]">
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(113,217,210,0.48)_0_18%,rgba(255,255,255,0.12)_18%_28%,transparent_28%_52%,rgba(139,185,255,0.3)_52%_70%,rgba(113,217,210,0.32)_70%_100%)] bg-[length:100%_22px]" />
      </span>
      <span className="absolute left-1/2 top-[1.65rem] h-4 w-[3.4rem] -translate-x-1/2 rounded-[4px] border border-cyan-muted/36 bg-[linear-gradient(180deg,rgba(243,249,255,0.14),rgba(10,16,22,0.95))] shadow-[0_10px_20px_rgba(0,0,0,0.32),var(--glow-cyan)]" />
      <div
        className="relative z-10 h-full overflow-hidden rounded-[10px] border border-cyan-muted/34 bg-[radial-gradient(circle_at_50%_18%,rgba(113,217,210,0.12),transparent_4.8rem),linear-gradient(180deg,rgba(7,11,16,0.98),rgba(2,5,9,0.98))] p-1.5 shadow-[0_16px_34px_rgba(0,0,0,0.48),inset_0_0_26px_rgba(113,217,210,0.09)]"
        style={{ clipPath: "polygon(9px 0, calc(100% - 9px) 0, 100% 9px, 100% calc(100% - 9px), calc(100% - 9px) 100%, 9px 100%, 0 calc(100% - 9px), 0 9px)" }}
      >
        <span className="absolute inset-0 micro-grid opacity-25" />
        <span className="absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-cyan-muted/70 to-transparent" />
        <span className="relative z-10 grid h-full place-items-center overflow-hidden rounded-[7px] border border-cyan-muted/18 bg-black/32 p-1">
          <img
            alt="Kiagus Arif Rahman"
            className="block h-full w-full object-contain object-center contrast-[1.04] saturate-[1.03]"
            draggable={false}
            src="/avatar/fotokiagus.jpeg"
          />
        </span>
        <span className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),transparent_25%,transparent_78%,rgba(0,0,0,0.18))]" />
        <span className="scanline-mask pointer-events-none absolute inset-0 z-20 opacity-[0.1] animate-[scanline-drift_7s_linear_infinite]" />
        <span className={cn("absolute bottom-1.5 left-1/2 z-30 grid h-5 w-[3.4rem] -translate-x-1/2 place-items-center rounded-[3px] border bg-background/82 font-mono text-[0.45rem] font-black uppercase tracking-[0.08em]", accentClass.border, accentClass.text)}>
          Kiagus ID
        </span>
      </div>
    </div>
  );
}

function PanelColumn({
  children,
  className,
  title,
}: {
  children: ReactNode;
  className?: string;
  title: string;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <h4 className="font-mono text-[clamp(0.52rem,0.78vw,0.68rem)] font-black uppercase tracking-[0.14em] text-cyan-muted">
        {title}
      </h4>
      {children}
    </div>
  );
}

function EvidencePreview({ district }: { district: District }) {
  return (
    <div className="mt-2 grid h-[calc(100%-1.3rem)] min-h-0 grid-rows-[1fr_auto_auto] gap-1.5">
      <div className="grid min-h-0 grid-cols-3 gap-2">
        {district.evidenceSlots.map((slot) => (
          <div
            className="relative overflow-hidden rounded-[4px] border border-cyan-muted/16 bg-[linear-gradient(180deg,rgba(10,25,34,0.74),rgba(2,8,13,0.94))] p-1.5"
            key={`${district.id}-${slot}`}
          >
            <span className="absolute inset-0 micro-grid opacity-30" />
            <span className="relative z-10 flex h-full min-h-[2.2rem] items-center justify-center text-center font-mono text-[clamp(0.38rem,0.56vw,0.48rem)] font-black uppercase leading-[1.25] text-foreground/58">
              {slot}
            </span>
          </div>
        ))}
      </div>
      <p className="truncate font-mono text-[clamp(0.43rem,0.62vw,0.54rem)] font-bold uppercase tracking-[0.07em] text-teal-muted/76">
        {district.evidenceText}
      </p>
      <button
        className="group/evidence relative h-8 overflow-hidden rounded-[4px] border border-cyan-muted/20 bg-cyan-muted/5 font-mono text-[clamp(0.46rem,0.7vw,0.58rem)] font-black uppercase tracking-[0.12em] text-cyan-muted outline-none transition-[border-color,background-color,filter] duration-300 hover:border-cyan-muted/44 hover:bg-cyan-muted/10 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-cyan-muted/70"
        type="button"
      >
        <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-muted/62 to-transparent" />
        {district.evidenceAction}
        <span className="absolute right-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-cyan-muted/74 transition-transform duration-300 group-hover/evidence:translate-x-1" />
      </button>
    </div>
  );
}

function DistrictNavigationStrip({
  activeDistrictId,
  onSelect,
  strength,
}: {
  activeDistrictId: string;
  onSelect: (id: string) => void;
  strength: number;
}) {
  return (
    <div
      className="absolute inset-x-[1.1%] bottom-[1.15%] z-50 grid h-[7.25%] grid-cols-[minmax(0,1fr)_minmax(14rem,20rem)] gap-[clamp(0.65rem,1.1vw,1rem)]"
      style={{
        opacity: strength,
        transform: `translateY(${(1 - strength) * 18}px)`,
      }}
    >
      <div className="relative grid grid-cols-[12rem_minmax(0,1fr)] items-center overflow-hidden rounded-[6px] border border-cyan-muted/12 bg-[linear-gradient(180deg,rgba(2,11,18,0.72),rgba(1,6,11,0.9))] pl-16 pr-4 shadow-[inset_0_0_22px_rgba(113,217,210,0.04)]">
        <span className="absolute inset-1 rounded-[4px] border border-foreground/6" />
        <span className="absolute inset-x-[5%] bottom-2 h-[42%] opacity-80">
          {districts.map((district, index) => (
            <span
              className="absolute bottom-0 w-[9%] rounded-t-[2px] border border-cyan-muted/10 bg-[linear-gradient(180deg,rgba(20,56,72,0.5),rgba(4,12,18,0.9))]"
              key={`nav-skyline-${district.id}`}
              style={{
                height: `${34 + ((index * 19) % 46)}%`,
                left: `${8 + index * 15}%`,
              }}
            />
          ))}
        </span>
        <div className="relative z-10 min-w-0 font-mono uppercase">
          <span className="block text-[clamp(0.48rem,0.72vw,0.62rem)] font-black tracking-[0.12em] text-cyan-muted/78">
            District Navigation
          </span>
          <span className="mt-1 block text-[clamp(0.42rem,0.58vw,0.5rem)] font-bold tracking-[0.08em] text-foreground/46">
            Select building 01-06
          </span>
        </div>
        <div className="relative z-10 flex h-full items-center justify-center gap-[clamp(0.5rem,1.15vw,1.05rem)]">
          {districts.map((district) => {
            const active = activeDistrictId === district.id;
            const accent = accentStyles[district.accent];

            return (
              <button
                aria-label={`Select district ${district.id}`}
                aria-pressed={active}
                className={cn(
                  "relative grid h-9 w-9 place-items-center rounded-[4px] border bg-background/70 font-mono text-[0.72rem] font-black text-foreground/60 outline-none transition-[border-color,filter,box-shadow,transform,background-color] duration-300 hover:-translate-y-0.5 hover:brightness-125 focus-visible:ring-2 focus-visible:ring-cyan-muted/70",
                  active
                    ? "border-teal-muted/66 bg-teal-muted/14 text-teal-muted shadow-[0_0_22px_rgba(63,185,170,0.24)]"
                    : cn(accent.mutedBg, "border-cyan-muted/16 hover:border-cyan-muted/38"),
                )}
                key={`nav-${district.id}`}
                onClick={() => onSelect(district.id)}
                type="button"
              >
                {district.id}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative grid grid-cols-[2.4rem_minmax(0,1fr)] items-center gap-2 overflow-hidden rounded-[6px] border border-amber-soft/18 bg-[linear-gradient(90deg,rgba(11,11,12,0.9),rgba(18,14,8,0.86),rgba(2,9,14,0.94))] px-3 shadow-[inset_0_0_22px_rgba(241,185,90,0.04)]">
        <span className="absolute inset-1 rounded-[4px] border border-foreground/6" />
        <span className="relative grid h-8 w-8 place-items-center rounded-[4px] border border-amber-soft/28 bg-amber-soft/8 shadow-[0_0_16px_rgba(241,185,90,0.18)]">
          <span className="h-5 w-4 rounded-[2px] border border-amber-soft/48 bg-amber-soft/16">
            <span className="mx-auto mt-1 block h-1.5 w-1.5 rounded-[1px] bg-amber-soft/60" />
          </span>
        </span>
        <div className="relative min-w-0">
          <h4 className="font-mono text-[clamp(0.5rem,0.74vw,0.62rem)] font-black uppercase tracking-[0.12em] text-amber-soft/76">
            Next Destination
          </h4>
          <p className="mt-1 text-[clamp(0.43rem,0.62vw,0.54rem)] font-semibold leading-[1.25] text-foreground/58">
            <span className="block">Building window detected.</span>
            <span className="block">Preparing to enter project archive...</span>
          </p>
        </div>
      </div>
    </div>
  );
}
