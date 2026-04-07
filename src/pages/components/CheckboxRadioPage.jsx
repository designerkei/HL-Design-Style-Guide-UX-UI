export default function CheckboxRadioPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Checkbox & Radio</h1>
        <p className="doc-page-desc">
          단일 또는 다중 선택을 위한 컨트롤입니다. Checkbox는 복수 선택, Radio는 단일 선택에 사용합니다.
        </p>
      </div>

      {/* ========== Demo: Checkbox Group ========== */}
      <div className="doc-section">
        <div className="doc-section-title">Checkbox</div>
        <div className="doc-section-desc">
          여러 항목 중 하나 이상을 선택할 수 있는 컨트롤입니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Checkbox Group (Vertical)</span>
            <span className="doc-demo__tag">hl-check-group</span>
          </div>
          <div className="doc-demo__preview">
            <div className="hl-check-group">
              <label className="hl-check">
                <input type="checkbox" defaultChecked />
                <span>온도 모니터링</span>
              </label>
              <label className="hl-check">
                <input type="checkbox" />
                <span>습도 모니터링</span>
              </label>
              <label className="hl-check">
                <input type="checkbox" />
                <span>진동 모니터링</span>
              </label>
            </div>
          </div>
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Checkbox Group (Horizontal)</span>
            <span className="doc-demo__tag">hl-check-group--row</span>
          </div>
          <div className="doc-demo__preview">
            <div className="hl-check-group hl-check-group--row">
              <label className="hl-check">
                <input type="checkbox" defaultChecked />
                <span>가동</span>
              </label>
              <label className="hl-check">
                <input type="checkbox" defaultChecked />
                <span>정지</span>
              </label>
              <label className="hl-check">
                <input type="checkbox" />
                <span>점검</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* ========== Demo: Radio Group ========== */}
      <div className="doc-section">
        <div className="doc-section-title">Radio</div>
        <div className="doc-section-desc">
          여러 항목 중 하나만 선택할 수 있는 컨트롤입니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Radio Group (Vertical)</span>
            <span className="doc-demo__tag">hl-radio-group</span>
          </div>
          <div className="doc-demo__preview">
            <div className="hl-radio-group">
              <label className="hl-radio">
                <input type="radio" name="period" defaultChecked />
                <span>일간</span>
              </label>
              <label className="hl-radio">
                <input type="radio" name="period" />
                <span>주간</span>
              </label>
              <label className="hl-radio">
                <input type="radio" name="period" />
                <span>월간</span>
              </label>
            </div>
          </div>
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Radio Group (Horizontal)</span>
            <span className="doc-demo__tag">hl-radio-group--row</span>
          </div>
          <div className="doc-demo__preview">
            <div className="hl-radio-group hl-radio-group--row">
              <label className="hl-radio">
                <input type="radio" name="view" defaultChecked />
                <span>리스트</span>
              </label>
              <label className="hl-radio">
                <input type="radio" name="view" />
                <span>그리드</span>
              </label>
              <label className="hl-radio">
                <input type="radio" name="view" />
                <span>맵</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* ========== API ========== */}
      <div className="doc-section">
        <div className="doc-section-title">API</div>
        <div className="doc-section-desc">Checkbox와 Radio를 구성하는 CSS 클래스입니다.</div>

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
              <td className="doc-token-name">.hl-check</td>
              <td>체크박스 래퍼. inline-flex, center 정렬, gap sp-2</td>
              <td>label 요소에 적용</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-radio</td>
              <td>라디오 래퍼. inline-flex, center 정렬, gap sp-2</td>
              <td>label 요소에 적용</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-check-group</td>
              <td>체크박스 그룹. flex-column, gap sp-2</td>
              <td>세로 배치 기본</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-radio-group</td>
              <td>라디오 그룹. flex-column, gap sp-2</td>
              <td>세로 배치 기본</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-check-group--row</td>
              <td>가로 배치 변형. flex-direction row, gap sp-4</td>
              <td>필터 바 등에서 사용</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-radio-group--row</td>
              <td>가로 배치 변형. flex-direction row, gap sp-4</td>
              <td>뷰 전환 등에서 사용</td>
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
                복수 선택이 가능한 경우 Checkbox를, 하나만 선택해야 하는 경우 Radio를 사용하세요. 목적에 맞는 컨트롤을 선택합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                단일 선택에 Checkbox를 사용하지 마세요. On/Off 전환은 Toggle을, 단일 선택은 Radio를 사용합니다.
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
                항목이 3개 이하일 때는 가로(--row) 배치를 사용하면 공간을 효율적으로 활용할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                라벨 텍스트 없이 체크박스나 라디오만 단독으로 사용하지 마세요. 항상 명확한 라벨을 함께 제공합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
