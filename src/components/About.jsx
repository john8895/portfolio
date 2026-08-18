const skills = [
  'React', 'Vue', 'JavaScript', 'TypeScript',
  'Tailwind CSS', 'Vite', 'REST API', 'Git',
  'Figma', 'PHP', 'MySQL',
]

const timeline = [
  { year: '2006', event: '第一份網頁設計師工作', note: '從切版開始，同時管 Linux 伺服器' },
  { year: '2007', event: '美編企劃 @ 今網資訊', note: '商業設計、CI 企業形象規劃' },
  { year: '2011', event: '電商平面設計 & 攝影', note: '多平台電商經營，商品攝影與後製' },
  { year: '2014', event: '創立好點子工作室', note: '從零建 PHP 開店平台，招商 100+ 店家' },
  { year: '2019', event: '網頁設計師 @ 首岳資訊', note: '導入 PUG/SCSS 工作流，團隊效率 +25%' },
  { year: '2022', event: '獨立內容事業', note: 'Python 自動化、AI 工具、YouTube 590+ 支影片' },
  { year: '2026', event: '回歸前端工程', note: 'React 19 + TypeScript，帶著設計直覺寫程式' },
]

export default function About() {
  return (
    <section id="about" className="fade-in py-16 border-t border-border dark:border-border-dark">
      <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest uppercase text-text-muted dark:text-text-muted-dark mb-8">
        About
      </p>

      <div className="grid sm:grid-cols-2 gap-10 mb-12">
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
          <p className="text-text-secondary dark:text-text-secondary-dark mb-3 leading-relaxed">
            轉前端之後，我帶到團隊的是：對還原度的敏感度、對間距和層級的直覺，以及跟設計師零溝通成本的協作能力。
          </p>
          <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed">
            在獨立經營內容事業的四年半裡，我用 Python 寫自動化腳本、串 API、導入 AI 工具，把單支影片剪輯從兩天縮短到一小時。
            這段經歷讓我確認：我最有動力的事，是用程式解決真實的問題。
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

      {/* Timeline */}
      <div>
        <p className="font-[family-name:var(--font-mono)] text-xs text-text-muted dark:text-text-muted-dark uppercase tracking-widest mb-6">
          Timeline
        </p>
        <div className="relative pl-6 border-l-2 border-border dark:border-border-dark space-y-6">
          {timeline.map((item) => (
            <div key={item.year} className="relative">
              <div className="absolute -left-[calc(0.375rem+1.5rem)] w-3 h-3 rounded-full bg-accent dark:bg-accent-dark border-2 border-bg dark:border-bg-dark" />
              <p className="font-[family-name:var(--font-mono)] text-xs text-accent dark:text-accent-dark mb-0.5">
                {item.year}
              </p>
              <p className="font-semibold text-text-primary dark:text-text-primary-dark text-sm">
                {item.event}
              </p>
              <p className="text-text-secondary dark:text-text-secondary-dark text-sm">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
