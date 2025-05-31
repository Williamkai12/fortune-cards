// ✅ 載入卡片資料（從 cards.js 引入）
import { cards } from './cards.js';

// ✅ 驗證載入成功
console.log("✅ script.js 正常載入，卡片總數：", cards.length);

let drawn = false;

// ✅ 頁面區塊對應
const pages = {
  p1: document.getElementById("page-1"), // 靈魂導引頁
  p2: document.getElementById("page-2"), // 抽牌說明頁
  p3: document.getElementById("page-3"), // 播影片頁
  p4: document.getElementById("page-4")  // 抽牌結果頁
};

// ✅ 影音元素
const bgMusic = document.getElementById("bg-music");
const video = document.getElementById("draw-video");

// ▶️ 點「啟程」：進入第2頁，啟動背景音樂
document.getElementById("start-journey-btn").addEventListener("click", () => {
  pages.p1.classList.add("hidden");
  pages.p2.classList.remove("hidden");
  bgMusic.play().catch(() => {});
});

// ▶️ 點「開始抽牌」：顯示動畫 → 顯示結果
document.getElementById("go-draw-btn").addEventListener("click", () => {
  if (drawn) {
    alert("你只能抽一次牌！");
    return;
  }

  // 顯示第3頁動畫
  pages.p2.classList.add("hidden");
  pages.p3.classList.remove("hidden");

  video.currentTime = 0;
  video.play().catch(() => {});

  // 5 秒後顯示第4頁抽牌結果
  setTimeout(() => {
    pages.p3.classList.add("hidden");
    pages.p4.classList.remove("hidden");

    const card = cards[Math.floor(Math.random() * cards.length)];

    // ✅ 顯示抽到的牌卡內容
    document.getElementById("card-name").textContent = card.name;
    document.getElementById("card-image").src = card.img;
    document.getElementById("card-description").textContent = card.desc;
    document.getElementById("card-advice").textContent = card.advice;

    drawn = true;
  }, 5000);
});
