import { EDUCATION_ENTRIES } from '../data/portfolioData'

export function Education() {
  return (
    <section
      className="education section"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="container">
        <div className="education-intro">
          <p className="section-path mono" aria-hidden="true">~/portfolio/education</p>
          <h2 id="education-title">Education</h2>
        </div>

        <div className="education-list">
          {EDUCATION_ENTRIES.map((entry, index) => (
            <article className="education-entry" key={entry.title}>
              <p className="education-index mono" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div className="education-entry-content">
                <h3>{entry.title}</h3>
                <p className="education-meta mono">{entry.meta}</p>
                <p className="education-description">{entry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
