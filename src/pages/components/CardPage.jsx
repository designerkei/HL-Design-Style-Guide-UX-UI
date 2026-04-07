export default function CardPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Card</h1>
        <p className="doc-page-desc">
          Card는 관련 정보를 그룹핑하여 시각적으로 구분하는 컨테이너입니다. Head, Body, Foot 세 영역으로 구성되며, 대시보드와 상세 뷰에서 핵심 레이아웃 단위로 사용합니다.
        </p>
      </div>

      {/* ========== 라이브 데모 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">라이브 데모</h2>

        {/* Full Card */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Full Card (Head + Body + Foot)</span>
            <span className="doc-demo__tag">hl-card</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-card" style={{ maxWidth: 480 }}>
              <div className="hl-card__head">장비 상세 정보</div>
              <div className="hl-card__body">
                <div className="hl-flex hl-gap-4 hl-mb-4">
                  <div className="hl-field" style={{ flex: 1 }}>
                    <span className="hl-label">장비명</span>
                    <span>크레인 A-001</span>
                  </div>
                  <div className="hl-field" style={{ flex: 1 }}>
                    <span className="hl-label">상태</span>
                    <span className="hl-badge hl-badge--success">가동중</span>
                  </div>
                </div>
                <div className="hl-flex hl-gap-4">
                  <div className="hl-field" style={{ flex: 1 }}>
                    <span className="hl-label">위치</span>
                    <span>A동 3층</span>
                  </div>
                  <div className="hl-field" style={{ flex: 1 }}>
                    <span className="hl-label">최근 점검</span>
                    <span>2026-03-15</span>
                  </div>
                </div>
              </div>
              <div className="hl-card__foot">
                <button className="hl-btn hl-btn--ghost hl-btn--sm">취소</button>
                <button className="hl-btn hl-btn--primary hl-btn--sm">저장</button>
              </div>
            </div>
          </div>
        </div>

        {/* Without Footer */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Without Footer</span>
            <span className="doc-demo__tag">Head + Body</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-card" style={{ maxWidth: 480 }}>
              <div className="hl-card__head">공지사항</div>
              <div className="hl-card__body">
                <p style={{ lineHeight: 1.6, color: 'var(--hl-text-secondary)' }}>
                  3월 정기 점검이 예정되어 있습니다. 점검 일시: 2026-03-28 09:00 ~ 12:00. 해당 시간 동안 시스템 접속이 제한될 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flush Body */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Flush Body</span>
            <span className="doc-demo__tag">hl-card__body--flush</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-card" style={{ maxWidth: 480 }}>
              <div className="hl-card__head">장비 목록</div>
              <div className="hl-card__body hl-card__body--flush">
                <table className="hl-table">
                  <thead>
                    <tr>
                      <th>코드</th>
                      <th>장비명</th>
                      <th>상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="hl-mono">EQ-001</td>
                      <td>크레인 A</td>
                      <td><span className="hl-badge hl-badge--success">가동</span></td>
                    </tr>
                    <tr>
                      <td className="hl-mono">EQ-002</td>
                      <td>펌프 B</td>
                      <td><span className="hl-badge hl-badge--warning">점검</span></td>
                    </tr>
                    <tr>
                      <td className="hl-mono">EQ-003</td>
                      <td>컨베이어 C</td>
                      <td><span className="hl-badge hl-badge--error">정지</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Body Only */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Body Only</span>
            <span className="doc-demo__tag">Minimal</span>
          </div>
          <div className="doc-demo__preview">
            <div className="hl-card" style={{ maxWidth: 240 }}>
              <div className="hl-card__body" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--hl-text-2xl)', fontWeight: 700, marginBottom: 4 }}>128</div>
                <div className="hl-muted" style={{ fontSize: 'var(--hl-text-xs)' }}>금일 작업 완료</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== API ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">API</h2>

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
                <td className="doc-token-name">.hl-card</td>
                <td>Card 기본 컨테이너</td>
                <td>surface 배경, radius 8px, shadow-1</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-card__head</td>
                <td>Card 헤더 영역</td>
                <td>padding, font-weight 600, border-bottom</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-card__body</td>
                <td>Card 본문 영역</td>
                <td>padding 16px</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-card__body--flush</td>
                <td>패딩 없는 본문</td>
                <td>테이블, 리스트 등 edge-to-edge 콘텐츠에 사용</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-card__foot</td>
                <td>Card 푸터 영역</td>
                <td>flex, justify-content: end, gap, border-top</td>
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
                관련 정보를 하나의 Card로 그룹핑하세요. 카드 하나가 하나의 주제(장비, 이벤트 등)를 다루도록 합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                Card 안에 Card를 중첩하지 마세요. 깊이가 깊어지면 가독성이 떨어지고 그림자가 혼란스러워집니다.
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
                테이블이나 리스트를 Card 안에 넣을 때는 body--flush를 사용하여 가장자리에 여백 없이 콘텐츠를 배치하세요.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                Footer에 3개 이상의 버튼을 배치하지 마세요. 액션이 많으면 드롭다운 메뉴를 사용합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
