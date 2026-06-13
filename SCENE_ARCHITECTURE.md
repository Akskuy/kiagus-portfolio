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
---

# 29. Scene 4 to Scene 5 Transition

Transition name:

Experience District → Project Archive

Transition family:

Building collapse / cartridge formation

This transition family can be used again only one more time maximum in the whole portfolio, and only if the visual execution is meaningfully different.

## 29.1 Main Transition Story

Scene 4 represents experience as a living city district.

Scene 5 represents projects as physical cartridges inside a project archive machine.

The transition must feel like:

Experience buildings are being converted into project cartridges.

The city does not disappear.

It transforms.

The selected district building window becomes an archive access slot.

The district buildings compress into cartridge modules.

The district navigation rail becomes a cartridge selector rail.

The bottom evidence preview becomes project proof / output preview.

The city HUD becomes a dark industrial archive machine interface.

The EXPERIENCE DISTRICT title transforms into PROJECT ARCHIVE.

The final Scene 5 state must match:

public/reference/clean-target/slide-5-project-archive.png

## 29.2 What Must Not Happen

The transition must not feel like:

* scrolling down to Slide 5
* Figma frame scroll
* PDF scroll
* a project section appearing under the city
* a simple fade from city to project cards
* a normal portfolio project grid
* cards sliding up from below
* a generic case study section
* a normal carousel of project cards
* city background suddenly replaced by project dashboard

If the user feels they scrolled down to a new page block, the transition is failed.

If Scene 5 appears as a normal project section below Scene 4, it is failed.

If the final state does not resemble the clean-target image, it is failed.

## 29.3 Transition Visual Logic

The transition should visually communicate:

“Experience districts are being archived into project cartridges.”

This should happen through object role changes:

* Scene 4 active building window becomes the archive machine insertion slot.
* Scene 4 six district cards compress into six project cartridge slots.
* Scene 4 district navigation strip becomes Scene 5 cartridge navigation rail.
* Scene 4 evidence preview becomes Scene 5 project proof/output preview.
* Scene 4 selected district information panel compresses into project summary and workflow preview panels.
* Scene 4 night city background darkens into an industrial archive room.
* Scene 4 skyline vertical structures become archive shelves, pipes, and storage racks.
* Scene 4 “NEXT DESTINATION” hook becomes the active Project Archive machine.
* EXPERIENCE DISTRICT title transforms into PROJECT ARCHIVE.

## 29.4 Transition Progress Story

The exact implementation can vary, but the visual story must follow this structure.

### Progress 0.00 to 0.15 — Experience District Stable

Visible state:

* Scene 4 final state is stable.
* Six district buildings/cards are visible.
* Avalon AI Community is active.
* Bottom selected district detail panel is visible.
* District navigation strip is visible.
* Next destination hook toward Project Archive is visible.

No Scene 5 archive machine should dominate yet.

### Progress 0.15 to 0.35 — Building Window Activation

Visual behavior:

* The active district building window glows stronger.
* The “NEXT DESTINATION” panel becomes visually important.
* The glowing building window begins behaving like an insertion slot.
* District cards begin compacting into smaller hardware-like modules.
* City lights begin reducing into machine indicator lights.
* Bottom evidence preview starts flattening into project output preview cards.

Not allowed:

* project cards simply appearing
* city fading out instantly
* project section sliding up from below
* plain project grid appearing

### Progress 0.35 to 0.55 — Districts Become Cartridges

Visual behavior:

* Six experience district cards compress into cartridge slots on the left.
* City building signs become project cartridge labels.
* District navigation rail transforms into cartridge selector rail.
* Night city skyline verticals become archive shelves and machine walls.
* The center city area opens into a mechanical project viewer machine.
* Bottom selected district panel reorganizes into project summary, workflow preview, and proof/output preview.

Not allowed:

* six cards staying as normal experience cards
* building image simply fading behind a dashboard
* no cartridge metaphor
* no machine viewer

### Progress 0.55 to 0.75 — Archive Machine Assembles

Visual behavior:

* Central project viewer machine becomes dominant.
* Left cartridge column becomes readable.
* The active cartridge becomes Automated Clipping Website.
* The machine screen shows workflow blocks.
* Right archive shelves and equipment appear.
* Bottom panels become stable.
* Lighting changes from city night blue into industrial dark archive teal.

Not allowed:

* generic dashboard
* simple tab layout
* project cards without machine
* too much neon
* no mechanical insertion feeling

### Progress 0.75 to 1.00 — Scene 5 Final State

Final state must clearly match:

public/reference/clean-target/slide-5-project-archive.png

Visible state:

* PROJECT ARCHIVE title stable.
* Left project cartridges visible.
* Active cartridge 03 Automated Clipping Website selected.
* Central project viewer machine visible.
* Workflow blocks visible inside machine screen.
* Right archive storage/equipment wall visible.
* Bottom project summary panel visible.
* Bottom workflow preview panel visible.
* Bottom project proof/output preview panel visible.
* Tip bar visible.
* No Scene 6 achievement analytics content yet.

## 29.5 Transition Hook Quality

The transition hook is the moment the viewer understands:

“The experience district has converted into a project cartridge archive.”

The hook should come from object transformation, not explanation text.

Acceptable hook examples:

* glowing building window becomes cartridge insertion slot
* district cards compress into project cartridges
* evidence preview becomes proof/output preview
* city navigation rail becomes cartridge rail
* city skyline becomes archive storage shelves
* active building collapses into machine screen content

Forbidden hook examples:

* “NEXT: PROJECT ARCHIVE” label
* scroll arrow
* simple fade
* simple slide
* generic portal
* ordinary project cards appearing
* normal portfolio project grid

---

# 30. Scene 5 — Project Archive

Clean target:

public/reference/clean-target/slide-5-project-archive.png

Concept board:

public/reference/concept-board/slide-5-project-archive-board.png

## 30.1 Scene Purpose

Scene 5 shows Kiagus projects as a physical project archive machine.

It must feel like:

* an industrial digital archive chamber
* a project cartridge system
* a machine that loads projects
* a technical project viewer
* a premium pixel-game interface
* an implementation-ready project showcase

It must not feel like:

* a normal project card grid
* a plain portfolio projects section
* a carousel
* a simple case study list
* a dashboard with project cards
* a static screenshot gallery
* a generic web automation section
* a scroll-down block under Scene 4

The user should immediately understand:

* projects are stored as cartridges
* a selected cartridge loads into a machine
* the central viewer explains the selected project
* bottom panels summarize project metadata, workflow, and proof/output
* this is still one viewport, not a project page

## 30.2 Scene 5 Clean-Target Visual Summary

The clean-target image shows a dark industrial project archive UI.

It contains:

* top title: PROJECT ARCHIVE
* left project cartridge list
* active cartridge 03 selected
* central project viewer machine
* workflow blocks inside the viewer screen
* right archive/storage/equipment wall
* bottom project summary panel
* bottom workflow preview diagram
* bottom project proof/output preview panel
* bottom tip bar
* dark machinery, archive shelves, pipes, and storage room atmosphere

This must be reconstructed with real components.

Do not render the clean-target as a static background.

## 30.3 Scene 5 Required Final Layout

Scene 5 final state must use one viewport.

The scene must be readable without scrolling down.

The layout should feel like one project archive machine screen.

### Top Title Region

Placement:

* x: 35% to 70%
* y: 3% to 10%

Content:

PROJECT ARCHIVE

Visual style:

* centered machine header
* industrial archive title plate
* dark metal frame
* subtle teal/green indicator line
* not clipped
* not a basic heading

Rules:

* title must be visible
* title must not say “Slide 5”
* title must not include concept-board annotation text
* no “Annotated interaction concept board” text in final UI

### Left Project Cartridge Region

Placement:

* x: 3% to 29%
* y: 10% to 67%

Content:

* title panel:
  PROJECT CARTRIDGES
* six cartridge rows
* active cartridge 03 highlighted
* bottom project count and small navigation controls

Purpose:

This is the project selector.

It must feel like a physical cartridge rack.

It must not feel like a plain sidebar menu.

### Central Project Viewer Machine Region

Placement:

* x: 30% to 72%
* y: 5% to 67%

Content:

* mechanical machine frame
* header:
  PROJECT VIEWER MACHINE
* active project title:
  AUTOMATED CLIPPING WEBSITE
* subtitle:
  PRE-RELEASE AUTOMATED WORKFLOW SYSTEM
* workflow blocks inside machine screen
* system idle message
* insertion slot / cartridge receiver below screen
* small control buttons

Purpose:

This is the main focus of Scene 5.

It must feel like a machine that loads and displays project architecture.

### Right Archive Equipment Region

Placement:

* x: 73% to 97%
* y: 5% to 67%

Content:

* archive shelves
* storage boxes
* binders
* machine panels
* small monitor/heartbeat display
* industrial wall equipment
* pipes / storage frames

Purpose:

This is environment and depth.

It supports the archive-machine world.

It must not become main content.

### Bottom Panels Region

Placement:

* x: 3% to 97%
* y: 69% to 91%

Content:

Three bottom panels:

1. Project Summary
2. Workflow Preview Diagram
3. Project Proof / Output Preview

Purpose:

These panels provide project metadata, workflow explanation, and evidence/proof preview.

### Bottom Tip Bar Region

Placement:

* x: 3% to 97%
* y: 92% to 98%

Content:

TIP: Click any cartridge or viewer area to explore project details and workflow.

Purpose:

This is an in-world instruction bar.

It must not feel like a generic website footer.

## 30.4 Scene 5 Color and Mood Lock

Scene 5 must shift from Scene 4’s night city into a darker industrial archive room.

Use:

* near black
* dark navy
* charcoal metal
* gunmetal gray
* deep teal
* muted cyan
* emerald status lights
* tiny amber/gold warning or tip accents
* low saturated purple/orange only for cartridge category badges

Avoid:

* bright colorful project cards
* pure blue SaaS dashboard
* white background
* playful colors
* rainbow neon
* childish arcade look
* clean corporate dashboard style
* too much glow

The mood should be:

* industrial
* technical
* premium
* dark
* mechanical
* archive-machine
* slightly mysterious
* still readable

## 30.5 Left Project Cartridge List Content

The left cartridge list must show exactly six cartridges.

Panel title:

PROJECT CARTRIDGES

### Cartridge 01

ID:

01

Title:

STRUCTURED SURVEY DATA PROJECT

Icon direction:

survey/data form icon

State:

inactive

### Cartridge 02

ID:

02

Title:

BUSINESS-READY DATA PACKAGING

Icon direction:

data package / connected boxes

State:

inactive

### Cartridge 03

ID:

03

Title:

AUTOMATED CLIPPING WEBSITE

Icon direction:

globe / automation / web icon

State:

active

### Cartridge 04

ID:

04

Title:

REGISTRATION WEBSITE

Icon direction:

registration lock / form / account icon

State:

inactive

### Cartridge 05

ID:

05

Title:

DATA COLLECTION WEBSITE

Icon direction:

data collection / folder / nodes icon

State:

inactive

### Cartridge 06

ID:

06

Title:

CONTENT PERFORMANCE EDITING SYSTEM

Icon direction:

editing / performance / media icon

State:

inactive

Bottom cartridge counter:

6 / 6 PROJECTS

Small controls:

* previous arrow
* next arrow

Visual rules:

* cartridge rows must look physical and mechanical
* each row should have an ID block
* each row should have an icon block
* each row should have a title block
* each row should have small status LEDs or cartridge pins
* active cartridge 03 should glow with restrained teal
* inactive cartridges must remain visible
* rows must not look like ordinary buttons
* rows must not be plain cards
* no long descriptions inside cartridge rows

## 30.6 Central Project Viewer Machine

The central viewer is the main hero object of Scene 5.

Panel title:

PROJECT VIEWER MACHINE

Active project title:

AUTOMATED CLIPPING WEBSITE

Subtitle:

PRE-RELEASE AUTOMATED WORKFLOW SYSTEM

Viewer screen content:

Four workflow blocks arranged horizontally:

1. LINK INPUT
2. PROCESSING ENGINE
3. CLIPPING OUTPUT
4. UPLOAD FLOW

Between blocks:

* arrow connectors

Icon direction per block:

LINK INPUT:

* chain/link icon

PROCESSING ENGINE:

* gear icon

CLIPPING OUTPUT:

* scissors/cut icon

UPLOAD FLOW:

* upload/cloud icon

System message area:

SYSTEM IDLE

Message:

Insert cartridge or click details to begin.

Bottom insertion slot label:

INSERT CARTRIDGE

Machine visual requirements:

* large industrial frame
* thick bevels
* mechanical panels
* inset screen
* glowing display area
* bottom insertion slot
* small control buttons
* side bolts or corner plates
* premium pixel-machine style
* not a normal dashboard card

The central viewer must be visually dominant.

It must not be smaller than the left cartridge list.

It must not be flat.

It must not look like a plain modal.

## 30.7 Right Archive Equipment Wall

The right side must support the project archive atmosphere.

Required objects:

* shelves
* boxes
* binders
* storage drawers
* vertical machine panel
* small monitor with signal/heartbeat line
* pipe or machinery detail
* dark wall frame
* small status LEDs

Rules:

* right equipment wall is environmental
* it should add depth
* it should not be empty
* it should not contain important project text
* it should not overpower the central viewer
* it should not become a generic stock room illustration

## 30.8 Bottom Project Summary Panel

Placement:

* left bottom panel
* x: 3% to 25%
* y: 69% to 91%

Panel title:

PROJECT SUMMARY

Rows:

STATUS
Pre-Release

CATEGORY
Web Automation

COMPLETED
Q1 2024

CONFIDENTIALITY
Internal Use

VER.
0.9 (Pre-Release)

Visual rules:

* compact metadata table
* small icons or bullets
* readable
* premium frame
* not fake claims
* no unsupported user numbers
* no exaggeration
* no “production deployed” unless verified in CONTENT_SOURCE.md

## 30.9 Bottom Workflow Preview Panel

Placement:

* middle bottom panel
* x: 26% to 59%
* y: 69% to 91%

Panel title:

WORKFLOW PREVIEW (DIAGRAM)

Content:

Four blocks:

1. LINK INPUT
2. PROCESSING ENGINE
3. CLIPPING OUTPUT
4. UPLOAD FLOW

Add connectors/arrows between blocks.

Bottom step labels:

1. INPUT
2. PROCESS
3. OUTPUT
4. UPLOAD

Visual rules:

* diagram must be clear
* icons must match central viewer workflow
* should feel like a technical workflow preview
* not a decorative random diagram
* no unsupported detailed stack claims unless listed in CONTENT_SOURCE.md

## 30.10 Bottom Project Proof / Output Preview Panel

Placement:

* right bottom panel
* x: 60% to 97%
* y: 69% to 91%

Panel title:

PROJECT PROOF / OUTPUT PREVIEW

Preview cards:

1. DASHBOARD OVERVIEW
2. CLIPPING RESULT SAMPLE
3. UPLOAD LOG SAMPLE

Visual rules:

* show three preview slots/thumbnails
* if real screenshots are unavailable, use clear placeholders
* placeholders must not pretend to be real screenshots
* preview cards should look like machine output screens
* no fake client proof
* no fake production metrics
* no fabricated deployment result

## 30.11 Bottom Tip Bar

Placement:

* x: 3% to 97%
* y: 92% to 98%

Content:

TIP: Click any cartridge or viewer area to explore project details and workflow.

Icon:

* lightbulb / small tip icon

Visual rules:

* thin full-width bar
* in-world UI instruction
* not a footer
* not a normal webpage hint
* should match clean-target

## 30.12 Scene 5 Project Content Safety

Scene 5 must sell the projects professionally without inventing fake facts.

Allowed wording:

* concept
* workflow
* prototype
* pre-release
* internal use
* project viewer
* system direction
* compatible stack
* recommended stack
* planned module
* proof/output placeholder
* implementation-ready workflow

Forbidden fake claims unless verified:

* deployed production system
* served real users
* increased performance by X%
* used PostgreSQL/Redis/Whisper/OpenCV as fact if not confirmed
* real client result if not proven
* real screenshots if screenshots are placeholders
* confidential client data
* fake metrics
* fake certificates
* fake dashboards as if real evidence

If unsure, label as:

* Prototype Preview
* Demo Placeholder
* Output Preview Placeholder
* Workflow Concept
* Pre-Release System

## 30.13 Scene 5 UI Detail Requirements

Scene 5 must look custom-built and premium.

Required UI details:

* outer frame
* industrial title plate
* cartridge rack frame
* cartridge row frames
* active cartridge glow
* small status LEDs
* central machine bevels
* screen inset depth
* workflow icon blocks
* insertion slot
* side machine controls
* archive shelves
* storage boxes
* pipe details
* bottom panel frames
* table row dividers
* preview thumbnails
* bottom tip bar
* corner brackets
* small bolts or panel joints
* restrained scan texture if low-noise

The scene must be visually dense like the clean-target.

But it must remain readable.

No empty debug-shell look.

No generic dashboard look.

## 30.14 Scene 5 Background Environment

The background must support the Project Archive identity.

Required background elements:

* dark archive room
* industrial wall
* storage shelves
* binders/boxes
* machine side panels
* pipes or wall conduits
* dark floor perspective
* subtle teal monitor lights
* tiny amber lights
* vignette

The background should be visible behind:

* left cartridge rack
* central viewer machine
* right storage wall
* bottom panels

Rules:

* background must not overpower UI text
* background must not be flat black only
* background must not be a bright office
* background must not look like city anymore
* background must not look like library anymore

## 30.15 Scene 5 Component Map

Scene 5 components may be created later during implementation.

Suggested component responsibilities:

ProjectArchiveScene or equivalent:

* owns Scene 5 final composition
* keeps all Scene 5 objects inside the pinned viewport

ProjectCartridgeRack or equivalent:

* renders the left cartridge list

ProjectCartridgeItem or equivalent:

* renders each cartridge row

ProjectViewerMachine or equivalent:

* renders the central machine and screen

ProjectWorkflowBlock or equivalent:

* renders each workflow block inside machine screen

ArchiveEquipmentWall or equivalent:

* renders right shelf/equipment background

ProjectSummaryPanel or equivalent:

* renders project metadata

ProjectWorkflowPreviewPanel or equivalent:

* renders bottom workflow diagram

ProjectProofPreviewPanel or equivalent:

* renders proof/output preview slots

ProjectTipBar or equivalent:

* renders bottom tip bar

ArchiveMachineFrame or equivalent:

* reusable metal/machine frame style

Important:

If these components do not exist yet, Codex may create them later.

But Codex must not create ordinary project cards as a substitute.

Codex must not build Scene 5 as a normal vertical section.

Codex must not ignore the clean-target composition.

## 30.16 Scene 5 Motion Direction

Scene 5 stable state should feel like an active machine in idle mode.

Allowed idle motion:

* active cartridge glow pulse
* small cartridge LED blinking
* machine screen soft flicker
* workflow block subtle status pulse
* insertion slot low glow
* small equipment monitor heartbeat movement
* tiny archive room ambient light
* subtle panel hum/breathing
* preview screen slight shimmer

Scene 5 motion must not be:

* chaotic
* colorful
* too fast
* childish arcade
* random data-line overload
* cheap sci-fi
* distracting from the machine
* too similar to Scene 2 command center motion

Scene 5 should feel more mechanical and industrial than Scene 2.

Scene 2 is command center.

Scene 5 is archive machine.

Detailed animation standards belong in MOTION_RULES.md.

This file defines only the visual motion direction.

## 30.17 Scene 5 Stable Default State

Scene 5 stable final state must show:

* PROJECT ARCHIVE title
* project cartridge rack
* six cartridges
* cartridge 03 active
* central project viewer machine
* Automated Clipping Website active
* workflow blocks inside viewer
* system idle message
* insertion slot
* right archive equipment wall
* bottom Project Summary panel
* bottom Workflow Preview panel
* bottom Project Proof / Output Preview panel
* bottom tip bar
* no Scene 6 achievement analytics content

The user should not need to click anything to understand the scene.

Interactions can be added later.

Default state must already look complete.

## 30.18 Scene 5 Interaction Direction

Interactions are not the first priority.

The final layout must be correct before interactions are added.

When interactions are later added, they should follow this direction:

* clicking a cartridge changes active project
* selected cartridge loads into central viewer
* central viewer updates workflow and summary
* proof preview updates with related placeholders/screenshots
* viewer area can reveal more project detail
* interaction should feel like inserting/loading a cartridge
* no basic accordion
* no default dropdown
* no normal project modal that breaks the scene
* no page scroll

Interaction must stay inside the one-viewport stage.

Interaction must not create a separate project page.

Interaction must not require vertical scrolling.

## 30.19 Scene 5 to Scene 6 Hook

Do not build Scene 6 yet.

But Scene 5 should prepare a hook into Scene 6.

The hook idea:

Project archive output becomes Achievement Analytics.

Visual story:

* project proof/output preview cards become evidence documents
* machine screen prints or emits credibility signals
* workflow output panels become metric panels
* archive proof slots align into achievement analytics dashboard
* selected project proof transforms into award/achievement evidence structure

Acceptable preparation:

* proof/output preview panel has clear evidence slots
* central machine has system output area
* archive machine can visually “process” proof
* bottom proof panel can later expand into achievement analytics
* small signal/heartbeat monitor can later become analytics graph

Forbidden preparation:

* do not show Achievement Analytics title yet
* do not show trophy dashboard yet
* do not show award cards yet
* do not add Scene 6 metrics yet
* do not add a normal “next section” button
* do not scroll down to achievements

---

# 31. Scene 5 Forbidden Layouts

Scene 5 is forbidden if it becomes:

* normal website project section
* project card grid
* case study list
* simple carousel
* plain dashboard
* normal screenshot gallery
* static image with text overlays
* basic tabs
* ordinary portfolio projects block
* scroll-down section below Scene 4
* Figma frame scroll
* PDF-like scroll

Scene 5 is also forbidden if:

* left cartridge rack is missing
* six cartridges are missing
* active cartridge 03 is missing
* central project viewer machine is missing
* workflow blocks are missing
* right archive equipment wall is missing
* bottom summary panel is missing
* bottom workflow preview panel is missing
* bottom proof/output panel is missing
* bottom tip bar is missing
* it invents fake project facts
* it claims fake production deployment
* it shows fake evidence as real
* layout does not fit in one viewport
* it ignores the clean-target

---

# 32. Scene 5 Acceptance Checklist

Scene 5 is accepted only if all of these are true:

1. It resembles the clean-target image.
2. It stays inside one viewport.
3. It does not feel like scroll-down website content.
4. It does not feel like Figma/PDF scrolling.
5. It feels like an industrial project archive machine.
6. PROJECT ARCHIVE title is visible.
7. Left Project Cartridges rack is visible.
8. Six cartridge rows are visible.
9. Cartridge 03 Automated Clipping Website is active.
10. Central Project Viewer Machine is visible.
11. Automated Clipping Website title is visible inside the viewer.
12. Pre-release workflow system subtitle is visible.
13. Four workflow blocks are visible.
14. Workflow blocks show Link Input, Processing Engine, Clipping Output, Upload Flow.
15. System idle message is visible.
16. Insert cartridge slot is visible.
17. Right archive equipment wall is visible.
18. Bottom Project Summary panel is visible.
19. Bottom Workflow Preview Diagram panel is visible.
20. Bottom Project Proof / Output Preview panel is visible.
21. Bottom tip bar is visible.
22. Scene does not look like normal project cards.
23. Scene does not look like generic dashboard.
24. Scene does not invent fake project proof.
25. Placeholders are clearly placeholders if real images are missing.
26. Scene 6 achievement analytics content does not appear yet.
27. The transition from Scene 4 uses building-to-cartridge transformation.
28. The transition does not feel like scrolling down.
29. The scene remains premium, readable, dark, and low-noise.
30. The one-viewport cinematic journey is preserved.

If any item fails, Scene 5 must be revised.
---

# 33. Scene 5 to Scene 6 Transition

Transition name:

Project Archive → Achievement Analytics

Transition family:

Cartridge scan / analytics formation

This transition family can be used again only one more time maximum in the whole portfolio, and only if the visual execution is meaningfully different.

## 33.1 Main Transition Story

Scene 5 represents projects stored as cartridges inside a project archive machine.

Scene 6 represents achievements as verified milestones inside an analytics museum.

The transition must feel like:

Project proof and archive outputs are being processed into achievement analytics.

The project archive does not disappear.

It transforms.

The central project viewer machine becomes a museum display case.

The selected project cartridge transforms into an achievement trophy core.

The project proof/output preview panels become credibility evidence and analytics metrics.

The archive shelves become museum columns and display walls.

The machine glow becomes a spotlight on the trophy.

The PROJECT ARCHIVE title transforms into ACHIEVEMENT ANALYTICS.

The final Scene 6 state must match:

public/reference/clean-target/slide-6-achievement-analytics.png

## 33.2 What Must Not Happen

The transition must not feel like:

* scrolling down to Slide 6
* Figma frame scroll
* PDF scroll
* a new awards section appearing below projects
* a simple fade from project archive to achievement cards
* a trophy image suddenly appearing
* normal certificates appearing as cards
* a generic statistics dashboard
* a basic awards list
* a standard portfolio achievement section

If the user feels they scrolled down to a new page block, the transition is failed.

If Scene 6 appears as a normal achievement section below Scene 5, it is failed.

If the final state does not resemble the clean-target image, it is failed.

## 33.3 Transition Visual Logic

The transition should visually communicate:

“Project outputs are being converted into measurable achievement proof.”

This should happen through object role changes:

* Scene 5 central project viewer machine becomes Scene 6 central trophy display case.
* Scene 5 active cartridge becomes a trophy plaque or selected achievement core.
* Scene 5 cartridge rack becomes Scene 6 achievement list.
* Scene 5 project proof/output preview becomes Scene 6 selected achievement evidence/metadata.
* Scene 5 bottom project summary and workflow preview become Scene 6 performance analytics strip.
* Scene 5 archive shelves become Scene 6 museum walls, pillars, and display cabinets.
* Scene 5 machine status lights become Scene 6 museum spotlights and metric indicators.
* PROJECT ARCHIVE title transforms into ACHIEVEMENT ANALYTICS.

## 33.4 Transition Progress Story

The exact implementation can vary, but the visual story must follow this structure.

### Progress 0.00 to 0.15 — Project Archive Stable

Visible state:

* Scene 5 final state is stable.
* PROJECT ARCHIVE title is visible.
* Left project cartridge rack is visible.
* Central project viewer machine is visible.
* Active project cartridge is visible.
* Bottom project summary, workflow, and proof preview are visible.
* Right archive equipment wall is visible.

No Scene 6 trophy museum content should dominate yet.

### Progress 0.15 to 0.35 — Proof Processing Begins

Visual behavior:

* The central project viewer screen begins to dim and reframe.
* Proof/output preview slots become more important.
* Project workflow blocks compress into metric blocks.
* Cartridge LEDs shift from loading/status lights into award/milestone lights.
* Active cartridge begins transforming into a trophy plaque or achievement token.
* Archive machinery starts becoming museum framing.

Not allowed:

* trophy suddenly appearing with no relation to project proof
* project archive fading out instantly
* awards section sliding up from below
* normal award cards appearing

### Progress 0.35 to 0.55 — Machine Becomes Display Case

Visual behavior:

* The central project viewer machine opens into a glass trophy display.
* The project cartridge frame becomes the trophy base/plaque.
* The active proof/evidence material forms the selected achievement identity.
* Archive storage walls become museum columns and wall panels.
* Bottom panels reorganize into analytics metric cards.
* The left cartridge rack reshapes into an achievements list.
* The title area transitions from PROJECT ARCHIVE toward ACHIEVEMENT ANALYTICS.

Not allowed:

* generic dashboard appearing
* trophy not connected to previous project machine
* no museum transformation
* no analytics strip

### Progress 0.55 to 0.75 — Museum Analytics Forms

Visual behavior:

* The trophy becomes visible in the central glass case.
* Museum spotlights turn on.
* Left achievement list stabilizes.
* Right selected achievement panel forms.
* Bottom performance analytics strip becomes readable.
* Dark industrial archive atmosphere becomes a warmer museum-of-proof atmosphere.
* Bronze/gold trophy highlights become dominant while teal remains restrained.

Not allowed:

* bright colorful awards screen
* ordinary certificate grid
* simple trophy image over background
* overusing neon glow

### Progress 0.75 to 1.00 — Scene 6 Final State

Final state must clearly match:

public/reference/clean-target/slide-6-achievement-analytics.png

Visible state:

* ACHIEVEMENT ANALYTICS title stable.
* Subtitle visible.
* Left achievements list visible.
* Center trophy display case visible.
* Right selected achievement panel visible.
* Bottom performance analytics strip visible.
* Metrics visible.
* Museum environment visible.
* No Scene 7 knowledge map content yet.

## 33.5 Transition Hook Quality

The transition hook is the moment the viewer understands:

“The project archive has produced achievement proof.”

The hook should come from object transformation, not explanation text.

Acceptable hook examples:

* project viewer screen opens into trophy display case
* project cartridge becomes trophy plaque
* proof preview slots become analytics metrics
* archive machine lights become museum spotlights
* cartridge rack becomes achievement list
* project evidence becomes selected achievement metadata

Forbidden hook examples:

* “NEXT: ACHIEVEMENT ANALYTICS” label
* scroll arrow
* simple fade
* simple slide
* random trophy popup
* normal awards section reveal
* ordinary stats dashboard appearing

---

# 34. Scene 6 — Achievement Analytics

Clean target:

public/reference/clean-target/slide-6-achievement-analytics.png

Concept board:

public/reference/concept-board/slide-6-achievement-analytics-board.png

## 34.1 Scene Purpose

Scene 6 shows Kiagus achievements as an analytics museum.

It must feel like:

* a museum of proof
* a trophy analytics dashboard
* an achievement display hall
* a credibility interface
* a premium milestone room
* a data-backed achievement screen

It must not feel like:

* a normal awards list
* a certificate gallery
* a generic dashboard
* a plain statistics section
* a basic achievement card grid
* a trophy image pasted on a background
* a normal website block below Scene 5

The user should immediately understand:

* achievements are being displayed as proof and credibility data
* the selected achievement is COMPFEST 16 AI Innovation Challenge
* the central trophy is the main symbolic object
* the right panel explains the selected achievement
* the bottom strip summarizes achievement analytics
* this is still one cinematic viewport, not a scroll-down page

## 34.2 Scene 6 Clean-Target Visual Summary

The clean-target image shows a dark museum/analytics UI.

It contains:

* top title:
  ACHIEVEMENT ANALYTICS
* subtitle:
  A museum of milestones. Data that proves impact.
* left achievements list
* center trophy in glass display case
* right selected achievement details
* bottom performance analytics section
* museum columns, lights, walls, and display environment
* bronze/gold trophy accents
* dark premium atmosphere
* structured metric cards

This must be reconstructed with real components.

Do not render the clean-target as a static background.

## 34.3 Scene 6 Required Final Layout

Scene 6 final state must use one viewport.

The scene must be readable without scrolling down.

The layout should feel like one museum analytics screen.

### Top Title Region

Placement:

* x: 25% to 75%
* y: 3% to 11%

Content:

ACHIEVEMENT ANALYTICS

Subtitle:

A museum of milestones. Data that proves impact.

Visual style:

* centered title
* trophy icons or trophy accents can be placed left/right of title
* museum title plate
* bronze/gold accent
* not clipped
* not a basic heading

Rules:

* title must be the first visual anchor
* subtitle must be readable
* no “Slide 6” text
* no concept-board annotation text in final UI

### Left Achievements List Region

Placement:

* x: 3% to 27%
* y: 13% to 61%

Content:

* panel title:
  ACHIEVEMENTS
* six achievement rows
* COMPFEST 16 active
* bottom count:
  06 / 06 ACHIEVEMENTS

Purpose:

This is the achievement selector.

It must feel like a museum archive index, not a plain list.

### Center Trophy Display Region

Placement:

* x: 30% to 70%
* y: 14% to 61%

Content:

* central trophy inside glass display case
* trophy base/plaque
* recognition statement under display
* museum spotlight
* surrounding pedestal/frame

Purpose:

This is the hero object of Scene 6.

It must dominate the scene.

### Right Selected Achievement Region

Placement:

* x: 73% to 97%
* y: 13% to 61%

Content:

* panel title:
  SELECTED ACHIEVEMENT
* selected achievement title
* rank
* scale
* domain
* related capability
* outcome

Purpose:

This explains the selected achievement.

It must feel like a museum exhibit label + analytics metadata panel.

### Bottom Performance Analytics Region

Placement:

* x: 3% to 97%
* y: 66% to 95%

Content:

* header:
  PERFORMANCE ANALYTICS
* six metric cards
* bottom note text
* view trends action

Purpose:

This converts achievements into measurable credibility analytics.

It must not feel like random stats.

## 34.4 Scene 6 Color and Mood Lock

Scene 6 must shift from Scene 5’s industrial machine archive into a museum analytics room.

Use:

* near black
* dark walnut / dark bronze
* charcoal
* muted gold
* trophy gold
* amber spotlights
* restrained teal/cyan for analytics indicators
* soft emerald for positive indicators
* low-noise warm highlights

Avoid:

* bright yellow everywhere
* rainbow achievement colors
* playful arcade trophy colors
* pure white dashboard
* generic corporate charts
* too much neon cyan
* too much green
* cheap glowing trophy look

The mood should be:

* prestigious
* credible
* museum-like
* analytical
* premium
* warm but dark
* serious
* evidence-based

## 34.5 Left Achievements List Content

Panel title:

ACHIEVEMENTS

The achievement list must show six rows.

Important safety rule:

Only use achievements as factual if they are confirmed in CONTENT_SOURCE.md or other provided portfolio content.

If any achievement is not confirmed, it may be visually shown as a replaceable placeholder slot, but must not be presented as verified factual proof.

### Achievement 01

Title:

COMPFEST 16

Subtitle:

AI INNOVATION CHALLENGE

State:

active / selected

Icon:

gold trophy

Factual status:

confirmed if CONTENT_SOURCE.md states Champion — COMPFEST 16 AI Innovation Challenge.

### Achievement 02

Title:

ICONIC IT

Subtitle:

UI/UX COMPETITION

State:

inactive

Icon:

blue/silver badge or medal

Factual status:

confirmed if CONTENT_SOURCE.md states runner-up / related placement.

### Achievement 03

Title:

BANGKIT PROGRAM

Subtitle:

ML PATH

State:

inactive

Icon:

teal gear / program badge

Factual status:

confirmed if CONTENT_SOURCE.md states Best 2nd Product or related Bangkit achievement.

### Achievement 04

Title:

DATA SCIENCE SUMMIT

Subtitle:

Replaceable achievement slot if not confirmed

State:

inactive / placeholder if not verified

Icon:

silver trophy or document icon

Factual status:

must be verified before presented as real.

### Achievement 05

Title:

LEADERSHIP AWARD

Subtitle:

Replaceable achievement slot if not confirmed

State:

inactive / placeholder if not verified

Icon:

gold trophy or leadership badge

Factual status:

must be verified before presented as real.

### Achievement 06

Title:

AI HACKATHON

Subtitle:

PARTICIPANT

State:

inactive / placeholder if not verified

Icon:

certificate or code badge

Factual status:

must be verified before presented as real.

Bottom count:

06 / 06 ACHIEVEMENTS

Visual rules:

* each row must have icon, title, subtitle, and frame
* selected row must glow gold/amber
* inactive rows must remain readable
* list must not look like plain buttons
* list must not look like plain cards
* placeholder status must not be hidden if content is unverified
* do not invent fake rank, year, or organization details

## 34.6 Center Trophy Display Case

The center trophy display is the main hero object.

Required objects:

* trophy
* glass display case
* pedestal/base
* front plaque
* museum spotlight
* dark background panels
* subtle dust/light particles
* side columns or frame structures

Trophy plaque text:

COMPFEST 16
CHAMPION

Small recognition label under display:

RECOGNITION. IMPACT. GROWTH.

Visual rules:

* trophy must be large and central
* trophy must feel physical and prestigious
* glass case must be visible
* pedestal must feel heavy and premium
* spotlight should feel museum-like
* trophy must not look like a flat emoji
* central area must not become empty dashboard
* do not add fake certificate images inside the case

## 34.7 Right Selected Achievement Panel

Panel title:

SELECTED ACHIEVEMENT

Selected achievement title:

COMPFEST 16
AI INNOVATION CHALLENGE

Metadata blocks:

### Rank

Label:

RANK

Value:

Champion

### Scale

Label:

SCALE

Value:

National-level competition

### Domain

Label:

DOMAIN

Value:

AI Innovation

### Related Capability

Label:

RELATED CAPABILITY

Value:

AI Problem Formulation, Innovation, Team Execution

### Outcome

Label:

OUTCOME

Value:

National-level recognition

Visual rules:

* each metadata block should have icon
* each block should have label and value
* panel must be readable
* panel must feel like a museum exhibit info card
* no long paragraph
* no unsupported metric
* no fake proof
* no fake certificate preview
* value text must not overflow

## 34.8 Bottom Performance Analytics Section

Section title:

PERFORMANCE ANALYTICS

Placement:

* x: 3% to 97%
* y: 66% to 95%

The section must contain six metric cards.

### Metric 1

Title:

AWARDS WON

Value:

6

Subtitle:

Total

Icon:

trophy

Safety:

Use 6 only if CONTENT_SOURCE.md confirms total achievements or if this is a portfolio display count. If not confirmed, treat as display count of listed achievement slots, not verified award count.

### Metric 2

Title:

COMPETITIONS

Value:

6

Subtitle:

Participated

Icon:

monitor / competition screen

Safety:

Use only if confirmed, otherwise treat as placeholder/display count.

### Metric 3

Title:

RECOGNITION LEVEL

Value:

National

Subtitle:

Highest Level

Icon:

bar level / ranking bars

### Metric 4

Title:

IMPACT SCORE

Value:

91%

Subtitle:

High Impact

Icon:

semi-circle gauge

Safety:

This must not be presented as real measured performance unless confirmed. If not confirmed, label as conceptual display metric or placeholder analytics.

### Metric 5

Title:

DOMAINS COVERED

Value:

4

Subtitle:

Domains

Icon:

grid

Safety:

Allowed as categorized display if domains are defined in CONTENT_SOURCE.md.

### Metric 6

Title:

GROWTH TREND

Value:

+34%

Subtitle:

vs last period

Icon:

line chart

Safety:

This must not be presented as real measured growth unless confirmed. If not confirmed, label as conceptual display placeholder.

Bottom note:

Metrics reflect outcomes, learning, and contribution across competitions and initiatives.

Button/action:

VIEW TRENDS

Visual rules:

* metric cards must align in one horizontal strip
* cards must be readable
* metric icons must be visible
* gauge/line chart can be visual but must not imply fake real data if unverified
* if values are placeholders, visually or textually mark them as display placeholders during implementation
* no fake analytics claim
* no fake data source

## 34.9 Scene 6 Evidence and Truthfulness Rules

Scene 6 must be credible.

Do not invent evidence.

Do not invent certificates.

Do not invent ranks.

Do not invent competition results.

Do not invent numerical metrics as real facts.

Allowed:

* confirmed achievements from CONTENT_SOURCE.md
* placeholder slots clearly labeled as placeholders
* conceptual analytics clearly labeled as display/concept if unverified
* trophy visual as symbolic representation
* museum framing
* evidence slots to be filled later

Forbidden unless verified:

* fake certificate thumbnails
* fake award documents
* fake judge comments
* fake ranking numbers
* fake user growth
* fake impact percentages
* fake dates
* fake sponsors
* fake competition scale beyond known facts

If unsure, use safe wording:

* Recognition Display
* Achievement Slot
* Evidence Placeholder
* Conceptual Analytics
* To Be Verified
* Replace with verified proof

## 34.10 Scene 6 UI Detail Requirements

Scene 6 must look custom-built and premium.

Required UI details:

* outer museum frame
* top title plate
* trophy icons near title
* left achievements list frame
* selected achievement glow
* central glass case
* trophy pedestal
* museum columns
* warm spotlights
* right metadata panel
* metadata block dividers
* bottom analytics frame
* metric cards
* gauge card
* mini trend chart card
* button frame
* corner brackets
* subtle panel seams
* small amber LEDs
* controlled teal analytics accents

The scene must not be visually empty.

But it must remain readable.

The density should match the clean-target:

* museum environment
* trophy display
* left/right information panels
* bottom analytics strip
* premium game UI framing

## 34.11 Scene 6 Background Environment

The background must support the Achievement Analytics identity.

Required background elements:

* museum hall
* dark walls
* columns or pillars
* display case area
* warm spotlights
* floor perspective
* side plaques or wall frames
* subtle equipment/display panels
* dark premium vignette

The background should be visible behind:

* trophy display
* left achievements panel
* right selected achievement panel
* bottom analytics section

Rules:

* background must not overpower text
* museum display case must be integrated
* trophy should look physically placed in the room
* no flat solid background only
* no generic dashboard background
* no city background
* no project archive shelf dominance

## 34.12 Scene 6 Component Map

Scene 6 components may be created later during implementation.

Suggested component responsibilities:

AchievementAnalyticsScene or equivalent:

* owns Scene 6 final composition
* keeps all Scene 6 objects inside the pinned viewport

AchievementListPanel or equivalent:

* renders left achievements list

AchievementListItem or equivalent:

* renders each achievement row

TrophyDisplayCase or equivalent:

* renders central trophy, glass case, pedestal, and spotlight

SelectedAchievementPanel or equivalent:

* renders right selected achievement metadata

AchievementMetadataBlock or equivalent:

* renders rank, scale, domain, capability, outcome blocks

PerformanceAnalyticsStrip or equivalent:

* renders bottom analytics section

AchievementMetricCard or equivalent:

* renders each metric card

MuseumEnvironmentLayer or equivalent:

* renders columns, walls, spotlights, and atmospheric background

TrendMiniChart or equivalent:

* renders the small growth trend visual

ImpactGauge or equivalent:

* renders the impact score gauge

Important:

If these components do not exist yet, Codex may create them later.

But Codex must not create ordinary award cards as a substitute.

Codex must not build Scene 6 as a normal vertical section.

Codex must not ignore the clean-target composition.

Codex must not invent fake achievement facts.

## 34.13 Scene 6 Motion Direction

Scene 6 stable state should feel like a museum analytics exhibit.

Allowed idle motion:

* subtle spotlight shimmer
* trophy highlight glint
* very light glass reflection movement
* selected achievement row glow pulse
* small metric LED blink
* gentle gauge idle sweep
* tiny trend chart shimmer
* dust particles in spotlight
* soft museum ambient lighting

Scene 6 motion must not be:

* chaotic
* too fast
* colorful
* arcade-like
* fireworks
* trophy explosion
* random data lines everywhere
* cheap neon
* distracting from trophy and metrics

Scene 6 should feel more prestigious and still than Scene 5.

Scene 5 is mechanical archive.

Scene 6 is museum analytics.

Detailed animation standards belong in MOTION_RULES.md.

This file defines only the visual motion direction.

## 34.14 Scene 6 Stable Default State

Scene 6 stable final state must show:

* ACHIEVEMENT ANALYTICS title
* subtitle
* left achievements list
* COMPFEST 16 active
* center trophy display case
* trophy plaque
* right selected achievement panel
* rank / scale / domain / related capability / outcome blocks
* bottom performance analytics strip
* six metric cards
* view trends action
* museum environment
* no Scene 7 knowledge map content

The user should not need to click anything to understand the scene.

Interactions can be added later.

Default state must already look complete.

## 34.15 Scene 6 Interaction Direction

Interactions are not the first priority.

The final layout must be correct before interactions are added.

When interactions are later added, they should follow this direction:

* clicking an achievement row changes selected achievement
* central trophy/plaque updates based on selected achievement
* right metadata panel updates
* bottom analytics can update by category
* view trends can reveal a trend view inside the same scene later
* interaction should feel like selecting a museum exhibit
* no basic accordion
* no default dropdown
* no modal that breaks the museum layout
* no page scroll

Interaction must stay inside the one-viewport stage.

Interaction must not create a separate achievement page.

Interaction must not require vertical scrolling.

## 34.16 Scene 6 to Scene 7 Hook

Do not build Scene 7 yet.

But Scene 6 should prepare a hook into Scene 7.

The hook idea:

Achievement analytics becomes Knowledge Map.

Visual story:

* trophy reflections fragment into nodes
* achievement metric cards become knowledge/skill nodes
* analytics lines become relationship edges
* museum display case glass becomes graph frame
* selected achievement metadata becomes node detail structure
* performance analytics strip becomes graph cluster base

Acceptable preparation:

* trophy has subtle reflective particles that could become nodes
* metric cards are visually modular enough to become node clusters
* trend line can later become graph edge
* right metadata blocks can later become node detail cards
* display case frame can later open into graph space

Forbidden preparation:

* do not show Knowledge Map title yet
* do not show full node graph yet
* do not show Scene 7 clusters yet
* do not add skill map content yet
* do not add normal “next section” button
* do not scroll down to skills/knowledge map

---

# 35. Scene 6 Forbidden Layouts

Scene 6 is forbidden if it becomes:

* normal website achievements section
* awards list
* certificate grid
* plain stats dashboard
* generic KPI cards
* normal trophy card
* simple achievement carousel
* static trophy image with cards
* basic timeline
* scroll-down section below Scene 5
* Figma frame scroll
* PDF-like scroll

Scene 6 is also forbidden if:

* title is missing
* left achievements list is missing
* central trophy display is missing
* right selected achievement panel is missing
* bottom performance analytics section is missing
* museum environment is missing
* trophy is too small
* trophy is flat or emoji-like
* metric cards are unreadable
* layout does not fit in one viewport
* it invents fake achievement proof
* it presents placeholder metrics as real verified data
* it ignores the clean-target

---

# 36. Scene 6 Acceptance Checklist

Scene 6 is accepted only if all of these are true:

1. It resembles the clean-target image.
2. It stays inside one viewport.
3. It does not feel like scroll-down website content.
4. It does not feel like Figma/PDF scrolling.
5. It feels like a museum achievement analytics room.
6. ACHIEVEMENT ANALYTICS title is visible.
7. Subtitle is visible.
8. Left achievements list is visible.
9. COMPFEST 16 is active by default.
10. Six achievement rows are visible or valid placeholder slots.
11. Center trophy display case is visible.
12. Trophy is large and physically integrated.
13. Trophy plaque is visible.
14. Right selected achievement panel is visible.
15. Rank block is visible.
16. Scale block is visible.
17. Domain block is visible.
18. Related capability block is visible.
19. Outcome block is visible.
20. Bottom Performance Analytics section is visible.
21. Six metric cards are visible.
22. View Trends action is visible.
23. Museum columns/walls/spotlights are visible.
24. Scene does not look like a generic stats dashboard.
25. Scene does not look like a normal awards list.
26. Scene does not invent fake proof or fake data.
27. Unverified metrics are treated as placeholders/conceptual display.
28. Scene 7 knowledge map content does not appear yet.
29. The transition from Scene 5 uses cartridge/proof-to-trophy analytics transformation.
30. The transition does not feel like scrolling down.
31. The scene remains premium, readable, dark, warm, and low-noise.
32. The one-viewport cinematic journey is preserved.

If any item fails, Scene 6 must be revised.

---

# 37. Scene 6 to Scene 7 Transition

Transition name:

Achievement Analytics → Knowledge Map

Transition family:

Trophy fragmentation / node graph formation

This transition family can be used again only one more time maximum in the whole portfolio, and only if the visual execution is meaningfully different.

## 37.1 Main Transition Story

Scene 6 represents achievements as verified milestones inside a museum analytics room.

Scene 7 represents Kiagus capability relationships as a connected knowledge map.

The transition must feel like:

Achievement proof breaks into connected knowledge nodes.

The achievement museum does not disappear.

It transforms.

The central trophy reflection fragments into knowledge nodes.

The performance analytics metrics become domain clusters.

The selected achievement metadata blocks become subskill lists.

The museum display case glass becomes a graph interface frame.

The trophy spotlight becomes the central node glow.

The ACHIEVEMENT ANALYTICS title transforms into KNOWLEDGE MAP INTERFACE.

The final Scene 7 state must match:

public/reference/clean-target/slide-7-knowledge-map.png

## 37.2 What Must Not Happen

The transition must not feel like:

* scrolling down to Slide 7
* Figma frame scroll
* PDF scroll
* a new skill section appearing below achievements
* a simple fade from trophy to mind map
* a normal skill chart appearing
* a plain mind map replacing the museum
* a generic network diagram
* a list of skills
* a dashboard of skill cards
* a normal portfolio skills section

If the user feels they scrolled down to a new page block, the transition is failed.

If Scene 7 appears as a normal skills section below Scene 6, it is failed.

If the final state does not resemble the clean-target image, it is failed.

## 37.3 Transition Visual Logic

The transition should visually communicate:

“Achievements prove the capability network behind the builder.”

This should happen through object role changes:

* Scene 6 trophy highlights fragment into graph nodes.
* Scene 6 trophy display case becomes the large graph canvas frame.
* Scene 6 performance metric cards become domain cluster nodes.
* Scene 6 selected achievement metadata blocks become subskill list modules.
* Scene 6 analytics trend lines become graph connection edges.
* Scene 6 museum spotlights dim into dark grid-map interface lighting.
* Scene 6 left achievement list compresses into left-side skill sublists.
* Scene 6 right metadata panel reorganizes into right-side skill sublists.
* ACHIEVEMENT ANALYTICS title transforms into KNOWLEDGE MAP INTERFACE.

## 37.4 Transition Progress Story

The exact implementation can vary, but the visual story must follow this structure.

### Progress 0.00 to 0.15 — Achievement Analytics Stable

Visible state:

* Scene 6 final state is stable.
* ACHIEVEMENT ANALYTICS title is visible.
* Central trophy display case is visible.
* Left achievement list is visible.
* Right selected achievement panel is visible.
* Bottom performance analytics strip is visible.
* Museum environment is visible.

No Scene 7 graph should dominate yet.

### Progress 0.15 to 0.35 — Trophy Reflection Splits

Visual behavior:

* Trophy reflection starts producing small controlled points of light.
* The glass display case becomes more like a digital grid frame.
* Bottom metric cards begin compressing into compact domain nodes.
* Trend line and gauge marks start becoming graph edges.
* Left and right info panels begin breaking into compact subskill rows.
* Museum lighting cools down from bronze to deep navy/teal.

Not allowed:

* trophy instantly disappearing
* full graph appearing suddenly
* simple fade to skill map
* normal skill cards sliding up from below

### Progress 0.35 to 0.55 — Analytics Become Domain Clusters

Visual behavior:

* Metric cards become the main domain nodes.
* A central node begins forming:
  DATA SCIENCE & AI BUILDER
* Trophy glow collapses into the central node.
* Domain clusters orbit around the central node.
* Left/right metadata blocks become subskill lists connected to their domain nodes.
* Museum walls flatten into a dark technical grid canvas.

Not allowed:

* plain mind map
* random node positions
* generic graph with no content structure
* no central builder node
* no subskill lists

### Progress 0.55 to 0.75 — Knowledge Map Stabilizes

Visual behavior:

* Central node becomes stable.
* Seven domain nodes become readable.
* Subskill lists attach to the correct domain nodes.
* Dashed/solid connection edges become visible.
* Background becomes dark grid interface.
* The title becomes KNOWLEDGE MAP INTERFACE.
* Bottom instruction bar forms.

Not allowed:

* unstructured scattered labels
* all nodes same size
* no visual hierarchy
* no domain grouping
* unreadable tiny subskills

### Progress 0.75 to 1.00 — Scene 7 Final State

Final state must clearly match:

public/reference/clean-target/slide-7-knowledge-map.png

Visible state:

* KNOWLEDGE MAP INTERFACE title stable.
* Central DATA SCIENCE & AI BUILDER node visible.
* Seven domain nodes visible.
* Subskill lists visible around the map.
* Connection lines visible.
* Bottom instruction bar visible.
* Dark grid interface visible.
* No Scene 8 future laboratory content yet.

## 37.5 Transition Hook Quality

The transition hook is the moment the viewer understands:

“The achievement proof has revealed the connected knowledge system behind Kiagus.”

The hook should come from object transformation, not explanation text.

Acceptable hook examples:

* trophy reflection particles become graph nodes
* analytics cards become domain clusters
* trend lines become graph edges
* metadata blocks become subskill lists
* display case becomes grid canvas
* central trophy glow becomes DATA SCIENCE & AI BUILDER node

Forbidden hook examples:

* “NEXT: KNOWLEDGE MAP” label
* scroll arrow
* simple fade
* simple slide
* random particle explosion
* plain skills section reveal
* normal mind map appearing below the page

---

# 38. Scene 7 — Knowledge Map

Clean target:

public/reference/clean-target/slide-7-knowledge-map.png

Concept board:

public/reference/concept-board/slide-7-knowledge-map-board.png

## 38.1 Scene Purpose

Scene 7 shows Kiagus knowledge, skill, and execution capabilities as a connected map.

It must feel like:

* a technical knowledge graph
* a capability relationship map
* a data science + AI builder system diagram
* a premium dark interface
* a structured skill network
* a final synthesis of previous scenes

It must not feel like:

* a normal skill list
* a basic mind map
* a resume skills section
* a generic chart
* a dashboard of skill cards
* a random node graph
* a course list
* a normal website block below Scene 6

The user should immediately understand:

* Kiagus is positioned as DATA SCIENCE & AI BUILDER.
* The central builder identity connects to multiple capability domains.
* Each domain has specific subskills.
* The map shows how skills relate, not just a list of skills.
* This is still one cinematic viewport.

## 38.2 Scene 7 Clean-Target Visual Summary

The clean-target image shows a dark grid knowledge map interface.

It contains:

* top title:
  KNOWLEDGE MAP INTERFACE
* central node:
  DATA SCIENCE & AI BUILDER
* seven major domain nodes:
  STATISTICS
  RESEARCH
  BUSINESS ANALYTICS
  LEADERSHIP
  SYSTEMS
  DATA ENGINEERING
  MACHINE LEARNING
* subskill lists around the domain nodes
* dotted and solid connection lines
* dark grid background
* bottom instruction bar:
  EXPLORE CONNECTIONS BETWEEN SKILLS.
  CLICK ANY DOMAIN TO VIEW SUBSKILLS AND EVIDENCE.

This must be reconstructed with real components.

Do not render the clean-target as a static background.

## 38.3 Scene 7 Required Final Layout

Scene 7 final state must use one viewport.

The scene must be readable without scrolling down.

The layout should feel like one complete knowledge graph screen.

### Top Interface Header Region

Placement:

* x: 2% to 60%
* y: 2% to 8%

Content:

KNOWLEDGE MAP INTERFACE

Visual style:

* small technical HUD title
* left-aligned like clean-target
* muted cyan/teal
* not a large centered hero title
* not a normal website heading

Rules:

* title must be visible
* title must not say “Slide 7”
* title must not contain concept-board annotation text unless it is part of the clean-target visual language
* title should feel like a system interface label

### Central Builder Node Region

Placement:

* x: 41% to 59%
* y: 39% to 56%

Content:

DATA SCIENCE
& AI BUILDER

Visual style:

* largest node in the map
* central anchor
* strong cyan/teal glow
* octagonal or technical framed shape
* connected to all major domains
* readable from first glance

Rules:

* central node must visually dominate
* central node must not be hidden by lines
* central node must not be same size as subskill rows
* central node must not be placed off-center
* central node must be the graph’s anchor

### Domain Node Ring / Map Region

Placement:

* x: 15% to 85%
* y: 10% to 80%

Content:

Seven major domain nodes arranged around the central node.

Required domain nodes:

1. STATISTICS
2. RESEARCH
3. BUSINESS ANALYTICS
4. LEADERSHIP
5. SYSTEMS
6. DATA ENGINEERING
7. MACHINE LEARNING

Purpose:

These are the main capability domains connected to the central builder node.

Rules:

* domain nodes must be larger than subskill rows
* each domain node must have icon/glyph
* each domain node must have distinct but restrained accent color
* all domain nodes must connect to the central node
* the map must not look randomly scattered
* hierarchy must be clear: central node > domain nodes > subskill rows

### Subskill List Regions

Subskill lists must be placed around the domain nodes.

They must appear as compact connected rows.

They must not become paragraphs.

They must not become plain bullet lists.

They must be visually attached to the correct domain.

### Bottom Instruction Bar Region

Placement:

* x: 15% to 95%
* y: 88% to 97%

Content:

EXPLORE CONNECTIONS BETWEEN SKILLS.
CLICK ANY DOMAIN TO VIEW SUBSKILLS AND EVIDENCE.

Visual style:

* framed instruction bar
* info icon on the left
* muted cyan/teal text
* dark transparent panel
* integrated into the graph interface
* not a footer

## 38.4 Scene 7 Color and Mood Lock

Scene 7 must shift from Scene 6’s warm museum into a dark analytical graph interface.

Use:

* near black
* deep navy
* dark blue grid
* muted cyan
* teal
* restrained purple
* restrained yellow/gold
* restrained blue
* restrained orange
* small green status dots
* soft glow only around active nodes

Avoid:

* rainbow mind map
* bright colorful school chart
* white background
* plain black background without grid
* childish node colors
* cheap neon overload
* random cyberpunk noise
* too many particle effects

The mood should be:

* analytical
* connected
* technical
* premium
* calm
* futuristic but restrained
* dark interface
* graph-based
* not decorative only

## 38.5 Central Node Content

Central node text:

DATA SCIENCE
& AI BUILDER

Visual requirements:

* two-line text
* central aligned
* thick technical border
* cyan/teal glow
* subtle inner grid or scan texture
* small corner brackets
* appears like a core processor or main map node

Role:

This node represents Kiagus’ main positioning.

It connects to all domains.

It is the center of meaning.

Forbidden:

* replacing central node with a photo
* making central node a plain rectangle
* making central node small
* placing central node at top or bottom
* using “AI Specialist” only and losing Data Science & AI Builder positioning

## 38.6 Domain Node Content and Placement

The seven domain nodes must use this exact content and approximate placement.

### Domain 1 — Statistics

Title:

STATISTICS

Icon direction:

bar chart / statistical bars / probability chart

Placement:

* upper center
* above central node

Accent:

cyan / teal

Connected subskills:

Left upper group:

* Inference
* Probability
* Bayesian
* Sampling

Right upper group:

* Forecasting
* Multivariate
* Stochastic
* Optimization

Rules:

* Statistics node should sit above central node.
* It should connect vertically to central node.
* Its subskills should branch to left and right above it.
* It must not become a course list detached from the graph.

### Domain 2 — Research

Title:

RESEARCH

Icon direction:

magnifying glass / research lens

Placement:

* left middle
* slightly above center

Accent:

purple

Connected subskills:

* Problem Formulation
* Survey Design
* Data Validation
* Analytical Usability

Rules:

* Research node should connect to central node.
* Subskill rows should sit to the far left of Research node.
* Rows must connect visually toward Research.

### Domain 3 — Business Analytics

Title:

BUSINESS
ANALYTICS

Icon direction:

growth chart / business chart

Placement:

* lower-left middle

Accent:

gold / yellow

Connected subskills:

* Decision Support
* Financial Risk
* Product Thinking

Rules:

* Business Analytics node should connect to central node.
* Subskill rows should sit to the far left/lower-left.
* It should not look like a finance dashboard.
* It represents decision/business reasoning.

### Domain 4 — Leadership

Title:

LEADERSHIP

Icon direction:

team / group / people

Placement:

* lower center-left
* below central node but not directly under it

Accent:

orange / warm amber

Connected subskills:

* Technical Direction
* Mentoring
* Community Leadership

Rules:

* Leadership node should connect to central node.
* Subskill rows should sit below it.
* It should not dominate over technical domains.
* It completes the builder identity.

### Domain 5 — Systems

Title:

SYSTEMS

Icon direction:

gear / system cog

Placement:

* lower center-right

Accent:

teal / green

Connected subskills:

* System Design
* Workflow Automation
* Web Solutions
* Backend Fundamentals

Rules:

* Systems node should connect to central node.
* Subskill rows should sit to the lower-right.
* It represents system and workflow execution.
* It should not merge with Data Engineering.

### Domain 6 — Data Engineering

Title:

DATA
ENGINEERING

Icon direction:

database cylinder / data stack

Placement:

* right middle-lower

Accent:

blue

Connected subskills:

* Database Design
* Data Warehouse
* Big Data
* Data Pipelines
* Query Optimization
* Cloud Computing

Rules:

* Data Engineering node should connect to central node.
* Subskill rows should sit to the far right/lower-right.
* It must be distinct from Systems.
* It should feel technical and infrastructure-oriented.

### Domain 7 — Machine Learning

Title:

MACHINE
LEARNING

Icon direction:

brain / AI node / neural icon

Placement:

* right middle-upper

Accent:

pink / magenta / muted red

Connected subskills:

* Supervised Learning
* Unsupervised Learning
* Classification
* Regression
* Clustering
* Text Mining
* Computer Vision

Rules:

* Machine Learning node should connect to central node.
* Subskill rows should sit to the far right/upper-right.
* It must not overpower the central node.
* It represents ML and AI capability, not generic “AI magic.”

## 38.7 Subskill Row Rules

Each subskill row must look like a small connected terminal row.

Required row elements:

* small status dot or node dot
* subskill label
* thin frame or row capsule
* subtle glow based on parent domain color
* connecting line to parent domain group

Rules:

* subskill rows must be readable
* rows must not be too tiny
* rows must not overlap
* rows must not become plain bullet text
* rows must not become floating random labels
* rows must align in neat stacks
* each subskill must belong visually to the correct domain
* no paragraphs inside subskill rows

Subskill rows are secondary.

Domain nodes are primary.

Central node is the strongest.

## 38.8 Connection Line Rules

Connection lines are critical.

Required line types:

* central node to each domain node
* each domain node to its subskill list
* some connections may be dotted
* some connections may be solid
* lines should be thin and restrained
* lines should not cover text

Visual rules:

* lines must show relationship clearly
* lines must not become messy spaghetti
* lines must not be random decorative wires
* lines must not be too bright
* lines should use muted cyan/gray with domain accents
* graph must remain readable

Connection hierarchy:

1. Central-to-domain connections are stronger.
2. Domain-to-subskill connections are lighter.
3. Decorative grid lines are weakest.

## 38.9 Background Grid Environment

The background must support the Knowledge Map identity.

Required background elements:

* dark blue/black grid
* subtle node-map frame
* faint technical texture
* corner HUD brackets
* subtle vignette
* low-noise digital atmosphere
* maybe tiny star-like or data-dot points, but restrained

Forbidden:

* solid flat black only
* bright cyberpunk city
* museum room still visible
* project archive machine still visible
* overly busy particle field
* random lines that confuse the graph

The background should make the graph feel like a technical interface canvas.

## 38.10 Bottom Instruction Bar

Bottom text must be:

EXPLORE CONNECTIONS BETWEEN SKILLS.
CLICK ANY DOMAIN TO VIEW SUBSKILLS AND EVIDENCE.

Visual rules:

* small info icon on the left
* framed panel
* placed near bottom
* not hidden below viewport
* not a website footer
* not too large
* does not distract from graph
* acts as in-world interaction instruction

This instruction should not imply scrolling down.

It should imply graph exploration inside the same scene.

## 38.11 Scene 7 Content Completeness Rules

Scene 7 must include all listed domains and subskills.

Do not omit domains.

Do not omit subskill groups.

Do not replace the subskills with generic labels.

Do not invent unrelated skills.

Do not add unsupported technical tools unless CONTENT_SOURCE.md supports them.

Required full content list:

Central:

* DATA SCIENCE & AI BUILDER

Domains:

* STATISTICS
* RESEARCH
* BUSINESS ANALYTICS
* LEADERSHIP
* SYSTEMS
* DATA ENGINEERING
* MACHINE LEARNING

Statistics subskills:

* Inference
* Probability
* Bayesian
* Sampling
* Forecasting
* Multivariate
* Stochastic
* Optimization

Research subskills:

* Problem Formulation
* Survey Design
* Data Validation
* Analytical Usability

Business Analytics subskills:

* Decision Support
* Financial Risk
* Product Thinking

Leadership subskills:

* Technical Direction
* Mentoring
* Community Leadership

Systems subskills:

* System Design
* Workflow Automation
* Web Solutions
* Backend Fundamentals

Data Engineering subskills:

* Database Design
* Data Warehouse
* Big Data
* Data Pipelines
* Query Optimization
* Cloud Computing

Machine Learning subskills:

* Supervised Learning
* Unsupervised Learning
* Classification
* Regression
* Clustering
* Text Mining
* Computer Vision

## 38.12 Scene 7 UI Detail Requirements

Scene 7 must look custom-built and premium.

Required UI details:

* outer graph frame
* top HUD title
* central core node
* seven domain nodes
* domain icons
* subskill row stacks
* connection lines
* status dots
* subtle node glows
* dark grid background
* corner brackets
* bottom instruction bar
* domain-specific accent colors
* hierarchy through size and brightness
* restrained animation-ready lines

The scene must not be visually empty.

But it must remain readable.

The density should match the clean-target:

* many nodes
* many subskills
* clear grouping
* readable connections
* no messy clutter

## 38.13 Scene 7 Component Map

Scene 7 components may be created later during implementation.

Suggested component responsibilities:

KnowledgeMapScene or equivalent:

* owns Scene 7 final composition
* keeps all Scene 7 objects inside the pinned viewport

KnowledgeGraphCanvas or equivalent:

* renders the graph region, grid, nodes, and connection layers

CentralBuilderNode or equivalent:

* renders DATA SCIENCE & AI BUILDER central node

DomainNode or equivalent:

* renders each major domain node

SubskillStack or equivalent:

* renders each connected group of subskill rows

SubskillRow or equivalent:

* renders each individual subskill row

ConnectionLayer or equivalent:

* renders central-to-domain and domain-to-subskill lines

KnowledgeMapHeader or equivalent:

* renders top title/interface label

KnowledgeMapInstructionBar or equivalent:

* renders bottom instruction bar

GraphEnvironmentLayer or equivalent:

* renders grid, corner HUD, vignette, and low-noise background

Important:

If these components do not exist yet, Codex may create them later.

But Codex must not create ordinary skill cards as a substitute.

Codex must not build Scene 7 as a normal vertical section.

Codex must not ignore the clean-target composition.

Codex must not omit listed subskills.

## 38.14 Scene 7 Motion Direction

Scene 7 stable state should feel like a living knowledge graph.

Allowed idle motion:

* central node soft pulse
* subtle connection line energy travel
* domain node low glow
* status dot blinking
* subskill row hover shimmer later
* faint grid drift
* very subtle node breathing
* muted graph edge animation
* bottom instruction icon soft pulse

Scene 7 motion must not be:

* chaotic
* overly bright
* too fast
* rainbow-colored
* particle explosion
* messy electric wires
* cheap hacker terminal
* distracting from readability

Scene 7 should feel more analytical and structured than Scene 6.

Scene 6 is museum proof.

Scene 7 is capability relationship map.

Detailed animation standards belong in MOTION_RULES.md.

This file defines only the visual motion direction.

## 38.15 Scene 7 Stable Default State

Scene 7 stable final state must show:

* KNOWLEDGE MAP INTERFACE title
* central DATA SCIENCE & AI BUILDER node
* STATISTICS node
* RESEARCH node
* BUSINESS ANALYTICS node
* LEADERSHIP node
* SYSTEMS node
* DATA ENGINEERING node
* MACHINE LEARNING node
* all subskill stacks
* connection lines
* bottom instruction bar
* dark grid background
* no Scene 8 future laboratory content

The user should not need to click anything to understand the map.

Interactions can be added later.

Default state must already look complete.

## 38.16 Scene 7 Interaction Direction

Interactions are not the first priority.

The final layout must be correct before interactions are added.

When interactions are later added, they should follow this direction:

* clicking a domain highlights that domain and its subskills
* related evidence can appear inside the same scene
* central node can show a short builder identity summary
* hovering connection lines can reveal relationship meaning
* clicking subskills can highlight related projects/experience later
* interaction should feel like exploring a technical graph
* no basic accordion
* no default dropdown
* no huge modal that breaks the map
* no page scroll

Interaction must stay inside the one-viewport stage.

Interaction must not create a separate skill page.

Interaction must not require vertical scrolling.

## 38.17 Scene 7 to Scene 8 Hook

Do not build Scene 8 yet.

But Scene 7 should prepare a hook into Scene 8.

The hook idea:

Knowledge Map collapses into Future Laboratory.

Visual story:

* graph nodes slowly align toward the central node
* central DATA SCIENCE & AI BUILDER node becomes a data core
* connection lines converge inward
* subskill stacks compress into energy modules
* domain nodes become lab modules around a future reactor/core
* dark graph canvas becomes future laboratory interface

Acceptable preparation:

* central node has core-like design that can become reactor/data core
* connection lines can visually pull inward later
* domain nodes are modular enough to become lab stations
* bottom instruction bar can later become CTA/contact console

Forbidden preparation:

* do not show Future Laboratory title yet
* do not show contact CTA yet
* do not show roadmap panels yet
* do not build Scene 8 reactor yet
* do not add a normal “contact me” button
* do not scroll down to a contact section

---

# 39. Scene 7 Forbidden Layouts

Scene 7 is forbidden if it becomes:

* normal website skills section
* plain skill list
* basic mind map
* generic node graph
* course list
* dashboard cards
* simple seven-card grid
* static diagram with no hierarchy
* random scattered labels
* ordinary portfolio “Skills” section
* scroll-down section below Scene 6
* Figma frame scroll
* PDF-like scroll

Scene 7 is also forbidden if:

* central DATA SCIENCE & AI BUILDER node is missing
* any of the seven domain nodes are missing
* subskill lists are missing
* connection lines are missing
* bottom instruction bar is missing
* dark grid interface is missing
* graph hierarchy is unclear
* subskills are unreadable
* labels overlap badly
* layout does not fit in one viewport
* it ignores the clean-target
* it invents unsupported skills/tools

---

# 40. Scene 7 Acceptance Checklist

Scene 7 is accepted only if all of these are true:

1. It resembles the clean-target image.
2. It stays inside one viewport.
3. It does not feel like scroll-down website content.
4. It does not feel like Figma/PDF scrolling.
5. It feels like a technical knowledge graph interface.
6. KNOWLEDGE MAP INTERFACE title is visible.
7. Central DATA SCIENCE & AI BUILDER node is visible.
8. Statistics domain node is visible.
9. Research domain node is visible.
10. Business Analytics domain node is visible.
11. Leadership domain node is visible.
12. Systems domain node is visible.
13. Data Engineering domain node is visible.
14. Machine Learning domain node is visible.
15. Statistics subskills are visible.
16. Research subskills are visible.
17. Business Analytics subskills are visible.
18. Leadership subskills are visible.
19. Systems subskills are visible.
20. Data Engineering subskills are visible.
21. Machine Learning subskills are visible.
22. Central-to-domain connection lines are visible.
23. Domain-to-subskill connection lines are visible.
24. Graph hierarchy is clear.
25. Text is readable.
26. Bottom instruction bar is visible.
27. Dark grid background is visible.
28. Scene does not look like ordinary skill cards.
29. Scene does not look like a generic mind map.
30. Scene does not invent unsupported skills.
31. Scene 8 future laboratory content does not appear yet.
32. The transition from Scene 6 uses trophy/analytics-to-node-graph transformation.
33. The transition does not feel like scrolling down.
34. The scene remains premium, readable, dark, technical, and low-noise.
35. The one-viewport cinematic journey is preserved.

If any item fails, Scene 7 must be revised.
---

# 41. Scene 7 to Scene 8 Transition

Transition name:

Knowledge Map → Future Laboratory

Transition family:

Node convergence / data core formation

This transition family can be used again only one more time maximum in the whole portfolio, and only if the visual execution is meaningfully different.

## 41.1 Main Transition Story

Scene 7 represents Kiagus knowledge and capability relationships as a connected graph.

Scene 8 represents future direction, mission, and contact access inside a future laboratory.

The transition must feel like:

The knowledge graph collapses into a future data core.

The knowledge map does not disappear.

It transforms.

The central DATA SCIENCE & AI BUILDER node becomes the holographic data globe.

The graph connection lines become energy paths into the central lab core.

The domain nodes become left-side future focus panels and right-side system status panels.

The bottom instruction bar becomes the contact/connect console.

The dark grid canvas becomes a futuristic laboratory room.

The KNOWLEDGE MAP INTERFACE title transforms into the final Future Laboratory environment.

The final Scene 8 state must match:

public/reference/clean-target/slide-8-future-laboratory.png

## 41.2 What Must Not Happen

The transition must not feel like:

* scrolling down to Slide 8
* Figma frame scroll
* PDF scroll
* a normal contact/footer section appearing below the knowledge map
* a simple fade from graph to contact cards
* a normal CTA section
* a footer with social links
* a generic “Let’s Connect” page
* a plain contact form
* a basic portfolio ending

If the user feels they scrolled down to a footer, the transition is failed.

If Scene 8 appears as a normal contact section below Scene 7, it is failed.

If the final state does not resemble the clean-target image, it is failed.

## 41.3 Transition Visual Logic

The transition should visually communicate:

“The complete knowledge map powers the future laboratory.”

This should happen through object role changes:

* Scene 7 central DATA SCIENCE & AI BUILDER node becomes Scene 8 holographic data globe.
* Scene 7 graph edges converge inward and become energy lines feeding the central core.
* Scene 7 domain nodes become Scene 8 future product/focus panels.
* Scene 7 subskill stacks compress into status readouts and lab context panels.
* Scene 7 bottom instruction bar expands into Scene 8 mission and contact console.
* Scene 7 dark grid background becomes a futuristic lab room with windows, servers, monitors, and city skyline.
* Scene 7 connection dots become glowing interface points on the holographic globe.
* Scene 7 technical frame becomes Scene 8 lab cockpit frame.

## 41.4 Transition Progress Story

The exact implementation can vary, but the visual story must follow this structure.

### Progress 0.00 to 0.15 — Knowledge Map Stable

Visible state:

* Scene 7 final state is stable.
* KNOWLEDGE MAP INTERFACE title is visible.
* Central DATA SCIENCE & AI BUILDER node is visible.
* Seven domain nodes are visible.
* Subskill stacks are visible.
* Connection lines are visible.
* Bottom instruction bar is visible.
* Dark grid interface is visible.

No Scene 8 lab UI should dominate yet.

### Progress 0.15 to 0.35 — Graph Energy Pulls Inward

Visual behavior:

* Connection lines begin pulling toward the central node.
* Subskill stacks start compressing into smaller data packets.
* Domain nodes subtly detach from the graph and move toward future lab positions.
* Central node gains spherical/data-core behavior.
* The graph grid begins gaining depth like a room/cockpit.
* Bottom instruction bar begins expanding into a larger console base.

Not allowed:

* graph fading out instantly
* contact section sliding up from below
* social cards appearing suddenly
* normal footer appearing

### Progress 0.35 to 0.55 — Central Node Becomes Lab Core

Visual behavior:

* DATA SCIENCE & AI BUILDER central node becomes a holographic globe/data core.
* Graph lines become glowing data paths on the globe.
* Domain nodes transform into future direction panels.
* Left-side domain clusters become the four left focus panels.
* Right-side subskill/status clusters become system status, lab context, and environment panels.
* The background grid opens into a future laboratory interior.
* City skyline appears through the lab window.
* Monitors and consoles form around the central core.

Not allowed:

* static contact cards replacing the graph
* no central holographic core
* normal landing page CTA
* flat background

### Progress 0.55 to 0.75 — Future Lab Interface Forms

Visual behavior:

* Four left future focus panels stabilize.
* Right system panels stabilize.
* Central holographic globe becomes the hero object.
* Mission panel forms under the core.
* Let’s Connect console begins forming under the mission.
* Contact strip begins forming at the bottom.
* Lab room walls, servers, monitors, and desk surfaces become readable.

Not allowed:

* footer links taking over without lab context
* contact info floating randomly
* no mission panel
* no system panels
* no lab environment

### Progress 0.75 to 1.00 — Scene 8 Final State

Final state must clearly match:

public/reference/clean-target/slide-8-future-laboratory.png

Visible state:

* Future Laboratory final screen is stable.
* Left future focus panels are visible.
* Central holographic globe/data core is visible.
* Right system status/lab context/environment panels are visible.
* Mission panel is visible.
* Let’s Connect console is visible.
* Contact strip is visible.
* Lab room environment is visible.
* This is the final scene.
* No additional scroll-down footer appears.

## 41.5 Transition Hook Quality

The transition hook is the moment the viewer understands:

“The knowledge map has powered the future laboratory.”

The hook should come from object transformation, not explanation text.

Acceptable hook examples:

* central builder node becomes holographic data globe
* graph edges converge into globe energy lines
* domain nodes become future product panels
* subskills become system status readouts
* bottom instruction bar becomes contact console
* graph canvas becomes lab room window and monitors

Forbidden hook examples:

* “NEXT: CONTACT” label
* scroll arrow
* simple fade
* simple slide
* social links popping up
* normal footer reveal
* contact form appearing under the graph

---

# 42. Scene 8 — Future Laboratory

Clean target:

public/reference/clean-target/slide-8-future-laboratory.png

Concept board:

public/reference/concept-board/slide-8-future-laboratory-board.png

## 42.1 Scene Purpose

Scene 8 closes the portfolio.

It must feel like:

* a future laboratory
* a mission control room
* a final AI/data product direction screen
* a professional contact console
* a closing cockpit for Kiagus’ future work
* a final premium one-viewport scene

It must not feel like:

* a normal contact section
* a footer
* a plain CTA block
* a simple social links row
* a generic “Let’s connect” page
* a normal resume download section
* a website ending below Scene 7
* a disconnected slide after the knowledge map

The user should immediately understand:

* Kiagus’ future direction is intelligent systems and data-driven products.
* The central data globe represents future systems and data intelligence.
* The left panels explain future focus areas.
* The right panels show system/lab status.
* The mission statement explains the portfolio direction.
* The connect console provides action links.
* This is the final screen inside the same cinematic viewport.

## 42.2 Scene 8 Clean-Target Visual Summary

The clean-target image shows a dark future laboratory UI.

It contains:

* left stack of four future focus panels:
  AI Products
  Data Platforms
  Decision Intelligence
  Automation Systems
* central laboratory room
* holographic globe/data core in the center
* monitors and consoles around the core
* city skyline through rear window
* right stack of system panels:
  System Status
  Lab Context
  Environment
* mission panel under the core
* Let’s Connect console with four large cards:
  LinkedIn
  GitHub
  Email
  Resume
* bottom contact strip:
  email
  GitHub
  LinkedIn
  phone
  location

This must be reconstructed with real components.

Do not render the clean-target as a static background.

## 42.3 Scene 8 Required Final Layout

Scene 8 final state must use one viewport.

The scene must be readable without scrolling down.

The layout should feel like one complete final laboratory screen.

### Left Future Focus Panels Region

Placement:

* x: 3% to 25%
* y: 4% to 52%

Content:

Four stacked panels:

1. AI PRODUCTS
2. DATA PLATFORMS
3. DECISION INTELLIGENCE
4. AUTOMATION SYSTEMS

Purpose:

These panels summarize future direction and capability focus.

They must feel like lab module cards, not ordinary feature cards.

### Central Laboratory Core Region

Placement:

* x: 26% to 75%
* y: 4% to 55%

Content:

* lab room interior
* central holographic globe/data core
* circular pedestal/platform
* surrounding monitors
* control consoles
* city skyline through window
* server/lab walls
* dark futuristic atmosphere

Purpose:

This is the main visual hero of Scene 8.

The central data globe must dominate the scene.

### Right System Panels Region

Placement:

* x: 76% to 97%
* y: 4% to 52%

Content:

Three stacked panels:

1. SYSTEM STATUS
2. LAB CONTEXT
3. ENVIRONMENT

Purpose:

These panels make the scene feel like an active lab system.

They must be readable but secondary to the central globe.

### Mission Panel Region

Placement:

* x: 25% to 75%
* y: 55% to 68%

Content:

OUR MISSION

Mission paragraph:

Build intelligent systems and data-driven solutions that transform raw information into structured workflows, valuable insights, and decision-making support.

Purpose:

This panel explains the closing mission.

It should be visually tied to the central core.

### Let’s Connect Console Region

Placement:

* x: 3% to 97%
* y: 70% to 84%

Content:

Title:

LET’S CONNECT

Four large contact/action cards:

1. LINKEDIN
2. GITHUB
3. EMAIL
4. RESUME

Purpose:

This is the primary action console.

It must not feel like a normal footer link row.

### Bottom Contact Strip Region

Placement:

* x: 3% to 97%
* y: 87% to 98%

Content:

Title:

CONTACT STRIP

Compact contact items:

* email
* GitHub
* LinkedIn
* phone
* location

Purpose:

This is the final contact detail strip.

It must be part of the lab console, not a website footer.

## 42.4 Scene 8 Color and Mood Lock

Scene 8 must shift from Scene 7’s flat graph interface into a physical future lab environment.

Use:

* near black
* deep navy
* dark steel
* dark teal
* muted cyan
* electric blue only for the central holographic globe
* small green status indicators
* small red/orange machine LEDs
* white/gray contact icons where needed
* restrained glow

Avoid:

* bright white background
* colorful footer style
* rainbow CTA cards
* playful neon
* cheap cyberpunk overload
* generic SaaS landing page colors
* flat black background without lab depth
* warm museum colors dominating the scene

The mood should be:

* futuristic
* focused
* intelligent
* technical
* premium
* calm but powerful
* final and complete
* professional closing scene

## 42.5 Left Future Focus Panels Content

The left panel stack must show four future focus areas.

Each panel must include:

* large icon
* title
* short subtitle
* premium frame
* subtle cyan/teal glow
* left-aligned content
* consistent height
* not too much text

### Panel 1

Title:

AI PRODUCTS

Subtitle:

Build intelligent applications.

Icon direction:

brain / AI node / neural icon

Visual role:

top future focus, linked to AI product builder positioning

### Panel 2

Title:

DATA PLATFORMS

Subtitle:

Scalable. Reliable. Secure data platforms.

Icon direction:

database cylinder / data stack

Visual role:

data infrastructure direction

### Panel 3

Title:

DECISION INTELLIGENCE

Subtitle:

Actionable insights and predictive support.

Icon direction:

bar chart / decision analytics chart

Visual role:

analytics and decision support direction

### Panel 4

Title:

AUTOMATION SYSTEMS

Subtitle:

Automate workflows and pipelines.

Icon direction:

gear / automation cog

Visual role:

workflow automation direction

Panel visual rules:

* panels must align vertically
* icons must be large and clear
* titles must be readable
* subtitles must be short
* panels must not look like ordinary feature cards
* panels must not overpower central globe
* panels must feel like lab control modules

## 42.6 Central Laboratory Core

The central lab core is the hero object of Scene 8.

Required objects:

* holographic globe/data sphere
* glowing data nodes/lines on globe
* circular pedestal/platform
* lab consoles left and right
* monitor screens
* server columns or lab wall panels
* window showing night city skyline
* dark room depth
* subtle floor perspective

The globe should represent:

* future systems
* data intelligence
* AI/data product direction
* complete portfolio synthesis

Visual rules:

* globe must be central and dominant
* globe must not look like a flat icon
* globe must glow but not overpower all text
* pedestal must feel physical
* monitors should feel active
* lab room must have depth
* city skyline should be visible but background-only
* no random planet/fantasy look
* no science-fiction chaos

## 42.7 Right System Panels Content

The right panel stack must show three system/lab status panels.

### Panel 1 — System Status

Title:

SYSTEM STATUS

Rows:

DATA PIPELINE
ONLINE

MODELS
ACTIVE

SERVICES
HEALTHY

SECURITY
SECURE

Visual rules:

* label left, status right
* small green status dots
* system panel feel
* compact and readable

### Panel 2 — Lab Context

Title:

LAB CONTEXT

Rows:

ACTIVE PROJECTS
15+

DATA SOURCES
24

MODELS DEPLOYED
12

TEAM MEMBERS
10

Safety rule:

These values must be verified in CONTENT_SOURCE.md or treated as visual placeholders/concept indicators.

If they are not verified, implementation must label them as conceptual status/demo metrics or replace with verified values.

Visual rules:

* icon per row
* number aligned right
* compact dashboard feel
* not fake factual proof if unverified

### Panel 3 — Environment

Title:

ENVIRONMENT

Rows/visuals:

* small bar chart
* TEMP
  22°C
* LOAD
  36%

Safety rule:

These are lab ambience/interface values, not real-world performance metrics.

They may be treated as decorative system environment values.

Visual rules:

* small chart
* compact readouts
* secondary importance
* not too bright

## 42.8 Mission Panel

Panel title:

OUR MISSION

Mission text:

Build intelligent systems and data-driven solutions that transform raw information into structured workflows, valuable insights, and decision-making support.

Visual rules:

* centered under globe
* wide framed panel
* readable paragraph
* not too long
* directly connected to central core
* dark panel with subtle cyan/teal border
* not a normal website text block

Purpose:

This is the final mission statement.

It should communicate the value of Kiagus’ work.

## 42.9 Let’s Connect Console

Region title:

LET’S CONNECT

This must be a large action console, not a footer.

There must be four contact/action cards.

### Card 1 — LinkedIn

Title:

LINKEDIN

Detail:

linkedin.com/in/Kiagusarifrahman

Icon:

LinkedIn logo or professional “in” mark

Action role:

open LinkedIn profile

### Card 2 — GitHub

Title:

GITHUB

Detail:

github.com/Akskuy

Icon:

GitHub logo or Octocat-style mark

Action role:

open GitHub profile

### Card 3 — Email

Title:

EMAIL

Detail:

[Arifkiagus577@gmail.com](mailto:Arifkiagus577@gmail.com)

Icon:

mail/envelope

Action role:

email contact

### Card 4 — Resume

Title:

RESUME

Detail:

Download
My Resume

Icon:

document/resume file

Action role:

open/download resume

Contact data rule:

Use contact data from CONTENT_SOURCE.md and ASSET_MAP.md if available.

If the clean-target text and CONTENT_SOURCE.md conflict, CONTENT_SOURCE.md wins for factual contact data.

Visual rules:

* four cards in one row
* large clickable console cards
* icon on left or top-left
* title and detail readable
* consistent frame style
* not plain buttons
* not social media footer icons
* each card should feel like a lab access terminal

## 42.10 Bottom Contact Strip

Panel title:

CONTACT STRIP

Items:

1. Email:
   [Arifkiagus577@gmail.com](mailto:Arifkiagus577@gmail.com)

2. GitHub:
   github.com/Akskuy

3. LinkedIn:
   linkedin.com/in/Kiagusarifrahman

4. Phone:
   085175376593

5. Location:
   Tangerang Selatan, Indonesia

Contact data rule:

Use verified contact data from CONTENT_SOURCE.md.

If phone or location is not confirmed in CONTENT_SOURCE.md, mark as replaceable contact placeholder or verify before implementation.

Visual rules:

* compact horizontal strip
* each item has icon
* item labels/details readable
* strip spans bottom width
* framed like lab HUD
* not a normal footer
* not below the viewport
* no additional footer after it

## 42.11 Scene 8 Content Safety Rules

Scene 8 must not invent factual claims.

Allowed:

* mission statement
* contact cards
* resume link
* system-style decorative values if clearly treated as interface ambience
* verified contact info from CONTENT_SOURCE.md
* verified GitHub/LinkedIn/email from CONTENT_SOURCE.md
* visual lab status placeholders if clearly non-factual

Forbidden unless verified:

* fake number of deployed models
* fake number of data sources
* fake number of active projects
* fake team member count
* fake system status as real production system
* fake security status as real claim
* fake phone number if not verified
* fake location if not verified
* fake resume link

If unsure, use safe wording:

* Lab Context
* Demo Status
* Concept Indicator
* Portfolio System Status
* Replace With Verified Data
* Interface Placeholder

The visual may look like a lab system, but it must not lie about real production systems.

## 42.12 Scene 8 UI Detail Requirements

Scene 8 must look custom-built and premium.

Required UI details:

* outer lab frame
* left module panels
* large icons
* central holographic globe
* circular pedestal
* monitor screens
* console surfaces
* city skyline window
* server/lab side walls
* right system panels
* green status dots
* mission panel
* Let’s Connect card row
* contact strip
* iconography
* corner brackets
* subtle panel seams
* restrained cyan glow
* low-noise screen texture
* small machine LEDs
* final-scene polish

The scene must not be visually empty.

But it must remain readable.

The density should match the clean-target:

* central lab core
* strong left/right panels
* contact console
* bottom strip
* professional closing UI

## 42.13 Scene 8 Background Environment

The background must support the Future Laboratory identity.

Required background elements:

* futuristic lab interior
* rear window with night skyline
* server columns
* monitor screens
* control desks
* floor perspective
* dark walls
* subtle glowing panels
* central core platform
* lab machinery depth

The background should be visible behind:

* central globe
* left focus panels
* right status panels
* mission panel
* connect console

Rules:

* background must not overpower text
* lab should feel physical
* central core should feel anchored in the room
* no flat solid background only
* no generic dashboard background
* no city-only scene
* no graph-only scene
* no normal footer feel

## 42.14 Scene 8 Component Map

Scene 8 components may be created later during implementation.

Suggested component responsibilities:

FutureLaboratoryScene or equivalent:

* owns Scene 8 final composition
* keeps all Scene 8 objects inside the pinned viewport

FutureFocusPanelStack or equivalent:

* renders left four focus panels

FutureFocusPanel or equivalent:

* renders each AI Products / Data Platforms / Decision Intelligence / Automation Systems panel

LabCoreStage or equivalent:

* renders central holographic globe, pedestal, monitors, lab room

HolographicDataGlobe or equivalent:

* renders central data globe visual

SystemStatusPanel or equivalent:

* renders right system status panel

LabContextPanel or equivalent:

* renders right lab context panel

EnvironmentPanel or equivalent:

* renders right environment panel

MissionPanel or equivalent:

* renders OUR MISSION panel

ConnectConsole or equivalent:

* renders LET’S CONNECT section

ConnectCard or equivalent:

* renders LinkedIn / GitHub / Email / Resume cards

ContactStrip or equivalent:

* renders bottom contact strip

LabEnvironmentLayer or equivalent:

* renders background lab room, skyline, servers, monitors, and ambience

Important:

If these components do not exist yet, Codex may create them later.

But Codex must not create an ordinary contact section as a substitute.

Codex must not build Scene 8 as a normal vertical section.

Codex must not add a footer below Scene 8.

Codex must not ignore the clean-target composition.

Codex must not invent fake contact or system facts.

## 42.15 Scene 8 Motion Direction

Scene 8 stable state should feel like a calm active laboratory.

Allowed idle motion:

* holographic globe slow rotation
* data nodes moving gently on globe
* subtle pedestal light pulse
* monitor screen soft flicker
* right status dots gentle blink
* left panel low glow
* city skyline tiny window lights
* mission panel slight glow
* connect cards subtle hover state later
* contact strip low LED movement
* small machine lights

Scene 8 motion must not be:

* chaotic
* too fast
* too colorful
* fireworks-like
* random data-line overload
* cheap hacker terminal
* distracting from contact actions
* looking like a game menu instead of professional lab

Scene 8 should feel final, calm, and complete.

Scene 7 is graph intelligence.

Scene 8 is future laboratory and contact access.

Detailed animation standards belong in MOTION_RULES.md.

This file defines only the visual motion direction.

## 42.16 Scene 8 Stable Default State

Scene 8 stable final state must show:

* four left future focus panels
* central holographic globe/data core
* lab monitors and city skyline
* right system status panel
* right lab context panel
* right environment panel
* OUR MISSION panel
* LET’S CONNECT console
* LinkedIn card
* GitHub card
* Email card
* Resume card
* CONTACT STRIP
* email item
* GitHub item
* LinkedIn item
* phone item
* location item
* no additional footer below
* no Scene 9 content

The user should not need to click anything to understand the final scene.

Interactions can be added later.

Default state must already look complete.

## 42.17 Scene 8 Interaction Direction

Interactions are not the first priority.

The final layout must be correct before interactions are added.

When interactions are later added, they should follow this direction:

* LinkedIn card opens profile
* GitHub card opens GitHub
* Email card opens mail action
* Resume card opens or downloads resume
* left focus panels may highlight related mission areas
* right system panels may have subtle status hover
* contact strip items may be copyable later
* interaction should feel like using lab console access cards
* no basic footer links
* no huge modal
* no default dropdown
* no page scroll

Interaction must stay inside the one-viewport stage.

Interaction must not create a separate contact page.

Interaction must not require vertical scrolling.

## 42.18 Final Scene Closure Rule

Scene 8 is the final scene.

It should close the portfolio with:

* confidence
* clarity
* contact access
* future direction
* professional credibility
* no extra footer
* no sudden drop-off

After Scene 8 final state, if extra scroll space exists technically, it should not reveal a normal footer or blank white/black page.

The visual ending should remain inside the Future Laboratory screen.

No Scene 9.

No generic copyright footer unless it is integrated inside the lab UI and explicitly approved.

---

# 43. Scene 8 Forbidden Layouts

Scene 8 is forbidden if it becomes:

* normal contact section
* footer
* simple social links row
* CTA block
* plain resume download section
* generic dashboard
* normal “About/Contact” page
* simple card grid
* static lab wallpaper with contact cards
* scroll-down section below Scene 7
* Figma frame scroll
* PDF-like scroll
* ordinary portfolio ending

Scene 8 is also forbidden if:

* central holographic globe is missing
* left future focus panels are missing
* right system panels are missing
* mission panel is missing
* Let’s Connect cards are missing
* contact strip is missing
* lab environment is missing
* contact cards look like plain buttons
* layout does not fit in one viewport
* it invents fake contact/system facts
* it adds footer below the scene
* it ignores the clean-target

---

# 44. Scene 8 Acceptance Checklist

Scene 8 is accepted only if all of these are true:

1. It resembles the clean-target image.
2. It stays inside one viewport.
3. It does not feel like scroll-down website content.
4. It does not feel like Figma/PDF scrolling.
5. It feels like a futuristic laboratory closing scene.
6. AI Products panel is visible.
7. Data Platforms panel is visible.
8. Decision Intelligence panel is visible.
9. Automation Systems panel is visible.
10. Central holographic globe/data core is visible.
11. Lab monitors and consoles are visible.
12. City skyline window is visible.
13. System Status panel is visible.
14. Lab Context panel is visible.
15. Environment panel is visible.
16. OUR MISSION panel is visible.
17. Mission text is readable.
18. LET’S CONNECT console is visible.
19. LinkedIn card is visible.
20. GitHub card is visible.
21. Email card is visible.
22. Resume card is visible.
23. CONTACT STRIP is visible.
24. Email contact item is visible.
25. GitHub contact item is visible.
26. LinkedIn contact item is visible.
27. Phone contact item is visible or safely placeholdered if unverified.
28. Location contact item is visible or safely placeholdered if unverified.
29. Scene does not look like a normal footer.
30. Scene does not look like a generic CTA block.
31. Scene does not invent fake system/contact facts.
32. No additional footer appears below Scene 8.
33. No Scene 9 content appears.
34. The transition from Scene 7 uses graph-node-to-data-core transformation.
35. The transition does not feel like scrolling down.
36. The scene remains premium, readable, dark, futuristic, and low-noise.
37. The one-viewport cinematic journey is preserved until the final screen.

If any item fails, Scene 8 must be revised.
