import type { ProjectItem } from '../types/portfolio'

interface ProjectCardProps {
  readonly project: ProjectItem
  readonly number: number
}

export function ProjectCard({ project, number }: ProjectCardProps) {
  const titleId = `project-${project.id}-title`

  return (
    <article className="project-card" aria-labelledby={titleId}>
      <div className="project-meta mono">
        <span className="project-number" aria-hidden="true">
          {String(number).padStart(2, '0')}.
        </span>
        <span className="project-status" data-status={project.status}>
          {project.status}
        </span>
      </div>

      {project.image ? (
        <img
          className="project-image"
          src={project.image.src}
          alt={project.image.alt}
          loading="lazy"
          decoding="async"
          width={640}
          height={400}
        />
      ) : (
        <div className="project-placeholder" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" />
          </svg>
        </div>
      )}

      <h3 id={titleId}>{project.title}</h3>
      <p className="project-description">{project.description}</p>

      {project.githubUrl || project.liveUrl ? (
        <div className="project-links">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo (opens in a new tab)`}
            >
              Live demo <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}
