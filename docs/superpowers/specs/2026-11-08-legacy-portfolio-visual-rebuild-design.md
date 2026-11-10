# Legacy Portfolio Visual Rebuild Design

Date: 2026-11-08
Status: Approved in conversation

## Intent

Recreate the distinctive visual language of Tamutswa Matondo's legacy portfolio inside the existing React, TypeScript, and Vite application. The legacy deployment is a visual reference only. The current repository remains the source of truth for personal details, skills, projects, and contact availability.

The result should feel recognizably related to the legacy site while improving its responsive behavior, accessibility, content accuracy, and maintainability.

## Goals

- Adopt the legacy site's black, neon-green, neon-blue, code-oriented aesthetic.
- Preserve Tamutswa Matondo and Software Developer as the confirmed display name and professional title.
- Preserve the approved About copy exactly.
- Preserve the existing established skills and the separate Currently Exploring list without ratings.
- Preserve the current DataSift, API Pulse, and ScopeGuard project entries and their Planned status.
- Preserve current contact availability and the approved GitHub URL.
- Reuse the user-approved profile photograph from the legacy deployment as a local project asset.
- Keep the experience semantic, keyboard accessible, responsive from 320px upward, and compatible with reduced-motion preferences.
- Use the existing React architecture and dependencies.

## Non-goals

- Do not import the legacy title "Web Developer & AI Enthusiast."
- Do not import legacy biography or expertise claims.
- Do not import legacy skill percentages, progress bars, or proficiency ratings.
- Do not import Smart Hanger System, E-Learning Platform, ModernAcres, or other legacy project claims.
- Do not import legacy employment, freelance history, education, résumé files, location, email address, LinkedIn URL, or response-time promises.
- Do not add a contact form or imply that messages can be submitted.
- Do not add external fonts, packages, routing, state libraries, icon libraries, or build configuration.
- Do not publish, deploy, commit, push, or modify the README or approved blueprint as part of implementation.

## Content Source of Truth

Use only the content currently present in:

- `src/App.tsx`
- `src/data/portfolioData.ts`
- Existing section components

The profile photo is the sole approved legacy asset. Its current public source is `https://tamutswaportfolioo.vercel.app/images/profile-new.jpg`. Store a local copy under `src/assets/` rather than hotlinking it.

## Visual System

### Palette

- Page background: near-black.
- Elevated surfaces: blue-black.
- Primary text: soft off-white.
- Secondary text: cool gray.
- Primary accent: vivid developer green.
- Secondary accent: electric blue.
- Borders: restrained blue-gray with green emphasis for active or focused states.

Exact accessible values are left to implementation, but normal text must meet WCAG AA contrast.

### Typography

Use the existing local font stacks. Emphasize the existing monospace stack across headings, navigation, buttons, labels, and technical annotations to recall the legacy Space Mono treatment. Do not load Space Mono or another external font. Body copy may use the current body stack where it improves long-form readability.

### Shape and Detail

- Use crisp one-pixel borders, small radii, terminal-like labels, and bracket or slash accents.
- Avoid glow-heavy shadows and decorative clutter.
- Preserve generous spacing so the code aesthetic remains professional rather than novelty-driven.

## Page Structure

### Header

- Retain the sticky semantic header and accessible mobile menu.
- Present a compact `<TM />` code mark alongside the visible full name Tamutswa Matondo.
- Keep Software Developer as supporting header text where space permits; hide it only at narrow breakpoints if necessary.
- Keep jump links for About, Skills, Projects, and Contact.
- Preserve Escape-to-close, `aria-expanded`, 44px touch targets, and visible keyboard focus.

### Hero

- Use a two-column layout on wide screens and a single-column layout on small screens.
- Left column: technical eyebrow, Tamutswa Matondo, Software Developer, the two verified interests, and View Projects / Contact Me anchor actions.
- Right column: a bordered code window containing a short static snippet derived only from the verified name, role, and interests.
- The code panel is presentational and must not imitate an editable terminal.
- Retain one `h1` and a logical heading hierarchy.

### About

- Place the approved profile photograph in a bordered portrait card with the confirmed name and title.
- Place the existing three About paragraphs beside it on wide screens and below it on small screens.
- Make the first paragraph visually prominent while preserving the exact wording.
- Do not add legacy trait cards or biographical claims.

### Technical Skills

- Keep the current section introduction.
- Present established categories in a responsive code-inspired grid.
- Render individual skills as readable tags or rows, not progress bars.
- Keep Currently Exploring visually distinct and explicitly framed as learning.
- Preserve every current category and skill exactly.

### Projects

- Keep the current introduction and three planned project entries.
- Use a responsive legacy-inspired card grid with technical metadata, Planned status, and structured code-style placeholders.
- Do not use the legacy project images because they describe different, unapproved projects.
- Cards may use subtle hover motion without implying they are links.

### Contact

- Keep the current invitation copy and three contact entries.
- Style available and unavailable methods as technical contact panels.
- Only GitHub remains an active external link.
- Email remains Pending setup and WhatsApp remains Coming soon.
- Do not render a message form.

### Footer

- Preserve the current Software Developer Portfolio and Built with React, TypeScript & Vite copy.
- Restyle it as a restrained terminal-status footer without adding social links or claims.

## Motion

- Use CSS-only entrance and interaction motion.
- Navigation, project cards, and contact interactions may use distinct micro-interactions tied together by consistent timing.
- Avoid continuous blinking, large parallax movement, strong glow effects, and movement that suggests unavailable functionality.
- Under `prefers-reduced-motion: reduce`, remove non-essential transforms and animations rather than only shortening their duration.

## Responsive Behavior

- Start from a 320px mobile layout.
- Prevent horizontal overflow without using `overflow-x: hidden` as a workaround.
- Stack hero and About columns on small screens.
- Keep code blocks, tags, long skill labels, project descriptions, and footer text wrappable with `min-width: 0` where needed.
- Switch to multi-column grids only when content has sufficient room.
- Ensure sticky-header anchor offsets keep section headings visible.

## Accessibility

- Preserve the skip link, semantic landmarks, heading order, descriptive image alt text, and accessible navigation state.
- Use `alt="Tamutswa Matondo"` for the approved profile photograph.
- Maintain visible `:focus-visible` treatment independent of hover animation.
- Do not use color alone to communicate availability or project status.
- Maintain a minimum 44px target size for interactive controls.

## Architecture and Expected Files

Use the existing flat component structure. Avoid new abstractions unless a component becomes difficult to read.

Expected implementation files:

- `src/assets/profile-new.jpg` — approved local profile photo.
- `src/App.tsx` — hero and footer markup updates; profile content remains elsewhere.
- `src/App.css` — section layouts, component styling, responsive behavior, and motion.
- `src/index.css` — global palette, typography tokens, reset adjustments, and anchor offset.
- `src/components/Header.tsx` — legacy-inspired branding while preserving accessible behavior.
- `src/components/About.tsx` — portrait-led layout using existing copy.
- `src/components/Skills.tsx` — only minimal markup changes needed for visual hooks.
- `src/components/ProjectCard.tsx` — legacy-inspired presentation using existing data.
- `src/components/Contact.tsx` — only minimal markup changes needed for styling hooks.
- `index.html` — verified page title may be updated to Tamutswa Matondo | Software Developer.

Avoid changing `src/data/portfolioData.ts` and `src/types/portfolio.ts` unless implementation exposes an actual type or accessibility defect. Do not modify dependencies or configuration.

## Verification

- Run `npm run lint`.
- Run `npm run build`.
- Run `git diff --check`.
- Inspect the page at 320px, a tablet width, and a desktop width.
- Test the mobile navigation with pointer, keyboard, and Escape.
- Verify all anchor targets remain visible below the sticky header.
- Verify no horizontal overflow.
- Verify reduced-motion behavior.
- Report every changed file and anything requiring user visual review.

## Builder Discretion

The implementer may choose exact token values, spacing, code punctuation, decorative line placement, placeholder artwork, and easing curves as long as they remain within this design and do not add unverified content or dependencies.
