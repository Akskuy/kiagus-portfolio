"use client";

import Image from "next/image";
import { useState } from "react";
import { PixelPanel } from "@/components/ui/pixel-panel";
import { PremiumPlaceholder } from "@/components/ui/premium-placeholder";
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
    <PremiumPlaceholder
      className={cn("min-h-48", className)}
      icon={copy.token}
      label={kind}
      note={note ?? copy.note}
      title={title ?? copy.title}
      tone={kind === "demo" ? "green" : kind === "certificate" ? "amber" : "cyan"}
    />
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
