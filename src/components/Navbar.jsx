import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SunIcon, MoonIcon } from './Icons'

const navLinks = [
  { label: 'Projects', target: 'projects' },
  { label: 'About', target: 'about' },
  { label: 'Contact', target: 'contact' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        darkMode
          ? 'bg-bg-dark/90 border-border-dark'
          : 'bg-bg/90 border-border'
      } backdrop-blur-sm ${scrolled ? (darkMode ? 'shadow-[0_1px_3px_rgba(0,0,0,0.4)]' : 'shadow-sm') : ''}`}
    >
      <nav className="max-w-[960px] mx-auto px-6 h-14 flex items-center justify-between" aria-label="Main navigation">
        <Link
          to="/"
          className={`font-[family-name:var(--font-display)] font-bold text-lg ${
            darkMode ? 'text-text-primary-dark' : 'text-text-primary'
          }`}
        >
          John<span className={darkMode ? 'text-accent-dark' : 'text-accent'}>.</span>dev
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {isHome &&
            navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className={`font-[family-name:var(--font-mono)] text-sm transition-colors cursor-pointer ${
                  darkMode
                    ? 'text-text-secondary-dark hover:text-accent-dark'
                    : 'text-text-secondary hover:text-accent'
                }`}
              >
                {link.label}
              </button>
            ))}
          {!isHome && (
            <Link
              to="/"
              className={`font-[family-name:var(--font-mono)] text-sm transition-colors ${
                darkMode
                  ? 'text-text-secondary-dark hover:text-accent-dark'
                  : 'text-text-secondary hover:text-accent'
              }`}
            >
              Home
            </Link>
          )}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-md text-sm border transition-colors cursor-pointer ${
              darkMode
                ? 'border-border-dark text-text-secondary-dark hover:text-accent-dark hover:border-accent-dark'
                : 'border-border text-text-secondary hover:text-accent hover:border-accent'
            }`}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`sm:hidden p-2 cursor-pointer ${darkMode ? 'text-text-primary-dark' : 'text-text-primary'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '\u2715' : '\u2630'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`sm:hidden border-t px-6 py-4 flex flex-col gap-4 ${
            darkMode
              ? 'bg-bg-dark border-border-dark'
              : 'bg-bg border-border'
          }`}
          role="menu"
        >
          {isHome &&
            navLinks.map((link) => (
              <button
                key={link.target}
                role="menuitem"
                onClick={() => { scrollTo(link.target); setMenuOpen(false) }}
                className={`font-[family-name:var(--font-mono)] text-sm text-left cursor-pointer ${
                  darkMode ? 'text-text-secondary-dark' : 'text-text-secondary'
                }`}
              >
                {link.label}
              </button>
            ))}
          {!isHome && (
            <Link
              to="/"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
              className={`font-[family-name:var(--font-mono)] text-sm ${
                darkMode ? 'text-text-secondary-dark' : 'text-text-secondary'
              }`}
            >
              Home
            </Link>
          )}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`self-start p-2 rounded-md text-sm border cursor-pointer ${
              darkMode ? 'border-border-dark text-text-secondary-dark' : 'border-border text-text-secondary'
            }`}
          >
            {darkMode ? <><SunIcon className="w-4 h-4 inline" /> Light</> : <><MoonIcon className="w-4 h-4 inline" /> Dark</>}
          </button>
        </div>
      )}
    </header>
  )
}
