import { useState } from 'react'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
      darkMode
        ? 'bg-bg-dark/90 border-border-dark'
        : 'bg-bg/90 border-border'
    } backdrop-blur-sm`}>
      <nav className="max-w-[960px] mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className={`font-[family-name:var(--font-display)] font-bold text-lg ${
          darkMode ? 'text-text-primary-dark' : 'text-text-primary'
        }`}>
          John<span className={darkMode ? 'text-accent-dark' : 'text-accent'}>.</span>dev
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-mono)] text-sm transition-colors ${
                darkMode
                  ? 'text-text-secondary-dark hover:text-accent-dark'
                  : 'text-text-secondary hover:text-accent'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-md text-sm border transition-colors ${
              darkMode
                ? 'border-border-dark text-text-secondary-dark hover:text-accent-dark hover:border-accent-dark'
                : 'border-border text-text-secondary hover:text-accent hover:border-accent'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀' : '☾'}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`sm:hidden p-2 ${darkMode ? 'text-text-primary-dark' : 'text-text-primary'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`sm:hidden border-t px-6 py-4 flex flex-col gap-4 ${
          darkMode
            ? 'bg-bg-dark border-border-dark'
            : 'bg-bg border-border'
        }`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-[family-name:var(--font-mono)] text-sm ${
                darkMode ? 'text-text-secondary-dark' : 'text-text-secondary'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`self-start p-2 rounded-md text-sm border ${
              darkMode ? 'border-border-dark text-text-secondary-dark' : 'border-border text-text-secondary'
            }`}
          >
            {darkMode ? '☀ Light' : '☾ Dark'}
          </button>
        </div>
      )}
    </header>
  )
}
