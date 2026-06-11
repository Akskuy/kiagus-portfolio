"use client";

import { useCallback, useRef, useState } from "react";
import { DataStream } from "@/components/motion/data-stream";
import { PixelButton } from "@/components/ui/pixel-button";
import { PixelPanel } from "@/components/ui/pixel-panel";
import {
  CertificateDocumentationSlot,
  DocumentationSlot,
  EvidencePlaceholder,
  ProjectDemoPlaceholder,
  ScreenshotPlaceholder,
} from "@/components/ui/placeholders";
import { StatusBadge } from "@/components/ui/status-badge";
import { designTokens } from "@/config/design-tokens";
import { railSections } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { useGsapScrollScene } from "@/hooks/use-gsap-scroll-scene";

const foundationModules = [
  "Architecture",
  "Design tokens",
  "Typography",
  "Layout shell",
  "UI primitives",
  "Motion utilities",
  "Scroll progress",
  "Asset slots",
  "Placeholders",
  "Responsive grid",
  "Reduced motion",
  "Progress rail",
];

const motionUtilities = [
  "panel breathe",
  "border trace",
  "scanline drift",
  "data sweep",
  "node pulse",
  "GSAP scroll scene hook",
  "Framer hover/tap states",
  "reduced-motion gate",
];

export function GlobalEnvironmentPreview() {
  const scrollSceneRef = useRef<HTMLDivElement | null>(null);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [activeModule, setActiveModule] = useState(foundationModules[0]);

  const handleProgress = useCallback((progress: number) => {
    setSceneProgress(progress);
  }, []);

  useGsapScrollScene(scrollSceneRef, {
    start: "top 78%",
    end: "bottom 24%",
    scrub: 0.6,
    onProgress: handleProgress,
  });

  return (
    <main id="content" className="mx-auto min-h-screen w-full max-w-[var(--shell-max)] px-[var(--page-pad)] py-8 md:py-12">
      <div className="grid min-h-[calc(100vh-4rem)] items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <PixelPanel className="p-5 md:p-7" active>
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge label="Foundation only" tone="green" />
            <StatusBadge label="No slides mounted" tone="amber" />
            <StatusBadge label="Motion contract active" />
          </div>

          <div className="mt-8 max-w-3xl">
            <p className="font-mono text-sm uppercase text-cyan-muted terminal-cursor">
              global_environment_preview
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              Global Environment Preview
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/70 md:text-lg">
              A temporary system bench for tokens, layout, reusable UI,
              placeholders, scroll progress, motion utilities, and the
              navigation rail. The portfolio slides are intentionally waiting.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <PixelButton isActive onClick={() => setActiveModule("Motion utilities")}>
              Activate motion
            </PixelButton>
            <PixelButton tone="green" onClick={() => setActiveModule("Asset slots")}>
              Check assets
            </PixelButton>
            <PixelButton tone="amber" onClick={() => setActiveModule("Progress rail")}>
              Inspect rail
            </PixelButton>
          </div>
        </PixelPanel>

        <PixelPanel className="p-5 md:p-6" tone="blue">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase text-blue-soft">active_module</p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">
                {activeModule}
              </h2>
            </div>
            <div className="grid h-16 w-16 place-items-center rounded-sm border border-blue-soft/30 bg-background/70 font-mono text-blue-soft shadow-[var(--glow-cyan)]">
              SYS
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {foundationModules.slice(0, 6).map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() => setActiveModule(item)}
                className="group relative flex items-center justify-between overflow-hidden rounded-sm border border-cyan-muted/20 bg-background/50 px-3 py-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-muted/70"
              >
                <span className="font-mono text-sm uppercase text-foreground/75">
                  {String(index + 1).padStart(2, "0")} / {item}
                </span>
                <span className="h-2 w-2 rounded-[2px] bg-cyan-muted/70 animate-[node-pulse_2.9s_ease-in-out_infinite]" />
                <span className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-cyan-muted/10 to-transparent animate-[sweep-light_4s_linear_infinite]" />
              </button>
            ))}
          </div>
        </PixelPanel>
      </div>

      <div ref={scrollSceneRef} className="grid gap-6 py-10 lg:grid-cols-[0.9fr_1.1fr]">
        <PixelPanel className="p-5 md:p-6">
          <div className="flex items-center justify-between gap-4">
            <StatusBadge label="Scroll foundation" />
            <span className="font-mono text-sm text-cyan-muted">
              {Math.round(sceneProgress * 100)}%
            </span>
          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-sm border border-cyan-muted/25 bg-background">
            <div
              className="h-full bg-gradient-to-r from-cyan-muted via-amber-soft to-green-soft shadow-[var(--glow-cyan)]"
              style={{ width: `${Math.max(4, sceneProgress * 100)}%` }}
            />
          </div>

          <div className="mt-6 grid gap-4">
            <DataStream tone="cyan" />
            <DataStream tone="amber" />
            <DataStream tone="green" />
          </div>

          <p className="mt-6 text-sm leading-6 text-foreground/70">
            Future sections can consume a normalized 0 to 1 scroll progress
            value for camera depth, object activation, data speed, lighting,
            and transition hooks.
          </p>
        </PixelPanel>

        <PixelPanel className="p-5 md:p-6" tone="green">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge label="Reusable motion utilities" tone="green" />
            <StatusBadge label="Reduced motion ready" tone="amber" />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {motionUtilities.map((utility) => (
              <div
                key={utility}
                className="relative overflow-hidden rounded-sm border border-green-soft/20 bg-background/50 p-3"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-soft/60 to-transparent animate-[sweep-light_3.8s_linear_infinite]" />
                <p className="font-mono text-sm uppercase text-foreground/80">
                  {utility}
                </p>
              </div>
            ))}
          </div>
        </PixelPanel>
      </div>

      <div className="grid gap-6 py-10 lg:grid-cols-5">
        <ScreenshotPlaceholder className="lg:col-span-1" />
        <EvidencePlaceholder className="lg:col-span-1" />
        <DocumentationSlot className="lg:col-span-1" />
        <ProjectDemoPlaceholder className="lg:col-span-1" />
        <CertificateDocumentationSlot className="lg:col-span-1" />
      </div>

      <div className="grid gap-6 py-10 lg:grid-cols-[1fr_1fr]">
        <PixelPanel className="p-5 md:p-6" tone="amber">
          <StatusBadge label="Asset loading structure" tone="amber" />
          <div className="mt-5 space-y-3 font-mono text-sm text-foreground/70">
            <p>avatar: {siteConfig.assets.avatar}</p>
            <p>resume: {siteConfig.assets.resume}</p>
            <p>project slots: {Object.keys(siteConfig.assets.projectScreenshots).length}</p>
            <p>evidence slots: {Object.keys(siteConfig.assets.evidence).length}</p>
          </div>
        </PixelPanel>

        <PixelPanel className="p-5 md:p-6" tone="blue">
          <StatusBadge label="Progress rail map" tone="blue" />
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {railSections.map((section) => (
              <div
                key={section.id}
                className="rounded-sm border border-blue-soft/20 bg-background/50 p-3 font-mono text-xs uppercase text-foreground/70"
              >
                {String(section.index).padStart(2, "0")} / {section.label}
              </div>
            ))}
          </div>
        </PixelPanel>
      </div>

      <PixelPanel className="mb-12 p-5 md:p-6" tone="green">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <StatusBadge label="Design tokens" tone="green" />
            <h2 className="mt-4 text-2xl font-semibold text-foreground">
              Tokens are ready for section builds.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {Object.entries(designTokens.colors).slice(0, 6).map(([name, value]) => (
              <div
                key={name}
                className="rounded-sm border border-cyan-muted/20 bg-background/50 p-3"
              >
                <div
                  className="h-10 rounded-sm border border-white/10"
                  style={{ backgroundColor: value }}
                />
                <p className="mt-3 font-mono text-xs uppercase text-foreground/70">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PixelPanel>
    </main>
  );
}
