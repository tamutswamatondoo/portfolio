import { PROJECTS } from '../data/portfolioData'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="projects section" aria-labelledby="projects-title">
      <div className="container">
        <header className="projects-intro">
          <h2 id="projects-title">What I'm Building</h2>
          <p>
            A look at the projects on my roadmap, the problems I want to explore, and the applications I plan to develop.
          </p>
        </header>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} number={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
