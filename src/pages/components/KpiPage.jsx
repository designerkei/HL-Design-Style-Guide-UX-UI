export default function KpiPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">KPI Card</h1>
        <p className="doc-page-desc">
          KPI Card는 핵심 성과 지표를 한눈에 파악할 수 있도록 숫자, 단위, 추세를 표시하는 대시보드 전용 컴포넌트입니다. 운영 현황의 즉각적 이해를 돕습니다.
        </p>
      </div>

      {/* ========== 라이브 데모 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">라이브 데모</h2>

        {/* 4-Column KPI Row */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">4-Column KPI Row</span>
            <span className="doc-demo__tag">hl-kpi-row--4</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-kpi-row hl-kpi-row--4" style={{ width: '100%' }}>
              <div className="hl-kpi">
                <span className="hl-kpi__label">가동률</span>
                <span className="hl-kpi__value">
                  94.2<span className="hl-kpi__unit">%</span>
                </span>
                <span className="hl-kpi__trend hl-kpi__trend--up">
                  <i className="icon-trending-up" /> +2.1%
                </span>
              </div>
              <div className="hl-kpi">
                <span className="hl-kpi__label">금일 생산량</span>
                <span className="hl-kpi__value">
                  12,847<span className="hl-kpi__unit">EA</span>
                </span>
                <span className="hl-kpi__trend hl-kpi__trend--up">
                  <i className="icon-trending-up" /> +540
                </span>
              </div>
              <div className="hl-kpi">
                <span className="hl-kpi__label">불량률</span>
                <span className="hl-kpi__value">
                  0.8<span className="hl-kpi__unit">%</span>
                </span>
                <span className="hl-kpi__trend hl-kpi__trend--down">
                  <i className="icon-trending-down" /> -0.3%
                </span>
              </div>
              <div className="hl-kpi">
                <span className="hl-kpi__label">비가동 장비</span>
                <span className="hl-kpi__value">
                  3<span className="hl-kpi__unit">대</span>
                </span>
                <span className="hl-kpi__trend hl-kpi__trend--down">
                  <i className="icon-trending-down" /> -1
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column KPI Row */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">3-Column KPI Row</span>
            <span className="doc-demo__tag">hl-kpi-row--3</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-kpi-row hl-kpi-row--3" style={{ width: '100%' }}>
              <div className="hl-kpi">
                <span className="hl-kpi__label">총 장비 수</span>
                <span className="hl-kpi__value">
                  256<span className="hl-kpi__unit">대</span>
                </span>
              </div>
              <div className="hl-kpi">
                <span className="hl-kpi__label">평균 수명</span>
                <span className="hl-kpi__value">
                  4.7<span className="hl-kpi__unit">년</span>
                </span>
              </div>
              <div className="hl-kpi">
                <span className="hl-kpi__label">금월 점검 완료</span>
                <span className="hl-kpi__value">
                  87<span className="hl-kpi__unit">건</span>
                </span>
                <span className="hl-kpi__trend hl-kpi__trend--up">
                  <i className="icon-trending-up" /> +12
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== KPI 해부도 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">KPI 해부도 (Anatomy)</h2>
        <p className="doc-section-desc">
          KPI Card는 Label, Value, Unit, Trend 네 가지 요소로 구성됩니다.
        </p>

        <div className="doc-sub">
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>요소</th>
                <th>클래스</th>
                <th>역할</th>
                <th>스타일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Label</td>
                <td className="doc-token-name">.hl-kpi__label</td>
                <td>지표의 이름 (예: 가동률)</td>
                <td>xs, uppercase, muted, weight 500</td>
              </tr>
              <tr>
                <td>Value</td>
                <td className="doc-token-name">.hl-kpi__value</td>
                <td>주요 수치 (예: 94.2)</td>
                <td>2xl, bold, tabular-nums</td>
              </tr>
              <tr>
                <td>Unit</td>
                <td className="doc-token-name">.hl-kpi__unit</td>
                <td>단위 (예: %, EA, 대)</td>
                <td>sm, weight 400, secondary</td>
              </tr>
              <tr>
                <td>Trend</td>
                <td className="doc-token-name">.hl-kpi__trend</td>
                <td>변화량 및 방향 표시</td>
                <td>xs, weight 500, icon + 텍스트</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ========== 숫자 포맷팅 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">숫자 포맷팅 규칙</h2>

        <div className="doc-sub">
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>규칙</th>
                <th>예시</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>천 단위 콤마</td>
                <td className="doc-token-val">12,847</td>
                <td>1,000 이상의 정수에 천 단위 구분자 적용</td>
              </tr>
              <tr>
                <td>퍼센트 소수점</td>
                <td className="doc-token-val">94.2%</td>
                <td>퍼센트는 소수 첫째 자리까지 표시</td>
              </tr>
              <tr>
                <td>정수 수치</td>
                <td className="doc-token-val">3대</td>
                <td>개수, 횟수 등은 소수점 없이 정수로 표시</td>
              </tr>
              <tr>
                <td>큰 수 축약</td>
                <td className="doc-token-val">1.2M</td>
                <td>백만 이상은 M, 십억 이상은 B로 축약</td>
              </tr>
              <tr>
                <td>Trend 부호</td>
                <td className="doc-token-val">+2.1% / -0.3%</td>
                <td>양수는 +, 음수는 - 부호를 명시적으로 표시</td>
              </tr>
              <tr>
                <td>Tabular Nums</td>
                <td className="doc-token-val">font-variant-numeric</td>
                <td>고정폭 숫자로 정렬 유지 (tabular-nums)</td>
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
                <td className="doc-token-name">.hl-kpi-row</td>
                <td>KPI 행 그리드 컨테이너</td>
                <td>display: grid, gap sp-3</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-kpi-row--4</td>
                <td>4열 그리드</td>
                <td>repeat(4, 1fr)</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-kpi-row--3</td>
                <td>3열 그리드</td>
                <td>repeat(3, 1fr)</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-kpi</td>
                <td>KPI 카드 컨테이너</td>
                <td>surface, radius, padding, shadow-1</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-kpi__trend--up</td>
                <td>상승 추세</td>
                <td>color: success</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-kpi__trend--down</td>
                <td>하락 추세</td>
                <td>color: error</td>
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
                한 행에 최대 4~5개의 KPI만 표시하세요. 핵심 지표에 집중하여 빠른 의사결정을 돕습니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                6개 이상의 KPI를 한 행에 나열하지 마세요. 정보 과부하로 오히려 중요 지표를 놓칠 수 있습니다.
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
                Trend 색상은 시맨틱 의미에 맞게 사용하세요. 상승이 긍정적이면 success(녹색), 부정적이면 error(빨간색)를 사용합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                상승을 항상 녹색으로 표시하지 마세요. 불량률 상승은 부정적이므로 error(빨간색)가 적절합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
