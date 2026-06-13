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
