import profilePhoto from '../assets/profile-new.jpg'
import { ABOUT_PARAGRAPHS } from '../data/portfolioData'

export function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="container">
        <header className="about-heading">
          <p className="section-path mono" aria-hidden="true">~/portfolio/about</p>
          <h2 id="about-title">About Me</h2>
        </header>

        <div className="about-layout">
          <figure className="about-profile">
            <div className="about-profile-frame">
              <img
                className="about-profile-image"
                src={profilePhoto}
                alt="Tamutswa Matondo"
                loading="lazy"
                decoding="async"
                width={1920}
                height={2560}
              />
            </div>
            <figcaption className="about-profile-caption">
              <p className="about-profile-name">Tamutswa Matondo</p>
              <p className="about-profile-title mono">Software Developer</p>
            </figcaption>
          </figure>

          <div className="about-copy">
            {ABOUT_PARAGRAPHS.map((paragraph, index) => (
              <p className={index === 0 ? 'about-lead' : undefined} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
