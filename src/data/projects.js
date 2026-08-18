import airQualityImg from '../assets/air-quality.webp'
import reactShopImg from '../assets/react-shop.webp'

const projects = [
  {
    slug: 'air-quality',
    title: '台灣空氣品質地圖',
    tagline: '即時顯示全台 AQI，讓空氣品質一目瞭然。',
    description:
      '即時顯示全台監測站 AQI 數據，支援 GPS 定位、城市篩選與互動式地圖。串接環境部 Open Data API。',
    tags: ['React 19', 'Leaflet', 'REST API', 'Tailwind'],
    demo: 'https://john8895.github.io/air-quality/',
    github: 'https://github.com/john8895/air-quality',
    image: airQualityImg,
    detail: {
      background:
        '台灣的空氣品質資料散落在政府 Open Data 平台，一般人很難快速判斷自己所在位置的空氣品質。我想做一個打開就能用的工具，讓任何人都能在地圖上直覺地看到即時 AQI。',
      architecture:
        '選擇 React 19 搭配 Leaflet 做互動式地圖，而非 Google Maps API（免費額度有限）。使用 Tailwind CSS 快速建立 UI，串接環境部 Open Data API 取得即時監測資料。整體架構以 custom hooks 拆分資料取得與 UI 邏輯。',
      // TODO: 需要本人提供
      challenge: null,
      screenshots: [],
    },
  },
  {
    slug: 'react-shop',
    title: 'AhanStore',
    tagline: '從零打造的 React 電商練習作品。',
    description:
      '電商練習作品，商品列表、搜尋、分類篩選與完整購物車流程。使用 Context API 管理全域狀態。',
    tags: ['React 19', 'Vite', 'useContext', 'FakeStoreAPI'],
    demo: 'https://john8895.github.io/react-shop/',
    github: 'https://github.com/john8895/react-shop',
    image: reactShopImg,
    detail: {
      background:
        '轉職前端後，想用一個完整的電商流程來練習 React 的核心概念：元件拆分、狀態管理、API 串接。選擇電商是因為它涵蓋了列表渲染、篩選、購物車等常見的前端場景。',
      architecture:
        '使用 React 19 + Vite 建構，以 Context API + useReducer 管理購物車全域狀態，避免引入 Redux 的額外複雜度。串接 FakeStoreAPI 取得商品資料，搭配 Tailwind CSS 做響應式佈局。',
      // TODO: 需要本人提供
      challenge: null,
      screenshots: [],
    },
  },
  {
    slug: 'wanna-eat',
    title: 'WannaEat 午餐團訂',
    tagline: '辦公室午餐團訂工具，從 LocalStorage 到 Full-stack。',
    description:
      '辦公室午餐團訂工具，建立訂單、選餐廳、彙整品項、追蹤付款。從 LocalStorage 版迭代到 PHP + MySQL 完整後端，累計開發 360 小時。',
    tags: ['Vue 3', 'PHP', 'MySQL', 'Full-stack'],
    demo: null,
    github: 'https://github.com/john8895/wanna-eat',
    image: null,
    detail: {
      background:
        '在首岳資訊工作時，辦公室每天中午訂餐都靠 LINE 群組接龍，常常漏單、算錯錢。我決定自己做一個系統來解決這個問題，也藉此練習全端開發。從最初的 LocalStorage 版本，一路迭代到 PHP + MySQL 完整後端。',
      architecture:
        '前端使用 Vue 3，後端採用 PHP + Smarty Template + MySQL。選擇 PHP 是因為當時公司技術棧以 PHP 為主，可以直接應用在工作中。後來加入 LineBot 點餐功能（Node.js），讓同事可以直接在 LINE 裡下單。累計開發超過 360 小時。',
      // TODO: 需要本人提供
      challenge: null,
      screenshots: [],
    },
  },
]

export default projects
