document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ script.js 載入成功");

  const cards = window.cards;
  let drawn = false;

  const pages = {
    p1: document.getElementById("page-1"),
    p2: document.getElementById("page-2"),
    p3: document.getElementById("page-3"),
    p4: document.getElementById("page-4")
  };

  const bgMusic = document.getElementById("bg-music");
  const video = document.getElementById("draw-video");

  document.getElementById("start-journey-btn").addEventListener("click", () => {
    pages.p1.classList.add("hidden");
    pages.p2.classList.remove("hidden");

    bgMusic.play().then(() => {
      console.log("✅ 音樂播放成功");
    }).catch(err => {
      console.warn("⚠️ 音樂播放被瀏覽器攔截", err);
    });
  });

  document.getElementById("go-draw-btn").addEventListener("click", () => {
    if (drawn) {
      alert("你只能抽一次牌！");
      return;
    }

    pages.p2.classList.add("hidden");
    pages.p3.classList.remove("hidden");

    video.classList.remove("hidden");
    video.currentTime = 0;
    video.play().catch(err => {
      console.warn("⚠️ 影片播放錯誤：", err);
    });

    setTimeout(() => {
      pages.p3.classList.add("hidden");
      pages.p4.classList.remove("hidden");

      const card = cards[Math.floor(Math.random() * cards.length)];
      document.getElementById("card-name").textContent = card.name;
      document.getElementById("card-image").src = card.img;
      document.getElementById("card-description").textContent = card.desc;
      document.getElementById("card-advice").textContent = card.advice;

      drawn = true;
    }, 5000);
  });
});
