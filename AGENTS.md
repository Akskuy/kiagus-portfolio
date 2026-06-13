# AGENTS.md — KIAGUS PORTFOLIO

## Mandatory Instructions for Codex / AI Coding Agents

---

# 0. Purpose

This file defines mandatory instructions for every AI coding agent working on the Kiagus Arif Rahman portfolio.

This file exists to prevent the agent from:

* ignoring the agreed visual direction
* rebuilding the site as a normal scrolling portfolio
* inventing fake content
* using clean-target images as backgrounds
* adding unsupported technologies
* changing the project positioning
* creating generic student portfolio layouts
* implementing scenes out of order
* breaking the one-viewport cinematic journey

Every agent must follow this file before editing code.

---

# 1. Read These Files First

Before making any code changes, read these files in this order:

1. PROJECT_BRIEF.md
2. SECTION_PLAN.md
3. SCENE_ARCHITECTURE.md
4. MOTION_RULES.md
5. ASSET_MAP.md
6. CONTENT_SOURCE.md
7. CONCEPT_BOARD_RULES.md
8. AGENTS.md

Do not start coding before understanding these files.

Do not rely only on the user prompt if it conflicts with the source-of-truth documents.

If there is conflict:

CONCEPT_BOARD_RULES.md wins for board-specific interaction behavior, click states, detail panels, tooltip/evidence behavior, and transition hooks.
SCENE_ARCHITECTURE.md wins for layout and scene structure.
MOTION_RULES.md wins for animation and transition behavior.
ASSET_MAP.md wins for asset usage.
CONTENT_SOURCE.md wins for text, facts, claims, skills, projects, and achievements.
PROJECT_BRIEF.md wins for overall project direction.
SECTION_PLAN.md wins for scene order and high-level flow.
AGENTS.md wins for agent behavior.

---

# 2. Project Identity

This project is a premium one-viewport cinematic portfolio for:

KIAGUS ARIF RAHMAN

Primary positioning:

Data Scientist
AI Product Builder
AI Builder

Main subtitle:

Data Scientist • AI Product Builder • AI Builder

Core statement:

Strong Data Science foundation for intelligent workflows and AI products.

The site must present Kiagus as:

* technically mature
* professional
* data-driven
* AI/product-oriented
* system-oriented
* honest
* premium

The site must not present him as:

* fake senior engineer
* fake enterprise architect
* generic student
* generic programmer
* generic portfolio template user

---

# 3. Absolute One-Viewport Rule

The portfolio must feel like one cinematic viewport.

The user scrolls, but the page must not feel like normal vertical scrolling.

Correct behavior:

User scrolls
→ viewport appears pinned
→ objects transform inside the same screen
→ the next scene assembles inside the same screen

Wrong behavior:

User scrolls
→ page moves down
→ next section appears below
→ it feels like a PDF, Figma frame, PowerPoint deck, or normal landing page

The wrong behavior is forbidden.

Do not build stacked normal sections as the main experience.

Do not implement scenes as independent vertical sections below each other.

Do not create a normal portfolio page with hero, skills, projects, achievements, and contact stacked vertically.

---

# 4. Clean-Target Rule

Each scene has a clean-target reference image.

Clean-targets are visual law.

Clean-target images define:

* final composition
* mood
* layout density
* major object placement
* hierarchy
* scene identity

Clean-targets must not be rendered directly in the final website.

Do not use clean-target images as:

* CSS background images
* full-screen overlays
* hidden screenshots
* scene images
* mockup images pasted into the page

The final UI must be recreated using real components.

Reference paths are defined in ASSET_MAP.md.

---

# 5. Concept-Board Rule

Concept-board images may guide planning, motion, interaction, and object relationships.

Concept-board images may include annotations.

Do not render concept-board images in the final website.

Do not copy annotation text into the UI unless it is also approved in CONTENT_SOURCE.md.

Clean-targets win for final visual layout.

Concept boards help motion and interaction only.

---

# 6. Content Truthfulness Rule

Do not invent facts.

Do not invent:

* achievements
* ranks
* certificates
* project outcomes
* production claims
* technology stacks
* user numbers
* client impact
* growth percentages
* deployment status
* official results
* contact data

All text and claims must come from CONTENT_SOURCE.md.

If a claim is not approved, use safe wording:

* Prototype Preview
* Demo Placeholder
* Output Preview Placeholder
* Workflow Concept
* Pre-Release System
* Implementation-Ready Direction
* Compatible Stack
* Recommended Stack
* Evidence Placeholder
* To Be Verified

Do not present placeholders as proof.

---

# 7. Banned Content

Do not use the banned education/campus content listed in CONTENT_SOURCE.md.

Specifically, do not use:

* Bachelor Communication
* 10+ campus events
* webinars and skills training workshops
* Business Orientation Camp Cluster Head
* Values-In-Action Ambassador
* Co-Curricular Activity Tennis

This content must not appear anywhere in the website.

Do not use it in:

* About text
* Education section
* metadata
* hidden content
* hover details
* card descriptions
* achievement text
* footer/contact
* resume summary

---

# 8. Skill Content Rule

Do not display the full course list on the website.

The coursework is used only as internal background to infer skills.

The site must sell the 9 main skill domains:

1. Statistical Reasoning
2. Data Workflow
3. Data Engineering Foundation
4. Machine Learning Thinking
5. System Analysis
6. Web-Based Solution Logic
7. Research and Validation
8. Decision Intelligence
9. Team and Product Direction

Do not create:

* transcript layout
* course dump
* semester-by-semester academic list
* raw class catalog
* long university coursework section

Use skill domains, knowledge pillars, capability terminals, and graph nodes instead.

---

# 9. Approved Main Projects

Scene 5 must use exactly these 5 approved main projects:

1. Automated Clipping Website
2. Skyholic Universe Recruitment & Scoring System
3. Cooperative UMKM Survey Data Project
4. Content Performance Editing System
5. Avalon AI AR Fashion Try-On Concept

Do not replace these with minor submodules.

Do not make “registration website” or “data collection website” a main cartridge.

Those may only appear as submodules inside the correct project context when approved by CONTENT_SOURCE.md.

Default active project:

Automated Clipping Website

---

# 10. Achievement Safety Rule

Scene 6 may show these verified achievements as real achievements:

1. COMPFEST 16 — AI Innovation Challenge — Champion
2. ICONIC IT — UI/UX Competition — Runner-up
3. Bangkit Program — Best 2nd Product / Top 2 of 600+ products

Do not invent additional awards.

Do not invent:

* Data Science Summit
* Leadership Award
* AI Hackathon
* fake certificate
* fake placement
* fake judge score
* fake participant count
* fake timeline
* fake national claim

If more visual slots are needed, use:

Documentation Slot
Replace With Verified Proof

---

# 11. Scene List

The portfolio contains exactly 8 main scenes:

1. Identity Snapshot
2. Capability Matrix
3. Knowledge Library
4. Experience District
5. Project Archive
6. Achievement Analytics
7. Knowledge Map
8. Future Laboratory

Do not add Scene 9.

Do not add a normal footer after Scene 8.

Scene 8 is the final contact/lab screen.

---

# 12. Scene Implementation Order

Do not randomly build all scenes at once.

Preferred order:

1. Confirm source-of-truth markdown files.
2. Confirm one-viewport pinned architecture.
3. Implement or refine Scene 1 final state.
4. Implement Scene 1 to Scene 2 transition.
5. Implement Scene 2 final state.
6. Continue scene-by-scene.
7. Keep clean-target matching as the acceptance standard.
8. Run lint/build checks after meaningful changes.
9. Commit only coherent changes.

Do not proceed to later scenes if the current scene violates one-viewport or clean-target rules.

---

# 13. Motion Rule

Motion must follow MOTION_RULES.md.

Do not use basic fade/slide/zoom as the main transition.

Do not use repeated transition tricks.

Every transition must show object role change.

Examples:

* lanyard becomes access token
* terminals become library modules
* module/book becomes district map
* building becomes project cartridge
* cartridge becomes trophy plaque
* trophy/metrics become graph nodes
* graph node becomes data globe

Motion is the story of the portfolio.

Motion is not decoration.

---

# 14. Design Quality Rule

The site should feel:

* premium
* cinematic
* technical
* system-oriented
* data-driven
* interactive
* custom-built
* readable
* controlled

The site must not feel:

* basic
* generic
* template-like
* childish
* chaotic
* noisy cyberpunk
* normal SaaS landing page
* normal student CV
* static screenshot gallery
* PowerPoint deck
* Figma prototype

Professional first.
Game-like second.

Target ratio:

80% professional portfolio
20% cinematic/game-inspired interaction

---

# 15. Asset Usage Rule

Use assets according to ASSET_MAP.md.

Important approved assets:

Kiagus portrait:

public/avatar/fotokiagus.jpeg

Resume PDF:

public/docs/kiagus-arif-rahman-resume.pdf

Clean-target references:

public/reference/clean-target/

Concept-board references:

public/reference/concept-board/

Rules:

* do not move assets randomly
* do not rename assets without updating ASSET_MAP.md
* do not use reference images as final UI
* do not use placeholders as evidence
* do not invent evidence images
* do not generate fake certificates
* do not replace Kiagus portrait with AI-generated portrait

---

# 16. Contact Data Rule

Approved contact values:

Email:

[Arifkiagus577@gmail.com](mailto:Arifkiagus577@gmail.com)

GitHub:

github.com/Akskuy

LinkedIn:

linkedin.com/in/Kiagusarifrahman

Phone:

085175376593

Location:

Tangerang Selatan, Indonesia

Resume path:

public/docs/kiagus-arif-rahman-resume.pdf

Do not use Selvi’s personal contact data.

Do not use the assistant/user account email.

Do not invent other links.

---

# 17. Coding Style Direction

Use the existing project stack and conventions.

Current direction:

* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion
* GSAP only when useful for timeline animation

Known journey files:

* src/components/journey/cinematic-journey.tsx
* src/components/journey/pinned-journey-stage.tsx
* src/components/journey/use-cinematic-scroll-progress.ts

Known reusable UI direction:

* InteractiveRevealPanel
* AnimatedBorder
* StatusLed
* ScannerBeam
* DataPacketLine
* PixelSeparator
* IconTile
* MicroLabel
* PremiumPlaceholder
* PixelPanel
* PixelButton

Before creating new components, check whether existing components can be extended.

Do not duplicate component logic unnecessarily.

Do not create random one-off components when a reusable scene component is better.

---

# 18. Component-Built Website Rule

Build the website with real components.

Do not create the final portfolio by displaying generated images.

Do not create scenes as screenshot backgrounds.

Do not create fake UI inside image files.

Use:

* semantic components
* real text
* real panels
* real buttons
* real hover states
* real motion
* real layout
* real responsive behavior

Reference images guide the result, but they are not the result.

---

# 19. Performance Rule

Keep the site performant.

Avoid:

* too many always-running animations
* heavy blur everywhere
* massive box-shadow animations
* huge image overlays
* uncontrolled particle systems
* layout thrashing
* excessive DOM nodes
* background videos unless explicitly approved

Prefer:

* transforms
* opacity
* limited animated elements
* reusable motion primitives
* CSS variables where useful
* restrained glow effects
* reduced motion support

Premium does not mean noisy.

---

# 20. Build and Validation Rule

After meaningful code changes, run the appropriate checks.

Use project scripts from package.json.

Common checks may include:

npm run lint

npm run build

Do not claim success without running the relevant check when asked.

If a command fails, report the exact failure and fix it.

Do not hide errors.

---

# 21. Git Safety Rule

Do not commit unrelated changes.

Before committing:

1. Run git status.
2. Confirm changed files are expected.
3. Add only relevant files.
4. Use a clear commit message.
5. Do not commit broken build unless explicitly instructed.

Preferred commit style:

* Align markdown rules with portfolio direction
* Implement Scene 2 capability matrix
* Refine one viewport journey transition
* Fix project archive content mapping

Do not commit random generated files, temporary files, or reference screenshots unless intentionally added.

---

# 22. Response Style for Agent Work

When reporting work, be specific.

Good report:

* changed files
* what changed
* what rules were followed
* build/lint result
* remaining risks

Bad report:

* “done”
* “I improved it”
* “looks good”
* “should work”
* “I made it better”

Always mention if anything is incomplete, placeholder, or unverified.

---

# 23. Forbidden Agent Behavior

Do not:

* redesign the whole project without instruction
* ignore clean-targets
* invent content
* invent achievements
* invent metrics
* use unapproved project list
* turn portfolio into normal scroll page
* create generic resume sections
* add footer after Scene 8
* use full course list as UI content
* use fake certificates
* use fake dashboard screenshots
* add random libraries
* rewrite source-of-truth docs without being asked
* remove existing working architecture without reason
* hide build errors
* claim implementation is complete when it is not

---

# 24. Final Agent Checklist

Before finishing any task, check:

1. Did I follow PROJECT_BRIEF.md?
2. Did I follow SECTION_PLAN.md?
3. Did I follow SCENE_ARCHITECTURE.md?
4. Did I follow MOTION_RULES.md?
5. Did I follow ASSET_MAP.md?
6. Did I follow CONTENT_SOURCE.md?
7. Did I preserve one-viewport cinematic behavior?
8. Did I avoid normal scroll-down section design?
9. Did I avoid rendering clean-target images directly?
10. Did I avoid fake claims?
11. Did I avoid banned education content?
12. Did I use the 5 approved projects?
13. Did I keep achievements verified?
14. Did I avoid raw course-list display?
15. Did I keep the site premium and honest?
16. Did I run checks when needed?
17. Did I report incomplete or placeholder parts clearly?

If any answer is no, revise before finalizing.

---

# 25. Final Rule

This project is not a normal portfolio.

It is a premium one-viewport cinematic portfolio.

Every code change must protect:

* the one-screen cinematic journey
* the clean-target visual direction
* the truthful content source
* the 5 approved projects
* the 9 selling skills
* the verified achievement list
* the professional Data Science / AI Product Builder positioning

Do not make it basic.

Do not make it fake.

Do not make it scroll like a PDF.
