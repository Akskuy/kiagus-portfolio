"use client";

import { Code2, FileText, Mail, Network } from "lucide-react";
import { motion } from "framer-motion";
import { PixelPanel } from "@/components/ui/pixel-panel";
import { cn } from "@/lib/cn";

const contacts = [
  {
    label: "GitHub",
    href: "https://github.com/Akskuy",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arifkiagus",
    icon: Network,
  },
  {
    label: "Email",
    href: "mailto:arifkiagus577@gmail.com",
    icon: Mail,
  },
  {
    label: "Resume",
    href: "/docs/kiagus-arif-rahman-resume.pdf",
    icon: FileText,
  },
];

export function ContactDock() {
  return (
    <PixelPanel className="p-3" tone="green">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;

          return (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.label === "Email" ? undefined : "_blank"}
              rel={contact.label === "Email" ? undefined : "noreferrer"}
              className={cn(
                "alive-border group relative isolate flex min-h-11 items-center justify-between gap-2 overflow-hidden rounded-sm border bg-surface-1/90 px-4 py-2 font-mono text-sm font-semibold uppercase text-cyan-muted outline-none",
                "shadow-[0_0_18px_rgba(113,217,210,0.1)] focus-visible:ring-2 focus-visible:ring-cyan-muted/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                index === 3 && "border-amber-soft/40 text-amber-soft",
                index === 2 && "border-green-soft/40 text-green-soft",
                index < 2 && "border-cyan-muted/40",
              )}
              initial={false}
              whileHover={{ y: -4, scale: 1.015, filter: "brightness(1.12)" }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent animate-[sweep-light_3.4s_linear_infinite]" />
              <span className="flex items-center gap-2">
                <Icon size={16} aria-hidden="true" />
                {contact.label}
              </span>
              <span className="h-1.5 w-1.5 rounded-[2px] bg-current opacity-80 animate-[node-pulse_2.6s_ease-in-out_infinite]" />
            </motion.a>
          );
        })}
      </div>
    </PixelPanel>
  );
}
