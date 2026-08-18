import { GitHubIcon, ExternalLinkIcon } from './Icons'
import airQualityImg from '../assets/air-quality.jpg'
import reactShopImg from '../assets/react-shop.png'

const projects = [
  {
    title: '台灣空氣品質地圖',
    description:
      '即時顯示全台監測站 AQI 數據，支援 GPS 定位、城市篩選與互動式地圖。串接環境部 Open Data API。',
    tags: ['React 19', 'Leaflet', 'REST API', 'Tailwind'],
    demo: 'https://john8895.github.io/air-quality/',
    github: 'https://github.com/john8895/air-quality',
    image: airQualityImg,
  },
  {
    title: 'AhanStore',
    description:
      '電商練習作品，商品列表、搜尋、分類篩選與完整購物車流程。使用 Context API 管理全域狀態。',
    tags: ['React 19', 'Vite', 'useContext', 'FakeStoreAPI'],
    demo: 'https://john8895.github.io/react-shop/',
    github: 'https://github.com/john8895/react-shop',
    image: reactShopImg,
  },
  {
    title: 'WannaEat 午餐團訂',
    description:
      '辦公室午餐團訂工具，建立訂單、選餐廳、彙整品項、追蹤付款。從 LocalStorage 版迭代到 PHP + MySQL 完整後端，累計開發 360 小時。',
    tags: ['Vue 3', 'PHP', 'MySQL', 'Full-stack'],
    demo: null,
    github: 'https://github.com/john8895/wanna-eat',
    image: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest uppercase text-text-muted dark:text-text-muted-dark mb-8">
        Projects
      </p>

      <div className="flex flex-col gap-16">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`fade-in flex flex-col gap-6 ${
              i % 2 === 1 ? 'sm:flex-row-reverse' : 'sm:flex-row'
            } sm:gap-10 sm:items-center`}
          >
            {/* Screenshot */}
            {project.image ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:w-1/2 flex-shrink-0 aspect-video bg-bg-surface dark:bg-bg-surface-dark border border-border dark:border-border-dark rounded-lg overflow-hidden flex items-center justify-center hover:border-accent dark:hover:border-accent-dark transition-colors cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </a>
            ) : (
              <div className="sm:w-1/2 flex-shrink-0 aspect-video bg-bg-surface dark:bg-bg-surface-dark border border-border dark:border-border-dark rounded-lg flex items-center justify-center">
                <span className="font-[family-name:var(--font-mono)] text-xs text-text-muted dark:text-text-muted-dark">
                  Full-stack project — see GitHub for details
                </span>
              </div>
            )}

            {/* Info */}
            <div className="sm:w-1/2">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight mb-2 text-text-primary dark:text-text-primary-dark">
                {project.title}
              </h3>
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
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-sm text-accent dark:text-accent-dark hover:text-accent-hover dark:hover:text-accent-hover-dark transition-colors"
                  >
                    <span>🔗</span> Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-accent dark:text-accent-dark hover:text-accent-hover dark:hover:text-accent-hover-dark transition-colors"
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
