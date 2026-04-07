export default function EmptyStatePage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Empty State</h1>
        <p className="doc-page-desc">
          데이터가 없거나 결과가 비어 있을 때 사용자에게 맥락과 다음 행동을 안내하는 컴포넌트입니다.
        </p>
      </div>

      {/* ========== Demo: With Action Button ========== */}
      <div className="doc-section">
        <div className="doc-section-title">기본 사용</div>
        <div className="doc-section-desc">
          아이콘, 제목, 설명, 액션 버튼을 조합하여 빈 상태를 안내합니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">With Action Button</span>
            <span className="doc-demo__tag">hl-empty</span>
          </div>
          <div className="doc-demo__preview">
            <div className="hl-empty" style={{ width: '100%' }}>
              <div className="hl-empty__icon"><i className="icon-inbox" /></div>
              <div className="hl-empty__title">등록된 장비가 없습니다</div>
              <div className="hl-empty__desc">
                새 장비를 등록하면 이곳에 목록이 표시됩니다. 아래 버튼을 눌러 첫 장비를 추가해 보세요.
              </div>
              <button className="hl-btn hl-btn--primary hl-btn--md">
                <i className="icon-plus" /> 장비 등록
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========== Demo: Without Button ========== */}
      <div className="doc-section">
        <div className="doc-section-title">변형</div>
        <div className="doc-section-desc">
          상황에 따라 액션 버튼 없이 안내 메시지만 표시하거나, 커스텀 아이콘을 사용할 수 있습니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Without Button</span>
            <span className="doc-demo__tag">정보 전달만</span>
          </div>
          <div className="doc-demo__preview">
            <div className="hl-empty" style={{ width: '100%' }}>
              <div className="hl-empty__icon"><i className="icon-search" /></div>
              <div className="hl-empty__title">검색 결과가 없습니다</div>
              <div className="hl-empty__desc">
                다른 키워드로 다시 검색하거나 필터 조건을 변경해 보세요.
              </div>
            </div>
          </div>
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Custom Icon</span>
            <span className="doc-demo__tag">icon-file-text</span>
          </div>
          <div className="doc-demo__preview">
            <div className="hl-empty" style={{ width: '100%' }}>
              <div className="hl-empty__icon"><i className="icon-file-text" /></div>
              <div className="hl-empty__title">보고서가 아직 생성되지 않았습니다</div>
              <div className="hl-empty__desc">
                데이터가 충분히 수집되면 자동으로 보고서가 생성됩니다.
              </div>
              <button className="hl-btn hl-btn--secondary hl-btn--md">
                <i className="icon-refresh-cw" /> 새로고침
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========== API ========== */}
      <div className="doc-section">
        <div className="doc-section-title">API</div>
        <div className="doc-section-desc">Empty State를 구성하는 CSS 클래스입니다.</div>

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
              <td className="doc-token-name">.hl-empty</td>
              <td>컨테이너. flex-column, center 정렬, 패딩 48px 16px</td>
              <td>빈 상태 영역 전체를 감쌈</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-empty__icon</td>
              <td>아이콘 영역. 40px, muted, opacity 0.5</td>
              <td>Lucide 아이콘 사용</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-empty__title</td>
              <td>제목. font-size md(16px), semibold</td>
              <td>짧고 명확하게 작성</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-empty__desc</td>
              <td>설명. font-size sm(13px), muted, max-width 320px</td>
              <td>다음 행동 안내 포함 권장</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-btn</td>
              <td>액션 버튼 (선택)</td>
              <td>Primary 또는 Secondary 사용</td>
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
                빈 테이블, 빈 리스트 등 데이터가 없는 모든 곳에 Empty State를 표시하세요. 사용자가 현재 상태를 이해할 수 있도록 안내합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                빈 화면을 아무 안내 없이 비워 두지 마세요. 사용자가 오류로 오인할 수 있습니다.
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
                사용자가 직접 해결할 수 있는 경우 액션 버튼을 제공하세요. "장비 등록", "필터 초기화" 등 구체적인 행동을 유도합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                설명 텍스트를 너무 길게 작성하지 마세요. 1-2문장으로 간결하게 핵심만 전달합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
