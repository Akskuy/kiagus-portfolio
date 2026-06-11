# ASSET MAP — KIAGUS PORTFOLIO

## Main Asset Rule

Do not use reference images as static backgrounds.

Reference images are visual blueprints only.

Build the website as real interactive components using:

* HTML
* CSS
* React components
* Tailwind utility classes
* Framer Motion animations
* GSAP scroll-driven motion
* SVG/canvas layers where useful
* responsive layouts
* hover and click states
* animated panels
* animated data streams
* scroll-driven transitions

The reference images define:

* composition
* layout density
* visual hierarchy
* color mood
* UI direction
* motion inspiration
* section identity

They are not final website backgrounds.

## Required Folder Structure

Use this asset folder structure:

```text
public/
  reference/
    slide-1-identity-snapshot.png
    slide-2-capability-matrix.png
    slide-3-knowledge-library.png
    slide-4-experience-district.png
    slide-5-project-archive.png
    slide-6-achievement-analytics.png
    slide-7-knowledge-map.png
    slide-8-future-laboratory.png

  avatar/
    fotokiagus.jpeg

  docs/
    kiagus-arif-rahman-resume.pdf

  evidence/
    compfest-documentation.png
    iconic-documentation.png
    bangkit-documentation.png

  projects/
    automated-clipping-screenshot.png
    skyholic-dashboard-screenshot.png
    ar-tryon-preview.png
    umkm-survey-output.png
```

Files inside `evidence/` and `projects/` may not exist yet.
If they do not exist, use polished placeholder components.

Do not invent fake evidence images.

## Main Files

### CV / Resume

Path:

`public/docs/kiagus-arif-rahman-resume.pdf`

Use for:

* resume download button
* professional content reference
* contact information support

Do not parse the PDF visually inside the UI.
Use structured content from `CONTENT_SOURCE.md`.

### Avatar Source

Path:

`public/avatar/fotokiagus.jpeg`

Use for:

* generating or styling Kiagus avatar
* pixel/stylized identity representation
* Slide 1 Identity Snapshot

Do not display as a plain boring circular photo unless used as fallback.
Integrate it into the pixel data interface.

## Slide Reference Assets

### Slide 1 Reference

Path:

`public/reference/slide-1-identity-snapshot.png`

Used for:

* Identity Snapshot composition
* dark data center mood
* avatar center layout
* stat cards
* identity dashboard
* boot/preload interface direction

Must be rebuilt as:

* avatar component
* stat card components
* boot sequence
* identity panel
* contact buttons
* animated monitor
* scroll transition object

### Slide 2 Reference

Path:

`public/reference/slide-2-capability-matrix.png`

Used for:

* Capability Matrix composition
* command center atmosphere
* terminal grid
* capability panels
* interactive detail panel

Must be rebuilt as:

* terminal card grid
* active terminal detail panel
* cable data streams
* command center background
* scroll-controlled terminal expansion

### Slide 3 Reference

Path:

`public/reference/slide-3-knowledge-library.png`

Used for:

* Knowledge Library composition
* digital library shelf layout
* category navigation
* knowledge module panel
* course-to-skill mapping layout

Must be rebuilt as:

* knowledge shelf component
* book/module cards
* category sidebar
* course-to-skill detail panels
* book opening transition

### Slide 4 Reference

Path:

`public/reference/slide-4-experience-district.png`

Used for:

* Experience District composition
* pixel city map
* building-based experience UI
* timeline panel
* role detail dashboard

Must be rebuilt as:

* experience building components
* animated city map
* role detail panel
* data roads
* timeline rail
* building-to-project transition

### Slide 5 Reference

Path:

`public/reference/slide-5-project-archive.png`

Used for:

* Project Archive composition
* cartridge system
* technical viewer
* project scanner
* architecture panel
* code snippet panel
* screenshot placeholder layout

Must be rebuilt as:

* project cartridge components
* project detail viewer
* animated architecture diagram
* code snippet panel
* screenshot placeholder
* demo placeholder
* scanner transition

### Slide 6 Reference

Path:

`public/reference/slide-6-achievement-analytics.png`

Used for:

* Achievement Analytics composition
* trophy dashboard
* metric cards
* documentation slot layout
* analytics museum mood

Must be rebuilt as:

* achievement cards
* trophy/metric dashboard
* documentation placeholders
* credibility panels
* animated counters
* node transition setup

### Slide 7 Reference

Path:

`public/reference/slide-7-knowledge-map.png`

Used for:

* Knowledge Map composition
* node graph layout
* skill clusters
* connected data map
* relationship visual

Must be rebuilt as:

* knowledge node components
* animated edges
* node detail panel
* skill/course/project relationship map
* central data core transition

### Slide 8 Reference

Path:

`public/reference/slide-8-future-laboratory.png`

Used for:

* Future Laboratory composition
* final CTA layout
* central data core
* AI product roadmap
* closing dashboard

Must be rebuilt as:

* future data core
* roadmap cards
* CTA buttons
* final contact panel
* lab background layers
* portfolio completion state

## Placeholder Asset Rules

If project screenshots are not available yet, create polished placeholders.

Use these future paths:

### Project screenshots

`public/projects/automated-clipping-screenshot.png`

For:
Automated Clipping Website screenshot or dashboard preview.

`public/projects/skyholic-dashboard-screenshot.png`

For:
Skyholic Universe Recruitment & Scoring System dashboard screenshot.

`public/projects/ar-tryon-preview.png`

For:
Avalon AI AR Fashion Try-On preview.

`public/projects/umkm-survey-output.png`

For:
Cooperative UMKM Survey Data output screenshot.

### Achievement documentation

`public/evidence/compfest-documentation.png`

For:
COMPFEST documentation photo.

`public/evidence/iconic-documentation.png`

For:
ICONIC IT documentation photo.

`public/evidence/bangkit-documentation.png`

For:
Bangkit documentation photo.

Do not show certificates directly unless manually inserted by the portfolio owner.
Use documentation slots instead.

## Placeholder Component Requirements

Create these components:

* ScreenshotPlaceholder
* EvidencePlaceholder
* DocumentationSlot
* ProjectDemoPlaceholder
* CertificateDocumentationSlot

Each placeholder must look premium.

Do not use plain gray boxes.
Use a dark pixel panel with:

* animated border trace
* small label
* scanline overlay
* placeholder icon
* subtle breathing glow
* instruction text such as “Replace with real screenshot later”

## Asset Loading Rules

Use Next.js image optimization where possible.

For reference images:

* may be used inside internal developer/debug preview mode
* should not dominate production UI
* should not be visible as full static section background

For avatar:

* optimize image
* use stylized/pixel treatment through CSS/filter/mask/canvas if possible
* provide fallback image rendering

For evidence/project images:

* gracefully fallback to placeholder if missing
* do not break layout if file does not exist

## Suggested Component Mapping

### Global Components

* PixelPanel
* PixelButton
* SectionFrame
* AnimatedBorder
* ScanlineOverlay
* PixelGridBackground
* DataStream
* DataPacketLine
* BootSequence
* ScrollScene
* ParallaxLayer
* MotionLayer
* SectionProgressRail

### Slide 1 Components

* AvatarCore
* IdentityDashboard
* StatCard
* BootConsole
* ContactDock
* MonitorTransition

### Slide 2 Components

* CapabilityTerminal
* CapabilityMatrix
* TerminalDetailPanel
* CommandCenterBackground

### Slide 3 Components

* KnowledgeShelf
* KnowledgeBook
* KnowledgeDetailPanel
* CourseSkillMapper

### Slide 4 Components

* ExperienceDistrict
* ExperienceBuilding
* ExperienceTimeline
* RoleDetailPanel
* DataRoad

### Slide 5 Components

* ProjectArchive
* ProjectCartridge
* ProjectScanner
* ProjectViewer
* ArchitectureDiagram
* CodeSnippetPanel

### Slide 6 Components

* AchievementDashboard
* AchievementCard
* TrophyMetricPanel
* DocumentationSlot

### Slide 7 Components

* KnowledgeMap
* KnowledgeNode
* NodeConnection
* NodeDetailPanel
* CentralDataCore

### Slide 8 Components

* FutureLaboratory
* FutureDataCore
* RoadmapPanel
* FinalCTAStation
* ContactActionButton

## Developer Reminder

Every time a section is built, verify:

1. Is the reference image used as a blueprint, not a background?
2. Are major elements real components?
3. Are animation layers implemented?
4. Is the transition scroll-driven?
5. Are important elements alive?
6. Are hover and click states implemented?
7. Is the layout responsive?
8. Are placeholders polished?
9. Is content sourced from `CONTENT_SOURCE.md`?
10. Is the section aligned with `MOTION_RULES.md`?
