# Design system — Stash Lopes scrapbook portfolio

This file records the design language of the site as it stood before the refinement pass, then the
plan for that pass. The rule for the pass: **refine, never replace**. Palette, fonts, layout
structure, section order, content and the scrapbook personality all stay.

---

## 1. The design as it stood (audit)

### Concept
A hand-made scrapbook on a dark corkboard, after the *Spider-Man: Far From Home* end titles: torn
notebook paper, red-and-gold marker lettering, magazine-scrap collage, masking tape, sticky notes,
polaroids, rubber stamps and ballpoint doodles. Motion is cut-out stop-motion: pieces jump between
a few hand-placed poses instead of easing.

### Colour
| Role | Token | Value |
| --- | --- | --- |
| Corkboard backdrop | `--board`, `--board-2` | `#1d1b1a`, `#26221f` |
| Notebook paper | `--paper`, `--paper-warm` | `#f7f2e4`, `#efe6cf` |
| Paper ruling / margin | `--paper-line`, `--paper-margin` | `#a9c8e6`, `#e7807a` |
| Newsprint, kraft | `--newsprint`, `--kraft` | `#e3ddcf`, `#c49a6c` |
| Ink | `--ink`, `--ink-soft` | `#1d1b19`, `#46413b` |
| Ballpoint blue (links, handwriting) | `--ballpoint` | `#22409a` |
| Marker red (titles, primary action) | `--marker-red`, `--marker-red-dark` | `#d6262e`, `#9f161c` |
| Marker gold (outline, highlights) | `--marker-gold` | `#f4b833` |
| Navy scrap | `--navy` | `#1b2846` |
| Sticky notes | `--sticky-yellow/pink/blue/green` | `#fbe57d`, `#f7a8c0`, `#a6d8f0`, `#b9e4a1` |
| Masking tape | `--tape` | `rgba(236,224,186,.82)` |

Untokenised values found in the stylesheet: four near-identical card whites (`#fbfaf6`, `#fdfcf7`,
`#fbf8ee`, `#fbf8ef`), manila `#d8b98a` / `#b99a6b`, credits black `#0f0e0d`, and the ransom-letter
palette duplicated as hex strings in `js/animations.js`.

### Typography
| Voice | Font | Used for |
| --- | --- | --- |
| Marker | Permanent Marker | Titles, buttons, card headings, logo |
| Handwriting | Kalam 400/700 | Body copy, nav, notes |
| Script | Caveat 500/700 | Captions, section subtitles, margin notes |
| Typewriter | Special Elite | Labels, stamps, tags, metadata, terminal |

The signature title is red marker with a gold stroke and a stacked gold + ink drop shadow. Body
copy on notebook paper uses a 30px line height to sit on the 30px ruling. Small labels ranged from
`0.64rem` to `0.95rem` across ten different sizes with five different letter-spacings.

### Layout
- Max width `1200px`, fluid gutter `clamp(16px, 4vw, 48px)`.
- Sections: centred head (ransom-note kicker, torn title strip, script subtitle), then content.
- Hero: two columns (title card / photo collage) over twelve collage scraps.
- About: notebook page + side column (education index card, kraft awards board).
- Internships: date stamp beside a notebook page, alternating sides.
- Projects: polaroid wall (auto-fill grid, featured card spans two), filter chips, notebook modal.
- Toolkit: sticky-note board. Journey: scroll-driven time machine with a year dial.
- GitHub: stat scraps, typewriter terminal, language card, manila repo tags.
- Contact: polaroid + luggage tags beside a postcard form. Footer: film strip + end credits.
- Breakpoints: `1060px`, `920px` (mobile nav, single column), `680px`.

### Components
Notebook page / strip, torn edge (JS `clip-path` + shadow wrapper), masking tape, polaroid, sticky
note + pin, index card, rubber stamp, ticket, highlighter mark, tape button (red / gold / paper /
ink), washi tag, filter chip, luggage tag, manila repo tag, postcard, time dial, film strip.

### Elevation
Two tokens (`--shadow-paper`, `--shadow-lift`) plus about ten one-off shadows. Hard "sticker"
offsets (`3px 4px 0`) were used on buttons and tags.

### Motion
`boil` (SVG turbulence wobble on lettering), `cutout-in` (stop-motion paste on scroll), `scrap-in`
and `strip-in` (hero load), journey states (`rift-in`, odometer dial, warp streaks), `sfx-pop`.
Easing curves and durations were written inline (`0.15s`, `0.2s`, `0.25s`, `0.35s`, four different
beziers).

---

## 2. What needed refining (findings)

Found by reading the code and by screenshotting every section at 1440, 820 and 390px.

| # | Finding | Where |
| --- | --- | --- |
| 1 | Torn buttons, luggage tags, repo tags and the ticket declare shadows that never render, because `clip-path` / `mask` clips an element's own shadow. They read flat next to the paper around them. | Buttons, tags, ticket |
| 2 | Project titles on the polaroids are cut off by the note pasted over them, worst on the wide featured card. | Projects |
| 3 | Internship date stamps carry tiny, low-contrast type inside a large empty circle. | Internships |
| 4 | Ten label sizes and five letter-spacings; several under 12px. | Global |
| 5 | Four card whites, repeated one-off shadows, inline easings and durations. | Global tokens |
| 6 | Very large gaps between sections (up to 240px of empty board). | Section rhythm |
| 7 | Section heads, notes, tags and lists appear with no entrance at all, while the paper next to them animates. Grids reveal all at once. | Motion |
| 8 | Tablet hero: the sticky note covers the photo caption and the ticket sits on the "keep scrolling" hint. | 681–920px |
| 9 | Tablet about section stacks two narrow cards full-width, leaving them stretched. | 681–920px |
| 10 | Touch targets under 40px: nav links, sfx toggle, filter chips, card buttons. | Mobile |
| 11 | Modal uses `100vh` (cut off under mobile browser chrome) and does not trap focus. | Modal |
| 12 | Photos sit flat in their frames; no hover response on the image itself. | Polaroids |
| 13 | Header never changes with scroll; mobile menu appears without a transition. | Header |

No console errors and no horizontal overflow were found at any size.

---

## 3. Refinement plan

1. **Tokens** — add surface, type-scale, spacing, radius, shadow and motion tokens; replace the
   one-off values. Ransom letters read the same tokens.
2. **Depth** — move torn shapes onto a pseudo-element so the piece itself can cast a real shadow
   (buttons, luggage tags, repo tags, ticket). Layered paper shadows; curled-corner shadow on
   sticky notes; hairline photo edge inside polaroids.
3. **Type** — one label scale (min 12px), balanced headings, larger stamp type.
4. **Spacing** — tighter section rhythm, fixed polaroid caption clearance, consistent card padding.
5. **Motion** — keep the stop-motion paste; add staggering, section-head entrances (ransom letters
   land one by one, strip slaps down), soft rise for secondary content, hero parallax (scroll +
   pointer), light scroll parallax on a few loose pieces, photo zoom on hover, button lift/press,
   header scroll state, menu and modal choreography. All of it off under `prefers-reduced-motion`.
6. **Responsive** — tablet hero and about layouts, 40px+ touch targets, `dvh` modal, small-phone
   checks at 360px.
7. **Quality** — focus trap in the modal, re-test every interaction, confirm no console errors and
   no overflow, before/after screenshots.

---

## 4. Tokens after the pass

See the `:root` block at the top of `styles/main.css`. Summary:

- **Surfaces**: `--card`, `--manila`, `--manila-edge`, `--credits`, `--on-board`, `--on-board-soft`, `--rule`.
- **Type scale**: `--fs-label` (12.5px), `--fs-meta`, `--fs-small`, `--fs-body`, `--fs-lead`, `--fs-h3`; `--track-label`, `--track-wide`.
- **Space**: `--sp-1` … `--sp-8` (4, 8, 12, 16, 24, 32, 48, 64px); `--section-y`.
- **Elevation**: `--shadow-paper`, `--shadow-lift`, `--shadow-sticker`, `--cut-shadow`, `--cut-shadow-lift`, `--edge`.
- **Motion**: `--ease-out`, `--ease-spring`, `--dur-1` (150ms), `--dur-2` (250ms), `--dur-3` (450ms), `--dur-4` (650ms).
