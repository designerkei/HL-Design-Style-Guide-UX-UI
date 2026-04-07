export default function ProgressPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Progress & Spinner</h1>
        <p className="doc-page-desc">
          작업 진행률을 시각적으로 표현하는 Progress Bar와 비확정적 로딩 상태를 나타내는 Spinner입니다.
        </p>
      </div>

      {/* ========== 1. Progress Bar ========== */}
      <div className="doc-section">
        <div className="doc-section-title">Progress Bar</div>
        <div className="doc-section-desc">
          확정적 진행률(0-100%)을 수평 바 형태로 표시합니다. 파일 업로드, 배치 작업 등에 사용합니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Default (25%)</span>
            <span className="doc-demo__tag">hl-progress</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div style={{ width: '100%' }}>
              <div style={{ fontSize: 'var(--hl-text-xs)', color: 'var(--hl-text-muted)', marginBottom: 4 }}>업로드 중... 25%</div>
              <div className="hl-progress">
                <div className="hl-progress__bar" style={{ width: '25%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Success (60%)</span>
            <span className="doc-demo__tag">hl-progress--success</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div style={{ width: '100%' }}>
              <div style={{ fontSize: 'var(--hl-text-xs)', color: 'var(--hl-text-muted)', marginBottom: 4 }}>처리 중... 60%</div>
              <div className="hl-progress hl-progress--success">
                <div className="hl-progress__bar" style={{ width: '60%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Error (100%)</span>
            <span className="doc-demo__tag">hl-progress--error</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div style={{ width: '100%' }}>
              <div style={{ fontSize: 'var(--hl-text-xs)', color: 'var(--hl-text-muted)', marginBottom: 4 }}>실패 100%</div>
              <div className="hl-progress hl-progress--error">
                <div className="hl-progress__bar" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 2. Spinner ========== */}
      <div className="doc-section">
        <div className="doc-section-title">Spinner</div>
        <div className="doc-section-desc">
          비확정적 로딩 상태를 나타내는 회전 인디케이터입니다. 3가지 크기를 제공합니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Sizes</span>
            <span className="doc-demo__tag">hl-spinner</span>
          </div>
          <div className="doc-demo__preview" style={{ alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div className="hl-spinner hl-spinner--sm" />
              <span style={{ fontSize: 'var(--hl-text-xs)', color: 'var(--hl-text-muted)' }}>sm (14px)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div className="hl-spinner" />
              <span style={{ fontSize: 'var(--hl-text-xs)', color: 'var(--hl-text-muted)' }}>default (20px)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div className="hl-spinner hl-spinner--lg" />
              <span style={{ fontSize: 'var(--hl-text-xs)', color: 'var(--hl-text-muted)' }}>lg (32px)</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 3. API ========== */}
      <div className="doc-section">
        <div className="doc-section-title">API</div>

        <div className="doc-sub">
          <div className="doc-sub-title">Progress Bar</div>
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
                <td className="doc-token-name">.hl-progress</td>
                <td>Progress 컨테이너 (트랙)</td>
                <td>height 6px, border-radius full</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-progress__bar</td>
                <td>진행률 바 (fill)</td>
                <td>width로 퍼센트 제어</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-progress--success</td>
                <td>성공 상태 색상</td>
                <td>bar 배경: --hl-success</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-progress--error</td>
                <td>에러 상태 색상</td>
                <td>bar 배경: --hl-error</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="doc-sub">
          <div className="doc-sub-title">Spinner</div>
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>클래스</th>
                <th>크기</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="doc-token-name">.hl-spinner</td>
                <td className="doc-token-val">20px</td>
                <td>기본 크기</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-spinner--sm</td>
                <td className="doc-token-val">14px</td>
                <td>인라인 / 버튼 내부용</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-spinner--lg</td>
                <td className="doc-token-val">32px</td>
                <td>페이지 / 섹션 로딩</td>
              </tr>
            </tbody>
          </table>
        </div>
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
                확정적 진행률이 알려진 경우 Progress Bar를 사용하세요. 퍼센트 텍스트를 함께 표시하면 사용자가 남은 시간을 예측할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                진행률을 알 수 없는 작업에 Progress Bar를 사용하지 마세요. 이 경우 Spinner를 사용합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
