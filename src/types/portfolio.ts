export type ProjectStatus = 'Planned' | 'In Development' | 'Completed'

export interface ProjectItem {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly status: ProjectStatus
  readonly githubUrl?: string
  readonly liveUrl?: string
  readonly image?: {
    readonly src: string
    readonly alt: string
  }
}

export type ContactMethod = {
  readonly id: 'github' | 'email' | 'whatsapp'
  readonly label: string
} & (
  | {
    readonly availability: 'Available'
    readonly approvedUrl: string
    readonly accessibleLabel: string
  }
  | {
    readonly availability: 'Pending setup' | 'Coming soon'
    readonly approvedUrl?: never
    readonly accessibleLabel?: never
  }
)
