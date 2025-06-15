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
  const startBtn = document.getElementById("start-journey-btn");
  const drawBtn = document.getElementById("go-draw-btn");

  if (!startBtn || !drawBtn || !pages.p1 || !pages.p2 || !pages.p3 || !pages.p4) {
    console.error("❌ 無法找到必要元素，請檢查 HTML 結構是否正確！");
    return;
  }

  startBtn.addEventListener("click", () => {
    pages.p1.classList.add("hidden");
    pages.p2.classList.remove("hidden");

    bgMusic.play().then(() => {
      console.log("✅ 音樂播放成功");
    }).catch(err => {
      console.warn("⚠️ 音樂播放被瀏覽器攔截", err);
    });
  });

  drawBtn.addEventListener("click", () => {
    if (drawn) {
      alert("你只能抽一次牌！");
      return;
    }

    pages.p2.classList.add("hidden");
    pages.p3.classList.remove("hidden");

    // ✅ 啟用影片漸顯 class
    video.classList.add("active");
    video.currentTime = 0;

    // ✅ 延遲播放以避開手機阻擋
    setTimeout(() => {
      video.play().then(() => {
        console.log("🎥 影片播放中");
      }).catch(err => {
        console.warn("⚠️ 手機影片播放失敗", err);
      });
    }, 300);

    // ✅ 延遲切換到結果頁
    setTimeout(() => {
      pages.p3.classList.add("hidden");
      pages.p4.classList.remove("hidden");

      const card = cards[Math.floor(Math.random() * cards.length)];
      console.log("🎴 抽到牌卡：", card);

      document.getElementById("card-name").textContent = card.name;
      document.getElementById("card-image").src = card.img;
      document.getElementById("card-description").textContent = card.desc;
      document.getElementById("card-advice").textContent = card.advice;
      document.getElementById("card-question").textContent = card.question || '（此牌沒有提問內容）';

      Object.assign(document.body.style, {
        backgroundImage: "url('bg2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        transition: "background-image 1s ease",
        backgroundColor: "black"
      });

      document.querySelectorAll(".container").forEach(c => c.style.backgroundColor = "transparent");

      drawn = true;
    }, 5000);
  });
});
