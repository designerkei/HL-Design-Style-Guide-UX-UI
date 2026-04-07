export default function ButtonPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Button</h1>
        <p className="doc-page-desc">
          버튼은 사용자가 하나의 탭으로 작업을 수행할 수 있는 가장 기본적인 인터랙션 요소입니다. 중요도와 맥락에 따라 적절한 variant를 선택하세요.
        </p>
      </div>

      {/* ========== 라이브 데모 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">라이브 데모</h2>

        {/* Variants */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Variants</span>
            <span className="doc-demo__tag">hl-btn--*</span>
          </div>
          <div className="doc-demo__preview">
            <button className="hl-btn hl-btn--primary hl-btn--md">Primary</button>
            <button className="hl-btn hl-btn--secondary hl-btn--md">Secondary</button>
            <button className="hl-btn hl-btn--ghost hl-btn--md">Ghost</button>
            <button className="hl-btn hl-btn--danger hl-btn--md">Danger</button>
          </div>
        </div>

        {/* Sizes */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Sizes</span>
            <span className="doc-demo__tag">hl-btn--sm / md / lg</span>
          </div>
          <div className="doc-demo__preview hl-items-center">
            <button className="hl-btn hl-btn--primary hl-btn--sm">Small</button>
            <button className="hl-btn hl-btn--primary hl-btn--md">Medium</button>
            <button className="hl-btn hl-btn--primary hl-btn--lg">Large</button>
          </div>
        </div>

        {/* All Variants x Sizes */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Variant x Size 매트릭스</span>
            <span className="doc-demo__tag">4 x 3</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            {['primary', 'secondary', 'ghost', 'danger'].map((variant) => (
              <div key={variant} className="hl-flex hl-items-center hl-gap-3">
                <span className="hl-mono" style={{ width: 80, flexShrink: 0 }}>{variant}</span>
                <button className={`hl-btn hl-btn--${variant} hl-btn--sm`}>Small</button>
                <button className={`hl-btn hl-btn--${variant} hl-btn--md`}>Medium</button>
                <button className={`hl-btn hl-btn--${variant} hl-btn--lg`}>Large</button>
              </div>
            ))}
          </div>
        </div>

        {/* With Icon */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">With Icon</span>
            <span className="doc-demo__tag">icon + label</span>
          </div>
          <div className="doc-demo__preview">
            <button className="hl-btn hl-btn--primary hl-btn--md">
              <i className="icon-plus" /> 추가
            </button>
            <button className="hl-btn hl-btn--secondary hl-btn--md">
              <i className="icon-download" /> 내보내기
            </button>
            <button className="hl-btn hl-btn--danger hl-btn--md">
              <i className="icon-trash-2" /> 삭제
            </button>
          </div>
        </div>

        {/* Disabled */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Disabled</span>
            <span className="doc-demo__tag">disabled attribute</span>
          </div>
          <div className="doc-demo__preview">
            <button className="hl-btn hl-btn--primary hl-btn--md" disabled style={{ opacity: 0.4, cursor: 'not-allowed' }}>Primary</button>
            <button className="hl-btn hl-btn--secondary hl-btn--md" disabled style={{ opacity: 0.4, cursor: 'not-allowed' }}>Secondary</button>
            <button className="hl-btn hl-btn--ghost hl-btn--md" disabled style={{ opacity: 0.4, cursor: 'not-allowed' }}>Ghost</button>
            <button className="hl-btn hl-btn--danger hl-btn--md" disabled style={{ opacity: 0.4, cursor: 'not-allowed' }}>Danger</button>
          </div>
        </div>
      </div>

      {/* ========== API 테이블 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">API</h2>
        <p className="doc-section-desc">
          Button에 사용되는 CSS 클래스 목록입니다.
        </p>

        <div className="doc-sub">
          <div className="doc-sub-title">CSS Classes</div>
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>클래스</th>
                <th>설명</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="doc-token-name">.hl-btn</td>
                <td>버튼 기본 스타일 (필수)</td>
                <td>inline-flex, font, transition 적용</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--primary</td>
                <td>Primary 변형 (CTA, 주요 액션)</td>
                <td>배경 primary-700, 흰색 텍스트</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--secondary</td>
                <td>Secondary 변형 (보조 액션)</td>
                <td>흰색 배경, border 있음</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--ghost</td>
                <td>Ghost 변형 (최소 강조)</td>
                <td>배경 투명, 호버 시 surface-alt</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--danger</td>
                <td>Danger 변형 (파괴적 액션)</td>
                <td>에러 색상 배경</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--sm</td>
                <td>Small 사이즈</td>
                <td>height 28px, font-size xs</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--md</td>
                <td>Medium 사이즈 (기본)</td>
                <td>height 32px, font-size sm</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--lg</td>
                <td>Large 사이즈</td>
                <td>height 40px, font-size base</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ========== 가이드라인 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">가이드라인</h2>

        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">
                한 화면에 Primary 버튼은 하나만 사용하세요. 가장 중요한 액션을 명확하게 전달합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                여러 개의 Primary 버튼을 나란히 배치하지 마세요. 사용자가 주요 액션을 구별할 수 없게 됩니다.
              </div>
            </div>
          </div>
        </div>

        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">
                버튼 라벨은 동사로 시작하세요. "저장", "삭제", "내보내기"처럼 수행할 액션을 명확히 표현합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                "확인", "네", "OK" 같은 모호한 라벨을 사용하지 마세요. 사용자가 결과를 예측할 수 없습니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 접근성 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">접근성 (Accessibility)</h2>

        <div className="doc-sub">
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>항목</th>
                <th>요구사항</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="doc-token-name">role</td>
                <td>button (기본)</td>
                <td>{'<button>'}을 사용하면 자동 적용. {'<a>'}에는 role="button" 추가</td>
              </tr>
              <tr>
                <td className="doc-token-name">aria-label</td>
                <td>아이콘 전용 버튼 필수</td>
                <td>텍스트 없이 아이콘만 사용할 경우 반드시 aria-label로 설명</td>
              </tr>
              <tr>
                <td className="doc-token-name">aria-disabled</td>
                <td>비활성 상태 명시</td>
                <td>disabled 속성과 함께 사용하여 보조 기술에 상태 전달</td>
              </tr>
              <tr>
                <td className="doc-token-name">키보드</td>
                <td>Enter / Space로 실행</td>
                <td>{'<button>'} 요소는 기본 지원. 커스텀 요소는 onKeyDown 핸들러 필요</td>
              </tr>
              <tr>
                <td className="doc-token-name">포커스 링</td>
                <td>:focus-visible 적용</td>
                <td>2px solid primary-500, outline-offset 2px</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
