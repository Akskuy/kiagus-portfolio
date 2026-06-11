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

## Reduced Motion

Support prefers-reduced-motion.

If reduced motion is enabled:

* disable heavy camera movement
* disable large zooms
* reduce parallax
* keep subtle glow, cursor blink, and lightweight UI states
* keep the website usable and readable

## Final Motion Checklist

Before considering any section complete, check:

* Is any important element static?
* Does the section feel alive before interaction?
* Does hover create meaningful response?
* Does click/tap reveal useful information?
* Is the transition to the next section object-based?
* Is the animation more advanced than fade/slide?
* Is the motion controlled and professional?
* Is the content still readable?
* Does it match the reference image direction without becoming a static image?
