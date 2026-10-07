const groups=[
{key:"models",label:"🔥 새 모델 릴리스",items:[
{t:"Reflection AI 'Beam' — 중국 오픈모델에 도전하는 첫 오픈웨이트 모델",u:"https://www.reuters.com/technology/nvidia-backed-reflection-unveils-first-ai-model-take-chinese-open-models-2026-10-05/",d:"2026-10-05",s:"Reuters",img:"images/img0.webp",alt:"Reflection AI의 Beam 모델을 소개하는 대표 이미지",q:["엔비디아의 지원을 받는 리플렉션AI가 첫 오픈웨이트 모델 Beam을 공개했어요.","전체는 5,010억 개지만, 한 번에 쓰는 건 230억 개뿐인 절약형 구조예요.","중국의 Z.ai·Qwen과 맞먹는 성능을 더 적은 비용으로 낸다고 주장해요."],w:"큰 엔진에서 필요한 실린더만 켜는 하이브리드 차처럼, ‘크게 만들고 아껴 쓰는’ 방식이 새 공식이 되고 있어요.",a:["‘5,010억짜리 모델을 공짜로 푼다고?’ 오픈웨이트 전쟁 2라운드","필요한 전문가만 깨우는 MoE를 피자 가게로 설명"]},
{t:"humanizer (12B) — AI 글에 사람 손맛을 더하는 모델",u:"https://huggingface.co/jialinyyzz/humanizer",d:"2026-10-05",s:"Hugging Face",q:["메일·에세이·보고서를 자연스럽게 다듬는 12B 모델이 공개됐어요.","숫자·날짜·인용 같은 사실은 건드리지 않고 문장만 고쳐요.","인터넷 없이 내 컴퓨터에서 돌리는 데스크톱 앱도 함께 나와요."],w:"맞춤법 검사기가 문법 검사기로 진화했듯, 이제는 ‘쓰는 것’보다 ‘사람처럼 다듬는 것’이 경쟁력이 돼요.",a:["AI 탐지기와 humanizer의 숨바꼭질","블로거·학생 글쓰기 흐름에 넣어보기"]},
{t:"Phonon-2 — 164MB로 달리는 영어 음성인식 모델",u:"https://huggingface.co/FermionResearch/Phonon-2",d:"2026-10-05",s:"Hugging Face",q:["164MB라는 가벼운 몸집으로 큰 모델급 정확도를 내는 음성인식 모델이에요.","맥북에서 한 시간 녹음을 약 20초 만에 받아쓸 만큼 빨라요.","완전 공개라 회의록 앱이나 자막 도구에 바로 넣을 수 있어요."],w:"무거운 배낭 대신 가벼운 조끼로 마라톤을 뛰는 선수 같아요. ‘작지만 강한’ 음성 AI가 가까워졌어요.",a:["로컬 자막 생성기 직접 만들기","Whisper와 속도·정확도 대결"]},
{t:"JEV-27B-VL — 화면을 보고 0.2초 만에 판단하는 에이전트의 눈",u:"https://huggingface.co/autotrust/JEV-27B-VL",d:"2026-10-05",s:"Hugging Face",q:["이미지를 보고 각 선택지의 가능성을 한 번에 내놓는 27B 모델이에요.","로봇 팔 집기나 화면 클릭 같은 행동을 약 0.2초 안에 정해요.","깊게 고민하지 않고 직관으로 판단하는 ‘System 1’ 방식이라 빨라요."],w:"에이전트에게 생각하는 두뇌뿐 아니라 반사신경이 생긴 셈이에요. 실시간 조작에는 몸이 먼저 반응하는 직관이 필요해요.",a:["디시전 모델을 에이전트의 ‘손’으로 설명","화면 자동조작 데모"]},
{t:"GEV-26B-Decide — 확신 없을 때만 깊이 생각하는 모델",u:"https://huggingface.co/autotrust/GEV-26B-Decide",d:"2026-10-05",s:"Hugging Face",q:["Gemma-4 기반 26B 모델로, 쉬운 일은 직관으로 풀어요.","어려운 일만 깊이 생각하고 클릭 한 번을 약 85ms에 정해요.","화면 조작 작업 성공률 95%로 속도와 정확도를 함께 노려요."],w:"시험에서 쉬운 문제는 바로 풀고 어려운 문제에만 시간을 쓰는 것처럼, AI도 생각의 깊이를 조절하기 시작했어요.",a:["JEV와 묶어 보는 디시전 모델 열풍","autotrust 모델 가족이 노리는 것"]}
]},
{key:"news",label:"📢 공식 발표·비즈니스·정책",items:[
{t:"OpenAI, EU의 ChatGPT 글에 ‘보이지 않는 워터마크’ 시작",u:"https://techcrunch.com/2026/10/05/openai-will-start-watermarking-chatgpts-text-in-the-eu/",d:"2026-10-05",s:"TechCrunch",img:"images/img1.webp",alt:"ChatGPT 텍스트 워터마크 기능을 설명하는 OpenAI 화면",q:["OpenAI가 EU에서 ChatGPT·Codex가 만드는 글에 보이지 않는 표시를 넣어요.","API 고객은 전 세계에서 원할 때 켤 수 있어요.","표시를 읽는 도구는 우선 승인된 연구자에게만 공개돼요."],w:"AI 글에 제조자 스티커를 붙이는 셈이에요. 가짜뉴스와 과제 대필 논란에 업계가 내놓은 첫 표준 답안에 가까워요.",a:["textGrain은 어떻게 글 속에 숨어 있을까","한국에도 적용될지 전망"]},
{t:"ChatGPT 이미지 생성 화면에 시각 광고 테스트",u:"https://explainx.ai/blog/chatgpt-visual-ads-image-generation-test-october-2026",d:"2026-10-05",s:"ExplainX",q:["10월 말부터 미국의 ChatGPT 이미지 생성 화면 옆에 광고가 붙는 시험이 시작돼요.","만드는 이미지와 광고는 분리하고, 광고라는 표시도 붙여요.","16개 측정 파트너와 광고 효과를 재는 체계도 공개했어요."],w:"공짜 점심은 없다는 말처럼 무료 사용량을 광고가 메우기 시작했어요. AI 서비스가 돈 버는 방식이 바뀌는 신호예요.",a:["AI 챗봇에 광고가 붙으면 달라질 경험","광고주가 보는 새로운 지면"]},
{t:"TikTok, AI 쇼핑 비서와 원클릭 결제 출시",u:"https://techcrunch.com/2026/10/05/tiktok-rolls-out-an-ai-shopping-assistant-and-one-click-checkout/",d:"2026-10-05",s:"TechCrunch",img:"images/img2.webp",alt:"TikTok의 AI 쇼핑 어시스턴트와 원클릭 결제 화면",q:["상품을 찾고 사게 도와주는 대화형 AI 쇼핑 비서가 TikTok에 들어왔어요.","영상을 보다가 앱 밖으로 나가지 않고 한 번에 결제할 수 있어요.","Shopify·Stripe 등과 손잡고 발견부터 결제까지 한곳에 묶어요."],w:"‘이거 어디서 사?’라는 댓글을 AI가 바로 해결해요. 구경하던 영상이 곧바로 장바구니가 되는 거예요.",a:["TikTok과 Instagram의 AI 쇼핑 대결","한국 라이브커머스에 주는 힌트"]},
{t:"Anthropic, 기업에 AI 심는 엔지니어 1만 명 양성",u:"https://www.channeldive.com/news/anthropic-aws-forward-deployed-engineer-certifications/832157/",d:"2026-10-05",s:"Channel Dive",q:["Anthropic이 1억 달러를 들여 기업 현장에 AI를 심는 전문가를 키워요.","액센츄어·딜로이트와 모건스탠리·노보노디스크가 첫 기수로 참여해요.","내년 말까지 1만 명을 양성하는 것이 목표예요."],w:"좋은 씨앗만 파는 데서 끝내지 않고 밭에 심는 농부까지 키우는 거예요. AI 경쟁이 모델에서 도입으로 옮겨가요.",a:["AI 컨설팅은 새 금광일까","FDE라는 직업과 한국 기업 사례"]},
{t:"Anthropic, 인도에서 Claude ‘국내 추론’ 시작",u:"https://www.freepressjournal.in/tech/claude-gets-a-local-home-in-india-as-anthropic-rolls-out-in-country-inference-via-aws",d:"2026-10-05",s:"Free Press Journal",q:["AWS를 통해 Claude를 인도 안에서 돌리기 시작했어요.","Opus 5·Sonnet 5·Haiku 4.5를 쓰면서 데이터는 인도 밖으로 나가지 않아요.","은행·정부 같은 규제 기관도 민감한 업무에 Claude를 쓸 길이 열려요."],w:"데이터에도 국적이 생기는 시대예요. 나라 안에 데이터가 머물러야 문을 여는 고객이 있다는 뜻이에요.",a:["각국이 자국 안의 AI를 원하는 이유","소버린 AI 바람 한눈에 보기"]},
{t:"Anthropic, Claude 음성 사용자에게 ‘목소리 기부’ 요청",u:"https://techgig.com/news/ai/anthropic-seeks-voluntary-voice-data-from-claude-users-for-ai-training/134683355",d:"2026-10-05",s:"TechGig",q:["Claude 음성 기능 사용자에게 대화 데이터를 학습용으로 달라고 요청하기 시작했어요.","직접 동의해야 하고 기본값은 꺼져 있어요.","언제든 제공을 끄거나 이미 준 데이터를 지울 수 있어요."],w:"AI가 사람의 목소리를 배우려면 헌혈 같은 자발적 기증이 필요해요. 이 방식이 신뢰를 얻을지 지켜볼 만해요.",a:["내 목소리를 AI 학습에 줄까 말까","음성 AI가 배울 자료가 부족한 이유"]},
{t:"Anthropic 투자설명서의 숫자 — 컴퓨팅에 5,180억 달러",u:"https://www.mondaymomentum.io/p/the-most-important-number-in-anthropic-prospectus",d:"2026-10-05",s:"Monday Momentum",img:"images/img3.webp",alt:"Anthropic 투자설명서와 컴퓨팅 투자 규모를 다룬 대표 이미지",q:["Anthropic이 앞으로 10년간 컴퓨팅에 최소 5,180억 달러를 쓰겠다고 약속했어요.","그중 약 80%는 취소하기 어려운 확정 약정이에요.","2025년 매출은 46억 달러, 영업손실은 80억 달러가 넘었어요."],w:"AI 회사가 컴퓨터 공장을 짓기 위해 큰 빚을 지는 제조업처럼 변하고 있어요. 성장세가 꺾이면 약속한 비용은 그대로 남아요.",a:["5,180억 달러는 어디서 나오나","OpenAI와 Anthropic의 재무구조 비교"]},
{t:"Razorpay × OpenAI — 인도 브랜드에 ChatGPT 광고 길 열기",u:"https://www.cnbctv18.com/technology/chatgpt-new-advertising-channel-for-indian-brands-razorpay-openai-20004504.htm",d:"2026-10-05",s:"CNBC TV18",q:["인도 결제 기업 Razorpay가 OpenAI와 광고 채널을 열었어요.","인도 기업이 ChatGPT 안에 상품을 보여줄 수 있어요.","Fastrack·Tata Neu 등 9개 브랜드가 먼저 참여해요."],w:"검색 광고 다음은 대화 광고예요. 사람들이 물어보는 바로 그 순간에 상품을 보여주는 거죠.",a:["ChatGPT 시각 광고와 묶는 AI 광고 특집","검색광고와 대화광고 비교"]},
{t:"LGU+ ‘유독’, 글로벌 AI 서비스를 차례로 들여온다",u:"https://www.seoul.co.kr/news/economy/industry/2026/10/05/20261005800003",d:"2026-10-05",s:"서울신문",q:["LG유플러스가 글로벌 구독 플랫폼 뱅고와 손잡았어요.","11월 영상 편집 AI를 시작으로 해외 AI 서비스를 유독에 들여와요.","앞으로 생성형·생산성 AI까지 묶음 범위를 넓힐 계획이에요."],w:"통신사가 AI 백화점을 차리는 셈이에요. 하나씩 가입하기 귀찮은 사람을 위한 묶음 전략이에요.",a:["통신 3사의 AI 구독 전쟁","누가 어떤 AI를 파는지 비교"]},
{t:"미 국방부, 군사 시스템에서 Claude 사용 공식 중단",u:"https://www.androidheadlines.com/2026/10/pentagon-stops-using-removes-anthropic-claude-ai-military.html",d:"2026-10-05",s:"Android Headlines",q:["미 국방부가 군사 시스템에서 Claude 사용을 멈췄다고 확인했어요.","2월 공급망 위험 지정 뒤 8월까지 바꾸라는 시한이 있었어요.","Palantir의 Maven 정보 시스템 깊숙이 들어가 있어 교체에 시간이 걸렸어요."],w:"아무리 똑똑한 비서라도 공급망이 의심받으면 군대에 들어가지 못해요. AI에도 출신 심사가 생긴 거예요.",a:["AI 공급망 위험을 쉽게 설명","Pentagon이 Claude를 뺀 과정"]},
{t:"OpenAI·Anthropic·DeepMind, AI 안전을 공동 조율",u:"https://bitrss.com/openai-anthropic-and-google-deepmind-confirm-weeks-of-safety-coordination-252531",d:"2026-10-05",s:"BitRSS",q:["세 회사가 몇 주 동안 사이버 보안의 AI 안전 조치를 맞춰왔어요.","코드 작성 능력의 좋은 쓰임과 나쁜 쓰임이 함께 커진 것이 계기예요.","평소 경쟁하는 회사들이 안전 분야에서 협력한 드문 사례예요."],w:"경기에서는 싸우는 선수들이 경기장 안전 규칙은 함께 만드는 것과 같아요. AI 안전은 공동 과제가 되고 있어요.",a:["세 회사가 맞춘 안전 규칙 추적","코드 생성 AI의 악용 사례"]},
{t:"KAIST ‘CONDA’ — 데이터가 바뀌어도 흔들리지 않는 검색",u:"https://biz.heraldcorp.com/article/10893210",d:"2026-10-05",s:"헤럴드경제",q:["데이터가 계속 추가·삭제돼도 검색 정확도를 지키는 CONDA를 개발했어요.","기존 기술보다 정확도가 최대 24.5% 높고 속도는 1.9배 빨라요.","문서를 뒤져 답하는 RAG 서비스에 바로 쓸 수 있어요."],w:"도서관이 매일 책을 넣었다 빼도 사서가 위치를 척척 아는 것과 같아요. AI 검색의 고질병을 고친 한국발 기술이에요.",a:["벡터 검색을 3분 안에 설명","RAG 개발자에게 CONDA가 반가운 이유"]}
]},
{key:"papers",label:"📄 논문",items:[
{t:"RealCompanion — AI 기억력을 시험하는 120일 대화",u:"https://arxiv.org/abs/2610.01780",d:"2026-10-05",s:"arXiv · HF Papers",q:["120일 동안 이어진 AI 대화 27,218건으로 기억력을 재는 시험지를 만들었어요.","실제로 과거 기억이 꼭 필요한 순간은 드물었어요.","현재 AI는 기억이 필요한 때를 제대로 알아채지 못했어요."],w:"메모는 잘하지만 무엇을 메모해야 할지 모르는 비서 같아요. 길게 기억하는 것만으로는 충분하지 않아요.",a:["AI 메모리는 길수록 좋을까","동반자 AI가 기억을 꺼내는 법"]},
{t:"World Action Modeling — 핵심 장면만 미리 보는 로봇",u:"https://arxiv.org/abs/2610.02508",d:"2026-10-05",s:"arXiv",q:["로봇이 미래 영상을 통째로 만들지 않고 핵심 장면만 미리 그려봐요.","실제 로봇 실험에서 기존 최고 기록을 15%포인트 앞섰어요.","처음 보는 환경에서도 70% 성공률을 냈어요."],w:"걸을 때마다 지도를 다시 그리지 않고 이정표만 확인하는 것과 같아요. 로봇의 상상력을 가볍게 만들었어요.",a:["로봇이 생각하며 움직이는 법","월드 모델을 일상 비유로 설명"]},
{t:"Scaling Trajectories — 성공 경험을 매뉴얼로 바꾸는 AI",u:"https://arxiv.org/abs/2610.02826",d:"2026-10-05",s:"arXiv",q:["어려운 터미널 작업의 성공 사례를 AI가 스스로 매뉴얼로 정리해요.","그 매뉴얼을 다음 학습의 새 교재로 써요.","Terminal-Bench 2 정답률이 57%에서 74%로 올랐어요."],w:"게임을 깬 뒤 공략집을 써서 다음 판을 더 잘하는 것과 같아요. 경험을 교재로 바꾸는 법을 배운 거예요.",a:["AI 자기계발의 비밀","성공 사례가 최고의 선생님인 이유"]},
{t:"단백질 접힘을 배운 AI, 추론력도 좋아졌다",u:"https://arxiv.org/abs/2609.38879",d:"2026-10-05",s:"arXiv",q:["단백질 접힘을 학습한 AI가 공간·과학·일반 추론 시험을 봤어요.","10개 시험에서 모두 성적이 올랐어요.","언어가 아닌 촘촘한 과학 구조가 추론력을 키울 수 있다는 새 생각이에요."],w:"수학을 공부했더니 국어 성적도 오른 것과 같아요. AI 공부에도 편식 없는 식단이 필요하다는 힌트예요.",a:["과학 데이터가 추론을 키울까","AI 훈련 데이터의 새 유행"]},
{t:"Depth as Time — 한 번에 그리는 AI를 16.6배로 다이어트",u:"https://arxiv.org/abs/2610.03626",d:"2026-10-05",s:"arXiv",q:["한 번의 계산으로 그림을 그리는 AI의 내부를 들여다봤어요.","여러 단계의 일이 네트워크 깊이에 펼쳐져 있다는 원리를 찾았어요.","그 원리로 모델을 16.6배 작게 줄였어요."],w:"여러 번 나눠 하던 일을 한 번에 하는 비법을 찾아 짐을 가볍게 만든 거예요. 휴대폰 이미지 AI에 한 걸음 가까워졌어요.",a:["확산 모델을 쉽게 설명","압축 기술이 만드는 온디바이스 그림 AI"]},
{t:"체스를 두며 수를 설명하는 40억 모델 ‘퀸’",u:"https://arxiv.org/abs/2610.03695",d:"2026-10-05",s:"arXiv",q:["40억 크기의 작은 모델이 그랜드마스터급 체스를 둬요.","반복 학습으로 엘로 점수가 900점 넘게 올랐어요.","자기가 둔 수의 이유도 큰 모델에 가까운 품질로 설명해요."],w:"‘왜 그렇게 뒀어?’에 답하는 AI는 단순히 잘 두는 AI와 달라요. 설명은 이해를 확인하는 창문이에요.",a:["작은 모델의 반란을 체스로 보기","설명 가능한 AI의 가치"]},
{t:"LESSER — 추가 학습용 데이터 고르기 비용 9.7배 절감",u:"https://arxiv.org/abs/2610.03702",d:"2026-10-05",s:"arXiv",q:["추가 학습에 쓸 좋은 데이터를 고르는 일을 가볍게 만들었어요.","모델 전체 대신 출력층만 봐도 되게 했어요.","계산비는 최대 9.7배 줄고 성능은 전체를 본 방식과 비슷해요."],w:"책의 모든 쪽을 읽지 않고 목차만 보고도 좋은 책을 고르는 것과 같아요. AI 학습비를 줄이는 새 방법이에요.",a:["AI 학습은 왜 비쌀까","데이터 선별 기술의 세계"]}
]},
{key:"open",label:"💻 GitHub·에이전트 생태계",items:[
{t:"cloudflare/cloudflare-os — AI 에이전트의 작업 공간",u:"https://github.com/cloudflare/cloudflare-os",d:"2026-10-05",s:"GitHub",img:"images/img4.webp",alt:"Cloudflare OS의 AI 업무 공간 화면",q:["문서 작성·앱 제작·에이전트 실행을 한곳에 모은 도구예요.","Cloudflare Workers 위에서 돌아가고 회사 시스템과 연결할 수 있어요.","회사 문맥을 기억하는 비서처럼 여러 일을 이어서 처리해요."],w:"에이전트들의 사무실을 클라우드 회사가 직접 차려준 셈이에요. 일터가 표준화되면 에이전트 시대가 더 빨라져요.",a:["빅테크의 에이전트 OS 경쟁","누가 AI의 일터를 차지할까"]},
{t:"agency-agents — 손에 들고 다니는 AI 대행사 꾸러미",u:"https://github.com/msitarzewski/agency-agents",d:"2026-10-05",s:"GitHub",q:["프론트엔드 개발자부터 커뮤니티 관리자까지 역할별 AI가 모여 있어요.","필요한 일을 맡을 전문가를 골라 꺼내 쓰는 구조예요.","만능 비서 한 명보다 전문 팀을 꾸리는 발상이에요."],w:"혼자 다 하는 사람보다 전문가 팀이 낫듯, AI도 분업의 시대로 가고 있어요.",a:["내 일에 맞는 에이전트 고르기","역할별 AI 대행사 리뷰"]},
{t:"heygen-com/hyperframes — HTML을 영상으로 바꾸는 도구",u:"https://github.com/heygen-com/hyperframes",d:"2026-10-05",s:"GitHub",q:["HTML을 쓰면 바로 영상으로 바꿔주는 도구예요.","AI 에이전트가 사용하기 쉽게 설계됐어요.","에이전트가 웹페이지 같은 코드를 짜 영상으로 만들 수 있어요."],w:"코딩과 영상 제작의 경계가 사라져요. 블로그 글을 쓰듯 영상을 짜는 시대예요.",a:["에이전트로 쇼츠 자동 생성","HTML이 영상이 되는 과정"]},
{t:"TencentCloud/Octop — 텐센트의 셀프호스팅 AI 비서",u:"https://github.com/TencentCloud/Octop",d:"2026-10-05",s:"GitHub",q:["여러 사용자와 여러 에이전트가 함께 쓰는 AI 비서예요.","내 컴퓨터나 서버에 직접 설치할 수 있어요.","오래 쓸수록 사용자를 더 잘 아는 장기 기억이 특징이에요."],w:"남의 클라우드가 아니라 우리 집 컴퓨터에서 돌아가는 비서예요. 중국 빅테크도 공개·직접 설치 쪽으로 움직여요.",a:["셀프호스팅 AI 비서 직접 설치","장기 기억은 어떻게 쌓일까"]},
{t:"cursor/plugins — Cursor 플러그인 생태계 표준화",u:"https://github.com/cursor/plugins",d:"2026-10-05",s:"GitHub",q:["Cursor의 공식 플러그인 명세를 담은 저장소예요.","함께 쓸 공식 플러그인도 한곳에 모았어요.","Cursor 에이전트의 확장 기능을 같은 규칙으로 맞추려는 시도예요."],w:"앱스토어가 앱 생태계를 키웠듯, 플러그인 표준은 AI 스킬 장터를 키울 수 있어요.",a:["AI 코딩 도구의 다음 전쟁터","플러그인 표준이 중요한 이유"]},
{t:"tile-ai/tilelang — GPU 프로그래밍을 레고처럼",u:"https://github.com/tile-ai/tilelang",d:"2026-10-05",s:"GitHub",q:["GPU·CPU 가속기용 빠른 커널을 쉽게 짜는 전용 언어예요.","어려운 저수준 코딩을 단순한 블록처럼 다룰 수 있게 해요.","모델 밑바닥의 계산을 다듬어 전체 속도를 끌어올려요."],w:"건물 속 보이지 않는 배관 공사를 쉽게 하는 도구 같아요. 밑바탕이 빨라지면 AI 전체가 빨라져요.",a:["AI가 빨라지는 진짜 이유","커널 최적화를 일상 비유로 설명"]},
{t:"autonomous-ai/openharness — 모든 에이전트를 한 지휘소에서",u:"https://github.com/autonomous-ai/openharness",d:"2026-10-05",s:"GitHub",q:["여러 코딩 에이전트를 한 화면에서 관리하는 도구예요.","코드를 넘어 CAD·회로·로봇으로 넓히는 구조예요.","분야별 하네스를 고르는 ‘하네스 상점’ 개념도 담았어요."],w:"에이전트가 많아지면 에이전트를 관리하는 관리자도 필요해요. 지휘소를 위한 지휘소인 셈이에요.",a:["에이전트 군단 지휘하기","멀티 에이전트 관리 도구 비교"]},
{t:"shareAI-lab/learn-claude-code — 하네스 직접 만들기 교과서",u:"https://github.com/shareAI-lab/learn-claude-code",d:"2026-10-05",s:"GitHub",q:["‘Bash만으로 충분하다’며 하네스를 처음부터 만들게 해요.","AI 에이전트가 움직이는 속을 단계별로 들여다볼 수 있어요.","7.8만 개 넘는 별을 받은 실습형 교재예요."],w:"자동차를 타는 것과 엔진을 뜯어보는 건 다른 공부예요. 직접 만들면 에이전트를 가장 빨리 이해할 수 있어요.",a:["에이전트 원리 배우기 시리즈","하네스를 한 단계씩 조립하기"]},
{t:"vercel-labs/skills — 스킬을 앱스토어처럼 검색·설치",u:"https://github.com/vercel-labs/skills",d:"2026-10-05",s:"GitHub",q:["세션에서 필요한 스킬을 찾아오는 find-skills 기능이 대표예요.","원하는 능력을 검색하고 바로 설치하는 흐름을 만들어요.","스킬 유통의 공통 규칙을 만들려는 시도예요."],w:"스킬이 파일에서 상품으로 바뀌고 있어요. 누가 스킬 장터를 차지할지 경쟁이 시작됐어요.",a:["AI 스킬 이코노미","Cursor 플러그인과 함께 보는 스킬 장터"]}
]},
{key:"data",label:"🗂️ 데이터셋",items:[
{t:"의사-환자 대화 데이터셋 — 모든 질환을 아우르는 대화 교재",u:"https://huggingface.co/datasets/nisten/opus5-5-doctor-patient-conversations-all-human-diseases",d:"2026-10-05",s:"Hugging Face",q:["의사와 환자의 대화를 여러 질환에 걸쳐 모은 자료예요.","의료 상담 챗봇의 대화 연습에 쓸 수 있어요.","진료 기록을 짧게 정리하는 AI의 학습 재료로도 주목받아요."],w:"좋은 AI 의사는 좋은 대화 기록에서 나와요. 의료 AI가 읽을 교과서가 쌓이는 중이에요.",a:["의료 AI는 무엇을 먹고 자랄까","상담 대화와 진료 요약의 연결"]},
{t:"typed-decisions — 에이전트에게 고를 때의 답안지",u:"https://huggingface.co/datasets/LocalLLaMA/typed-decisions",d:"2026-10-05",s:"Hugging Face",q:["예·아니오, 선택, 평점 같은 판단을 유형별로 모은 자료예요.","약 3,200개 문제로 이뤄졌어요.","다운로드는 2만7천 건을 넘겼어요."],w:"에이전트에게 선택의 모범 답안을 보여주는 문제집이에요. 디시전 모델 열풍과 짝을 이루는 흐름이에요.",a:["디시전 모델 특집의 데이터 편","선택을 배우는 AI의 문제집"]},
{t:"중국 A주 Level 2 호가창 틱 데이터",u:"https://huggingface.co/datasets/venvoo/china-a-share-l2-level2-limit-order-book-tick-data",d:"2026-10-05",s:"Hugging Face",q:["중국 주식 시장의 실시간 주문 흐름을 담은 자료예요.","사고팔려는 가격과 수량이 움직이는 호가창 기록이에요.","트레이딩 AI 훈련과 시장 연구에 쓸 수 있어요."],w:"주식 시장의 심장박동 기록 같은 데이터예요. 이런 생생한 주문 흐름이 공개되는 일은 흔치 않아요.",a:["금융 AI는 무엇을 보고 배울까","틱 데이터를 쉽게 설명"]}
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