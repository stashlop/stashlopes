# Stash Lopes — Portfolio

> Full-Stack Developer & UI/UX Designer · Mumbai, India

A hand-made scrapbook portfolio for **Stash Lopes** (`stashlop`). The visual style follows the
*Spider-Man: Far From Home* end-title sequence: torn notebook paper, red-and-gold marker lettering,
magazine-scrap collage, masking tape, sticky notes, polaroids and ballpoint doodles.

---

## Internships & experience
- **UI/UX & Full-Stack Design Intern — Horizon View** *(2026 – Present)* — Figma websites and product UI for international clients (USA, UAE and more), from research and wireframes to developer-ready handoff.
- **Software Development Intern — Voltic Amp Technologies** *(Mar 2025 – Oct 2025, Mumbai, 8 months)* — built and maintained production web apps across front-end and back-end.
- **UI/UX Designer — VEARME** *(2025, Remote)* — interfaces, interaction flows and prototypes.

## Projects
- **HeroBid** — real-time multiplayer auction & battle arena (Flutter · Node/TS · Firebase)
- **CyberQore** — retrieval-grounded SOC copilot (Python · TypeScript · multi-agent AI)
- **Karigar** — GenAI marketplace assistant for Indian artisans (Gemini · Vertex AI · Cloud Run) · [repo](https://github.com/stashlop/Karigar)
- **ExamGEN** — automated exam-paper generator (Next.js · FastAPI · Prisma)
- **VendorConnect** — sourcing platform for street-food vendors (Flask · Render)
- **Itihaas** — heritage-tourism platform, 1st Place Colloquium 2025 · [repo](https://github.com/stashlop/Itihaas)
- **Project Drishti**, **Archive & Arcade**, **Jarvis-MLX**, **Stash Pipeline**

## Features
- Torn paper edges generated per element (`clip-path`), ransom-note section labels and "pasted-in" scroll reveals (`js/animations.js`).
- Stop-motion "boil" wobble on marker lettering via SVG turbulence filters.
- Project notebook modal, project filters, sticky-note skills board and a ticket-stub journey.
- Live GitHub stats and repos from the GitHub REST API (with offline fallback).
- Little terminal (`help`, `whoami`, `internships`, `projects`, `sudo hire stash`…).
- Postcard contact form that opens your mail app with the message filled in.
- Optional Web Audio sound effects; respects `prefers-reduced-motion`.

## Credits
Project photos are from [Unsplash](https://unsplash.com) (Unsplash License). Fonts: Permanent Marker,
Kalam, Caveat and Special Elite from Google Fonts.

## Local development
```bash
git clone https://github.com/stashlop/stashlopes.git
cd stashlopes
python -m http.server 3000   # or: npx serve .
```
Open `http://localhost:3000/`.
