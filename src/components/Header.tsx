import { useEffect, useRef, useState } from 'react'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-content">
        <div className="header-branding">
          <a
            className="brand"
            href="#top"
            aria-label="Tamutswa Matondo home"
            onClick={closeMenu}
          >
            <span className="brand-mark mono" aria-hidden="true">{'<TM />'}</span>
            <span className="brand-name">Tamutswa Matondo</span>
          </a>
          <p className="header-note mono">Software Developer</p>
        </div>

        <button
          ref={menuButtonRef}
          className="menu-toggle mono"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${isMenuOpen ? ' is-open' : ''}`}
          aria-label="Primary navigation"
        >
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
