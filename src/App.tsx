import './App.css'

function App() {
  return (
    <div className="app" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-content">
          <a className="brand" href="#top" aria-label="Tamutswa Matondo home">
            <span className="brand-mark mono" aria-hidden="true">{'</>'}</span>
            <span className="brand-name">Tamutswa Matondo</span>
          </a>
          <p className="header-note mono">Software Developer</p>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero section" aria-labelledby="hero-title">
          <div className="container">
            <p className="hero-eyebrow mono">A developer portfolio</p>
            <h1 id="hero-title">Software Developer<span className="hero-period">.</span></h1>
            <p className="hero-summary">
              I'm Tamutswa Matondo. Welcome to my developer portfolio.
            </p>
            <div className="hero-interests">
              <h2 className="mono">Areas of interest</h2>
              <ul>
                <li>Machine Learning and AI</li>
                <li>Web Development</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p>Software Developer Portfolio</p>
          <p className="mono">Built with React, TypeScript &amp; Vite</p>
        </div>
      </footer>
    </div>
  )
}

export default App
