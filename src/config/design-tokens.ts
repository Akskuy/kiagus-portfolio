export const designTokens = {
  colors: {
    background: "#05070a",
    surface0: "#070b10",
    surface1: "#0b1118",
    surface2: "#101923",
    cyanMuted: "#71d9d2",
    tealMuted: "#3fb9aa",
    blueSoft: "#8bb9ff",
    amberSoft: "#f1b95a",
    greenSoft: "#8de19c",
  },
  radii: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  motion: {
    scrollProgressRange: [0, 1],
    ambientDuration: "5s to 18s",
    hoverDepth: "translate, glow, border trace, scan sweep",
    reducedMotion:
      "Heavy camera movement is disabled while cursor, glow, and lightweight UI state remain.",
  },
  typography: {
    body: "Professional system sans",
    ui: "Mono-inspired terminal accents",
  },
} as const;
