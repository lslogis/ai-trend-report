const groups=[
{key:'news',label:'📰 AI 뉴스',items:[
{t:"백악관, 'Super Intelligence Force' 출범 — AI 차르에 Clayton DNI 임명",u:'https://www.panews.io/articles/01a104e6-c1c2-70be-9841-1ca527282589',d:'2026-10-04',s:'PANews',img:'images/img13.png',alt:'미국 백악관 AI 전담반 출범을 보도한 PANews 기사 화면',q:["미국 정부가 '슈퍼 지능 전담반'을 만들었어요. 첫 임무는 120일 안에 AI 위험을 조사해 보고서를 내는 거예요.","정부 공식 문서에서는 'AI' 대신 'Super Intelligence'를 쓰도록 했어요. 이름부터 바꾸는 겁니다.","OpenAI·Anthropic·Google·NVIDIA 등 6개 회사가 스스로 안전 규칙을 지키겠다고 약속했어요. 강제 규칙은 아니에요."],w:"AI를 국가 안보 문제로 다루는 미국의 공식 출발점이라, 앞으로 세계 AI 규제가 이 방향으로 흘러갈 수 있어요.",a:["정부가 ‘AI’라는 단어를 버린 이유 — 정책 브랜딩의 정치학","120일 시한 보고서 타임라인 정리"]},
{t:"Yann LeCun, Fortune 인터뷰에서 Dario Amodei를 'deluded'라고 직격",u:'https://nile1.com/yann-lecun-breaks-with-ai-godfathers-calls-anthropic-ceo-dario-amodei-deluded-over-extinction-warnings/',d:'2026-10-04',s:'NILE1',img:'images/img14.png',alt:'얀 르쿤의 다리오 아모데이 비판을 다룬 NILE1 기사 화면',q:["AI 대부 중 한 명인 얀 르쿤은 AI가 인류를 멸망시킬 걱정은 전혀 없다고 말했어요.","Anthropic CEO 아모데이의 멸종 경고를 두고 ‘망상’, 그가 속한 사상을 ‘독성 있다’고 직격했어요.","최근 AI 에이전트 사고는 기술이 신비해서가 아니라, 공사가 엉성해서 생긴 일이라고 잘라 말했어요."],w:"AI 안전 논쟁의 양대 진영인 멸종론과 실용주의가 튜링상 수상자끼리 정면으로 맞붙은 상징적 사건이에요.",a:["르쿤 vs 아모데이 — AI 안전 논쟁의 정치경제학","AI 안전에 몰린 수십억 달러는 어디로 갔나"]},
{t:"국내 금융권 덮친 'AI 해킹' — 7개 금융사, 웹 조회 방식 정보 탈취",u:'https://www.mt.co.kr/finance/2026/10/04/2026100416035928940',d:'2026-10-04',s:'머니투데이',q:["KB국민·신한·하나 등 7개 금융사가 AI로 추정되는 자동화 공격을 받았어요.","금고 문을 뜯은 게 아니라 홈페이지 조회를 로봇처럼 빠르게 돌렸고, 흔적에서 중국산 도구 ARTEX가 발견됐어요.","다중인증을 해둔 곳은 뚫리지 않았고, 금융위는 전 금융권 긴급 점검에 들어갔어요."],w:"‘AI가 해커 손에 들어갔을 때’를 보여주는 국내 첫 대규모 실전 사례예요.",a:["ARTEX와 금융권 대응 총정리","뚫린 곳과 막힌 곳, 다중인증이 갈랐다"]},
{t:"AI 공격 온투업계까지 확산 — 모우다·PFCT 개인정보 유출",u:'https://www.mt.co.kr/finance/2026/10/04/2026100418091246059',d:'2026-10-04',s:'머니투데이',q:["추석 연휴에 PFCT에서는 302명의 주민번호 포함 정보, 모우다에서는 대출 신청 정보가 유출됐어요.","막아도 계속 들어오는 사람답지 않은 끈질김 때문에 AI 공격으로 추정돼요.","금융당국은 가상자산·증권업계까지 점검을 넓혔고, 대통령도 철저한 조사를 지시했어요."],w:"보안 인력이 적은 핀테크가 AI 자동 공격의 ‘약한 고리’라는 구조적 교훈이에요.",a:["연휴가 보안의 사각지대가 되는 이유","인간 해커 vs AI 해커, 공격 패턴 비교"]},
{t:"Capcom, RE Engine을 'AI 시대 게임 엔진'으로 — REX 프로젝트 공개",u:'https://revealednews.com/business/capcom-outlines-ai-integration-plans-for-re-engine-clarifies-generative-ai-stance',d:'2026-10-03',s:'RevealedNews',q:["Capcom이 자사 게임 엔진을 AI 시대에 맞게 뜯어고치는 REX 계획을 발표했어요.","AI가 그림을 그리는 대신 코드를 읽고, 쓰고, 버그를 잡는 개발 도우미 쪽으로 6개 시스템을 만들어요.","일부 시스템은 다른 사람들도 공부할 수 있도록 오픈소스로 공개할 예정이에요."],w:"대형 게임 스튜디오가 ‘AI가 이해할 수 있는 코드베이스’를 처음부터 설계하는 첫 로드맵이에요.",a:["AI가 만드는 게임이 아니라 AI와 만드는 게임","REX 6대 시스템 한 장 정리"]},
{t:'TechCrunch 특집: “텍스트 메시지 속에 사는 AI 에이전트들”',u:'https://techcrunch.com/category/artificial-intelligence/',d:'2026-10-04',s:'TechCrunch',q:["별도 앱 설치 없이 문자 메시지 안에서 일하는 AI 에이전트가 뜨고 있어요.","새 앱을 여는 대신 원래 쓰던 SMS나 iMessage 대화에 일을 부탁하는 방식이에요.","채팅 앱이 아니라 ‘문자 스레드’가 새로운 AI 접점이 되는 흐름이에요."],w:"앱 중심 화면에서 에이전트 중심 대화로 인터페이스가 이동한다는 구체적인 증거예요.",a:["앱이 죽고 에이전트가 산다 — 문자 에이전트 7종 사용기","문자 한 통으로 끝내는 AI"]},
{t:'LG U+ × 구글, Gemini로 크리에이터 AI 콘텐츠 제작 교육',u:'https://www.mt.co.kr/tech/2026/10/04/2026100323082890713',d:'2026-10-04',s:'머니투데이',q:["LG유플러스와 구글이 크리에이터 18명에게 Gemini로 영상 기획·제작·편집하는 법을 가르쳤어요.","260명 규모, 누적 조회수 1.5억인 크리에이터 커뮤니티에 AI 활용을 심는 시도예요.","AI가 사람을 대체한다기보다 기획과 제작을 돕는 도구라는 방향을 강조했어요."],w:"통신사와 빅테크가 크리에이터의 일상 작업에 생성형 AI를 표준 도구로 심는 국내 사례예요.",a:["LG U+ 교육 커리큘럼 뜯어보기","Gemini로 쇼츠 하나 기획→제작 실습"]},
{t:'arXiv, AI 논문 홍수에 월간 제출 제한 도입',u:'https://techstartups.com/2026/10/02/top-tech-news-today-october-2-2026-amazon-cloudflare-google-microsoft-suno-tesla-more/',d:'2026-10-02',s:'techstartups.com',q:["논문 저장소 arXiv가 10월 1일부터 한 달에 논문 2편까지만 올릴 수 있도록 제한했어요.","9월에는 4만 편 넘게 올라왔어요. 2년 전 같은 달의 두 배예요.","AI로 논문을 쉽게 찍어내며 낮은 품질의 제출물이 크게 늘어난 것이 배경이에요."],w:"AI가 그럴듯한 글의 생산 비용을 낮추자 과학 출판의 심사 시스템이 감당하지 못하는 첫 구조적 사례예요.",a:["논문 공장이 된 arXiv — 누가 검증하나","제출량 그래프로 보는 지식 생산 폭발"]}
]},
{key:'models',label:'🚀 새 모델·공식 발표',items:[
{t:'Google Research, TEE 기반 연합학습 시스템 오픈소스로 공개',u:'https://wisevoter.com/world/us/2026/10/04/google-implemented-new-federated-learning-system',d:'2026-10-04',s:'Google Research 공식 발표',img:'images/img15.png',alt:'구글의 TEE 기반 연합학습 시스템을 소개한 기사 화면',q:["구글이 내 폰 데이터는 폰에 둔 채 서버가 암호화된 계산만 하는 새 학습 시스템을 공개했어요.","비밀금고 같은 TEE 안에서 계산하고, 누가 무엇을 했는지 공개 장부에 적어 밖에서도 검증할 수 있게 했어요.","시스템은 오픈소스로 공개됐고 이미 Gboard 키보드 예측에 쓰이고 있어요."],w:"‘믿어주세요’식 프라이버시에서 ‘계산으로 확인할 수 있는’ 프라이버시로 넘어가는 변화예요.",a:["당신의 키보드가 몰래 학습하는 법","TEE+공개장부 조합 실습"]},
{t:'IBM Bob, 셀프호스티드·에어갭 배포 GA',u:'https://www.marktechpost.com/category/editors-pick/new-releases/',d:'2026-10-04',s:'IBM 공식 발표',q:["IBM의 AI 코딩 도우미 Bob이 이제 회사 내부망이나 인터넷 차단망에서도 돌아가요.","시험판을 벗어나 정식 출시됐어요.","완전 격리용 오픈 모델부터 Claude·Gemini·GPT까지 회사가 모델을 직접 고를 수 있어요."],w:"클라우드에 코드를 올릴 수 없던 금융·공공·국방 조직의 마지막 장벽이 낮아진 신호예요.",a:["에어갭에서도 도는 AI 코딩 에이전트","벤더 종속 없는 에이전트 스택"]},
{t:"Databricks, 디시전 모델 'ai_decide' 플랫폼 통합",u:'https://www.kucoin.com/news/flash/aws-cloudflare-databricks-integrate-decision-models-into-infrastructure',d:'2026-10-03',s:'BlockBeats',q:["Databricks가 거대 AI에게 매번 묻지 않고, 가벼운 판단은 작은 전용 모델에 맡기는 ai_decide를 내놨어요.","개발자는 SQL 한 줄로 이 판단 기능을 부를 수 있어요.","AWS와 Cloudflare에 이어 세 번째 큰 플랫폼이 ‘판단 전용 모델’을 인프라에 넣었어요."],w:"디시전 모델이 잠깐의 유행이 아니라 에이전트 인프라의 표준 부품으로 굳어지는 증거예요.",a:["디시전 레이어라는 새 인프라 계층","SQL 한 줄로 에이전트 라우팅"]},
{t:"Laya — '오픈소스 Jev' 디시전 모델",u:'https://huggingface.co/convaiinnovations/laya',d:'2026-10-04 업데이트',s:'Hugging Face 트렌딩',q:["Laya는 글을 쓰지 않고 판단만 하는 4억2100만 개 크기의 작은 모델이에요.","질문 하나를 0.03초에 처리해 ‘오픈소스 Jev’라고 불려요.","정직한 확률을 말하는 게 이득이 되도록 배웠고 100개가 넘는 언어를 지원해요."],w:"디시전 모델 대중화의 대표 주자로, 에이전트 도구에 빠르게 흡수되고 있어요.",a:["Jev vs Laya 비용·속도 대결","가드레일 만들기"]},
{t:'AWS Strands Decider 2B — 오픈소스 디시전 모델',u:'https://tech-insider.org/what-amazon-actually-released/',d:'2026-10-01',s:'AWS Strands Labs',q:["AWS가 선택지에 점수를 매기는 일에 특화된 작은 오픈소스 모델을 공개했어요.","학습 데이터와 만드는 법까지 모두 열어뒀어요.","거대한 서버가 아니라 노트북 GPU에서도 돌릴 수 있어요."],w:"Cloudflare와 Databricks까지 이어진 ‘디시전 모델’이라는 새 시장의 출발점이에요.",a:["2주 만에 생긴 새 시장 — 디시전 모델 4종 총정리"]}
]},
{key:'papers',label:'📄 주목할 논문',items:[
{t:"VISTA — AI에게 '장기 기억 눈'을 달아준 시각 하네스",u:'https://arxiv.org/abs/2610.02200',d:'2026-10-01',s:'arXiv cs.AI',q:["AI가 본 장면을 그대로 기억했다가 필요할 때 다시 꺼내보는 ‘눈’을 붙인 연구예요.","퍼즐 게임에서 인간 효율 기준 40점이던 성적이 만점으로 올랐어요.","25개 게임을 모두 풀었고, 사람보다 적게 움직였어요."],w:"모델을 바꾸지 않고 주변 장치인 ‘하네스’만 잘 만들어도 최상급 성능이 나온다는 증거예요.",a:["에이전트는 모델 반, 하네스 반","만점 달성 게임 플레이"]},
{t:'GALA — 1000배 가벼워진 실시간 3D 아바타 기술',u:'https://arxiv.org/abs/2610.02207',d:'2026-10-01',s:'arXiv cs.AI',q:["3D 아바타를 움직이는 무거운 AI 계산을 가벼운 ‘표정 블렌드’ 방식으로 바꿨어요.","필요한 계산량이 최대 1000분의 1로 줄었어요.","품질은 유지하면서 휴대폰에서도 초당 60프레임으로 아바타가 움직여요."],w:"버추버와 AI 휴먼 서비스가 실시간으로 움직이기 어려웠던 병목을 푸는 실전 최적화예요.",a:["1000배 가벼워진 아바타 비교 데모","온디바이스 아바타 구현 가이드"]},
{t:'ScholarCatalyst — “AI 에이전트는 과학자의 직관을 못 배웠다”',u:'https://arxiv.org/abs/2610.02202',d:'2026-10-01',s:'arXiv cs.AI',q:["과학자 184명이 어떤 논문이 실제로 연구를 진전시켰는지 직접 점수를 매겼어요.","그 점수를 바탕으로 논문 검색 AI의 실력을 재는 시험을 만들었어요.","결과는 놀랍게도 똑똑한 AI 에이전트가 단순 키워드 검색보다 못했어요."],w:"AI가 과학자의 직관을 아직 배우지 못했다는 반직관적인 실측 결과예요.",a:["AI는 과학자의 직관을 못 배웠다","논문 검색 AI 비교"]},
{t:"RPG — '연습으로 강해지는 로봇' 자가 개선 프레임워크",u:'https://arxiv.org/abs/2610.02204',d:'2026-10-01',s:'arXiv cs.AI',q:["로봇이 두뇌 자체를 고치지 않고 연습만으로 스스로 강해지는 방법이에요.","가상 연습장에서 실패를 분석해 요령을 발전시켰고, 22개 조작 과제 성공률이 28.6%에서 95.0%로 올랐어요.","실제 로봇으로 옮긴 뒤에는 30번 테스트를 모두 성공했어요."],w:"다시 학습시키지 않고도 연습으로 강해지는 로봇이라는 새 학습법이에요.",a:["로봇도 학원 다닌다 — 시뮬→실전","에이전트 자기 교정 트렌드"]},
{t:'KaliBench — “해킹 AI는 아직 명령어 한 줄도 못 친다”',u:'https://arxiv.org/abs/2610.02206',d:'2026-10-01',s:'arXiv cs.CL · NeurIPS 2026',q:["보안 업무의 자연어 요청을 리눅스 명령어로 바꾸는 실력을 재는 8,504문제짜리 시험이에요.","명령어는 글자 하나만 틀려도 오답으로 처리했어요.","오픈 모델 가운데 어느 것도 정답률 42%를 넘지 못했어요."],w:"AI 보안 에이전트의 현재 실력을 과장 없이 숫자로 보여주는 결과예요.",a:["보안 에이전트 실태 고발","NeurIPS 2026 벤치마크 소개"]},
{t:"AutoCompact — 코딩 에이전트가 '스스로 메모리를 정리'하는 법",u:'https://arxiv.org/abs/2610.02163',d:'2026-10-01',s:'arXiv cs.CL',q:["코딩 에이전트가 길어진 대화를 언제 정리할지 스스로 배우는 기술이에요.","무엇을 버리고 무엇을 짧게 요약할지도 직접 판단해요.","코딩 시험 SWE-bench 성적이 9.2%포인트 올랐어요."],w:"코딩 에이전트의 큰 고통인 기억 관리를 사람이 정한 규칙 대신 학습으로 푼 접근이에요.",a:["에이전트가 스스로 메모리를 정리한다","컨텍스트 엔지니어링 트렌드"]},
{t:'“AI의 자가 치유는 착각이었다” — self-repair의 수학적 해명',u:'https://arxiv.org/abs/2610.02173',d:'2026-10-01',s:'arXiv cs.CL',q:["AI가 손상된 기능을 스스로 고치는 것처럼 보이는 유명한 현상을 다시 살폈어요.","알고 보니 새로 고친 것이 아니라 원래 있던 여유가 드러난 것이었어요.","연구진은 네 가지 모델군에서 같은 수학 법칙이 성립하는지 확인했어요."],w:"AI 해석 분야의 유명한 수수께끼에 깔끔한 수학적 설명을 제시했어요.",a:["AI의 자가 치유는 착각이었다","AI 해석가능성 입문"]},
{t:"GraphForge — '일하는 AI 에이전트' 연습문제 자동 생성",u:'https://arxiv.org/abs/2609.38923',d:'2026-09-30',s:'arXiv cs.AI · HF Papers',q:["일하는 AI 에이전트를 훈련시킬 고품질 연습문제를 자동으로 만드는 파이프라인이에요.","현실적인 문제이면서도 답을 정확히 채점할 수 있게 구성했어요.","이 데이터로 공부한 모델은 여러 에이전트 시험에서 성적이 크게 올랐어요."],w:"현실적이면서 채점 가능한 에이전트 훈련 데이터를 만들기 어려웠던 문제를 푸는 방법이에요.",a:["에이전트 훈련 데이터 파이프라인","오픈소스 에이전트 성능 올리기"]}
]},
{key:'open',label:'💻 오픈소스·스킬·하네스',items:[
{t:'mattpocock/skills — 개인 설정 폴더가 별 27만 개',u:'https://github.com/mattpocock/skills',d:'2026-10-04',s:'GitHub Trending',img:'images/img16.png',alt:'mattpocock skills 깃허브 저장소 화면',q:["유명 개발자가 자기 AI 설정 파일 폴더를 통째로 공개했더니 별 27만 개가 찍혔어요.","대표 스킬 grill-me는 코드를 짜기 전에 계획을 집요하게 따져 묻는 검증관이에요.","한 줄 명령어로 이 스킬을 설치할 수 있어요."],w:"기본 AI만으로는 부족하다는 시장의 신호이자, 스킬이 새 소프트웨어 공급망이 되는 흐름의 상징이에요.",a:["왜 설정 폴더가 27만 스타를 받나","grill-me 프로젝트 검증 데모"]},
{t:"pbakaus/impeccable — AI UI를 '똑같지 않게' 만드는 디자인 언어",u:'https://github.com/pbakaus/impeccable',d:'2026-10-04',s:'GitHub Trending',q:["AI가 만든 화면이 왜 모두 비슷해 보이는지 짚는 디자인 지침 모음이에요.","색, 글자, 간격, 구성에서 쉽게 반복되는 버릇을 피하게 도와줘요.","에이전트가 디자인할 때 참고할 수 있는 전문 스킬로 공개됐어요."],w:"스킬이 범용 도구에서 디자인 같은 전문 분야로 나뉘는 흐름의 상징이에요.",a:["AI가 만든 UI가 다 똑같아 보이는 이유","impeccable 전후 비교"]},
{t:"addyosmani/agent-skills — '프로덕션급' 코딩 스킬",u:'https://github.com/addyosmani/agent-skills',d:'2026-10-04',s:'GitHub Trending',q:["구글의 유명 엔지니어 Addy Osmani가 코딩 스킬 묶음을 공개했어요.","코드 리뷰, 테스트, 설계처럼 실제 서비스에 필요한 습관을 담았어요.","AI가 단순히 코드를 내놓는 데서 끝나지 않고 품질까지 챙기게 만드는 지침이에요."],w:"신뢰받는 개인의 스킬이 사실상의 업계 표준이 되는 ‘스킬 권위 구조’가 생기고 있어요.",a:["프로덕션급 AI 코딩의 기준","일반 에이전트 vs 스킬 장착"]},
{t:"garrytan/gstack — Claude Code '가상 팀' 패키지",u:'https://github.com/garrytan/gstack',d:'2026-10-04',s:'GitHub Trending',q:["Garry Tan의 Claude Code 설정을 통째로 공개한 가상 팀 패키지예요.","CEO, 디자이너, QA 등 서로 다른 23개 역할을 담았어요.","한 사람이 상황에 따라 AI에게 서로 다른 팀원의 모자를 씌우는 방식이에요."],w:"AI를 도구 하나가 아니라 팀 전체처럼 쓰는 방법이 복사 가능한 템플릿으로 퍼지고 있어요.",a:["1인 스타트업의 23개 가상 역할","기획→릴리스 챌린지"]},
{t:"DietrichGebert/ponytail — AI의 '과잉 코딩'을 고치는 스킬",u:'https://github.com/DietrichGebert/ponytail',d:'2026-10-04',s:'GitHub Trending',q:["AI가 필요 이상으로 복잡한 코드를 짜는 버릇을 고쳐주는 스킬이에요.","기능에 꼭 필요한 만큼만 만들도록 계속 단순함을 확인해요.","핵심 구호는 ‘안 짠 코드가 최고의 코드’예요."],w:"에이전트 코딩의 고질병인 과잉 공학을 스킬 한 장으로 바로잡는 값싼 해법이에요.",a:["AI가 코드를 과하게 짜는 이유와 처방","스킬 on/off 코드량 비교"]},
{t:"calesthio/OpenMontage — 오픈소스 'AI 영상 제작 스튜디오'",u:'https://github.com/calesthio/OpenMontage',d:'2026-10-04',s:'GitHub Trending',q:["AI 코딩 도우미를 영상 제작 스튜디오로 바꾸는 오픈소스 시스템이에요.","기획부터 편집까지 12개 작업 흐름을 엮었어요.","영상 제작에 쓸 수 있는 스킬도 700개 넘게 담았어요."],w:"에이전트 활용이 코드를 넘어 미디어 제작 전체로 확장되는 신호탄이에요.",a:["코딩 에이전트가 영상 스튜디오가 될 때","1분 홍보 영상 만들기"]},
{t:'antirez/ds4 — Redis 창시자의 DeepSeek 4 로컬 실행 엔진',u:'https://github.com/antirez/ds4',d:'2026-10-04',s:'GitHub Trending',q:["Redis를 만든 개발자가 DeepSeek 4를 내 컴퓨터에서 돌리는 엔진을 만들었어요.","클라우드에 보내지 않고 로컬 기계에서 모델을 실행하는 도구예요.","맥과 리눅스는 물론 AMD 장비도 지원해요."],w:"대형 오픈 모델을 개인 컴퓨터에서 돌리는 일이 취미를 넘어 실용 인프라로 이동하고 있어요.",a:["Redis 창시자의 추론 엔진 설계","맥북 로컬 구동 속도 테스트"]},
{t:'OpenCut-app/OpenCut — 오픈소스 CapCut 대안',u:'https://github.com/OpenCut-app/OpenCut',d:'2026-10-04',s:'GitHub Trending',q:["짧은 영상을 편집하는 CapCut의 오픈소스 대안을 표방한 프로젝트예요.","누구나 코드를 보고 고치거나 자기 방식으로 확장할 수 있어요.","특정 회사의 편집 도구 하나에만 기대지 않으려는 선택지를 만들어요."],w:"숏폼과 AI 영상 붐 속에서 편집 도구도 한 회사에 묶이지 않으려는 흐름이에요.",a:["CapCut 의존에서 벗어나기","OpenCut vs CapCut 속도 대결"]}
]},
{key:'data',label:'🗃️ 데이터셋',items:[
{t:'alania-synthetic-speech-tr — 터키어 합성 음성 197만 행',u:'https://huggingface.co/datasets/cloud0day3/alania-synthetic-speech-tr',d:'2026-10-04',s:'Hugging Face Datasets',q:["터키어로 된 합성 음성 데이터 197만 행이 공개됐어요.","AI가 터키어 음성을 듣고 말하는 연습에 쓸 수 있는 큰 교재예요.","공개 데이터라 작은 팀도 처음부터 녹음 자료를 모두 모으지 않고 시작할 수 있어요."],w:"음성 AI 경쟁의 연료는 비영어 데이터예요. 이런 공개 데이터가 진입 장벽을 낮춰요.",a:["음성 AI의 다음 전장은 비영어 데이터","터키어 TTS 맛보기"]},
{t:"Tiny_Theory_of_Mind — AI에게 '눈치'를 가르치는 데이터셋",u:'https://huggingface.co/datasets/AxiomicLabs/Tiny_Theory_of_Mind',d:'2026-10-04',s:'Hugging Face Datasets',q:["AI가 상대의 의도와 생각을 읽는 ‘눈치’를 연습하는 작은 데이터셋이에요.","총 2,000행의 상황과 답을 담았어요.","코딩 실력만이 아니라 사람 사이의 맥락을 이해하는지도 시험할 수 있어요."],w:"에이전트 평가가 코딩을 넘어 사회적 추론으로 이동하는 지표예요.",a:["AI 에이전트에게 눈치를 가르치기","유명 모델 눈치 점수 비교"]}
]}
];
const morningRoot=document.getElementById('morning-report');const eveningRoot=document.getElementById('evening-report');const latestRoot=document.getElementById('report');const oldRoot=document.getElementById('old-report');let n=0;
function esc(v){return String(v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function card(x,key,label){n++;const image=x.img?'<figure class="card-media"><img src="'+esc(x.img)+'" alt="'+esc(x.alt)+'" loading="lazy"></figure>':'';const copyIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';const shareIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="6" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="18" cy="19" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m8.3 10.9 7.4-4.5M8.3 13.1l7.4 4.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';return '<article class="card '+key+(x.img?' image-card':'')+'" data-url="'+esc(x.u)+'">'+image+'<div class="card-body"><div class="meta"><span class="tag">'+esc(label)+'</span><time>'+esc(x.d)+'</time><span>· '+esc(x.s)+'</span></div><h4>'+esc(x.t)+'</h4><ul class="summary">'+x.q.map(function(v){return '<li>'+esc(v)+'</li>'}).join('')+'</ul><p class="why"><strong>왜 중요한가요?</strong> '+esc(x.w)+'</p><p class="angles"><b>콘텐츠 각도</b>'+x.a.map(function(v){return ' · '+esc(v)}).join('')+'</p><div class="source"><div class="card-actions"><a href="'+esc(x.u)+'" target="_blank" rel="noopener noreferrer" aria-label="'+esc(x.t)+' 원문 열기">원문 보기</a><button class="card-action copy-card" type="button" aria-haspopup="menu" aria-expanded="false">'+copyIcon+'복사</button><button class="card-action share-card" type="button">'+shareIcon+'공유</button></div><span class="index">'+String(n).padStart(2,'0')+'</span></div></div></article>'}
function renderGroup(g,root){const section=document.createElement('section');section.className='section '+g.key;section.dataset.category=g.key;const note=g.note?'<span>'+esc(g.note)+'</span>':'<span>'+g.items.length+'개의 신호</span>';section.innerHTML='<div class="section-title"><h3>'+esc(g.label)+'</h3>'+note+'</div><div class="grid">'+g.items.map(function(x){return card(x,g.key,g.label)}).join('')+'</div>';root.appendChild(section)}
morningGroups.forEach(function(g){renderGroup(g,morningRoot)});eveningGroups.forEach(function(g){renderGroup(g,eveningRoot)});latestGroups.forEach(function(g){renderGroup(g,latestRoot)});groups.forEach(function(g){renderGroup(g,oldRoot)});
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