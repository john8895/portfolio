const skills = [
  'React', 'Vue', 'JavaScript', 'TypeScript',
  'Tailwind CSS', 'Vite', 'REST API', 'Git',
  'Figma', 'PHP', 'MySQL',
]

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-border dark:border-border-dark">
      <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest uppercase text-text-muted dark:text-text-muted-dark mb-8">
        About
      </p>

      <div className="grid sm:grid-cols-2 gap-10">
        <div>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-3xl tracking-tight mb-4 text-text-primary dark:text-text-primary-dark">
            設計背景，<br />工程思維。
          </h2>
          <p className="text-text-secondary dark:text-text-secondary-dark mb-3 leading-relaxed">
            高中開始做網頁，之後十年都在平面設計與網頁設計。
            <strong className="text-text-primary dark:text-text-primary-dark font-semibold">
              我知道一個前端工程師不需要設計師反覆修正是什麼樣子。
            </strong>
          </p>
          <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed">
            轉前端之後，我帶到團隊的是：對還原度的敏感度、對間距和層級的直覺，以及跟設計師零溝通成本的協作能力。
          </p>
        </div>
        <div>
          <p className="font-[family-name:var(--font-mono)] text-xs text-text-muted dark:text-text-muted-dark uppercase tracking-widest mb-3">
            Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span
                key={skill}
                className="font-[family-name:var(--font-mono)] text-sm px-3 py-1 bg-bg-surface dark:bg-bg-surface-dark border border-border dark:border-border-dark rounded text-text-secondary dark:text-text-secondary-dark"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
