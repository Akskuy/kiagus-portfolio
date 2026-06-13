# CONCEPT BOARD RULES — KIAGUS PORTFOLIO

## Interaction, Phase, and Transition Addendum

---

# 0. Purpose

This file defines the interaction and phase rules extracted from the concept-board reference images for all 8 slides.

This file is an addendum.

Do not replace existing source-of-truth files with this file.

This file adds stricter rules for:

* scene phases
* hover behavior
* click behavior
* detail panels
* tooltip/evidence panels
* transition hooks
* scroll sequence behavior
* board-specific interaction logic

---

# 1. Priority Rule

Use these priorities:

1. CONTENT_SOURCE.md wins for factual content, approved text, projects, skills, achievements, contact data, and safe wording.
2. Clean-target images win for final visual layout and composition.
3. Concept-board images win for interaction, phase sequence, click behavior, detail panels, tooltip/evidence panels, and transition hooks.
4. SCENE_ARCHITECTURE.md and MOTION_RULES.md still define the overall one-viewport cinematic journey.
5. If old markdown conflicts with this addendum about interaction behavior, follow this addendum.

Important:

Concept-board images may contain older or placeholder text.

Do not copy factual text from concept boards if it conflicts with CONTENT_SOURCE.md.

Use the board for behavior and structure, not for unverified claims.

---

# 2. Global Concept-Board Rule

Every scene must support three behavior states where applicable:

1. Initial / idle state
2. Hover / selected emphasis state
3. Click / detail state

A scene is incomplete if it only looks visually correct but has no interaction where the concept-board explicitly requires interaction.

When a board says:

* "on click"
* "click to view"
* "detail panel"
* "tooltip"
* "evidence"
* "selected item expands"

then the implemented scene must support that behavior.

Do not replace board interaction with static decoration.

---

# 3. Global Detail Panel Rule

If a concept-board shows a detail panel on click, the final website must include an in-world detail panel.

Rules:

* The detail panel must stay inside the same scene.
* Do not open a modal.
* Do not open a new page.
* Do not create scrollable content inside the scene.
* Do not break one-viewport layout.
* The panel must update based on the selected item.
* The panel must use approved text from CONTENT_SOURCE.md.
* Keep detail compact and readable.

---

# 4. Global Tooltip / Evidence Rule

If a concept-board shows a tooltip or evidence panel, the final website must include a compact tooltip/evidence area.

Rules:

* It must update based on selected or hovered item.
* It must be clearly labeled as context, evidence, tooltip, value, or related proof.
* It must not invent proof.
* If real evidence is missing, use safe wording such as:

  * Evidence Placeholder
  * Related Context
  * Documentation Slot
  * Replace With Verified Proof
  * Output Preview Placeholder

---

# 5. Global Scroll Sequence Rule

Concept-board scroll sequences are interaction guides.

The website does not need to literally use 65 image frames.

But each scene should respect the board sequence:

1. enter scene
2. boot / activate interface
3. idle clickable state
4. detail focus
5. transition hook to next scene

Scroll should not feel too long.

Scroll distance may be shortened as long as the transition remains smooth.

For the current Scene 1 to Scene 2 range, avoid overly long scroll distance.

Preferred feel:

* smooth
* cinematic
* not abrupt
* not tiring
* not too much empty scrolling

---

# 6. Slide 1 — Identity Snapshot Board Rules

Reference board:

public/reference/concept-board/slide-1-identity-snapshot-board.png

## Required Flow

PHASE A — Preload Interface / Portfolio Boot
PHASE B — Entering Data Center
PHASE C — Identity Snapshot Activated
PHASE D — Transition Hook to Slide 2

## Required Interaction

Avatar interaction:

* idle: subtle breathing
* hover: glow + label
* click: open About Kiagus panel

Stat card tooltip:

* hover on identity/stat card should show compact tooltip
* tooltip should explain the selected identity card
* tooltip must use approved safe identity content

About panel on click:

* clicking avatar or identity main element should open an About Kiagus panel
* panel must stay inside Scene 1
* no modal page
* no normal section expansion
* no fake content

## Required Transition Hook

Scene 1 should transition to Scene 2 by entering or focusing into the monitor / command center direction.

The hook should feel like:

Identity Snapshot
→ monitor/data center focus
→ Capability Matrix command center

Do not turn it into a normal scroll-down transition.

---

# 7. Slide 2 — Capability Matrix Board Rules

Reference board:

public/reference/concept-board/slide-2-capability-matrix-board.png

## Required Flow

PHASE A — Enter Command Center
PHASE B — Terminal Boot
PHASE C — Capability Matrix Active
PHASE D — Transition Hook to Slide 3

## Required Main Interaction

Terminal interaction must exist.

Required behavior:

IDLE
→ HOVER
→ CLICK

Idle:

* terminal is readable
* soft glow
* no excessive movement

Hover:

* stronger outline
* subtle pulse
* terminal feels selectable
* cursor pointer
* status light or border responds

Click:

* selected terminal becomes visibly active
* detail panel opens inside Scene 2
* tooltip/evidence area updates
* no modal
* no page navigation
* no scene-breaking layout shift

## Required Detail Panel

Board requires:

DETAIL PANEL (ON CLICK)

Implementation must include a compact detail panel.

For each selected terminal, show:

* icon/glyph
* capability title
* command label
* 3 to 5 short skill bullets
* related context/evidence line

Use approved skill/content from CONTENT_SOURCE.md.

Do not add long descriptions.

Do not add fake technologies or fake metrics.

## Required Capability Tooltip / Evidence

Board requires:

CAPABILITY TOOLTIP / EVIDENCE

Implementation must include a small in-world panel that updates based on selected terminal.

Examples:

* Related Context
* Related Evidence
* Capability Value
* Portfolio Evidence
* Academic / Project Context

If no proof exists, use safe wording.

## Approved Terminal Content

Use CONTENT_SOURCE.md for terminal titles and commands:

1. STATISTICAL THINKING / RUN_STATISTICAL_LOGIC
2. AI PRODUCT LOGIC / RUN_AI_PRODUCT_FLOW
3. DATA WORKFLOW / RUN_DATA_PIPELINE
4. SYSTEM ANALYSIS / RUN_SYSTEM_ANALYSIS
5. WEB-BASED SOLUTION / RUN_WEB_SOLUTION
6. LEADERSHIP & TEAM DIRECTION / RUN_TEAM_DIRECTION

## Required Transition Hook

Board shows transition to Slide 3 by entering selected terminal / moving toward knowledge archive.

Acceptable interpretation:

Selected terminal focus
→ terminal interface expands
→ terminal knowledge data compresses into archive/library system
→ Knowledge Library appears

Do not make it a generic fade.

Do not make it a normal scroll to next section.

---

# 8. Slide 3 — Knowledge Library Board Rules

Reference board:

public/reference/concept-board/slide-3-knowledge-library-board.png

## Required Flow

PHASE A — Enter Library
PHASE B — Knowledge Pillars Boot
PHASE C — Knowledge Library Active
PHASE D — Transition Hook to Slide 4

## Required Main Interaction

Pillar interaction must exist.

Required behavior:

IDLE
→ HOVER
→ CLICK

Idle:

* pillars visible
* active pillar readable
* library atmosphere stable

Hover:

* pillar highlight
* outline/glow strengthens
* selectable feel

Click:

* selected pillar becomes active
* modules/foundations update
* detail panel updates
* tooltip/value panel updates

## Required Detail Panel

Board requires:

DETAIL PANEL (ON CLICK)

Implementation must include selected pillar detail.

Show compact data such as:

* pillar title
* selected module
* 3 to 5 concept bullets
* related academic/source context

Do not show full raw course list.

Use curated modules only.

## Required Knowledge Tooltip / Value

Board requires:

KNOWLEDGE TOOLTIP / VALUE

Implementation must include a compact panel explaining the value of selected pillar.

Use safe wording from CONTENT_SOURCE.md.

## Required Transition Hook

Board shows transition to Slide 4 using book/page opening into Experience District.

Required concept:

Knowledge Library
→ selected book/page opens
→ city/district appears through page
→ Experience District

This hook is mandatory.

Do not use a generic fade.

---

# 9. Slide 4 — Experience District Board Rules

Reference board:

public/reference/concept-board/slide-4-experience-district-board.png

## Required Flow

Experience District must behave like an explorable city/district map.

Main idea:

Each building represents a chapter of experience.

## Required Main Interaction

Building/district interaction must exist.

Required behavior:

* click building to view story inside
* selected building/district becomes active
* bottom selected district panel updates
* district navigation updates
* evidence preview updates where available

Hover:

* building/card glow
* district label emphasis
* cursor pointer

Click:

* bottom selected district panel changes to selected district
* key responsibilities update
* impact/outcome update
* evidence preview/context updates

## Required Navigation

Board shows district navigation.

Implementation should include:

* district categories
* district status
* selected district panel
* district navigation selector
* next destination hook

## Required Evidence Behavior

Evidence preview must not invent proof.

Use safe labels:

* Reports, project docs, and community activities
* Evidence Placeholder
* Documentation Slot
* Replace With Verified Proof

## Required Transition Hook

Board points to Project Archive through a building window / next destination.

Required concept:

Selected building window
→ camera enters building/interior
→ archive room appears
→ Project Archive

Do not transition with generic page scroll.

---

# 10. Slide 5 — Project Archive Board Rules

Reference board:

public/reference/concept-board/slide-5-project-archive-board.png

## Content Conflict Warning

The board may show an older project list.

Do not follow old board project names if they conflict with CONTENT_SOURCE.md.

Use only the five approved main projects from CONTENT_SOURCE.md:

1. Automated Clipping Website
2. Skyholic Universe Recruitment & Scoring System
3. Cooperative UMKM Survey Data Project
4. Content Performance Editing System
5. Avalon AI AR Fashion Try-On Concept

Old board labels such as separate Registration Website or Data Collection Website must not become main cartridges.

They may only appear as submodules if approved.

## Required Flow

PHASE A — Transition from Slide 4
PHASE B — Initial Interface
PHASE C — Idle Clickable State
PHASE D — Transition Hook to Slide 6

## Required Main Interaction

Project cartridge interaction must exist.

Required behavior:

* cartridge idle glow
* cartridge hover glow
* click cartridge to update project viewer
* click viewer area may open selected project detail
* no modal
* no separate project page
* no vertical project page scroll

## Required Detail Behavior

Board shows:

Content when main element is clicked
Content when other elements are clicked

Implementation must include:

* selected project title
* problem
* solution
* role
* architecture/workflow
* result/status
* related skills

All wording must follow CONTENT_SOURCE.md safe project rules.

Do not invent stack.

Use:

* Stack TBD
* Recommended Stack
* Compatible Stack
* Implementation-Ready Direction

only when appropriate.

## Required Output / Proof Preview

Project proof/output preview must be honest.

If no real proof exists, label as:

* Output Preview Placeholder
* Screenshot Slot
* Replace With Verified Proof

## Required Transition Hook

Board shows selected cartridge enters machine and output/proof transforms toward Achievement Analytics.

Required concept:

Selected cartridge
→ machine insertion
→ project proof/output data
→ museum/trophy analytics
→ Achievement Analytics

---

# 11. Slide 6 — Achievement Analytics Board Rules

Reference board:

public/reference/concept-board/slide-6-achievement-analytics-board.png

## Content Conflict Warning

The board may show older placeholder achievements such as:

* Data Science Summit
* Leadership Award
* AI Hackathon

Do not use them as real achievements.

Use only verified achievements from CONTENT_SOURCE.md:

1. COMPFEST 16 — AI Innovation Challenge — Champion
2. ICONIC IT — UI/UX Competition — Runner-up
3. Bangkit Program — Best 2nd Product / Top 2 of 600+ products

Additional visual rows must be:

Documentation Slot
Replace With Verified Proof

## Required Flow

PHASE A — Transition from Slide 5
PHASE B — Initial Interface
PHASE C — Idle Clickable State
PHASE D — Transition Hook to Slide 7

## Required Main Interaction

Achievement card interaction must exist.

Required behavior:

* achievement list visible
* active achievement highlighted
* hover on achievement entry strengthens glow
* click achievement updates selected panel and central display if applicable
* trophy reflects selected achievement context

## Required Selected Achievement Panel

Board requires content when main element is clicked and content when other elements are clicked.

Implementation must include:

* achievement title
* rank
* scale/domain
* related capability
* outcome

Use only verified content.

No fake metrics.

## Required Analytics Band

Analytics metrics must follow CONTENT_SOURCE.md.

Do not use fake conceptual values like 91% impact score or +34% growth unless specifically verified.

Use safer metrics:

* VERIFIED WINS
* ACHIEVEMENT SLOTS
* RECOGNITION LEVEL
* DOMAINS COVERED
* GROWTH SIGNAL
* EVIDENCE STATUS

## Required Transition Hook

Board shows trophy reflection and metrics dissolve into connected nodes for Knowledge Map.

Required concept:

Trophy reflection
→ particles/nodes
→ achievement metrics become graph nodes
→ Knowledge Map

Do not use generic fade.

---

# 12. Slide 7 — Knowledge Map Board Rules

Reference board:

public/reference/concept-board/slide-7-knowledge-map-board.png

## Required Flow

PHASE A — Transition from Slide 6
PHASE B — Initial Interface
PHASE C — Idle Clickable State
PHASE D — Transition Hook to Slide 8

## Required Main Interaction

Knowledge map node interaction must exist.

Required behavior:

* central node visible
* domain nodes visible
* connector lines visible
* hover domain node emphasizes node and related connections
* click domain node expands or highlights subskills/evidence
* selected domain detail panel updates

## Required Detail Behavior

Board shows:

Content when main element is clicked
Content when other elements are clicked

Implementation must include:

* selected domain title
* subskills
* related evidence/context
* connection emphasis

Do not show raw full course list.

Use the 9 selling skill domains and subskills from CONTENT_SOURCE.md.

## Required Bottom Guidance

Board shows guidance:

Explore connections between skills.
Click any domain to view subskills and evidence.

This guidance should exist in the scene.

## Required Transition Hook

Board shows active nodes converging into central light/hologram for Future Laboratory.

Required concept:

All active nodes converge
→ central data core forms
→ Future Laboratory

Do not use generic section reveal.

---

# 13. Slide 8 — Future Laboratory Board Rules

Reference board:

public/reference/concept-board/slide-8-future-laboratory-board.png

## Content Conflict Warning

The board may show conceptual lab metrics such as:

* active projects 15+
* data sources 24
* models deployed 12
* team members 10

Do not use these as factual production claims unless verified.

Use CONTENT_SOURCE.md safer lab context values.

## Required Flow

PHASE A — Transition from Slide 7
PHASE B — Initial Interface
PHASE C — Idle Clickable State
PHASE D — Final State / Closing Hook

Scene 8 is the final scene.

Do not create Scene 9.

Do not add a normal footer after Scene 8.

## Required Main Interaction

Future focus panels and connect cards should be interactive.

Focus panels:

* AI Products
* Data Platforms
* Decision Intelligence
* Automation Systems

Hover/click behavior:

* selected focus panel glows
* mission/context can update subtly
* no modal
* no scrollable detail section

Connect cards:

* LinkedIn opens profile
* GitHub opens profile
* Email opens mail client
* Resume opens/downloads resume PDF
* Contact strip may show/copy contact details if implemented

## Required Final State

Final state should feel like a stable contact and future-direction laboratory.

The site should settle into an idle loop.

No next-scene transition.

## Required Truth Rule

Do not invent contact data.

Use approved contact values from CONTENT_SOURCE.md.

---

# 14. Global Conflict Overrides

If any older markdown says interaction is optional but the concept-board says click/detail/tooltip is required, follow this file.

If any board has old content that conflicts with CONTENT_SOURCE.md, follow CONTENT_SOURCE.md.

If any board shows a visual layout that conflicts with clean-target final composition, follow the clean-target for final composition but keep the board interaction behavior.

If any implementation becomes static where the board requires click behavior, implementation is incomplete.

---

# 15. Final Concept-Board Acceptance Checklist

Before accepting any scene, check:

1. Does the scene match the clean-target final composition?
2. Does the scene follow the concept-board interaction behavior?
3. Does the scene have idle, hover, and click states where required?
4. Does click open or update an in-world detail panel when required?
5. Does tooltip/evidence update when required?
6. Does the scene use approved CONTENT_SOURCE text only?
7. Does it avoid fake metrics and fake proof?
8. Does transition hook match the board story?
9. Does the scene stay inside one viewport?
10. Does it avoid normal vertical scrolling?
11. Does scroll distance feel smooth but not tiring?
12. Does the final result feel premium, readable, and intentional?

If any answer is no, revise before moving to the next scene.
