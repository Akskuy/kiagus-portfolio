"use client";

import type { CSSProperties } from "react";
import { memo, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

type KnowledgeLibrarySceneProps = {
  progress: number;
};

type KnowledgePillar = {
  activeModule: string;
  bottomSentence: string;
  bullets: string[];
  icon: "stats" | "systems" | "ai" | "leadership";
  modules: string[];
  number: string;
  overview: string;
  title: string;
  value: string;
};

const knowledgePillars: KnowledgePillar[] = [
  {
    activeModule: "04 Statistical Inference",
    bottomSentence:
      "Foundation for modeling uncertainty, analyzing complex data, and supporting decision-making.",
    bullets: [
      "Uncertainty modeling",
      "Data-driven reasoning",
      "Probability-based decision support",
      "Real academic foundation",
    ],
    icon: "stats",
    modules: [
      "01 Calculus",
      "02 Linear Algebra",
      "03 Probability",
      "04 Statistical Inference",
      "05 Statistical Modeling",
      "06 Bayesian Thinking",
      "07 Sampling",
      "08 Data Wrangling",
      "09 Multivariate Analysis",
      "10 Stochastic Process",
      "11 Forecasting",
      "12 Simulation",
      "13 Optimization",
      "14 Metaheuristics",
    ],
    number: "1",
    overview:
      "Comprehensive coverage of mathematical theories and statistical methods that form the backbone of data analysis, modeling, and decision science.",
    title: "MATHEMATICAL & STATISTICAL FOUNDATION",
    value:
      "Represents statistical reasoning, probability, uncertainty, modeling, and analytical interpretation.",
  },
  {
    activeModule: "05 Data Pipeline Foundation",
    bottomSentence:
      "Foundation for structuring data, organizing workflows, and preparing analysis-ready outputs.",
    bullets: [
      "Database structure",
      "Data schema logic",
      "Pipeline foundation",
      "Web workflow thinking",
    ],
    icon: "systems",
    modules: [
      "01 Data Systems",
      "02 Database Design",
      "03 Data Schema Structuring",
      "04 Query Logic",
      "05 Data Pipeline Foundation",
      "06 Data Processing Pipeline",
      "07 End-to-End Data Flow",
      "08 Analysis-Ready Data",
      "09 Web Workflow",
      "10 Interface System",
      "11 Digital Product Workflow",
      "12 Workflow Structure",
      "13 System Design",
      "14 Backend Fundamentals",
    ],
    number: "2",
    overview:
      "Represents data engineering foundation, database thinking, programming logic, data pipelines, and web workflow.",
    title: "COMPUTING, PROGRAMMING & DATA SYSTEMS",
    value:
      "Connects data movement, system structure, and web-based workflow logic into usable technical foundations.",
  },
  {
    activeModule: "03 AI Problem Formulation",
    bottomSentence:
      "Foundation for framing AI problems, interpreting model logic, and connecting AI capability to workflow value.",
    bullets: [
      "AI problem framing",
      "Model reasoning",
      "Predictive systems",
      "Advanced analytical methods",
    ],
    icon: "ai",
    modules: [
      "01 Machine Learning",
      "02 AI Logic",
      "03 AI Problem Formulation",
      "04 Predictive Systems",
      "05 Supervised Learning",
      "06 Unsupervised Learning",
      "07 Classification",
      "08 Regression",
      "09 Clustering",
      "10 Text Mining",
      "11 Computer Vision",
      "12 Model Logic",
      "13 Advanced Analytics",
      "14 Business Analytics",
    ],
    number: "3",
    overview:
      "Represents machine learning thinking, AI problem formulation, model reasoning, and advanced analytical methods.",
    title: "MACHINE LEARNING, AI & ADVANCED ANALYTICS",
    value:
      "Organizes AI concepts into practical reasoning for models, product logic, and intelligent workflows.",
  },
  {
    activeModule: "06 Decision Intelligence",
    bottomSentence:
      "Foundation for validating problems, supporting decisions, and guiding teams toward useful product direction.",
    bullets: [
      "Problem formulation",
      "Research validation",
      "Decision support",
      "Team and product direction",
    ],
    icon: "leadership",
    modules: [
      "01 Research",
      "02 Problem Formulation",
      "03 Survey Design",
      "04 Data Validation",
      "05 Analytical Usability",
      "06 Decision Intelligence",
      "07 Business Analytics",
      "08 Decision Support",
      "09 Insight Delivery",
      "10 Product Direction",
      "11 Team Execution",
      "12 Technical Direction",
      "13 Mentoring",
      "14 Community Leadership",
    ],
    number: "4",
    overview:
      "Represents research, validation, decision intelligence, team direction, and product/system thinking.",
    title: "BUSINESS, RESEARCH, LEADERSHIP & DIGITAL TRANSFORMATION",
    value:
      "Connects analysis and validation to decision support, product thinking, and coordinated execution.",
  },
];

const shelfRows = Array.from({ length: 6 }, (_, index) => index);
const bookBlocks = Array.from({ length: 18 }, (_, index) => index);
const dustParticles = Array.from({ length: 18 }, (_, index) => index);
const lampRays = Array.from({ length: 5 }, (_, index) => index);

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

export function KnowledgeLibraryScene({ progress }: KnowledgeLibrarySceneProps) {
  const stage = clamp01(progress);
  const enter = segment(stage, 0.08, 0.28);
  const tabsBoot = segment(stage, 0.22, 0.48);
  const archiveForm = segment(stage, 0.34, 0.72);
  const activeState = segment(stage, 0.62, 1);
  const sceneOpacity = segment(stage, 0.06, 0.22);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedPillar = knowledgePillars[selectedIndex] ?? knowledgePillars[0]!;

  const style = {
    opacity: sceneOpacity,
    pointerEvents: stage > 0.72 ? "auto" : "none",
    transform: `translate3d(0, ${(1 - enter) * 18}px, 0) scale(${0.985 + enter * 0.015})`,
  } as CSSProperties;

  if (stage <= 0.01) {
    return null;
  }

  return (
    <section
      aria-hidden={stage < 0.72}
      aria-label="Knowledge Library"
      className="absolute inset-0 z-[24] overflow-hidden bg-background"
      style={style}
    >
      <LibraryAtmosphere activeState={activeState} archiveForm={archiveForm} enter={enter} />

      <div className="relative z-10 mx-auto h-full w-full max-w-[var(--shell-max)] px-[clamp(0.75rem,2.4vw,2.4rem)] py-[clamp(0.6rem,1.6vw,1.25rem)]">
        <KnowledgeTitleRail strength={archiveForm} />

        <PillarTabs
          activeIndex={selectedIndex}
          boot={tabsBoot}
          onSelect={setSelectedIndex}
        />

        <div className="absolute inset-x-[clamp(0.75rem,2.4vw,2.4rem)] top-[28%] grid h-[49%] grid-cols-[0.82fr_1.34fr_0.86fr] gap-[clamp(0.75rem,1.4vw,1.2rem)]">
          <ActivePillarPanel pillar={selectedPillar} strength={archiveForm} />
          <ModulesPanel pillar={selectedPillar} strength={archiveForm} />
          <PillarOverviewPanel pillar={selectedPillar} strength={archiveForm} />
        </div>

        <BottomSentenceBar pillar={selectedPillar} strength={activeState} />
      </div>
    </section>
  );
}

function LibraryAtmosphere({
  activeState,
  archiveForm,
  enter,
}: {
  activeState: number;
  archiveForm: number;
  enter: number;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_19%,rgba(241,185,90,0.2),transparent_26rem),radial-gradient(circle_at_18%_56%,rgba(63,185,170,0.13),transparent_24rem),linear-gradient(180deg,rgba(26,15,9,0.96),rgba(8,6,5,0.98)_72%)]"
        style={{ opacity: 0.72 + activeState * 0.28 }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(241,185,90,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(113,217,210,0.035)_1px,transparent_1px)] bg-[length:24px_24px] opacity-35" />

      <ArchiveShelves side="left" strength={archiveForm} />
      <ArchiveShelves side="right" strength={archiveForm} />

      <div
        className="absolute left-[18%] right-[18%] top-[8%] h-[13%] rounded-[2px] border-y border-amber-soft/12 bg-[linear-gradient(90deg,transparent,rgba(241,185,90,0.1),transparent)]"
        style={{
          opacity: archiveForm * 0.72,
          transform: `translateY(${(1 - archiveForm) * -14}px) scaleX(${0.9 + archiveForm * 0.1})`,
        }}
      />

      <div
        className="absolute inset-x-[7%] bottom-[5%] h-[18%] origin-bottom rounded-t-[18px] border border-amber-soft/12 bg-[linear-gradient(180deg,rgba(55,34,20,0.5),rgba(11,8,6,0.82))] shadow-[0_-24px_70px_rgba(0,0,0,0.32),inset_0_0_32px_rgba(241,185,90,0.06)]"
        style={{
          opacity: archiveForm * 0.72,
          transform: `perspective(900px) rotateX(${62 - activeState * 7}deg) translateY(${(1 - archiveForm) * 42}px)`,
        }}
      />

      <div className="absolute right-[15%] top-[46%] h-[18%] w-[12%] opacity-70">
        <LibraryLamp strength={archiveForm} />
      </div>

      {dustParticles.map((particle) => (
        <span
          className="absolute h-1 w-1 rounded-[1px] bg-amber-soft/48 animate-[particle-drift_9s_linear_infinite]"
          key={particle}
          style={{
            animationDelay: `${particle * 0.31}s`,
            animationDuration: `${8 + (particle % 5)}s`,
            left: `${10 + ((particle * 19) % 78)}%`,
            opacity: archiveForm * 0.5,
            top: `${18 + ((particle * 23) % 64)}%`,
          }}
        />
      ))}

      <div
        className="absolute inset-x-[9%] bottom-[7%] h-px bg-gradient-to-r from-transparent via-amber-soft/35 to-transparent"
        style={{
          opacity: activeState * 0.8,
          transform: `scaleX(${0.7 + activeState * 0.3})`,
        }}
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_28rem,rgba(0,0,0,0.54))]"
        style={{ opacity: 0.5 + enter * 0.18 }}
      />
    </div>
  );
}

function ArchiveShelves({
  side,
  strength,
}: {
  side: "left" | "right";
  strength: number;
}) {
  return (
    <div
      className={cn(
        "absolute top-[5%] hidden h-[83%] w-[18%] overflow-hidden rounded-[8px] border border-amber-soft/12 bg-[linear-gradient(180deg,rgba(37,23,15,0.86),rgba(7,6,5,0.95))] shadow-[0_28px_90px_rgba(0,0,0,0.54),inset_0_0_34px_rgba(241,185,90,0.06)] md:block",
        side === "left" ? "left-[1.5%] -skew-y-3" : "right-[1.5%] skew-y-3",
      )}
      style={{
        opacity: strength,
        transform: `translateX(${(1 - strength) * (side === "left" ? -32 : 32)}px)`,
      }}
    >
      <span className="absolute inset-1 rounded-[5px] border border-foreground/6" />
      <span className="absolute inset-0 micro-grid opacity-15" />
      <div className="relative z-10 grid h-full content-around gap-3 p-4">
        {shelfRows.map((row) => (
          <div
            className="relative h-16 rounded-[4px] border border-amber-soft/10 bg-black/22 shadow-[inset_0_0_18px_rgba(0,0,0,0.26)]"
            key={`${side}-${row}`}
          >
            <span className="absolute inset-x-2 bottom-2 h-1 rounded-full bg-amber-soft/14" />
            <span className="absolute bottom-3 left-3 right-3 flex items-end gap-1">
              {bookBlocks.slice(0, 11).map((book) => (
                <span
                  className={cn(
                    "w-[6%] rounded-t-[2px] border border-amber-soft/10",
                    (book + row) % 5 === 0
                      ? "bg-teal-muted/28"
                      : (book + row) % 3 === 0
                        ? "bg-amber-soft/28"
                        : "bg-foreground/10",
                  )}
                  key={book}
                  style={{ height: `${24 + ((book + row * 3) * 9) % 38}px` }}
                />
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LibraryLamp({ strength }: { strength: number }) {
  return (
    <div
      className="relative h-full w-full"
      style={{
        opacity: strength,
        transform: `translateY(${(1 - strength) * 18}px)`,
      }}
    >
      <span className="absolute left-1/2 top-[10%] h-[20%] w-[18%] -translate-x-1/2 rounded-t-full border border-amber-soft/28 bg-amber-soft/16 shadow-[var(--glow-amber)] animate-[screen-flicker_6s_steps(4,end)_infinite]" />
      <span className="absolute left-1/2 top-[30%] h-[48%] w-px -translate-x-1/2 bg-amber-soft/26" />
      <span className="absolute bottom-[18%] left-1/2 h-[16%] w-[46%] -translate-x-1/2 rounded-t-full border border-amber-soft/18 bg-black/38" />
      {lampRays.map((ray) => (
        <span
          className="absolute left-1/2 top-[30%] h-[50%] w-px origin-top bg-gradient-to-b from-amber-soft/32 to-transparent"
          key={ray}
          style={{ transform: `rotate(${(ray - 2) * 11}deg)` }}
        />
      ))}
    </div>
  );
}

const KnowledgeTitleRail = memo(function KnowledgeTitleRail({
  strength,
}: {
  strength: number;
}) {
  return (
    <div
      className="absolute left-1/2 top-[3.2%] flex h-[7.2%] w-[min(47vw,35rem)] items-center justify-center overflow-hidden rounded-[5px] border border-amber-soft/24 bg-[linear-gradient(90deg,rgba(16,10,7,0.9),rgba(49,30,17,0.92)_50%,rgba(16,10,7,0.9))] shadow-[0_0_34px_rgba(241,185,90,0.13),inset_0_0_26px_rgba(241,185,90,0.08)]"
      style={{
        opacity: strength,
        transform: `translateX(-50%) translateY(${(1 - strength) * -18}px) scale(${0.96 + strength * 0.04})`,
      }}
    >
      <span className="absolute inset-1 rounded-[3px] border border-foreground/8" />
      <span className="absolute inset-x-9 top-0 h-px bg-gradient-to-r from-transparent via-amber-soft/70 to-transparent" />
      <span className="absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-muted/38 to-transparent" />
      <span className="absolute left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-[2px] bg-amber-soft/86 shadow-[var(--glow-amber)] animate-[node-pulse_3.8s_ease-in-out_infinite]" />
      <span className="absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-[2px] bg-teal-muted/82 shadow-[var(--glow-cyan)] animate-[node-pulse_4.2s_ease-in-out_infinite]" />
      <span className="relative z-10 font-mono text-[clamp(1.2rem,2.7vw,2.45rem)] font-black uppercase leading-none tracking-[0.12em] text-amber-soft drop-shadow-[0_0_16px_rgba(241,185,90,0.22)]">
        KNOWLEDGE LIBRARY
      </span>
    </div>
  );
});

function PillarTabs({
  activeIndex,
  boot,
  onSelect,
}: {
  activeIndex: number;
  boot: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div
      className="absolute inset-x-[clamp(1.2rem,5vw,5.8rem)] top-[12.5%] grid h-[14%] grid-cols-4 gap-[clamp(0.55rem,1.1vw,1rem)]"
      style={{
        opacity: boot,
        transform: `translateY(${(1 - boot) * -16}px) scale(${0.98 + boot * 0.02})`,
      }}
    >
      {knowledgePillars.map((pillar, index) => (
        <button
          aria-pressed={activeIndex === index}
          className={cn(
            "group/pillar relative isolate cursor-pointer overflow-visible rounded-[6px] border bg-[linear-gradient(180deg,rgba(42,25,15,0.9),rgba(11,8,6,0.96))] px-3 py-2 text-left shadow-[0_18px_48px_rgba(0,0,0,0.48),inset_0_0_26px_rgba(241,185,90,0.05)] outline-none transition-[border-color,filter,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-teal-muted/62 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-amber-soft/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            activeIndex === index
              ? "border-teal-muted/58 shadow-[0_20px_56px_rgba(0,0,0,0.5),0_0_28px_rgba(63,185,170,0.18),inset_0_0_28px_rgba(63,185,170,0.09)]"
              : "border-amber-soft/18",
          )}
          key={pillar.title}
          onClick={() => onSelect(index)}
          style={{
            clipPath:
              "polygon(14px 0, calc(100% - 18px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 12px) 100%, 14px 100%, 0 calc(100% - 14px), 0 12px)",
            transform: `translateY(${(1 - boot) * (index % 2 === 0 ? -18 : 18)}px)`,
          }}
          type="button"
        >
          <span
            className={cn(
              "absolute -top-3 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border font-mono text-[0.68rem] font-black",
              activeIndex === index
                ? "border-amber-soft/70 bg-amber-soft/18 text-amber-soft shadow-[var(--glow-amber)]"
                : "border-amber-soft/28 bg-background text-amber-soft/66",
            )}
          >
            {pillar.number}
          </span>
          <span className="absolute inset-1 rounded-[4px] border border-foreground/7" />
          <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-amber-soft/58 to-transparent opacity-70 group-hover/pillar:via-teal-muted/70" />
          <span className="relative z-10 grid h-full grid-cols-[2.6rem_minmax(0,1fr)] items-center gap-3">
            <PillarGlyph icon={pillar.icon} active={activeIndex === index} compact />
            <span className="font-mono text-[clamp(0.57rem,0.78vw,0.76rem)] font-black uppercase leading-[1.45] tracking-[0.08em] text-foreground/86">
              {pillar.title}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}

function ActivePillarPanel({
  pillar,
  strength,
}: {
  pillar: KnowledgePillar;
  strength: number;
}) {
  return (
    <article
      className="relative overflow-hidden rounded-[8px] border border-teal-muted/28 bg-[linear-gradient(180deg,rgba(18,55,50,0.72),rgba(12,20,17,0.94))] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.54),inset_0_0_34px_rgba(63,185,170,0.12)]"
      style={{
        opacity: strength,
        transform: `translateX(${(1 - strength) * -28}px) rotateY(${(1 - strength) * -8}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <span className="absolute inset-1 rounded-[5px] border border-foreground/8" />
      <span className="absolute left-0 top-8 h-[72%] w-3 rounded-r-full bg-black/24" />
      <span className="absolute inset-0 micro-grid opacity-20" />
      <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-teal-muted/70 to-transparent animate-[border-lap-x_5.4s_linear_infinite]" />

      <div className="relative z-10 flex h-full flex-col justify-center gap-5 pl-2">
        <PillarGlyph active icon={pillar.icon} />
        <div>
          <h3 className="font-mono text-[clamp(0.86rem,1.25vw,1.2rem)] font-black uppercase leading-[1.28] tracking-[0.08em] text-foreground">
            {pillar.title}
          </h3>
          <div className="mt-4 inline-flex rounded-[3px] border border-teal-muted/38 bg-teal-muted/10 px-3 py-1.5 font-mono text-[0.62rem] font-black uppercase tracking-[0.12em] text-teal-muted">
            Foundation Pillar
          </div>
        </div>
      </div>
    </article>
  );
}

function ModulesPanel({
  pillar,
  strength,
}: {
  pillar: KnowledgePillar;
  strength: number;
}) {
  const moduleColumns = useMemo(
    () => [pillar.modules.slice(0, 7), pillar.modules.slice(7, 14)],
    [pillar.modules],
  );

  return (
    <article
      className="relative overflow-hidden rounded-[8px] border border-amber-soft/14 bg-[linear-gradient(180deg,rgba(14,13,11,0.9),rgba(7,7,6,0.96))] p-4 shadow-[0_24px_76px_rgba(0,0,0,0.56),inset_0_0_32px_rgba(241,185,90,0.05)]"
      style={{
        opacity: strength,
        transform: `translateY(${(1 - strength) * 28}px) scale(${0.97 + strength * 0.03})`,
      }}
    >
      <span className="absolute inset-1 rounded-[5px] border border-foreground/7" />
      <span className="absolute inset-0 micro-grid opacity-20" />
      <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-teal-muted/62 to-transparent" />
      <div className="relative z-10 flex h-full flex-col gap-3">
        <div className="flex items-center justify-center gap-3 font-mono text-[0.7rem] font-black uppercase tracking-[0.18em] text-teal-muted">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-muted/28 to-teal-muted/40" />
          Modules & Foundations
          <span className="h-px flex-1 bg-gradient-to-r from-teal-muted/40 via-teal-muted/28 to-transparent" />
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-2 gap-3">
          {moduleColumns.map((column, columnIndex) => (
            <div className="grid content-between gap-1.5" key={columnIndex}>
              {column.map((module) => {
                const active = module === pillar.activeModule;
                const [number, ...nameParts] = module.split(" ");

                return (
                  <div
                    className={cn(
                      "group/module relative flex min-h-0 items-center gap-2 rounded-[4px] border px-2.5 py-1.5 font-mono text-[clamp(0.56rem,0.76vw,0.72rem)] font-bold uppercase leading-none tracking-[0.05em] shadow-[inset_0_0_14px_rgba(0,0,0,0.18)] transition-[border-color,filter] duration-300",
                      active
                        ? "border-teal-muted/62 bg-teal-muted/12 text-foreground shadow-[0_0_20px_rgba(63,185,170,0.12),inset_0_0_18px_rgba(63,185,170,0.1)]"
                        : "border-amber-soft/10 bg-black/24 text-foreground/62",
                    )}
                    key={module}
                  >
                    {active ? (
                      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-muted/72 to-transparent animate-[border-lap-x_4.8s_linear_infinite]" />
                    ) : null}
                    <span
                      className={cn(
                        "flex h-5 min-w-7 items-center justify-center rounded-[3px] border text-[0.62rem]",
                        active
                          ? "border-teal-muted/54 bg-teal-muted/16 text-teal-muted"
                          : "border-amber-soft/14 bg-amber-soft/8 text-amber-soft/58",
                      )}
                    >
                      {number}
                    </span>
                    <span className="truncate">{nameParts.join(" ")}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function SelectedModuleDetail({ pillar }: { pillar: KnowledgePillar }) {
  return (
    <div className="relative min-h-0 overflow-hidden rounded-[8px] border border-teal-muted/16 bg-[linear-gradient(135deg,rgba(12,21,18,0.78),rgba(10,8,7,0.94))] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.44),inset_0_0_22px_rgba(63,185,170,0.06)]">
      <span className="absolute inset-1 rounded-[5px] border border-foreground/7" />
      <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-teal-muted/48 to-transparent" />
      <div className="relative z-10">
        <div className="font-mono text-[0.55rem] font-black uppercase tracking-[0.18em] text-teal-muted/72">
          Detail Panel
        </div>
        <div className="mt-2 font-mono text-[clamp(0.58rem,0.78vw,0.74rem)] font-black uppercase leading-[1.25] text-foreground">
          {pillar.activeModule.replace(/^\d+\s/, "")}
        </div>
        <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1">
          {pillar.bullets.map((bullet) => (
            <span
              className="border-l border-teal-muted/24 pl-2 text-[0.5rem] font-bold uppercase leading-relaxed tracking-[0.07em] text-foreground/62"
              key={bullet}
            >
              {bullet}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function KnowledgeValuePanel({ pillar }: { pillar: KnowledgePillar }) {
  return (
    <div className="relative min-h-0 overflow-hidden rounded-[8px] border border-teal-muted/18 bg-[linear-gradient(180deg,rgba(12,30,27,0.72),rgba(9,8,7,0.94))] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.44),inset_0_0_22px_rgba(63,185,170,0.07)]">
      <span className="absolute inset-1 rounded-[5px] border border-foreground/8" />
      <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-teal-muted/54 to-transparent" />
      <div className="relative z-10">
        <div className="font-mono text-[0.55rem] font-black uppercase tracking-[0.2em] text-teal-muted/72">
          Knowledge Value
        </div>
        <p className="mt-2 text-[0.62rem] font-semibold leading-relaxed text-foreground/66">
          {pillar.value}
        </p>
      </div>
    </div>
  );
}

function PillarOverviewCard({ pillar }: { pillar: KnowledgePillar }) {
  return (
    <div className="relative min-h-0 overflow-hidden rounded-[8px] border border-amber-soft/18 bg-[linear-gradient(180deg,rgba(42,27,16,0.88),rgba(12,9,7,0.96))] p-4 shadow-[0_20px_62px_rgba(0,0,0,0.5),inset_0_0_24px_rgba(241,185,90,0.06)]">
      <span className="absolute inset-1 rounded-[5px] border border-foreground/8" />
      <span className="absolute right-5 top-5 h-1.5 w-8 rounded-full bg-gradient-to-r from-amber-soft/42 to-teal-muted/44" />
      <div className="relative z-10">
        <div className="font-mono text-[clamp(0.66rem,0.86vw,0.78rem)] font-black uppercase tracking-[0.12em] text-amber-soft">
          Pillar Overview
        </div>
        <p className="mt-3 text-[clamp(0.62rem,0.82vw,0.78rem)] font-semibold leading-relaxed text-foreground/74">
          {pillar.overview}
        </p>
      </div>
    </div>
  );
}

function PillarOverviewPanel({
  pillar,
  strength,
}: {
  pillar: KnowledgePillar;
  strength: number;
}) {
  return (
    <aside
      className="grid min-h-0 grid-rows-[1fr_0.95fr_0.72fr] gap-3"
      style={{
        opacity: strength,
        transform: `translateX(${(1 - strength) * 28}px) rotateY(${(1 - strength) * 8}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <PillarOverviewCard pillar={pillar} />
      <SelectedModuleDetail pillar={pillar} />
      <KnowledgeValuePanel pillar={pillar} />
    </aside>
  );
}

function BottomSentenceBar({
  pillar,
  strength,
}: {
  pillar: KnowledgePillar;
  strength: number;
}) {
  return (
    <div
      className="absolute inset-x-[clamp(1.5rem,7vw,6.5rem)] bottom-[6.6%] flex h-[8.2%] items-center gap-5 overflow-hidden rounded-[7px] border border-amber-soft/18 bg-[linear-gradient(90deg,rgba(15,10,7,0.9),rgba(38,25,15,0.9)_50%,rgba(15,10,7,0.9))] px-[clamp(1rem,3vw,2.5rem)] shadow-[0_20px_64px_rgba(0,0,0,0.52),inset_0_0_24px_rgba(241,185,90,0.06)]"
      style={{
        opacity: strength,
        transform: `translateY(${(1 - strength) * 22}px) scaleX(${0.96 + strength * 0.04})`,
      }}
    >
      <span className="absolute inset-1 rounded-[5px] border border-foreground/7" />
      <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-soft/58 to-transparent" />
      <span className="relative h-9 w-12 rounded-[3px] border border-amber-soft/18 bg-amber-soft/8">
        <span className="absolute left-[16%] top-[20%] h-[58%] w-[34%] rounded-l-[3px] border border-amber-soft/30 bg-black/16" />
        <span className="absolute right-[16%] top-[20%] h-[58%] w-[34%] rounded-r-[3px] border border-teal-muted/24 bg-teal-muted/8" />
        <span className="absolute left-1/2 top-[17%] h-[66%] w-px bg-amber-soft/24" />
      </span>
      <p className="relative z-10 flex-1 text-center font-mono text-[clamp(0.72rem,1vw,0.98rem)] font-bold leading-relaxed tracking-[0.05em] text-foreground/76">
        {pillar.bottomSentence}
      </p>
      <span className="relative hidden h-11 w-24 rounded-[3px] border border-amber-soft/14 bg-black/16 md:block">
        <span className="absolute left-[14%] top-[20%] h-[58%] w-[36%] rounded-l-[3px] border border-amber-soft/24 bg-amber-soft/7" />
        <span className="absolute right-[14%] top-[16%] h-[64%] w-[34%] origin-left rounded-r-[3px] border border-teal-muted/18 bg-teal-muted/8" />
        <span className="absolute left-1/2 top-[18%] h-[64%] w-px bg-amber-soft/22" />
      </span>
      <span className="relative h-2 w-2 rounded-[2px] bg-amber-soft/80 shadow-[var(--glow-amber)] animate-[node-pulse_3.4s_ease-in-out_infinite]" />
    </div>
  );
}

function PillarGlyph({
  active,
  compact = false,
  icon,
}: {
  active: boolean;
  compact?: boolean;
  icon: KnowledgePillar["icon"];
}) {
  const sizeClass = compact ? "h-10 w-10" : "h-24 w-24";

  if (icon === "stats") {
    return (
      <span
        className={cn(
          "relative inline-block rounded-[5px] border bg-teal-muted/9 shadow-[inset_0_0_18px_rgba(63,185,170,0.1)]",
          sizeClass,
          active ? "border-teal-muted/46 text-teal-muted" : "border-amber-soft/18 text-amber-soft/66",
        )}
      >
        {[0, 1, 2, 3].map((bar) => (
          <span
            className="absolute bottom-[22%] w-[11%] rounded-t-[2px] border border-current bg-current/24"
            key={bar}
            style={{
              height: `${24 + bar * 14}%`,
              left: `${23 + bar * 14}%`,
            }}
          />
        ))}
        <span className="absolute bottom-[19%] left-[18%] right-[18%] h-px bg-current/70" />
      </span>
    );
  }

  if (icon === "systems") {
    return (
      <span
        className={cn(
          "relative inline-block rounded-[5px] border bg-amber-soft/7",
          sizeClass,
          active ? "border-teal-muted/46 text-teal-muted" : "border-amber-soft/18 text-amber-soft/66",
        )}
      >
        <span className="absolute left-[24%] top-[24%] h-[52%] w-[52%] border border-current/65 shadow-[inset_0_0_12px_rgba(241,185,90,0.08)]" />
        {[0, 1, 2, 3].map((pin) => (
          <span
            className="absolute h-[10%] w-[10%] rounded-[1px] bg-current/70"
            key={pin}
            style={{
              left: `${14 + (pin % 2) * 66}%`,
              top: `${18 + Math.floor(pin / 2) * 58}%`,
            }}
          />
        ))}
      </span>
    );
  }

  if (icon === "ai") {
    return (
      <span
        className={cn(
          "relative inline-block rounded-[5px] border bg-teal-muted/8",
          sizeClass,
          active ? "border-teal-muted/46 text-teal-muted" : "border-amber-soft/18 text-amber-soft/66",
        )}
      >
        <span className="absolute left-[22%] top-[20%] h-[56%] w-[56%] rounded-full border border-current/62" />
        {[0, 1, 2, 3, 4].map((node) => (
          <span
            className="absolute h-[12%] w-[12%] rounded-[2px] bg-current/76"
            key={node}
            style={{
              left: `${25 + ((node * 17) % 38)}%`,
              top: `${24 + ((node * 23) % 42)}%`,
            }}
          />
        ))}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "relative inline-block rounded-[5px] border bg-amber-soft/7",
        sizeClass,
        active ? "border-teal-muted/46 text-teal-muted" : "border-amber-soft/18 text-amber-soft/66",
      )}
    >
      {[0, 1, 2].map((person) => (
        <span
          className="absolute top-[25%] h-[20%] w-[20%] rounded-full border border-current/58 bg-current/18"
          key={person}
          style={{ left: `${18 + person * 24}%` }}
        />
      ))}
      <span className="absolute bottom-[22%] left-[18%] h-[22%] w-[64%] rounded-t-full border border-current/58 bg-current/12" />
    </span>
  );
}
