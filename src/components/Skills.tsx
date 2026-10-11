import { EXPLORING_TECHNOLOGIES, SKILL_CATEGORIES } from '../data/portfolioData'

export function Skills() {
  return (
    <section id="skills" className="skills section" aria-labelledby="skills-title">
      <div className="container">
        <div className="skills-intro">
          <h2 id="skills-title">Technical Skills</h2>
          <p>Technologies I work with, tools I use, and areas I'm continuing to explore.</p>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div className="skill-card" key={category.title}>
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <section className="skills-exploring" aria-labelledby="exploring-title">
          <h3 id="exploring-title">Currently Exploring</h3>
          <p>Technologies I'm currently learning.</p>
          <ul className="skill-list exploring-list">
            {EXPLORING_TECHNOLOGIES.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}
