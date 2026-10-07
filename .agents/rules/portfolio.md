---
description: Workspace rules and engineering standards for the React + TypeScript portfolio
always_on: true
---

# Portfolio Workspace Rulebook

This rulebook defines development standards, architectural discipline, and workflow policies for this React + TypeScript portfolio project. All agent actions must adhere to these guidelines.

---

## 1. React & TypeScript Coding Conventions
- **TypeScript Strictness**: Strictly type props, state, events, and data models. Avoid `any` or loose type assertions (`as unknown as ...`). Use explicit union types and interfaces.
- **Modern React (v19+)**: Use functional components with hooks. Prefer standard hooks (`useState`, `useEffect`, `useCallback`, `useMemo` where performance warrants).
- **JSX Best Practices**: Avoid rendering numeric `0` leaks (use explicit boolean conditions: `items.length > 0 ? ... : null` rather than `items.length && ...`).
- **Clean Imports & Exports**: Use named exports for reusable components and utility functions. Keep imports grouped: (1) React/third-party, (2) internal components/hooks, (3) types, (4) styles/assets.

## 2. Component & Folder Organization
- Maintain a modular, feature-oriented structure under `src/`:
  - `src/components/`: Reusable UI elements (`ui/`), structural layout (`layout/`), and page sections (`sections/`).
  - `src/hooks/`: Custom reusable React hooks.
  - `src/types/`: Shared TypeScript definitions and data interfaces.
  - `src/utils/`: Pure helper functions and formatters.
  - `src/data/`: Static portfolio content, configuration, and project data.
  - `src/assets/`: Static imagery, icons, and illustrations.
- Keep components focused and single-purpose. Colocate component-specific subcomponents and styles when not shared globally.

## 3. Naming Conventions
- **Components & Files**: `PascalCase` (e.g., `ProjectCard.tsx`, `Navigation.tsx`).
- **Custom Hooks**: `camelCase` prefixed with `use` (e.g., `useActiveSection.ts`, `useTheme.ts`).
- **Utilities & Helpers**: `camelCase` (e.g., `formatDate.ts`, `filterProjects.ts`).
- **Types & Interfaces**: `PascalCase` (e.g., `ProjectItem`, `SocialLink`).
- **Constants**: `SCREAMING_SNAKE_CASE` (e.g., `NAV_ITEMS`, `DEFAULT_THEME`).
- **CSS / Class Names**: `kebab-case` or scoped CSS module patterns.

## 4. Responsive & Accessible (a11y) UI Requirements
- **Mobile-First Responsive Layouts**: Design for mobile viewports (<640px) first, scaling smoothly to tablet (640–1024px) and desktop (>1024px).
- **Semantic HTML**: Use semantic landmark elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). Never use generic `<div>` or `<span>` elements for interactive buttons or links.
- **Keyboard Navigation & Focus**: Ensure all interactive controls have accessible focus indicators (`:focus-visible`) and complete keyboard navigation support.
- **ARIA & Contrast**: Provide meaningful `alt` text for images (empty `alt=""` for decorative images). Use ARIA attributes (`aria-label`, `aria-expanded`, `aria-current`) where semantics require. Adhere to WCAG 2.1 AA color contrast ratios.
- **Motion Accessibility**: Honor user preferences by wrapping animations in `@media (prefers-reduced-motion: reduce)`.

## 5. Dependency Discipline
- **Zero Gratuitous Dependencies**: Prefer native web APIs (e.g., `Intl`, `Fetch`, CSS animations, `IntersectionObserver`) and pure TypeScript utilities over adding external libraries.
- **Bundle Awareness**: Never add third-party packages for trivial helper logic or simple UI components.
- **Approval Required**: Adding or replacing any npm dependency requires prior user approval.

## 6. Git Workflow Using Feature Branches
- **Branch Naming**: All work must occur on dedicated feature branches created from `main`:
  - `feature/<description>` for new capabilities or sections.
  - `fix/<description>` for bug fixes.
  - `chore/<description>` for configuration or maintenance tasks.
- **Atomic Commits**: Make small, cohesive commits following Conventional Commits (`feat:`, `fix:`, `refactor:`, `style:`, `chore:`, `docs:`).

## 7. Main Branch Protection Principles
- **Protected `main`**: Never commit or push directly to `main`.
- **Deployable State**: The `main` branch represents production-ready code and must remain green, stable, and deployable at all times.
- **Pull Request Gateway**: Code merges into `main` exclusively through Pull Requests after all automated checks (lint, build) and peer/user reviews pass.

## 8. Required Lint & Build Verification
- **Implementation Tasks**: Implementation tasks require running and passing both checks before the implementation is considered complete or committed:
  1. `npm run lint` (`eslint .`)
  2. `npm run build` (`tsc -b && vite build`)
- **Read-Only Tasks**: Read-only investigation, inspection, planning, and research tasks do not require lint/build unless files are modified.
- **Resolution of Introduced Issues**: ESLint warnings/errors and TypeScript compilation errors introduced by an implementation must be fixed before the task is considered complete (exit code 0).

## 9. Code Review Expectations for AI-Generated Changes
- **Self-Inspection**: Review every git diff prior to finalization to ensure no extraneous edits, leftover debugging artifacts (`console.log`), or accidental formatting re-writes were introduced.
- **Concise Reporting**: Report exact files created or changed, describe the motivation for changes, and provide specific verification steps.

## 10. Inspect Existing Code Before Architectural Changes
- **Mandatory Pre-Investigation**: Always read and inspect existing files, current dependencies, and established patterns before making or suggesting any architectural changes.
- **Context-First**: Align with the project's established conventions rather than imposing external defaults.

## 11. Avoid Unnecessary Rewrites
- **Surgical Edits**: Prefer minimal, targeted modifications over full-file rewrites.
- **Preserve Working Code**: Retain existing working logic, styling rules, and comments unless a task explicitly calls for their modification.

## 12. Explain Significant Decisions in Advance
- **Pre-Flight Rationale**: Before introducing new state management patterns, routing mechanisms, structural overhauls, or complex third-party integrations, clearly explain the design proposal, tradeoffs, and rationale to the user.
- **Seek Alignment**: Await confirmation or feedback before implementing major architectural shifts.

## 13. Security & Secret-Handling Rules
- **No Secrets in Source Control**: Never hardcode or commit API keys, tokens, credentials, or private keys to the repository.
- **Vite Client Env Variables**: Only expose client-safe values using the `VITE_` prefix in `.env` files. Ensure `.env*` secret files remain in `.gitignore`.
- **Injection & XSS Prevention**: Sanitize all external or user-provided input before rendering; avoid unescaped `dangerouslySetInnerHTML`.

## 14. Implementation Scope & Approval Boundaries
- **Autonomous Changes (No Prior Approval Needed)**:
  - Implementing components, styling, and markup within existing architecture.
  - Fixing bugs, typos, and type discrepancies.
  - Adding tests, internal types, and local helper functions.
  - Resolving lint or TypeScript compiler errors.
- **Requires Explicit User Approval**:
  - Installing, updating, or removing npm dependencies.
  - Introducing new libraries, architectural paradigms, or routing systems.
  - Modifying build toolchain or config files (`vite.config.ts`, `tsconfig*.json`, `eslint.config.js`, `package.json`).
  - Deleting files or running destructive git commands (`git reset --hard`, force pushes, deleting branches).
