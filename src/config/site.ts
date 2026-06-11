export const siteConfig = {
  name: "Kiagus Arif Rahman",
  role: "Data Scientist | AI Product Builder",
  description:
    "Global portfolio system foundation for an immersive data and AI product website.",
  assets: {
    avatar: "/avatar/fotokiagus.jpeg",
    resume: "/docs/kiagus-arif-rahman-resume.pdf",
    references: [
      "/reference/slide-1-identity-snapshot.png",
      "/reference/slide-2-capability-matrix.png",
      "/reference/slide-3-knowledge-library.png",
      "/reference/slide-4-experience-district.png",
      "/reference/slide-5-project-archive.png",
      "/reference/slide-6-achievement-analytics.png",
      "/reference/slide-7-knowledge-map.png",
      "/reference/slide-8-future-laboratory.png",
    ],
    projectScreenshots: {
      automatedClipping: "/projects/automated-clipping-screenshot.png",
      skyholicDashboard: "/projects/skyholic-dashboard-screenshot.png",
      arTryOn: "/projects/ar-tryon-preview.png",
      umkmSurvey: "/projects/umkm-survey-output.png",
    },
    evidence: {
      compfest: "/evidence/compfest-documentation.png",
      iconic: "/evidence/iconic-documentation.png",
      bangkit: "/evidence/bangkit-documentation.png",
    },
  },
} as const;

export type AssetPath = string;
