# MOTION RULES — KIAGUS PORTFOLIO

## One Viewport Cinematic Motion System

---

# 0. Purpose

This file defines the motion rules for the Kiagus Arif Rahman portfolio.

This file does not define the final scene layout.

Final scene layout is defined in:

SCENE_ARCHITECTURE.md

This file defines:

* how scenes move
* how transitions should feel
* what animation patterns are allowed
* what animation patterns are forbidden
* how scroll should control the cinematic journey
* how object transformations should behave
* how each scene transition should have a unique motion identity
* how micro-interactions should support the scene without becoming gimmicks

The main goal:

The portfolio must feel like one cinematic viewport where scenes transform inside the same screen.

The portfolio must not feel like scrolling down a website, PDF, Figma frame, or slide deck.

---

# 1. Absolute One Viewport Motion Rule

Scroll must behave as a timeline controller.

Scroll must not behave as normal page movement.

Correct motion experience:

User scrolls
→ viewport appears visually pinned
→ objects transform inside the same screen
→ scene changes through cinematic motion

Wrong motion experience:

User scrolls
→ page moves downward
→ next scene appears below
→ it feels like scrolling a PDF or Figma prototype

The wrong motion experience is forbidden.

If the user can feel that Scene 2 is simply below Scene 1, the motion fails.

If the user can feel that Scene 3 is simply below Scene 2, the motion fails.

This applies to all scenes from Scene 1 to Scene 8.

---

# 2. Anti PDF / Anti Figma Scroll Rule

The user must never feel:

“I am scrolling down through slides.”

The user must feel:

“I am controlling a cinematic transformation inside one screen.”

Forbidden feelings:

* scrolling a PDF
* scrolling stacked Figma frames
* scrolling a presentation deck
* scrolling a normal landing page
* scrolling from section to section
* reading a long webpage
* moving down to a footer

If the motion feels like any of these, it must be revised.

---

# 3. Pinned Stage Motion Architecture

Main journey should use a pinned or sticky stage.

Known journey files:

* src/components/journey/cinematic-journey.tsx
* src/components/journey/pinned-journey-stage.tsx
* src/components/journey/use-cinematic-scroll-progress.ts

Motion expectation:

CinematicJourney:

* provides scroll distance
* owns global journey timing
* must not render normal stacked sections as the main visual experience

PinnedJourneyStage:

* visually locks the viewport stage
* keeps all scene objects inside one 100svh screen
* prevents normal section scrolling feel

useCinematicScrollProgress:

* provides progress for timeline-driven animation
* should be used as scroll-to-animation controller
* must not be used to move the whole page like normal scroll

The exact implementation may vary, but the visual result must remain:

one pinned cinematic viewport.

---

# 4. Motion Layer System

Motion should be organized conceptually into layers.

## 4.1 Camera / Stage Layer

Responsible for:

* subtle depth changes
* perspective shift
* scene-wide mood
* viewport-level cinematic continuity

Allowed:

* small camera depth movement
* small perspective changes
* slight parallax between background and foreground
* smooth scene-wide lighting change

Forbidden:

* large vertical page movement
* aggressive camera shake
* spinning camera
* disorienting 3D rotation
* camera motion that hides UI readability

## 4.2 Environment Layer

Responsible for:

* background transformation
* room reconstruction
* lighting changes
* scene atmosphere

Examples:

* monitor wall becomes command center
* server racks become library shelves
* bookshelves become city skyline
* city becomes archive machine room
* archive room becomes achievement museum
* museum becomes graph canvas
* graph canvas becomes future lab

Forbidden:

* static background swap with no object continuity
* plain fade from one background to another
* background wallpaper with UI pasted on top
* environment changing after content appears without transformation story

## 4.3 Main Object Layer

Responsible for:

* hero object transformation
* main scene object role changes
* central focal movement

Examples:

* lanyard becomes access token
* terminal grid becomes archive panels
* selected book/module becomes map
* building becomes cartridge
* project cartridge becomes trophy plaque
* trophy becomes graph nodes
* central node becomes data globe

Forbidden:

* hiding old object and showing unrelated new object
* object teleporting without transformation
* object simply fading away
* object changing with no visual logic

## 4.4 UI Panel Layer

Responsible for:

* panels morphing into next-scene panels
* tab systems forming
* dashboard-like elements becoming in-world interfaces

Examples:

* identity panels become command terminals
* command terminals become library tabs/module rows
* library panels become city district HUD
* city HUD becomes project archive panels
* project proof panels become achievement analytics
* achievement metric cards become graph nodes
* graph bottom bar becomes contact console

Forbidden:

* generic card fade-in
* normal accordion reveal
* basic tabs with no scene identity
* plain Tailwind cards sliding in

## 4.5 Micro Motion Layer

Responsible for:

* LED pulses
* screen flickers
* hover feedback
* subtle glow
* row highlight
* tiny ambient movement

Micro motion can support the scene.

Micro motion must not become the main transition.

Forbidden:

* scan lines as the main transition
* data lines as the main transition
* random particles as the main transition
* excessive glow
* noisy animated labels
* cheap cyberpunk movement

---

# 5. Global Motion Quality

Motion must feel:

* premium
* controlled
* smooth
* cinematic
* intentional
* technically mature
* readable
* low-noise
* responsive
* not cheap
* not random

Motion must not feel:

* basic
* childish
* chaotic
* overanimated
* generic
* template-like
* like default web scroll
* like a PowerPoint transition
* like Figma scroll
* like a normal SaaS landing page

---

# 6. Forbidden Main Transition Patterns

The following may not be used as the main transition concept:

* fade only
* slide only
* zoom only
* tilt only
* parallax only
* opacity swap only
* scale swap only
* scanline only
* data-line only
* particle burst only
* floating labels only
* page scroll only
* section reveal only
* simple CSS transform only
* click-to-next-scene trigger
* modal replacing scene
* portal effect repeated everywhere

These can exist only as supporting details.

A valid transition must include object role change.

---

# 7. Object Role Change Requirement

Every scene transition must answer:

What object from the previous scene becomes the next scene’s object?

A transition is valid only if at least two of these happen:

* previous scene main object changes role
* previous scene panels become next scene panels
* previous scene background reconstructs into next background
* previous scene title transforms into next title
* previous scene navigation/control transforms into next navigation/control
* previous scene evidence/metadata transforms into next evidence/metadata

A transition is weak if it only changes text.

A transition is failed if it only hides old scene and shows new scene.

---

# 8. Transition Uniqueness Rule

No major transition concept may be used more than 2 times across the whole portfolio.

The portfolio has seven main transitions:

1. Scene 1 to Scene 2
2. Scene 2 to Scene 3
3. Scene 3 to Scene 4
4. Scene 4 to Scene 5
5. Scene 5 to Scene 6
6. Scene 6 to Scene 7
7. Scene 7 to Scene 8

Each transition must have its own visual identity.

Forbidden repetition:

* every scene zooms into the center
* every scene fades out and fades in
* every scene uses scan lines
* every scene collapses cards
* every scene opens a portal
* every scene slides panels sideways
* every scene uses the same camera motion

If a transition feels too similar to a previous transition, redesign it.

---

# 9. Transition Family Plan

Use this transition family plan.

## Scene 1 to Scene 2

Family:

Room morph / object role conversion

Core idea:

Identity Room becomes Capability Command Center.

Main object changes:

* lanyard becomes access token
* side identity panels become command terminals
* monitor wall becomes command center
* title becomes CAPABILITY MATRIX

Do not reuse this exact identity-to-command conversion elsewhere.

## Scene 2 to Scene 3

Family:

Terminal compression / archive conversion

Core idea:

Capability terminals are archived into a knowledge library.

Main object changes:

* terminals become library tabs and module rows
* server racks become bookshelves
* command desk becomes archive bar
* cold command lights become warm library lighting

## Scene 3 to Scene 4

Family:

Book opening / map extrusion

Core idea:

Knowledge archive opens into experience district map.

Main object changes:

* module row becomes map road
* book/archive page becomes city map
* bookshelves become skyline
* library panels become district HUD

## Scene 4 to Scene 5

Family:

Building collapse / cartridge formation

Core idea:

Experience districts compress into project cartridges.

Main object changes:

* building window becomes cartridge slot
* district cards become project cartridges
* district navigation becomes cartridge rail
* city becomes archive machine room

## Scene 5 to Scene 6

Family:

Cartridge scan / analytics formation

Core idea:

Project proof is processed into achievement analytics.

Main object changes:

* viewer machine becomes trophy display case
* cartridge becomes trophy plaque
* proof preview becomes analytics metrics
* archive room becomes museum room

## Scene 6 to Scene 7

Family:

Trophy fragmentation / node graph formation

Core idea:

Achievement proof reveals connected knowledge map.

Main object changes:

* trophy reflection becomes graph nodes
* metric cards become domain nodes
* analytics lines become graph edges
* museum case becomes graph canvas

## Scene 7 to Scene 8

Family:

Node convergence / data core formation

Core idea:

Knowledge map powers the future laboratory.

Main object changes:

* central builder node becomes holographic data globe
* graph edges become energy lines
* domain nodes become future focus panels
* bottom instruction bar becomes connect console

---

# 10. Global Timing Feel

Motion should feel deliberate.

Avoid extremely fast transformations.

Avoid long dead waiting time.

Suggested feel:

* scene stable phase should feel readable
* transition should feel cinematic but not slow
* object transformation should have clear beginning, middle, and end
* final state should settle cleanly

Each transition should include:

1. stable current scene
2. object activation
3. transformation phase
4. next scene assembly
5. final settle

Do not instantly replace the entire scene.

Do not leave a blank screen between scenes.

---

# 11. Progress Phase Rule

Each transition should conceptually follow five phases.

## Phase 1 — Stable Scene

The current scene is readable and complete.

No next-scene object should dominate yet.

## Phase 2 — Activation

A key object begins signaling transition.

Examples:

* lanyard access token activates
* active terminal starts compressing
* selected module row opens
* building window glows
* cartridge scan begins
* trophy reflection splits
* graph lines pull inward

## Phase 3 — Transformation

Old objects change shape, position, and role.

This phase must show object continuity.

## Phase 4 — Assembly

Next scene objects become recognizable.

The final clean-target layout starts forming.

## Phase 5 — Settlement

The next scene is stable, readable, and complete.

Motion becomes idle micro motion only.

---

# 12. Scene Stable Motion Rules

Each scene must have subtle idle motion.

Idle motion should support the scene identity.

Idle motion must not distract from readability.

## Scene 1 Idle Motion

Identity Snapshot:

* lanyard subtle float or depth
* tiny monitor flicker
* soft panel glow
* preloader finish state
* small LED breathing
* very subtle data-center ambience

Do not add chaotic scan lines.

## Scene 2 Idle Motion

Capability Matrix:

* terminal LEDs pulse softly
* server rack lights blink
* command desk indicators blink
* title rail glow is restrained
* terminal borders have subtle energy

Do not create noisy data-line overload.

## Scene 3 Idle Motion

Knowledge Library:

* lamp glow flicker
* warm dust/particles
* active tab shimmer
* active module row soft highlight
* bookshelf depth parallax
* subtle amber glow

Do not make it cold neon.

## Scene 4 Idle Motion

Experience District:

* building window lights flicker
* skyline has tiny parallax
* active district card glow pulse
* small HUD indicators blink
* subtle reflection shimmer
* district map feels alive

Do not make it cartoonish or overly neon.

## Scene 5 Idle Motion

Project Archive:

* active cartridge glow pulse
* machine screen soft flicker
* workflow blocks status pulse
* insertion slot low glow
* equipment monitor heartbeat
* mechanical hum feeling

Do not make it generic dashboard animation.

## Scene 6 Idle Motion

Achievement Analytics:

* spotlight shimmer
* trophy glint
* glass case reflection movement
* selected achievement glow
* metric LED blink
* tiny analytics shimmer

Do not use fireworks or trophy explosion.

## Scene 7 Idle Motion

Knowledge Map:

* central node soft pulse
* connection line subtle energy flow
* domain node low glow
* subskill status dot blink
* grid drift
* bottom instruction icon pulse

Do not make it a messy electric wire graph.

## Scene 8 Idle Motion

Future Laboratory:

* holographic globe slow rotation
* globe data nodes move gently
* monitor flicker
* status dots blink
* city skyline light flicker
* connect cards subtle hover later
* contact strip low LED movement

Do not make it chaotic or too game-menu-like.

---

# 13. Scene 1 to Scene 2 Motion Detail

Transition:

Identity Room → Capability Command Center

Core motion:

* lanyard docks
* identity panels convert
* monitor wall reconstructs
* command desk forms
* title transforms

Motion story:

1. Scene 1 is stable.
2. Side identity panels start compressing into terminal-shaped modules.
3. Lanyard scales down and moves into access-token role.
4. Title area transitions from KIAGUS ARIF RAHMAN to CAPABILITY MATRIX.
5. Background monitor wall deepens into command center.
6. Six terminal panels settle into 2x3 grid.
7. Desk/keyboard forms at the bottom.
8. Scene 2 stabilizes.

Forbidden:

* lanyard stays central hero in Scene 2
* side panels become tiny side strips
* transition only tilts the Scene 1 layout
* transition only fades from one scene to another
* any vertical scroll-down feeling

---

# 14. Scene 2 to Scene 3 Motion Detail

Transition:

Capability Command Center → Knowledge Library

Core motion:

* terminal compression
* archive conversion
* lighting warmth shift
* server racks become shelves

Motion story:

1. Scene 2 is stable.
2. Six command terminals flatten into archive-panel geometry.
3. Terminal rows and labels reorganize into category tabs and module rows.
4. Command desk flattens into bottom archive/sentence bar.
5. Server racks stretch and warm into bookshelves.
6. Lighting shifts from teal/cyan to bronze/amber.
7. Scene 3 library panels assemble.
8. Scene 3 stabilizes.

Forbidden:

* normal tab component appearing from nowhere
* command center simply fading out
* course list sliding up
* cold blue command theme staying unchanged
* vertical scroll-down feeling

---

# 15. Scene 3 to Scene 4 Motion Detail

Transition:

Knowledge Library → Experience District

Core motion:

* book/page opening
* map extrusion
* shelves become skyline
* module rows become roads

Motion story:

1. Scene 3 is stable.
2. Active module row gains focus.
3. Center archive panel behaves like a book/page.
4. Page unfolds into map surface.
5. Module rows stretch into roads and district paths.
6. Bookshelves rise and reshape into city skyline.
7. Left/right panels become district HUD controls.
8. Bottom sentence bar becomes selected district detail panel.
9. Scene 4 stabilizes as night city district.

Forbidden:

* resume cards appearing
* city background sliding in
* simple fade from library to city
* normal timeline reveal
* vertical scroll-down feeling

---

# 16. Scene 4 to Scene 5 Motion Detail

Transition:

Experience District → Project Archive

Core motion:

* building collapse
* cartridge formation
* city rail becomes cartridge rail
* archive machine assembly

Motion story:

1. Scene 4 is stable.
2. Active building window glows.
3. Building window becomes cartridge insertion slot.
4. District cards compress into cartridge modules.
5. District navigation rail reshapes into cartridge selector.
6. City skyline darkens into archive machine room.
7. Central project viewer machine assembles.
8. Bottom district detail becomes summary/workflow/proof panels.
9. Scene 5 stabilizes.

Forbidden:

* project cards sliding up
* portfolio grid appearing
* city simply fading away
* no cartridge metaphor
* vertical scroll-down feeling

---

# 17. Scene 5 to Scene 6 Motion Detail

Transition:

Project Archive → Achievement Analytics

Core motion:

* cartridge scan
* proof processing
* trophy display formation
* analytics assembly

Motion story:

1. Scene 5 is stable.
2. Active cartridge and proof preview begin glowing.
3. Viewer machine screen reframes into glass display case.
4. Cartridge becomes trophy plaque/base.
5. Proof preview slots become selected achievement evidence/metadata.
6. Bottom panels reorganize into analytics metric strip.
7. Archive shelves become museum walls/columns.
8. Spotlight forms around central trophy.
9. Scene 6 stabilizes.

Forbidden:

* trophy appears randomly
* awards list appears
* certificate grid appears
* generic KPI dashboard appears
* vertical scroll-down feeling

---

# 18. Scene 6 to Scene 7 Motion Detail

Transition:

Achievement Analytics → Knowledge Map

Core motion:

* trophy fragmentation
* metric-to-node conversion
* trend lines become graph edges
* museum display becomes graph canvas

Motion story:

1. Scene 6 is stable.
2. Trophy reflection produces controlled light points.
3. Trophy glow collapses toward graph center.
4. Metric cards compress into domain nodes.
5. Analytics trend lines become graph connections.
6. Achievement metadata becomes subskill stacks.
7. Museum case/grid becomes dark graph canvas.
8. Central DATA SCIENCE & AI BUILDER node stabilizes.
9. Scene 7 stabilizes.

Forbidden:

* random particle explosion
* generic mind map appearing
* skill cards appearing
* plain list of skills
* vertical scroll-down feeling

---

# 19. Scene 7 to Scene 8 Motion Detail

Transition:

Knowledge Map → Future Laboratory

Core motion:

* node convergence
* central data core formation
* graph-to-lab transformation
* contact console assembly

Motion story:

1. Scene 7 is stable.
2. Graph edges pull inward.
3. Subskill stacks compress into data packets.
4. Central builder node becomes holographic data globe.
5. Domain nodes become left future focus panels and right status panels.
6. Dark graph canvas gains depth and becomes lab interior.
7. Bottom instruction bar becomes mission/connect console.
8. Contact strip forms at the bottom.
9. Scene 8 stabilizes as final screen.

Forbidden:

* contact footer sliding up
* social links popping in randomly
* normal CTA reveal
* simple fade to contact section
* vertical scroll-down feeling

---

# 20. Micro Interaction Rules

Micro interactions must feel custom and in-world.

Allowed:

* hover glow
* active panel pulse
* subtle click depression
* LED response
* panel expand within scene
* row highlight
* graph connection emphasis
* cartridge load feedback
* district selection feedback
* contact card hover response

Forbidden:

* browser-default buttons
* generic accordion
* default tabs
* basic dropdown
* huge modal that breaks the scene
* interaction requiring vertical page scroll
* interaction that hides the main scene context
* interaction that feels like generic website UI

Interaction should stay inside the scene.

---

# 21. Text Motion Rules

Text should move less than objects.

Text readability wins over animation.

Allowed:

* subtle title morph
* line-by-line reveal if slow and controlled
* small label activation
* row highlight
* number counter only if factual and approved

Forbidden:

* text constantly flickering
* unreadable typewriter effect
* long text animating while user needs to read
* fast scrambling text
* random terminal code that means nothing
* fake code snippets as proof
* fake metrics counting up

Important:

Do not animate fake data as if it is real.

---

# 22. Camera Motion Rules

Camera movement should support depth.

Allowed:

* subtle push-in
* slight perspective drift
* small parallax between layers
* scene-wide depth shift during transition

Forbidden:

* excessive zoom
* spin
* shaky camera
* huge vertical pan
* motion sickness movement
* camera hiding important UI
* camera moving downward like page scroll

Camera motion must not create PDF/Figma scroll feeling.

---

# 23. Lighting Motion Rules

Lighting should define scene mood changes.

Scene mood shifts:

* Scene 1:
  dark identity/data center

* Scene 2:
  teal command center

* Scene 3:
  warm bronze library

* Scene 4:
  deep navy night city

* Scene 5:
  industrial archive machine

* Scene 6:
  bronze/gold museum analytics

* Scene 7:
  dark cyan graph interface

* Scene 8:
  futuristic lab blue/cyan core

Lighting transitions should happen gradually.

Lighting must not flash aggressively.

Lighting must not become rainbow.

---

# 24. Performance Motion Rules

Motion should remain performant.

Avoid:

* too many constantly animated DOM elements
* excessive blur
* excessive box-shadow animation
* huge animated background images
* heavy particles everywhere
* uncontrolled animation loops
* layout thrashing
* motion that causes mobile lag

Prefer:

* transform
* opacity
* CSS variables when practical
* limited animated elements
* layered motion
* restrained effects
* reusable motion components
* reduced motion support

Do not sacrifice performance for decorative noise.

---

# 25. Reduced Motion Rule

The portfolio should respect reduced motion where practical.

Reduced motion version should:

* preserve the same scene final layouts
* reduce large movement
* reduce parallax
* reduce continuous animation
* keep transitions understandable
* avoid motion sickness

Reduced motion must not turn the site into stacked vertical sections.

Even reduced motion should preserve one-viewport scene logic.

---

# 26. Responsive Motion Rule

Motion must remain understandable on different screens.

Rules:

* final scene layouts must remain readable
* motion must not push objects off-screen
* titles must not clip
* main objects must not overlap unreadably
* transitions must not depend on tiny details only
* one-viewport feeling must remain

Do not create a mobile layout that becomes normal stacked sections unless explicitly approved.

---

# 27. Development Acceptance Checklist

Before accepting any motion implementation, check:

1. Does the viewport feel pinned?
2. Does it avoid normal scroll-down feeling?
3. Does it avoid PDF/Figma frame scrolling?
4. Does the old scene transform into the next scene?
5. Does the transition have a clear visual story?
6. Does the final scene match clean-target?
7. Does the motion avoid fade-only/slide-only/zoom-only?
8. Does the transition family stay unique?
9. Is text readable during and after motion?
10. Does the motion remain premium and low-noise?
11. Does it avoid repeated scan/data-line gimmicks?
12. Does it avoid generic dashboard animation?
13. Does it avoid fake metrics or fake proof animation?
14. Does it stay inside the one-viewport cinematic stage?
15. Does the scene settle into a readable final state?

If any answer is no, revise the motion.

---

# 28. Final Rule

Motion is not decoration.

Motion is the story of the portfolio.

Every transition must explain how one scene becomes the next.

Every scene must feel alive, but readable.

Every final state must match clean-target.

Every transition must stay inside one viewport.

If it feels like scrolling down a website, the motion has failed.
