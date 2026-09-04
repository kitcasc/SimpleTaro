const IMG_BASE = "https://sixseeds.github.io/tarot-api/cards/";

// 78 張 · 中文名 + 正逆位關鍵字
const DECK = [
{id:"ar00",name:"愚者",en:"The Fool",up:"新的開始、冒險、純真、跳出舒適圈",rev:"衝動、魯莽、方向不明、逃避現實"},
{id:"ar01",name:"魔術師",en:"The Magician",up:"創造力、行動力、資源到位、心想事成",rev:"欺騙、空談、能力被誤用、時機未到"},
{id:"ar02",name:"女祭司",en:"The High Priestess",up:"直覺、靜觀、內在智慧、等待揭曉",rev:"壓抑直覺、表象迷惑、情緒化判斷"},
{id:"ar03",name:"女皇",en:"The Empress",up:"豐盛、滋養、創造、感情穩定",rev:"過度保護、依賴、創造力受阻"},
{id:"ar04",name:"皇帝",en:"The Emperor",up:"秩序、權威、穩定、承擔責任",rev:"專制、僵化、不願負責、失控"},
{id:"ar05",name:"教皇",en:"The Hierophant",up:"傳統、指導、信仰、尋求建議",rev:"教條束縛、盲從、打破常規的呼喚"},
{id:"ar06",name:"戀人",en:"The Lovers",up:"真愛、結合、重要抉擇、價值契合",rev:"關係失衡、錯誤選擇、價值衝突"},
{id:"ar07",name:"戰車",en:"The Chariot",up:"意志勝利、前進、突破、自律",rev:"方向失控、空轉、好勝心反噬"},
{id:"ar08",name:"力量",en:"Strength",up:"耐心、柔克剛、勇氣、自信",rev:"自我懷疑、壓抑情緒、硬撐"},
{id:"ar09",name:"隱者",en:"The Hermit",up:"內省、尋找答案、沉澱、導師出現",rev:"孤立、迷惘、拒絕建議、想太多"},
{id:"ar10",name:"命運之輪",en:"Wheel of Fortune",up:"轉機、好運、循環向上、順勢而為",rev:"厄運感、抗拒改變、時運未到"},
{id:"ar11",name:"正義",en:"Justice",up:"公平、因果、誠實面對、簽約有利",rev:"不公、偏頗、逃避責任、需修正"},
{id:"ar12",name:"倒吊人",en:"The Hanged Man",up:"換位思考、犧牲、暫停、靈性成長",rev:"白白犧牲、拖延、執著不放"},
{id:"ar13",name:"死神",en:"Death",up:"結束與重生、斷捨離、蛻變",rev:"抗拒改變、藕斷絲連、轉型陣痛"},
{id:"ar14",name:"節制",en:"Temperance",up:"平衡、調和、耐心、漸入佳境",rev:"失衡、急躁、過度消耗"},
{id:"ar15",name:"惡魔",en:"The Devil",up:"執念、慾望綑綁、不健康關係",rev:"掙脫束縛、覺醒、戒斷成功"},
{id:"ar16",name:"高塔",en:"The Tower",up:"劇變、真相揭露、舊結構崩塌",rev:"危機漸緩、逃過一劫、仍需改革"},
{id:"ar17",name:"星星",en:"The Star",up:"希望、療癒、靈感、願望成真",rev:"失望、信心動搖、需要休息"},
{id:"ar18",name:"月亮",en:"The Moon",up:"不安、幻象、潛意識、資訊不明",rev:"撥雲見日、真相浮現、走出焦慮"},
{id:"ar19",name:"太陽",en:"The Sun",up:"成功、喜悅、活力、光明前景",rev:"短暫陰霾、小確幸延遲、過度樂觀"},
{id:"ar20",name:"審判",en:"Judgement",up:"覺醒、召喚、原諒、重要決定",rev:"自我批判、錯失召喚、猶豫不決"},
{id:"ar21",name:"世界",en:"The World",up:"圓滿、完成、整合、新的循環",rev:"未竟之事、差臨門一腳、需收尾"},
// 權杖
{id:"wa01",name:"權杖一",en:"Ace of Wands",up:"新契機、熱情點燃、行動開始",rev:"熱情熄火、延遲、方向不明確"},
{id:"wa02",name:"權杖二",en:"Two of Wands",up:"規劃、遠見、抉擇路口",rev:"計劃受阻、眼高手低、選錯邊"},
{id:"wa03",name:"權杖三",en:"Three of Wands",up:"遠景開展、合作順利、等待收穫",rev:"進展延遲、合作變卦"},
{id:"wa04",name:"權杖四",en:"Four of Wands",up:"慶祝、安定、里程碑、成家",rev:"過渡期不穩、慶祝延後"},
{id:"wa05",name:"權杖五",en:"Five of Wands",up:"競爭、磨合、小衝突",rev:"內耗結束、惡性競爭、暗鬥"},
{id:"wa06",name:"權杖六",en:"Six of Wands",up:"勝利、被肯定、領導眾人",rev:"驕傲招忌、勝利打折、自信受挫"},
{id:"wa07",name:"權杖七",en:"Seven of Wands",up:"堅守立場、以寡敵眾",rev:"腹背受敵、壓力過大、退守"},
{id:"wa08",name:"權杖八",en:"Eight of Wands",up:"快速進展、消息到來、順風",rev:"混亂、訊息誤傳、欲速不達"},
{id:"wa09",name:"權杖九",en:"Nine of Wands",up:"堅韌、防禦、最後一搏",rev:"疲憊、戒心過重、硬撐"},
{id:"wa10",name:"權杖十",en:"Ten of Wands",up:"負荷過重、責任一肩扛",rev:"卸下重擔、學會拒絕、過勞警訊"},
{id:"wa11",name:"權杖侍從",en:"Page of Wands",up:"好奇探索、新學習、好消息",rev:"三分鐘熱度、衝動行事"},
{id:"wa12",name:"權杖騎士",en:"Knight of Wands",up:"衝勁、冒險、快速行動",rev:"魯莽、虎頭蛇尾、橫衝直撞"},
{id:"wa13",name:"權杖王后",en:"Queen of Wands",up:"自信魅力、熱情、獨立",rev:"急躁、嫉妒、自我中心"},
{id:"wa14",name:"權杖國王",en:"King of Wands",up:"領導力、遠見、創業家精神",rev:"專斷、畫大餅、承諾跳票"},
// 聖杯
{id:"cu01",name:"聖杯一",en:"Ace of Cups",up:"新感情、愛的開始、心靈滋養",rev:"情感壓抑、愛未說出口"},
{id:"cu02",name:"聖杯二",en:"Two of Cups",up:"相愛、合作、互相吸引",rev:"關係失衡、單向付出、誤會"},
{id:"cu03",name:"聖杯三",en:"Three of Cups",up:"友誼、慶祝、社群支持",rev:"八卦、排擠、小圈圈是非"},
{id:"cu04",name:"聖杯四",en:"Four of Cups",up:"倦怠、反思、機會在前卻無感",rev:"走出低潮、重新振作"},
{id:"cu05",name:"聖杯五",en:"Five of Cups",up:"失落、哀悼、為失去而痛",rev:"走出傷痛、原諒、重拾希望"},
{id:"cu06",name:"聖杯六",en:"Six of Cups",up:"懷舊、舊人舊事、純真",rev:"沉溺過去、美化回憶、長不大"},
{id:"cu07",name:"聖杯七",en:"Seven of Cups",up:"幻想、選項太多、需聚焦",rev:"看清現實、做出選擇"},
{id:"cu08",name:"聖杯八",en:"Eight of Cups",up:"轉身離開、追尋更深意義",rev:"不甘離開、逃避、繞圈圈"},
{id:"cu09",name:"聖杯九",en:"Nine of Cups",up:"願望實現、心滿意足",rev:"願望打折、物質填不滿心"},
{id:"cu10",name:"聖杯十",en:"Ten of Cups",up:"幸福家庭、圓滿、和諧",rev:"表面和諧、家庭紛擾"},
{id:"cu11",name:"聖杯侍從",en:"Page of Cups",up:"浪漫訊息、敏感、創意萌芽",rev:"情緒化、玻璃心、空想"},
{id:"cu12",name:"聖杯騎士",en:"Knight of Cups",up:"浪漫追求、體貼、跟隨心",rev:"花言巧語、不切實際、情緒勒索"},
{id:"cu13",name:"聖杯王后",en:"Queen of Cups",up:"溫柔直覺、療癒、包容",rev:"過度敏感、界線模糊、犧牲自我"},
{id:"cu14",name:"聖杯國王",en:"King of Cups",up:"情緒成熟、穩重、值得信任",rev:"壓抑情緒、表裡不一、操控"},
// 寶劍
{id:"sw01",name:"寶劍一",en:"Ace of Swords",up:"真相、突破、清晰思路",rev:"誤判、言語傷人、真相被掩蓋"},
{id:"sw02",name:"寶劍二",en:"Two of Swords",up:"僵局、迴避抉擇、暫時平衡",rev:"被迫面對、僵局打破"},
{id:"sw03",name:"寶劍三",en:"Three of Swords",up:"心痛、分離、真相刺痛",rev:"傷痛癒合、原諒、走出來"},
{id:"sw04",name:"寶劍四",en:"Four of Swords",up:"休息、復原、暫停充電",rev:"失眠焦慮、被迫休息、復原不足"},
{id:"sw05",name:"寶劍五",en:"Five of Swords",up:"慘勝、爭執、得不償失",rev:"放下爭執、和解、止損"},
{id:"sw06",name:"寶劍六",en:"Six of Swords",up:"度過難關、漸入平靜、搬遷",rev:"仍在風暴中、舊傷未癒"},
{id:"sw07",name:"寶劍七",en:"Seven of Swords",up:"策略、獨行、取巧",rev:"東窗事發、弄巧成拙、被欺騙"},
{id:"sw08",name:"寶劍八",en:"Eight of Swords",up:"自我設限、想太多動太少",rev:"掙脫框架、重獲自由"},
{id:"sw09",name:"寶劍九",en:"Nine of Swords",up:"失眠、焦慮、夜半擔憂",rev:"焦慮緩解、面對恐懼"},
{id:"sw10",name:"寶劍十",en:"Ten of Swords",up:"谷底、結束、觸底反彈前",rev:"否極泰來、復原中"},
{id:"sw11",name:"寶劍侍從",en:"Page of Swords",up:"好奇、學習、打探消息",rev:"多疑、口舌是非、虎視眈眈"},
{id:"sw12",name:"寶劍騎士",en:"Knight of Swords",up:"果斷、迅捷、直言",rev:"衝動決策、言語傷人、橫衝直撞"},
{id:"sw13",name:"寶劍王后",en:"Queen of Swords",up:"理性獨立、明察秋毫",rev:"冷酷刻薄、孤立、防備心重"},
{id:"sw14",name:"寶劍國王",en:"King of Swords",up:"權威理性、公正判斷、專業",rev:"冷血操控、誤用權威、偏頗"},
// 錢幣
{id:"pe01",name:"錢幣一",en:"Ace of Pentacles",up:"財富新機、務實開始、健康",rev:"錯失良機、財務延遲"},
{id:"pe02",name:"錢幣二",en:"Two of Pentacles",up:"多頭兼顧、彈性、 juggling",rev:"蠟燭兩頭燒、財務吃緊"},
{id:"pe03",name:"錢幣三",en:"Three of Pentacles",up:"團隊合作、專業被肯定",rev:"合作不順、品質打折"},
{id:"pe04",name:"錢幣四",en:"Four of Pentacles",up:"守成、節儉、安全感",rev:"吝嗇、守財、抓太緊反失去"},
{id:"pe05",name:"錢幣五",en:"Five of Pentacles",up:"困境、低潮、需要求助",rev:"走出低谷、援助到來"},
{id:"pe06",name:"錢幣六",en:"Six of Pentacles",up:"施與受、貴人、資源流動",rev:"施捨不均、債務、人情壓力"},
{id:"pe07",name:"錢幣七",en:"Seven of Pentacles",up:"長期耕耘、評估收穫",rev:"白費力氣、需要換方法"},
{id:"pe08",name:"錢幣八",en:"Eight of Pentacles",up:"專注精進、職人精神",rev:"倦怠、瞎忙、品質下滑"},
{id:"pe09",name:"錢幣九",en:"Nine of Pentacles",up:"自足、優雅、財務獨立",rev:"財務依賴、外強中乾"},
{id:"pe10",name:"錢幣十",en:"Ten of Pentacles",up:"富足傳承、家族興旺",rev:"家產紛爭、富不過三代隱憂"},
{id:"pe11",name:"錢幣侍從",en:"Page of Pentacles",up:"學習新技能、務實計劃",rev:"好高騖遠、錯失機會"},
{id:"pe12",name:"錢幣騎士",en:"Knight of Pentacles",up:"踏實、可靠、按部就班",rev:"固執、牛步、錯過時機"},
{id:"pe13",name:"錢幣王后",en:"Queen of Pentacles",up:"持家有道、溫暖務實",rev:"只顧工作忽略生活、焦慮"},
{id:"pe14",name:"錢幣國王",en:"King of Pentacles",up:"穩健富有、值得信賴",rev:"拜金、守財奴、為富不仁"},
];

const SPREADS = {
  1: { name:"單張指引", en:"Single Card",
    desc:"🌟 <b>單張指引</b>：適合每日運勢、是非題、需要一句話指引時。專注、直接。",
    positions:["核心指引"] },
  3: { name:"過去 · 現在 · 未來", en:"Past / Present / Future",
    desc:"🕰️ <b>三張牌</b>：最經典牌陣。左→右依序為 <b>過去</b> → <b>現在</b> → <b>未來</b>，看清脈絡與走向。",
    positions:["過去","現在","未來"] },
  5: { name:"十字牌陣", en:"Five-Card Cross",
    desc:"✝️ <b>十字牌陣（5張）</b>：中央為現況，上為挑戰，左為過去根源，右為未來發展，下為建議/結果。層次完整又不冗長。",
    positions:["現況","挑戰 / 阻礙","過去根源","未來發展","建議 / 結果"] },
  10:{ name:"塞爾特十字", en:"Celtic Cross",
    desc:"🔯 <b>塞爾特十字（10張）</b>：最完整的傳統牌陣，涵蓋現況、挑戰、潛意識、過去、目標、近期未來、自我、環境、希望恐懼與最終結果。",
    positions:["現況","挑戰 / 橫跨","潛意識根源","過去","未來目標 / 王冠","近期未來","自我 / 你的態度","外在環境 / 他人","希望與恐懼","最終結果"] },
};

let currentCount = 1;
let drawn = [];
let flippedCount = 0;

// 背景星空
(function stars(){
  const c = document.getElementById("stars"), x = c.getContext("2d");
  let W,H,pts=[];
  function rs(){W=c.width=innerWidth;H=c.height=innerHeight;
    pts=Array.from({length:140},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.6+.3,s:Math.random()*.5+.1,o:Math.random()}));}
  rs(); addEventListener("resize",rs);
  (function loop(){x.clearRect(0,0,W,H);
    for(const p of pts){p.y+=p.s; if(p.y>H)p.y=0;
      x.globalAlpha=.4+.6*Math.abs(Math.sin(Date.now()/900+p.x));
      x.fillStyle="#ffe9a8"; x.beginPath(); x.arc(p.x,p.y,p.r,0,7); x.fill();}
    x.globalAlpha=1; requestAnimationFrame(loop);})();
})();

const picker=document.getElementById("spreadPicker"),
  desc=document.getElementById("spreadDesc"),
  table=document.getElementById("table"),
  drawBtn=document.getElementById("drawBtn"),
  flipAllBtn=document.getElementById("flipAllBtn"),
  resetBtn=document.getElementById("resetBtn"),
  hint=document.getElementById("progressHint"),
  promptPanel=document.getElementById("promptPanel"),
  promptOutput=document.getElementById("promptOutput");

function renderDesc(){
  desc.innerHTML = SPREADS[currentCount].desc +
    `<br/>本次將抽出 <b style="color:#e8c66a">${currentCount} 張</b>（78 張偉特塔羅，不重複）`;
}
picker.addEventListener("click",e=>{
  const b=e.target.closest(".spread-btn"); if(!b)return;
  document.querySelectorAll(".spread-btn").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
  currentCount=+b.dataset.count; renderDesc(); resetTable();
});
renderDesc();

function shuffle(a){
  const r=[...a];
  for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}
  return r;
}

drawBtn.onclick=()=>{
  drawBtn.disabled=true; drawBtn.textContent="🔮 洗牌中…";
  table.innerHTML=""; table.className=`table spread-${currentCount}`;
  // 洗牌抖動示意
  const tmp=document.createElement("div"); tmp.className="slot";
  tmp.innerHTML=`<div class="card shuffling"><div class="card-inner">
    <div class="face back"><div class="back-pattern"><div class="eye">🔮</div><span>TAROT</span></div></div></div></div>
    <div class="pos-label">洗牌中…</div>`;
  table.appendChild(tmp);
  setTimeout(()=>{
    const allowRev=document.getElementById("allowReversed").checked;
    drawn=shuffle(DECK).slice(0,currentCount).map(c=>({...c,
      img:IMG_BASE+c.id+".jpg", reversed: allowRev ? Math.random()<0.35 : false}));
    flippedCount=0; renderTable(); updateProgress();
    drawBtn.disabled=false; drawBtn.textContent="✨ 洗牌並抽牌";
    flipAllBtn.disabled=false; resetBtn.disabled=false;
    promptPanel.hidden=true; toast("已發牌，點擊卡牌翻開");
  },900);
};

function renderTable(){
  table.innerHTML=""; table.className=`table spread-${currentCount}`;
  drawn.forEach((c,i)=>{
    const pos=SPREADS[currentCount].positions[i];
    const d=document.createElement("div"); d.className="slot"; d.dataset.pos=i;
    d.innerHTML=`
      <div class="pos-label"><b>${i+1}</b>${pos}</div>
      <div class="card" data-i="${i}" title="點擊翻牌">
        <div class="card-inner">
          <div class="face back"><div class="back-pattern"><div class="eye">☾</div><span>TAROT</span><span style="font-size:10px;letter-spacing:.2em">✦ 點我翻牌 ✦</span></div></div>
          <div class="face front"><img src="${c.img}" alt="${c.name}" loading="eager" class="${c.reversed?'reversed':''}"/></div>
        </div>
      </div>
      <div class="card-name" id="nm-${i}">?</div>
      <button class="magnify" data-z="${i}" hidden>🔍 放大看圖</button>`;
    table.appendChild(d);
  });
  table.querySelectorAll(".card").forEach(el=>el.onclick=()=>flip(el));
  table.querySelectorAll(".magnify").forEach(b=>b.onclick=e=>{e.stopPropagation();openZoom(+b.dataset.z);});
  // 預載圖片
  drawn.forEach(c=>{const im=new Image();im.src=c.img;});
}

function flip(el){
  if(el.classList.contains("flipped"))return;
  el.classList.add("flipped");
  const i=+el.dataset.i, c=drawn[i];
  const nm=document.getElementById("nm-"+i);
  nm.innerHTML=`${c.name} <small>${c.en}</small><br/>${c.reversed?'<span class="rev">逆位</span>':'正位'}`;
  el.closest(".slot").classList.add("revealed");
  el.closest(".slot").querySelector(".magnify").hidden=false;
  flippedCount++; updateProgress();
  if(flippedCount===drawn.length) finishAll();
}

flipAllBtn.onclick=()=>{table.querySelectorAll(".card:not(.flipped)").forEach((el,k)=>setTimeout(()=>flip(el),k*220));};
resetBtn.onclick=()=>resetTable();
function resetTable(){
  drawn=[];flippedCount=0;promptPanel.hidden=true;
  flipAllBtn.disabled=true;resetBtn.disabled=true;
  table.className=`table spread-${currentCount}`;
  table.innerHTML=`<div class="empty-tip">🌙 請先按「洗牌並抽牌」，牌會以動畫發到桌上，點牌翻面。<br/>使用偉特塔羅 78 張真實牌圖（含正逆位）。</div>`;
  hint.textContent="尚未抽牌";
}
function updateProgress(){
  hint.textContent = drawn.length?`已翻開 ${flippedCount}/${drawn.length}${flippedCount===drawn.length?" · 全部揭曉 ✨":""}`:"尚未抽牌";
}
function finishAll(){
  buildPrompt(); promptPanel.hidden=false;
  promptPanel.scrollIntoView({behavior:"smooth"});
}

function buildPrompt(){
  const q=document.getElementById("question").value.trim()||"（未填寫，請就整體運勢解讀）";
  const sp=SPREADS[currentCount];
  let lines=drawn.map((c,i)=>`${i+1}. 【${sp.positions[i]}】${c.name}（${c.en}）— ${c.reversed?"逆位":"正位"}：正位關鍵字「${c.up}」／逆位關鍵字「${c.rev}」`);
  promptOutput.textContent =
`請幫我解塔羅牌（使用繁體中文，語氣溫暖、真誠、直白）。

【我的問題】：${q}
【牌陣】：${sp.name}（${sp.en}，共 ${currentCount} 張）
【抽到的牌】（已含正逆位）：
${lines.join("\n")}

【請你這樣解牌】：
1. 先用 2-3 句總覽整組牌給你的第一印象與核心訊息。
2. 依照牌陣位置順序，一張一張解說：位置含義＋牌義＋正逆位如何影響，並連結到我的問題。
3. 指出牌與牌之間的呼應（元素、數字、連續性、矛盾處）。
4. 最後給我 3 個具體可執行的建議，以及一句祝福。
5. 如果問題含時間，請給出可能 mf的時間感；如果是非題，請給出傾向與提醒。

牌圖為偉特塔羅 Rider-Waite，請以正統牌義為基礎解讀。`;
}

document.getElementById("copyBtn").onclick=async()=>{
  try{await navigator.clipboard.writeText(promptOutput.textContent);
    document.getElementById("copyTip").textContent="✅ 已複製！去 ChatGPT / Claude / Gemini 貼上即可解牌";
    toast("Prompt 已複製");
  }catch{ 
    const r=document.createRange();r.selectNodeContents(promptOutput);
    const s=getSelection();s.removeAllRanges();s.addRange(r);
    document.execCommand("copy");s.removeAllRanges();toast("Prompt 已複製");
  }
};

/* ---------- 匯出 PDF ---------- */
const exportBtn=document.getElementById("exportBtn"),
  exportModal=document.getElementById("exportModal"),
  interpretModal=document.getElementById("interpretModal"),
  aiResultInput=document.getElementById("aiResultInput");

exportBtn.onclick=()=>{
  if(!drawn.length){toast("請先抽牌");return;}
  if(flippedCount!==drawn.length){toast("請先把所有牌翻開再匯出");return;}
  exportModal.hidden=false;
};
document.getElementById("exportCancel").onclick=()=>exportModal.hidden=true;
document.getElementById("interpretCancel").onclick=()=>interpretModal.hidden=true;
document.getElementById("interpretBack").onclick=()=>{interpretModal.hidden=true;exportModal.hidden=false;};
document.getElementById("exportNoBtn").onclick=()=>{exportModal.hidden=true;doExport("");};
document.getElementById("exportYesBtn").onclick=()=>{exportModal.hidden=true;interpretModal.hidden=false;aiResultInput.focus();};
document.getElementById("interpretConfirm").onclick=()=>{
  const v=aiResultInput.value.trim();
  if(!v){toast("請先貼上 AI 解牌結果，或按上一步選直接匯出");return;}
  interpretModal.hidden=true; doExport(v);
};
exportModal.addEventListener("click",e=>{if(e.target===exportModal)exportModal.hidden=true;});
interpretModal.addEventListener("click",e=>{if(e.target===interpretModal)interpretModal.hidden=true;});

function escHtml(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}

// 極簡 markdown 渲染（AI 解牌 / prompt 內的 **粗體**、### 標題、--- 分隔線、換行）
function md(t){
  let h=escHtml(t);
  h=h.replace(/^#{1,4}\s?(.*)$/gm,"<h4>$1</h4>");
  h=h.replace(/^---+\s*$/gm,"<hr/>");
  h=h.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>");
  h=h.replace(/^\*\s?(.*)$/gm,"• $1");
  h=h.split(/\n{2,}/).map(b=>{
    if(/^\s*<(h4|hr)/.test(b))return b;
    return "<p>"+b.replace(/\n/g,"<br/>")+"</p>";
  }).join("");
  return h.replace(/<p>\s*<\/p>/g,"");
}

// 把遠端牌圖轉成 dataURL，列印時穩定內嵌
async function imgToDataURL(url){
  try{
    const r=await fetch(url,{mode:"cors"}); const b=await r.blob();
    return await new Promise(res=>{const fr=new FileReader();fr.onload=()=>res(fr.result);fr.onerror=()=>res(url);fr.readAsDataURL(b);});
  }catch{ return url; }
}

async function doExport(aiText){
  toast("正在準備列印，請稍候…");
  exportBtn.disabled=true; exportBtn.textContent="⏳ 準備中…";
  try{
    const q=document.getElementById("question").value.trim()||"（未填寫）";
    const sp=SPREADS[currentCount];
    const date=new Date().toLocaleString("zh-TW",{hour12:false});
    const dataUrls=await Promise.all(drawn.map(c=>imgToDataURL(c.img)));
    const cardsHtml=drawn.map((c,i)=>`
      <div class="pdf-card">
        <img src="${dataUrls[i]}" class="${c.reversed?'rev':''}"/>
        <div>
          <span class="pos">${i+1} · ${escHtml(sp.positions[i])}</span>
          <h4>${escHtml(c.name)} ${escHtml(c.en)} · ${c.reversed?"逆位":"正位"}</h4>
          <p><b class="kw-b">正位：</b>${escHtml(c.up)}</p>
          <p><b class="kw-b">逆位：</b>${escHtml(c.rev)}</p>
        </div>
      </div>`).join("");
    const aiBlock=aiText
      ? `<div class="pdf-sec"><h2>✨ AI 解牌結果</h2><div class="pdf-ai">${md(aiText)}</div></div>`
      : ``;
    const report=document.getElementById("pdfReport");
    report.innerHTML=`
      <div class="pdf-cover">
        <span class="pdf-badge">MYSTIC TAROT · 神秘塔羅占卜</span>
        <h1>🔮 塔羅占卜紀錄</h1>
        <p>${escHtml(sp.name)}（${escHtml(sp.en)}，共 ${currentCount} 張）· ${escHtml(date)}</p>
      </div>
      <div class="pdf-body">
        <div class="pdf-sec"><h2>❓ 我的問題</h2><div class="pdf-q">${escHtml(q)}</div></div>
        <div class="pdf-sec"><h2>🃏 抽到的牌</h2><div class="pdf-cards">${cardsHtml}</div></div>
        <div class="pdf-sec"><h2>📋 給 AI 的解牌 Prompt</h2><div class="pdf-prompt">${md(promptOutput.textContent)}</div></div>
        ${aiBlock}
      </div>
      <div class="pdf-foot">Rider-Waite 1909 公有領域牌圖 · 僅供娛樂與自我覺察參考 · mystic tarot</div>`;
    // 等圖片載入再列印，避免空白圖
    await Promise.all([...report.querySelectorAll("img")].map(im=>im.complete?1:new Promise(r=>{im.onload=r;im.onerror=r;})));
    document.title=`塔羅占卜_${sp.name}_${new Date().toISOString().slice(0,10)}`;
    toast("請在列印視窗選「另存為 PDF」");
    setTimeout(()=>window.print(),350);
  }catch(err){ console.error(err); toast("匯出失敗，請再試一次"); }
  finally{
    exportBtn.disabled=false; exportBtn.textContent="📄 匯出 PDF";
  }
}

// 放大
const zoom=document.getElementById("zoom");
function openZoom(i){
  const c=drawn[i];
  document.getElementById("zoomImg").src=c.img;
  document.getElementById("zoomImg").className=c.reversed?"reversed":"";
  document.getElementById("zoomImg").style.transform=c.reversed?"rotate(180deg)":"";
  document.getElementById("zoomTitle").textContent=`${i+1}. ${c.name} ${c.en} · ${c.reversed?"逆位":"正位"}`;
  document.getElementById("zoomKw").textContent=`正位：${c.up} ／ 逆位：${c.rev}`;
  zoom.hidden=false;
}
document.getElementById("zoomClose").onclick=()=>zoom.hidden=true;
zoom.onclick=e=>{if(e.target===zoom)zoom.hidden=true;};

function toast(msg){
  const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),2200);
}
