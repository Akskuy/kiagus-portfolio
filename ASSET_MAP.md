# ASSET MAP — KIAGUS PORTFOLIO

## Source of Truth for Portfolio Assets

---

# 0. Purpose

This file defines where assets live and how they may be used.

This file prevents incorrect asset usage such as:

* rendering clean-target images as static backgrounds
* using concept-board annotations in the final UI
* inventing fake evidence images
* using placeholder images as real proof
* placing assets in random folders
* using wrong file paths
* duplicating assets unnecessarily

Scene layout is defined in:

SCENE_ARCHITECTURE.md

Motion behavior is defined in:

MOTION_RULES.md

Scene order is defined in:

SECTION_PLAN.md

Portfolio text and factual claims are defined in:

CONTENT_SOURCE.md

---

# 1. Global Asset Rule

Assets must support the one-viewport cinematic journey.

Assets must not turn the portfolio into:

* static image slides
* a screenshot gallery
* background-image-only scenes
* a fake visual mockup pasted into the page
* normal web sections with decorative images

The website must recreate the scenes using real UI components.

Reference images are visual blueprints, not final rendered backgrounds.

---

# 2. Asset Folder Structure

Primary asset folders:

public/avatar/

public/docs/

public/reference/clean-target/

public/reference/concept-board/

Recommended future folders:

public/evidence/

public/evidence/projects/

public/evidence/achievements/

public/evidence/community/

public/placeholders/

public/icons/

public/textures/

public/environment/

Rules:

* Do not scatter portfolio assets randomly.
* Do not put reference images in component folders.
* Do not put real evidence inside reference folders.
* Do not put generated placeholders inside evidence folders unless clearly labeled.
* Do not treat reference boards as user-facing content.

---

# 3. Clean Target References

Clean-target images define the final visual composition of each scene.

Clean-target images are not final UI assets.

They are used only as visual blueprints during development.

Do not render clean-target images directly in the final website.

Do not use clean-target images as CSS backgrounds.

Do not cover the website with clean-target screenshots.

The final website must recreate the design using components.

## Scene 1 Clean Target

Path:

public/reference/clean-target/slide-1-identity-snapshot.png

Scene:

Identity Snapshot

Usage:

* final composition reference
* title placement reference
* central lanyard/photo card reference
* left/right identity panel placement reference
* dark data-center mood reference

Do not:

* render it as a background
* crop it into UI
* use it as hero image

## Scene 2 Clean Target

Path:

public/reference/clean-target/slide-2-capability-matrix.png

Scene:

Capability Matrix

Usage:

* final command-center composition reference
* 2x3 terminal grid reference
* server rack left/right reference
* bottom command desk reference
* title rail reference

Important:

Scene 2 must not become central console with tiny side sockets.

Clean-target requires six large terminals in a 2x3 grid.

## Scene 3 Clean Target

Path:

public/reference/clean-target/slide-3-knowledge-library.png

Scene:

Knowledge Library

Usage:

* final archive/library composition reference
* top category tabs reference
* left pillar panel reference
* center modules panel reference
* right overview panel reference
* bottom sentence bar reference
* warm archive mood reference

Important:

Scene 3 must not become a course list or ordinary tab component.

## Scene 4 Clean Target

Path:

public/reference/clean-target/slide-4-experience-district.png

Scene:

Experience District

Usage:

* final night city UI composition reference
* six district building/card layout reference
* left district categories panel reference
* bottom selected district panel reference
* right vertical journey indicator reference
* bottom district navigation reference

Important:

Scene 4 must not become a resume timeline.

## Scene 5 Clean Target

Path:

public/reference/clean-target/slide-5-project-archive.png

Scene:

Project Archive

Usage:

* final project archive machine composition reference
* left cartridge rack reference
* central project viewer machine reference
* right archive equipment wall reference
* bottom summary/workflow/proof panels reference

Important:

Scene 5 must not become a normal project card grid.

## Scene 6 Clean Target

Path:

public/reference/clean-target/slide-6-achievement-analytics.png

Scene:

Achievement Analytics

Usage:

* final museum analytics composition reference
* left achievement list reference
* central trophy display reference
* right selected achievement panel reference
* bottom performance analytics strip reference

Important:

Scene 6 must not become a normal awards list or fake certificate gallery.

## Scene 7 Clean Target

Path:

public/reference/clean-target/slide-7-knowledge-map.png

Scene:

Knowledge Map

Usage:

* final graph interface composition reference
* central DATA SCIENCE & AI BUILDER node reference
* domain node placement reference
* subskill list placement reference
* connection line reference
* bottom instruction bar reference

Important:

Scene 7 must not become a generic mind map or skill cards.

## Scene 8 Clean Target

Path:

public/reference/clean-target/slide-8-future-laboratory.png

Scene:

Future Laboratory

Usage:

* final lab composition reference
* central holographic globe reference
* left future focus panels reference
* right system panels reference
* mission panel reference
* connect console reference
* contact strip reference

Important:

Scene 8 must not become a footer or normal contact section.

---

# 4. Concept Board References

Concept-board images are for planning motion and interaction.

They may contain annotations, arrows, labels, phases, and notes.

They must not be rendered in the final UI.

Do not copy annotation text from concept boards into the website.

Concept-board images may guide:

* transition logic
* object relationship
* interaction behavior
* phase planning
* animation hook
* scene storytelling

Clean-target references always win for final visual composition.

## Scene 1 Concept Board

Expected path:

public/reference/concept-board/slide-1-identity-snapshot-board.png

Usage:

* identity interaction planning
* lanyard behavior idea
* side panel reveal behavior idea
* boot/preloader planning

## Scene 2 Concept Board

Expected path:

public/reference/concept-board/slide-2-capability-matrix-board.png

Usage:

* capability terminal interaction planning
* command center motion planning
* identity-to-capability morph planning

## Scene 3 Concept Board

Expected path:

public/reference/concept-board/slide-3-knowledge-library-board.png

Usage:

* library tab interaction planning
* archive-panel behavior planning
* terminal-to-library morph planning

## Scene 4 Concept Board

Expected path:

public/reference/concept-board/slide-4-experience-district-board.png

Usage:

* district building interaction planning
* city map exploration planning
* book-to-map transition planning

## Scene 5 Concept Board

Expected path:

public/reference/concept-board/slide-5-project-archive-board.png

Usage:

* cartridge interaction planning
* project viewer behavior planning
* district-to-cartridge transition planning

## Scene 6 Concept Board

Expected path:

public/reference/concept-board/slide-6-achievement-analytics-board.png

Usage:

* trophy/museum analytics planning
* achievement selection behavior
* project-proof-to-achievement transition planning

## Scene 7 Concept Board

Expected path:

public/reference/concept-board/slide-7-knowledge-map-board.png

Usage:

* graph interaction planning
* node relationship planning
* achievement-to-graph transition planning

## Scene 8 Concept Board

Expected path:

public/reference/concept-board/slide-8-future-laboratory-board.png

Usage:

* lab closing interaction planning
* contact console planning
* graph-to-data-core transition planning

---

# 5. Avatar Assets

## Kiagus Portrait

Path:

public/avatar/fotokiagus.jpeg

Usage:

* Scene 1 central lanyard/photo card
* AvatarCore component
* identity snapshot visual anchor

Allowed use:

* front face of lanyard card
* small avatar token if needed
* profile identity object

Not allowed:

* using it as full-page background
* distorting the face
* making it low-quality through excessive filters
* replacing it with a random AI portrait
* using it in Scene 2 as large hero after lanyard has docked

Scene-specific rule:

In Scene 1, the portrait is central and important.

In Scene 2, the portrait/lanyard may only remain as a small docked access token.

From Scene 3 onward, the portrait should not dominate unless explicitly approved.

---

# 6. Document Assets

## Resume PDF

Path:

public/docs/kiagus-arif-rahman-resume.pdf

Usage:

* Scene 8 Resume card
* resume open/download action
* optional resume reference link

Rules:

* resume card should open or download this file
* do not create fake resume content if the PDF exists
* do not claim resume was updated unless file is updated
* do not replace this with external unverified link

Scene 8 resume card should use:

Title:

RESUME

Detail:

Download My Resume

Action target:

public/docs/kiagus-arif-rahman-resume.pdf

---

# 7. Evidence Assets

Evidence assets are not the same as placeholders.

Evidence means real proof, such as:

* real screenshots
* real certificates
* real documents
* real project output captures
* real community activity documentation
* real project delivery files
* real competition proof

Recommended path:

public/evidence/

Recommended subfolders:

public/evidence/projects/

public/evidence/achievements/

public/evidence/community/

Do not invent evidence.

Do not generate fake certificates.

Do not generate fake screenshots and present them as real.

Do not use visual placeholders as proof.

If evidence is missing, use clearly labeled placeholders.

---

# 8. Placeholder Assets

Placeholders are allowed when real evidence is not available yet.

Recommended path:

public/placeholders/

Placeholder labels must be honest.

Allowed labels:

* Prototype Preview
* Demo Placeholder
* Evidence Placeholder
* Output Preview Placeholder
* Replace With Verified Proof
* Screenshot Slot
* Documentation Slot
* To Be Verified
* Conceptual Analytics
* Portfolio Display Placeholder

Forbidden labels:

* Real Client Result
* Verified Certificate
* Production Screenshot
* Deployed System Proof
* Official Document
* Real User Analytics

unless actually verified.

Placeholders may be used in:

* Scene 5 Project Proof / Output Preview
* Scene 6 Achievement evidence slots
* Scene 8 lab context/demo system values

Placeholders must never pretend to be real proof.

---

# 9. Scene-Specific Asset Usage

## Scene 1 — Identity Snapshot

Required assets:

* public/avatar/fotokiagus.jpeg
* public/reference/clean-target/slide-1-identity-snapshot.png as reference only
* public/reference/concept-board/slide-1-identity-snapshot-board.png as planning reference only if available

Rendered user-facing assets:

* Kiagus portrait

Reference-only assets:

* clean-target
* concept-board

Do not render:

* clean-target image
* concept-board image
* annotation text

## Scene 2 — Capability Matrix

Required assets:

* public/reference/clean-target/slide-2-capability-matrix.png as reference only
* public/reference/concept-board/slide-2-capability-matrix-board.png as planning reference only if available

Rendered user-facing assets:

* no required bitmap asset
* UI should be built from components

Optional generated internal objects:

* icon/glyph components
* server rack shapes
* terminal panels
* command desk shapes

Do not render:

* clean-target image as background
* concept-board image
* fake terminal screenshots

## Scene 3 — Knowledge Library

Required assets:

* public/reference/clean-target/slide-3-knowledge-library.png as reference only
* public/reference/concept-board/slide-3-knowledge-library-board.png as planning reference only if available

Rendered user-facing assets:

* preferably component-built library UI
* optional texture assets only if they do not replace component design

Optional future assets:

* subtle paper/wood texture
* book glyphs
* archive icons

Do not render:

* clean-target as library background
* concept-board annotations
* fake academic certificates

## Scene 4 — Experience District

Required assets:

* public/reference/clean-target/slide-4-experience-district.png as reference only
* public/reference/concept-board/slide-4-experience-district-board.png as planning reference only if available

Rendered user-facing assets:

* city/building visuals should be component-built or controlled environment assets
* district cards must be components

Optional future assets:

* pixel building sprites
* skyline texture
* avatar/character sprite if approved

Do not render:

* clean-target as full city background
* fake documentation thumbnails as real proof
* unverified evidence

## Scene 5 — Project Archive

Required assets:

* public/reference/clean-target/slide-5-project-archive.png as reference only
* public/reference/concept-board/slide-5-project-archive-board.png as planning reference only if available

Rendered user-facing assets:

* cartridge UI should be component-built
* central project viewer should be component-built
* proof preview slots may use placeholders if real screenshots are unavailable

Possible placeholder location:

public/placeholders/projects/

Truth rule:

Project evidence placeholders must be labeled clearly.

Do not show fake production screenshots as real.

## Scene 6 — Achievement Analytics

Required assets:

* public/reference/clean-target/slide-6-achievement-analytics.png as reference only
* public/reference/concept-board/slide-6-achievement-analytics-board.png as planning reference only if available

Rendered user-facing assets:

* trophy may be component-built or controlled icon/shape
* achievement list must be component-built
* evidence slots must be verified or labeled placeholder

Possible evidence location:

public/evidence/achievements/

Possible placeholder location:

public/placeholders/achievements/

Truth rule:

Do not invent certificates, ranks, proof, or metrics.

## Scene 7 — Knowledge Map

Required assets:

* public/reference/clean-target/slide-7-knowledge-map.png as reference only
* public/reference/concept-board/slide-7-knowledge-map-board.png as planning reference only if available

Rendered user-facing assets:

* graph should be component-built
* nodes, lines, and labels should be real UI
* no required bitmap asset

Do not render:

* clean-target as graph image
* static screenshot as the map
* random unsupported skill icons if they imply fake tools

## Scene 8 — Future Laboratory

Required assets:

* public/reference/clean-target/slide-8-future-laboratory.png as reference only
* public/reference/concept-board/slide-8-future-laboratory-board.png as planning reference only if available
* public/docs/kiagus-arif-rahman-resume.pdf
* verified contact data from CONTENT_SOURCE.md

Rendered user-facing assets:

* resume PDF link
* lab UI components
* contact action cards

Optional future assets:

* lab texture
* skyline texture
* social/contact icons

Truth rule:

Do not invent phone, location, LinkedIn, GitHub, email, or resume paths.

Use CONTENT_SOURCE.md as factual source.

---

# 10. Icons and Glyphs

Icons and glyphs should support the scene language.

They may be:

* inline SVG components
* CSS/pixel shapes
* icon library components if already installed
* simple custom glyph components

Do not import random icon systems without checking project setup.

Do not create inconsistent icon styles.

Icon style should be:

* pixel-inspired
* technical
* simple
* readable
* not childish
* not overly detailed
* not mismatched across scenes

## Scene Icon Directions

Scene 2 terminals:

* Statistical Thinking: chart bars
* AI Product Logic: brain / AI node
* Data Workflow: database stack
* System Analysis: gear / system diagram
* Web-Based Solution: browser / window grid
* Leadership & Team Direction: team / group node

Scene 3 library:

* foundation pillar: sigma / chart / probability grid
* modules: book/archive rows
* bottom bar: open book / archive seal

Scene 4 district:

* community: group / AI emblem
* academic: institution / department
* project team: system office
* content systems: media/screen
* operations: store/service
* leadership: microphone/group

Scene 5 archive:

* cartridge: project/media/system icons
* workflow: link, gear, scissors, upload
* proof: dashboard/output/log

Scene 6 achievement:

* trophy
* medal
* badge
* analytics gauge
* trend chart

Scene 7 graph:

* statistics: chart
* research: magnifier
* business analytics: growth chart
* leadership: team
* systems: gear
* data engineering: database
* machine learning: AI/brain

Scene 8 lab:

* AI Products: brain
* Data Platforms: database
* Decision Intelligence: chart
* Automation Systems: gear
* LinkedIn, GitHub, Email, Resume contact icons

---

# 11. Texture and Environment Assets

If texture/environment assets are added later, they should live in:

public/textures/

public/environment/

Allowed texture types:

* subtle grid
* subtle scanline
* paper texture
* warm library grain
* metal panel texture
* dark vignette
* low-noise dust
* low-opacity HUD texture

Forbidden texture behavior:

* overpowering text
* replacing component design
* hiding layout issues
* making UI noisy
* turning scenes into static wallpapers

Textures must be subtle.

Visual structure should come from components, not texture images.

---

# 12. Asset Naming Rules

Use clear lowercase kebab-case filenames.

Allowed examples:

slide-1-identity-snapshot.png

slide-2-capability-matrix.png

slide-3-knowledge-library.png

kiagus-portrait.jpg

project-placeholder-dashboard.png

achievement-placeholder-certificate.png

Avoid:

* random screenshot names
* spaces in filenames
* uppercase inconsistent names
* duplicate files with unclear versions
* final-final-v2-new.png

If user-uploaded files have messy names, copy or rename them into the correct public folder before using.

---

# 13. Missing Asset Rule

If an expected asset is missing:

1. Do not invent content.
2. Do not silently use a random replacement.
3. Use a clearly labeled placeholder if needed.
4. Report the missing asset.
5. Continue only if the placeholder is acceptable for the current task.

Missing clean-target reference:

* do not build that scene final layout freely
* ask for the clean-target or use SCENE_ARCHITECTURE.md only if explicitly approved

Missing real evidence:

* use placeholder
* label it as placeholder
* do not claim it is proof

Missing resume:

* do not create fake resume path
* ask or use verified existing resume path only

Missing portrait:

* do not use AI-generated substitute
* ask for verified portrait asset

---

# 14. User-Facing vs Development-Only Assets

## User-Facing Assets

These may appear in the final website:

* Kiagus portrait
* resume PDF link
* verified evidence images
* approved placeholders
* approved icons/glyphs
* approved textures/environment assets

## Development-Only Assets

These must not appear directly in the final website:

* clean-target references
* concept-board references
* annotated boards
* planning screenshots
* motion guide images
* visual instruction images

If a reference image appears directly in the website, it is wrong unless explicitly approved.

---

# 15. Asset Truthfulness Checklist

Before using any asset, check:

1. Is this asset user-facing or development-only?
2. Is this asset a reference image?
3. Is this asset verified evidence?
4. Is this asset only a placeholder?
5. Is the path correct?
6. Does CONTENT_SOURCE.md support the claim attached to it?
7. Does the asset match the scene visual direction?
8. Is the asset being used honestly?
9. Does it preserve the one-viewport cinematic experience?
10. Does it avoid making the scene look like a static screenshot?

If any answer is unclear, do not treat the asset as factual proof.

---

# 16. Final Asset Rule

Clean-target images define what to build.

Concept-board images define how it may move.

Portrait and resume are real user-facing assets.

Evidence must be verified.

Placeholders must be labeled.

The final website must be component-built, not a collection of pasted screenshots.
