/**
 * Portfolio Data
 * Contains all static content for the website.
 */

const DATA = {
    carousel: [
        {
            id: "lufin",
            className: "card-lufin",
            logoSmall: "./assets/LuFin/small_logo.png",
            slogan: "경험으로<br />배우는 금융",
            detail: "교실 속에서 금융 지식을 게임처럼 경험하며,<br />자산 관리 능력을 키우는 교육 플랫폼입니다.<br />가상의 화폐와 신용 등급으로 대출, 주식, 소비를 경험하고<br />경제 관념을 형성하는데 도움을 줍니다.",
            role: ["Backend 개발", "UI/UX 디자인"],
            period: "25.02 - 25.04",
            tool: ["React", "Spring Boot"],
            mockup: "./assets/LuFin/mockup.webp"
        },
        {
            id: "docshund",
            className: "card-docshund",
            logoSmall: "./assets/docshund/small_logo.png",
            slogan: "언어 장벽을 넘어<br />지식을 나누다",
            detail: "IT공식문서를 한국어로 함께 번역하는 공간과 국내 개발자들과<br />함께 공식문서와 기술에 대해 이야기할 수 있는 커뮤니티를<br />제공하여 영어 장벽으로 인한 정보 격차를 해소합니다.",
            role: ["Frontend 개발", "UI/UX 디자인"],
            period: "25.01 - 25.02",
            tool: ["React", "Tailwind CSS"],
            mockup: "./assets/docshund/mockup.webp"
        },
        {
            id: "spico",
            className: "card-spico",
            logoSmall: "./assets/spico/small_logo.png",
            slogan: "내 손 안에<br />AI 발표 코치",
            detail: "누구나 혼자서도 발표 실력을 키울 수 있도록,<br />실시간 피드백과 청중 모드와 같은 실전 연습 환경을 제공합니다.<br />혼자서도 실전처럼, 재미있게, 그리고 스마트하게 연습하세요.",
            role: ["Android 개발", "UI/UX 디자인"],
            period: "25.04 - 25.05",
            tool: ["Kotlin", "Jetpack Compose"],
            mockup: "./assets/spico/mockup.webp"
        },
        {
            id: "everymatch",
            className: "card-everymatch",
            logoSmall: "./assets/everymatch/small_logo.png",
            slogan: "내 팀 경기만 모은<br />맞춤 캘린더",
            detail: "좋아하는 팀의 경기 일정을 한눈에 확인하고,<br />경기 알림 서비스를 제공하는 통합 캘린더입니다.",
            role: ["Fullstack 개발", "UI/UX 디자인"],
            period: "24.11 - 24.11",
            tool: ["Vue.js", "Spring Boot"],
            mockup: "./assets/everymatch/mockup.webp"
        },
		{
			id: "42seoul",
			className: "card-42seoul",
			logoSmall: "./assets/42seoul/logo.png",
			slogan: "자기주도형<br />소프트웨어 교육",
			detail: "정해진 강의나 교재 없이 동료 평가와 자기주도 학습을 통해<br />성장하는 혁신적인 교육 과정입니다.<br />C언어 기반 시스템 프로그래밍과 OS 구조를 깊이 있게 학습합니다.",
			role: ["소프트웨어 개발"],
			period: "23.08 - 24.06",
			tool: ["C/C++", "System Programming"],
			mockup: "./assets/42seoul/mockup.webp",
		},
    ],
    coreValues: [
        {
            title: "풀사이클(Full-cycle) 개발 역량",
            image: "./assets/value_fullcycle.webp",
            desc: "기획, 디자인, 프론트엔드, 백엔드까지 전 과정을 직접 경험하여 개발의 전체 흐름을 이해합니다. 시스템 전체 구조를 이해하고 설계할 수 있습니다."
        },
        {
            title: "말보다 결과물로 대화하는 실행력",
            image: "./assets/value_mvp.webp",
            desc: "모호한 논의보다 눈에 보이는 결과물을 먼저 만듭니다. 프로토타입으로 빠르게 실체화하여 팀이 실제 제품을 보며 소통하도록 돕습니다."
        },
        {
            title: "도구(Git, Jira)를 활용한 효율적인 협업과 명확한 소통",
            image: "./assets/value_collaboration.webp",
            desc: "Git, Jira, Notion 등 협업 도구를 능숙하게 다루며, 명확한 팀 소통과 문서화를 통해 협업 생산성과 시너지를 극대화합니다."
        }
    ],
    skills: [
		{ name: "React", category: "Frontend", icon: "./assets/skill_icon/react.png", level: 3, summary: [
            "STOMP.js와 연동하여 안정적인 실시간 다채널 채팅 UI 및 상태 동기화 로직 구현",
            "재사용성과 유지보수성을 고려한 디자인 시스템 기반 공통 컴포넌트 라이브러리 설계",
            "Axios Interceptor를 통한 전역 예외 처리 및 토큰 관리 파이프라인 구축"
        ] },
        { name: "Zustand", category: "Frontend", icon: "./assets/skill_icon/zustand.svg", level: 4, summary: [
            "인증 정보 및 실시간 알림 등 복잡한 전역 상태를 목적에 맞게 구조화하여 최적의 성능으로 관리",
            "비동기 작업 흐름(Async Flow)과 연동된 상태 설계 및 다수의 컴포넌트 간 데이터 일관성 보장"
        ] },
        { name: "Java", category: "Languages", icon: "./assets/skill_icon/java.png", level: 5, summary: [
            "객체지향 설계 원칙(SOLID)을 기반으로 확장 가능하고 유연한 모듈 구조 설계",
            "Spring AOP를 활용한 공통 관심사(보안, 로깅 등) 분리로 비즈니스 로직의 순수성 유지",
            "DB 락 메커니즘을 활용한 데이터 동시성 문제 해결 경험"
        ] },
        { name: "C", category: "Languages", icon: "./assets/skill_icon/c.png", level: 4, summary: [
            "포인터 기반 메모리 직접 관리 및 POSIX 시스템 호출을 통한 저수준 프로그래밍 이해",
            "pthread와 mutex를 활용한 멀티스레드 환경의 동기화 및 데드락 방지 구조 설계"
        ] },
        { name: "Spring Boot", category: "Backend", icon: "./assets/skill_icon/springboot.png", level: 4, summary: [
            "RESTful API 설계 표준 준수 및 전역 예외 처리 체계를 통한 견고한 서버 아키텍처 구축",
            "Spring Scheduler를 활용한 대규모 배치 데이터 처리 및 자동화 로직 구현"
        ] },
        { name: "JPA", category: "Backend", icon: "./assets/skill_icon/JPA.png", level: 3, summary: [
            "엔티티 설계와 연관관계 매핑을 활용한 도메인 모델 구성",
            "@Lock 어노테이션으로 비관적 락을 적용하여 동시성 제어 구현"
        ] },
        { name: "MyBatis", category: "Backend", icon: "./assets/skill_icon/mybatis.png", level: 4, summary: [
            "XML 기반 SQL 매핑 및 동적 쿼리 작성으로 복잡한 조인 쿼리 처리",
            "쿼리를 직접 제어하며 DB 구조와 실행 흐름을 명확하게 파악 가능"
        ] },
        { name: "MySQL", category: "Database", icon: "./assets/skill_icon/mysql.png", level: 4, summary: [
            "정규화 및 인덱스 설계를 통한 데이터 정합성 확보와 쿼리 성능 최적화",
            "트랜잭션 격리 수준 및 락 메커니즘을 활용한 안정적인 데이터베이스 운영"
        ] },
		{ name: "Git", category: "Tool", icon: "./assets/skill_icon/git.png", level: 5, summary: [
            "Git-Flow 전략 수립 및 브랜치 관리 컨벤션을 통한 팀 프로젝트 형상 관리 표준화",
            "CI/CD 파이프라인 연동 및 Webhook/API를 활용한 이슈 트래킹 프로세스 자동화"
        ] }
    ],
    projects: [
        {
            title: "LuFin <span class='custom-tooltip'>🏆<span class='custom-tooltip-text' style='font-size: 0.65rem;'>SSAFY 우수상 수상</span></span>",
            subtitle: "신용도 기반 금융 시뮬레이션 플랫폼",
            link: "./projects/lufin.html",
            logo: "./assets/LuFin/logo.png",
            tags: ["Java", "Spring Boot", "Spring Data JPA", "MySQL"],
            details: [
                "한정 수량 아이템 구매 시 발생하는 동시성 문제를 해결하기 위해 <strong>Pessimistic Lock(비관적 락)</strong>을 적용하여 트랜잭션의 데이터 정합성 보장",
                "<strong>Spring AOP</strong>와 커스텀 어노테이션을 활용하여 교사/학생별 권한 검증 로직을 비즈니스 로직과 분리하고 전역적으로 모듈화하여 보안 누락 방지 및 유지보수성 향상",
                "<strong>Jenkins와 Discord Webhook</strong>을 연동하여 코드 푸시부터 배포까지의 파이프라인 상태를 실시간으로 팀원에게 공유하는 모니터링 자동화 체계 구축",
                "<strong>SSL 인증서 보안 적용</strong> 및 Nginx 리버스 프록시 설정을 포함한 안정적인 운영 서버 인프라 환경 직접 구축"
            ]
        },
        {
            title: "DocshunD <span class='custom-tooltip'>🏆<span class='custom-tooltip-text' style='font-size: 0.65rem;'>SSAFY 우수상 수상</span></span>",
            subtitle: "IT 공식 문서 공동 번역 플랫폼",
            link: "./projects/docshund.html",
            logo: "./assets/docshund/small_logo.png",
            tags: ["React", "Zustand", "Tailwind CSS"],
            details: [
                "<strong>STOMP.js + SockJS</strong>를 기반으로 번역방별 독립적인 Pub/Sub 채널을 구성하여 다수의 사용자가 실시간으로 협업할 수 있는 채팅 및 편집 알림 시스템 아키텍처 설계",
                "<strong>Axios Interceptor</strong>와 전역 상태 관리를 통합하여 JWT 토큰 재발급 로직과 API 예외 처리를 모듈화하고 서비스 안정성 강화",
                "Figma를 통해 사용자 여정(User Journey)을 분석하고, 번역 효율을 극대화할 수 있는 <strong>반응형 대시보드 UI 및 사용자 흐름 직접 설계</strong>"
            ]
        },
        {
            title: "Spico <span class='custom-tooltip'>🏆<span class='custom-tooltip-text' style='font-size: 0.65rem;'>SSAFY 우수상 수상</span></span>",
            subtitle: "AI 기반 발표 연습 및 코칭 안드로이드 앱",
            link: "./projects/spico.html",
            logo: "./assets/spico/logo.png",
            tags: ["Kotlin", "Android (Jetpack Compose)", "Google Speech API"],
            details: [
                "실시간 <strong>STT(Speech To Text)</strong> 데이터와 <strong>Levenshtein Distance</strong> 알고리즘을 결합하여, 사용자의 발화 지점을 대본 문단 단위로 정밀하게 추적하는 매칭 로직 설계 및 구현",
                "<strong>Clean Architecture</strong> 기반의 모듈화로 Presentation-Domain-Data 계층 간 의존성을 분리하여 기능 확장성과 단위 테스트 효율성 확보",
                "<strong>GitLab Webhook</strong>과 <strong>Jira API</strong>를 연동하여 가상 브랜치 생성 및 MR 시 이슈 상태가 자동 동기화되는 <strong>Zero-Click 개발 협업 환경</strong> 구축",
                "팀의 생산성 향상을 위해 <strong>LLM(GPT) 기반의 커밋 메시지 자동 생성 도구</strong>를 개발하여 프로젝트 전반의 커밋 컨벤션 준수 자동화"
            ]
        },
        {
            title: "EveryMatch <span class='custom-tooltip'>🏆<span class='custom-tooltip-text' style='font-size: 0.65rem;'>SSAFY 우수상 수상</span></span>",
            subtitle: "프로스포츠 경기 일정 통합 캘린더",
            link: "./projects/everymatch.html",
            logo: "./assets/everymatch/small_logo.png",
            tags: ["Vue.js", "Spring Boot", "JWT", "SMTP"],
            details: [
                "<strong>Java, Spring Boot</strong>(Back-end) 개발",
                "<strong>Vue.js</strong> 기반 프론트엔드 레이아웃 구현 및 <strong>Pinia</strong>를 활용한 전역 상태 관리 로직 구축",
                "<strong>Spring Scheduler(@Scheduled)</strong>를 활용해 경기 시작 1시간 전 사용자에게 알림 이메일을 발송하는 배치 작업 구현",
                "<strong>JavaMailSender</strong>를 이용한 임시비밀번호, 경기 알림 이메일 발송 기능 구현",
                "외부 라이브러리를 사용하지 않고, <strong>vanilla CSS</strong>로 커스텀 디자인 시스템을 개발하여 UI 구현"
            ]
        },
        {
            title: "42 Seoul",
            subtitle: "자기주도형 소프트웨어 교육 과정",
            link: "./projects/42seoul.html",
            logo: "./assets/42seoul/logo.png",
            logoInvert: true,
            tags: ["C Language", "System Programming", "OS Architecture"],
            details: [
                "함수 길이 및 변수 선언 등 극한의 제약(Norminette) 조건 아래에서 로직의 최소 단위 분리와 재사용성을 고민하며 <strong>가독성 높은 클린코드 작성 역량</strong> 내재화",
                "동적 메모리 할당 시 발생할 수 있는 메모리 누수(Memory Leak)를 철저히 관리하고, 엣지 케이스를 사전에 차단하는 <strong>방어적 프로그래밍 습관</strong> 확립",
                "모든 기술적 선택에 대해 논리적으로 설명하고 피격 평가를 받는 과정을 통해 <strong>객관적인 엔지니어링 사고방식</strong> 함양"
            ]
        }
    ],
    experience: [
        {
            title: "삼성 청년 SW・AI 아카데미",
            period: "2024.07 ~ 2025.06",
            desc: "알고리즘 및 코딩 집중 교육을 통해 문제 해결력의 기초를 다지고, 기획부터 배포까지 다루는 실무형 프로젝트를 경험하는 교육 과정",
            subList: ["알고리즘 모의 A형 취득", "우수 수료자(상위 30%)"]
        },
        {
            title: "42서울",
            period: "2023.08 ~ 2024.07",
            desc: "정해진 강의나 교재, 교수 없이 전적으로 자기주도 학습과 동료 평가를 통해 성장하는 교육 과정",
            subList: ["C/C++ 기반 시스템 프로그래밍, 알고리즘, 네트워크 등 CS 학습"],
            delay: "delay-100"
        },
        {
            title: "서울여자대학교",
            period: "2018.03 ~ 2023.02",
            desc: "경영학과(본전공) / 디지털융합경영(연계전공)",
            infoBox: {
                title: "디지털융합경영전공이란?",
                desc: "IT와 경영학을 결합한 교육과정으로, 프로그래밍 언어(C/C++), 알고리즘, 컴퓨터 구조 등 기초 CS 지식과 데이터 분석(R/구글애널리틱스) 프로그래밍 학습"
            },
            delay: "delay-200"
        }
    ],
    awards: [
        {
            date: "2025.05.22",
            title: "삼성 청년 SW•AI 아카데미 자율프로젝트(도메인: 오픈소스) 우수상",
            sub: "AI 발표 코칭 안드로이드 앱 (Spico) 개발",
            link: "./projects/spico.html",
            rank: "3 위",
            delay: ""
        },
        {
            date: "2025.04.11",
            title: "삼성 청년 SW•AI 아카데미 특화프로젝트(도메인: 핀테크) 우수상",
            sub: "신용도 기반 초등학생 금융교육 시뮬레이션 (LuFin) 개발",
            link: "./projects/lufin.html",
            rank: "2 위",
            delay: "delay-100"
        },
        {
            date: "2025.02.21",
            title: "삼성 청년 SW•AI 아카데미 공통프로젝트(도메인: 웹디자인) 우수상",
            sub: "IT 개발 공식 문서 공동 번역 및 커뮤니티 (DocshunD) 개발",
            link: "./projects/docshund.html",
            rank: "3 위",
            delay: "delay-200"
        },
        {
            date: "2024.11.28",
            title: "삼성 청년 SW•AI 아카데미 관통프로젝트(도메인: 스포츠) 우수상",
            sub: "프로스포츠 경기일정 통합 캘린더 (EVERYMATCH) 개발",
            link: "./projects/everymatch.html",
            rank: "2 위",
            delay: "delay-300"
        }
    ],
    certifications: [
        {
            date: "2025.06.13",
            title: "ADsP (데이터분석 준전문가)",
            sub: "한국데이터산업진흥원",
            delay: ""
        },
        {
            date: "2024.12.13",
            title: "SQLD (SQL 개발자)",
            sub: "한국데이터산업진흥원",
            delay: "delay-100"
        },
        {
            date: "2022.11.25",
            title: "정보처리기사",
            sub: "한국산업인력공단",
            delay: "delay-200"
        },
        {
            date: "2022.01.14",
            title: "GTQ 1급 (그래픽기술자격)",
            sub: "한국생산성본부",
            delay: "delay-300"
        }
    ],
    reviews: [
        {
            id: 1,
            author: "강O주",
            project: "Spico",
            summary: "짧은 시간 안에 코칭모드 기능을 완성해낸 모습이 정말 인상 깊었어요.",
            fullContent: `<h1>짧은 시간 안에 코칭모드 기능을 완성해낸 모습이 정말 인상 깊었어요</h1>
                        <blockquote><strong>“본인 업무에 최선을 다하는, 열정적인 팀원.”</strong></blockquote>
                        <p>짧은 시간 안에 코칭모드 기능을 완성해낸 모습이 정말 인상 깊었어요. 단순한 API 연동을 넘어서, 대본 추적과 실시간 피드백까지 구현해 전체적인 완성도를 한층 끌어올렸죠. 주말 동안 혼자 몰두해서 기능을 완성해낸 걸 보고, “와, 대단하다…”라는 감탄이 절로 나왔습니다.</p>
                        <p>또 하나 기억에 남는 건 대본 수정 기능이었어요. 며칠간 혼자 끙끙대더니 어느새 문단 추가, 수정, 이동은 물론이고 제스처 연동까지 완벽하게 구현해냈더라고요. 보는 내내 "이건 진짜 앱이다!" 싶을 만큼 <strong>완성도가 뛰어났습니다.</strong></p>
                        <p>사실 조언이라기보단 응원의 말을 전하고 싶어요. 충분히 잘하고 있는 사람이라는 걸, 그리고 결국엔 다 해내는 사람이라는 걸 기억해줬으면 좋겠어요. 스스로 정한 기준에 미치지 못하면 괴로워하는 모습이 보여서, 오히려 제 모습이 비쳐지는 것 같았거든요. 팀원에게 폐 끼치지 않으려는 그 마음, 그리고 그 마음을 행동으로 옮겨가는 열정 덕분에 자율 프로젝트를 정말 즐겁고, 높은 완성도로 마무리할 수 있었어요. 함께할 수 있어 정말 고마웠습니다 :)</p>`,
            delay: "delay-100"
        },
        {
            id: 2,
            author: "익명",
            project: "Spico",
            summary: "꼼꼼한 개발 실력과 독보적인 발표 능력을 겸비한, 믿고 맡기는 팀원",
            fullContent: `<h1>개발부터 발표까지, 프로젝트의 <strong>완성도</strong>를 책임지는 든든한 팀원</h1>
                        <p>특히 발표가 정말 인상 깊었어요. 대본도 매끄럽고, 설명도 너무 잘해서 듣는 사람이 이해하기 쉬웠고 발표 퀄리티가 팀 전체를 살려줬다는 느낌이 들었습니다. "와, 발표 진짜 잘한다…" 싶었던 순간이 아직도 기억에 남아요.</p>
                        <p>안드로이드 개발도 꼼꼼하게 잘 해줬고, 전체적으로 든든한 팀원이었어요.</p>
                        <p>굳이 한 가지 떠오르는 게 있다면… 프로젝트 막바지쯤, 일정이 좀 빠듯해져서 프론트 분들에게 일부 파트를 나눠줬던 걸 봤던 것 같아요? (기억이 가물가물하기는 하지만!) 뭐랄까, 그만큼 프로젝트 완성을 위해 팀 내에서 유연하게 조율해준 인상이 남아 있어요.</p>`,
            delay: ""
        },
        {
            id: 3,
            author: "익명",
            project: "LuFin",
            summary: "비타민B 같았어요. 팀의 활력소라고 볼 수 있죠.",
            fullContent: `<h1><strong>비타민B</strong> 같았어요. 팀의 활력소라고 볼 수 있죠</h1>
                        <blockquote>“<strong>비타민B</strong> 같았어요. 팀의 활력소라고 볼 수 있죠.”</blockquote>
                        <p>프로젝트 전반에 걸쳐 보여준 적극적인 자세가 무척 인상 깊었습니다. 문제를 회피하지 않고 먼저 움직이는 태도, 그리고 자신의 생각을 논리적으로 정리해 전달하는 커뮤니케이션 능력까지 — 함께 일하면서 ‘아, 역시 믿고 맡길 수 있는 사람’이라는 확신이 들었습니다.</p>
                        <p>특히 백엔드를 맡은 역할임에도 불구하고, 프론트엔드와 디자인에도 능동적으로 참여하고, CI 파이프라인과 인프라 세팅까지 직접 챙긴 모습은 정말 놀라웠습니다. 단순히 멀티 포지션을 소화한 것을 넘어서, 각 영역에서 실제 성과를 낸다는 점에서 <strong>진정한 풀스택, 육각형 인간</strong>이라는 말이 절로 나왔습니다.</p>
                        <p>실력에 비해 본인이 가진 가능성을 아직 과소평가하고 있는 것 같아요. 더 자신감을 가져도 충분히 좋은 개발자입니다!</p>`,
            delay: "delay-200"
        },
        {
            id: 4,
            author: "조O균",
            project: "DocshunD",
            summary: "한단어로 요약하자면, 우리 프로젝트의 행동대장이었습니다.",
            fullContent: `<h1>우리 프로젝트의 행동대장이었습니다.</h1>
                        <blockquote>한 단어로 요약하자면, 우리 프로젝트의 <strong>행동대장</strong>이었습니다.</blockquote>
                        <p>2주간의 기획, 1주간의 설계, 3주간의 개발동안 가장 먼저 행동에 나선 팀원이었습니다. 처음 배우는 기술에도 거리낌 없이 도전해 시행착오를 거치며 누구보다도 빠르게 성장했습니다. 결국 마지막엔 시간이 부족해 하지 못할 것으로 예상했던 반응형 웹 디자인을 페이지 전체에 적용하며 팀원을 놀라게 하였습니다.</p>
                        <p>소통에 있어서도 가장 적극적이었습니다. 백엔드와의 소통 부족으로 인해 이슈가 발생하면 즉시 우선순위에 따라 분류하고, 해결하려 했습니다. 백엔드에 단순히 트러블 슈팅만 하는 것이 아닌, 먼저 해결할 방법을 찾아보고 이 과정을 백엔드에 함께 전하며 효율적으로 문제를 해결하려는 모습이 인상적이었습니다.</p>`,
            delay: ""
        },
        {
            id: 5,
            author: "정O은",
            project: "DocshunD",
            summary: "기회가 된다면 또 함께하고 싶은 베스트 팀메이트",
            fullContent: `<h1>기회가 된다면 또 함께하고 싶은 베스트 팀메이트</h1>
                        <h2><strong>개발적인 부분에서의 동료평가</strong></h2>
                        <ol>
                        <li>코드를 짤 때 재사용성과 활용도를 고려하면서 짜는 모습을 보임</li>
                        <li>자신이 맡은 부분에 있어 책임감이 무척 뛰어나고 성실한 모습이 돋보임</li>
                        <li>처음 해보거나 잘 모르던 것도 금방 적응해서 배우는 모습을 보이심! 프론트를 본격적으로 맡는 것도 리액트도 이번이 처음이어서 시간을 쪼개서 공부하셨을 텐데 정말 대단하고 멋있었어요👍👍👍👍</li>
                        <li>UX / UI 디자인 적인 감각이 뛰어남. 특히 눈썰미가 좋아서 남들이 잘 캐치하지 못하는 디테일을 잡아내는 모습이 인상깊음. (UI는 프론트의 영역이지만, 사용자 경험은 백엔드랑도 연결지을 수 있는 부분이 있어서 만약 풀스택이나 백엔드를 지망하신다면 이부분도 어필하면 좋지 않을까 하는 생각을 해봤답니다🥰...)</li>
                        </ol>
                        <p>같이 협업해 본 경험이 프론트 경험이라 적은 게 프론트 위주의 이야기지만..., 이런 점들을 미루어 보았을 때 만약 백엔드를 희망하시고 나중에 백엔드로 같이 협업을 할 일이 생겨 함께하게 되더라도 정말 좋은 개발을 할 수 있는 동료라고 생각했어요!</p>
                        <h2><strong>협업, 개발 외적인 부분에서의 동료평가</strong></h2>
                        <ol>
                        <li>상대의 장점을 찾아내는 능력이 탁월한 동료임! 함께 작업하면서 긍정적인 말을 많이 들으며 힘을 얻었던 경험이 있음</li>
                        <li>비난보다는 칭찬을, 부정보다는 긍정을 하는 팀메이트!</li>
                        <li>무조건 타인의 의견을 수용한다기 보다는 자신이 이 의견에 찬성하는 명확한 이유를 제시해주고, 만약 상대와 다른 의견을 가지고 있다면 충돌이 일어나지 않도록 원만하고 둥글게 반대 의견을 제시하는 편</li>
                        <li>자신도 힘든 상황임에도 팀원들이 어려워하는 부분을 함께 해결하려 하는 희생정신이 돋보임</li>
                        <li>팀의 분위기 메이커</li>
                        <li>협업 툴 (피그마, 노션) 관리에 능해서 프로젝트시 원만한 협업에 도움이 됨</li>
                        <li>깔끔한 정리와 문서화를 선호하여 회의 등 기록과 정리가 필요한 활동 시 팀에 도움을 주는 훌륭한 팀원이었음!!</li>
                        </ol>
                        <p>총평?⭐️⭐️⭐️⭐️⭐️ <strong>기회가 된다면 또 함께하고 싶은 베스트 팀메이트</strong></p>
                        <p>서현님은 정말 짱이에요</p>`,
            delay: "delay-100"
        },
        {
            id: 6,
            author: "이O호",
            project: "DocshunD",
            summary: "믿고 맡길 수 있는 동료. 본인 업무에 최선을 다하는 열정적인 팀원",
            fullContent: `<h1>믿고 맡길 수 있는 동료</h1>
                        <blockquote><strong>책임감이 끝내주는, 믿고 맡길 수 있는 동료!</strong></blockquote>
                        <ul>
                        <li>동료와의 원활한 소통</li>
                        <li>주도적인 작업 태도</li>
                        <li>문제를 끝까지 해결해내는 책임감</li>
                        <li>창의적인 문제 해결 방식</li>
                        </ul>
                        <p>함께 프로젝트를 진행하면서 <strong>주도적인 태도와 강한 책임감</strong>을 보여주었습니다. 서현님은 자신에게 주어진 작업 이외에 항상 새로운 작업을 주도적으로 처리하여 프로젝트의 진행 속도를 크게 높여주었습니다. 또한, 로그인 및 채팅 관련 오류를 끝까지 분석하고 해결함으로써 서비스가 정상적으로 작동하는데 크게 기여하였습니다. 결론적으로 김서현님은 책임감이 강하며 팀의 작업 효율성을 높여주는 신뢰할 수 있는 동료라고 생각합니다.</p>`,
            delay: "delay-200"
        },
        {
            id: 7,
            author: "익명",
            project: "DocshunD",
            summary: "말 잘 들어주는 프론트님. 함께 일하기 정말 좋은 분이었습니다.",
            fullContent: `<h1>소통이 즐거운 프론트엔드 개발자님</h1>
                        <blockquote><strong>말 잘 들어주는 프론트님</strong>이라는 한마디가 정말 딱 어울리는 팀원이었습니다.</blockquote>
                        <p>협업 중에도 요구사항을 전달할 때마다 싫은 내색 없이 모두 수용해주었고, 피드백에도 유연하게 대응해주셔서 커뮤니케이션이 매우 편했습니다.</p>
                        <p>디자인이나 기획 변경사항이 생겨도 빠르게 반영해주는 실행력 덕분에 작업 흐름이 끊기지 않았고, 실제 구현물에서도 사용자 경험을 고려한 디테일이 잘 살아 있어 감탄할 때가 많았습니다.</p>
                        <p>개발자로서도, 팀원으로서도 함께 일하기 정말 좋은 분이었습니다.</p>`,
            hidden: true,
            delay: ""
        },
        {
            id: 8,
            author: "이O환",
            project: "Everymatch",
            summary: "새로운 기술과 아이디어를 도입하는 것을 두려워하지 않는 사람",
            fullContent: `<h1>새로운 기술과 아이디어를 도입하는 것을 두려워하지 않는 사람</h1>
                        <ul>
                            <li><strong>새로움에 익숙한 사람</strong> : 새로운 기술과 아이디어를 도입하는 것을 두려워하지 않는 사람</li>
                            <li><strong>고민을 즐기는 사람</strong> : 고민을 통해 문제를 해결하는 것을 즐기는 사람</li>
                            <li><strong>같이 있으면 즐거운 사람</strong> : 함께 웃으며 프로젝트를 진행하게 만드는 사람</li>
                            <li><strong>솔직한 사람</strong> : 부족한 부분이나 문제가 있으면 숨김없이 말하는 사람</li>
                        </ul>`,
            hidden: true,
            delay: "delay-100"
        },
        {
            id: 9,
            author: "익명",
            project: "42Seoul",
            summary: "벽을 느껴도 해결책을 찾으려 하고, 결국엔 결과를 만들어낸다.",
            fullContent: `<h1>벽을 느껴도 해결책을 찾으려 하고, <strong>결국엔 결과를 만들어낸다.</strong></h1>
                        <p>팀 분위기를 자연스럽게 살리는 편이다.<br>대화할 때 긍정적인 에너지를 주지만, 일부러 분위기를 띄우려 하지는 않는다.<br>가끔 예상치 못한 날카로운 질문을 던져서 고민하게 만들 때가 있는데, 결국 핵심을 짚고 있어서 피하기 어렵다. 어려운 상황에서도 쉽게 포기하지 않고 끝까지 해내려는 성향이 강하다. 벽을 느껴도 해결책을 찾으려 하고, 결국엔 결과를 만들어낸다.</p>`,
            hidden: true,
            delay: "delay-200"
        },
        {
            id: 10,
            author: "이O준",
            project: "42Seoul",
            summary: "서현님의 최대 강점은 ‘친화력’이라고 생각합니다.",
            fullContent: `<h1>서현님의 최대 강점은 <strong>‘성장형 친화력’</strong>입니다.</h1>
                        <p>서현님은 23년 8월, 42 Seoul의 본과정 입과 시험인 Piscine 과정에서 처음 만났습니다. c언어에 대한 학습이 부족한 상태로 Piscine 과정을 시작하셨는데, 다른 전공자들과의 격차를 따라잡기 위해 4주간의 과정에 매우 성실하게 임하신 결과 처음보다 몰라볼 정도로 성장하셨습니다. 또한 모르는 것들은 적극적으로 질문하고, 반대로 얻은 정보에 대해선 많은 사람들과 공유하면서 자신의 성장뿐만 아니라 동료들과의 병행적인 학습과 성장을 매우 중요시하셨습니다. 이후 약 10개월간 본과정을 진행하면서도 초심을 잃지 않고 마지막까지 최선을 다한 모습이 아주 인상깊었습니다.</p>
                        <p>서현님의 최대 강점은 <strong>‘친화력’</strong>이라고 생각합니다. 처음에 제게 먼저 말을 걸어주셨던 것도 서현님이셨고, 저뿐만 아니라 다양한 사람들과 붙임성 있게 이야기를 나누는 모습이 42 Seoul 내에서 네트워크를 형성하는데 큰 도움이 되었을 거라고 생각합니다. 또한 서현님은 비전공자 출신이지만, 그렇기에 더욱 코드 한 줄, 개념 하나를 허투루 생각하지 않으셨습니다. 42 Seoul에는 ‘동료 평가’라는, 자신이 완료한 과제를 무작위로 배정된 동료에게 평가받는 시스템이 있는데, 구현한 프로그램에 대해서 확실한 이해력을 바탕으로 이해하기 쉽게 설명해 주시는 모습이 아직도 기억에 남습니다. 앞으로 새로운 동료, 낯선 환경에서 다시 적응을 해야 한다 하더라도 제가 1년간 바라본 서현님이라면 충분히 적응해 나갈 수 있을 것이라고 확신합니다.</p>`,
            hidden: true,
            delay: ""
        },
        {
            id: 11,
            author: "익명",
            project: "42Seoul",
            summary: "진도가 느린 동료가 있어도 불편하지 않게 격려하며 함께 이끌어갑니다.",
            fullContent: `<h1>진도가 느린 동료가 있어도 늘 옆에서 따뜻하고 불편하지 않게 격려하며 함께 이끌어갑니다</h1>
                        <p>서현님은 처음 봤을 때부터 느껴진 정말 <strong>밝고 긍정적인 에너지</strong>가 굉장히 인상깊은 분이었습니다. 낯선 이에게도 한결 같이 편하게 말을 나눠주셔서 누구나 편하게 가까워질 수 있는 분이었습니다. 이런 서현님만의 소프트스킬들은 동료학습을 하고 함께 팀 프로젝트를 진행할 때에도 긍정적으로 작용했습니다.</p>
                        <p>각자 공부한 내용을 공유하고 설명할 때에도 상대가 누구든, 자신이 이해한 바를 꼼꼼하고 이해하기 쉽고 재밌게 잘 설명해주셨고, 누구와도 흥미로운 토론을 하시며 학습해나가는 모습들을 자주 볼 수 있었습니다. 개발적 이해도가 높으시고, 전달하는 커뮤니케이션 스킬 또한 높으셔서 함께 학습하며 정말 많은 걸 배울 수 있었던 것 같습니다.</p>
                        <p>함께 팀프로젝트를 할 때에도 서현님께서 굉장히 <strong>적극적으로 임하시고 소통</strong>해주셔서 온전히 몰입해 협업하는 즐거운 경험을 할 수 있었습니다.</strong> 덕분에 문제 상황을 마주했을 때에도 원활하게 소통하며 문제 해결 목적에 집중한 해결점을 찾을 수 있었습니다. 상대적으로 진도가 느린 동료가 있어도 늘 옆에서 따뜻하고 불편하지 않게 격려하며 함께 이끌어가시는 모습도 굉장히 인상깊었습니다.</p>
                        <p>함께 하는 시간 동안 보여주신 모습들을 돌이켜보면 늘 어디에서나 긍정적이고 성실하게 맡은 바 책임을 다 하실 분이라 믿어 의심치 않습니다!</p>`,
            hidden: true,
            delay: "delay-100"
        }
    ]
};
