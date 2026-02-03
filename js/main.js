
document.addEventListener('DOMContentLoaded', () => {

    /* --- HEADER SCROLL EFFECT --- */
    const headerEl = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            headerEl.classList.add('scrolled');
        } else {
            headerEl.classList.remove('scrolled');
        }
    });

    /* --- VIEW MORE REVIEWS --- */
    const viewMoreBtn = document.getElementById('view-more-reviews');
    const hiddenReviews = document.querySelectorAll('.review-hidden');

    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', () => {
            // Check state based on first hidden item class or a custom state
            // Note: The logic in original HTML checked classList on hiddenReviews[0]
            // We need to be careful if hiddenReviews[0] exists.
            
            if (hiddenReviews.length > 0) {
                const isHidden = hiddenReviews[0].classList.contains('review-hidden');
                
                hiddenReviews.forEach(review => {
                    if (isHidden) {
                        review.classList.remove('review-hidden');
                        review.classList.add('active'); // Trigger reveal animation
                    } else {
                        review.classList.add('review-hidden');
                        review.classList.remove('active');
                    }
                });

                viewMoreBtn.innerHTML = isHidden ? '↑' : '↓'; // Improved Label
            }
        });
    }
    /* --- REVEAL ANIMATION --- */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    /* --- REVIEW MODAL DATA & LOGIC --- */
    const reviewData = {
        "1": {
            name: "강O주", project: "Spico",
            content: `<h1>짧은 시간 안에 코칭모드 기능을 완성해낸 모습이 정말 인상 깊었어요</h1>
                        <blockquote><strong>“본인 업무에 최선을 다하는, 열정적인 팀원.”</strong></blockquote>
                        <p>짧은 시간 안에 코칭모드 기능을 완성해낸 모습이 정말 인상 깊었어요. 단순한 API 연동을 넘어서, 대본 추적과 실시간 피드백까지 구현해 전체적인 완성도를 한층 끌어올렸죠. 주말 동안 혼자 몰두해서 기능을 완성해낸 걸 보고, “와, 대단하다…”라는 감탄이 절로 나왔습니다.</p>
                        <p>또 하나 기억에 남는 건 대본 수정 기능이었어요. 며칠간 혼자 끙끙대더니 어느새 문단 추가, 수정, 이동은 물론이고 제스처 연동까지 완벽하게 구현해냈더라고요. 보는 내내 "이건 진짜 앱이다!" 싶을 만큼 <strong>완성도가 뛰어났습니다.</strong></p>
                        <p>사실 조언이라기보단 응원의 말을 전하고 싶어요. 충분히 잘하고 있는 사람이라는 걸, 그리고 결국엔 다 해내는 사람이라는 걸 기억해줬으면 좋겠어요. 스스로 정한 기준에 미치지 못하면 괴로워하는 모습이 보여서, 오히려 제 모습이 비쳐지는 것 같았거든요. 팀원에게 폐 끼치지 않으려는 그 마음, 그리고 그 마음을 행동으로 옮겨가는 열정 덕분에 자율 프로젝트를 정말 즐겁고, 높은 완성도로 마무리할 수 있었어요. 함께할 수 있어 정말 고마웠습니다 :)</p>`
        },
        "2": {
            name: "익명", project: "Spico",
            content: `<h1>개발부터 발표까지, 프로젝트의 <strong>완성도</strong>를 책임지는 든든한 팀원</h1>
                        <p>특히 발표가 정말 인상 깊었어요. 대본도 매끄럽고, 설명도 너무 잘해서 듣는 사람이 이해하기 쉬웠고 발표 퀄리티가 팀 전체를 살려줬다는 느낌이 들었습니다. "와, 발표 진짜 잘한다…" 싶었던 순간이 아직도 기억에 남아요.</p>
                        <p>안드로이드 개발도 꼼꼼하게 잘 해줬고, 전체적으로 든든한 팀원이었어요.</p>
                        <p>굳이 한 가지 떠오르는 게 있다면… 프로젝트 막바지쯤, 일정이 좀 빠듯해져서 프론트 분들에게 일부 파트를 나눠줬던 걸 봤던 것 같아요? (기억이 가물가물하기는 하지만!) 뭐랄까, 그만큼 프로젝트 완성을 위해 팀 내에서 유연하게 조율해준 인상이 남아 있어요.</p>`
        },
        "3": {
            name: "익명", project: "LuFin",
            content: `<h1><strong>비타민B</strong> 같았어요. 팀의 활력소라고 볼 수 있죠</h1>
                        <blockquote>“<strong>비타민B</strong> 같았어요. 팀의 활력소라고 볼 수 있죠.”</blockquote>
                        <p>프로젝트 전반에 걸쳐 보여준 적극적인 자세가 무척 인상 깊었습니다. 문제를 회피하지 않고 먼저 움직이는 태도, 그리고 자신의 생각을 논리적으로 정리해 전달하는 커뮤니케이션 능력까지 — 함께 일하면서 ‘아, 역시 믿고 맡길 수 있는 사람’이라는 확신이 들었습니다.</p>
                        <p>특히 백엔드를 맡은 역할임에도 불구하고, 프론트엔드와 디자인에도 능동적으로 참여하고, CI 파이프라인과 인프라 세팅까지 직접 챙긴 모습은 정말 놀라웠습니다. 단순히 멀티 포지션을 소화한 것을 넘어서, 각 영역에서 실제 성과를 낸다는 점에서 <strong>진정한 풀스택, 육각형 인간</strong>이라는 말이 절로 나왔습니다.</p>
                        <p>실력에 비해 본인이 가진 가능성을 아직 과소평가하고 있는 것 같아요. 더 자신감을 가져도 충분히 좋은 개발자입니다!</p>`
        },
        "4": {
            name: "조O균", project: "DocshunD",
            content: `<h1>우리 프로젝트의 행동대장이었습니다.</h1>
                        <blockquote>한 단어로 요약하자면, 우리 프로젝트의 <strong>행동대장</strong>이었습니다.</blockquote>
                        <p>2주간의 기획, 1주간의 설계, 3주간의 개발동안 가장 먼저 행동에 나선 팀원이었습니다. 처음 배우는 기술에도 거리낌 없이 도전해 시행착오를 거치며 누구보다도 빠르게 성장했습니다. 결국 마지막엔 시간이 부족해 하지 못할 것으로 예상했던 반응형 웹 디자인을 페이지 전체에 적용하며 팀원을 놀라게 하였습니다.</p>
                        <p>소통에 있어서도 가장 적극적이었습니다. 백엔드와의 소통 부족으로 인해 이슈가 발생하면 즉시 우선순위에 따라 분류하고, 해결하려 했습니다. 백엔드에 단순히 트러블 슈팅만 하는 것이 아닌, 먼저 해결할 방법을 찾아보고 이 과정을 백엔드에 함께 전하며 효율적으로 문제를 해결하려는 모습이 인상적이었습니다.</p>`
        },
        "5": {
            name: "정O은", project: "DocshunD",
            content: `<h1>기회가 된다면 또 함께하고 싶은 베스트 팀메이트</h1>
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
                        <p>서현님은 정말 짱이에요</p>`
        },
        "6": {
            name: "이O호", project: "DocshunD",
            content: `<h1>믿고 맡길 수 있는 동료</h1>
                        <blockquote><strong>책임감이 끝내주는, 믿고 맡길 수 있는 동료!</strong></blockquote>
                        <ul>
                        <li>동료와의 원활한 소통</li>
                        <li>주도적인 작업 태도</li>
                        <li>문제를 끝까지 해결해내는 책임감</li>
                        <li>창의적인 문제 해결 방식</li>
                        </ul>
                        <p>함께 프로젝트를 진행하면서 <strong>주도적인 태도와 강한 책임감</strong>을 보여주었습니다. 서현님은 자신에게 주어진 작업 이외에 항상 새로운 작업을 주도적으로 처리하여 프로젝트의 진행 속도를 크게 높여주었습니다. 또한, 로그인 및 채팅 관련 오류를 끝까지 분석하고 해결함으로써 서비스가 정상적으로 작동하는데 크게 기여하였습니다. 결론적으로 김서현님은 책임감이 강하며 팀의 작업 효율성을 높여주는 신뢰할 수 있는 동료라고 생각합니다.</p>`
        },
        "7": {
            name: "이O환", project: "Everymatch",
            content: `<h1>소통이 즐거운 프론트엔드 개발자님</h1>
                        <blockquote><strong>말 잘 들어주는 프론트님</strong>이라는 한마디가 정말 딱 어울리는 팀원이었습니다.</blockquote>
                        <p>협업 중에도 요구사항을 전달할 때마다 싫은 내색 없이 모두 수용해주었고, 피드백에도 유연하게 대응해주셔서 커뮤니케이션이 매우 편했습니다.</p>
                        <p>디자인이나 기획 변경사항이 생겨도 빠르게 반영해주는 실행력 덕분에 작업 흐름이 끊기지 않았고, 실제 구현물에서도 사용자 경험을 고려한 디테일이 잘 살아 있어 감탄할 때가 많았습니다.</p>
                        <p>개발자로서도, 팀원으로서도 함께 일하기 정말 좋은 분이었습니다.</p>`
        },
        "8": {
            name: "익명", project: "Everymatch",
            content: `<h1>새로운 기술과 아이디어를 도입하는 것을 두려워하지 않는 사람</h1>
                        <ul>
                            <li><strong>새로움에 익숙한 사람</strong> : 새로운 기술과 아이디어를 도입하는 것을 두려워하지 않는 사람</li>
                            <li><strong>고민을 즐기는 사람</strong> : 고민을 통해 문제를 해결하는 것을 즐기는 사람</li>
                            <li><strong>같이 있으면 즐거운 사람</strong> : 함께 웃으며 프로젝트를 진행하게 만드는 사람</li>
                            <li><strong>솔직한 사람</strong> : 부족한 부분이나 문제가 있으면 숨김없이 말하는 사람</li>
                        </ul>`
        },
        "9": {
            name: "익명", project: "42Seoul",
            content: `<h1>벽을 느껴도 해결책을 찾으려 하고, <strong>결국엔 결과를 만들어낸다.</strong></h1>
                        <p>팀 분위기를 자연스럽게 살리는 편이다.<br>대화할 때 긍정적인 에너지를 주지만, 일부러 분위기를 띄우려 하지는 않는다.<br>가끔 예상치 못한 날카로운 질문을 던져서 고민하게 만들 때가 있는데, 결국 핵심을 짚고 있어서 피하기 어렵다. 어려운 상황에서도 쉽게 포기하지 않고 끝까지 해내려는 성향이 강하다. 벽을 느껴도 해결책을 찾으려 하고, 결국엔 결과를 만들어낸다.</p>`
        },
        "10": {
            name: "이O준", project: "42Seoul",
            content: `<h1>서현님의 최대 강점은 <strong>‘성장형 친화력’</strong>입니다.</h1>
                        <p>서현님은 23년 8월, 42 Seoul의 본과정 입과 시험인 Piscine 과정에서 처음 만났습니다. c언어에 대한 학습이 부족한 상태로 Piscine 과정을 시작하셨는데, 다른 전공자들과의 격차를 따라잡기 위해 4주간의 과정에 매우 성실하게 임하신 결과 처음보다 몰라볼 정도로 성장하셨습니다. 또한 모르는 것들은 적극적으로 질문하고, 반대로 얻은 정보에 대해선 많은 사람들과 공유하면서 자신의 성장뿐만 아니라 동료들과의 병행적인 학습과 성장을 매우 중요시하셨습니다. 이후 약 10개월간 본과정을 진행하면서도 초심을 잃지 않고 마지막까지 최선을 다한 모습이 아주 인상깊었습니다.</p>
                        <p>서현님의 최대 강점은 <strong>‘친화력’</strong>이라고 생각합니다. 처음에 제게 먼저 말을 걸어주셨던 것도 서현님이셨고, 저뿐만 아니라 다양한 사람들과 붙임성 있게 이야기를 나누는 모습이 42 Seoul 내에서 네트워크를 형성하는데 큰 도움이 되었을 거라고 생각합니다. 또한 서현님은 비전공자 출신이지만, 그렇기에 더욱 코드 한 줄, 개념 하나를 허투루 생각하지 않으셨습니다. 42 Seoul에는 ‘동료 평가’라는, 자신이 완료한 과제를 무작위로 배정된 동료에게 평가받는 시스템이 있는데, 구현한 프로그램에 대해서 확실한 이해력을 바탕으로 이해하기 쉽게 설명해 주시는 모습이 아직도 기억에 남습니다. 앞으로 새로운 동료, 낯선 환경에서 다시 적응을 해야 한다 하더라도 제가 1년간 바라본 서현님이라면 충분히 적응해 나갈 수 있을 것이라고 확신합니다.</p>`
        },
        "11": {
            name: "익명", project: "42Seoul",
            content: `<h1>진도가 느린 동료가 있어도 늘 옆에서 따뜻하고 불편하지 않게 격려하며 함께 이끌어갑니다</h1>
                        <p>서현님은 처음 봤을 때부터 느껴진 정말 <strong>밝고 긍정적인 에너지</strong>가 굉장히 인상깊은 분이었습니다. 낯선 이에게도 한결 같이 편하게 말을 나눠주셔서 누구나 편하게 가까워질 수 있는 분이었습니다. 이런 서현님만의 소프트스킬들은 동료학습을 하고 함께 팀 프로젝트를 진행할 때에도 긍정적으로 작용했습니다.</p>
                        <p>각자 공부한 내용을 공유하고 설명할 때에도 상대가 누구든, 자신이 이해한 바를 꼼꼼하고 이해하기 쉽고 재밌게 잘 설명해주셨고, 누구와도 흥미로운 토론을 하시며 학습해나가는 모습들을 자주 볼 수 있었습니다. 개발적 이해도가 높으시고, 전달하는 커뮤니케이션 스킬 또한 높으셔서 함께 학습하며 정말 많은 걸 배울 수 있었던 것 같습니다.</p>
                        <p>함께 팀프로젝트를 할 때에도 서현님께서 굉장히 <strong>적극적으로 임하시고 소통</strong>해주셔서 온전히 몰입해 협업하는 즐거운 경험을 할 수 있었습니다.</strong> 덕분에 문제 상황을 마주했을 때에도 원활하게 소통하며 문제 해결 목적에 집중한 해결점을 찾을 수 있었습니다. 상대적으로 진도가 느린 동료가 있어도 늘 옆에서 따뜻하고 불편하지 않게 격려하며 함께 이끌어가시는 모습도 굉장히 인상깊었습니다.</p>
                        <p>함께 하는 시간 동안 보여주신 모습들을 돌이켜보면 늘 어디에서나 긍정적이고 성실하게 맡은 바 책임을 다 하실 분이라 믿어 의심치 않습니다!</p>`
        }
    };

    const modal = document.getElementById('review-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.modal-close');
    const backdrop = document.querySelector('.modal-backdrop');

    function openModal(id) {
        const data = reviewData[id];
        if (!data) return;

        modalBody.innerHTML = data.content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // scroll lock
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modal) {
        document.querySelectorAll('.review-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-review-id');
                openModal(id);
            });
        });

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (backdrop) backdrop.addEventListener('click', closeModal);

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
        });
    }

    /* --- DYNAMIC REVIEW PROJECT COLORS --- */
    const projectColors = {
        "spico": "#42D596",
        "lufin": "#3b82f6",
        "docshund": "#B97E65",
        "everymatch": "#f1654c",
        "42seoul": "#0f172a"
    };

    document.querySelectorAll('.review-project').forEach(el => {
        const projectName = el.innerText.trim().toLowerCase(); // Normalize to lowercase
        if (projectColors[projectName]) {
            el.style.color = projectColors[projectName];
        }
    });

});
