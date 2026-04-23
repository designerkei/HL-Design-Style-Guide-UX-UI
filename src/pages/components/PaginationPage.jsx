export default function PaginationPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Pagination</h1>
        <p className="doc-page-desc">
          테이블 하단에 페이지 이동 컨트롤을 제공합니다. 50건 이상의 데이터 목록에 필수적으로 사용합니다.
        </p>
      </div>

      {/* ========== 1. 기본 데모 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">기본 Pagination</div>
        <div className="doc-section-desc">
          이전/다음 버튼과 페이지 번호로 구성됩니다. 현재 페이지는 is-active 상태로 표시합니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Default</span>
            <span className="doc-demo__tag">hl-pagination</span>
          </div>
          <div className="doc-demo__preview" style={{ justifyContent: 'center' }}>
            <nav className="hl-pagination">
              <button className="hl-pagination__btn" disabled>&laquo; 이전</button>
              <button className="hl-pagination__btn">1</button>
              <button className="hl-pagination__btn is-active">2</button>
              <button className="hl-pagination__btn">3</button>
              <span className="hl-pagination__info">...</span>
              <button className="hl-pagination__btn">10</button>
              <button className="hl-pagination__btn">다음 &raquo;</button>
            </nav>
          </div>
        </div>
      </div>

      {/* ========== 2. 정보 텍스트 포함 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">정보 텍스트 포함</div>
        <div className="doc-section-desc">
          hl-pagination__info를 사용하여 전체 건수 또는 현재 범위 정보를 표시합니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">With Info</span>
            <span className="doc-demo__tag">hl-pagination__info</span>
          </div>
          <div className="doc-demo__preview" style={{ justifyContent: 'center' }}>
            <nav className="hl-pagination">
              <span className="hl-pagination__info">11-20 / 총 96건</span>
              <button className="hl-pagination__btn" disabled>&laquo; 이전</button>
              <button className="hl-pagination__btn">1</button>
              <button className="hl-pagination__btn is-active">2</button>
              <button className="hl-pagination__btn">3</button>
              <span className="hl-pagination__info">...</span>
              <button className="hl-pagination__btn">10</button>
              <button className="hl-pagination__btn">다음 &raquo;</button>
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
              <td className="doc-token-name">.hl-pagination</td>
              <td>컨테이너. flex 정렬.</td>
              <td>nav 태그 권장</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-pagination__btn</td>
              <td>페이지 번호 / 이전·다음 버튼</td>
              <td>min-width 32px, height 32px</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-pagination__btn.is-active</td>
              <td>현재 활성 페이지</td>
              <td>HL Sky Blue active fill (primary-600)</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-pagination__btn:disabled</td>
              <td>비활성 (첫 페이지에서 이전 등)</td>
              <td>opacity .4, cursor not-allowed</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-pagination__info</td>
              <td>페이지 정보 텍스트</td>
              <td>text-xs, muted</td>
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
                50건 이상의 테이블에는 반드시 Pagination을 제공하세요. 현재 페이지와 전체 건수를 함께 표시합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                무한 스크롤을 테이블에 적용하지 마세요. 운영 도구에서는 명시적 페이지 이동이 데이터 위치 파악에 유리합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
