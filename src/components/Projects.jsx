import { Link } from 'react-router-dom'
import { GitHubIcon, ExternalLinkIcon } from './Icons'
import projects from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest uppercase text-text-muted dark:text-text-muted-dark mb-8">
        Projects
      </p>

      <div className="flex flex-col gap-16">
        {projects.map((project, i) => (
          <div
            key={project.slug}
            className={`fade-in flex flex-col gap-6 ${
              i % 2 === 1 ? 'sm:flex-row-reverse' : 'sm:flex-row'
            } sm:gap-10 sm:items-center`}
          >
            {/* Screenshot */}
            {project.image ? (
              <Link
                to={`/projects/${project.slug}`}
                className="sm:w-1/2 flex-shrink-0 aspect-video bg-bg-surface dark:bg-bg-surface-dark border border-border dark:border-border-dark rounded-lg overflow-hidden flex items-center justify-center hover:border-accent dark:hover:border-accent-dark transition-colors cursor-pointer group"
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </Link>
            ) : (
              <Link
                to={`/projects/${project.slug}`}
                className="sm:w-1/2 flex-shrink-0 aspect-video bg-bg-surface dark:bg-bg-surface-dark border border-border dark:border-border-dark rounded-lg flex items-center justify-center hover:border-accent dark:hover:border-accent-dark transition-colors"
              >
                <span className="font-[family-name:var(--font-mono)] text-xs text-text-muted dark:text-text-muted-dark">
                  Full-stack project — click for details
                </span>
              </Link>
            )}

            {/* Info */}
            <div className="sm:w-1/2">
              <Link to={`/projects/${project.slug}`}>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight mb-2 text-text-primary dark:text-text-primary-dark hover:text-accent dark:hover:text-accent-dark transition-colors">
                  {project.title}
                </h3>
              </Link>
              <p className="text-text-secondary dark:text-text-secondary-dark mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-[family-name:var(--font-mono)] text-xs px-2.5 py-0.5 bg-bg-surface dark:bg-bg-surface-dark border border-border dark:border-border-dark rounded text-text-secondary dark:text-text-secondary-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 items-center">
                <Link
                  to={`/projects/${project.slug}`}
                  className="flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-sm text-accent dark:text-accent-dark hover:text-accent-hover dark:hover:text-accent-hover-dark transition-colors"
                >
                  View Details &rarr;
                </Link>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-sm text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                  >
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                    Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span className="font-[family-name:var(--font-mono)] text-sm">Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
