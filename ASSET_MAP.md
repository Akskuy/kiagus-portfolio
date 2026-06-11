# ASSET MAP — KIAGUS PORTFOLIO

## Main Asset Rule

Do not use reference images as static backgrounds.

Reference images are visual guides only.

Build the website as real interactive components using:

* HTML
* CSS
* React components
* Tailwind utility classes
* Framer Motion animations
* GSAP scroll-driven motion
* SVG/canvas layers where useful
* responsive layouts
* hover states
* click states
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

---

# Reference Image Priority System

There are two types of reference images in this project:

1. Concept Board References
2. Clean Target References

These two reference types have different purposes.

## 1. Concept Board References

Path:

```text
public/reference/concept-board/
```

Concept board images may contain:

* phase labels
* guide panels
* interaction notes
* motion annotations
* transition explanations
* arrows
* process labels
* UI planning text
* instruction cards
* technical notes

Use concept-board images only to understand:

* animation phases
* transition ideas
* interaction logic
* object relationships
* motion direction
* system behavior
* scene progression
* how elements should feel alive

Do NOT copy concept-board labels into the final UI.

Do NOT render visible labels such as:

* PHASE A
* PHASE B
* PHASE C
* PHASE D
* VISUAL_HINT_ONLY
* PORTFOLIO_BOOT
* annotated interaction concept board
* monitor object locked
* instruction arrows
* explanatory guide panels
* interaction notes
* technical notes
* prompt labels
* process labels

These are development annotations, not final portfolio UI.

## 2. Clean Target References

Path:

```text
public/reference/clean-target/
```

Clean target images are the main visual truth for the final visible UI.

Use clean-target images to follow:

* final composition
* layout
* scale
* object placement
* visual density
* scene mood
* typography balance
* final visible UI structure
* spacing
* section atmosphere
* overall screenshot-like target

When concept-board and clean-target conflict, clean-target wins for final visible UI.

Final rule:

**Concept-board = understand how the section should move, transition, and behave.**
**Clean-target = understand how the section should look in the final website.**

---

# Required Folder Structure

Use this asset folder structure:

```text
public/
  reference/
    concept-board/
      slide-1-identity-snapshot-board.png
      slide-2-capability-matrix-board.png
      slide-3-knowledge-library-board.png
      slide-4-experience-district-board.png
      slide-5-project-archive-board.png
      slide-6-achievement-analytics-board.png
      slide-7-knowledge-map-board.png
      slide-8-future-laboratory-board.png

    clean-target/
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

---

# Main Files

## CV / Resume

Path:

```text
public/docs/kiagus-arif-rahman-resume.pdf
```

Use for:

* resume download button
* professional content reference
* contact information support

Do not parse the PDF visually inside the UI.
Use structured content from `CONTENT_SOURCE.md`.

## Avatar Source

Path:

```text
public/avatar/fotokiagus.jpeg
```

Use for:

* generating or styling Kiagus avatar
* pixel/stylized identity representation
* Slide 1 Identity Snapshot

Do not display it as a plain boring circular photo unless used as a fallback.
Integrate it into the pixel data interface.

---

# Slide Reference Assets

## Slide 1 — Identity Snapshot

Concept board:

```text
public/reference/concept-board/slide-1-identity-snapshot-board.png
```

Clean target:

```text
public/reference/clean-target/slide-1-identity-snapshot.png
```

Use concept board for:

* boot/preload concept
* phase logic
* interaction idea
* avatar click behavior
* monitor transition hook
* motion planning

Use clean target for:

* final visible composition
* centered avatar scene
* 3 info cards left
* 3 info cards right
* large name at top
* short subtitle
* bottom interaction bar
* final scale and spacing

Final Slide 1 must be rebuilt as:

* avatar component
* identity headline
* concise stat cards
* boot console if visually appropriate
* contact/interaction bar
* animated monitor hook
* flip avatar About panel
* animated data-center background

Do not show concept-board annotations in the final UI.

---

## Slide 2 — Capability Matrix

Concept board:

```text
public/reference/concept-board/slide-2-capability-matrix-board.png
```

Clean target:

```text
public/reference/clean-target/slide-2-capability-matrix.png
```

Use concept board for:

* terminal boot phases
* interaction model
* detail panel behavior
* transition from Slide 1 monitor
* transition into Slide 3 archive/library

Use clean target for:

* final command center composition
* terminal grid placement
* visual density
* clean user-facing UI
* scale and spacing

Final Slide 2 must be rebuilt as:

* capability terminal grid
* active terminal detail panel
* command center background
* cable/data stream animation
* terminal hover/click states
* scroll transition hook into Knowledge Library

Do not show concept-board annotations in the final UI.

---

## Slide 3 — Knowledge Library

Concept board:

```text
public/reference/concept-board/slide-3-knowledge-library-board.png
```

Clean target:

```text
public/reference/clean-target/slide-3-knowledge-library.png
```

Use concept board for:

* knowledge shelf interaction logic
* book/module click behavior
* course-to-skill reveal
* transition from terminal to archive
* transition from book page to city map

Use clean target for:

* final library composition
* shelf layout
* category/navigation placement
* knowledge module scale
* final visible UI hierarchy

Final Slide 3 must be rebuilt as:

* knowledge shelf component
* book/module cards
* category sidebar
* course-to-skill detail panels
* animated book opening transition

Do not show concept-board annotations in the final UI.

---

## Slide 4 — Experience District

Concept board:

```text
public/reference/concept-board/slide-4-experience-district-board.png
```

Clean target:

```text
public/reference/clean-target/slide-4-experience-district.png
```

Use concept board for:

* city interaction logic
* building hover/click behavior
* timeline reveal
* transition from book map
* transition into Project Archive

Use clean target for:

* final pixel city composition
* building placement
* visual density
* role detail area
* final scale and spacing

Final Slide 4 must be rebuilt as:

* experience building components
* animated city map
* role detail panel
* data roads
* timeline rail
* building-to-project transition

Do not show concept-board annotations in the final UI.

---

## Slide 5 — Project Archive

Concept board:

```text
public/reference/concept-board/slide-5-project-archive-board.png
```

Clean target:

```text
public/reference/clean-target/slide-5-project-archive.png
```

Use concept board for:

* project cartridge interaction
* scanner logic
* project detail viewer behavior
* architecture reveal behavior
* transition to Achievement Analytics

Use clean target for:

* final project archive composition
* cartridge layout
* scanner placement
* project viewer layout
* code snippet panel position
* screenshot/demo slot position

Final Slide 5 must be rebuilt as:

* project cartridge components
* project detail viewer
* animated architecture diagram
* code snippet panel
* screenshot placeholder
* demo placeholder
* scanner transition

Do not show concept-board annotations in the final UI.

---

## Slide 6 — Achievement Analytics

Concept board:

```text
public/reference/concept-board/slide-6-achievement-analytics-board.png
```

Clean target:

```text
public/reference/clean-target/slide-6-achievement-analytics.png
```

Use concept board for:

* achievement dashboard interaction
* metric reveal logic
* documentation slot behavior
* trophy analytics behavior
* transition to Knowledge Map

Use clean target for:

* final achievement dashboard composition
* trophy/metric layout
* documentation slot placement
* analytics museum mood
* final scale and spacing

Final Slide 6 must be rebuilt as:

* achievement cards
* trophy/metric dashboard
* documentation placeholders
* credibility panels
* animated counters
* node transition setup

Do not show concept-board annotations in the final UI.

---

## Slide 7 — Knowledge Map

Concept board:

```text
public/reference/concept-board/slide-7-knowledge-map-board.png
```

Clean target:

```text
public/reference/clean-target/slide-7-knowledge-map.png
```

Use concept board for:

* node interaction logic
* skill relationship behavior
* click/hover detail panel
* graph transition behavior
* convergence into final data core

Use clean target for:

* final node map composition
* cluster placement
* connection density
* center core placement
* final visual hierarchy

Final Slide 7 must be rebuilt as:

* knowledge node components
* animated edges
* node detail panel
* skill/course/project relationship map
* central data core transition

Do not show concept-board annotations in the final UI.

---

## Slide 8 — Future Laboratory

Concept board:

```text
public/reference/concept-board/slide-8-future-laboratory-board.png
```

Clean target:

```text
public/reference/clean-target/slide-8-future-laboratory.png
```

Use concept board for:

* final lab interaction
* CTA interaction behavior
* data core activation
* final completion state
* future roadmap behavior

Use clean target for:

* final laboratory composition
* data core placement
* CTA station layout
* roadmap card layout
* final closing mood

Final Slide 8 must be rebuilt as:

* future data core
* roadmap cards
* CTA buttons
* final contact panel
* lab background layers
* portfolio completion state

Do not show concept-board annotations in the final UI.

---

# Placeholder Asset Rules

If project screenshots are not available yet, create polished placeholders.

Use these future paths:

## Project screenshots

```text
public/projects/automated-clipping-screenshot.png
```

For:
Automated Clipping Website screenshot or dashboard preview.

```text
public/projects/skyholic-dashboard-screenshot.png
```

For:
Skyholic Universe Recruitment & Scoring System dashboard screenshot.

```text
public/projects/ar-tryon-preview.png
```

For:
Avalon AI AR Fashion Try-On preview.

```text
public/projects/umkm-survey-output.png
```

For:
Cooperative UMKM Survey Data output screenshot.

## Achievement documentation

```text
public/evidence/compfest-documentation.png
```

For:
COMPFEST documentation photo.

```text
public/evidence/iconic-documentation.png
```

For:
ICONIC IT documentation photo.

```text
public/evidence/bangkit-documentation.png
```

For:
Bangkit documentation photo.

Do not show certificates directly unless manually inserted by the portfolio owner.
Use documentation slots instead.

---

# Placeholder Component Requirements

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

---

# Asset Loading Rules

Use Next.js image optimization where possible.

For concept-board images:

* may be referenced by Codex for understanding animation/interaction planning
* should not be rendered in production UI
* should not appear as visible final UI
* should not be used as page background

For clean-target images:

* may be referenced by Codex to understand final layout
* should not be rendered as a full static background
* should not replace real components
* should guide composition only

For avatar:

* optimize image
* use stylized/pixel treatment through CSS/filter/mask/canvas if possible
* provide fallback image rendering

For evidence/project images:

* gracefully fallback to placeholder if missing
* do not break layout if file does not exist

---

# Suggested Component Mapping

## Global Components

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

## Slide 1 Components

* AvatarCore
* IdentityDashboard
* StatCard
* BootConsole
* ContactDock
* MonitorTransitionHook

## Slide 2 Components

* CapabilityTerminal
* CapabilityMatrix
* TerminalDetailPanel
* CommandCenterBackground

## Slide 3 Components

* KnowledgeShelf
* KnowledgeBook
* KnowledgeDetailPanel
* CourseSkillMapper

## Slide 4 Components

* ExperienceDistrict
* ExperienceBuilding
* ExperienceTimeline
* RoleDetailPanel
* DataRoad

## Slide 5 Components

* ProjectArchive
* ProjectCartridge
* ProjectScanner
* ProjectViewer
* ArchitectureDiagram
* CodeSnippetPanel

## Slide 6 Components

* AchievementDashboard
* AchievementCard
* TrophyMetricPanel
* DocumentationSlot

## Slide 7 Components

* KnowledgeMap
* KnowledgeNode
* NodeConnection
* NodeDetailPanel
* CentralDataCore

## Slide 8 Components

* FutureLaboratory
* FutureDataCore
* RoadmapPanel
* FinalCTAStation
* ContactActionButton

---

# Developer Reminder

Every time a section is built, verify:

1. Is the concept-board used only for animation/interactions?
2. Is the clean-target used as the final visual truth?
3. Are concept-board annotations excluded from the final UI?
4. Are major elements real components?
5. Are animation layers implemented?
6. Is the transition scroll-driven or prepared for scroll-driven motion?
7. Are important elements alive?
8. Are hover and click states implemented?
9. Is the layout responsive?
10. Are placeholders polished?
11. Is content sourced from `CONTENT_SOURCE.md`?
12. Is the section aligned with `MOTION_RULES.md`?
13. Does the section avoid becoming a generic text-heavy portfolio?
14. Does the section fit properly at 100% browser zoom?
