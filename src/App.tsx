import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import './App.css'

function App() {
  return (
    <div className="app" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <section className="hero section" aria-labelledby="hero-title">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="hero-eyebrow mono">
                <span aria-hidden="true">// </span>A developer portfolio
              </p>
              <p className="hero-intro mono">Hello, I'm</p>
              <h1 id="hero-title">
                Tamutswa <span>Matondo</span>
              </h1>
              <p className="hero-role mono">
                Software Developer<span className="typing-cursor" aria-hidden="true" />
              </p>
              <p className="hero-summary">Welcome to my developer portfolio.</p>

              <ul className="hero-interests mono" aria-label="Areas of interest">
                <li>Machine Learning and AI</li>
                <li>Web Development</li>
              </ul>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View Projects</a>
                <a className="button button-secondary" href="#contact">Contact Me</a>
              </div>
            </div>

            <aside className="code-window" aria-label="Profile code sample">
              <div className="code-window-header" aria-hidden="true">
                <span />
                <span />
                <span />
                <p>profile.ts</p>
              </div>
              <pre tabIndex={0}><code>
                <span className="code-keyword">const</span>{' developer = {\n'}
                {'  '}<span className="code-property">name</span>{': '}<span className="code-string">'Tamutswa Matondo'</span>{',\n'}
                {'  '}<span className="code-property">role</span>{': '}<span className="code-string">'Software Developer'</span>{',\n'}
                {'  '}<span className="code-property">interests</span>{': [\n'}
                {'    '}<span className="code-string">'Machine Learning and AI'</span>{',\n'}
                {'    '}<span className="code-string">'Web Development'</span>{',\n'}
                {'  ],\n'}
                {'}'}
              </code></pre>
            </aside>
          </div>
        </section>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p className="footer-title mono">
            <span aria-hidden="true">&lt; </span>
            Software Developer Portfolio
            <span aria-hidden="true"> /&gt;</span>
          </p>
          <p className="footer-stack mono">Built with React, TypeScript &amp; Vite</p>
        </div>
      </footer>
    </div>
  )
}

export default App
