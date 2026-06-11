# MOTION RULES — NON-BASIC ANIMATION CONTRACT

## Absolute Rule

No important element is allowed to be completely static.

Every major visual object must feel alive.

This applies to:

* avatar
* panels
* cards
* buttons
* terminals
* monitors
* data lines
* city buildings
* project cartridges
* achievement cards
* trophy objects
* knowledge nodes
* navigation rail
* background layers
* section titles
* progress indicators
* placeholders
* CTA buttons

Every important object must have at least one visible life effect.

Examples of acceptable life effects:

* breathing glow
* pixel pulse
* scanline movement
* terminal cursor blink
* moving data packets
* animated border trace
* ambient particle drift
* soft parallax drift
* hover expansion
* click activation
* number ticking
* node pulse
* cable data flow
* moving light reflection
* small UI flicker
* layered depth movement
* camera zoom or drift
* object transformation

Motion must be visible enough to make the interface feel alive, but still controlled, premium, and professional.

Do not make motion chaotic.

---

# Micro Element Motion Rule

Small UI details should not be completely dead.

Important micro-elements such as:

* border lines
* separators
* chips
* icon tiles
* status dots
* progress rails
* panel corners
* label frames
* miniature badges
* card corners
* tiny arrows
* data dividers
* CTA edges
* placeholder borders
* thumbnail frames

should have subtle life effects when appropriate.

Acceptable micro motion:

* faint glow pulse
* moving data packet
* border trace
* scanline pass
* LED blink
* hover shimmer
* active node pulse
* tiny parallax offset
* endpoint glow
* small flicker
* segmented line animation
* corner light pulse

Do not animate everything aggressively.

But avoid completely dead, flat, generic UI.

The interface should feel alive at macro level and micro level.

---

# Game Interface Motion Rule

This portfolio should feel like a polished game interface, not a normal website.

Motion should help small UI objects feel designed and interactive.

Panels should not only appear; they should activate.
Borders should not only exist; they should pulse, trace, or respond.
Lines should not only divide; they should carry data or glow at endpoints.
Buttons should not only hover; they should feel like game controls.
Cards should not only sit; they should breathe, flicker, or hold energy.
Nodes should not only connect; they should transfer motion or signal.

Every section should feel like a live interface system.

---

## Forbidden Main Animation Style

Do not use these as the main animation language:

* simple fade in
* simple slide up
* simple slide left or right
* basic scale in
* ordinary hover shadow
* generic opacity reveal
* normal landing page scroll reveal
* static section with only one small hover effect
* plain parallax without object transformation

These are allowed only as tiny supporting details. They cannot be the main experience.

---

## Required Main Animation Style

The main animation language must use:

* scroll-driven camera movement
* object-based transitions
* layered parallax
* terminal boot sequences
* UI activation phases
* animated data flow
* panel scanning
* hover detail expansion
* click-based reveal states
* node connection drawing
* cinematic zoom into visual objects
* scene-to-scene object continuity
* depth layers
* responsive animated UI states

---

## Section Phase Structure

Every section must have four internal motion phases:

### Phase A — Entry Transition

The section starts from the previous section’s transition object.

Examples:

* entering through a monitor
* entering through a terminal
* entering through a book page
* entering through a city building window
* entering through a project scanner
* entering through a trophy reflection
* entering through a knowledge node core

### Phase B — Scene Boot

The scene activates.

Examples:

* terminal logs appear
* panels light up
* data lines start moving
* cards load one by one
* nodes wake up
* background depth layers become visible
* UI grid starts scanning

### Phase C — Main Interactive State

The section becomes fully usable.

Required:

* hover states
* click or tap states
* detail panel
* animated object response
* active/inactive states
* readable portfolio information

### Phase D — Transition Hook

A specific visual object prepares the transition into the next section.

Examples:

* monitor glows
* selected terminal expands
* selected book opens
* building window lights up
* cartridge enters scanner
* trophy reflection turns into node lines
* data core opens

---

## Required Transition Map

### Slide 1 to Slide 2

Camera zooms into the monitor or data screen behind the Kiagus avatar.
The monitor becomes the command center interface.

### Slide 2 to Slide 3

Selected terminal expands.
Terminal UI compresses into archive cards.
Camera moves through the terminal screen into the Knowledge Library.

### Slide 3 to Slide 4

Selected knowledge book opens.
The book page transforms into a city map.
The map becomes the Experience District.

### Slide 4 to Slide 5

Camera enters a highlighted building, window, or project hub.
The interior transforms into the Project Archive machine.

### Slide 5 to Slide 6

Selected project cartridge is inserted into a scanner.
The scanner analyzes project data and unlocks Achievement Analytics.

### Slide 6 to Slide 7

Trophy reflections and achievement metric lines dissolve into connected knowledge nodes.
The dashboard becomes the Knowledge Map.

### Slide 7 to Slide 8

Knowledge nodes converge into a central data core.
The data core opens into the Future Laboratory.

---

## Transition Rules

Do not use:

* hard cut
* plain fade
* basic slide transition
* ordinary section reveal
* jump scroll
* fade to black
* generic page transition

Every transition must have:

* object continuity
* scroll progress control
* depth
* lighting change
* motion direction
* visible transformation
* connection between previous and next section

---

## Scroll Animation Foundation

Each section should expose a scroll progress value from 0 to 1.

Scroll progress can control:

* camera scale
* camera translate
* layer depth
* light intensity
* panel activation
* object opacity
* object transform
* data flow speed
* blur intensity
* scanline intensity
* section transition state

Use GSAP ScrollTrigger for scroll-controlled sequences.

Use Framer Motion for:

* hover states
* click states
* component state changes
* panel reveal
* small UI transitions

Use CSS animations for:

* scanlines
* blinking cursor
* subtle glows
* looping data packets
* pixel particles

---

## Idle Motion Rule

Even when the user does nothing, each section must still feel alive.

Every section must include ambient idle motion, such as:

* slowly moving particles
* glowing data paths
* flickering terminal pixels
* floating UI noise
* blinking cursors
* node pulses
* breathing panels
* tiny data stream movement
* animated background grid
* subtle parallax drift

---

## Panel Motion Rule

Every panel should have a sense of activation.

Avoid dead panels.

Acceptable panel behaviors:

* faint breathing glow
* animated corner accents
* active status LED
* scanline sweep
* hover energy frame
* subtle depth lift
* border trace on hover
* data pulse through one edge
* active/inactive lighting difference

The motion should be subtle and premium.

Do not animate panels so much that text becomes hard to read.

---

## Button Motion Rule

Buttons should feel like interactive game controls.

Avoid generic website button behavior.

Acceptable button behaviors:

* segmented frame hover
* icon pulse
* subtle soundless “press” feel through scale/depth
* animated edge light
* data packet entering/exiting
* active corner glow
* terminal-style label response

Buttons must remain accessible and readable.

---

## Card Motion Rule

Cards should feel like game UI modules.

Avoid plain card hover.

Acceptable card behaviors:

* animated border trace
* icon tile glow
* status LED pulse
* micro background scanline
* hover lift with depth
* tiny data packet movement
* corner bracket activation
* internal glyph shimmer

Cards must stay readable.

---

## Hero Object Motion Rule

Hero objects such as avatars, lanyard cards, project cartridges, trophies, books, terminals, and data cores need stronger motion identity.

They should feel like important interactive objects.

Acceptable hero object behaviors:

* idle floating
* soft spotlight shift
* hover tilt
* card flip
* glow pulse
* object scan
* parallax depth
* frame shimmer
* holographic sweep
* status chip pulse

The motion should make the object feel valuable, not gimmicky.

---

## Responsive Motion

Desktop:

* full cinematic motion
* pinned scenes where useful
* multi-layer parallax
* richer hover states

Tablet:

* reduce density
* preserve core motion
* stack some panels
* keep interactive depth

Mobile:

* reduce heavy effects
* use tap instead of hover
* keep text readable
* avoid horizontal overflow
* use lighter particles
* preserve visible life effects

---

## Reduced Motion

Support prefers-reduced-motion.

If reduced motion is enabled:

* disable heavy camera movement
* disable large zooms
* reduce parallax
* reduce continuous particles
* reduce aggressive flicker
* keep subtle glow, cursor blink, and lightweight UI states
* keep the website usable and readable

---

## Final Motion Checklist

Before considering any section complete, check:

1. Is any important element static?
2. Does the section feel alive before interaction?
3. Do micro-elements have subtle theme-appropriate life?
4. Does hover create meaningful response?
5. Does click/tap reveal useful information?
6. Is the transition to the next section object-based or prepared for object-based transition?
7. Is the animation more advanced than fade/slide?
8. Is the motion controlled and professional?
9. Is the content still readable?
10. Does it match the reference image direction without becoming a static image?
11. Does every panel feel activated rather than dead?
12. Do buttons feel like game controls rather than normal web buttons?
13. Do cards feel like game modules rather than plain rectangles?
14. Does the hero object feel valuable and interactive?
