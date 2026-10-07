# Portfolio Blueprint v1

## 1. Overview & Purpose
This document defines the architectural blueprint, structural specification, simple data design, and implementation sequence for the personal portfolio of **Tamutswa Matondoo**.

- **Core Mission**: Provide a clear, professional, and accessible showcase of technical abilities, projects, background, and achievements.
- **Key Goals**:
  - Deliver a credible and engaging presentation for technical recruiters, hiring managers, and prospective collaborators.
  - Demonstrate sound engineering standards, clean code, responsive design, and web accessibility.
  - Maintain a focused, maintainable Single-Page Application (SPA) built with React 19, TypeScript, and Vite.

---

## 2. Target Audience
1. **Engineering Leaders & Hiring Managers**: Seeking evidence of technical capability, clean project execution, attention to detail, and problem-solving skills.
2. **Technical Recruiters**: Reviewing key skills, educational background, project summaries, code links, and contact channels.
3. **Peers & Collaborators**: Exploring work samples, technical interests, and avenues for collaboration.

---

## 3. Site Structure & Semantic Layout
The portfolio is structured as a focused single-page application with standard HTML5 landmark semantics:

```
┌──────────────────────────────────────────────────────────┐
│ Skip Link (<a href="#main-content">Skip to content</a>)  │
├──────────────────────────────────────────────────────────┤
│ Header (<header>): Logo/Name + Navigation (<nav>)        │
├──────────────────────────────────────────────────────────┤
│ Main (<main id="main-content">)                          │
│  ├─ 1. Hero Section (<section id="hero">)                │
│  ├─ 2. About Section (<section id="about">)              │
│  ├─ 3. Skills Section (<section id="skills">)            │
│  ├─ 4. Projects Section (<section id="projects">)        │
│  ├─ 5. Education & Experience (<section id="experience">)│
│  └─ 6. Contact Section (<section id="contact">)          │
├──────────────────────────────────────────────────────────┤
│ Footer (<footer>): Copyright + Social Links              │
└──────────────────────────────────────────────────────────┘
```

---

## 4. Navigation Architecture
- **Header Navigation**: A sticky or fixed top navigation bar containing the owner's name/branding and jump links to each section (`#about`, `#skills`, `#projects`, `#experience`, `#contact`).
- **Responsive Mobile Navigation**: A lightweight, accessible toggle menu that opens and closes on mobile viewports using simple React state, avoiding unnecessary third-party abstractions.
- **Skip Link**: An accessible skip navigation link at the very top of the DOM targeting `#main-content` for keyboard and screen-reader users.

---

## 5. Section Specifications

*Note: All specific skills, titles, dates, roles, and project details below are placeholders/examples to be confirmed and supplied by Tamutswa during content definition.*

### 5.1 Hero Section (`#hero`)
- **Headline**: Portfolio owner's name, current headline/focus (to be confirmed), and a concise introductory summary.
- **Call-to-Actions (CTAs)**: Primary actions such as "View Projects" (anchors to `#projects`) and "Contact Me" (anchors to `#contact`).
- **Quick Links**: Direct links to social profiles (e.g., GitHub, LinkedIn, Email) with descriptive accessible labels (`aria-label`).

### 5.2 About Section (`#about`)
- **Narrative**: Concise introduction highlighting personal background, learning trajectory, core engineering interests, and values.
- **Key Points**: Summary bullet points or brief highlights reflecting personal strengths and interests.

### 5.3 Skills Section (`#skills`)
- **Data-Driven Skill Display**: Displays technical skills categorized simply (e.g., Languages, Frameworks, Tools).
- **Placeholder Notice**: Specific skills will be populated directly from confirmed data provided by Tamutswa rather than assumed in advance.

### 5.4 Projects Section (`#projects`)
- **Curated Projects**: Focused showcase of personal, academic, or open-source projects.
- **Project Items**:
  - Title & short description of problem solved.
  - List of technologies used.
  - External links: GitHub source code repository and live deployment URL (where available).

### 5.5 Education & Experience Section (`#experience`)
- **Flexible Milestone Model**: Supports educational qualifications, relevant technical experience, coursework, certifications, or notable achievements without assuming formal employment history.
- **Item Details**: Institution or organization name, role or qualification title, timeframe, and key takeaways/accomplishments.

### 5.6 Contact Section (`#contact`)
- **Direct Communication**: Simple and direct avenues to get in touch (e.g., Email mailto link, LinkedIn profile, GitHub profile).
- **Callout**: Friendly invitation for inquiries, opportunities, and discussions.

### 5.7 Footer (`<footer>`)
- **Elements**: Copyright statement, repeat social links, and a brief acknowledgment (e.g., *Built with React, TypeScript & Vite*).

---

## 6. Simplified Component Architecture
For v1, avoid premature abstractions, unnecessary hooks, or over-engineered utility layers. Keep the component hierarchy minimal, flat, and practical:

```
src/
├── components/
│   ├── Header.tsx               # Navigation bar & mobile menu
│   ├── Footer.tsx               # Footer with links and copyright
│   ├── Hero.tsx                 # Headline, summary, and primary CTAs
│   ├── About.tsx                # Background and narrative
│   ├── Skills.tsx               # Categorized skill badges/list
│   ├── Projects.tsx             # Projects container & list
│   ├── ProjectCard.tsx          # Card component for individual project items
│   ├── EducationExperience.tsx  # Education, milestones, and experience list
│   └── Contact.tsx              # Contact details and links
├── data/
│   └── portfolioData.ts         # Centralized, simple data file (content separated from UI)
├── types/
│   └── portfolio.ts             # Clean TypeScript interfaces for data models
├── App.tsx                      # Root composition assembling layout and sections
├── App.css / index.css          # Styling rules and design variables
└── main.tsx                     # Vite entry point
```

> **Architecture Rationale**: No custom hooks (such as `useScrollSpy` or `useDisclosure`), specialized container wrappers (`Container.tsx`, `SectionWrapper.tsx`), or separate formatting utilities (`formatters.ts`) are required for v1. Standard React state, native CSS, and semantic HTML elements provide all necessary behavior cleanly.

---

## 7. Simple Data Architecture & Types
Content is decoupled from JSX to allow effortless updates without editing presentation code. The data model is kept purposefully lean:

```typescript
// src/types/portfolio.ts

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface SocialLink {
  readonly platform: string;
  readonly label: string;
  readonly url: string;
}

export interface SkillCategory {
  readonly title: string;
  readonly skills: readonly string[];
}

export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly githubUrl?: string;
  readonly liveUrl?: string;
}

export interface MilestoneItem {
  readonly id: string;
  readonly title: string;
  readonly organization: string;
  readonly period: string;
  readonly details: readonly string[];
}

export interface ProfileData {
  readonly name: string;
  readonly headline: string;
  readonly summary: string;
  readonly email: string;
  readonly socialLinks: readonly SocialLink[];
}
```

---

## 8. Visual Direction (Design Phase Requirement)
- **Design Principles**: The portfolio visual style will be **modern, professional, distinctive, clean, accessible, and responsive**.
- **Deferred Specifics**: The exact color palette, specific font pairings, spacing scale, and decorative accents are not locked into any predetermined theme (such as dark slate or predefined hex codes).
- **Design-Phase Execution**: These visual decisions will be evaluated and established during the dedicated design foundations phase, ensuring strong contrast, aesthetic harmony, and personal fit.

---

## 9. Responsive Design Strategy
- **Mobile-First Foundation**: The layout starts from small mobile viewports (<640px) and progressively adapts to tablets (640px–1024px) and desktops (>1024px).
- **Fluid Layout**: Standard CSS Grid and Flexbox with responsive spacing to ensure comfortable reading across all screen widths.
- **Touch Targets**: All interactive elements (buttons, links, navigation toggles) maintain touch targets of at least 44×44px on mobile devices.

---

## 10. Accessibility (a11y) Standards
- **Baseline**: Strictly comply with WCAG 2.1 Level AA standards.
- **Semantic Landmarks**: Use standard elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **Keyboard Usability**: Every interactive element must be fully navigable via keyboard with visible `:focus-visible` focus indicators.
- **Color Contrast**: Text and interactive controls must meet minimum contrast ratios (>= 4.5:1 for standard text, >= 3:1 for large text).
- **Images & Icons**: Decorative imagery marked with `alt=""` and `aria-hidden="true"`; informative imagery provided with concise descriptive alternative text.
- **Reduced Motion**: Respect user preferences with `@media (prefers-reduced-motion: reduce)` disabling non-essential motion.

---

## 11. Future Features & Enhancements (Post-v1)
To ensure timely delivery and avoid v1 scope creep, the following capabilities are explicitly deferred to future iterations:
- **Theme Switcher**: Dark / Light mode toggle.
- **Project Filtering**: Interactive category filtering (e.g., by language or tag).
- **Case Study Modals**: Expandable deep-dives with architectural breakdowns.
- **Contact Form**: Interactive backend form submission (e.g., via Formspree or Resend).
- **GitHub API Integration**: Dynamic fetching of repository stars, contributions, or recent commits.
- **Site Analytics**: Lightweight, privacy-respecting traffic analytics.

---

## 12. Practical Implementation Sequence
The development will proceed sequentially through clear, actionable stages:

1. **Step 1 — Real Content Definition & Data Models**:
   - Collect confirmed profile details, education, skills, and projects from Tamutswa.
   - Implement `src/types/portfolio.ts` and populate `src/data/portfolioData.ts`.
2. **Step 2 — Design Foundations**:
   - Define color palette, typography tokens, and spacing scale in CSS variables.
3. **Step 3 — Layout & Navigation**:
   - Build `Header.tsx` (with mobile menu) and `Footer.tsx`.
   - Implement the page landmarks and skip link using the existing React structure and semantic HTML.
4. **Step 4 — Core Sections**:
   - Implement `Hero.tsx`, `About.tsx`, `Skills.tsx`, `Projects.tsx`, `EducationExperience.tsx`, and `Contact.tsx`.
5. **Step 5 — Responsive & Accessibility Refinement**:
   - Verify mobile drawer behavior, tap targets, focus indicators, and screen reader labels.
6. **Step 6 — Final Verification & Quality Gate**:
   - Execute and confirm clean results for both verification commands:
     - `npm run lint` (`eslint .`)
     - `npm run build` (`tsc -b && vite build`)
