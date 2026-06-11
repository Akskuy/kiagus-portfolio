"use client";

import Image from "next/image";
import { useState } from "react";
import { PixelPanel } from "@/components/ui/pixel-panel";
import { StatusBadge } from "@/components/ui/status-badge";
import { cn } from "@/lib/cn";

type PlaceholderKind = "screenshot" | "evidence" | "documentation" | "demo" | "certificate";

type PlaceholderBaseProps = {
  title?: string;
  note?: string;
  className?: string;
};

type AssetFrameProps = PlaceholderBaseProps & {
  src?: string;
  alt: string;
  kind?: PlaceholderKind;
};

const defaults: Record<PlaceholderKind, { title: string; note: string; token: string }> = {
  screenshot: {
    title: "Screenshot Placeholder",
    note: "Replace with real screenshot later.",
    token: "IMG",
  },
  evidence: {
    title: "Evidence Placeholder",
    note: "Replace with real documentation photo later.",
    token: "EVD",
  },
  documentation: {
    title: "Documentation Slot",
    note: "Reserved for curated project or event documentation.",
    token: "DOC",
  },
  demo: {
    title: "Demo Placeholder",
    note: "Reserved for a future interactive demo or recording.",
    token: "RUN",
  },
  certificate: {
    title: "Certificate Documentation Slot",
    note: "Use documentation photos, not raw certificates.",
    token: "CRT",
  },
};

function PlaceholderCore({
  kind,
  title,
  note,
  className,
}: PlaceholderBaseProps & { kind: PlaceholderKind }) {
  const copy = defaults[kind];

  return (
    <PixelPanel
      className={cn(
        "flex min-h-48 flex-col justify-between p-4",
        className,
      )}
      tone={kind === "demo" ? "green" : kind === "certificate" ? "amber" : "cyan"}
    >
      <div className="flex items-center justify-between gap-3">
        <StatusBadge label={kind} tone={kind === "certificate" ? "amber" : "cyan"} />
        <span className="font-mono text-xs text-foreground/40 terminal-cursor">
          asset_wait
        </span>
      </div>

      <div className="grid place-items-center py-6">
        <div className="relative grid h-20 w-20 place-items-center rounded-md border border-cyan-muted/25 bg-background/70 font-mono text-lg font-bold text-cyan-muted shadow-[var(--glow-cyan)]">
          <span className="absolute inset-2 rounded-sm border border-dashed border-cyan-muted/20 animate-[node-pulse_3.6s_ease-in-out_infinite]" />
          {copy.token}
        </div>
      </div>

      <div>
        <h3 className="font-mono text-sm font-semibold uppercase text-foreground">
          {title ?? copy.title}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-foreground/60">
          {note ?? copy.note}
        </p>
      </div>
    </PixelPanel>
  );
}

export function AssetFrame({
  src,
  alt,
  kind = "screenshot",
  title,
  note,
  className,
}: AssetFrameProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <PlaceholderCore
        kind={kind}
        title={title}
        note={note}
        className={className}
      />
    );
  }

  return (
    <PixelPanel className={cn("min-h-56 p-2", className)}>
      <div className="relative min-h-52 overflow-hidden rounded-sm border border-cyan-muted/20 bg-background/80">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 520px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
        <span
          className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-cyan-muted/10"
          aria-hidden="true"
        />
      </div>
    </PixelPanel>
  );
}

export function ScreenshotPlaceholder(props: PlaceholderBaseProps) {
  return <PlaceholderCore kind="screenshot" {...props} />;
}

export function EvidencePlaceholder(props: PlaceholderBaseProps) {
  return <PlaceholderCore kind="evidence" {...props} />;
}

export function DocumentationSlot(props: PlaceholderBaseProps) {
  return <PlaceholderCore kind="documentation" {...props} />;
}

export function ProjectDemoPlaceholder(props: PlaceholderBaseProps) {
  return <PlaceholderCore kind="demo" {...props} />;
}

export function CertificateDocumentationSlot(props: PlaceholderBaseProps) {
  return <PlaceholderCore kind="certificate" {...props} />;
}
