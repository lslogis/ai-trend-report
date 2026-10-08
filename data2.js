const groups=[
{key:"news",label:"📰 AI 뉴스",items:[
{t:"딥시크, 최대 150억 달러 펀딩 임박 — CATL·텐센트 주도",img:"images/img17.png",alt:"딥시크 대규모 펀딩 소식을 전한 기사 화면",u:"https://superhits979.com/2026/10/06/deepseek-to-raise-at-least-12-billion-in-tencent-backed-funding-bloomberg-news-reports/",d:"2026-10-06",s:"Bloomberg",alt:"딥시크 대규모 펀딩 소식을 전한 기사 화면",q:["중국 AI 회사 딥시크가 최소 800억 위안(약 119억 달러)을 모으는 중이에요.","투자자가 몰리면서 최대 1,000억 위안(약 149억 달러)까지 커질 수 있어요.","배터리 회사 CATL과 텐센트가 가장 큰 손으로 참여해요."],w:"AI 회사가 아니라 'AI 나라'를 짓는 수준의 돈이 모이고 있어요. 중국이 미국 기술 없이도 가는 길을 굳히는 신호예요.",a:["딥시크 펀딩 타임라인 — 왜 이렇게 돈이 몰릴까","CATL이 AI에 투자하는 이유"]},
{t:"SignSplit, 시드 4억 달러·밸류 10억 달러 — '사인드 데이터' 인프라",u:"https://www.morningstar.com/news/pr-newswire/20261005ph62853/signsplit-secures-400-million-strategic-seed-round-at-1-billion-valuation",d:"2026-10-05",s:"PR Newswire",q:["AI 학습용 데이터에 '누가 동의했고 어떻게 써도 되는지'를 묶어 파는 회사가 나왔어요.","글로벌 핀테크 W Group에서 시드 4억 달러를 받았고, 회사 가치는 10억 달러로 평가받았어요.","데이터를 준 개인·기관에게 돈을 돌려주는 구조예요."],w:"AI의 밥(데이터)에도 출처 표시와 사용료가 붙기 시작했어요. '동의 경제'가 AI 공급망의 새 규칙이 될 수 있어요.",a:["AI 데이터 저작권 전쟁 — 누가 돈을 받는가","사인드 데이터가 뭔지 3분 설명"]},
{t:"SafeWorld, 로봇 안전 시뮬레이션으로 1,220만 달러 시드 유치",img:"images/img18.png",alt:"SafeWorld의 로봇 안전 시뮬레이션 소식을 전한 TechCrunch 기사 화면",u:"https://techcrunch.com/2026/10/05/can-safeworld-convince-people-that-gen-ai-robots-wont-hurt-them/",d:"2026-10-05",s:"TechCrunch",alt:"SafeWorld의 로봇 안전 시뮬레이션 소식을 전한 TechCrunch 기사 화면",q:["생성형 AI가 조종하는 로봇의 위험을 미리 시험하는 회사가 나왔어요.","카네기멜론 교수가 창업했고 Shine Capital·a16z Speedrun이 1,220만 달러를 넣었어요.","실제 사람이 나오는 시뮬레이션으로 로봇의 돌발 행동을 검증해요."],w:"로봇이 일상에 들어오려면 '안전 성적표'가 필요해요. 자동차 충돌 테스트처럼 로봇 안전 테스트 시장이 열리는 거예요.",a:["피지컬 AI 시대의 안전 — 누가 검증하나","로봇 사고 사례와 안전 기준"]},
{t:"Instinct, AI 에이전트를 단체 채팅으로 확장",img:"images/img19.png",alt:"Instinct의 단체 채팅 AI 에이전트 소식을 전한 TechCrunch 기사 화면",u:"https://techcrunch.com/2026/10/05/instinct-brings-its-ai-agent-to-group-chats-even-for-friends-without-an-account/",d:"2026-10-05",s:"TechCrunch",alt:"Instinct의 단체 채팅 AI 에이전트 소식을 전한 TechCrunch 기사 화면",q:["기업 가치 100억 달러의 AI 에이전트 스타트업 Instinct가 단체 채팅 기능을 내놨어요.","가입하지 않은 친구가 있는 단체방에서도 에이전트가 여행 계획·티켓팅을 대신해요.","개인 정보는 허락 없이 공유되지 않게 분리 설계했어요."],w:"AI 비서가 '내 비서'에서 '우리 방 비서'가 됐어요. 소비자 AI 전쟁의 전선이 단체 대화로 넓어지는 거예요.",a:["Meta Muse vs Instinct — 소비자 에이전트 대결","단체방 AI의 프라이버시 설계"]},
{t:"HackerRank 'Chakra', AI 면접관 정식 출시",u:"https://aiagentstore.ai/ai-agent-news/today",d:"2026-10-05",s:"AI Agent Store",q:["코딩 평가 회사 HackerRank가 AI 면접관 Chakra를 정식으로 내놨어요.","지원자가 실제 코드 화면에서 작업하는 걸 보고 꼬리질문을 던져요.","베타 기간에 약 50만 건의 인터뷰를 처리했어요."],w:"면접관이 AI가 되는 시대예요. 채용의 첫 관문이 자동화되면서 'AI에게 잘 보이는 법'이 새 스킬이 될 수 있어요.",a:["AI 면접관에게 통과하는 법","채용 자동화의 명암"]},
{t:"Grok, '예수는 가짜 신이 아니다' 발언으로 수백만 뷰 바이럴",u:"https://www.christianpost.com/news/grok-ai-affirms-divinity-of-christ-citing-historical-record.html",d:"2026-10-06",s:"Christian Post",q:["xAI의 Grok가 예수의 신성을 인정하는 답변을 내놔 수백만 조회수를 기록했어요.","'가짜 신들을 지워달라'는 요청에 예수만 남긴 이미지를 만들면서 시작됐어요.","삭제되기 전 스레드가 크게 퍼졌어요."],w:"AI의 종교·가치관 답변이 그대로 바이럴되는 시대예요. 'AI는 중립적이어야 하는가' 논쟁에 불이 붙어요.",a:["AI의 종교적 편향 논쟁사","Based Grok 밈 현상"]},
{t:"연구자들이 '중국발 AI 에이전트 함대' 추적 중",u:"https://techcrunch.com/category/artificial-intelligence/",d:"2026-10-05",s:"TechCrunch",q:["보안 연구자들이 중국발로 보이는 대규모 AI 에이전트 무리의 활동을 쫓고 있어요.","자동화된 에이전트 수백 개가 정보를 긁어모으는 정황이에요.","AI 에이전트가 해커의 새 도구가 되는 현실이 가시화되고 있어요."],w:"AI 에이전트가 해커의 새 도구가 되고 있어요. 에이전트 보안이 이달 내내 반복되는 화두인 이유예요.",a:["에이전트 함대란? — 자동화 공격의 새 얼굴","AI 에이전트 보안 체크리스트"]},
{t:"Runway, 로봇용 오픈웨이트 'Praxis-1' 공개",img:"images/img20.png",alt:"Runway의 로봇용 오픈웨이트 모델 Praxis-1 소식을 전한 기사 화면",u:"https://roboticsandautomationnews.com/2026/10/01/runway-moves-into-robotics-with-open-weight-praxis-1-ai-model/105402/",d:"2026-10-01",s:"Robotics & Automation News",alt:"Runway의 로봇용 오픈웨이트 모델 Praxis-1 소식을 전한 기사 화면",q:["영상 AI로 유명한 Runway가 로봇용 AI 모델 Praxis-1을 내놨어요.","비싼 로봇 시연 대신 영상 학습으로 물체의 움직임을 배워 로봇을 조종해요.","오픈웨이트라 누구나 받아서 쓸 수 있어요."],w:"영상 만드는 AI와 로봇 움직이는 AI의 경계가 사라져요. '본 것'으로 '움직임'을 배우는 피지컬 AI의 새 길이예요.",a:["Runway의 로보틱스 진출이 의미하는 것","월드 액션 모델 쉽게 설명"]},
{t:"Pandektes, AI 법률 리서치로 1,580만 달러 시리즈A",u:"https://www.yourinfodaily.com/p/pandektes-raises-158m-series-a-led-by-alstin-capital-for-ai-legal-research",d:"2026-10-05",s:"YourInfoDaily",q:["코펜하겐 법률 AI 스타트업 Pandektes가 1,580만 달러를 유치했어요.","법령·판례를 구조화해 변호사가 검색하는 플랫폼이에요.","1년 새 매출이 6배 뛰고 500곳 넘는 로펌이 쓰고 있어요."],w:"전문직 AI는 '자료 정리'에서 먼저 돈을 벌어요. 법률처럼 문서가 많은 분야가 AI의 첫 사냥터예요.",a:["법률 AI 시장의 유럽 강자들","전문직 AI는 왜 리서치부터 먹는가"]},
{t:"Volantis, AI 칩 광연결로 8,800만 달러 유치",u:"https://www.maglazana.com/2026/10/05/volantis-secures-88-million-to-tackle-ai-chip-bottlenecks/",d:"2026-10-05",s:"Reuters",q:["AI 칩과 메모리를 빛(광)으로 잇는 기술로 8,800만 달러를 모았어요.","전기 배선보다 멀리까지 연결해 더 큰 메모리를 붙일 수 있어요.","큰 모델을 더 빠르고 싸게 돌리는 게 목표예요."],w:"AI 경쟁의 다음 병목은 '칩과 메모리를 잇는 길'이에요. 전선 대신 빛으로 잇겠다는 발상이에요.",a:["AI 인프라 병목 지도 — 다음 전쟁터는 메모리 연결","광 연결을 쉽게 설명"]}
]},
{key:"papers",label:"📄 논문",items:[
{t:"Towards Looped Models Done Right, Part II — 반복 계산을 제대로 쓰는 법",u:"https://arxiv.org/abs/2610.06833",d:"2026-10-05",s:"arXiv · HF Papers",q:["같은 계산을 반복하는 '루프형' 언어 모델을 제대로 쓰는 법을 다룬 논문이에요.","반복이 안정점에 가까워지면 중간 과정을 건너뛰어도 된다는 원리를 찾았어요.","학습·생성·강화학습을 각각 최대 2배 빠르게 만드는 기법을 내놨어요."],w:"빙빙 도는 계산에서 '어차피 같은 자리로 돌아오면' 중간 걸음을 생략하는 거예요. AI 다이어트의 새 비법이에요.",a:["루프형 모델이 뭔지 쉽게 설명","반복 계산을 줄이는 아이디어 모음"]},
{t:"RealtimeWAM — 한 번에 보고 움직이는 실시간 로봇 두뇌",u:"https://arxiv.org/abs/2610.06617",d:"2026-10-05",s:"arXiv · HF Papers",q:["로봇이 보고 움직이는 '월드 액션 모델'을 실시간으로 빠르게 만든 연구예요.","한 번의 계산으로 행동을 정하고, 영상·행동 두뇌가 동시에 돌아가게 했어요.","성능은 거의 그대로인데 속도는 H100에서 25배 빨라졌어요."],w:"로봇의 '생각하는 시간'을 25분의 1로 줄인 거예요. 실시간 로봇이 현실이 되는 순간이에요.",a:["로봇이 생각하며 움직이는 속도 전쟁","월드 액션 모델 쉽게 설명"]},
{t:"Representation-Space MMD — 확산 언어 모델의 새 학습법",u:"https://arxiv.org/abs/2610.06648",d:"2026-10-05",s:"arXiv · HF Papers",q:["한 번에 문장을 그려내는 '확산 언어 모델'을 더 잘 학습시키는 방법이에요.","만든 글과 진짜 글의 '느낌 차이'를 재서 줄이는 방식이에요.","수학·코딩 시험에서 정확도는 유지하며 더 병렬로 빨리 만들 수 있게 됐어요."],w:"그림 AI의 비법을 글 AI에 가져온 거예요. 다음 세대 언어 모델의 학습법이 바뀌는 중이에요.",a:["확산 언어 모델이 뭔지 3분 설명","언어 모델 학습법의 세대 교체"]}
]},
{key:"data",label:"🗂️ 데이터셋",items:[
{t:"wm_imagined — 월드 모델이 '상상'한 로봇 조작 데이터",u:"https://huggingface.co/datasets/Cirquar-Tech/wm_imagined",d:"2026-10-06",s:"Hugging Face",q:["월드 모델이 만들어낸 로봇 조작 '상상 데이터'를 모은 저장소예요.","RoboTwin 2.0의 50개 작업과 실제 Aloha 로봇 9개 작업을 다뤄요.","실제 로봇을 움직이지 않고도 상상으로 연습한 기록이라 학습 재료로 쓸 수 있어요."],w:"로봇이 꿈속에서 연습한 기록을 공유하는 셈이에요. 비싼 실물 실험 없이도 로봇 AI를 키우는 새 길이에요.",a:["월드 모델이 데이터를 만드는 시대","실측 vs 상상 데이터 논쟁"]},
{t:"DeskForge-1M — 화면을 읽는 AI를 위한 121만 장의 데스크톱",u:"https://huggingface.co/datasets/docling-project/DeskForge-1M",d:"2026-10-06",s:"Hugging Face",q:["ETH 취리히·IBM·마이크로소프트가 함께 만든 컴퓨터 화면 데이터셋이에요.","121만 장의 데스크톱 화면에 버튼·창·텍스트 1억 5,970만 개를 표시해뒀어요.","마우스 클릭 91만 번의 전후 화면도 담겨 있어 화면 조작 AI의 교과서가 돼요."],w:"AI에게 '컴퓨터 화면 읽기' 교과서를 주는 거예요. 화면을 보고 클릭하는 에이전트의 눈이 여기서 길러져요.",a:["컴퓨터를 쓰는 AI는 무엇을 보고 배울까","GUI 에이전트 학습 데이터의 세계"]},
{t:"tiktok-5.6B-videos — 56억 개 틱톡 영상의 기록",u:"https://huggingface.co/datasets/datasocial/tiktok-5.6B-videos",d:"2026-10-06",s:"Hugging Face",q:["틱톡 영상 56억 개의 기록을 모은 초대형 데이터셋이에요.","숏폼 영상이 어떻게 퍼지고 소비되는지 연구할 수 있어요.","추천 AI와 트렌드 분석의 재료로 주목받아요."],w:"숏폼 세상의 심장박동 기록 같은 데이터예요. 56억 개라는 규모 자체가 연구의 새 지평이에요.",a:["추천 알고리즘은 무엇을 보고 배울까","숏폼 트렌드를 데이터로 읽기"]}
]}
];
const tonightRoot=document.getElementById('tonight-report');const morningRoot=document.getElementById('morning-report');const eveningRoot=document.getElementById('evening-report');const latestRoot=document.getElementById('report');const oldRoot=document.getElementById('old-report');let n=0;
function esc(v){return String(v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function card(x,key,label){n++;const image=x.img?'<figure class="card-media"><img src="'+esc(x.img)+'" alt="'+esc(x.alt)+'" loading="lazy"></figure>':'';const copyIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';const shareIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="6" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="18" cy="19" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m8.3 10.9 7.4-4.5M8.3 13.1l7.4 4.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';return '<article class="card '+key+(x.img?' image-card':'')+'" data-url="'+esc(x.u)+'">'+image+'<div class="card-body"><div class="meta"><span class="tag">'+esc(label)+'</span><time>'+esc(x.d)+'</time><span>· '+esc(x.s)+'</span></div><h4>'+esc(x.t)+'</h4><ul class="summary">'+x.q.map(function(v){return '<li>'+esc(v)+'</li>'}).join('')+'</ul><p class="why"><strong>왜 중요한가요?</strong> '+esc(x.w)+'</p><p class="angles"><b>콘텐츠 각도</b>'+x.a.map(function(v){return ' · '+esc(v)}).join('')+'</p><div class="source"><div class="card-actions"><a href="'+esc(x.u)+'" target="_blank" rel="noopener noreferrer" aria-label="'+esc(x.t)+' 원문 열기">원문 보기</a><button class="card-action copy-card" type="button" aria-haspopup="menu" aria-expanded="false">'+copyIcon+'복사</button><button class="card-action share-card" type="button">'+shareIcon+'공유</button></div><span class="index">'+String(n).padStart(2,'0')+'</span></div></div></article>'}
function renderGroup(g,root){const section=document.createElement('section');section.className='section '+g.key;section.dataset.category=g.key;const note=g.note?'<span>'+esc(g.note)+'</span>':'<span>'+g.items.length+'개의 신호</span>';section.innerHTML='<div class="section-title"><h3>'+esc(g.label)+'</h3>'+note+'</div><div class="grid">'+g.items.map(function(x){return card(x,g.key,g.label)}).join('')+'</div>';root.appendChild(section)}
edition1Groups.forEach(function(g){renderGroup(g,tonightRoot)});edition2Groups.forEach(function(g){renderGroup(g,morningRoot)});edition3Groups.forEach(function(g){renderGroup(g,eveningRoot)});edition4Groups.forEach(function(g){renderGroup(g,latestRoot)});groups.forEach(function(g){renderGroup(g,oldRoot)});
const searchInput=document.getElementById('report-search');
const clearButton=document.getElementById('search-clear');
const searchStatus=document.getElementById('search-status');
const emptyState=document.getElementById('empty');
const cards=Array.from(document.querySelectorAll('.card'));
const toast=document.getElementById('toast');
let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(function(){toast.classList.remove('show')},2200)}
function cardText(card){
  const title=card.querySelector('h4').textContent.trim();
  const meta=Array.from(card.querySelectorAll('.meta time,.meta span:not(.tag)')).map(function(el){return el.textContent.trim().replace(/^·\s*/, '')}).join(' · ');
  const bullets=Array.from(card.querySelectorAll('.summary li')).map(function(li){return '• '+li.textContent.trim()}).join('\n');
  const why=card.querySelector('.why').textContent.trim();
  const angles=card.querySelector('.angles').textContent.trim().replace(/\s*·\s*/g,' · ');
  return [title,meta,bullets,why,angles,'원문: '+card.dataset.url].join('\n\n');
}
function fallbackCopy(text){const area=document.createElement('textarea');area.value=text;area.setAttribute('readonly','');area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();const ok=document.execCommand('copy');area.remove();return ok}
function copyText(text){if(navigator.clipboard&&navigator.clipboard.writeText){return navigator.clipboard.writeText(text).catch(function(){if(!fallbackCopy(text))throw new Error('copy failed')})}return Promise.resolve(fallbackCopy(text)).then(function(ok){if(!ok)throw new Error('copy failed')})}
function canvasLines(ctx,text,maxWidth){
  const lines=[];let line='';
  Array.from(String(text)).forEach(function(char){const test=line+char;if(line&&ctx.measureText(test).width>maxWidth){lines.push(line.trim());line=char.trimStart()}else{line=test}});
  if(line.trim())lines.push(line.trim());return lines;
}
function drawLines(ctx,lines,x,y,lineHeight){lines.forEach(function(line){ctx.fillText(line,x,y);y+=lineHeight});return y}
function drawCover(ctx,img,x,y,w,h){const scale=Math.max(w/img.naturalWidth,h/img.naturalHeight);const sw=w/scale,sh=h/scale;const sx=(img.naturalWidth-sw)/2,sy=(img.naturalHeight-sh)/2;ctx.drawImage(img,sx,sy,sw,sh,x,y,w,h)}
function readyImage(card){const img=card.querySelector('.card-media img');if(!img)return Promise.resolve(null);if(img.complete&&img.naturalWidth)return Promise.resolve(img);return new Promise(function(resolve){img.addEventListener('load',function(){resolve(img)},{once:true});img.addEventListener('error',function(){resolve(null)},{once:true})})}
function renderCardPng(card){
  return Promise.all([document.fonts?document.fonts.ready:Promise.resolve(),readyImage(card)]).then(function(values){
    const image=values[1],W=1200,side=76,max=W-side*2;const work=document.createElement('canvas');work.width=W;work.height=2400;const ctx=work.getContext('2d');
    const style=getComputedStyle(card),bodyStyle=getComputedStyle(document.body),ink=bodyStyle.color,bg=style.backgroundColor,cat=style.borderTopColor,soft=getComputedStyle(card.querySelector('.why')).backgroundColor,muted=getComputedStyle(card.querySelector('.meta')).color;
    ctx.fillStyle=bg;ctx.fillRect(0,0,W,work.height);ctx.fillStyle=cat;ctx.fillRect(0,0,W,16);let y=16;
    if(image){drawCover(ctx,image,0,y,W,470);y+=470}
    y+=68;const tag=card.querySelector('.tag').textContent.trim();ctx.font='700 25px "Noto Sans KR", sans-serif';const tagW=Math.ceil(ctx.measureText(tag).width)+34;ctx.fillStyle=soft;ctx.fillRect(side,y-30,tagW,44);ctx.fillStyle=cat;ctx.fillText(tag,side+17,y);const meta=Array.from(card.querySelectorAll('.meta time,.meta span:not(.tag)')).map(function(el){return el.textContent.trim().replace(/^·\s*/,'')}).join(' · ');ctx.fillStyle=muted;ctx.font='600 23px "Noto Sans KR", sans-serif';ctx.fillText(meta,side+tagW+18,y);y+=72;
    ctx.fillStyle=ink;ctx.font='700 49px "Noto Sans KR", sans-serif';const titleLines=canvasLines(ctx,card.querySelector('h4').textContent.trim(),max);y=drawLines(ctx,titleLines,side,y,68);y+=28;
    ctx.font='400 31px "Gowun Dodum", "Noto Sans KR", sans-serif';card.querySelectorAll('.summary li').forEach(function(li){const lines=canvasLines(ctx,li.textContent.trim(),max-45);ctx.fillStyle=cat;ctx.beginPath();ctx.arc(side+8,y-9,6,0,Math.PI*2);ctx.fill();ctx.fillStyle=ink;y=drawLines(ctx,lines,side+38,y,47);y+=13});
    y+=22;const whyText=card.querySelector('.why').textContent.trim();ctx.font='600 27px "Noto Sans KR", sans-serif';const whyLines=canvasLines(ctx,whyText,max-64),whyH=whyLines.length*42+48;ctx.fillStyle=soft;ctx.fillRect(side,y,max,whyH);ctx.fillStyle=ink;y=drawLines(ctx,whyLines,side+32,y+43,42);y+=30;
    const angles=card.querySelector('.angles').textContent.trim().replace(/\s*·\s*/g,' · ');ctx.font='500 24px "Noto Sans KR", sans-serif';ctx.fillStyle=muted;const angleLines=canvasLines(ctx,angles,max);y=drawLines(ctx,angleLines,side,y,38);y+=34;
    ctx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue('--line').trim()||muted;ctx.fillRect(side,y,max,2);y+=43;ctx.font='700 22px "Noto Sans KR", sans-serif';ctx.fillStyle=cat;let host=card.dataset.url;try{host=new URL(host).hostname.replace(/^www\./,'')}catch(e){}ctx.fillText(host,side,y);ctx.fillStyle=muted;ctx.textAlign='right';ctx.fillText('AI 트렌드 리포트',W-side,y);ctx.textAlign='left';y+=55;
    const out=document.createElement('canvas');out.width=W;out.height=Math.min(work.height,Math.ceil(y));out.getContext('2d').drawImage(work,0,0,W,out.height,0,0,W,out.height);
    return new Promise(function(resolve,reject){out.toBlob(function(blob){blob?resolve(blob):reject(new Error('image failed'))},'image/png')});
  });
}
function safeFileName(card){return card.querySelector('h4').textContent.trim().replace(/[\\/:*?"<>|]/g,'').slice(0,55)||'ai-trend-card'}
function downloadBlob(blob,name){const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download=name+'.png';document.body.appendChild(link);link.click();link.remove();setTimeout(function(){URL.revokeObjectURL(link.href)},1000)}
function copyCardImage(card){
  const png=renderCardPng(card);
  if(navigator.clipboard&&navigator.clipboard.write&&window.ClipboardItem){return navigator.clipboard.write([new ClipboardItem({'image/png':png})]).then(function(){return 'copied'})}
  return png.then(function(blob){downloadBlob(blob,safeFileName(card));return 'downloaded'});
}
const copyMenu=document.getElementById('copy-menu');let activeCopyCard=null,activeCopyButton=null;
function closeCopyMenu(returnFocus){copyMenu.hidden=true;if(activeCopyButton){activeCopyButton.setAttribute('aria-expanded','false');if(returnFocus)activeCopyButton.focus()}activeCopyCard=null;activeCopyButton=null}
function openCopyMenu(button){
  if(activeCopyButton===button&&!copyMenu.hidden){closeCopyMenu(false);return}
  closeCopyMenu(false);activeCopyButton=button;activeCopyCard=button.closest('.card');button.setAttribute('aria-expanded','true');copyMenu.hidden=false;
  if(!matchMedia('(max-width: 800px)').matches){const r=button.getBoundingClientRect(),w=244;copyMenu.style.left=Math.max(10,Math.min(innerWidth-w-10,r.right-w))+'px';copyMenu.style.top=Math.min(innerHeight-copyMenu.offsetHeight-10,r.bottom+8)+'px'}
  requestAnimationFrame(function(){const first=copyMenu.querySelector('.copy-choice');if(first)first.focus()});
}
function updateShareButtons(){const mobile=matchMedia('(max-width: 800px)').matches;document.querySelectorAll('.share-card').forEach(function(button){button.classList.toggle('available',mobile)});if(!copyMenu.hidden)closeCopyMenu(false)}
updateShareButtons();
window.addEventListener('resize',updateShareButtons);
copyMenu.addEventListener('click',function(event){
  const choice=event.target.closest('.copy-choice');if(!choice||!activeCopyCard)return;const card=activeCopyCard;
  if(choice.dataset.copyMode==='text'){copyText(cardText(card)).then(function(){showToast('카드 텍스트를 복사했어요.')}).catch(function(){showToast('복사하지 못했어요. 다시 시도해 주세요.')});closeCopyMenu(false);return}
  showToast('카드 이미지를 만들고 있어요…');closeCopyMenu(false);copyCardImage(card).then(function(result){showToast(result==='copied'?'카드 이미지를 복사했어요.':'이미지 복사를 지원하지 않아 PNG로 저장했어요.')}).catch(function(){showToast('이미지를 복사하지 못했어요. 다시 시도해 주세요.')});
});
document.addEventListener('keydown',function(event){if(event.key==='Escape'&&!copyMenu.hidden)closeCopyMenu(true)});
document.addEventListener('click',function(event){
  const button=event.target.closest('.card-action');
  if(button){const item=button.closest('.card');const text=cardText(item);const title=item.querySelector('h4').textContent.trim();
    if(button.classList.contains('copy-card')){openCopyMenu(button);return}
    if(button.classList.contains('share-card')){closeCopyMenu(false);if(navigator.share){navigator.share({title:title,text:text,url:item.dataset.url}).then(function(){showToast('공유했어요.')}).catch(function(error){if(error&&error.name!=='AbortError')showToast('공유하지 못했어요. 다시 시도해 주세요.')})}else{copyText(text).then(function(){showToast('공유할 내용을 복사했어요.')}).catch(function(){showToast('공유 기능을 사용할 수 없어요.')})}return}
  }
  if(!copyMenu.hidden&&!event.target.closest('.copy-menu'))closeCopyMenu(false);
});
let activeFilter='all';
function normalise(v){return String(v).trim().toLocaleLowerCase('ko-KR')}
function applyFilters(shouldScroll){
  const query=normalise(searchInput.value);let visibleCount=0;
  document.querySelectorAll('.section').forEach(function(section){
    const categoryMatch=activeFilter==='all'||section.dataset.category===activeFilter;let sectionCount=0;
    section.querySelectorAll('.card').forEach(function(item){
      const queryMatch=!query||normalise(item.textContent).includes(query);
      const visible=categoryMatch&&queryMatch;
      item.classList.toggle('search-hidden',!visible);
      if(visible){sectionCount++;visibleCount++}
    });
    section.classList.toggle('hidden',sectionCount===0);
  });
  document.querySelectorAll('.edition-block').forEach(function(edition){edition.classList.toggle('search-hidden',!edition.querySelector('.section:not(.hidden)'))});
  clearButton.hidden=!query;
  const categoryLabel=document.querySelector('.legend button[aria-pressed="true"]').textContent.trim().replace(/\s+\d+$/,'');
  searchStatus.textContent=query?'“'+searchInput.value.trim()+'” 검색 결과 '+visibleCount+'개 · '+categoryLabel:'전체 '+visibleCount+'개 항목';
  emptyState.textContent=query?'“'+searchInput.value.trim()+'” 검색 결과가 없습니다.':'선택한 카테고리에 항목이 없습니다.';
  emptyState.style.display=visibleCount?'none':'block';
  if(shouldScroll&&visibleCount){const first=document.querySelector('.section:not(.hidden)');if(first)first.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}
}
document.querySelectorAll('.legend button').forEach(function(btn){btn.addEventListener('click',function(){activeFilter=btn.dataset.filter;document.querySelectorAll('.legend button').forEach(function(b){b.setAttribute('aria-pressed',String(b===btn))});applyFilters(activeFilter!=='all')})});
searchInput.addEventListener('input',function(){applyFilters(false)});
searchInput.addEventListener('keydown',function(e){if(e.key==='Escape'&&searchInput.value){searchInput.value='';applyFilters(false)}});
clearButton.addEventListener('click',function(){searchInput.value='';applyFilters(false);searchInput.focus()});
applyFilters(false);