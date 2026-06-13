import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

type IdentityToCommandShellMorphProps = {
  floorShift: number;
  lanyardDock: number;
  panelCollapse: number;
  shellForm: number;
  titleMorph: number;
};

const consoleRows = Array.from({ length: 5 }, (_, index) => index);
const consoleNodes = Array.from({ length: 7 }, (_, index) => index);
const consoleModules = Array.from({ length: 6 }, (_, index) => index);
const wallRibs = Array.from({ length: 8 }, (_, index) => index);

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function IdentityToCommandShellMorph({
  floorShift,
  lanyardDock,
  panelCollapse,
  shellForm,
  titleMorph,
}: IdentityToCommandShellMorphProps) {
  const shell = clamp01(shellForm);
  const dock = clamp01(lanyardDock);
  const collapse = clamp01(panelCollapse);
  const ready = clamp01((shell - 0.72) / 0.28);
  const atmosphere = clamp01(shell * 0.9 + titleMorph * 0.15);
  const shellStyle = {
    opacity: shell,
    transform: `translate3d(0, ${(1 - shell) * 18 - dock * 6}px, 0) scale(${0.965 + shell * 0.035})`,
  } as CSSProperties;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[4] hidden overflow-hidden md:block"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(113,217,210,0.12),transparent_25rem),linear-gradient(180deg,rgba(3,5,8,0),rgba(2,4,7,0.62))]"
        style={{ opacity: atmosphere }}
      />

      <div className="absolute inset-x-[12%] top-[13%] h-[48%]" style={shellStyle}>
        <span className="absolute left-[7%] right-[7%] top-[5%] h-[76%] rounded-[3px] border border-cyan-muted/12 bg-surface-0/55 shadow-[inset_0_0_72px_rgba(113,217,210,0.07)]" />
        <CommandWallLeaf side="left" shell={shell} />
        <CommandWallLeaf side="right" shell={shell} />

        <span
          className="absolute left-1/2 top-[9%] h-[74%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-muted/45 to-transparent"
          style={{
            opacity: shell,
            transform: `translateX(-50%) scaleY(${0.45 + shell * 0.55})`,
          }}
        />

        {wallRibs.map((rib) => (
          <span
            className="absolute top-[14%] h-[58%] w-px rounded-full bg-gradient-to-b from-transparent via-cyan-muted/25 to-transparent"
            key={rib}
            style={{
              left: `${14 + rib * 10.2}%`,
              opacity: shell * (0.28 + (rib % 3) * 0.08),
              transform: `translateY(${(1 - shell) * (rib % 2 === 0 ? -12 : 12)}px) scaleY(${0.55 + shell * 0.45})`,
            }}
          />
        ))}
      </div>

      <CentralCommandConsole dock={dock} shell={shell} />

      <div
        className="absolute left-1/2 bottom-[8%] h-[28%] w-[min(64vw,42rem)] rounded-t-[18px] border border-cyan-muted/16 bg-[linear-gradient(180deg,rgba(16,25,35,0.54),rgba(2,5,8,0.92)_70%)] shadow-[0_26px_80px_rgba(0,0,0,0.6),inset_0_0_44px_rgba(113,217,210,0.07)]"
        style={{
          opacity: shell,
          transform: `translateX(-50%) perspective(900px) rotateX(${58 - floorShift * 11}deg) translateY(${(1 - shell) * 32}px) scale(${0.88 + shell * 0.12})`,
          transformOrigin: "50% 100%",
        }}
      >
        <span className="absolute inset-3 rounded-t-[12px] border border-foreground/8" />
        <span className="absolute left-[9%] right-[9%] top-[18%] h-px bg-gradient-to-r from-transparent via-cyan-muted/44 to-transparent" />
        <span className="absolute left-[16%] right-[16%] top-[42%] h-px bg-gradient-to-r from-transparent via-green-soft/24 to-transparent" />
        <span className="absolute left-[22%] right-[22%] top-[66%] h-px bg-gradient-to-r from-transparent via-cyan-muted/22 to-transparent" />

        {consoleRows.map((row) => (
          <span
            className="absolute left-[12%] h-2 rounded-sm border border-cyan-muted/10 bg-cyan-muted/10"
            key={row}
            style={{
              top: `${18 + row * 13}%`,
              width: `${18 + row * 7}%`,
              opacity: shell * (0.34 + row * 0.06),
            }}
          />
        ))}

        {consoleNodes.map((node) => (
          <span
            className="absolute h-2 w-2 rounded-[2px] bg-cyan-muted shadow-[var(--glow-cyan)] animate-[node-pulse_3.8s_ease-in-out_infinite]"
            key={node}
            style={{
              left: `${23 + node * 8.8}%`,
              top: `${26 + ((node * 17) % 48)}%`,
              opacity: shell * 0.72,
              animationDelay: `${node * 0.18}s`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-x-[8%] bottom-[2%] h-[42%] origin-bottom border-t border-cyan-muted/12 bg-[linear-gradient(rgba(113,217,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(113,217,210,0.1)_1px,transparent_1px)] bg-[length:54px_30px]"
        style={{
          opacity: shell * 0.46,
          transform: `perspective(880px) rotateX(${69 - floorShift * 7}deg) translateY(${28 - floorShift * 46}px) scaleX(${0.82 + floorShift * 0.22})`,
        }}
      />

      <div
        className={cn(
          "absolute right-[4.6%] bottom-[6%] rounded-[3px] border border-green-soft/18 bg-background/55 px-3 py-2 font-mono text-[0.58rem] font-bold uppercase tracking-[0.16em] text-green-soft/75 shadow-[0_0_22px_rgba(141,225,156,0.1)]",
          ready > 0.6 && "animate-[micro-breathe_3.4s_ease-in-out_infinite]",
        )}
        style={{
          opacity: ready,
          transform: `translate3d(${(1 - ready) * 10}px, 0, 0)`,
        }}
      >
        CAPABILITY MATRIX READY
      </div>

      <div
        className="absolute left-[6%] top-[20%] h-[62%] w-[9%] rounded-[3px] border border-cyan-muted/10 bg-surface-0/35 shadow-[inset_0_0_34px_rgba(113,217,210,0.06)]"
        style={{ opacity: collapse * shell * 0.45 }}
      />
      <div
        className="absolute right-[6%] top-[20%] h-[62%] w-[9%] rounded-[3px] border border-cyan-muted/10 bg-surface-0/35 shadow-[inset_0_0_34px_rgba(113,217,210,0.06)]"
        style={{ opacity: collapse * shell * 0.45 }}
      />
    </div>
  );
}

function CentralCommandConsole({
  dock,
  shell,
}: {
  dock: number;
  shell: number;
}) {
  const consoleReady = clamp01((shell - 0.18) / 0.82);

  return (
    <div
      className="absolute left-1/2 top-[42%] h-[27%] w-[min(58vw,39rem)] overflow-hidden rounded-[12px] border border-cyan-muted/20 bg-[linear-gradient(180deg,rgba(14,25,33,0.62),rgba(3,7,10,0.92)_72%)] shadow-[0_28px_80px_rgba(0,0,0,0.54),inset_0_0_44px_rgba(113,217,210,0.08)]"
      style={{
        opacity: shell,
        transform: `translate3d(-50%, ${24 - consoleReady * 24 - dock * 8}px, 0) scale(${0.88 + consoleReady * 0.12})`,
      }}
    >
      <span className="absolute inset-2 rounded-[8px] border border-foreground/8" />
      <span className="absolute inset-0 micro-grid opacity-35" />
      <span className="absolute left-4 right-4 top-3 flex h-8 items-center rounded-[4px] border border-cyan-muted/16 bg-background/52 px-3 shadow-[inset_0_0_16px_rgba(113,217,210,0.05)]">
        <span className="h-2 w-2 rounded-[2px] bg-green-soft/80 shadow-[var(--glow-green)] animate-[node-pulse_3.3s_ease-in-out_infinite]" />
        <span className="ml-3 font-mono text-[0.58rem] font-bold uppercase tracking-[0.18em] text-cyan-muted/72">
          COMMAND CONSOLE
        </span>
        <span className="ml-auto font-mono text-[0.52rem] font-bold uppercase tracking-[0.16em] text-green-soft/62">
          STANDBY
        </span>
      </span>

      <span className="absolute left-6 right-6 top-14 h-px bg-gradient-to-r from-transparent via-cyan-muted/38 to-transparent" />

      <span className="absolute left-6 top-[42%] h-[42%] w-[36%] rounded-[6px] border border-cyan-muted/14 bg-cyan-muted/6 shadow-[inset_0_0_20px_rgba(113,217,210,0.05)]">
        {consoleRows.map((row) => (
          <span
            className="absolute left-4 h-1.5 rounded-full bg-cyan-muted/24"
            key={row}
            style={{
              top: `${18 + row * 15}%`,
              width: `${42 + ((row * 19) % 36)}%`,
              opacity: 0.5 + consoleReady * 0.24,
            }}
          />
        ))}
      </span>

      <span className="absolute right-6 top-[42%] grid h-[42%] w-[44%] grid-cols-3 gap-2">
        {consoleModules.map((module) => (
          <span
            className="relative overflow-hidden rounded-[4px] border border-cyan-muted/12 bg-background/46 shadow-[inset_0_0_14px_rgba(113,217,210,0.04)]"
            key={module}
          >
            <span className="absolute left-2 top-2 h-1.5 w-1.5 rounded-[2px] bg-cyan-muted/60 shadow-[var(--glow-cyan)]" />
            <span className="absolute bottom-2 left-2 right-2 h-px bg-gradient-to-r from-cyan-muted/24 via-green-soft/18 to-transparent" />
            <span
              className="absolute left-2 right-2 top-1/2 h-px bg-cyan-muted/18"
              style={{ opacity: 0.45 + (module % 2) * 0.2 }}
            />
          </span>
        ))}
      </span>

      <span className="absolute bottom-3 left-6 right-6 h-px bg-gradient-to-r from-transparent via-green-soft/28 to-transparent" />
      <span className="absolute bottom-5 left-[18%] h-1.5 w-1.5 rounded-[2px] bg-amber-soft/70 shadow-[var(--glow-amber)]" />
      <span className="absolute bottom-5 right-[18%] h-1.5 w-1.5 rounded-[2px] bg-cyan-muted/70 shadow-[var(--glow-cyan)]" />
    </div>
  );
}

function CommandWallLeaf({
  shell,
  side,
}: {
  shell: number;
  side: "left" | "right";
}) {
  const direction = side === "left" ? -1 : 1;

  return (
    <span
      className={cn(
        "absolute top-[7%] h-[72%] w-[39%] overflow-hidden rounded-[4px] border border-cyan-muted/14 bg-[linear-gradient(135deg,rgba(113,217,210,0.1),rgba(6,10,15,0.84)_46%,rgba(8,14,18,0.94))] shadow-[inset_0_0_38px_rgba(113,217,210,0.07)]",
        side === "left" ? "left-[9%]" : "right-[9%]",
      )}
      style={{
        clipPath:
          side === "left"
            ? "polygon(0 0, 96% 0, 100% 100%, 0 100%)"
            : "polygon(4% 0, 100% 0, 100% 100%, 0 100%)",
        transform: `perspective(900px) rotateY(${direction * shell * -12}deg) translateX(${direction * shell * 24}px)`,
        transformOrigin: side === "left" ? "100% 50%" : "0% 50%",
      }}
    >
      <span className="absolute inset-2 rounded-[3px] border border-foreground/8" />
      <span className="absolute left-[12%] right-[12%] top-[18%] h-px bg-gradient-to-r from-transparent via-cyan-muted/35 to-transparent" />
      <span className="absolute left-[18%] right-[24%] top-[38%] h-px bg-gradient-to-r from-transparent via-green-soft/22 to-transparent" />
      <span className="absolute left-[24%] right-[18%] top-[62%] h-px bg-gradient-to-r from-transparent via-cyan-muted/24 to-transparent" />
      <span className="absolute bottom-4 left-4 h-2 w-2 rounded-[2px] bg-green-soft/80 shadow-[var(--glow-green)] animate-[node-pulse_3.5s_ease-in-out_infinite]" />
      <span className="absolute right-4 top-4 h-2 w-2 rounded-[2px] bg-cyan-muted/70 shadow-[var(--glow-cyan)] animate-[node-pulse_4s_ease-in-out_infinite]" />
    </span>
  );
}
