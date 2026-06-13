# SECTION PLAN — KIAGUS PORTFOLIO

## 0. Purpose

This file defines the portfolio scene order and section responsibilities.

This file is not the detailed visual architecture document.

Detailed visual layout, object placement, and transition story are locked in:

SCENE_ARCHITECTURE.md

Detailed animation rules are locked in:

MOTION_RULES.md

Asset paths are locked in:

ASSET_MAP.md

Portfolio text and factual claims are locked in:

CONTENT_SOURCE.md

This file acts as the high-level map of the full 8-scene portfolio.

---

## 1. Global Portfolio Structure

The portfolio is an 8-scene cinematic one-viewport journey.

It must not be built as normal vertical stacked sections.

It must not feel like scrolling down a PDF, Figma prototype, slide deck, or ordinary landing page.

The user may scroll, but scroll must behave as an animation timeline controller.

Correct structure:

Scene 1 transforms into Scene 2
Scene 2 transforms into Scene 3
Scene 3 transforms into Scene 4
Scene 4 transforms into Scene 5
Scene 5 transforms into Scene 6
Scene 6 transforms into Scene 7
Scene 7 transforms into Scene 8

Wrong structure:

Hero section
↓
Skills section
↓
Courses section
↓
Experience section
↓
Projects section
↓
Awards section
↓
Skills graph section
↓
Contact footer

The wrong structure is forbidden.

---

## 2. Clean Target Rule

Every scene must follow its clean-target image as the final visual composition.

Clean-target images are stored in:

public/reference/clean-target/

The clean-target is not a background image to render directly.

The clean-target is the visual blueprint.

The website must recreate the clean-target using real components.

If the final scene does not resemble its clean-target, that scene is not accepted.

---

## 3. Concept Board Rule

Concept-board images are stored in:

public/reference/concept-board/

Concept boards are used only for:

* motion idea
* interaction planning
* transition logic
* object relationship
* phase behavior

Concept-board annotation text must not appear in the final UI.

Clean-target wins over concept-board for final visual output.

---

## 4. Scene List

The portfolio contains exactly 8 main scenes.

No Scene 9.

No normal footer after Scene 8 unless explicitly approved and integrated into the Future Laboratory UI.

---

# SCENE 1 — IDENTITY SNAPSHOT

## Clean Target

public/reference/clean-target/slide-1-identity-snapshot.png

## Purpose

Introduce Kiagus Arif Rahman as a Data Scientist, AI Product Builder, and AI Builder.

This scene is the identity room.

It must not become a normal hero section.

## Final Visual Identity

Scene 1 must show:

* large Kiagus name at the top
* professional subtitle
* premium lanyard/photo card in the center
* real Kiagus portrait
* 3 identity panels on the left
* 3 identity panels on the right
* dark data-center / monitor-wall atmosphere
* premium game UI framing

## Main Objects

* Kiagus title
* subtitle
* central lanyard identity card
* six identity panels
* monitor-wall background
* preloader/boot interface

## Transition Role

Scene 1 objects prepare the transformation into Scene 2.

* lanyard becomes access token
* side panels become command terminals
* monitor wall becomes command center
* identity title becomes capability title

## Forbidden

Scene 1 must not become:

* plain landing page hero
* normal portfolio intro
* simple photo and cards
* generic dark SaaS hero
* bottom dock-heavy layout

---

# SCENE 2 — CAPABILITY MATRIX

## Clean Target

public/reference/clean-target/slide-2-capability-matrix.png

## Purpose

Show Kiagus’ major capability domains inside a command center.

This scene is the capability command center.

It must not become a normal skills section.

## Final Visual Identity

Scene 2 must show:

* CAPABILITY MATRIX title rail
* six large terminal panels in 2 rows x 3 columns
* large icon/glyph per terminal
* capability title per terminal
* small command label per terminal
* server racks / monitor walls left and right
* bottom command desk / keyboard / control surface
* lanyard reduced into small access token

## Capability Terminals

1. Statistical Thinking
2. AI Product Logic
3. Data Workflow
4. System Analysis
5. Web-Based Solution
6. Leadership & Team Direction

## Transition Role

Scene 2 is formed from Scene 1.

* identity panels transform into terminal panels
* lanyard docks into access token
* monitor wall reconstructs into command center
* floor/background forms command desk and server racks

## Forbidden

Scene 2 must not become:

* central empty console with tiny side sockets
* six tiny strips on left/right
* generic skills dashboard
* ordinary card grid
* lanyard blocking the terminal grid

---

# SCENE 3 — KNOWLEDGE LIBRARY

## Clean Target

public/reference/clean-target/slide-3-knowledge-library.png

## Purpose

Show Kiagus’ knowledge foundations as a premium archive library.

This scene is the knowledge library.

It must not become a normal course list.

## Final Visual Identity

Scene 3 must show:

* KNOWLEDGE LIBRARY title
* four category tabs across the top
* active category: Mathematical & Statistical Foundation
* left feature pillar/book panel
* center Modules & Foundations panel
* 14 module rows in two columns
* active module: Statistical Inference
* right Pillar Overview panel
* bottom sentence bar
* warm library/archive environment

## Knowledge Categories

1. Mathematical & Statistical Foundation
2. Computing, Programming & Data Systems
3. Machine Learning, AI & Advanced Analytics
4. Business, Research, Leadership & Digital Transformation

## Transition Role

Scene 3 is formed from Scene 2.

* command terminals compress into archive/library panels
* terminal grid becomes category tabs and module rows
* command desk becomes bottom archive bar
* server racks become bookshelves
* teal command lighting warms into bronze/amber library lighting

## Forbidden

Scene 3 must not become:

* plain course list
* skill cards
* simple tab component
* academic resume block
* cold command UI with course names
* generic dashboard grid

---

# SCENE 4 — EXPERIENCE DISTRICT

## Clean Target

public/reference/clean-target/slide-4-experience-district.png

## Purpose

Show Kiagus’ experience as a living city/district map.

This scene is the experience district.

It must not become a resume timeline.

## Final Visual Identity

Scene 4 must show:

* left District Categories panel
* district status block
* night city skyline
* six district buildings/cards
* District 01 Avalon AI Community selected by default
* right vertical 04/08 journey indicator
* scroll-to-explore prompt as in-world HUD
* large bottom selected district panel
* key responsibilities column
* impact & outcome column
* evidence preview column
* bottom district navigation
* next destination hook toward Project Archive

## Experience Districts

1. Avalon AI Community
2. Department of Statistics ITS
3. Independent Team Project
4. Content Systems
5. Customer Operations
6. Leadership & Community

## Transition Role

Scene 4 is formed from Scene 3.

* selected knowledge module opens into a map
* module rows become roads/district paths
* bookshelves become skyline/buildings
* archive panels become district HUD panels
* library bottom bar becomes selected district detail panel

## Forbidden

Scene 4 must not become:

* normal work experience section
* resume timeline
* LinkedIn-style job history
* plain experience cards
* city wallpaper with cards pasted on top

---

# SCENE 5 — PROJECT ARCHIVE

## Clean Target

public/reference/clean-target/slide-5-project-archive.png

## Purpose

Show projects as cartridges inside an industrial project archive machine.

This scene is the project archive.

It must not become a normal project grid.

## Final Visual Identity

Scene 5 must show:

* PROJECT ARCHIVE title
* left project cartridge rack
* six project cartridges
* active cartridge: Automated Clipping Website
* central project viewer machine
* workflow blocks inside viewer
* right archive storage/equipment wall
* bottom Project Summary panel
* bottom Workflow Preview panel
* bottom Project Proof / Output Preview panel
* bottom tip bar

## Project Cartridges

1. Structured Survey Data Project
2. Business-Ready Data Packaging
3. Automated Clipping Website
4. Registration Website
5. Data Collection Website
6. Content Performance Editing System

## Transition Role

Scene 5 is formed from Scene 4.

* selected district building window becomes cartridge insertion slot
* district cards compress into project cartridges
* district navigation becomes cartridge selector rail
* city skyline becomes archive machine room
* evidence preview becomes project proof/output preview

## Truthfulness Rule

Scene 5 must not invent fake project facts.

Use safe labels when needed:

* Prototype Preview
* Demo Placeholder
* Output Preview Placeholder
* Workflow Concept
* Pre-Release System

## Forbidden

Scene 5 must not become:

* normal project cards
* case study grid
* screenshot gallery
* project carousel
* generic dashboard
* fake production proof

---

# SCENE 6 — ACHIEVEMENT ANALYTICS

## Clean Target

public/reference/clean-target/slide-6-achievement-analytics.png

## Purpose

Show achievements as a museum analytics display.

This scene is the achievement analytics room.

It must not become a normal awards list.

## Final Visual Identity

Scene 6 must show:

* ACHIEVEMENT ANALYTICS title
* subtitle
* left achievements list
* COMPFEST 16 selected by default
* central trophy inside glass display case
* right selected achievement metadata panel
* bottom Performance Analytics strip
* metric cards
* museum columns/walls/spotlights

## Achievement Focus

Default selected achievement:

COMPFEST 16 — AI Innovation Challenge

Default rank:

Champion

## Transition Role

Scene 6 is formed from Scene 5.

* project viewer machine becomes trophy display case
* active cartridge becomes trophy plaque
* project proof/output panels become achievement analytics
* cartridge rack becomes achievement list
* archive machine room becomes museum room

## Truthfulness Rule

Scene 6 must not invent fake achievements, fake certificates, fake rankings, fake evidence, or fake performance metrics.

If a metric is not verified, label it as:

* Conceptual Analytics
* Evidence Placeholder
* Achievement Slot
* To Be Verified

## Forbidden

Scene 6 must not become:

* awards list
* certificate gallery
* generic KPI dashboard
* trophy card
* achievement carousel
* fake proof display

---

# SCENE 7 — KNOWLEDGE MAP

## Clean Target

public/reference/clean-target/slide-7-knowledge-map.png

## Purpose

Show Kiagus’ capability relationships as a connected knowledge map.

This scene is the knowledge graph.

It must not become a normal skills section.

## Final Visual Identity

Scene 7 must show:

* KNOWLEDGE MAP INTERFACE title
* central DATA SCIENCE & AI BUILDER node
* seven domain nodes
* subskill lists around domain nodes
* connection lines
* dark grid interface
* bottom instruction bar

## Domain Nodes

1. Statistics
2. Research
3. Business Analytics
4. Leadership
5. Systems
6. Data Engineering
7. Machine Learning

## Transition Role

Scene 7 is formed from Scene 6.

* trophy reflections fragment into graph nodes
* achievement metric cards become domain clusters
* analytics trend lines become connection edges
* selected achievement metadata becomes subskill lists
* museum display case becomes graph canvas

## Forbidden

Scene 7 must not become:

* plain skill list
* generic mind map
* ordinary skills section
* course list
* random node graph
* seven-card grid

---

# SCENE 8 — FUTURE LABORATORY

## Clean Target

public/reference/clean-target/slide-8-future-laboratory.png

## Purpose

Close the portfolio with future direction, mission, and contact access inside a future laboratory.

This scene is the final laboratory.

It must not become a footer.

## Final Visual Identity

Scene 8 must show:

* four left future focus panels
* central holographic globe/data core
* future laboratory room
* city skyline through rear window
* right system status/lab context/environment panels
* OUR MISSION panel
* LET’S CONNECT console
* LinkedIn card
* GitHub card
* Email card
* Resume card
* bottom contact strip

## Future Focus Panels

1. AI Products
2. Data Platforms
3. Decision Intelligence
4. Automation Systems

## Contact Actions

1. LinkedIn
2. GitHub
3. Email
4. Resume

## Transition Role

Scene 8 is formed from Scene 7.

* central knowledge map node becomes holographic data globe
* graph edges converge into the data core
* domain nodes become future focus panels
* subskill stacks become system status panels
* bottom instruction bar becomes contact console
* graph canvas becomes future laboratory room

## Truthfulness Rule

Scene 8 must not invent fake contact details or fake system metrics.

Contact data must come from CONTENT_SOURCE.md.

Unverified lab metrics must be treated as interface/demo placeholders.

## Forbidden

Scene 8 must not become:

* normal contact section
* footer
* CTA block
* plain social links row
* resume download block
* generic ending section
* extra footer below the final scene

---

## 5. Transition Family Plan

No major transition concept may be reused more than 2 times.

Current transition families:

1. Scene 1 to Scene 2:
   Room morph / object role conversion

2. Scene 2 to Scene 3:
   Terminal compression / archive conversion

3. Scene 3 to Scene 4:
   Book opening / map extrusion

4. Scene 4 to Scene 5:
   Building collapse / cartridge formation

5. Scene 5 to Scene 6:
   Cartridge scan / analytics formation

6. Scene 6 to Scene 7:
   Trophy fragmentation / node graph formation

7. Scene 7 to Scene 8:
   Node convergence / data core formation

Each transition must have a distinct visual identity.

Do not reuse one transition trick repeatedly.

---

## 6. Main Implementation Order

Build the portfolio in this order:

1. Lock markdown rules and references.
2. Preserve approved Scene 1.
3. Fix Scene 2 final composition.
4. Build Scene 3 final composition.
5. Build Scene 4 final composition.
6. Build Scene 5 final composition.
7. Build Scene 6 final composition.
8. Build Scene 7 final composition.
9. Build Scene 8 final composition.
10. Build transitions between each scene.
11. Add interactions.
12. Polish motion and responsiveness.
13. Final build/lint.
14. Deploy.

Do not build detailed interactions before all final scene compositions are correct.

Do not polish motion before layout correctness.

Do not add fake content for visual density.

---

## 7. Global Acceptance Checklist

The portfolio is accepted only if:

1. It uses one cinematic viewport journey.
2. It does not feel like normal vertical scrolling.
3. It does not feel like scrolling a PDF.
4. It does not feel like stacked Figma frames.
5. Each scene final state matches its clean-target.
6. Each transition happens inside the same viewport.
7. Scene objects transform into the next scene objects.
8. Transition concepts are not overused.
9. UI remains premium, dark, readable, and low-noise.
10. Content is factual and does not invent proof.
11. Scene 8 ends the portfolio without a generic footer.
