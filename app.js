let n=0;
let EDITIONS=[];
let SQLDB=null;
function rows(sql){const r=SQLDB.exec(sql);return r.length?r[0].values:[]}
async function loadEditions(){
  const SQL=await initSqlJs({locateFile:function(f){return f}});
  const buf=await (await fetch('editions.db')).arrayBuffer();
  if(!buf.byteLength) throw new Error('empty db');
  SQLDB=new SQL.Database(new Uint8Array(buf));
  const CATLBL={news:'\ud83d\udcf0 AI \ub274\uc2a4',models:'\ud83d\ude80 \ubaa8\ub378',papers:'\ud83d\udcc4 \ub17c\ubb38',open:'\ud83d\udcbb \uc624\ud508\uc18c\uc2a4·\uc2a4\ud0ac',data:'\ud83d\udcca \ub370\uc774\ud130\uc14b'};
  const CATORD=['news','models','papers','open','data'];
  return rows("SELECT id,kicker,date,label,small,window FROM editions ORDER BY substr(id,1,10) DESC, CASE WHEN id LIKE '%-evening' THEN 0 ELSE 1 END").map(function(e){
    const groups=CATORD.map(function(k){
      const items=rows("SELECT t,u,d,s,q,w,a,en,img FROM items WHERE edition_id='"+e[0].replace(/'/g,"''")+"' AND cat='"+k+"' ORDER BY id").map(function(r){
        const it={t:r[0],u:r[1],d:r[2],s:r[3],q:JSON.parse(r[4]),w:r[5],a:JSON.parse(r[6])};
        if(r[7])it.en=JSON.parse(r[7]);
        if(r[8])it.img=r[8];
        return it;
      });
      return {key:k,label:CATLBL[k],items:items};
    });
    return {id:e[0],kicker:e[1],date:e[2],label:e[3],small:e[4],window:e[5],groups:groups};
  });
}
function badgeDate(d){
  d=String(d);
  const i=d.lastIndexOf('~');
  let end=i<0?d.trim():d.slice(i+1).trim();
  if(!/^\d{4}\./.test(end)){const y=(d.match(/^(\d{4})\./)||[])[1];if(y)end=y+'.'+end}
  return end;
}
function editionBlockHtml(ed,count){
  return '<section class="edition-block" id="block-'+ed.id+'" aria-labelledby="edition-'+ed.id+'">'
    +'<div class="edition-head"><h2 class="edition-title" id="edition-'+ed.id+'">'
    +'<span class="edition-date" data-kicker="'+esc(ed.kicker)+'"><span class="d-nowrap">'+esc(badgeDate(ed.date))+'</span></span>'
    +'<span class="edition-label">'+esc(ed.label)+'<small>'+esc(ed.small)+'</small></span></h2>'
    +'<p><span class="window">'+esc(ed.window)+' · 총 '+count+'개 신규 항목</span><br>'
    +'복사 버튼에서 텍스트 또는 카드 이미지를 고를 수 있고, 모바일에서는 바로 공유할 수 있어요.</p></div>'
    +'<div class="edition-cards"></div></section>';
}
function catTotals(){
  const t={news:0,models:0,papers:0,open:0,data:0};
  EDITIONS.forEach(function(ed){ed.groups.forEach(function(g){t[g.key]=(t[g.key]||0)+g.items.length})});
  return t;
}
function refreshShell(){
  const newest=EDITIONS[0];if(!newest)return;
  const tot=catTotals();const all=tot.news+tot.models+tot.papers+tot.open+tot.data;
  const dm=newest.id.match(/(\d{4})-(\d{2})-(\d{2})-(morning|evening)/);
  const issue=document.getElementById('issue-line');
  if(issue)issue.textContent=dm[1]+'.'+dm[2]+'.'+dm[3]+' · '+(dm[4]==='morning'?'MORNING':'EVENING')+' EDITION';
  const snapB=document.getElementById('snap-count'),snapS=document.getElementById('snap-label');
  const newCount=newest.groups.reduce(function(a,g){return a+g.items.length},0);
  if(snapB)snapB.textContent=newCount;
  if(snapS){delete snapS.dataset.koHtml;snapS.innerHTML='이번 회차에서 건진 변화의 신호<br>'+dm[1]+'년 '+dm[2]+'월 '+dm[3]+'일 '+(dm[4]==='morning'?'아침':'저녁')+' KST'}
  const map={all:'전체',news:'AI 뉴스',models:'모델',papers:'논문',open:'오픈소스·스킬',data:'데이터셋'};
  const dots={news:'var(--news)',models:'var(--models)',papers:'var(--papers)',open:'var(--open)',data:'var(--data)'};
  document.querySelectorAll('.legend button').forEach(function(btn){
    const k=btn.dataset.filter;const c=k==='all'?all:(tot[k]||0);
    const dot=k==='all'?'':'<i class="dot" style="color:'+dots[k]+'"></i>';
    btn.innerHTML=dot+esc(map[k]||k)+' '+c;
  });
  const foot=document.getElementById('foot-note');
  if(foot){delete foot.dataset.koHtml;foot.innerHTML='최신 회차: '+dm[1]+'년 '+dm[2]+'월 '+dm[3]+'일 '+(dm[4]==='morning'?'아침':'저녁')+' KST · AI 뉴스, 모델, 논문, 오픈소스의 변화 '+newCount+'건을 담았습니다. '+EDITIONS.length+'개 회차 '+all+'건을 보관 중입니다.'}
  const st=document.getElementById('search-status');
  if(st)st.textContent='전체 '+all+'개 항목';
  buildEditionFilter();
}
let activeEdition='all';
function editionShort(id){const m=id.match(/(\d{4})-(\d{2})-(\d{2})-(morning|evening)/);return m?m[1]+'.'+m[2]+'.'+m[3]+' '+(m[4]==='morning'?'아침':'저녁')+' KST':id}
function buildEditionFilter(){
  const sel=document.getElementById('edition-select');if(!sel)return;
  const cur=sel.value||'all';
  sel.innerHTML='';
  const all=document.createElement('option');all.value='all';all.textContent='전체 회차';sel.appendChild(all);
  EDITIONS.forEach(function(ed){
    const n=ed.groups.reduce(function(a,g){return a+g.items.length},0);
    const o=document.createElement('option');o.value=ed.id;o.textContent=editionShort(ed.id)+' ('+n+')';sel.appendChild(o);
  });
  sel.value=[...sel.options].some(function(o){return o.value===cur})?cur:'all';
  activeEdition=sel.value;
}
document.getElementById('edition-select').addEventListener('change',function(e){activeEdition=e.target.value;applyFilters(true)});
// ===== KO/EN language =====
var LANG='ko';try{var _ls=localStorage.getItem('ai-report-lang');if(_ls==='en')LANG='en'}catch(e){}
function setLangPersist(v){try{localStorage.setItem('ai-report-lang',v)}catch(e){}}
const STR={
ko:{why:'왜 중요한가요?',angles:'콘텐츠 각도',readSource:'원문 보기',openOriginal:'원문 열기',copy:'복사',share:'공유',link:'링크',srcPrefix:'원문: ',cardLinkPrefix:'카드 링크: ',pngBrand:'AI 트렌드 리포트',tCopied:'카드 텍스트를 복사했어요.',tCopyFail:'복사하지 못했어요. 다시 시도해 주세요.',tMaking:'카드 이미지를 만들고 있어요…',tImgCopied:'카드 이미지를 복사했어요.',tImgDl:'이미지 복사를 지원하지 않아 PNG로 저장했어요.',tImgFail:'이미지를 복사하지 못했어요. 다시 시도해 주세요.',tLink:'카드 링크를 복사했어요.',tShared:'공유했어요.',tShareCopy:'공유할 내용을 복사했어요.',tShareFail:'공유 기능을 사용할 수 없어요.'},
en:{why:'Why it matters',angles:'Content angles',readSource:'Read original',openOriginal:'Open original article',copy:'Copy',share:'Share',link:'Link',srcPrefix:'Source: ',cardLinkPrefix:'Card link: ',pngBrand:'AI Trend Report',tCopied:'Card text copied.',tCopyFail:'Could not copy. Please try again.',tMaking:'Rendering the card image…',tImgCopied:'Card image copied.',tImgDl:'Image copy is not supported — saved as PNG.',tImgFail:'Could not render the image. Please try again.',tLink:'Card link copied.',tShared:'Shared.',tShareCopy:'Share content copied.',tShareFail:'Sharing is not available.'}};
function T(k){return STR[LANG][k]}
const GROUP_LABEL_EN={news:'📰 AI News',models:'🚀 Models & Releases',papers:'📄 Papers',open:'💻 Open Source & Skills',data:'📊 Datasets'};
const LEG_KO={all:'전체',news:'AI 뉴스',models:'모델',papers:'논문',open:'오픈소스·스킬',data:'데이터셋'};
const LEG_EN={all:'All',news:'AI News',models:'Models',papers:'Papers',open:'Open Source & Skills',data:'Datasets'};
function dispLabel(key,label){return LANG==='en'?(GROUP_LABEL_EN[key]||label):label}
function itemText(x){if(LANG==='en'&&x.en&&x.en.t)return{t:x.en.t,q:x.en.q,w:x.en.w,a:x.en.a};return{t:x.t,q:x.q,w:x.w,a:x.a}}
var MONTH_EN=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function koDateEn(s){return String(s||'').replace(/(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일(\s*(아침|저녁))?/g,function(m,y,mo,d,sp,ap){var r=MONTH_EN[+mo-1]+' '+(+d)+', '+y;if(ap)r+=' · '+(ap==='아침'?'Morning':'Evening');return r})}
function keepKo(el){if(!el.dataset.koHtml)el.dataset.koHtml=el.innerHTML;return el.dataset.koHtml}
function keepKoText(el){if(!el.dataset.koText)el.dataset.koText=el.textContent;return el.dataset.koText}
function editionHasEn(arr){for(var i=0;i<arr.length;i++){var items=arr[i].items||[];for(var j=0;j<items.length;j++){var e=items[j].en;if(e&&e.t)return true}}return false}
function renderEditions(){
  n=0;var holder=document.getElementById('editions');holder.innerHTML='';
  EDITIONS.forEach(function(ed){
    var count=ed.groups.reduce(function(a,g){return a+g.items.length},0);
    var tmp=document.createElement('div');tmp.innerHTML=editionBlockHtml(ed,count);
    var sec=tmp.firstChild;holder.appendChild(sec);
    var root=sec.querySelector('.edition-cards');
    ed.groups.forEach(function(g){renderGroup(g,root)});
    if(LANG==='en'&&!editionHasEn(ed.groups)){var note=document.createElement('p');note.className='ko-only-note';note.textContent='This edition is available in Korean only — English editions start from Oct 14, 2026.';root.insertBefore(note,root.firstChild)}
  });
}
function injectLangToggle(){
if(document.querySelector('.lang-toggle')){syncToggle();return}
var st=document.createElement('style');
st.textContent='.lang-toggle{position:absolute;top:14px;right:16px;display:flex;background:var(--surface);border:1px solid var(--line);border-radius:999px;overflow:hidden;z-index:6}.lang-toggle button{appearance:none;border:0;background:transparent;color:var(--muted);font:700 .76rem "Noto Sans KR",sans-serif;padding:8px 13px;cursor:pointer}.lang-toggle button[aria-pressed="true"]{background:var(--ink);color:var(--paper)}.lang-toggle button:focus-visible{outline:3px solid var(--focus);outline-offset:2px}.ko-only{display:inline-block;margin-left:6px;padding:2px 8px;border:1px solid var(--line);border-radius:999px;font-size:.66rem;font-weight:700;color:var(--muted);vertical-align:middle}.ko-only-note{margin:0 0 20px;padding:13px 17px;background:var(--surface);border:1px dashed var(--line);color:var(--muted);font-size:.83rem}';
document.head.appendChild(st);
var mast=document.querySelector('.mast');if(!mast)return;
var tg=document.createElement('div');tg.className='lang-toggle';tg.setAttribute('role','group');tg.setAttribute('aria-label','Language / \uc5b8\uc5b4');
tg.innerHTML='<button type="button" data-lang="ko">\ud55c\uad6d\uc5b4</button><button type="button" data-lang="en">English</button>';
mast.appendChild(tg);
tg.addEventListener('click',function(e){var b=e.target.closest('button');if(b)setLang(b.dataset.lang)});
syncToggle();
}
function syncToggle(){document.querySelectorAll('.lang-toggle button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.lang===LANG))})}
function setLang(v){if(v===LANG){syncToggle();return}LANG=v;setLangPersist(v);syncToggle();renderEditions();applyStaticLang();applyFilters(false)}
function applyStaticLang(){
  const edPick=document.querySelector('.edition-pick-label');
  if(edPick){keepKo(edPick);edPick.textContent=LANG==='en'?'Edition':'회차'}
  const edAll=document.querySelector('#edition-select option[value="all"]');
  if(edAll){keepKo(edAll);edAll.textContent=LANG==='en'?'All editions':'전체 회차'}
document.documentElement.lang=LANG;
document.title=LANG==='en'?'AI Trend Report':'AI 트렌드 리포트';
var h1=document.querySelector('.mast h1');
if(h1){keepKo(h1);h1.innerHTML=LANG==='en'?'<span class="title-line">AI Trend</span><span class="title-line report-word">Report</span>':h1.dataset.koHtml}
var dek=document.querySelector('.mast .dek');
if(dek){keepKoText(dek);dek.textContent=LANG==='en'?'Tech jargon aside — here is what happened in the AI world today, explained with everyday analogies. Jump straight to the original source.':dek.dataset.koText}
var snap=document.querySelector('.snapshot span');
if(snap){keepKo(snap);if(LANG==='en'){var sp=snap.dataset.koHtml.split(/<br\s*\/?>/i);snap.innerHTML='Signals of change caught this edition<br>'+koDateEn(sp[1]||'')}else{snap.innerHTML=snap.dataset.koHtml}}
var spn=document.querySelector('.search-panel');if(spn)spn.setAttribute('aria-label',LANG==='en'?'Search reports':'리포트 검색');
var si=document.getElementById('report-search');
if(si){if(!si.dataset.koPh)si.dataset.koPh=si.placeholder;si.placeholder=LANG==='en'?'Search titles, summaries, sources':si.dataset.koPh;si.setAttribute('aria-label',LANG==='en'?'Search reports':'리포트 검색')}
var scb=document.getElementById('search-clear');if(scb){keepKoText(scb);scb.textContent=LANG==='en'?'Clear':scb.dataset.koText}
var map=LANG==='en'?LEG_EN:LEG_KO;
document.querySelectorAll('.legend button').forEach(function(btn){var k=btn.dataset.filter;var c=(btn.textContent.match(/(\d+)\s*$/)||[])[1]||'';var dot=k==='all'?'':'<i class="dot" style="color:var(--'+k+')"></i>';btn.innerHTML=dot+esc(map[k]||k)+(c?' '+c:'')});
document.querySelectorAll('.edition-block').forEach(function(blk){
var dEl=blk.querySelector('.edition-date');var kicker=dEl?dEl.dataset.kicker:'';
var labEl=blk.querySelector('.edition-label');
if(labEl){keepKo(labEl);if(LANG==='en'){var sm=labEl.querySelector('small');var smH=sm?sm.outerHTML:'';labEl.innerHTML=esc(kicker==='MORNING'?'Morning Edition':'Evening Edition')+smH}else{labEl.innerHTML=labEl.dataset.koHtml}}
var p=blk.querySelector('.edition-head p');
if(p){keepKo(p);if(LANG==='en'){var m=p.dataset.koHtml.match(/수집 범위:\s*(.*?)\s*·\s*총\s*(\d+)개 신규 항목/);var win=m?'<span class="window">Collection window: '+esc(m[1])+' · '+m[2]+' new items</span>':'';p.innerHTML=win+'<br>Use the copy button for text or a card image — share straight from mobile.'}else{p.innerHTML=p.dataset.koHtml}}
});
var cml=document.querySelector('.copy-menu-label');if(cml){keepKoText(cml);cml.textContent=LANG==='en'?'How would you like to copy?':cml.dataset.koText}
document.querySelectorAll('.copy-choice').forEach(function(ch){var mode=ch.dataset.copyMode;var st=ch.querySelector('strong'),sm=ch.querySelector('small');if(st){keepKoText(st);st.textContent=LANG==='en'?(mode==='image'?'Card image':'Text'):st.dataset.koText}if(sm){keepKoText(sm);sm.textContent=LANG==='en'?(mode==='image'?'Content and cover image in one':'Title, summary, source and link'):sm.dataset.koText}});
var cm=document.getElementById('copy-menu');if(cm)cm.setAttribute('aria-label',LANG==='en'?'Choose how to copy':'복사 방식 선택');
var fs=document.querySelector('footer .footer-grid strong');if(fs){keepKo(fs);fs.innerHTML=LANG==='en'?'AI Trend Report<br>Auto-collected every 12 hours':fs.dataset.koHtml}
var fp=document.querySelector('footer .footer-grid span');if(fp){keepKo(fp);if(LANG==='en'){var fm=fp.dataset.koHtml.match(/최신 회차:\s*(.*?)\s*·\s*.*?(\d+)건을 담았습니다/);fp.textContent=fm?('Latest edition: '+koDateEn(fm[1])+' · '+fm[2]+' new items'):'AI Trend Report'}else{fp.innerHTML=fp.dataset.koHtml}}
}

function esc(v){return String(v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function cardUid(u){var h=5381;u=String(u||'');for(var i=0;i<u.length;i++){h=(((h<<5)+h)+u.charCodeAt(i))>>>0}return 'c'+h.toString(36)}
function card(x,key,label){n++;var uid=cardUid(x.u||x.t);var ft=itemText(x);var dlab=dispLabel(key,label);var koBadge=(LANG==='en'&&!(x.en&&x.en.t))?'<span class="ko-only">🇰🇷 Korean only</span>':'';const image=x.img?'<figure class="card-media"><img src="'+esc(x.img)+'" alt="'+esc(ft.t)+'" loading="lazy"></figure>':'';const copyIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';const shareIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="6" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="18" cy="19" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m8.3 10.9 7.4-4.5M8.3 13.1l7.4 4.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';const linkIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M14 10a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';return '<article id="'+uid+'" class="card '+key+(x.img?' image-card':'')+'" data-url="'+esc(x.u)+'">'+image+'<div class="card-body"><div class="meta"><span class="tag">'+esc(dlab)+'</span><time>'+esc(x.d)+'</time><span>· '+esc(x.s)+'</span>'+koBadge+'</div><h4>'+esc(ft.t)+'</h4><ul class="summary">'+ft.q.map(function(v){return '<li>'+esc(v)+'</li>'}).join('')+'</ul><p class="why"><strong>'+T('why')+'</strong> '+esc(ft.w)+'</p><p class="angles"><b>'+T('angles')+'</b>'+ft.a.map(function(v){return ' · '+esc(v)}).join('')+'</p><div class="source"><div class="card-actions"><a href="'+esc(x.u)+'" target="_blank" rel="noopener noreferrer" aria-label="'+esc(ft.t)+' '+T('openOriginal')+'">'+T('readSource')+'</a><button class="card-action copy-card" type="button" aria-haspopup="menu" aria-expanded="false">'+copyIcon+T('copy')+'</button><button class="card-action share-card" type="button">'+shareIcon+T('share')+'</button><button class="card-action link-card" type="button">'+linkIcon+T('link')+'</button></div><span class="index">'+String(n).padStart(2,'0')+'</span></div></div></article>'}
function renderGroup(g,root){const section=document.createElement('section');section.className='section '+g.key;section.dataset.category=g.key;const note=g.note?'<span>'+esc(g.note)+'</span>':(LANG==='en'?'<span>'+g.items.length+' signals</span>':'<span>'+g.items.length+'개의 신호</span>');section.innerHTML='<div class="section-title"><h3>'+esc(dispLabel(g.key,g.label))+'</h3>'+note+'</div><div class="grid">'+g.items.map(function(x){return card(x,g.key,g.label)}).join('')+'</div>';root.appendChild(section)}
const searchInput=document.getElementById('report-search');
const clearButton=document.getElementById('search-clear');
const searchStatus=document.getElementById('search-status');
const emptyState=document.getElementById('empty');
const toast=document.getElementById('toast');
let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(function(){toast.classList.remove('show')},2200)}
function cardText(card){
  const title=card.querySelector('h4').textContent.trim();
  const meta=Array.from(card.querySelectorAll('.meta time,.meta span:not(.tag)')).map(function(el){return el.textContent.trim().replace(/^·\s*/, '')}).join(' · ');
  const bullets=Array.from(card.querySelectorAll('.summary li')).map(function(li){return '• '+li.textContent.trim()}).join('\n');
  const why=card.querySelector('.why').textContent.trim();
  const angles=card.querySelector('.angles').textContent.trim().replace(/\s*·\s*/g,' · ');
  return [title,meta,bullets,why,angles,T('srcPrefix')+card.dataset.url,T('cardLinkPrefix')+'https://ai-trend-report.protocolgaia.com/#'+card.id].join('\n\n');
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
    ctx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue('--line').trim()||muted;ctx.fillRect(side,y,max,2);y+=43;ctx.font='700 22px "Noto Sans KR", sans-serif';ctx.fillStyle=cat;let host=card.dataset.url;try{host=new URL(host).hostname.replace(/^www\./,'')}catch(e){}ctx.fillText(host,side,y);ctx.fillStyle=muted;ctx.textAlign='right';ctx.fillText(T('pngBrand'),W-side,y);ctx.textAlign='left';y+=55;
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
  if(choice.dataset.copyMode==='text'){copyText(cardText(card)).then(function(){showToast(T('tCopied'))}).catch(function(){showToast(T('tCopyFail'))});closeCopyMenu(false);return}
  showToast(T('tMaking'));closeCopyMenu(false);copyCardImage(card).then(function(result){showToast(result==='copied'?T('tImgCopied'):T('tImgDl'))}).catch(function(){showToast(T('tImgFail'))});
});
document.addEventListener('keydown',function(event){if(event.key==='Escape'&&!copyMenu.hidden)closeCopyMenu(true)});
document.addEventListener('click',function(event){
  const button=event.target.closest('.card-action');
  if(button){const item=button.closest('.card');const text=cardText(item);const title=item.querySelector('h4').textContent.trim();
    if(button.classList.contains('copy-card')){openCopyMenu(button);return}
    if(button.classList.contains('link-card')){closeCopyMenu(false);var deeplink='https://ai-trend-report.protocolgaia.com/#'+item.id;copyText(deeplink).then(function(){showToast(T('tLink'))}).catch(function(){showToast(T('tCopyFail'))});return}
    if(button.classList.contains('share-card')){closeCopyMenu(false);if(navigator.share){navigator.share({title:title,text:text,url:item.dataset.url}).then(function(){showToast(T('tShared'))}).catch(function(error){if(error&&error.name!=='AbortError')showToast('공유하지 못했어요. 다시 시도해 주세요.')})}else{copyText(text).then(function(){showToast(T('tShareCopy'))}).catch(function(){showToast(T('tShareFail'))})}return}
  }
  if(!copyMenu.hidden&&!event.target.closest('.copy-menu'))closeCopyMenu(false);
});
let activeFilter='all';
function normalise(v){return String(v).trim().toLocaleLowerCase('ko-KR')}
function applyFilters(shouldScroll){
  const query=normalise(searchInput.value);let visibleCount=0;
  document.querySelectorAll('.edition-block').forEach(function(edition){
    const editionMatch=activeEdition==='all'||edition.id==='block-'+activeEdition;
    let blockCount=0;
    edition.querySelectorAll('.section').forEach(function(section){
      const categoryMatch=activeFilter==='all'||section.dataset.category===activeFilter;let sectionCount=0;
      section.querySelectorAll('.card').forEach(function(item){
        const queryMatch=!query||normalise(item.textContent).includes(query);
        const visible=categoryMatch&&queryMatch&&editionMatch;
        item.classList.toggle('search-hidden',!visible);
        if(visible){sectionCount++;blockCount++}
      });
      section.classList.toggle('hidden',sectionCount===0);
    });
    edition.classList.toggle('search-hidden',!editionMatch||blockCount===0);
    if(editionMatch)visibleCount+=blockCount;
  });
  clearButton.hidden=!query;
  const categoryLabel=document.querySelector('.legend button[aria-pressed="true"]').textContent.trim().replace(/\s+\d+$/,'');
  const edSuffix=activeEdition==='all'?'':' · '+editionShort(activeEdition);
  searchStatus.textContent=query?(LANG==='en'?'“'+searchInput.value.trim()+'” — '+visibleCount+' results · '+categoryLabel+edSuffix:'“'+searchInput.value.trim()+'” 검색 결과 '+visibleCount+'개 · '+categoryLabel+edSuffix):(LANG==='en'?'All '+visibleCount+' items'+edSuffix:'전체 '+visibleCount+'개 항목'+edSuffix);
  emptyState.textContent=query?(LANG==='en'?'No results for “'+searchInput.value.trim()+'”.':'“'+searchInput.value.trim()+'” 검색 결과가 없습니다.'):(LANG==='en'?'No items in this category.':'선택한 카테고리에 항목이 없습니다.');
  emptyState.style.display=visibleCount?'none':'block';
  if(shouldScroll&&visibleCount){const first=document.querySelector('.section:not(.hidden)');if(first)first.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}
}
document.querySelectorAll('.legend button').forEach(function(btn){btn.addEventListener('click',function(){activeFilter=btn.dataset.filter;document.querySelectorAll('.legend button').forEach(function(b){b.setAttribute('aria-pressed',String(b===btn))});applyFilters(activeFilter!=='all')})});
searchInput.addEventListener('input',function(){applyFilters(false)});
searchInput.addEventListener('keydown',function(e){if(e.key==='Escape'&&searchInput.value){searchInput.value='';applyFilters(false)}});
clearButton.addEventListener('click',function(){searchInput.value='';applyFilters(false);searchInput.focus()});
function handleDeepLink(){
  var st=document.createElement('style');st.textContent='.card.flash{outline:3px solid var(--focus);outline-offset:5px}';document.head.appendChild(st);
  var h=(location.hash||'').replace('#','');if(!h)return;
  var el=document.getElementById(h);if(!el||!el.classList.contains('card'))return;
  var blk=el.closest('.edition-block');
  if(blk&&blk.id.indexOf('block-')===0){var eid=blk.id.slice(6);var sel=document.getElementById('edition-select');if(sel&&sel.querySelector('option[value="'+eid+'"]')){sel.value=eid;activeEdition=eid;applyFilters(false)}}
  setTimeout(function(){try{el.scrollIntoView({block:'center'})}catch(e){el.scrollIntoView()}el.classList.add('flash');setTimeout(function(){el.classList.remove('flash')},2800)},450);
}
async function main(){
  try{EDITIONS=await loadEditions()}
  catch(e){
    document.getElementById('editions').innerHTML='<p class="empty" style="display:block">리포트를 불러오지 못했어요. 새로고침해 주세요.</p>';
    return;
  }
  refreshShell();
  renderEditions();
  applyFilters(false);
  injectLangToggle();applyStaticLang();applyFilters(false);
  handleDeepLink();
}
main();
