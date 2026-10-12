import { CONTACT_METHODS } from '../data/portfolioData'
import type { ContactMethod } from '../types/portfolio'

function ContactIcon({ id }: { readonly id: ContactMethod['id'] }) {
  return (
    <svg
      viewBox={id === 'github' ? '0 0 19 19' : '0 0 24 24'}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {id === 'github' ? (
        <path
          fill="currentColor"
          stroke="none"
          d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844"
        />
      ) : id === 'email' ? (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </>
      ) : (
        <>
          <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.1-4.9a8.5 8.5 0 1 1 16.4-3.6Z" />
          <path d="M8.4 7.3c-.3 0-.8.2-1 .7-.9 1.6.2 3.7 1.9 5.4 1.7 1.7 3.8 2.8 5.4 1.9.5-.2.7-.7.7-1l-2.3-1.2-1 1c-1.2-.6-2.5-1.9-3.1-3.1l1-1-1.2-2.3Z" />
        </>
      )}
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contact" className="contact section" aria-labelledby="contact-title">
      <div className="container">
        <header className="contact-intro">
          <h2 id="contact-title">Let's Connect</h2>
          <p>
            Have a project in mind, an idea worth discussing, or simply want to connect? Feel free to reach out.
          </p>
        </header>

        <ul className="contact-list" role="list">
          {CONTACT_METHODS.map((method) => {
            const opensInNewTab = method.id !== 'email'
            const content = (
              <>
                <span className="contact-icon">
                  <ContactIcon id={method.id} />
                </span>
                <div className="contact-copy">
                  <h3>{method.label}</h3>
                  <p className="contact-availability mono">{method.availability}</p>
                </div>
                {method.availability === 'Available' && opensInNewTab ? (
                  <span className="contact-arrow" aria-hidden="true">↗</span>
                ) : null}
              </>
            )

            return (
              <li key={method.id}>
                {method.availability === 'Available' && method.approvedUrl ? (
                  <a
                    className="contact-entry contact-entry-link"
                    href={method.approvedUrl}
                    target={opensInNewTab ? '_blank' : undefined}
                    rel={opensInNewTab ? 'noopener noreferrer' : undefined}
                    aria-label={`${method.accessibleLabel}${opensInNewTab ? ' (opens in a new tab)' : ''}`}
                  >
                    {content}
                  </a>
                ) : (
                  <div className="contact-entry">{content}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
