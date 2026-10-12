import type { ContactMethod, ProjectItem } from '../types/portfolio'

export const ABOUT_PARAGRAPHS = [
  `I'm interested in more than making software work. I want to understand how it works, why it sometimes doesn't, and how to make it better.`,
  `Working with both software and technical systems has taught me that a problem isn't always where it first appears. Sometimes the challenge is in the code. Other times, it's in how different parts of a system interact. That's one of the things I find interesting about technology: there's usually another layer worth understanding.`,
  `What interests me most about AI and machine learning is the possibility of building applications that don't just follow instructions, but can learn from data, recognize patterns, and help people make better decisions.`,
] as const

export const SKILL_CATEGORIES = [
  {
    title: 'Web Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Responsive Web Design'],
  },
  {
    title: 'Programming Languages',
    skills: ['Java', 'C++', 'C#'],
  },
  {
    title: 'Development Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Vite', 'GitHub Actions'],
  },
  {
    title: 'Deployment',
    skills: ['Vercel', 'GitHub Pages'],
  },
  {
    title: 'Software Engineering',
    skills: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'Debugging', 'UML'],
  },
] as const

export const EXPLORING_TECHNOLOGIES = ['Python', 'React', 'Node.js', 'Linux', 'AWS'] as const

export const PROJECTS: readonly ProjectItem[] = [
  {
    id: 'datasift',
    title: 'DataSift',
    description: 'A planned application for examining CSV datasets, identifying data-quality issues, and exploring meaningful insights.',
    status: 'Planned',
  },
  {
    id: 'api-pulse',
    title: 'API Pulse',
    description: 'A planned monitoring tool for tracking API availability, response times, and performance history.',
    status: 'Planned',
  },
  {
    id: 'scopeguard',
    title: 'ScopeGuard',
    description: 'A planned requirements management tool for understanding how software changes may affect connected features and tests.',
    status: 'Planned',
  },
]

export const CONTACT_METHODS: readonly ContactMethod[] = [
  {
    id: 'github',
    label: 'GitHub',
    availability: 'Available',
    approvedUrl: 'https://github.com/tamutswamatondoo',
    accessibleLabel: 'Visit Tamutswa Matondoo on GitHub',
  },
  {
    id: 'email',
    label: 'Email',
    availability: 'Pending setup',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    availability: 'Coming soon',
  },
]
