"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PixelPanel } from "@/components/ui/pixel-panel";

type IdentityDashboardProps = {
  isAboutOpen: boolean;
  onCloseAbout: () => void;
};

const profileCopy =
  "Undergraduate Data Science student with strong foundations in statistics, data systems, and AI problem formulation. Experienced in data processing, system design, AI-assisted development, workflow automation, and web-based solution implementation.";

export function IdentityDashboard({
  isAboutOpen,
  onCloseAbout,
}: IdentityDashboardProps) {
  return (
    <div className="grid gap-4">
      <PixelPanel className="p-5 md:p-6" tone="blue" active>
        <div>
          <p className="font-mono text-xs uppercase text-cyan-muted terminal-cursor">
            Data command profile
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-none text-foreground md:text-6xl">
            KIAGUS ARIF RAHMAN
          </h1>
          <p className="mt-4 font-mono text-base uppercase tracking-normal text-cyan-muted md:text-xl">
            Data Scientist <span className="text-foreground/40">·</span> AI
            Product Builder
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-green-soft">
            AI Builder with Strong Data Science Foundation
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/70 md:text-base">
            System Analyst mindset for building intelligent workflows,
            data-driven systems, and decision-support products.
          </p>
        </div>
      </PixelPanel>

      <PixelPanel className="p-5" tone="cyan">
        <h2 className="font-mono text-sm font-semibold uppercase text-cyan-muted">
          Professional Summary
        </h2>
        <p className="mt-4 text-sm leading-7 text-foreground/70 md:text-base">
          {profileCopy}
        </p>
      </PixelPanel>

      <AnimatePresence>
        {isAboutOpen ? (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <PixelPanel className="p-5" tone="green" active>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase text-green-soft terminal-cursor">
                    About Kiagus
                  </p>
                  <h2 className="mt-3 font-mono text-lg font-semibold uppercase text-foreground">
                    System reasoning owned by Kiagus
                  </h2>
                </div>
                <button
                  type="button"
                  aria-label="Close About Kiagus panel"
                  onClick={onCloseAbout}
                  className="grid h-9 w-9 place-items-center rounded-sm border border-cyan-muted/30 bg-background/70 text-cyan-muted outline-none focus-visible:ring-2 focus-visible:ring-cyan-muted/70"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>

              <p className="mt-4 text-sm leading-7 text-foreground/70">
                Kiagus designs system logic, data flow, scoring mechanisms,
                workflow automation, product architecture, and decision rules.
                AI-assisted development is used as an acceleration workflow
                while the system reasoning and technical direction remain owned
                by Kiagus.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Statistics",
                  "Data Systems",
                  "AI Problem Formulation",
                  "Workflow Automation",
                  "Product Logic",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-cyan-muted/25 bg-cyan-muted/10 px-2.5 py-1 font-mono text-xs uppercase text-cyan-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </PixelPanel>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
