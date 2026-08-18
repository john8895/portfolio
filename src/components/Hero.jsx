export default function Hero() {
  return (
    <section className="pt-24 pb-16 border-b border-border dark:border-border-dark">
      <p className="font-[family-name:var(--font-mono)] text-sm text-accent dark:text-accent-dark mb-2">
        Hi, my name is
      </p>
      <h1 className="font-[family-name:var(--font-display)] font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05] mb-4 text-text-primary dark:text-text-primary-dark">
        John Chen
      </h1>
      <p className="text-xl text-text-secondary dark:text-text-secondary-dark max-w-lg leading-relaxed mb-2">
        <span className="text-accent dark:text-accent-dark font-semibold">Design-trained</span> frontend engineer.
      </p>
      <p className="text-base text-text-secondary dark:text-text-secondary-dark max-w-lg leading-relaxed">
        10 years of visual design, now building with React.
        I know what pixel-perfect looks like because I've been on the other side.
      </p>
      <div className="mt-8 flex gap-3">
        <a
          href="#projects"
          className="font-[family-name:var(--font-mono)] text-sm px-5 py-2.5 bg-accent dark:bg-accent-dark text-white rounded transition-colors hover:bg-accent-hover dark:hover:bg-accent-hover-dark"
        >
          See my work
        </a>
        <a
          href="https://github.com/john8895"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-mono)] text-sm px-5 py-2.5 border border-accent dark:border-accent-dark text-accent dark:text-accent-dark rounded transition-colors hover:bg-accent hover:text-white dark:hover:bg-accent-dark dark:hover:text-white"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
