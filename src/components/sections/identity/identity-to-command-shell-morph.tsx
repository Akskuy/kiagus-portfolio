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
        className="absolute left-1/2 bottom-[4%] h-[24%] w-[min(64vw,42rem)] rounded-t-[18px] border border-cyan-muted/16 bg-[linear-gradient(180deg,rgba(16,25,35,0.54),rgba(2,5,8,0.92)_70%)] shadow-[0_26px_80px_rgba(0,0,0,0.6),inset_0_0_44px_rgba(113,217,210,0.07)]"
        style={{
          opacity: shell * 0.42,
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
      className="absolute left-1/2 top-[40%] h-[37%] w-[min(42vw,42.5rem)] overflow-hidden rounded-[14px] border border-cyan-muted/22 bg-[linear-gradient(180deg,rgba(14,25,33,0.74),rgba(3,7,10,0.94)_72%)] shadow-[0_32px_90px_rgba(0,0,0,0.62),inset_0_0_54px_rgba(113,217,210,0.08)]"
      style={{
        opacity: shell,
        transform: `translate3d(-50%, ${30 - consoleReady * 30 + dock * 2}px, 0) scale(${0.92 + consoleReady * 0.08})`,
      }}
    >
      <span className="absolute inset-2 rounded-[8px] border border-foreground/8" />
      <span className="absolute inset-0 micro-grid opacity-35" />
      <span className="absolute left-4 right-4 top-4 flex h-10 items-center rounded-[5px] border border-cyan-muted/16 bg-background/56 px-4 shadow-[inset_0_0_18px_rgba(113,217,210,0.05)]">
        <span className="h-2 w-2 rounded-[2px] bg-green-soft/80 shadow-[var(--glow-green)] animate-[node-pulse_3.3s_ease-in-out_infinite]" />
        <span className="ml-3 font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-cyan-muted/78">
          COMMAND CONSOLE
        </span>
        <span className="ml-auto rounded-[3px] border border-green-soft/14 bg-green-soft/7 px-2 py-1 font-mono text-[0.54rem] font-bold uppercase tracking-[0.16em] text-green-soft/72">
          STANDBY
        </span>
      </span>

      <span className="absolute left-6 right-6 top-[4.35rem] h-px bg-gradient-to-r from-transparent via-cyan-muted/38 to-transparent" />

      <span className="absolute left-6 right-6 top-[31%] flex h-[36%] items-center justify-center rounded-[8px] border border-cyan-muted/16 bg-[linear-gradient(135deg,rgba(113,217,210,0.08),rgba(5,10,14,0.6))] shadow-[inset_0_0_28px_rgba(113,217,210,0.06)]">
        <span className="absolute inset-2 rounded-[5px] border border-foreground/8" />
        <span className="relative rounded-[4px] border border-cyan-muted/16 bg-background/46 px-5 py-3 font-mono text-[0.72rem] font-bold uppercase tracking-[0.22em] text-cyan-muted/78 shadow-[inset_0_0_18px_rgba(113,217,210,0.04)]">
          MODULE PREVIEW READY
        </span>
      </span>

      <span className="absolute bottom-8 left-8 h-[17%] w-[34%] rounded-[6px] border border-cyan-muted/12 bg-cyan-muted/5 shadow-[inset_0_0_18px_rgba(113,217,210,0.04)]">
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

      <span className="absolute bottom-8 right-8 h-[17%] w-[34%] rounded-[6px] border border-cyan-muted/12 bg-background/42 shadow-[inset_0_0_18px_rgba(113,217,210,0.04)]">
        <span className="absolute left-4 right-4 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-cyan-muted/18 via-green-soft/18 to-transparent" />
        <span className="absolute left-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-[2px] bg-amber-soft/70 shadow-[var(--glow-amber)]" />
        <span className="absolute right-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-[2px] bg-cyan-muted/70 shadow-[var(--glow-cyan)]" />
      </span>

      <span className="absolute bottom-3 left-6 right-6 h-px bg-gradient-to-r from-transparent via-green-soft/28 to-transparent" />
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
