import './style.css'

const slides = [
  {
    kicker: 'Insight Talk 2026',
    title: '고객만족 레시피',
    subtitle: '우리금융캐피탈 프로젝트에서 검증한, 사람과 AI의 역할',
    meta: '10 slides · 10-15 minutes',
  },
  {
    kicker: '프로젝트 배경',
    title: '이 프로젝트는 무엇이 달랐나',
    subtitle: '일반적인 구축 프로젝트와의 차이점',
    bullets: [
      '다수 인원 투입 → 1인 중심 수행',
      '정해진 프로세스 → 유연한 대응',
      '기술 중심 → 고객 필요성 중심',
    ],
  },
  {
    kicker: '출발점',
    title: '모든 시작은 고객의 필요성',
    subtitle: '기술보다 먼저, 사람을 이해하는 것부터',
    bullets: [
      '고객의 실제 필요성 파악',
      '명시된 요구사항과 숨은 요구사항',
      '업무 환경과 맥락 이해',
    ],
  },
  {
    kicker: '핵심 인사이트',
    statement: 'AI는 결정하지 않는다.',
    statementSub: '분석하고, 정리하고, 속도를 높인다. 그것이 AI의 역할이다.',
  },
  {
    kicker: '이해관계자',
    title: '고객은 누구인가?',
    subtitle: '다양한 관점을 가진 이해관계자들',
    bullets: [
      '현업 담당자 & 실사용자',
      '정보보호 부서 & 외부 보안 전문 업체',
      '인프라/운영 담당자 & 애플리케이션 엔지니어',
      '우리 회사 내부 조직',
    ],
  },
  {
    kicker: '사람의 가치',
    statement: '판단은 사람의 몫이다.',
    statementSub: '위험도, 우선순위, 이해관계, 맥락. AI가 대체할 수 없는 영역.',
  },
  {
    kicker: '의사결정',
    title: '트레이드오프의 순간',
    subtitle: '완벽함보다 현실적인 선택',
    grid: [
      { label: '구분 기준', value: '반드시 실시간?' },
      { label: '고려 요소', value: '일정 & 난이도' },
      { label: '결정 방식', value: '협의와 합의' },
    ],
  },
  {
    kicker: '핵심 정리',
    title: '고객만족 레시피',
    subtitle: '사람과 AI, 각자의 역할',
    split: {
      left: {
        icon: '👤',
        title: '사람',
        color: 'accent',
        items: ['판단', '협의', '우선순위', '신뢰 구축'],
      },
      right: {
        icon: '🤖',
        title: 'AI',
        color: 'secondary',
        items: ['분석', '정리', '속도', '반복 작업'],
      },
    },
  },
  {
    kicker: '현재 진행형',
    title: '아직 끝나지 않은 프로젝트',
    subtitle: '검증된 방식으로 마무리까지',
    stats: [
      { value: '~80%', label: '현재 진행률' },
      { value: '동일 방식', label: '마무리 예정' },
      { value: '검증 완료', label: '적용 가능성' },
    ],
  },
  {
    kicker: '마무리',
    statement: '고객만족은 사람이 완성한다.',
    statementSub: '기술은 도구일 뿐.',
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
            ? `<h1 class="statement">${slide.statement}</h1>
               ${slide.statementSub ? `<p class="statement-sub">${slide.statementSub}</p>` : ''}`
            : `<h1>${slide.title}</h1>
               <p class="subtitle">${slide.subtitle || ''}</p>`
        }
        ${slide.quote ? `<div class="quote">"${slide.quote}"</div>` : ''}
        ${
          slide.bullets
            ? `<ul class="bullets">${slide.bullets.map((item) => `<li>${item}</li>`).join('')}</ul>`
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
        ${
          slide.stats
            ? `<div class="stats">${slide.stats
                .map(
                  (item) =>
                    `<div class="stat"><strong>${item.value}</strong><span>${item.label}</span></div>`
                )
                .join('')}</div>`
            : ''
        }
        ${
          slide.split
            ? `<div class="split-container">
                <div class="split-panel split-left">
                  <div class="split-icon">${slide.split.left.icon}</div>
                  <h3 class="split-title">${slide.split.left.title}</h3>
                  <ul class="split-items">
                    ${slide.split.left.items.map((item) => `<li>${item}</li>`).join('')}
                  </ul>
                </div>
                <div class="split-divider">
                  <span class="split-vs">+</span>
                </div>
                <div class="split-panel split-right">
                  <div class="split-icon">${slide.split.right.icon}</div>
                  <h3 class="split-title">${slide.split.right.title}</h3>
                  <ul class="split-items">
                    ${slide.split.right.items.map((item) => `<li>${item}</li>`).join('')}
                  </ul>
                </div>
              </div>`
            : ''
        }
        ${slide.meta ? `<div class="meta">${slide.meta}</div>` : ''}
      </div>
      <div class="hint">Use ← → keys or click to move</div>
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
