import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { GitHubIcon, ExternalLinkIcon, ArrowLeftIcon } from '../components/Icons'
import projects from '../data/projects'

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <motion.div className="max-w-[960px] mx-auto px-6 py-24 text-center" {...pageTransition}>
        <h1 className="font-[family-name:var(--font-display)] font-bold text-3xl mb-4 text-text-primary dark:text-text-primary-dark">
          找不到此專案
        </h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm text-accent dark:text-accent-dark hover:text-accent-hover dark:hover:text-accent-hover-dark transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          返回首頁
        </Link>
      </motion.div>
    )
  }

  const { detail } = project

  return (
    <motion.article className="max-w-[960px] mx-auto px-6 py-16" {...pageTransition}>
      {/* Back */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark transition-colors mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        All Projects
      </Link>

      {/* Hero */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-[family-name:var(--font-mono)] text-xs px-2.5 py-0.5 bg-bg-surface dark:bg-bg-surface-dark border border-border dark:border-border-dark rounded text-text-secondary dark:text-text-secondary-dark"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl sm:text-5xl tracking-tight leading-tight mb-3 text-text-primary dark:text-text-primary-dark">
          {project.title}
        </h1>
        <p className="text-lg text-text-secondary dark:text-text-secondary-dark max-w-lg leading-relaxed">
          {project.tagline}
        </p>
        <div className="flex gap-4 items-center mt-6">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm px-5 py-2.5 bg-accent dark:bg-accent-dark text-white rounded transition-colors hover:bg-accent-hover dark:hover:bg-accent-hover-dark"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Live Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm px-5 py-2.5 border border-accent dark:border-accent-dark text-accent dark:text-accent-dark rounded transition-colors hover:bg-accent hover:text-white dark:hover:bg-accent-dark dark:hover:text-white"
          >
            <GitHubIcon className="w-4 h-4" />
            Source Code
          </a>
        </div>
      </header>

      {/* Main screenshot */}
      {project.image && (
        <div className="mb-16 rounded-lg overflow-hidden border border-border dark:border-border-dark">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full"
          />
        </div>
      )}

      {/* Content sections */}
      <div className="space-y-12 max-w-[720px]">
        {/* Background */}
        {detail.background && (
          <section>
            <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight mb-4 text-text-primary dark:text-text-primary-dark">
              問題背景
            </h2>
            <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed">
              {detail.background}
            </p>
          </section>
        )}

        {/* Architecture */}
        {detail.architecture && (
          <section>
            <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight mb-4 text-text-primary dark:text-text-primary-dark">
              技術架構
            </h2>
            <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed">
              {detail.architecture}
            </p>
          </section>
        )}

        {/* Challenge */}
        {detail.challenge ? (
          <section>
            <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight mb-4 text-text-primary dark:text-text-primary-dark">
              開發挑戰
            </h2>
            <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed">
              {detail.challenge}
            </p>
          </section>
        ) : (
          <section className="border border-dashed border-border dark:border-border-dark rounded-lg p-6">
            <p className="font-[family-name:var(--font-mono)] text-sm text-text-muted dark:text-text-muted-dark">
              // TODO: 開發挑戰內容待補充
            </p>
          </section>
        )}

        {/* Extra screenshots */}
        {detail.screenshots.length > 0 && (
          <section>
            <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight mb-4 text-text-primary dark:text-text-primary-dark">
              操作流程
            </h2>
            <div className="space-y-6">
              {detail.screenshots.map((src, i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-border dark:border-border-dark">
                  <img src={src} alt={`${project.title} screenshot ${i + 1}`} className="w-full" loading="lazy" />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Bottom nav */}
      <div className="mt-16 pt-8 border-t border-border dark:border-border-dark">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm text-accent dark:text-accent-dark hover:text-accent-hover dark:hover:text-accent-hover-dark transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          返回首頁
        </Link>
      </div>
    </motion.article>
  )
}
