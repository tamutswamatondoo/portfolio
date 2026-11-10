import { EXPLORING_TECHNOLOGIES, SKILL_CATEGORIES } from '../data/portfolioData'

export function Skills() {
  return (
    <section id="skills" className="skills section" aria-labelledby="skills-title">
      <div className="container">
        <div className="skills-intro">
          <p className="section-path mono" aria-hidden="true">~/portfolio/skills</p>
          <h2 id="skills-title">Technical Skills</h2>
          <p>Technologies I work with, tools I use, and areas I'm continuing to explore.</p>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category, index) => (
            <div className="skill-card" key={category.title}>
              <div className="skill-card-header">
                <span className="skill-card-index mono" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill) => <li className="skill-item" key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <section className="skills-exploring" aria-labelledby="exploring-title">
          <h3 id="exploring-title">Currently Exploring</h3>
          <p className="exploring-description">Technologies I'm currently learning.</p>
          <ul className="skill-list exploring-list">
            {EXPLORING_TECHNOLOGIES.map((technology) => (
              <li className="skill-item exploring-item" key={technology}>{technology}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}
