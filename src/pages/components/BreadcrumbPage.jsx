export default function BreadcrumbPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Breadcrumb</h1>
        <p className="doc-page-desc">
          현재 페이지의 위치를 계층 구조로 표시하여 사용자가 상위 경로로 쉽게 이동할 수 있도록 합니다.
        </p>
      </div>

      {/* ========== 1. 기본 데모 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">기본 Breadcrumb</div>
        <div className="doc-section-desc">
          각 항목은 링크이며, 마지막 항목은 is-current 클래스로 현재 페이지를 나타냅니다.
          구분자는 hl-breadcrumb__sep 클래스를 사용합니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Default</span>
            <span className="doc-demo__tag">hl-breadcrumb</span>
          </div>
          <div className="doc-demo__preview">
            <nav className="hl-breadcrumb">
              <a href="#" className="hl-breadcrumb__item" onClick={(e) => e.preventDefault()}>홈</a>
              <span className="hl-breadcrumb__sep">/</span>
              <a href="#" className="hl-breadcrumb__item" onClick={(e) => e.preventDefault()}>장비 관리</a>
              <span className="hl-breadcrumb__sep">/</span>
              <span className="hl-breadcrumb__item is-current">장비 상세</span>
            </nav>
          </div>
        </div>
      </div>

      {/* ========== 2. 긴 경로 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">긴 경로</div>
        <div className="doc-section-desc">
          경로가 길어지는 경우에도 동일한 패턴을 적용합니다. 최대 4-5단계를 권장합니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Deep Path</span>
            <span className="doc-demo__tag">hl-breadcrumb</span>
          </div>
          <div className="doc-demo__preview">
            <nav className="hl-breadcrumb">
              <a href="#" className="hl-breadcrumb__item" onClick={(e) => e.preventDefault()}>홈</a>
              <span className="hl-breadcrumb__sep">/</span>
              <a href="#" className="hl-breadcrumb__item" onClick={(e) => e.preventDefault()}>시스템</a>
              <span className="hl-breadcrumb__sep">/</span>
              <a href="#" className="hl-breadcrumb__item" onClick={(e) => e.preventDefault()}>장비 관리</a>
              <span className="hl-breadcrumb__sep">/</span>
              <a href="#" className="hl-breadcrumb__item" onClick={(e) => e.preventDefault()}>A동 3층</a>
              <span className="hl-breadcrumb__sep">/</span>
              <span className="hl-breadcrumb__item is-current">펌프 #12</span>
            </nav>
          </div>
        </div>
      </div>

      {/* ========== 3. API ========== */}
      <div className="doc-section">
        <div className="doc-section-title">API</div>
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
              <td className="doc-token-name">.hl-breadcrumb</td>
              <td>컨테이너. flex 정렬, gap sp-1.</td>
              <td>nav 태그 권장</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-breadcrumb__item</td>
              <td>각 경로 항목 (링크)</td>
              <td>text-sm, text-secondary</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-breadcrumb__item.is-current</td>
              <td>현재 페이지 (마지막 항목)</td>
              <td>font-weight 500, pointer-events none</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-breadcrumb__sep</td>
              <td>구분자 (/, &gt; 등)</td>
              <td>text-xs, text-muted</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ========== 4. 가이드라인 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">가이드라인</div>
        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">
                마지막 항목은 현재 페이지를 나타내며 클릭 불가능하게 설정하세요. 구분자는 "/" 를 사용합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                5단계를 초과하는 깊은 경로는 피하세요. 네비게이션 구조를 재검토하여 계층을 단순화합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
