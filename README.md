# Portfolio — John Chen

Personal portfolio site for frontend engineer interviews.

## Live

https://john8895.github.io/portfolio/

## Tech Stack

- **React 19** + **Vite 8** — fast dev & build
- **Tailwind CSS 4** — utility-first styling via `@tailwindcss/vite`
- **React Router** (HashRouter) — multi-page SPA on GitHub Pages
- **Framer Motion** — page transitions (AnimatePresence)
- **gh-pages** — deploy to GitHub Pages

## Structure

```
/                       首頁（Hero + Projects + About + Contact）
/projects/air-quality   台灣空氣品質地圖 詳細頁
/projects/react-shop    AhanStore 詳細頁
/projects/wanna-eat     WannaEat 詳細頁
```

## Design Decisions

- **Editorial aesthetic** — typography-driven, minimal decoration
- **Cabinet Grotesk** (display) + **Instrument Sans** (body) + **JetBrains Mono** (code)
- **Single accent color** (#2D5016 olive green) — intentionally uncommon in developer portfolios
- **Dark mode** — localStorage persistent, follows system preference
- **Scroll fade-in** — Intersection Observer, no extra dependencies
- **Email obfuscation** — JS assembly prevents scraping

## Run Locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

Builds to `dist/` and pushes to `gh-pages` branch.

## Projects Showcased

| Project | Stack | Link |
|---------|-------|------|
| 台灣空氣品質地圖 | React, Leaflet, REST API | [Demo](https://john8895.github.io/air-quality/) |
| AhanStore | React, Vite, Context API | [Demo](https://john8895.github.io/react-shop/) |
| WannaEat 午餐團訂 | Vue 3, PHP, MySQL | [GitHub](https://github.com/john8895/wanna-eat) |
