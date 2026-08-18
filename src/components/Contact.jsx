import { GitHubIcon, MailIcon } from './Icons'

function handleEmail() {
  const u = 'paiching01'
  const d = 'gmail.com'
  window.location.href = 'mai' + 'lto:' + u + '@' + d
}

export default function Contact() {
  return (
    <section id="contact" className="fade-in py-16 border-t border-border dark:border-border-dark">
      <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest uppercase text-text-muted dark:text-text-muted-dark mb-8">
        Contact
      </p>
      <h2 className="font-[family-name:var(--font-display)] font-bold text-3xl tracking-tight mb-4 text-text-primary dark:text-text-primary-dark">
        Let's talk.
      </h2>
      <p className="text-text-secondary dark:text-text-secondary-dark mb-6 max-w-md leading-relaxed">
        正在尋找前端工程師的機會。如果你覺得我的背景適合你的團隊，歡迎聯繫。
      </p>
      <div className="flex gap-4 flex-wrap items-center">
        <button
          onClick={handleEmail}
          className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm px-5 py-2.5 bg-accent dark:bg-accent-dark text-white rounded transition-colors hover:bg-accent-hover dark:hover:bg-accent-hover-dark cursor-pointer"
        >
          <MailIcon className="w-4 h-4" />
          Email me
        </button>
        <a
          href="https://github.com/john8895"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-accent dark:text-accent-dark hover:text-accent-hover dark:hover:text-accent-hover-dark transition-colors py-2.5"
        >
          <GitHubIcon className="w-5 h-5" />
          <span className="font-[family-name:var(--font-mono)] text-sm">GitHub</span>
        </a>
      </div>
    </section>
  )
}
