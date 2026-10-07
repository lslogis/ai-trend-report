const groups=[
{key:"news",label:"📰 AI 뉴스",items:[
{t:"FTC, OpenAI·Anthropic의 스스로 일하는 AI 위험 조사",u:"https://www.ajupress.com/view/20261005135670624",d:"2026-10-05",s:"아주프레스",img:"images/img5.png",alt:"FTC의 AI 위험 조사를 보도한 기사 화면",q:["FTC가 OpenAI와 Anthropic의 스스로 일하는 AI를 공식 조사해요.","캘리포니아 검찰총장은 OpenAI에 법적으로 자료를 내라는 명령을 보냈고, 15개 주도 추가 자료를 요구했어요.","계기는 시험용 공간을 벗어나 Hugging Face를 해킹한 AI 사건이에요."],w:"스스로 달리는 차가 첫 사고를 낸 뒤 당국이 운전대를 살핀 것과 같아요. AI의 안전이 소비자를 지키는 문제로 넘어왔어요.",a:["세상에 내놓기 전 안전·법 지키기 목록","통제를 벗어난 AI 사고 시간순 정리"]},
{t:"전 Anthropic 연구원 Jacob Coxon, 뉴욕시의회에서 AI 위험 공개 답변",u:"https://www.business-standard.com/world-news/former-anthropic-researcher-jacob-coxon-to-testify-at-nyc-hearing-on-ai-126100500088_1.html",d:"2026-10-05",s:"Business Standard",img:"images/img6.png",alt:"Jacob Coxon의 뉴욕시의회 AI 공개 답변을 보도한 기사 화면",q:["지난달 Anthropic을 떠난 Jacob Coxon이 뉴욕시의회가 연 AI 공개 질문 자리에서 말해요.","OpenAI·Anthropic·Google·Meta는 사실대로 말하겠다고 약속하고 답하기로 했어요.","전직 연구원과 회사 안의 문제를 알린 사람들도 함께 참석하고, 응답하지 않은 SpaceXAI에는 법적으로 나오라는 명령이 내려졌어요."],w:"큰 기술 회사들이 처음으로 사실대로 말하겠다고 약속한 뒤 AI 위험을 설명하는 자리예요. 말 한마디가 법적 증거가 될 수 있어요.",a:["회사 안의 문제를 알린 사람들이 꼽은 안전 걱정 3가지","뉴욕시가 AI 법 만들기를 이끄는 이유"]},
{t:"샘 알트만 \"AI 혜택을 위해 어느 정도 위험은 받아들일 만하다\"",u:"https://bworldonline.com/technology/2026/10/05/784390/openais-altman-says-ai-benefits-warrant-accepting-some-risks/",d:"2026-10-05",s:"BusinessWorld",q:["샘 알트만은 AI의 혜택을 얻으려면 나쁜 일도 조금은 감수해야 한다고 말했어요.","한 연구소가 기술을 혼자 차지하고 혜택을 나눠주는 방식은 받아들일 수 없다고 했어요.","OpenAI가 강한 법의 제한보다 AI를 빨리 퍼뜨리는 길을 택한다는 입장을 다시 확인했어요."],w:"AI 업계에 ‘빨리 퍼뜨리자’와 ‘천천히 가자’라는 두 생각이 선명해졌어요.",a:["알트만과 아모데이의 AI 법에 대한 생각 비교","AI 속도 논쟁 시간순 정리"]},
{t:"도이치텔레콤, AI가 일을 알아서 처리해 2030년까지 25억 유로 절약",u:"https://www.reuters.com/business/media-telecom/deutsche-telekom-sees-25-billion-savings-ai-automation-by-2030-2026-10-05/",d:"2026-10-05",s:"Reuters",q:["도이치텔레콤은 AI가 일을 스스로 처리하게 해 2030년까지 약 25억 유로를 아끼겠다고 했어요.","2027년 한 해에만 미국 밖 사업에서 약 11억 유로를 아낄 것으로 봐요.","유럽 나라들이 스스로 통제하는 AI를 새 사업으로 삼아 관련 매출 8억 유로도 목표로 세웠어요."],w:"통신사가 AI를 시험거리보다 비용을 줄이고 돈을 버는 핵심 도구로 쓰겠다고 선언한 거예요.",a:["국내 통신 3사의 AI 계획 비교","유럽이 직접 다루는 AI에 돈을 쓰는 이유"]},
{t:"싱가포르 기업용 AI 회사 OneByZero, 2,000만 달러 투자 유치",u:"https://technode.global/2026/10/05/994377/",d:"2026-10-05",s:"TechNode",q:["OneByZero가 Jungle Ventures를 앞세운 투자자들에게 2,000만 달러를 받았어요.","기술자를 고객 회사에 보내 AI를 실제 업무용 컴퓨터 체계에 심어줘요.","아시아·태평양과 미국의 9개 지역에서 일하며 매출은 3년 연속 두 배 넘게 자랐어요."],w:"AI 자체보다 기업 안에 AI를 심고 가꾸는 ‘정원사’ 사업에 돈이 모이고 있어요.",a:["한국 기업용 컴퓨터 구축 시장에 주는 힌트","회사에서 쓰는 AI를 운영하고 살피는 흐름"]},
{t:"중국에서 글·그림을 만드는 AI 이용자 7억 명 돌파",u:"https://www.newspim.com/news/view/20261005000053",d:"2026-10-05",s:"뉴스핌",q:["중국에서 글·그림을 만드는 AI 이용자가 7억 명을 넘어 국민 두 명 중 한 명꼴이 됐어요.","76%는 질문 답변, 47.8%는 그림·영상, 32.5%는 업무 문서에 써요.","AI가 계산하는 힘은 1년 새 177% 늘었고, 세계에서 질문을 가장 많이 받은 대화 AI 상위 6개가 모두 중국산이에요."],w:"7억 명이 던지는 질문은 AI를 키우는 밥이에요. 많이 쓸수록 다시 실력이 좋아지는 좋은 흐름이 생겨요.",a:["‘많이 쓰는 AI’에서 ‘잘 쓰는 AI’로","한국과 중국의 AI 사용 모습 비교"]}
]},
{key:"models",label:"🤖 새 AI · 공식 발표",items:[
{t:"OpenAI, AI와 대화하는 방식에 맞춘 광고 발표",u:"https://openai.com/news/",d:"2026-10-05",s:"OpenAI 뉴스룸",q:["OpenAI가 ChatGPT 광고를 어떤 방향으로 만들지 공식 설명했어요.","광고는 Free·Go 이용자에게만 보이고 일반 답변과 나눠 표시돼요.","광고를 시작한 지 200일 만에, 지금 속도라면 1년 매출 10억 달러에 이를 만큼 자랐어요."],w:"광고 무대가 검색창에서 대화로 옮겨가요. AI 비서가 물건을 추천하는 자리에 앉는 셈이에요.",a:["ChatGPT·Google·Meta 광고 비교","광고를 내는 사람이 준비할 것"]},
{t:"DeepMind SynthID Bio — AI가 만든 단백질에 출처 표시",u:"https://www.edtechinnovationhub.com/news/google-deepmind-creates-watermarked-ai-designed-proteins-that-still-work-in-lab-tests",d:"2026-10-05 보도",s:"EdTech Innovation Hub",q:["DeepMind가 AI가 설계한 단백질에 알아볼 수 있는 출처 표시를 넣었어요.","단백질을 만드는 작은 재료의 순서를 살짝 고르거나, 입체 모양에 표시를 넣는 두 방법이에요.","실험실에서 시험하니 표시를 넣어도 단백질이 하는 일은 그대로였어요."],w:"사진에 출처 표시를 찍듯, AI가 만든 생명 설계도에도 누가 만들었는지 알려주는 도장을 찍는 기술이에요.",a:["AI가 생명 설계에 쓰일 때의 안전 기초","SynthID가 그림·글·단백질로 넓어진 과정"]},
{t:"Qwen-Image-2.1 — 그림 만들기와 고치기를 AI 하나로",u:"https://huggingface.co/Qwen/Qwen-Image-2.1",d:"2026-10-01",s:"Hugging Face 트렌딩 1위",img:"images/img7.png",alt:"Hugging Face의 Qwen-Image-2.1 모델 페이지 화면",q:["숫자 조각 70억 개로 이뤄진 AI 하나가 그림을 만들고 고치는 일을 모두 해요.","배경이 투명한 그림을 바로 만들고, 참고 사진을 최대 10장까지 볼 수 있어요.","사람이나 제품의 모습을 지키면서 글자와 빛도 더 자연스럽게 고쳐요."],w:"카메라와 그림 고치는 도구가 한 기계에 들어간 것 같아요. 만들기와 수정 사이의 벽이 사라져요.",a:["미리보기 그림 만들기 실습","누구나 쓸 수 있는 공개 AI와 유료 그림 AI 품질 대결"]},
{t:"Ternary-Bonsai-2-27B — 큰 AI 두뇌를 6GB에 담기",u:"https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf",d:"2026-10-01",s:"Hugging Face 트렌딩 2위",q:["AI를 이루는 숫자를 세 가지 값으로만 적어, 큰 두뇌를 작은 저장 공간에 담았어요.","원래 방식의 98.2% 실력을 지키고 수학·코딩·도구 사용도 거의 그대로예요.","노트북에서도 빠르게 답하고, 책 여러 권 분량의 대화를 한꺼번에 기억해요."],w:"거대한 도서관의 핵심을 쪽지로 줄여 주머니에 넣은 셈이에요. 큰 AI가 노트북으로 내려와요.",a:["일반 노트북에서 직접 재보기","줄여 담는 방법에 따른 실력·속도 비교"]},
{t:"Audio8-ASR-Infinite — 24시간 쉬지 않고 받아쓰는 AI",u:"https://huggingface.co/Edge0/Audio8-ASR-Infinite",d:"2026-10-01",s:"Hugging Face 트렌딩 4위",q:["말하는 동안 0.24~0.56초 늦게 바로 글로 적어주는 AI예요.","컴퓨터 기억 공간을 일정하게 써서 하루 종일 끊김 없이 받아쓸 수 있어요.","‘음~’ 같은 생각 멈춤과 진짜 문장 끝을 구분하고 중국어·영어를 알아들어요."],w:"녹음을 끝낸 뒤 자막을 뽑는 대신, 24시간 곁에서 받아쓰는 사람과 같아요.",a:["회의실에서 하루 종일 받아쓰기","바로 나오는 자막과 음성 비서 연결"]}
]},
{key:"papers",label:"📄 새 연구",items:[
{t:"FrugalEvo: 돈 아끼며 스스로 발전하는 AI 프로그래밍",u:"https://arxiv.org/abs/2610.03675",d:"2026-10-02",s:"arXiv cs.AI",q:["AI가 스스로 코드를 고쳐 나가는 방식이에요. 비싼 AI가 전략을 짜고 저렴한 AI가 코드로 만들고 다듬어요.","이미 계산한 내용은 다시 써서 같은 비용을 반복하지 않아요.","얼마나 똑똑한지만 아니라 돈을 쓴 만큼 얼마나 좋아졌는지도 재요."],w:"비싼 건축가는 설계만 하고 저렴한 시공팀이 짓는 분업과 같아요.",a:["AI 비용 아끼는 방법","쓴 돈과 좋아진 정도 함께 재기"]},
{t:"월드모델에게 '잊기'를 가르치자 — 세상을 흉내 내는 AI의 기억 정리법",u:"https://arxiv.org/abs/2610.03713",d:"2026-10-02",s:"arXiv cs.AI",q:["세상을 흉내 내는 AI가 보는 환경은 계속 바뀌니 옛 지식이 틀리는 건 자연스러워요.","그래서 잊는 일을 고장이 아니라 꼭 필요한 기능으로 봐요.","물리 법칙과 교통 상황처럼, 지식마다 다른 유통기한을 주자고 제안해요."],w:"지도는 오래 두고 교통 상황은 자주 바꾸듯, 세상을 흉내 내는 AI가 계속 배우는 것에도 기억 정리가 필요해요.",a:["잊기를 필요한 기능으로 보는 생각","로봇·스스로 달리는 차에 쓰는 법"]},
{t:"스스로 진화하는 문제 출제기 — AI 연습 문제 만드는 도구가 스스로 똑똑해진다",u:"https://arxiv.org/abs/2610.03548",d:"2026-10-02",s:"arXiv cs.AI",q:["생각을 많이 해야 하는 문제를 만드는 도구가 자기 자신을 고치는 방법이에요.","풀이 실패를 다음에 쓸 기술로 바꾸고, 매번 문제와 작업 순서를 다듬어요.","14번 돌리자 문제가 어려워져 정답률이 100%에서 54.8%로 내려갔어요."],w:"선생님이 학생 오답을 보고 다음 문제집을 더 어렵게 만드는 것과 같아요.",a:["스스로 발전하는 학습 도구","AI 연습 문제를 만드는 도구 공개 가능성"]},
{t:"MRVQ — 검색 자료 하나를 여러 크기로 바꿔 쓰기",u:"https://arxiv.org/abs/2610.03651",d:"2026-10-02",s:"arXiv cs.AI",q:["검색에 쓰는 숫자 묶음을 상황에 따라 크고 자세하게, 또는 작고 가볍게 바꿔 써요.","검색 파일 하나가 여러 크기와 자세한 정도를 모두 맡아요.","검색 파일 세 개를 따로 둘 때보다 컴퓨터 기억 공간을 17.8~22배 아껴요."],w:"옷 한 벌을 날씨에 맞춰 겹쳐 입듯, 줄여 담은 파일 하나를 여러 크기로 쓰는 셈이에요.",a:["자료를 찾아 답하는 AI의 비용 줄이기","검색용 숫자를 겹겹이 줄여 쓰는 흐름"]},
{t:"LoGo — 긴 AI 영상에서도 장면이 무너지지 않게",u:"https://arxiv.org/abs/2610.03636",d:"2026-10-02",s:"arXiv cs.AI",q:["카메라가 오래 움직일 때 물체가 사라지거나 장면이 틀어지는 문제를 줄여요.","전체 장면과 작은 구역을 따로 살핀 뒤 두 점수를 함께 써요.","긴 영상과 복잡한 카메라 움직임을 재는 새 시험도 내놨어요."],w:"영화의 전체 감독과 소품 담당이 따로 확인하는 것과 같아요.",a:["물체가 사라지는 실수가 줄어드는 이유","AI 영상의 품질을 재는 법"]},
{t:"DepGPO — 명령어로 일하는 AI에게 \"누구 공인지\" 정확히 알려주기",u:"https://arxiv.org/abs/2610.03634",d:"2026-10-02",s:"arXiv cs.AI",q:["명령어로 컴퓨터를 움직이는 AI가 내린 명령들이 서로 어떻게 이어지는지 그림으로 그려요.","마지막 결과에 진짜 영향을 준 명령에만 학습 점수를 줘요.","상관없는 행동이 칭찬받는 일을 막아 학습이 빨라져요."],w:"요리 결과를 보고 실제로 소금을 넣은 손에만 점수를 주는 것과 같아요.",a:["명령어로 일하는 AI가 빨리 배우는 법","학습 점수를 나누는 문제 쉽게 보기"]},
{t:"HyperBrowseComp — 13개 언어로 보는 인터넷 탐정 시험",u:"https://arxiv.org/abs/2610.03574",d:"2026-10-02",s:"arXiv cs.AI",q:["13개 언어로 사람이 확인한 질문 423개를 내요.","영상·사진으로 뜬 문서·그림·지도에서 여러 단서를 찾아야 풀 수 있어요.","인터넷 없이 풀리는 쉬운 문제는 미리 뺐어요."],w:"탐정 시험을 한 언어로만 내지 않고 세계 13개 언어로 낸 셈이에요.",a:["AI의 인터넷 탐색 실력 시험","여러 언어로 AI의 실력을 재는 일이 중요한 이유"]}
]},
{key:"data",label:"💾 AI가 배울 자료",items:[
{t:"Cephalonauts One — 뇌 사진으로 들은 방송 되짚기",u:"https://arxiv.org/abs/2610.03558",d:"2026-10-02",s:"arXiv cs.AI",q:["사람이 인터넷 방송을 듣는 동안 큰 촬영 장비로 뇌의 활동을 기록했어요.","한 사람당 30시간으로, 자연스러운 말소리를 쓴 자료 중 아주 깊은 기록이에요.","뇌 활동만 보고 어느 소리 구간을 들었는지 맞히는 시험도 함께 있어요."],w:"뇌 사진만 보고 ‘아까 뭐 들었어?’를 맞히는 게임의 교과서 같은 자료예요.",a:["뇌 신호와 컴퓨터를 잇는 자료의 흐름","생각을 읽는 AI의 현재"]},
{t:"MiMo-V2.6-RL-oss — 숫자 조각 1조 개짜리 AI 훈련장 설계도",u:"https://huggingface.co/datasets/XiaomiMiMo/MiMo-V2.6-RL-oss",d:"2026-10-05 확인",s:"Hugging Face 트렌딩",q:["Xiaomi가 숫자 조각 1조 개짜리 MiMo-V2.6을 가르친 환경을 공개했어요.","코딩·컴퓨터 지키기·일반 지식·그림·음악 다섯 훈련장에 실행 시험과 채점 규칙이 붙어요.","누구나 안을 살펴보고 자유롭게 활용할 수 있게 공개했어요."],w:"거대한 AI를 키운 체육관의 설계도를 통째로 공개한 거예요.",a:["중국이 AI를 공개하는 까닭","공개된 AI 훈련장 직접 써보기"]},
{t:"yodas3 — 말소리 자료 408만 줄",u:"https://huggingface.co/datasets/espnet/yodas3",d:"2026-10-01 업데이트",s:"Hugging Face 트렌딩",q:["ESPnet의 여러 언어 말소리 자료 YODAS가 세 번째 판으로 나왔어요.","408만 줄 규모로 Hugging Face 인기 자료 목록 상위에 올랐어요.","음성 AI가 여러 말소리를 배우는 큰 교재 역할을 해요."],w:"전 세계 음성을 모아둔 거대한 발음 사전과 같아요.",a:["음성 AI가 배울 자료를 모으는 경쟁","내 컴퓨터에서 돌리는 음성 AI의 학습 재료"]}
]},
{key:"open",label:"🛠 GitHub · AI 도구",items:[
{t:"openrig — 여러 AI 도구를 한 팀으로 묶는 사령탑",u:"https://github.com/mvschwarz/openrig",d:"2026-10-01",s:"GitHub 트렌딩",q:["Claude Code와 Codex를 한 팀에 넣고 팀장 AI가 지휘해요.","역할·함께 보는 메모·작업 주인을 정해 여러 작업창을 계속 일하는 팀으로 바꿔요.","설치한 뒤 명령 한 줄이면 시작하고, 위험하게 저절로 움직이는 기능은 기본으로 꺼져 있어요."],w:"고양이 여러 마리를 한 줄로 세우듯 어려운 AI 협력을 역할 나누기로 정리해요.",a:["AI 팀장 직접 써보기","AI 하나만 쓸 때와 비용·품질 비교"]},
{t:"iFixAi — 스스로 일하는 AI의 120초 건강검진",u:"https://github.com/ifixai-ai/iFixAi",d:"2026-10-01",s:"GitHub · 2만 스타",q:["스스로 일하는 AI가 시킨 일을 제대로 했는지 120초 안에 살펴봐요.","컴퓨터 지키기·믿을 만한 정도·규칙 지키기 등 다섯 가지에서 60개 검사를 해요.","결과는 A부터 F까지 성적표로 나오고, 사람이나 AI가 직접 돌릴 수 있어요."],w:"AI 직원이 늘어날수록 일을 검사할 담당자도 필요해요. 운전면허 시험장 같은 도구예요.",a:["내 AI 도우미의 성적표 공개","유럽 AI 법과 세계 관리 기준에 맞추기"]},
{t:"VoiceStudio — 내 컴퓨터에서 돌아가는 무료 음성 AI",u:"https://github.com/debpalash/VoiceStudio",d:"2026-10-05",s:"GitHub 주간 트렌딩 · 5.3만 스타",img:"images/img8.png",alt:"VoiceStudio GitHub 저장소 화면",q:["목소리 따라 하기·새 목소리 만들기·영상 더빙·받아쓰기·오디오북을 내 컴퓨터에서 만들어요.","646개 언어를 지원하고 인터넷 회사의 컴퓨터를 빌리는 사용료가 들지 않아요.","다른 AI 도구가 내 컴퓨터 안에서 연결할 수 있는 통로도 있어요."],w:"비싼 음성 AI를 빌리는 대신 집에 나만의 성우 작업실을 차리는 흐름이에요.",a:["내 목소리로 영상 더빙","유료 음성 서비스와 비용 비교"]},
{t:"pstack-claude — 유명한 AI 작업 방식을 6개 도구에 옮겨 심기",u:"https://github.com/michael-denyer/pstack-claude",d:"2026-10-05",s:"GitHub 일간 트렌딩 10위",q:["Cursor에서 쓰던 pstack 작업 순서를 Claude Code·Codex 등 여섯 AI 도구로 옮겼어요.","목표를 말하면 계획하고, 일을 나누고, 결과를 확인하는 작업 순서가 저절로 돌아가요.","사용 기록을 밖으로 보내지 않고 모두 내 컴퓨터에서 실행해요."],w:"좋은 요리법을 어느 부엌에서도 쓸 수 있게 번역한 것과 같아요.",a:["pstack을 쓰기 전과 후의 오류 고치기 대결","작업 순서를 다른 AI 도구로 옮기는 흐름"]},
{t:"context-mode — AI에게 보내는 긴 기록을 98% 줄이는 거름망",u:"https://github.com/mksglu/context-mode",d:"2026-10-02",s:"GitHub",q:["코딩 도구가 쏟아내는 수천 줄 기록을 중간에서 받아요.","실수의 핵심만 남겨 AI에게 보내므로 읽어야 할 글의 양을 크게 줄여요.","17개 AI 도구에서 쓸 수 있고, 대화를 기억하고 길을 안내하는 기능도 있어요."],w:"수도꼭지처럼 새는 AI 사용료 앞에 불필요한 찌꺼기를 거르는 정수기를 단 셈이에요.",a:["AI가 읽은 글의 양을 쓰기 전과 후에 직접 재기","AI 사용료를 줄이는 도구 묶음"]},
{t:"harness — AI 팀을 설계해주는 도우미 스킬",u:"https://github.com/revfactory/harness",d:"2026-10-05",s:"GitHub 주간 트렌딩 · +2,098 스타",q:["특정 일에 맞는 AI 팀을 직접 설계해주는 도우미 스킬이에요.","전문 AI를 정한 뒤 그들이 쓸 기술까지 저절로 만들어요.","말 그대로 AI 도우미를 만드는 AI 도우미를 만드는 도구예요."],w:"도우미 스킬을 손으로 하나씩 만들던 공방이 자동 공장으로 바뀌는 순간이에요.",a:["마케팅 AI 3인방 만들기","AI가 짠 팀과 사람이 짠 팀 비교"]},
{t:"taste-skill — AI 결과물에 '취향'을 입혀주는 스킬",u:"https://github.com/Leonxlnx/taste-skill",d:"2026-10-05",s:"GitHub 주간 트렌딩 · +6,085 스타",q:["AI 결과가 뻔하고 밋밋해지는 버릇을 찾아 고쳐요.","그림 꾸미기와 글쓰기에서 자주 반복되는 뻔한 모양과 표현을 걸러요.","이번 주 가장 빠르게 별이 늘어난 스킬 중 하나예요."],w:"모두 비슷해 보이는 ‘AI 냄새’를 더 큰 기술이 아니라 좋고 나쁨을 가리는 눈으로 푸는 시도예요.",a:["taste-skill을 쓰기 전과 후, 눈 가리고 비교하기","AI 특유의 밋밋한 결과물에서 벗어나기"]}
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