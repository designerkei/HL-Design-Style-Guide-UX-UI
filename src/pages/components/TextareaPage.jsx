export default function TextareaPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Textarea</h1>
        <p className="doc-page-desc">
          여러 줄의 텍스트를 입력할 수 있는 컨트롤입니다.
          메모, 설명, 비고 등 긴 텍스트 입력에 사용합니다.
        </p>
      </div>

      {/* ========== Demo: Default ========== */}
      <div className="doc-section">
        <div className="doc-section-title">기본 사용</div>
        <div className="doc-section-desc">
          hl-field와 hl-label을 함께 사용하여 라벨이 있는 Textarea를 구성합니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Default Textarea</span>
            <span className="doc-demo__tag">hl-textarea</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-field" style={{ width: '100%', maxWidth: 480 }}>
              <label className="hl-label">비고</label>
              <textarea className="hl-textarea" rows={4} defaultValue="" />
            </div>
          </div>
        </div>
      </div>

      {/* ========== Demo: Variants ========== */}
      <div className="doc-section">
        <div className="doc-section-title">변형</div>
        <div className="doc-section-desc">
          Placeholder, Disabled 등 상태에 따른 변형입니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">With Placeholder</span>
            <span className="doc-demo__tag">placeholder</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-field" style={{ width: '100%', maxWidth: 480 }}>
              <label className="hl-label">점검 내용</label>
              <textarea
                className="hl-textarea"
                rows={4}
                placeholder="장비 점검 사항을 상세히 기록해 주세요. 이상 부위, 조치 내용 등을 포함합니다."
              />
            </div>
          </div>
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Disabled</span>
            <span className="doc-demo__tag">disabled</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-field" style={{ width: '100%', maxWidth: 480 }}>
              <label className="hl-label">시스템 로그</label>
              <textarea
                className="hl-textarea"
                rows={4}
                disabled
                defaultValue="2024-01-15 09:30 장비 가동 시작&#10;2024-01-15 10:15 온도 센서 정상 확인&#10;2024-01-15 11:00 정기 점검 완료"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========== API ========== */}
      <div className="doc-section">
        <div className="doc-section-title">API</div>
        <div className="doc-section-desc">Textarea를 구성하는 CSS 클래스입니다.</div>

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
              <td className="doc-token-name">.hl-textarea</td>
              <td>텍스트 영역. width 100%, min-height 80px, resize vertical</td>
              <td>font-size sm(13px), border radius-sm</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-field</td>
              <td>필드 래퍼. flex-column, gap 4px</td>
              <td>label + input/textarea 그룹핑</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-label</td>
              <td>라벨. font-size sm(13px), font-weight 500</td>
              <td>필드 상단에 배치</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-field-error</td>
              <td>에러 메시지. font-size xs(11px), error 색상</td>
              <td>검증 실패 시 표시</td>
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
                min-height를 80px 이상으로 유지하세요. 사용자가 입력 공간을 충분히 인지할 수 있어야 합니다. resize: vertical을 기본으로 허용합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                한 줄짜리 짧은 입력에 Textarea를 사용하지 마세요. 그 경우 Input 컴포넌트가 더 적합합니다.
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
                Placeholder에 입력 형식이나 예시를 안내하세요. 사용자가 어떤 내용을 입력해야 하는지 명확하게 전달합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                resize를 none으로 막지 마세요. 사용자가 필요에 따라 높이를 조절할 수 있어야 합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
