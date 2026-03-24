export default function SkeletonPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Skeleton</h1>
        <p className="doc-page-desc">
          데이터 로딩 중 콘텐츠가 표시될 영역을 미리 보여주는 플레이스홀더입니다. 레이아웃 시프트를 방지하고 체감 로딩 시간을 줄여줍니다.
        </p>
      </div>

      {/* ========== 1. 기본 변형 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">기본 변형</div>
        <div className="doc-section-desc">
          텍스트, 제목, 아바타, 블록 4가지 기본 형태를 제공합니다. 모든 스켈레톤은 pulse 애니메이션이 적용됩니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Variants</span>
            <span className="doc-demo__tag">hl-skeleton</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col" style={{ gap: 16 }}>
            <div>
              <div style={{ fontSize: 11, color: 'var(--hl-text-muted)', marginBottom: 6 }}>--avatar (32×32)</div>
              <div className="hl-skeleton hl-skeleton--avatar" />
            </div>
            <div>
              <div style={{ fontSize: 11, color: 'var(--hl-text-muted)', marginBottom: 6 }}>--title (h:20px, w:50%)</div>
              <div className="hl-skeleton hl-skeleton--title" style={{ width: '50%', minWidth: 200 }} />
            </div>
            <div>
              <div style={{ fontSize: 11, color: 'var(--hl-text-muted)', marginBottom: 6 }}>--text (h:14px, w:80%)</div>
              <div className="hl-skeleton hl-skeleton--text" style={{ width: '80%', minWidth: 300 }} />
            </div>
            <div>
              <div style={{ fontSize: 11, color: 'var(--hl-text-muted)', marginBottom: 6 }}>--block (h:64px, w:100%)</div>
              <div className="hl-skeleton hl-skeleton--block" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* ========== 2. 조합 예시: 카드 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">조합 예시: 카드 로딩</div>
        <div className="doc-section-desc">
          여러 스켈레톤 변형을 조합하여 실제 콘텐츠 레이아웃을 모사합니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Card Skeleton</span>
            <span className="doc-demo__tag">조합</span>
          </div>
          <div className="doc-demo__preview">
            <div className="hl-card" style={{ width: 280 }}>
              <div className="hl-card__body" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--hl-sp-3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--hl-sp-2)' }}>
                  <div className="hl-skeleton hl-skeleton--avatar" />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--hl-sp-1)' }}>
                    <div className="hl-skeleton hl-skeleton--title" style={{ width: '60%' }} />
                    <div className="hl-skeleton hl-skeleton--text" style={{ width: '40%' }} />
                  </div>
                </div>
                <div className="hl-skeleton hl-skeleton--text" style={{ width: '100%' }} />
                <div className="hl-skeleton hl-skeleton--text" style={{ width: '90%' }} />
                <div className="hl-skeleton hl-skeleton--text" style={{ width: '70%' }} />
                <div className="hl-skeleton hl-skeleton--block" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 3. 조합 예시: 테이블 로딩 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">조합 예시: 테이블 로딩</div>
        <div className="doc-section-desc">
          테이블 행을 스켈레톤으로 표현하여 데이터 로딩 상태를 나타냅니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Table Skeleton</span>
            <span className="doc-demo__tag">조합</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col" style={{ padding: 0 }}>
            <table className="hl-table" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ width: 140 }}>이름</th>
                  <th style={{ width: 100 }}>상태</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((i) => (
                  <tr key={i}>
                    <td><div className="hl-skeleton hl-skeleton--text" style={{ width: '70%' }} /></td>
                    <td><div className="hl-skeleton hl-skeleton--text" style={{ width: '50%' }} /></td>
                    <td><div className="hl-skeleton hl-skeleton--text" style={{ width: '85%' }} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ========== 4. API ========== */}
      <div className="doc-section">
        <div className="doc-section-title">API</div>
        <table className="doc-token-table">
          <thead>
            <tr>
              <th>클래스</th>
              <th>설명</th>
              <th>크기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="doc-token-name">.hl-skeleton</td>
              <td>기본 스켈레톤. pulse 애니메이션 포함.</td>
              <td>-</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-skeleton--text</td>
              <td>텍스트 줄 플레이스홀더</td>
              <td className="doc-token-val">height 14px, width 80%</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-skeleton--title</td>
              <td>제목 플레이스홀더</td>
              <td className="doc-token-val">height 20px, width 50%</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-skeleton--avatar</td>
              <td>아바타 플레이스홀더</td>
              <td className="doc-token-val">32 x 32px, 원형</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-skeleton--block</td>
              <td>블록 플레이스홀더</td>
              <td className="doc-token-val">height 64px, width 100%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ========== 5. 가이드라인 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">가이드라인</div>
        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">
                실제 콘텐츠의 레이아웃과 유사한 형태로 스켈레톤을 배치하세요. 로딩 후 레이아웃 시프트를 최소화할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                스켈레톤을 3초 이상 표시하지 마세요. 장시간 로딩에는 Spinner + 텍스트 안내로 대체합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
