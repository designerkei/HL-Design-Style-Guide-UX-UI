export default function InputPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Input</h1>
        <p className="doc-page-desc">
          Input은 사용자로부터 텍스트, 숫자, 선택 값을 입력받는 폼 요소입니다. Label, Input, Error 메시지를 조합한 Field 구조로 일관되게 사용합니다.
        </p>
      </div>

      {/* ========== 라이브 데모 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">라이브 데모</h2>

        {/* Text Input */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Text Input</span>
            <span className="doc-demo__tag">hl-input</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-field" style={{ maxWidth: 400 }}>
              <label className="hl-label">장비 이름</label>
              <input className="hl-input" type="text" placeholder="장비명을 입력하세요" />
            </div>
            <div className="hl-field" style={{ maxWidth: 400 }}>
              <label className="hl-label">장비 코드</label>
              <input className="hl-input" type="text" placeholder="예: EQ-001" />
            </div>
          </div>
        </div>

        {/* Select */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Select</span>
            <span className="doc-demo__tag">select.hl-input</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-field" style={{ maxWidth: 400 }}>
              <label className="hl-label">장비 유형</label>
              <select className="hl-input">
                <option value="">선택하세요</option>
                <option value="crane">크레인</option>
                <option value="pump">펌프</option>
                <option value="conveyor">컨베이어</option>
                <option value="compressor">컴프레서</option>
              </select>
            </div>
          </div>
        </div>

        {/* Error State */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Error State</span>
            <span className="doc-demo__tag">hl-input--error</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-field" style={{ maxWidth: 400 }}>
              <label className="hl-label">이메일</label>
              <input
                className="hl-input hl-input--error"
                type="email"
                defaultValue="invalid-email"
              />
              <span className="hl-field-error">올바른 이메일 형식을 입력하세요.</span>
            </div>
            <div className="hl-field" style={{ maxWidth: 400 }}>
              <label className="hl-label">장비 코드</label>
              <input
                className="hl-input hl-input--error"
                type="text"
                defaultValue=""
                placeholder="필수 입력"
              />
              <span className="hl-field-error">필수 항목입니다.</span>
            </div>
          </div>
        </div>

        {/* Disabled State */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Disabled</span>
            <span className="doc-demo__tag">disabled attribute</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-field" style={{ maxWidth: 400 }}>
              <label className="hl-label">읽기 전용 필드</label>
              <input
                className="hl-input"
                type="text"
                defaultValue="수정 불가"
                disabled
                style={{ opacity: 0.5, cursor: 'not-allowed' }}
              />
            </div>
            <div className="hl-field" style={{ maxWidth: 400 }}>
              <label className="hl-label">비활성 셀렉트</label>
              <select className="hl-input" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                <option>크레인</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ========== Field 구조 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">Field 구조</h2>
        <p className="doc-section-desc">
          모든 입력 필드는 Label + Input + Error Message 3단 구조를 따릅니다.
        </p>

        <div className="doc-sub">
          <div className="doc-sub-title">Anatomy</div>
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>요소</th>
                <th>클래스</th>
                <th>역할</th>
                <th>필수 여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>컨테이너</td>
                <td className="doc-token-name">.hl-field</td>
                <td>flex column, gap 4px로 요소 정렬</td>
                <td>필수</td>
              </tr>
              <tr>
                <td>라벨</td>
                <td className="doc-token-name">.hl-label</td>
                <td>입력 필드의 목적 설명</td>
                <td>필수</td>
              </tr>
              <tr>
                <td>입력</td>
                <td className="doc-token-name">.hl-input</td>
                <td>텍스트/숫자 입력 또는 선택</td>
                <td>필수</td>
              </tr>
              <tr>
                <td>에러 메시지</td>
                <td className="doc-token-name">.hl-field-error</td>
                <td>유효성 검증 실패 시 에러 안내</td>
                <td>조건부</td>
              </tr>
            </tbody>
          </table>
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
                <td className="doc-token-name">.hl-input</td>
                <td>Input 기본 스타일</td>
                <td>height 32px, border, focus ring 적용</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-input--error</td>
                <td>에러 상태</td>
                <td>border-color를 error 색상으로 변경</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-field</td>
                <td>Field 컨테이너</td>
                <td>flex column, gap 4px</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-label</td>
                <td>라벨 텍스트</td>
                <td>font-size sm, font-weight 500</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-field-error</td>
                <td>에러 메시지</td>
                <td>font-size xs, color error</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-textarea</td>
                <td>Textarea 기본 스타일</td>
                <td>min-height 80px, resize vertical</td>
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
                모든 Input에 Label을 제공하세요. Placeholder는 보조 힌트일 뿐, Label을 대체할 수 없습니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                Placeholder만으로 필드 목적을 설명하지 마세요. 입력 시작 시 placeholder가 사라지면 맥락을 잃게 됩니다.
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
                에러 메시지는 구체적으로 작성하세요. "입력 오류" 대신 "이메일 형식이 올바르지 않습니다"처럼 해결 방법을 안내합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                에러 상태에서 색상만 변경하지 마세요. hl-input--error 클래스와 함께 반드시 hl-field-error 메시지를 표시합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
