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
