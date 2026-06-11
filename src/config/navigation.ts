export type RailSection = {
  id: string;
  index: number;
  label: string;
  status: "foundation" | "planned";
};

export const railSections: RailSection[] = [
  { id: "slide-1", index: 1, label: "Identity Snapshot", status: "planned" },
  { id: "slide-2", index: 2, label: "Capability Matrix", status: "planned" },
  { id: "slide-3", index: 3, label: "Knowledge Library", status: "planned" },
  { id: "slide-4", index: 4, label: "Experience District", status: "planned" },
  { id: "slide-5", index: 5, label: "Project Archive", status: "planned" },
  { id: "slide-6", index: 6, label: "Achievement Analytics", status: "planned" },
  { id: "slide-7", index: 7, label: "Knowledge Map", status: "planned" },
  { id: "slide-8", index: 8, label: "Future Laboratory", status: "planned" },
];

export const foundationRail: RailSection = {
  id: "global-environment",
  index: 0,
  label: "Global Environment",
  status: "foundation",
};
