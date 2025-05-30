const cards = [
  {
    name: '穿越的召喚',
    img: 'images/card1.png',
    desc: '我聽見靈魂的音樂,在混亂中堅定地走向我靈性故故鄉的回音。',
    advice: '你已經在轉化之路上,請繼續傾聽內在的指引。即使外界看似無感,你的選擇會為你帶來真實的自由與創造力。'
  },
  {
    name: '舊居新生',
    img: 'images/card2.png',
    desc: '我為新的開始掃清過往的陰影,讓我的居所成為靈魂真正的棲身地。',
    advice: '你正進入一段穩定且可能具滋養性的階段,但不要忽忽視那些潛藏在表面之下的感受。清理過往的能量,讓這份安穩更深刻地屬於你。'
  },
  {
    name: '內在警報',
    img: 'images/card3.png',
    desc: '我信任我的直覺,當內在的火光閃爍,我選擇行動與覺醒。',
    advice: '你有強烈的靈性感知力,能夠提早察覺即將到來的情緒或能量變化。不要懷疑你的直覺,只是有時還在學習如何對應與行動。內在聲音提醒你一一你不需要完美,只需要開始。'
  },
  {
    name: '我找不到自己的名字',
    img: 'images/card4.png',
    desc: '即使我一時迷失,我的名字與價值仍被記錄在宇宙之書中。',
    advice: '當你懷疑自己是否重要時,試著從別人的眼中再次認識自己。有時我們需要他人提醒,才能再次看見自己的光。別擔心重新定義自己,你只是正在成長。'
  },
  {
    name: '他以為我辦不到',
    img: 'images/card5.png',
    desc: '我內在的資源遠比他人所見還豐盛,我用創意與堅持,踏出屬於自己的出口。',
    advice: '不要小看生活中微小的資源或靈感,那些正是你翻越越限制的墊腳石。無論結果如何,重要的是你正在成長、正在爬升、正在行動。'
  },
  {
    name: '我最終讓它停了下來',
    img: 'images/card6.png',
    desc: '我在混亂之中仍選擇信任自己,我擁有放慢、止住、重新開始的力量。',
    advice: '如果你感到當下的節奏過快、方向不明,請記得,你可以選擇停下來。呼吸、踩住煞車,宇宙允許你緩一緩,也相信你最終能找到自己的步調。'
  },
  {
    name: '我總能找到辦法',
    img: 'images/card7.png',
    desc: '我不受外界限制,我與內在智慧連結,總能創造出前往自由的路。',
    advice: '你身上蘊含著靈巧與堅韌的能量。無論目前看起來多麼困難,你都擁有翻越圍牆的方式―別懷疑自己的創意與直覺,它們正等你相信它。'
  },
  {
    name: '穩穩地停下來',
    img: 'images/card8.png',
    desc: '我尊重自己的節奏,信任自己能穩穩地駕馭人生,即使一開始看似失控。',
    advice: '你不必完美地控制一切,只要願意停下來、感受並調整方向,靈魂自會為你重新導航·'
  },
  {
    name: '尋找真正的安全',
    img: 'images/card9.png',
    desc: '我的內在避風港,就是我與神性連結之處,無論外界如何變動,我都能找到回家的路。',
    advice: '你是那個知道該往哪裡走的人。也許真正的安全不是地點,而是你所培養的內在力量與覺知。'
  },
  {
    name: '回收遺落的祝福',
    img: 'images/card10.png',
    desc: '我走進自己的歷史,在熟悉與陌生之中,領回那些本就屬於我的禮物與力量。',
    advice: '有些資源你以為早已失落,其實正等待你以新的眼光重新發現現與接收。你的生命,不只為了創造,也在不斷回收靈魂的豐盛。'
  },
  {
    name: '釋放情感的深潛',
    img: 'images/card11.png',
    desc: '當我打開內心的深洞,過往的情感如水流般釋放,流向未知,帶來無限的寧静與療癒。',
    advice: '讓自己深入情感的深海,並勇敢釋放被埋藏已久的痛苦或無法表達的情感。這些釋放將帶來深層的平靜與轉化。'
  },
  {
    name: '家族情結的淨化',
    img: 'images/card12.png',
    desc: '我勇敢地面對那些曾經隱藏的家族情結,將不屬於我的情緒與責任歸還,讓清理的水流為關係注入新的平衡。',
    advice: '這是一段讓你學會如何在愛與界線中重整家庭關係的旅程。你的清理,不只是沖刷過去,也是為新一代創造乾淨的能量場。'
  },
  {
    name: '信念的墜落與升起',
    img: 'images/card13.png',
    desc: '信念光照耀即使無法改變的命運。',
    advice: '願你相信,即使面對無法挽回的狀況,愛與靈魂的力量依然能帶領你穿越黑暗。你的視角正在擴展,學會用靈魂的眼睛睛觀看生命,並為他人照亮信念的道路。'
  },
  {
    name: '理解的容器',
    img: 'images/card14.png',
    desc: '我選擇用心接住一切形式的愛,即使它不像我預期的樣子。',
    advice: '願你看見:不是每一次表達都完美,但愛的本質仍存在其中。願你學會溫柔地放下對形式的執著,接住來自過去與現在的愛,並重新定義屬於自己的理解與宽容。'
  },
  {
    name: '你值得被善待',
    img: 'images/card15.png',
    desc: '你真誠的聲音,喚來了命運的柔軟回應。',
    advice: '你值得被理解、被支持,也值得為自己發聲。當你勇敢說出想要的,宇宙正悄悄地為你安排奇蹟的轉角。'
  },
  {
    name: '重啟與回歸',
    img: 'images/card16.png',
    desc: '阿林塔拉·諾維雷,我在遺忘中甦醒。考驗與悔悟皆為回歸的門。',
    advice: '願你記得,任何失落都可能再度盛開,願你原諒自己的不完美,因為你仍在旅途上勇敢飛行。'
  },
  {
    name: '從容的選擇',
    img: 'images/card17.png',
    desc: '在浮動之中,我選擇內心的平穩。即使失去,也能再次創造。',
    advice: '願你相信,你的每一次讓步,都不是退縮,而是一種寬廣的愛與智慧;宇宙會在你松手的地方,幫你纖出新的路徑。'
  },
  {
    name: '森林之家',
    img: 'images/card18.png',
    desc: '在混亂與暴露中,靈魂學會溫柔地接納與界線。',
    advice: '願你在對外打開與自我保護之間,找到一條溫柔而堅定的路徑。你的空間與身體皆值得尊重與愛護。'
  },
  {
    name: '失落的階梯',
    img: 'images/card19.png',
    desc: '迷路的靈魂正在呼喚,心中的階梯指引著回家的方向。',
    advice: '你內心的警覺與愛,是黑暗中閃耀的燈塔。即使一切看似脫序,你總會找到通往理解與連結的路。'
  },
  {
    name: '旋律的價值',
    img: 'images/card20.png',
    desc: '音符如銀河之光,價值在熟練與創造中綻放。',
    advice: '你內心的才華與創意,無論是音符或設計,都擁有無限的潛能與價值。相信自己的天賦,並勇敢地讓它們綻放。'
  },
  {
    name: '爭奪空間',
    img: 'images/card21.png',
    desc: '隱藏的心聲在碰撞中顯現,界限在互相試探中確立。',
    advice: '願你在衝突中學會表達自己的立場,也能尊重他人的空間與感受。每一次爭執都是對內心界限的探索,讓你更清楚地明白自己的需求。'
  },
  {
    name: '創作與自我懷疑',
    img: 'images/card22.png',
    desc: '創意在懷疑中掙扎,卻也在嘗試中綻放。',
    advice: '願你相信自己的創造力,即使在不確定中也能找到屬於自己的光芒。每一個不熟悉的音符與設計,都是你靈魂表達的獨特印記。'
  },
  {
    name: '無盡清潔',
    img: 'images/card24.png',
    desc: '塵世中的混沌,唯有清潔能揭示本質。',
    advice: '你擁有清理內外世界的力量,無論是心靈的陰霾還是現實的混亂,你都有能力將一切恢復純淨。相信自己的整理與療癒之力,它不僅是物理層面的改變,更是心靈的清澈。'
  },
  {
    name: '名字的連結與創造',
    img: 'images/card25.png',
    desc: '名字如印記,創造如靈魂的呼吸。',
    advice: '你擁有賦予生命創造力的力量,你的愛與智慧將成為孩子成長的養分。相信自己的引導,讓他自由地探索自己的世界與天賦。'
  },
  {
    name: '雙重自我與真實',
    img: 'images/card26.png',
    desc: '真實如影,雙面如風。接受自我,便是平靜。',
    advice: '你擁有看透表象與接納內心多樣性的智慧。無論是陽光下的你,還是是陰影中的你,都是你的一部分。'
  },
  {
    name: '邊界與自我保護',
    img: 'images/card27.png',
    desc: '邊界如影,信任如光。守護自我,無懼無慮。若迷失自我,願尋回初心。',
    advice: '無論身處何種情境,你擁有識破虛假與保護自我的力量。當你感到迷失時,請記得停下腳步,重新找回自己。'
  },
  {
    name: '淨化與守護',
    img: 'images/card28.png',
    desc: '純淨之力,護佑靈魂。心如劍舞,無懼無礙。',
    advice: '你擁有清理與保護能量的智慧,無論是物質上的補償還是精神上的淨化,都會被守護。'
  },
  {
    name: '迷路與祈願',
    img: 'images/card29.png',
    desc: '迷霧中尋路,心懷祈禱。縱使無法觸及,願他平安無事。',
    advice: '當你感到無助時,你的祈禱將成為最強大的守護。無論多麼危險的路途,你愛的人都會找到平安歸來的路。'
  },
  {
    name: '守護之門',
    img: 'images/card30.png',
    desc: '保護之門既是防禦,也是理解,無懼恐懼,亦無忘仁慈。',
    advice: '願你在守護自己與親愛之人時,能保持內心的平靜與智慧。'
  },
  {
    name: '無意之承諾',
    img: 'images/card31.png',
    desc: '善意若無邊界,終將化為負擔。明確承諾,釋放心靈。',
    advice: '願你能明確自己的承諾與責任,尊重自己的能力與界線。'
  },
  {
    name: '時光之書',
    img: 'images/card32.png',
    desc: '時間如書頁翻轉,贈禮如記憶流動。每份心意,皆有回應。',
    advice: '願你在付出與分享中找到內心的溫暖,無論時光如何流轉,真心永存。'
  },
  {
    name: '凌亂的時光梯',
    img: 'images/card33.png',
    desc: '時間如梯升降,混亂中尋找秩序。心念所至,光明引路。',
    advice: '願你在混亂中保持清晰,無論挑戰如何,總能找到你的方向與平衡。'
  },
  {
    name: '聖經的真相',
    img: 'images/card34.png',
    desc: '真理遠在表面之下,智慧源於內心,而非人言。',
    advice: '願你擁有洞察真相的智慧,無論面對何種傳統或信仰,都能看見其背後的真意。'
  },
  {
    name: '節制與創造',
    img: 'images/card35.png',
    desc: '節制是內在的智慧,創造是靈魂的回應。',
    advice: '願你在生活中找到節制與創造的平衡,理解資源的珍貴,也欣賞他人智慧的靈光。'
  },
  {
    name: '濕被子的拯救',
    img: 'images/card36.png',
    desc: '危難之時,柔軟之物成為力量;水與心的結合,熄滅毀滅之火。',
    advice: '願你相信自己的直覺與行動力,即使身處災難中,也能用柔軟與與智慧,成就拯救的奇蹟。'
  }
  
];

let drawn = false;

function drawCard() {
  if (drawn) {
    alert("你只能抽一次牌！");
    return;
  }

  const card = cards[Math.floor(Math.random() * cards.length)];
  const name = document.getElementById("card-name");
  const image = document.getElementById("card-image");
  const desc = document.getElementById("card-description");
  const advice = document.getElementById("card-advice");
  const container = document.getElementById("card-container");
  const soulMessage = document.getElementById("soul-message");
  const bgMusic = document.getElementById("bg-music");

  if (name) name.textContent = card.name;
  if (image) image.src = card.img;
  if (desc) desc.textContent = card.desc;
  if (advice) advice.textContent = card.advice;
  if (container) container.classList.remove("hidden");
  if (soulMessage) soulMessage.classList.remove("hidden");

  if (bgMusic && bgMusic.paused) {
    bgMusic.play().catch(e => {
      console.warn("背景音樂播放被阻擋:", e);
    });
  }

  drawn = true;
}

document.addEventListener("DOMContentLoaded", () => {
  const drawBtn = document.getElementById("draw-btn");
  if (drawBtn) drawBtn.addEventListener("click", drawCard);
});
