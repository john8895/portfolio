import { GitHubIcon, LinkedInIcon } from './Icons'
import avatarImg from '../assets/avatar.png'

const watermarkText = 'DESIGNER WHO CODES \u00b7 FRONTEND ENGINEER \u00b7 '

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 border-b border-border dark:border-border-dark overflow-hidden">
      {/* Watermark background */}
      <div
        className="absolute inset-0 -inset-x-1/2 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 -top-24 -bottom-24 -left-48 -right-48 flex flex-col justify-center gap-6 -rotate-12 opacity-[0.025] dark:opacity-[0.04]">
          {Array.from({ length: 8 }).map((_, i) => (
            <p
              key={i}
              className="font-[family-name:var(--font-mono)] text-[clamp(1.5rem,4vw,2.5rem)] text-accent dark:text-accent-dark whitespace-nowrap tracking-widest font-medium"
              style={{ marginLeft: `${(i % 3) * -120}px` }}
            >
              {watermarkText.repeat(6)}
            </p>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10">
        {/* Text */}
        <div className="sm:flex-1">
          <p className="font-[family-name:var(--font-mono)] text-sm text-accent dark:text-accent-dark mb-2">
            Hi, my name is
          </p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05] mb-4 text-text-primary dark:text-white">
            John Chen
          </h1>
          <p className="text-xl text-text-secondary dark:text-text-secondary-dark max-w-lg leading-relaxed mb-2">
            <span className="text-accent dark:text-accent-dark font-semibold">Design-trained</span> frontend engineer.
          </p>
          <p className="text-base text-text-secondary dark:text-text-secondary-dark max-w-lg leading-relaxed">
            10 years of visual design, now building with React.
            I know what pixel-perfect looks like because I've been on the other side.
          </p>
          <div className="mt-8 flex gap-3 items-center flex-wrap">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-[family-name:var(--font-mono)] text-sm px-5 py-2.5 bg-accent dark:bg-accent-dark text-white rounded transition-colors hover:bg-accent-hover dark:hover:bg-accent-hover-dark cursor-pointer"
            >
              See my work
            </button>
            <a
              href="https://github.com/john8895"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm px-5 py-2.5 border border-accent dark:border-accent-dark text-accent dark:text-accent-dark rounded transition-colors hover:bg-accent hover:text-white dark:hover:bg-accent-dark dark:hover:text-white"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/john8895/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm px-5 py-2.5 border border-accent dark:border-accent-dark text-accent dark:text-accent-dark rounded transition-colors hover:bg-accent hover:text-white dark:hover:bg-accent-dark dark:hover:text-white"
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="sm:flex-shrink-0 flex justify-center sm:justify-end">
          <img
            src={avatarImg}
            alt="John Chen — colored pencil illustration"
            className="w-56 sm:w-64 md:w-72 drop-shadow-sm sm:-translate-x-15 animate-[gentle-sway_6s_ease-in-out_infinite] opacity-80 dark:opacity-70"
          />
        </div>
      </div>
    </section>
  )
}
