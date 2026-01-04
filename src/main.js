import './style.css'

const slides = [
  {
    kicker: 'Insight Talk 2026',
    title: '고객만족 레시피',
    subtitle: '우리금융캐피탈 프로젝트에서 경험한, 고객만족이 만들어진 과정',
  },
  {
    kicker: 'Warm Up',
    instagramEmbed: `<iframe src="https://www.instagram.com/reel/DRycAhPk45W/embed" title="Insight Talk Reel" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>`,
  },
  {
    kicker: '프로젝트 배경',
    title: '이 프로젝트는 무엇이 달랐나',
    compare: {
      left: {
        title: '기존 프로젝트',
        items: [
          '역할 단위로 맥락이 분리',
          '합의에 시간이 필요',
          '결정과 실행 사이에 간격 발생',
        ],
      },
      right: {
        title: '이번 프로젝트',
        items: [
          '맥락을 하나로 유지',
          '판단과 실행을 가깝게 가져감',
          'AI로 실행 과정의 부담을 덜어냄',
        ],
      },
    },
  },
  {
    kicker: '핵심 원칙',
    title: '모든 시작은 고객의 필요성',
    grid: [
      { label: '필요성', value: '“왜 필요한가”를 먼저 확인' },
      { label: '요구사항', value: '기대치/우선순위를 충분히 이해' },
      { label: '환경·제약', value: '보안·운영·네트워크 등 현실 조건 이해' },
    ],
    quote: '기능보다 먼저, 고객의 맥락을 이해하는 것이 출발점이었습니다.',
  },
  {
    kicker: '핵심 인사이트',
    title: '이 방식이 가능했던 이유',
    subtitle: 'AI는 수행자가 아니다. AI는 서포터다.',
    bullets: [
      '상황을 정리하며 관점을 넓히는 데 활용',
      '문서·회의·요구사항을 정돈해 맥락을 유지',
      '대안과 리스크를 함께 검토하는 데 도움',
      '반복 작업 부담을 줄여 판단에 집중할 여유 확보',
    ],
  },
  {
    kicker: '이해관계자 분석',
    title: '고객은 누구인가?',
    stakeholders: [
      {
        icon: '🧑‍💼',
        title: '현업(업무) 담당자',
        desc: '업무 요구사항을 정의하고 “무엇이 필요한가”를 결정',
      },
      {
        icon: '👤',
        title: '실사용자(운영/업무 사용자)',
        desc: '실제 업무 흐름에서 불편/효율을 가장 빠르게 체감',
      },
      {
        icon: '🛡️',
        title: '정보보호/보안 담당 부서',
        desc: '보안 요건·승인 기준·운영 정책을 제시하고 검증을 요구',
      },
      {
        icon: '🔍',
        title: '외부 보안 전문 업체',
        desc: '웹 취약점 점검 / 소스코드 취약점 분석을 수행(전문 인력)',
      },
      {
        icon: '🖥️',
        title: '인프라·운영 담당자',
        desc: '네트워크/서버/배포/모니터링 등 운영 안정성을 책임',
      },
      {
        icon: '🏢',
        title: '외부·내부 협업 파트너',
        desc: '프로젝트 수행에 함께 참여한 외부 업체와 영업·지원 등 내부 담당자',
      },
    ],
  },
  {
    kicker: '사람의 가치',
    title: '사람의 역할이 필요한 순간들',
    numbered: [
      {
        title: '맥락 기반 우선순위',
        desc: '“무엇이 더 중요한가”를 이해하고 순서를 정하는 판단',
      },
      {
        title: '상대의 기준 읽기',
        desc: '보안/운영/현업이 중요하게 보는 기준을 파악하고 맞추기',
      },
      {
        title: '협의·합의·신뢰',
        desc: '말로 풀고 조율해 “함께 결정”으로 만드는 커뮤니케이션',
      },
      {
        title: '변수 대응',
        desc: '예상치 못한 상황에서 책임지고 방향을 정하는 결단',
      },
    ],
  },
  {
    kicker: '의사결정',
    title: '트레이드오프의 순간',
    tradeoff: [
      {
        title: '핵심 경험은 반드시 지킨다',
        desc: '협업 대화방의 실시간 메시지 전송처럼 “양보할 수 없는 가치” 고정',
      },
      {
        title: '덜 중요한 곳은 단순화한다',
        desc: '설정/관리 등은 재진입 반영 등으로 난이도·일정을 조정',
      },
      {
        title: '일정·리스크를 함께 본다',
        desc: '기간 내 오픈을 위해 범위·품질·위험을 균형 있게 선택',
      },
    ],
    tradeoffNote:
      '고객만족은 “다 해주기”가 아니라, 핵심을 지키면서 현실적으로 선택하는 과정이었습니다.',
  },
  {
    kicker: '핵심 정리',
    title: '고객만족 레시피 정리',
    recipe: {
      human: {
        title: '사람',
        items: ['판단과 책임', '협의와 합의', '우선순위·트레이드오프', '신뢰·관계 관리'],
      },
      ai: {
        title: 'AI',
        items: ['조사·정리·요약', '대안 비교와 체크', '반복 작업 감소', '속도·밀도 보완'],
      },
      note:
        '고객만족은 <strong>사람의 판단</strong> 위에 <strong>AI의 보조</strong>가 더해질 때 가장 현실적으로 완성됩니다.',
    },
  },
  {
    kicker: '현재 진행 상황',
    title: '아직 끝나지 않은 프로젝트',
    progress: {
      percent: 80,
      label: '현재 진행률',
      desc:
        '프로젝트 전반을 같은 방식으로 진행해 왔고, 남은 기간에도 이 방식이 계속 유효한지 확인하며 마무리할 예정입니다.',
    },
  },
  {
    kicker: '마무리',
    statement: '고객만족은 사람이 완성한다',
    closing: {
      messages: [
        'AI는 속도와 밀도를 올려주는 강력한 서포터입니다.',
        '하지만 <strong>고객의 맥락을 읽고, 선택하고, 조율하는 일</strong>은',
        '여전히 사람이 책임져야 하는 영역이었습니다.',
      ],
      thanks: '감사합니다.',
    },
  },
  {
    kicker: 'Insight Talk',
    title: '여러분의 고객만족 레시피는?',
    subtitle: '여러분의 경험을 들려주세요.',
  },
]

const app = document.querySelector('#app')
let currentIndex = 0

const renderSlide = (index) => {
  const slide = slides[index]
  app.innerHTML = `
    <div class="deck">
      <div class="chrome">
        <span class="badge">${slide.kicker}</span>
        <span class="counter">${index + 1} / ${slides.length}</span>
      </div>
      <div class="content">
        ${
          slide.statement
            ? `<h1 class="statement">${slide.statement}</h1>`
            : !slide.title
              ? ''
              : `<h1>${slide.title}</h1>`
        }
        ${slide.subtitle ? `<p class="subtitle">${slide.subtitle}</p>` : ''}

        ${
          slide.compare
            ? `<div class="compare">
                <div class="compare-col">
                  <h3>${slide.compare.left.title}</h3>
                  <ul>${slide.compare.left.items.map((item) => `<li>${item}</li>`).join('')}</ul>
                </div>
                <div class="compare-col">
                  <h3>${slide.compare.right.title}</h3>
                  <ul>${slide.compare.right.items.map((item) => `<li>${item}</li>`).join('')}</ul>
                </div>
              </div>`
            : ''
        }

        ${
          slide.instagramEmbed
            ? `<div class="embed-wrap">${slide.instagramEmbed}</div>`
            : ''
        }

        ${
          slide.grid
            ? `<div class="grid">${slide.grid
                .map(
                  (item) =>
                    `<div class="grid-item"><span>${item.label}</span><strong>${item.value}</strong></div>`
                )
                .join('')}</div>`
            : ''
        }

        ${slide.quote ? `<div class="quote">${slide.quote}</div>` : ''}

        ${
          slide.bullets
            ? `<ul class="bullets">${slide.bullets.map((item) => `<li>${item}</li>`).join('')}</ul>`
            : ''
        }

        ${
          slide.stakeholders
            ? `<div class="stakeholder-grid">${slide.stakeholders
                .map(
                  (item) =>
                    `<div class="stakeholder-item">
                      <div class="icon">${item.icon}</div>
                      <div>
                        <h4>${item.title}</h4>
                        <p>${item.desc}</p>
                      </div>
                    </div>`
                )
                .join('')}</div>`
            : ''
        }

        ${
          slide.numbered
            ? `<div class="numbered-list">${slide.numbered
                .map(
                  (item, i) =>
                    `<div class="numbered-item">
                      <div class="num">${i + 1}</div>
                      <div class="text">
                        <h4>${item.title}</h4>
                        <p>${item.desc}</p>
                      </div>
                    </div>`
                )
                .join('')}</div>`
            : ''
        }

        ${
          slide.tradeoff
            ? `<div class="tradeoff">${slide.tradeoff
                .map(
                  (item) =>
                    `<div class="tradeoff-item">
                      <h4>${item.title}</h4>
                      <p>${item.desc}</p>
                    </div>`
                )
                .join('')}
                ${slide.tradeoffNote ? `<div class="tradeoff-note">${slide.tradeoffNote}</div>` : ''}
              </div>`
            : ''
        }

        ${
          slide.recipe
            ? `<div class="split-container">
                <div class="split-panel human">
                  <h3>👤 ${slide.recipe.human.title}</h3>
                  <ul class="split-items">
                    ${slide.recipe.human.items.map((item) => `<li>${item}</li>`).join('')}
                  </ul>
                </div>
                <div class="split-panel ai">
                  <h3>🤖 ${slide.recipe.ai.title}</h3>
                  <ul class="split-items">
                    ${slide.recipe.ai.items.map((item) => `<li>${item}</li>`).join('')}
                  </ul>
                </div>
              </div>
              ${slide.recipe.note ? `<div class="split-note">${slide.recipe.note}</div>` : ''}`
            : ''
        }

        ${
          slide.progress
            ? `<div class="progress-container">
                <div class="progress-circle">
                  <span>${slide.progress.percent}%</span>
                </div>
                <div class="progress-label">${slide.progress.label}</div>
                <div class="progress-desc">${slide.progress.desc}</div>
              </div>`
            : ''
        }

        ${
          slide.closing
            ? `<div class="closing-message">
                ${slide.closing.messages.map((msg) => `<p>${msg}</p>`).join('')}
              </div>
              <div class="closing-thanks">${slide.closing.thanks}</div>`
            : ''
        }

        ${slide.meta ? `<div class="meta">${slide.meta}</div>` : ''}
      </div>
      <div class="hint">← → 키 또는 클릭으로 이동</div>
    </div>
  `

}

const clampIndex = (next) => {
  if (next < 0) return slides.length - 1
  if (next >= slides.length) return 0
  return next
}

const goNext = () => {
  currentIndex = clampIndex(currentIndex + 1)
  renderSlide(currentIndex)
}

const goPrev = () => {
  currentIndex = clampIndex(currentIndex - 1)
  renderSlide(currentIndex)
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === ' ') {
    goNext()
  }
  if (event.key === 'ArrowLeft') {
    goPrev()
  }
})

window.addEventListener('click', () => {
  goNext()
})

renderSlide(currentIndex)
