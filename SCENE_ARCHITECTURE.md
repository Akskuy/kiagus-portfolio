# SCENE ARCHITECTURE — ONE VIEWPORT CINEMATIC JOURNEY

## Deterministic Visual Blueprint for Kiagus Portfolio

## Locked Version: Global Rules + Scene 1 + Scene 2

---

# 0. Purpose of This File

This file defines the visual and cinematic architecture of the Kiagus Arif Rahman portfolio.

This file exists to prevent random AI layout invention.

The AI must not freely imagine scene layouts.

The AI must not create generic dashboard layouts.

The AI must not create ordinary web sections.

The AI must not create transitions that feel like scrolling down a PDF, Figma frame, presentation deck, or normal landing page.

The AI must build according to:

1. Clean-target reference images.
2. Locked scene visual regions.
3. Locked object roles.
4. Locked layout composition.
5. Locked transformation story.
6. Locked one-viewport experience rule.
7. Structured content from CONTENT_SOURCE.md.
8. Motion standards from MOTION_RULES.md.
9. Asset rules from ASSET_MAP.md.

If a generated idea conflicts with this file, this file wins.

If a generic design assumption conflicts with the clean-target image, the clean-target image wins.

If the AI is unsure, it must not improvise. It must stop and report what is unclear.

---

# 1. Scope of This Version

This version locks:

1. Global one-viewport cinematic architecture.
2. Global clean-target usage rule.
3. Global transition uniqueness rule.
4. Global anti-Figma-scroll rule.
5. Existing local component and file map.
6. Scene 1 — Identity Snapshot.
7. Scene 1 to Scene 2 cinematic morph.
8. Scene 2 — Capability Matrix.

Scenes 3 to 8 are not fully detailed in this version yet.

However, global one-viewport rules still apply to all future scenes.

Do not build Scene 3, Scene 4, Scene 5, Scene 6, Scene 7, or Scene 8 until their detailed architecture chapters are added.

Do not guess the final layout for future scenes.

Do not invent future scenes from general imagination.

---

# 2. Absolute One Viewport Rule

The entire portfolio must feel like one cinematic viewport.

The user may scroll, but the visual experience must not feel like normal page scrolling.

The browser viewport is the stage.

Scroll is only the timeline controller.

Correct experience:

User scrolls
→ viewport visually stays in one stage
→ objects transform inside the same screen
→ the scene changes

Wrong experience:

User scrolls
→ page moves down
→ new section appears below
→ it feels like reading a PDF, Figma frame, or normal website

The wrong experience is forbidden.

If a transition feels like scrolling down a PDF, Figma prototype, slide deck, or normal web page, the implementation is considered failed and must be revised.

---

# 3. Forbidden Scroll Feeling

The user must never feel:

“I am scrolling down to the next slide.”

The user must feel:

“I am controlling a cinematic transformation inside one screen.”

The following patterns are forbidden:

* Slide 1 appears, then user scrolls down to Slide 2 below.
* Scene changes by simply moving the viewport vertically.
* Scene 2 starts below Scene 1 like a stacked section.
* A new large block appears underneath the previous scene.
* The user can see a normal webpage scroll rhythm.
* The page feels like a Figma prototype with frames stacked vertically.
* The page feels like scrolling a PDF.
* The page feels like scrolling through PowerPoint slides.

The only acceptable pattern:

* The stage stays visually fixed.
* Old objects transform.
* New objects form.
* The final scene appears inside the same viewport.

---

# 4. Scroll Timeline Rule

Scroll controls animation progress.

Scroll may control:

* object position
* object scale
* object depth
* object docking
* object collapse
* object expansion
* title transformation
* scene lighting
* background reconstruction
* panel morphing
* environment transformation
* camera depth
* final scene reveal

Scroll must not primarily control:

* normal vertical page movement
* ordinary section reveal
* standard slide-up transition
* standard fade-in section
* page-to-page movement
* stacked landing page flow

The scroll distance may exist technically, but visually the stage should feel pinned.

---

# 5. Pinned Stage Architecture Rule

The portfolio should use a pinned or sticky stage architecture.

Recommended visual structure:

CinematicJourney
→ PinnedJourneyStage
→ Scene Objects
→ Transition/Morph Layers
→ Final Scene State

The outer container may provide scroll distance.

The inner stage must visually behave like:

* fixed viewport
* sticky stage
* 100svh visual screen
* overflow hidden
* objects moving inside the viewport

The user must not see separate stacked scenes below.

---

# 6. Clean Target Is Visual Law

Every scene must follow its clean-target reference image.

Clean-target files live at:

public/reference/clean-target/

Known references:

Scene 1:

public/reference/clean-target/slide-1-identity-snapshot.png

Scene 2:

public/reference/clean-target/slide-2-capability-matrix.png

Scene 3:

public/reference/clean-target/slide-3-knowledge-library.png

Scene 4:

public/reference/clean-target/slide-4-experience-district.png

Scene 5:

public/reference/clean-target/slide-5-project-archive.png

Scene 6:

public/reference/clean-target/slide-6-achievement-analytics.png

Scene 7:

public/reference/clean-target/slide-7-knowledge-map.png

Scene 8:

public/reference/clean-target/slide-8-future-laboratory.png

Clean-target defines:

* final layout
* visual hierarchy
* object placement
* object size relationship
* background environment
* UI density
* scene silhouette
* atmosphere
* primary visual metaphor
* final scene identity

Clean-target is not a static background.

The website must be built using real components.

But the result must visually reconstruct the clean-target composition.

The AI must not replace clean-target with:

* generic dashboard
* ordinary web card grid
* random terminal layout
* improvised command center
* plain Tailwind layout
* basic portfolio section
* random sci-fi layout
* design that is easier to code but visually wrong

If final state does not resemble clean-target, the scene is rejected.

---

# 7. Concept Board Rule

Concept-board references live at:

public/reference/concept-board/

Concept-board images may contain:

* arrows
* guide labels
* phase labels
* process explanations
* interaction notes
* motion notes
* technical planning text

Use concept-board only for:

* motion idea
* interaction logic
* transformation relationship
* scene phase planning
* object transition inspiration

Do not copy concept-board annotations into final UI.

Forbidden visible final UI labels include:

* PHASE A
* PHASE B
* PHASE C
* PHASE D
* VISUAL_HINT_ONLY
* PORTFOLIO_BOOT
* interaction concept board
* instruction arrows
* guide notes
* technical notes
* planning captions

If concept-board conflicts with clean-target:

Clean-target wins.

---

# 8. Existing Local Component and File Map

The project already contains local files and components that should be reused or respected.

Codex can inspect local files directly.

The AI should not invent duplicate components if existing components can be reused or extended.

## 8.1 Journey Architecture Files

Current known journey files:

* src/components/journey/cinematic-journey.tsx
* src/components/journey/pinned-journey-stage.tsx
* src/components/journey/use-cinematic-scroll-progress.ts

Role:

CinematicJourney:

* owns the outer journey scroll distance
* wraps the pinned visual stage
* should keep the one-viewport journey architecture

PinnedJourneyStage:

* represents the sticky/pinned viewport
* should keep the visual scene inside one screen
* should not behave like a normal stacked section

useCinematicScrollProgress:

* provides scroll progress
* should be used as the timeline controller
* must not cause hydration errors
* should remain browser-safe

Important:

Do not replace these with ordinary stacked sections.

Do not make app/page.tsx return a normal vertical list of scenes.

## 8.2 Scene 1 Known Files

Known Scene 1 files include:

* src/components/sections/identity/identity-snapshot-section.tsx
* src/components/sections/identity/avatar-core.tsx
* src/components/sections/identity/identity-stat-card.tsx
* src/components/sections/identity/identity-boot-preloader.tsx
* src/components/sections/identity/contact-dock.tsx

Known UI support files include:

* src/components/ui/interactive-reveal-panel.tsx
* src/components/ui/animated-border.tsx
* src/components/ui/status-led.tsx
* src/components/ui/scanner-beam.tsx
* src/components/ui/data-packet-line.tsx
* src/components/ui/icon-tile.tsx
* src/components/ui/micro-label.tsx
* src/components/ui/pixel-separator.tsx
* src/components/ui/premium-placeholder.tsx
* src/components/ui/pixel-button.tsx
* src/components/ui/pixel-panel.tsx
* src/components/ui/scanline-overlay.tsx
* src/components/ui/status-badge.tsx
* src/components/ui/placeholders.tsx

These components may be reused or improved.

Do not duplicate them with similar names unless necessary.

If a component’s role changes, update it intentionally.

## 8.3 Global Files

Known global files:

* app/page.tsx
* app/globals.css
* PROJECT_BRIEF.md
* SECTION_PLAN.md
* MOTION_RULES.md
* ASSET_MAP.md
* CONTENT_SOURCE.md
* SCENE_ARCHITECTURE.md

Rules:

* app/page.tsx should preserve the one-viewport journey.
* app/globals.css may contain shared visual and motion utilities.
* CONTENT_SOURCE.md is the truth for portfolio text.
* ASSET_MAP.md is the truth for asset paths.
* MOTION_RULES.md is the truth for animation behavior standards.
* SCENE_ARCHITECTURE.md is the truth for scene layout and transformation structure.

---

# 9. Technical Detail Boundary

This file may specify:

* component names
* file paths
* local component roles
* visual responsibilities
* object roles
* scene structure
* scene regions
* motion story
* progress phases conceptually
* transition hooks
* final scene requirements

This file should not over-specify:

* exact TypeScript state names
* exact transform math
* exact GSAP timeline code
* exact Framer Motion variants
* exact CSS values for every pixel
* exact function bodies

Coding implementation details belong in Codex task prompts.

Visual and architectural requirements belong in this file.

---

# 10. Global Build Order

For every scene, build in this order:

1. Match the clean-target final composition.
2. Lock the main scene objects.
3. Place objects in correct viewport regions.
4. Establish correct visual hierarchy.
5. Add subtle idle motion.
6. Add one-viewport morph from previous scene.
7. Add interaction states.
8. Add detail content.
9. Polish.

Never add detailed text before layout is correct.

Never add interaction before object layout is correct.

Never add long descriptions while panels/modules are still mispositioned.

Never add terminal details while terminal layout is wrong.

Never polish effects before the final composition matches clean-target.

---

# 11. Global Visual Style Lock

The portfolio visual style must be:

* dark
* premium
* mature
* restrained
* technical
* cinematic
* pixel-game inspired
* low-noise
* readable
* professional
* custom-built

Allowed color family:

* near black
* dark navy
* deep teal
* muted cyan
* soft emerald
* controlled amber / warm gold only for small LEDs or accent details

Avoid:

* rainbow neon
* cheap cyberpunk
* too many bright colors
* random beams
* excessive glow
* childish game UI
* noisy sci-fi labels
* cluttered overlays
* generic dashboard look
* plain Tailwind cards

Premium means:

* controlled
* intentional
* readable
* visually expensive
* not crowded
* not empty
* not random

---

# 12. Global Transition Uniqueness Rule

Do not reuse one animation concept too many times.

No single major transition concept may be used more than 2 times across the whole portfolio.

For example:

* Do not use “zoom into object” for every scene.
* Do not use “object opens like a portal” for every scene.
* Do not use “cards collapse into next cards” for every scene.
* Do not use “nodes converge” repeatedly.
* Do not use “scanner analyzes object” repeatedly.
* Do not use “panels slide away” repeatedly.

Each transition should have its own visual identity based on the objects of that scene.

Allowed maximum reuse:

A transition family may appear at most 2 times, and only if the visual execution is meaningfully different.

Examples of transition family categories:

1. Room morph / environment reconstruction.
2. Object docking / access key transformation.
3. Terminal compression / archive conversion.
4. Book opening / map extrusion.
5. Building collapse / cartridge formation.
6. Cartridge scan / analytics formation.
7. Trophy fragmentation / node graph formation.
8. Node convergence / data core formation.

The AI must track transition variety.

If the next transition feels visually too similar to a previous one, it must be redesigned.

---

# 13. Viewport Region System

The viewport is a fixed stage.

Approximate global regions:

Top title region:

* x: 20% to 80%
* y: 3% to 14%

Upper center region:

* x: 30% to 70%
* y: 14% to 28%

Main center region:

* x: 28% to 72%
* y: 22% to 70%

Left content region:

* x: 5% to 35%
* y: 25% to 78%

Right content region:

* x: 65% to 95%
* y: 25% to 78%

Bottom control/environment region:

* x: 15% to 85%
* y: 68% to 95%

Far left environment:

* x: 0% to 12%
* y: 10% to 95%

Far right environment:

* x: 88% to 100%
* y: 10% to 95%

Rules:

* Important text must not touch viewport edges.
* Titles must not be clipped.
* Main objects must fit at 100% browser zoom.
* Final state must fit inside one viewport.
* The user must not need to zoom out.
* No object should cover another object unless intentionally layered.
* Layering must not destroy readability.

---

# 14. Scene 1 — Identity Snapshot

Clean target:

public/reference/clean-target/slide-1-identity-snapshot.png

Concept board:

public/reference/concept-board/slide-1-identity-snapshot-board.png

## 14.1 Scene Purpose

Scene 1 introduces Kiagus identity.

It is the identity room.

It is not a normal hero section.

It is not a landing page intro.

It is a premium identity snapshot stage.

The user should immediately understand:

* who Kiagus is
* what his positioning is
* that this is a premium technical portfolio
* that the interface is interactive
* that the whole portfolio is a cinematic system

## 14.2 Scene 1 Required Visual Composition

Scene 1 must follow this composition:

Top title region:

* Large title:
  KIAGUS ARIF RAHMAN

Subtitle below title:

* Data Scientist • AI Product Builder • AI Builder

Supporting line:

* Strong Data Science foundation for intelligent workflows and AI products.

Center region:

* Premium lanyard / identity card
* Real Kiagus portrait
* Visible strap / clip / hook
* Physical premium object feeling
* Front face mainly photo
* Back face contains About Kiagus information

Left content region:

* 3 identity panels stacked vertically
* positioned left of lanyard
* readable
* visually rich
* not plain cards

Right content region:

* 3 identity panels stacked vertically
* positioned right of lanyard
* readable
* visually rich
* not plain cards

Background:

* dark data-center / monitor-wall room
* subtle monitor panels
* perspective floor grid
* ambient particles
* controlled teal/cyan glow
* not empty
* not too noisy

Bottom region:

* no large bottom dock
* no large footer bar
* no big instruction row

## 14.3 Scene 1 Content Panels

Left panels:

1. Data Science Student
2. Project-Based Experience
3. National-Level Achievement

Right panels:

4. Leadership Experience
5. End-to-End Data Workflow
6. System Design & AI Solutions

Panel rules:

* title-first structure
* reveal details through non-basic interaction
* use InteractiveRevealPanel or equivalent
* no basic accordion
* no plain dropdown
* no normal web card style
* every panel must include premium chrome, LEDs, icon tile, corner brackets, micro labels, or similar

## 14.4 Lanyard Rules

The lanyard is the main hero object in Scene 1.

Required:

* real portrait from public/avatar/fotokiagus.jpeg
* visible card body
* visible strap or lanyard cord
* visible top clip/hook
* premium collectible identity pass feel
* dark polished frame
* subtle 3D/depth feeling
* controlled idle motion
* clickable/tappable About behavior

Front face:

* mainly photo
* minimal decorative UI only
* no long text
* no clutter

Back face:

* About Kiagus
* concise identity summary
* supporting chips
* same object footprint
* does not open as detached modal
* does not drop too low

## 14.5 Scene 1 Component Map

Primary components:

* IdentitySnapshotSection
  File: src/components/sections/identity/identity-snapshot-section.tsx
  Role: owns the Scene 1 visual layout.

* AvatarCore
  File: src/components/sections/identity/avatar-core.tsx
  Role: renders lanyard/photo card/front-back behavior.

* IdentityStatCard
  File: src/components/sections/identity/identity-stat-card.tsx
  Role: renders side identity panel modules.

* IdentityBootPreloader
  File: src/components/sections/identity/identity-boot-preloader.tsx
  Role: preloader/boot sequence before Scene 1 fully activates.

* InteractiveRevealPanel
  File: src/components/ui/interactive-reveal-panel.tsx
  Role: non-basic reveal behavior for side panels.

Supporting UI:

* AnimatedBorder
* StatusLED
* ScanlineOverlay
* IconTile
* MicroLabel
* PixelPanel
* PixelButton
* PremiumPlaceholder

Rules:

* Do not replace IdentitySnapshotSection with a normal hero section.
* Do not replace AvatarCore with a plain image.
* Do not remove lanyard front/back behavior.
* Do not remove preloader unless explicitly requested.
* Do not bring back the large bottom dock.

## 14.6 Scene 1 Accepted Normal State

Scene 1 normal state is accepted only if:

* lanyard photo card is central and premium
* real portrait is visible
* side panels are readable
* title is not clipped
* bottom dock is absent
* UI feels premium
* no transition labels dominate the scene
* it follows slide-1 clean-target composition

---

# 15. Scene 1 to Scene 2 Transition

Transition name:

Identity Room → Capability Command Center

Transition family:

Room morph / object role conversion

This transition family can be used again only one more time maximum in the whole portfolio, and only with a different visual execution.

## 15.1 Main Transition Story

Scene 1 represents identity.

Scene 2 represents capability.

The transition must feel like:

Identity room transforms into command center.

The lanyard identity object becomes an access badge/key.

The side identity panels become terminal panels.

The monitor wall becomes command center architecture.

The title changes from identity title to capability title.

The floor shifts into a command-room perspective.

The final state must match Scene 2 clean-target.

## 15.2 What Must Not Happen

The transition must not feel like:

* scrolling down to Slide 2
* Figma frame scroll
* PDF scroll
* a new section appearing below
* a basic fade between scenes
* a simple slide
* a simple zoom
* a simple panel tilt
* random scan lines
* data lines
* labels saying “next”
* a button-triggered manual transition

If it feels like a vertical scroll to another section, it is failed.

If it only looks like Slide 1 objects are tilted, it is failed.

If Scene 2 final state ignores clean-target, it is failed.

## 15.3 Transition Progress Story

The exact implementation can vary, but the visual story must follow this structure.

### Progress 0.00 to 0.20 — Identity Stable

Visible state:

* Scene 1 normal
* Kiagus title large
* lanyard is hero object
* six identity panels are left/right
* identity room background visible

No Scene 2 elements should dominate yet.

### Progress 0.20 to 0.40 — Identity Modules Begin Conversion

Visual behavior:

* side identity panels start changing role
* panels should compress, reshape, or reorganize
* they begin preparing to become capability terminal panels
* panel text may reduce in prominence
* icon/glyph areas may begin forming
* lanyard begins to reduce dominance
* background monitor wall begins to feel deeper

Not allowed:

* only fading panels
* only tilting panels
* only sliding panels out

### Progress 0.40 to 0.60 — Access Docking and Title Shift

Visual behavior:

* lanyard scales down
* lanyard docks away from central hero dominance
* lanyard becomes access badge/key/token
* title begins transitioning away from KIAGUS ARIF RAHMAN
* CAPABILITY MATRIX title begins forming
* monitor wall starts reconstructing into command-center room

Not allowed:

* lanyard staying as huge central hero
* lanyard blocking future terminal grid
* title clipping at top

### Progress 0.60 to 0.80 — Command Center Formation

Visual behavior:

* six capability terminal positions form
* terminal panels begin settling into 2x3 grid
* command desk starts forming at bottom
* left/right server racks become clearer
* background becomes command center
* lighting shifts from identity-room mood to command-room mood

Not allowed:

* six tiny side strips
* central empty console dominating everything
* terminals hidden at far edges
* lanyard blocking center

### Progress 0.80 to 1.00 — Scene 2 Final State

Final state must clearly match slide-2 clean-target.

Visible state:

* CAPABILITY MATRIX title rail at top
* six large terminal panels in 2x3 grid
* command desk / keyboard at bottom
* server racks / monitor walls left and right
* lanyard only as small access badge/token
* no long descriptions yet unless explicitly requested
* no Scene 3 content

## 15.4 Transition Hook Quality

The transition hook is the moment the viewer understands:

“Identity has been converted into capability.”

This hook should come from object role change, not from explanatory text.

Acceptable hook examples:

* lanyard docks into command desk or title rail as access token
* identity panels become terminal panels
* monitor wall opens into command room
* title morphs to Capability Matrix
* desk/control surface forms from floor/background geometry

Forbidden hook examples:

* “NEXT: CAPABILITY MATRIX” button
* glowing data lines
* random scan labels
* click trigger
* ordinary scroll arrow

---

# 16. Scene 2 — Capability Matrix

Clean target:

public/reference/clean-target/slide-2-capability-matrix.png

Concept board:

public/reference/concept-board/slide-2-capability-matrix-board.png

## 16.1 Scene Purpose

Scene 2 shows Kiagus capabilities.

It is a command center.

It must not be a generic skills section.

It must not be a normal dashboard.

It must not be a central empty console with tiny side sockets.

It must not be six small labels on the sides.

It must visually follow the clean-target command center reference.

The user should immediately understand:

* this is a capability command center
* there are six major capability modules
* the scene is structured like a premium pixel command room
* the six terminals are the main focus

## 16.2 Scene 2 Clean-Target Visual Summary

The clean-target shows:

* title panel at top
* 6 large terminal panels arranged 2 rows x 3 columns
* each terminal has a large icon/glyph
* each terminal has a readable capability label
* server racks / monitor stacks on the left and right
* bottom command desk / keyboard / control surface
* dark pixel command-room environment
* restrained teal/cyan lighting
* small warm LED accents

This must be reconstructed with real components.

## 16.3 Scene 2 Required Final Layout

Scene 2 final state must have these regions:

### Top Region

Content:

* CAPABILITY MATRIX title
* centered inside title rail
* title rail should look like command center signage

Placement:

* x: 25% to 75%
* y: 3% to 10%

Rules:

* title must fit
* title must not clip
* title must not touch viewport top
* title should visually match clean-target header style

### Main Terminal Grid Region

Content:

* six large terminal panels
* arranged in 2 rows x 3 columns
* terminal grid is the main focus

Placement:

* x: 22% to 78%
* y: 15% to 60%

Grid:

Top row:

1. Statistical Thinking
2. AI Product Logic
3. Data Workflow

Bottom row:

4. System Analysis
5. Web-Based Solution
6. Leadership & Team Direction

Rules:

* terminals must be large
* terminals must be readable
* terminals must not be thin strips
* terminals must not be side-only sockets
* terminals must not be placed too far left/right
* terminals must visually dominate Scene 2
* terminals should feel like selectable command modules

### Bottom Command Desk Region

Content:

* command desk / keyboard / control surface
* keyboard center
* left control panel
* right control buttons
* small LED indicators
* command surface frame

Placement:

* x: 15% to 85%
* y: 68% to 92%

Rules:

* desk must visibly read as a physical command desk
* desk must support command center silhouette
* desk must not cover terminal grid
* desk must not become the main content over terminals

### Left Server Rack Region

Content:

* server racks
* stacked small monitor panels
* tiny LED lights
* dark machinery
* teal/cyan small displays
* tiny warm light details

Placement:

* x: 3% to 18%
* y: 12% to 90%

Rules:

* server rack is environment
* server rack must not compete with main terminal grid
* server rack must support depth

### Right Server Rack Region

Content:

* server racks
* stacked small monitor panels
* tiny LED lights
* dark machinery
* teal/cyan small displays
* tiny warm light details

Placement:

* x: 82% to 97%
* y: 12% to 90%

Rules:

* same as left server rack
* environment only
* not main content

### Lanyard Access Token Region

Content:

* small docked access badge / identity token

Allowed placement options:

Option A:

* integrated into command desk

Option B:

* small dock under title rail

Option C:

* tiny access badge near one corner of terminal grid

Rules:

* lanyard must not be central hero
* lanyard must not cover terminal panels
* lanyard must not block icons
* lanyard must not sit inside the middle of the 2x3 grid
* lanyard must not outrank the six terminals
* if lanyard harms the composition, make it smaller or integrate it into the desk

## 16.4 Scene 2 Terminal Content

The six terminals must use this exact content.

### Terminal 1

Title:

STATISTICAL THINKING

Command:

RUN_STATISTICAL_LOGIC

Icon:

bar chart / statistics bars

Position:

top row, column 1

### Terminal 2

Title:

AI PRODUCT LOGIC

Command:

RUN_AI_PRODUCT_FLOW

Icon:

brain / AI node / circuit brain

Position:

top row, column 2

### Terminal 3

Title:

DATA WORKFLOW

Command:

RUN_DATA_PIPELINE

Icon:

database / stacked cylinder / data stack

Position:

top row, column 3

### Terminal 4

Title:

SYSTEM ANALYSIS

Command:

RUN_SYSTEM_ANALYSIS

Icon:

gear / system diagram / connected process

Position:

bottom row, column 1

### Terminal 5

Title:

WEB-BASED SOLUTION

Command:

RUN_WEB_SOLUTION

Icon:

web frame / browser window / interface grid

Position:

bottom row, column 2

### Terminal 6

Title:

LEADERSHIP & TEAM DIRECTION

Command:

RUN_TEAM_DIRECTION

Icon:

team / group / leadership node

Position:

bottom row, column 3

## 16.5 Terminal Panel Visual Rules

Each terminal panel must include:

* large icon/glyph
* readable title
* small command label
* subtle LED/status indicator
* premium pixel frame
* inset depth
* corner brackets
* restrained glow
* subtle active/standby state

Each terminal panel must not include at first:

* long description
* paragraph
* many tags
* active detail content
* scrolling text block

Long descriptions and detail interactions come later.

The first goal is clean visual composition.

## 16.6 Scene 2 Wrong Layouts

The following Scene 2 layouts are forbidden:

* central console dominates everything
* six tiny side sockets
* terminals are thin horizontal strips
* terminals are unreadable
* terminal titles are tiny
* lanyard blocks the terminal grid
* lanyard remains central hero
* command desk is missing
* server rack environment is missing
* scene looks like a blank dashboard
* scene looks like debug placeholder UI
* scene looks like generic SaaS dashboard
* scene ignores clean-target
* capability modules are only labels with no icons
* 2x3 terminal grid is absent

If any of these happen, Scene 2 is not accepted.

## 16.7 Scene 2 Component Map

Scene 2 currently may not have final dedicated components yet.

Expected or allowed component responsibilities:

CapabilityMatrixScene or equivalent:

* owns Scene 2 final composition inside the pinned journey

CapabilityTerminalPanel or equivalent:

* renders one large terminal in 2x3 grid

CapabilityTerminalGrid or equivalent:

* arranges six terminals in 2 rows x 3 columns

CommandDesk or equivalent:

* renders bottom keyboard/control surface

ServerRackWall or equivalent:

* renders left/right server rack environment

DockedAccessBadge or equivalent:

* renders the small lanyard/access token in Scene 2 final state

Important:

If these components do not exist yet, Codex may create them.

But Codex must not create a layout that ignores this blueprint.

Do not create only tiny side sockets as a substitute for CapabilityTerminalPanel.

Do not use a central console as a substitute for the 2x3 terminal grid.

## 16.8 Scene 2 Motion Direction

Scene 2 stable state should have subtle life:

* terminal LEDs pulse softly
* tiny monitor lights flicker in server racks
* command desk LEDs blink gently
* terminal borders have subtle energy
* background has minor ambient movement
* title rail has restrained glow

Scene 2 motion must not be:

* noisy
* colorful
* chaotic
* full of random scan lines
* cheap sci-fi
* overpowering the terminal grid

Detailed animation implementation belongs in MOTION_RULES.md and Codex prompts.

This file only defines the direction.

## 16.9 Scene 2 Stable Default State

Scene 2 stable final state should show:

* all six terminals visible
* no terminal detail opened yet
* terminals readable
* title visible
* desk visible
* server racks visible
* lanyard small or docked
* no long descriptions

The user should not need to click anything to understand the scene.

Interaction details will be built later.

---

# 17. Scene 2 Acceptance Checklist

Scene 2 is accepted only if all of these are true:

1. It resembles the clean-target image.
2. CAPABILITY MATRIX title is visible and not clipped.
3. The 2x3 terminal grid is present.
4. The six terminal panels are large and readable.
5. Each terminal has a large icon/glyph.
6. Each terminal has a capability title.
7. Each terminal has a small command label.
8. Server racks or monitor walls exist on left and right.
9. Bottom command desk / keyboard area exists.
10. Lanyard is only a small docked access badge/token.
11. Lanyard does not block the terminal grid.
12. Scene does not look like central console with tiny side strips.
13. Scene does not look like a blank debug shell.
14. Scene does not look like normal dashboard.
15. Scene fits inside one viewport.
16. The transition into this state does not feel like scrolling down.
17. The scene remains premium, dark, restrained, and low-noise.
18. No Scene 3 content appears.

If any item fails, Scene 2 must be revised.

---

# 18. Scene 1 to Scene 2 Acceptance Checklist

The Scene 1 to Scene 2 morph is accepted only if:

1. The viewport stays visually fixed.
2. It does not feel like scrolling down a page.
3. It does not feel like Figma frame scroll.
4. Scene 1 starts as approved Identity Snapshot.
5. Scene 2 ends as clean-target Capability Matrix.
6. Kiagus title transitions away or compresses.
7. CAPABILITY MATRIX title appears in the same viewport.
8. Lanyard changes role from hero object to small access token.
9. Side identity panels transform into or reveal terminal structures.
10. Monitor wall reconstructs into command center environment.
11. Command desk appears.
12. Six 2x3 terminals appear.
13. No scan-line gimmick drives the transition.
14. No random data lines drive the transition.
15. No manual click trigger is required.
16. No big “next” button appears.
17. No normal Slide 2 section appears below.
18. The result feels like one cinematic scene transformation.

If the transition only tilts panels, it is failed.

If the transition only fades elements, it is failed.

If the transition only shifts to another section, it is failed.

If the final state ignores clean-target, it is failed.

---

# 19. Current Immediate Priority

The current immediate priority is Scene 2 correction.

Scene 1 is already approved in normal state.

The one-viewport morph direction is approved.

The remaining problem is Scene 2 final composition.

Current known wrong pattern that must not be repeated:

* six tiny side sockets
* central console too dominant
* lanyard inside the console
* terminals unreadable
* no 2x3 terminal grid
* no clear command desk
* final state not matching reference

Next implementation must focus on:

1. Rebuild final Scene 2 state to match clean-target.
2. Create 2x3 large terminal grid.
3. Create large icon/glyph areas.
4. Create command desk at bottom.
5. Create server racks left/right.
6. Reduce lanyard to small access token.
7. Preserve Scene 1 normal state.
8. Preserve one-viewport morph architecture.

Do not add long descriptions yet.

Do not add terminal interactions yet.

Do not build Scene 3 yet.

---

# 20. Global Final Reminder

Do not ask the AI to freely “make it creative.”

Do not ask the AI to design command center from imagination.

Always provide:

* clean-target reference
* exact object list
* exact region layout
* exact final composition
* exact transformation story
* exact forbidden patterns
* exact acceptance checklist

The AI must not hallucinate layout.

The AI must implement the locked scene architecture.

The user considers the work failed if:

* it looks like scroll-down website
* it looks like Figma scroll
* it ignores clean-target
* it uses repeated generic transition concepts
* it invents layouts
* it makes UI unreadable
* it makes premium design look cheap

---

# 21. Scene 2 to Scene 3 Transition

Transition name:

Capability Command Center → Knowledge Library

Transition family:

Terminal compression / archive conversion

This transition family can be used again only one more time maximum in the whole portfolio, and only if the visual execution is meaningfully different.

## 21.1 Main Transition Story

Scene 2 represents capability modules inside a command center.

Scene 3 represents knowledge foundations inside a premium archive library.

The transition must feel like:

Command terminals are being archived into a knowledge library.

The command center does not disappear.

It transforms.

The six capability terminals become structured knowledge archive elements.

The command desk becomes the base reading/archive desk.

The server racks and monitor walls darken, warm up, and reconstruct into bookshelves.

The cold teal command-center lighting shifts into warm bronze, brown, and library amber lighting.

The CAPABILITY MATRIX title transforms into KNOWLEDGE LIBRARY.

The final Scene 3 state must match:

public/reference/clean-target/slide-3-knowledge-library.png

## 21.2 What Must Not Happen

The transition must not feel like:

* scrolling down to Slide 3
* Figma frame scroll
* PDF scroll
* a new library section appearing under Scene 2
* a simple fade from command center to library
* a simple slide-up panel
* a normal tabbed website section
* a dashboard changing text
* six terminal cards becoming six normal cards
* a cold sci-fi UI with the word library added

If the user feels they scrolled down to a new page block, the transition is failed.

If Scene 3 appears as a normal website section below Scene 2, it is failed.

If the final state does not resemble the clean-target image, it is failed.

## 21.3 Transition Visual Logic

The transition should visually communicate:

“Capabilities are being organized into a knowledge archive.”

This should happen through object role changes:

* Scene 2 terminal grid compresses into knowledge archive structure.
* Scene 2 title rail becomes Scene 3 library title frame.
* Scene 2 six terminal panels flatten and rearrange into library tabs, module rows, and archive panels.
* Scene 2 command desk becomes Scene 3 bottom reading/archive bar.
* Scene 2 side server racks become Scene 3 bookshelves and archive walls.
* Scene 2 teal monitor lights warm into bronze and amber library lighting.
* Scene 2 access badge/lanyard may become a small library access seal or archive token, but it must not dominate Scene 3.

## 21.4 Transition Progress Story

The exact implementation can vary, but the visual story must follow this structure.

### Progress 0.00 to 0.15 — Capability Matrix Stable

Visible state:

* Scene 2 final state is stable.
* CAPABILITY MATRIX title is visible.
* Six large 2x3 terminal panels are visible.
* Command desk is visible.
* Server racks are visible.
* Small access token is docked.

No Scene 3 objects should dominate yet.

### Progress 0.15 to 0.35 — Terminal Archive Conversion Begins

Visual behavior:

* Six terminal panels begin to flatten and reduce their command-room depth.
* Terminal frames start becoming archive-card/book-panel frames.
* Terminal icons lose dominance and become smaller library/category symbols.
* Terminal grid spacing begins reorganizing toward a wider library interface.
* Command labels begin reducing in visual importance.
* Background server rack lights begin warming.

Not allowed:

* terminals simply fading out
* terminals sliding downward
* new library UI appearing from below
* sudden full replacement

### Progress 0.35 to 0.55 — Library Structure Forms

Visual behavior:

* Top title rail morphs from CAPABILITY MATRIX into KNOWLEDGE LIBRARY.
* The command title plate stretches into a wider library title frame.
* The upper interface begins forming four category tabs.
* The left portion of terminal structure grows into a large featured pillar panel.
* The center structure expands into the MODULES & FOUNDATIONS panel.
* The right structure forms the PILLAR OVERVIEW panel.
* Bottom command desk flattens into the bottom explanation/archive bar.
* Side server racks become bookshelves and archive wall structures.

Not allowed:

* generic tab component
* normal card grid
* empty dashboard panels
* blue command center theme staying unchanged

### Progress 0.55 to 0.75 — Warm Archive Room Takes Over

Visual behavior:

* Scene lighting becomes warmer.
* Dark wood, bronze, muted gold, and amber library tones become dominant.
* Bookshelves become readable in the background.
* A lamp/desk/book environment appears subtly.
* Main panels gain archive-like depth.
* Category tabs become stable at the top.
* The module list begins appearing clearly in the center.

Not allowed:

* colorful neon
* overly cold sci-fi feel
* random particles replacing structural transformation
* library background only appearing as a static image

### Progress 0.75 to 1.00 — Scene 3 Final State

Final state must clearly match:

public/reference/clean-target/slide-3-knowledge-library.png

Visible state:

* KNOWLEDGE LIBRARY title stable at top.
* Four category tabs stable under the title area.
* Tab 1 active.
* Large left feature panel visible.
* Center MODULES & FOUNDATIONS panel visible.
* Right PILLAR OVERVIEW panel visible.
* Bottom sentence bar visible.
* Warm archive/library environment visible.
* No Scene 4 city content yet.

## 21.5 Transition Hook Quality

The transition hook is the moment the viewer understands:

“The command center is organizing capability into a knowledge archive.”

The hook should come from object transformation, not explanation text.

Acceptable hook examples:

* terminal panels flatten into book/archive panels
* command desk becomes reading/archive base
* monitor walls convert into bookshelves
* title rail transforms into library title frame
* teal command lights warm into bronze library glow
* command modules become category tabs and module rows

Forbidden hook examples:

* “NEXT: KNOWLEDGE LIBRARY” label
* scroll arrow
* simple fade
* simple slide
* simple zoom
* random scan beam
* ordinary tab switch

---

# 22. Scene 3 — Knowledge Library

Clean target:

public/reference/clean-target/slide-3-knowledge-library.png

Concept board:

public/reference/concept-board/slide-3-knowledge-library-board.png

## 22.1 Scene Purpose

Scene 3 shows Kiagus knowledge foundation.

It must feel like a premium knowledge archive.

It must feel like a warm digital library inside the same cinematic portfolio world.

It must not feel like:

* a normal course list
* a skill card section
* an academic resume section
* a simple tabbed web component
* a generic dashboard
* a plain grid of subjects
* a cold sci-fi terminal with course names
* a normal website block under Scene 2

The user should immediately understand:

* Kiagus has structured knowledge foundations.
* The knowledge is organized into pillars.
* The scene is a library/archive UI.
* The active pillar is mathematical and statistical foundation.
* The center panel contains modules and foundations.
* The right panel explains the active pillar.
* The bottom bar summarizes why the pillar matters.

## 22.2 Scene 3 Clean-Target Visual Summary

The clean-target image shows a warm premium library interface.

It contains:

* large title at top: KNOWLEDGE LIBRARY
* four category tabs across the upper area
* large left feature panel for the active pillar
* dominant center panel for module list
* right overview panel
* full-width bottom sentence bar
* warm brown / bronze / amber atmosphere
* bookshelves and archive room environment
* decorative library objects
* framed UI with custom pixel-inspired details

This must be reconstructed with real components.

Do not render the clean-target as a static background.

## 22.3 Scene 3 Required Final Layout

Scene 3 final state must use one viewport.

The scene must be readable without scrolling down.

The layout should feel like one premium archive screen.

### Top Title Region

Content:

* KNOWLEDGE LIBRARY

Placement:

* x: 25% to 75%
* y: 3% to 9%

Visual style:

* centered title
* premium library title frame
* warm bronze / muted gold accent
* still compatible with dark portfolio universe
* not clipped
* not touching viewport top

Rules:

* title must be the first visual anchor
* title must not become too small
* title must not be replaced by a normal navbar label
* title must not look like a basic HTML heading

### Category Tabs Region

Content:

Four category tabs.

Placement:

* x: 8% to 92%
* y: 10% to 21%

Tab layout:

* horizontal row
* four equal or near-equal framed tabs
* each tab has number and title
* Tab 1 active
* Tabs 2 to 4 inactive but readable

The tabs must feel like archive category selectors, not basic website pills.

### Main Body Region

The main body contains three major panels:

1. Left feature pillar panel
2. Center modules panel
3. Right overview panel

Placement:

* y: 23% to 76%

Approximate width distribution:

* left panel: x 6% to 29%
* center panel: x 31% to 68%
* right panel: x 70% to 94%

Rules:

* center panel is the most information-dense area
* left panel is visually prominent but not bigger than center
* right panel is readable and stable
* panels must align like the clean-target
* panels must not become random cards
* panels must not be scattered
* panels must not stack vertically
* panels must not require scrolling inside the viewport

### Bottom Sentence Bar Region

Content:

* full-width explanation bar
* small archive/open-book icon on the left
* sentence text

Placement:

* x: 8% to 92%
* y: 80% to 91%

Rules:

* bottom bar must be visible
* bottom bar must not be mistaken as a footer
* bottom bar must not be hidden below viewport
* bottom bar must support the scene summary

### Background Environment Region

Content:

* bookshelves
* dark wooden archive walls
* warm lamp/reading-table detail
* subtle shelf depth
* premium library atmosphere
* small book silhouettes
* muted amber glow
* faint dust/texture if tasteful

Placement:

* behind main UI
* visible especially left/right edges and behind panels
* must not reduce text readability

Rules:

* background is environment, not the main UI
* background must not be empty
* background must not become a static wallpaper feeling
* background must not overpower panels

## 22.4 Scene 3 Color and Mood Lock

Scene 3 must shift away from Scene 2’s command-center coldness.

Scene 3 should use:

* dark walnut
* deep brown
* charcoal
* bronze
* muted gold
* warm amber
* small teal accents only for active UI details
* very restrained cyan if needed

Scene 3 should avoid:

* too much cyan
* too much green
* neon blue command-center look
* rainbow UI
* cold server-room feel
* cheap cyberpunk atmosphere
* overly bright orange
* childish fantasy library colors

The mood should be:

* premium
* academic
* calm
* structured
* warm
* intelligent
* archive-like
* cinematic

## 22.5 Scene 3 Category Tabs Content

The four top tabs must use this exact content.

### Tab 1

Number:

1

Title:

MATHEMATICAL & STATISTICAL FOUNDATION

State:

active

Visual role:

current selected knowledge pillar

### Tab 2

Number:

2

Title:

COMPUTING, PROGRAMMING & DATA SYSTEMS

State:

inactive

Visual role:

available knowledge pillar

### Tab 3

Number:

3

Title:

MACHINE LEARNING, AI & ADVANCED ANALYTICS

State:

inactive

Visual role:

available knowledge pillar

### Tab 4

Number:

4

Title:

BUSINESS, RESEARCH, LEADERSHIP & DIGITAL TRANSFORMATION

State:

inactive

Visual role:

available knowledge pillar

Tab visual rules:

* Each tab must have a framed archive-card shape.
* Each tab must show its number clearly.
* The active tab must be visibly selected.
* Inactive tabs must remain readable.
* Tabs must not become plain nav pills.
* Tabs must not overflow the viewport.
* Long tab titles may use compact typography but must remain legible.
* If needed, title text can wrap neatly inside each tab.

## 22.6 Scene 3 Left Feature Panel

Panel name:

Active Knowledge Pillar Panel

Placement:

* x: 6% to 29%
* y: 25% to 75%

Primary text:

MATHEMATICAL & STATISTICAL FOUNDATION

Supporting label:

FOUNDATION PILLAR

Visual metaphor:

* featured book
* archive pillar
* knowledge monolith
* premium framed panel

The left panel must feel like an important library object, not a plain card.

Required visual elements:

* large pillar title
* small “FOUNDATION PILLAR” label
* icon/emblem area
* inner border
* corner brackets
* subtle active glow
* panel depth
* possibly book-spine or plaque-like styling

Icon direction:

* equation marks
* sigma/statistical symbol
* chart/axis
* mathematical grid
* probability node

Do not use:

* plain rectangle
* generic skill card
* long paragraph
* random icon unrelated to math/statistics
* huge unreadable text

The left panel should visually say:

“This is the selected knowledge pillar.”

## 22.7 Scene 3 Center Modules Panel

Panel name:

Modules & Foundations Panel

Placement:

* x: 31% to 68%
* y: 25% to 75%

Panel title:

MODULES & FOUNDATIONS

Purpose:

This is the central knowledge list.

It should look like a structured archive index.

It must not look like a plain table.

It must not look like a normal unordered list.

Required structure:

* panel header at top
* two-column module list
* numbered rows
* subtle row separators
* active row highlight
* premium frame
* archive UI styling

The module list must show exactly 14 modules.

### Left Column Modules

01 Calculus
02 Linear Algebra
03 Probability
04 Statistical Inference
05 Statistical Modeling
06 Bayesian Thinking
07 Sampling

### Right Column Modules

08 Data Wrangling
09 Multivariate Analysis
10 Stochastic Process
11 Forecasting
12 Simulation
13 Optimization
14 Metaheuristics

Active module:

04 Statistical Inference

Active module rules:

* must be visibly highlighted
* should not be too bright
* should use warm/teal controlled accent
* should remain readable
* should feel selected inside archive index

Module row rules:

* each row must show number and module title
* numbers must be aligned
* titles must be readable
* rows must feel custom-built
* no default bullet points
* no plain HTML list feeling
* no cramped unreadable tiny text

## 22.8 Scene 3 Right Overview Panel

Panel name:

Pillar Overview Panel

Placement:

* x: 70% to 94%
* y: 25% to 75%

Panel title:

PILLAR OVERVIEW

Body text:

Comprehensive coverage of mathematical theories and statistical methods that form the backbone of data analysis, modeling, and decision science.

Purpose:

This panel explains the active pillar.

Visual rules:

* readable paragraph
* premium framed panel
* subtle internal divisions
* library/archive styling
* not too much text
* no scrolling text area
* no oversized paragraph block

The right panel should feel like:

“Curator notes for the selected knowledge pillar.”

Required visual elements:

* panel title
* paragraph block
* small decorative divider
* small status tag or archive label
* subtle warm glow
* corner brackets or inset border

Do not add fake claims.

Do not add extra long descriptions.

Do not invent course details not listed here unless CONTENT_SOURCE.md supports them.

## 22.9 Scene 3 Bottom Sentence Bar

Placement:

* x: 8% to 92%
* y: 80% to 91%

Content:

Foundation for modeling uncertainty, analyzing complex data, and supporting decision-making.

Optional small label:

ACTIVE KNOWLEDGE BASE

Icon:

* open book
* archive seal
* knowledge mark
* small library glyph

Visual rules:

* full-width strip
* readable sentence
* warm accent
* not a footer
* not a normal web CTA
* connected visually to the library interface
* should echo the clean-target bottom bar

The bottom bar should feel like:

“Summary statement of the selected pillar.”

## 22.10 Scene 3 UI Detail Requirements

Scene 3 must look custom-built and premium.

Required UI details:

* outer frame
* title frame
* tab frames
* left panel frame
* center panel frame
* right panel frame
* bottom strip frame
* corner brackets
* inset borders
* row separators
* small archive labels
* subtle LED/status dots
* small glyph zones
* active highlight
* panel depth shadows
* warm glow points

The UI must not be visually empty.

But it must also not be noisy.

The density should match the clean-target:

* rich enough to feel premium
* organized enough to stay readable
* not random
* not cluttered

## 22.11 Scene 3 Background Environment

The background must support the knowledge library identity.

Required background elements:

* bookshelves
* archive walls
* shelf depth
* warm light source
* small books or document blocks
* possibly a lamp/desk detail
* subtle atmospheric particles or dust
* dark vignette
* premium room depth

The background should be visible through:

* left/right edges
* top behind the title
* subtle gaps between panels
* lower scene depth

Do not use:

* flat solid background only
* generic blue cyber grid
* random server racks without library transformation
* fantasy cartoon library
* bright colorful library illustration
* full image wallpaper with UI pasted on top

## 22.12 Scene 3 Component Map

Scene 3 components may be created later during implementation.

Suggested component responsibilities:

KnowledgeLibraryScene or equivalent:

* owns Scene 3 final composition
* keeps all Scene 3 objects inside the pinned viewport

KnowledgeLibraryTabs or equivalent:

* renders the four category tabs

KnowledgePillarPanel or equivalent:

* renders the left active pillar panel

KnowledgeModulesPanel or equivalent:

* renders the center module list

KnowledgeModuleRow or equivalent:

* renders each numbered module row

PillarOverviewPanel or equivalent:

* renders the right overview panel

KnowledgeBottomBar or equivalent:

* renders the bottom summary sentence bar

LibraryEnvironmentLayer or equivalent:

* renders bookshelves, archive walls, warm lighting, and background objects

ArchiveFrame or equivalent:

* reusable frame style for library panels

Important:

If these components do not exist yet, Codex may create them later.

But Codex must not create ordinary website cards as a substitute.

Codex must not ignore the clean-target composition.

Codex must not create Scene 3 as a separate scroll section.

## 22.13 Scene 3 Motion Direction

Scene 3 stable state should feel alive but calm.

Allowed idle motion:

* subtle lamp glow flicker
* very soft active tab shimmer
* tiny dust or archive particles
* slight panel breathing
* minor warm highlight travel on active module row
* extremely subtle shelf parallax
* small status LED pulse
* low-speed ambient glow

Scene 3 motion must not be:

* chaotic
* fast
* neon-heavy
* command-center aggressive
* full of scan lines
* full of random data lines
* cheap sci-fi terminal motion
* distracting from readability

Scene 3 is calmer than Scene 2.

Scene 2 is command-center active.

Scene 3 is archive-library intelligent and warm.

Detailed animation standards belong in MOTION_RULES.md.

This file defines only the visual motion direction.

## 22.14 Scene 3 Stable Default State

Scene 3 stable final state must show:

* KNOWLEDGE LIBRARY title
* four category tabs
* Tab 1 active
* left active pillar panel
* center MODULES & FOUNDATIONS panel
* 14 module rows
* 04 Statistical Inference active
* right PILLAR OVERVIEW panel
* bottom sentence bar
* warm library environment
* no Scene 4 content

The user should not need to click anything to understand the scene.

Interactions can be added later.

Default state must already look complete.

## 22.15 Scene 3 Interaction Direction

Interactions are not the first priority.

The final layout must be correct before interactions are added.

When interactions are later added, they should follow this direction:

* clicking or hovering tabs changes active pillar
* selected tab updates left panel
* selected tab updates module list
* selected tab updates overview
* selected module can highlight row
* detail changes should feel like library archive selection
* no basic accordion
* no default browser tabs
* no generic dropdown

Interaction must stay inside the one-viewport stage.

Interaction must not open a large modal that destroys the scene.

Interaction must not require vertical scrolling.

## 22.16 Scene 3 to Scene 4 Hook

Do not build Scene 4 yet.

But Scene 3 should prepare a hook into Scene 4.

The hook idea:

Knowledge library opens into experience district.

Visual story:

* selected knowledge module behaves like a book or archive page
* the page can unfold into a map grid
* module rows can later become roads or district paths
* shelf structure can later stretch into city/district architecture
* knowledge foundation becomes real-world experience map

Acceptable preparation:

* selected module row has enough visual importance to later become the transition source
* center panel feels like it could open
* bottom bar feels like an archive base that could unfold
* background shelves have depth that could transform later

Forbidden preparation:

* do not show city buildings yet
* do not show Scene 4 title yet
* do not add experience content yet
* do not add a “next city” button
* do not create a normal scroll-down link

---

# 23. Scene 3 Forbidden Layouts

Scene 3 is forbidden if it becomes:

* normal website section
* plain course list
* simple skill cards
* generic dashboard
* plain tab component
* plain table
* academic resume block
* cold command-center UI with changed text
* static background image with pasted panels
* simple four-card grid
* mind map
* slide deck frame
* scroll-down section below Scene 2
* Figma frame scroll

Scene 3 is also forbidden if:

* the title is missing
* the four tabs are missing
* left feature panel is missing
* center modules panel is missing
* right overview panel is missing
* bottom sentence bar is missing
* warm library environment is missing
* Tab 1 is not active by default
* Statistical Inference is not highlighted
* text is unreadable
* layout does not fit in one viewport
* it ignores the clean-target

---

# 24. Scene 3 Acceptance Checklist

Scene 3 is accepted only if all of these are true:

1. It resembles the clean-target image.
2. It stays inside one viewport.
3. It does not feel like scroll-down website content.
4. It does not feel like Figma/PDF scrolling.
5. KNOWLEDGE LIBRARY title is visible and centered.
6. Four top category tabs are visible.
7. Tab 1 is visibly active.
8. The left feature panel is visible.
9. The left feature panel says MATHEMATICAL & STATISTICAL FOUNDATION.
10. The left feature panel visually feels like a pillar/book/archive object.
11. The center panel says MODULES & FOUNDATIONS.
12. The center panel contains 14 modules.
13. Modules are arranged in two columns.
14. Module 04 Statistical Inference is active/highlighted.
15. The right panel says PILLAR OVERVIEW.
16. The right panel contains the required overview paragraph.
17. The bottom sentence bar is visible.
18. The bottom sentence text is readable.
19. The background has warm library/archive atmosphere.
20. Bookshelves or archive-room objects are visible.
21. The scene does not look like a generic dashboard.
22. The scene does not look like ordinary cards.
23. The scene does not look like a plain course list.
24. The transition from Scene 2 does not feel like scrolling down.
25. The transition uses terminal-to-archive object conversion.
26. The scene avoids noisy scan/data-line gimmicks.
27. No Scene 4 content appears.
28. The scene remains premium, readable, and low-noise.

If any item fails, Scene 3 must be revised.

---

# 25. Scene 3 to Scene 4 Transition

Transition name:

Knowledge Library → Experience District

Transition family:

Book opening / map extrusion

This transition family can be used again only one more time maximum in the whole portfolio, and only if the visual execution is meaningfully different.

## 25.1 Main Transition Story

Scene 3 represents knowledge foundations inside a premium archive library.

Scene 4 represents experience as a living city/district map.

The transition must feel like:

A selected knowledge archive opens and unfolds into real-world experience districts.

The library does not disappear.

It transforms.

The selected module/book/archive panel becomes a city map.

The module rows become roads, district paths, and building labels.

The bookshelves stretch into a night city skyline.

The warm archive room darkens into a cinematic urban night environment.

The KNOWLEDGE LIBRARY title transforms into EXPERIENCE DISTRICT.

The final Scene 4 state must match:

public/reference/clean-target/slide-4-experience-district.png

## 25.2 What Must Not Happen

The transition must not feel like:

* scrolling down to Slide 4
* Figma frame scroll
* PDF scroll
* a new city section appearing below the library
* a simple fade from library to city
* a simple slide-up city image
* a normal resume timeline appearing
* normal work experience cards replacing the library
* a generic city background with plain text cards on top

If the user feels they scrolled down to a new page block, the transition is failed.

If Scene 4 appears as a normal portfolio work-experience section below Scene 3, it is failed.

If the final state does not resemble the clean-target image, it is failed.

## 25.3 Transition Visual Logic

The transition should visually communicate:

“Knowledge becomes experience.”

This should happen through object role changes:

* Scene 3 selected module row becomes the first active district.
* Scene 3 center module list unfolds into a city map / district navigation path.
* Scene 3 left pillar panel transforms into the left district category control panel.
* Scene 3 right overview panel transforms into district status or side navigation UI.
* Scene 3 bookshelves stretch into city building silhouettes.
* Scene 3 bottom sentence bar expands into the selected district information panel.
* Scene 3 library title frame transforms into Scene 4 district interface framing.
* Warm library lighting shifts into dark blue city night lighting with teal and amber windows.

## 25.4 Transition Progress Story

The exact implementation can vary, but the visual story must follow this structure.

### Progress 0.00 to 0.15 — Knowledge Library Stable

Visible state:

* Scene 3 final state is stable.
* KNOWLEDGE LIBRARY title is visible.
* Four top tabs are visible.
* Left pillar panel is visible.
* Center module list is visible.
* Right overview panel is visible.
* Bottom sentence bar is visible.
* Warm library environment is visible.

No Scene 4 city content should dominate yet.

### Progress 0.15 to 0.35 — Archive Page Unlock

Visual behavior:

* The active module row, preferably 04 Statistical Inference, gains importance.
* The center modules panel begins to behave like an archive page.
* Module rows subtly align into path-like lanes.
* The left pillar panel starts compressing into a category sidebar shape.
* Right overview panel starts reducing into status/navigation UI.
* Bottom sentence bar begins expanding downward into an information console.

Not allowed:

* a city image suddenly appearing
* library UI simply fading out
* city content sliding up from below
* resume cards appearing

### Progress 0.35 to 0.55 — Page Becomes Map

Visual behavior:

* The selected archive/module page unfolds horizontally like a map.
* Module rows stretch into roads and district tracks.
* Shelf vertical lines transform into building silhouettes.
* The background shifts from wooden shelves into a night skyline.
* Warm brown tones gradually cool into deep navy city tones.
* Small lights appear as building windows.
* The main title area begins moving from KNOWLEDGE LIBRARY toward EXPERIENCE DISTRICT.

Not allowed:

* only zooming into the library
* only panning down to a new scene
* generic fade overlay
* map appearing without object continuity

### Progress 0.55 to 0.75 — District Buildings Form

Visual behavior:

* Six district buildings form across the central city area.
* Each district receives an ID card label.
* The left category panel becomes readable.
* The right vertical progress/navigation rail begins forming.
* The bottom selected district information panel becomes more structured.
* The city environment gains depth, skyline, building windows, and reflection.

Not allowed:

* simple 6-card grid
* plain timeline
* plain resume cards
* city illustration without UI structure

### Progress 0.75 to 1.00 — Scene 4 Final State

Final state must clearly match:

public/reference/clean-target/slide-4-experience-district.png

Visible state:

* Experience District city map is stable.
* Six district buildings/cards are visible.
* Left district categories panel is visible.
* Right vertical scene progress / slide rail is visible.
* Bottom selected district detail panel is visible.
* District navigation strip is visible.
* Next destination hook toward Project Archive is visible.
* No Scene 5 project archive content is built yet.

## 25.5 Transition Hook Quality

The transition hook is the moment the viewer understands:

“The knowledge library has opened into a living experience district.”

This hook should come from object transformation, not explanation text.

Acceptable hook examples:

* selected module row unfolds into a map road
* library shelves stretch into city skyline
* archive panels become district building labels
* bottom library sentence bar expands into selected district detail panel
* book/page shape opens into a city map
* warm archive glow turns into night city lights

Forbidden hook examples:

* “NEXT: EXPERIENCE DISTRICT” label
* scroll arrow
* simple fade
* simple slide
* simple zoom
* random portal
* ordinary resume timeline appearing
* normal web section reveal

---

# 26. Scene 4 — Experience District

Clean target:

public/reference/clean-target/slide-4-experience-district.png

Concept board:

public/reference/concept-board/slide-4-experience-district-board.png

## 26.1 Scene Purpose

Scene 4 shows Kiagus experience as a living district/city map.

It must feel like a premium pixel city interface.

It must not feel like:

* a normal resume timeline
* ordinary work experience cards
* a LinkedIn-style experience section
* a list of jobs
* a static city wallpaper with cards
* a generic dashboard
* a normal website block below Scene 3

The user should immediately understand:

* experience is represented as districts/buildings
* each district has a role, category, and story
* the active selected district is Avalon AI Community
* the bottom panel explains the selected experience
* the city is navigable like a game map
* this is still one cinematic viewport, not a scroll-down page

## 26.2 Scene 4 Clean-Target Visual Summary

The clean-target image shows a dark pixel night city interface.

It contains:

* left district category panel
* district status inside left panel
* night city skyline background
* six district buildings across the city
* floating district ID cards above buildings
* right vertical slide/progress navigation
* right mini prompt: SCROLL TO EXPLORE THE DISTRICT
* large bottom selected district information panel
* selected character/avatar area
* key responsibilities column
* impact & outcome column
* evidence preview column
* bottom district navigation strip
* next destination hook toward project archive

This must be reconstructed with real components.

Do not render the clean-target as a static background.

## 26.3 Scene 4 Required Final Layout

Scene 4 final state must use one viewport.

The scene must be readable without scrolling down.

The layout should feel like one complete game UI screen.

### Left District Category Panel Region

Placement:

* x: 2% to 17%
* y: 3% to 43%

Content:

* panel title:
  DISTRICT CATEGORIES >>>
* category list
* district status block

Purpose:

This panel explains the district filtering/category system.

It must feel like an in-game city map sidebar, not a normal filter menu.

### Main City Map Region

Placement:

* x: 16% to 95%
* y: 3% to 62%

Content:

* night city skyline
* six district buildings
* floating district cards
* building signs
* city lights
* environmental depth

Purpose:

This is the primary visual stage of Scene 4.

It must dominate the upper and middle area.

### Right Vertical Navigation Region

Placement:

* x: 94% to 99%
* y: 20% to 55%

Content:

* up arrow
* current scene marker:
  04
  /08
* vertical dots
* down arrow

Purpose:

This reinforces the cinematic journey position.

It must not behave like a normal web scrollbar.

### Right Scroll Prompt Region

Placement:

* x: 86% to 99%
* y: 60% to 70%

Content:

* small icon
* text:
  SCROLL TO EXPLORE
  THE DISTRICT
* small check/arrow mark

Purpose:

This is a themed in-world prompt.

It must not become a generic “scroll down” instruction.

It must still communicate one-viewport exploration, not page scrolling.

### Bottom Selected District Panel Region

Placement:

* x: 2% to 99%
* y: 64% to 89%

Content:

* selected district identity
* avatar/character area
* short role summary
* tags
* key responsibilities
* impact & outcome
* evidence preview
* view full evidence action

Purpose:

This is the detailed information console for the selected district.

It must be wide, structured, and readable.

### Bottom District Navigation Region

Placement:

* x: 2% to 99%
* y: 90% to 99%

Content:

* district navigation label
* mini district selector 01 to 06
* next destination hook toward project archive

Purpose:

This is the map navigation strip and transition preparation to Scene 5.

## 26.4 Scene 4 Color and Mood Lock

Scene 4 must shift from Scene 3’s warm library into a dark premium night city.

Use:

* deep navy
* near black
* dark teal
* muted cyan
* warm yellow window lights
* small magenta/purple only for category badges if needed
* controlled emerald/teal for active district
* subtle blue night haze

Avoid:

* bright daylight city
* rainbow neon city
* childish pixel city
* cheap cyberpunk overload
* overly flat dark background
* sterile corporate dashboard colors
* warm brown library dominance

The mood should be:

* cinematic
* urban
* premium
* night-time
* data-city
* slightly game-like
* serious and professional
* not cartoonish

## 26.5 Left District Category Panel Content

Panel title:

DISTRICT CATEGORIES >>>

Categories:

1. Community & Non-Profit
2. Academic & Department
3. Project & Team
4. Content & Systems
5. Operations & Service
6. Leadership & Initiative

Each category should have:

* small pixel icon
* category label
* colored badge or active marker
* compact row styling

District status block:

Title:

DISTRICT STATUS

Rows:

Total Districts
6

Active Lights
6/6

Stories Unlocked
0/6

Also include a small progress meter or city-light indicator strip at the bottom of the status area.

Visual rules:

* left panel must be readable
* panel must feel like an in-game district control sidebar
* not a normal web filter
* not plain list text
* category rows must be compact but legible
* status block must feel integrated, not random

## 26.6 Main City District Buildings

Scene 4 must show six experience districts.

They should be represented as buildings or building clusters across the city.

Each building should have:

* visible district number
* floating label card
* building identity/signage
* small environmental light
* role subtitle
* clear separation from other districts

The six district buildings/cards must use this exact content.

### District 01

ID:

01

Title:

AVALON AI COMMUNITY

Subtitle:

Head of Data Science
& Artificial Intelligence

Building sign:

AVALON AI

Category:

Community & Non-Profit

Visual direction:

* active selected district
* strongest highlight
* left-middle building
* teal/green active glow
* community/AI emblem

### District 02

ID:

02

Title:

DEPARTMENT OF STATISTICS ITS

Subtitle:

Structured Survey &
Data Packaging Project

Building sign:

STATISTICS ITS

Category:

Academic & Department

Visual direction:

* central academic/institution building
* formal facade
* warm lights
* school/department emblem
* not as active as District 01

### District 03

ID:

03

Title:

INDEPENDENT TEAM PROJECT

Subtitle:

Data & System Analyst
Multiple Web Systems

Building sign:

Independent / system office style

Category:

Project & Team

Visual direction:

* right-side modern office building
* system/data project vibe
* muted yellow/gold accent

### District 04

ID:

04

Title:

CONTENT SYSTEMS

Subtitle:

Dessydiniyanti &
TernakUang

Building sign:

CONTENT SYSTEMS

Category:

Content & Systems

Visual direction:

* lower-left building
* content/media signs
* screen/video icon detail
* purple or amber accent can be used subtly

### District 05

ID:

05

Title:

CUSTOMER OPERATIONS

Subtitle:

GTmurah

Building sign:

GTMURAH

Category:

Operations & Service

Visual direction:

* lower-middle building
* storefront/operations feeling
* shopping/cart or service icon
* warm green/yellow sign

### District 06

ID:

06

Title:

LEADERSHIP & COMMUNITY

Subtitle:

BENEFITS &
Podcast Panjul

Building sign:

BENEFITS

Category:

Leadership & Initiative

Visual direction:

* lower-right building
* community/podcast/emblem signage
* microphone or group icon detail
* cyan/blue accent

## 26.7 City Map Visual Rules

The city must feel like the clean-target.

Required city objects:

* skyline background
* midground buildings
* foreground district buildings
* small window lights
* street lights
* subtle road/water reflection or lower city reflection
* district label cards
* building signs
* dark blue night atmosphere
* small environmental glows

The city must not be:

* a flat single background image
* empty behind cards
* a plain CSS gradient
* a generic skyscraper wallpaper
* a cartoon city unrelated to the UI
* too bright
* too colorful

The buildings must be visually part of the UI story.

The district cards must feel attached to the buildings.

## 26.8 Floating District Card Rules

Each floating district card must include:

* district number
* district title
* role/subtitle
* premium pixel border
* subtle glow
* small category color accent
* readable typography

Card placement should follow the clean-target feel:

* 01 top-left/left-middle area
* 02 near top-center
* 03 near top-right
* 04 lower-left/mid-lower
* 05 lower-center
* 06 lower-right

Rules:

* cards must not overlap unreadably
* cards must not cover the whole building
* cards must not be plain rectangles
* active District 01 should be more highlighted than others
* inactive districts should still be visible and readable

## 26.9 Right Vertical Navigation Rules

Right vertical navigation must show:

* up arrow
* 04
* /08
* stack of dots
* down arrow

Purpose:

It communicates that the user is in Scene 04 of 08.

Rules:

* this is not the browser scrollbar
* this should look like in-world HUD navigation
* it must be slim
* it must not dominate the scene
* it must not imply normal page scroll
* dots should be decorative journey markers

## 26.10 Scroll Prompt Rules

Prompt text:

SCROLL TO EXPLORE
THE DISTRICT

Purpose:

This prompt means:

scroll controls the cinematic district exploration timeline.

It must not mean:

scroll down to another page section.

Visual style:

* small framed panel
* mouse/scroll icon
* small confirmation/check/arrow
* anchored right side
* not too large

Forbidden:

* big scroll down arrow
* generic web “scroll down”
* huge instruction text
* prompt that looks like a Figma/page scroll cue

## 26.11 Bottom Selected District Panel

Selected district default:

District 01 — AVALON AI COMMUNITY

Placement:

* x: 2% to 99%
* y: 64% to 89%

The bottom panel must be wide and structured into columns.

### Column 1 — Selected District Identity

Content:

ID:

01

Title:

AVALON AI COMMUNITY

Subtitle:

Head of Data Science & Artificial Intelligence

Body text:

Leading the Data Science & AI division in a community of 200+ active members. Managed data, AI, software, and UI/UX teams to deliver high-quality solutions and meaningful impact.

Tags:

* Leadership
* Team Management
* AI Direction
* Mentorship
* Quality Control
* Community Impact

Visual requirements:

* selected district ID badge
* avatar or character area on the left
* title and subtitle readable
* tags as small chips
* premium panel frame

Avatar direction:

* pixel-style professional avatar
* should not look childish
* should not dominate the panel
* should support game UI identity

### Column 2 — Key Responsibilities

Title:

KEY RESPONSIBILITIES

Items:

* Defined technical direction and AI roadmap
* Managed Data, AI, Software, and UI/UX teams
* Set quality standards and solution architecture
* Mentored members from problem to solution
* Ensured accuracy, efficiency, and impact

Visual requirements:

* bullet list
* readable
* compact
* aligned
* not too much paragraph text
* framed column divider

### Column 3 — Impact & Outcome

Title:

IMPACT & OUTCOME

Items:

200+
Active Community Members

Multiple
Projects & Initiatives

Improved
Team Quality & Output

Strong
Collaboration Culture

Visual requirements:

* each item should have small icon
* metric/keyword must be prominent
* description smaller
* not fake beyond provided content
* no unsupported numeric claims except 200+ active community members if already part of content source

### Column 4 — Evidence Preview

Title:

EVIDENCE PREVIEW

Content:

* small preview thumbnails/placeholders
* text:
  Reports, project docs, and community activities
* button:
  VIEW FULL EVIDENCE
* right arrow

Visual requirements:

* evidence area should look like a documentation preview
* if real evidence images are missing, use placeholders
* placeholders must not pretend to be real evidence
* do not invent fake screenshots or fake certificates
* button should be in-world UI, not generic web button

## 26.12 Bottom District Navigation Strip

Placement:

* x: 2% to 99%
* y: 90% to 99%

Left block:

Title:

DISTRICT NAVIGATION

Include:

* left arrow
* compact framed block

Center block:

Mini district selector:

01 02 03 04 05 06

Rules:

* 01 active
* mini skyline/rail behind selector
* small numbered markers
* must look like game map navigation

Right block:

Title:

NEXT DESTINATION

Text:

Building window detected.
Preparing to enter project archive...

Visual:

* glowing window icon
* forward arrows
* suggests Scene 5 transition
* does not build Scene 5 yet

Purpose:

This strip prepares the hook into Project Archive.

## 26.13 Scene 4 UI Detail Requirements

Scene 4 must look custom-built and premium.

Required UI details:

* outer HUD frame
* city map frame
* district cards
* category panel
* status indicators
* active district glow
* building signs
* bottom detail panel frame
* column dividers
* metric icons
* evidence thumbnails
* navigation rail
* next destination card
* small arrows
* corner brackets
* subtle scan texture only if low-noise
* small LED/status dots
* refined pixel borders

The UI must not be visually empty.

But it must also not be too noisy.

The density should match the clean-target:

* rich city environment
* lots of information
* readable structure
* cinematic depth
* game-map feeling

## 26.14 Scene 4 Background Environment

The background must support the Experience District identity.

Required background elements:

* night city skyline
* multiple depth layers
* large central buildings
* district-specific buildings
* window lights
* street lamps
* subtle trees or small urban details
* reflections or lower-city depth if appropriate
* dark blue haze
* premium vignette

The background should be visible behind:

* district buildings
* floating district cards
* left category panel
* bottom information panel

Rules:

* background must not overpower text
* main district cards and bottom panel must remain readable
* city should feel integrated with the UI
* not a static wallpaper with cards pasted on top

## 26.15 Scene 4 Component Map

Scene 4 components may be created later during implementation.

Suggested component responsibilities:

ExperienceDistrictScene or equivalent:

* owns Scene 4 final composition
* keeps all Scene 4 objects inside the pinned viewport

DistrictCategoryPanel or equivalent:

* renders left district categories and district status

DistrictCityLayer or equivalent:

* renders skyline, buildings, lights, and city depth

DistrictBuildingCard or equivalent:

* renders each floating district card and building label relationship

DistrictBuilding or equivalent:

* renders visual building object/signage

SelectedDistrictPanel or equivalent:

* renders wide bottom selected district detail panel

SelectedDistrictIdentity or equivalent:

* renders avatar, title, description, and tags

DistrictResponsibilities or equivalent:

* renders key responsibilities column

DistrictImpactPanel or equivalent:

* renders impact & outcome column

DistrictEvidencePreview or equivalent:

* renders evidence thumbnails/placeholders and action button

DistrictNavigationStrip or equivalent:

* renders bottom district navigation

JourneySceneIndicator or equivalent:

* renders the right 04/08 vertical navigation

NextDestinationPanel or equivalent:

* renders the Project Archive hook

Important:

If these components do not exist yet, Codex may create them later.

But Codex must not create ordinary resume cards as a substitute.

Codex must not build Scene 4 as a normal vertical section.

Codex must not ignore the clean-target composition.

## 26.16 Scene 4 Motion Direction

Scene 4 stable state should feel like a living night city.

Allowed idle motion:

* tiny window light flicker
* subtle building sign glow
* very slow skyline parallax
* gentle reflection shimmer
* active district card pulse
* small HUD status blinks
* tiny traffic/light movement if tasteful
* subtle selected district highlight
* soft evidence preview hover state later

Scene 4 motion must not be:

* chaotic
* too fast
* overly neon
* too cartoonish
* full of random data lines
* cheap cyberpunk
* distracting from readability

Scene 4 motion should be more environmental than Scene 3.

Scene 3 is calm archive.

Scene 4 is living city map.

Detailed animation standards belong in MOTION_RULES.md.

This file defines only the visual motion direction.

## 26.17 Scene 4 Stable Default State

Scene 4 stable final state must show:

* left district categories panel
* district status
* six district buildings/cards
* District 01 active
* right vertical 04/08 indicator
* scroll-to-explore prompt
* bottom selected district panel
* Avalon AI Community details
* key responsibilities
* impact & outcome
* evidence preview
* bottom district navigation
* next destination hook to Project Archive
* no Scene 5 project archive content

The user should not need to click anything to understand the scene.

Interactions can be added later.

Default state must already look complete.

## 26.18 Scene 4 Interaction Direction

Interactions are not the first priority.

The final layout must be correct before interactions are added.

When interactions are later added, they should follow this direction:

* clicking a district building changes selected district
* selected district updates bottom detail panel
* category panel can filter/highlight related districts
* district navigation strip can jump between districts
* evidence button can reveal documentation preview later
* interaction should feel like exploring a game map
* no basic accordion
* no default dropdown
* no normal resume expand/collapse

Interaction must stay inside the one-viewport stage.

Interaction must not create a page scroll.

Interaction must not open a huge modal that breaks the city map.

## 26.19 Scene 4 to Scene 5 Hook

Do not build Scene 5 yet.

But Scene 4 should prepare a hook into Scene 5.

The hook idea:

Experience district becomes Project Archive.

Visual story:

* selected building window glows
* the window becomes an archive cartridge slot
* district buildings compress into project cartridges
* city map rail becomes archive conveyor/selector
* bottom next destination panel points toward Project Archive
* experience evidence previews become project archive evidence slots

Acceptable preparation:

* right bottom “NEXT DESTINATION” panel shows:
  Building window detected. Preparing to enter project archive...
* a glowing window icon appears
* active district building has a highlighted window that can later become the transition source
* bottom district navigation rail visually feels like it can become a cartridge rail

Forbidden preparation:

* do not show Project Archive title yet
* do not show project cartridges yet
* do not build Scene 5 viewer
* do not add project details yet
* do not add a normal “next section” button
* do not scroll down to projects

---

# 27. Scene 4 Forbidden Layouts

Scene 4 is forbidden if it becomes:

* normal website section
* resume timeline
* job experience cards
* LinkedIn-style work history
* plain list of roles
* generic dashboard
* simple city wallpaper with cards
* basic card grid
* slide deck frame
* scroll-down section below Scene 3
* Figma frame scroll
* PDF-like scroll
* ordinary portfolio “Experience” section

Scene 4 is also forbidden if:

* left category panel is missing
* six district buildings/cards are missing
* bottom selected district panel is missing
* Avalon AI Community is not selected by default
* right 04/08 indicator is missing
* district navigation strip is missing
* next destination hook is missing
* city background is empty
* district cards are unreadable
* layout does not fit in one viewport
* it ignores the clean-target

---

# 28. Scene 4 Acceptance Checklist

Scene 4 is accepted only if all of these are true:

1. It resembles the clean-target image.
2. It stays inside one viewport.
3. It does not feel like scroll-down website content.
4. It does not feel like Figma/PDF scrolling.
5. It feels like a night city experience district.
6. Left district category panel is visible.
7. DISTRICT CATEGORIES >>> title is visible.
8. District status block is visible.
9. Six district buildings/cards are visible.
10. District 01 Avalon AI Community is active by default.
11. District 02 Department of Statistics ITS is visible.
12. District 03 Independent Team Project is visible.
13. District 04 Content Systems is visible.
14. District 05 Customer Operations is visible.
15. District 06 Leadership & Community is visible.
16. The city environment has depth, lights, and skyline.
17. Right 04/08 vertical indicator is visible.
18. Scroll-to-explore prompt is visible but not generic.
19. Bottom selected district panel is visible.
20. Avalon AI Community title and role are visible.
21. Key Responsibilities column is visible.
22. Impact & Outcome column is visible.
23. Evidence Preview column is visible.
24. District Navigation strip is visible.
25. Next Destination hook is visible.
26. Scene 5 project archive content does not appear yet.
27. The transition from Scene 3 uses book/page-to-map transformation.
28. The transition does not feel like scrolling down.
29. The scene does not look like a resume timeline.
30. The scene remains premium, readable, and low-noise.

If any item fails, Scene 4 must be revised.
