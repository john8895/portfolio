export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-border-dark mt-8">
      <div className="max-w-[960px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-mono)] text-xs text-text-muted dark:text-text-muted-dark">
          Built with React + Tailwind
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/john8895"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-mono)] text-xs text-text-muted dark:text-text-muted-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
