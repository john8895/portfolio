import { GitHubIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-border-dark mt-8">
      <div className="max-w-[960px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-mono)] text-xs text-text-muted dark:text-text-muted-dark">
          Built with React + Tailwind
        </p>
        <a
          href="https://github.com/john8895"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted dark:text-text-muted-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
        >
          <GitHubIcon className="w-5 h-5" />
        </a>
      </div>
    </footer>
  )
}
