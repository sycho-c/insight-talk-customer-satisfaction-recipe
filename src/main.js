import './style.css'

const slides = [
  {
    kicker: 'Insight Talk 2025',
    title: '고객만족 레시피',
    subtitle: '우리금융캐피탈 프로젝트에서 경험한, 사람과 AI의 역할',
  },
  {
    kicker: '프로젝트 배경',
    title: '이 프로젝트는 무엇이 달랐나',
    compare: {
      left: {
        title: '일반적인 구축 프로젝트',
        items: ['다수 인원으로 역할 분담', '역할별 담당자 배치', '전통적인 협업 구조'],
      },
      right: {
        title: '이번 프로젝트',
        items: ['1인 중심 수행 체계', 'AI 도구 적극 활용', '새로운 업무 방식 실험'],
      },
    },
  },
  {
    kicker: '핵심 원칙',
    title: '모든 시작은 고객의 필요성',
    grid: [
      { label: '고객의 필요성', value: '진짜 해결해야 할 문제가 무엇인지 파악' },
      { label: '요구사항', value: '구체적인 니즈와 기대사항 명확화' },
      { label: '환경과 맥락', value: '조직 문화, 시스템, 제약사항 이해' },
    ],
    quote: '고객을 이해하는 것이 모든 의사결정의 출발점이었습니다.',
  },
  {
    kicker: '핵심 인사이트',
    title: '1인이 가능했던 이유',
    subtitle: 'AI는 수행자가 아니다. AI는 서포터다.',
    bullets: [
      '복잡한 데이터 분석',
      '문서 정리 및 요약',
      '반복 작업 속도 보완',
      '다양한 옵션 검토 지원',
    ],
  },
  {
    kicker: '이해관계자 분석',
    title: '고객은 누구인가?',
    stakeholders: [
      { icon: '👥', title: '현업 담당자', desc: '실제 시스템을 사용하고 업무를 처리하는 실사용자' },
      { icon: '🛡️', title: '정보보호 부서', desc: '외부 보안 전문 업체, 웹 취약점 점검, 소스코드 분석 담당' },
      { icon: '🖥️', title: '인프라/운영 담당자', desc: '어플리케이션 운영 엔지니어 및 시스템 관리자' },
      { icon: '🏢', title: '우리 회사 내부 조직', desc: '프로젝트를 함께 진행하는 사내 협업 부서' },
    ],
  },
  {
    kicker: '사람의 가치',
    title: '사람의 역할이 필요한 순간들',
    numbered: [
      { title: '보안 취약점 판단', desc: '실제 위험도를 평가하고 우선순위를 결정하는 전문적 판단' },
      { title: '담당자 기준 이해', desc: '각 부서의 관점과 요구사항을 균형있게 파악' },
      { title: '협의와 합의', desc: '이해관계자 간 조율하고 공감대를 형성하는 커뮤니케이션' },
      { title: '상황 판단', desc: '예상치 못한 변수 발생 시 신속한 의사결정' },
    ],
  },
  {
    kicker: '의사결정',
    title: '트레이드오프의 순간',
    tradeoff: [
      { title: '반드시 실시간이 필요한 기능', desc: '즉각적인 응답이 필수적인 핵심 업무 프로세스' },
      { title: '그렇지 않은 기능', desc: '배치 처리나 지연 허용 가능한 부가 기능' },
      { title: '일정과 난이도 고려', desc: '현실적인 개발 기간과 기술적 복잡도를 함께 검토' },
    ],
    tradeoffNote: '모든 요구사항을 다 만족시킬 수는 없습니다. 우선순위를 정하는 것이 사람의 핵심 역할입니다.',
  },
  {
    kicker: '핵심 정리',
    title: '고객만족 레시피 정리',
    recipe: {
      human: {
        title: '사람',
        items: ['판단과 의사결정', '협의와 조율', '우선순위 설정', '신뢰 관계 구축'],
      },
      ai: {
        title: 'AI',
        items: ['데이터 분석', '문서 정리', '작업 속도 향상', '반복 업무 보조'],
      },
      note: '최적의 결과는 <strong>사람의 판단력</strong>과 <strong>AI의 효율성</strong>이 만났을 때 완성됩니다.',
    },
  },
  {
    kicker: '현재 진행 상황',
    title: '아직 끝나지 않은 프로젝트',
    progress: {
      percent: 80,
      label: '현재 진행률',
      desc: '동일한 방식으로 나머지 작업을 마무리할 예정입니다. 검증된 프로세스를 통해 고객 만족도를 끝까지 유지하겠습니다.',
    },
  },
  {
    kicker: '마무리',
    statement: '고객만족은 사람이 완성한다',
    closing: {
      messages: [
        'AI는 그 과정을 돕는 강력한 도구입니다.',
        '하지만 <strong>고객을 이해하고, 판단하고, 신뢰를 쌓는 일</strong>은',
        '여전히 사람만이 할 수 있습니다.',
      ],
      thanks: '감사합니다.',
    },
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
