import { ABOUT_PARAGRAPHS } from '../data/portfolioData'

export function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="container about-layout">
        <header className="about-heading">
          <h2 id="about-title">About Me</h2>
        </header>

        <div className="about-copy">
          {ABOUT_PARAGRAPHS.map((paragraph, index) => (
            <p className={index === 0 ? 'about-lead' : undefined} key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
