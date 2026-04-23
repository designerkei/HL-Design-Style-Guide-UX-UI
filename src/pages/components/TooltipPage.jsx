export default function TooltipPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Tooltip</h1>
        <p className="doc-page-desc">
          요소 위에 마우스를 올리면 추가 정보를 표시하는 컴포넌트입니다.
          짧은 설명이나 라벨 보충에 사용합니다.
        </p>
      </div>

      {/* ========== Demo: Tooltip on Hover ========== */}
      <div className="doc-section">
        <div className="doc-section-title">기본 사용</div>
        <div className="doc-section-desc">
          hl-tooltip-wrap으로 감싸고 내부에 hl-tooltip을 배치합니다. hover 시 자동으로 노출됩니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Tooltip on Hover (Top)</span>
            <span className="doc-demo__tag">hl-tooltip-wrap</span>
          </div>
          <div className="doc-demo__preview">
            <div className="hl-tooltip-wrap">
              <button className="hl-btn hl-btn--secondary hl-btn--md">
                <i className="icon-download" /> 다운로드
              </button>
              <span className="hl-tooltip">보고서를 CSV로 내려받습니다</span>
            </div>

            <div className="hl-tooltip-wrap">
              <button className="hl-btn hl-btn--tertiary hl-btn--md">
                <i className="icon-settings" />
              </button>
              <span className="hl-tooltip">설정</span>
            </div>

            <div className="hl-tooltip-wrap">
              <button className="hl-btn hl-btn--primary hl-btn--md">
                <i className="icon-plus" /> 추가
              </button>
              <span className="hl-tooltip">새 항목을 추가합니다</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========== API ========== */}
      <div className="doc-section">
        <div className="doc-section-title">API</div>
        <div className="doc-section-desc">Tooltip을 구성하는 CSS 클래스입니다.</div>

        <table className="doc-token-table">
          <thead>
            <tr>
              <th>Class</th>
              <th>역할</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="doc-token-name">.hl-tooltip-wrap</td>
              <td>래퍼. position relative, inline-flex</td>
              <td>tooltip의 기준점 역할</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-tooltip</td>
              <td>말풍선. absolute, bottom 100%+6px, center 정렬</td>
              <td>기본 위치: top center</td>
            </tr>
            <tr>
              <td className="doc-token-name">:hover .hl-tooltip</td>
              <td>hover 시 opacity 1로 전환</td>
              <td>dur-fast(100ms) 트랜지션</td>
            </tr>
            <tr>
              <td className="doc-token-name">::after (arrow)</td>
              <td>하단 삼각형 화살표. border trick으로 구현</td>
              <td>gray-800 색상</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ========== Guidelines ========== */}
      <div className="doc-section">
        <div className="doc-section-title">가이드라인</div>

        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">
                Tooltip 텍스트는 짧게 유지하세요. 1줄, 최대 2줄 이내로 핵심 정보만 전달합니다.
                아이콘 버튼의 라벨 보충에 적합합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                중요한 정보나 필수 안내를 Tooltip에만 넣지 마세요. Tooltip은 보조 정보용이며, 모바일에서는 hover가 불가합니다.
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
                아이콘만 있는 버튼에는 반드시 Tooltip으로 기능을 설명하세요. 텍스트 라벨이 없는 버튼의 접근성을 보완합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                이미 텍스트 라벨이 충분한 버튼에 동일한 내용의 Tooltip을 반복하지 마세요. 불필요한 중복은 사용자를 방해합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
