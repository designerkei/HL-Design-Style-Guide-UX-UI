# HL Design System — 좋은 예시

> 이 문서는 HL 내부 운영 도구의 **도메인별 전체 화면 구성 예시**를 제공한다.
> 각 예시는 **Filter → Summary → Main View → Detail** 구조를 따른다.
> CSS 변수 버전과 Tailwind 버전을 모두 제공한다. 복사해서 바로 사용 가능하다.

---

## 1. 운영 현황 대시보드

KPI 카드 + 라인 차트 + 테이블 조합. 가장 기본적인 내부 도구 화면.

### CSS 변수 버전

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../../tokens/design-tokens.css" />
  <title>운영 현황 대시보드</title>
  <style>
    .dashboard { max-width: var(--content-max-width); margin: 0 auto; padding: var(--space-4); }
    .section { margin-bottom: var(--space-4); }
    .kpi-row { display: flex; gap: var(--space-3); }
    .kpi-card {
      flex: 1; background: var(--surface-raised); border: 1px solid var(--border);
      border-left: 3px solid var(--border); border-radius: var(--radius-lg);
      padding: var(--space-3) var(--space-4); box-shadow: var(--shadow-xs);
    }
    .kpi-card--success { border-left-color: var(--color-success); }
    .kpi-card--warning { border-left-color: var(--color-warning); }
    .kpi-card--error { border-left-color: var(--color-error); }
    .kpi-label { font-size: var(--text-xs); color: var(--text-secondary); margin-bottom: var(--space-1); }
    .kpi-value { font-size: var(--text-2xl); font-weight: var(--font-weight-bold); color: var(--text); }
    .kpi-unit { font-size: var(--text-sm); font-weight: var(--font-weight-normal); color: var(--text-secondary); }
    .kpi-trend { font-size: var(--text-xs); margin-top: var(--space-1); }
    .kpi-trend--up { color: var(--color-success); }
    .kpi-trend--down { color: var(--color-error); }
    .filter-bar {
      display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-2);
      padding: var(--space-3) var(--space-4); background: var(--surface);
      border: 1px solid var(--border); border-radius: var(--radius-lg);
    }
    .filter-input {
      padding: var(--space-2) var(--space-3); font-size: var(--text-sm);
      border: 1px solid var(--border); border-radius: var(--radius-md);
      background: var(--surface); color: var(--text); font-family: var(--font-sans);
    }
    .chart-placeholder {
      background: var(--surface-raised); border: 1px solid var(--border);
      border-radius: var(--radius-lg); padding: var(--space-6);
      text-align: center; color: var(--text-tertiary); font-size: var(--text-sm);
      min-height: 200px; display: flex; align-items: center; justify-content: center;
    }
    .table-card {
      background: var(--surface-raised); border: 1px solid var(--border);
      border-radius: var(--radius-lg); overflow: hidden;
    }
    .table-header {
      padding: var(--space-3) var(--space-4);
      border-bottom: 1px solid var(--border);
      font-weight: var(--font-weight-semibold); font-size: var(--text-sm);
    }
    .table { width: 100%; border-collapse: collapse; font-size: var(--text-sm); }
    .table th {
      padding: var(--space-2) var(--space-3); text-align: left;
      font-size: var(--text-xs); font-weight: var(--font-weight-semibold);
      color: var(--text-secondary); background: var(--bg-secondary);
      border-bottom: 1px solid var(--border); text-transform: uppercase;
    }
    .table td {
      padding: var(--space-2) var(--space-3); border-bottom: 1px solid var(--border); color: var(--text);
    }
    .table tbody tr { height: 40px; }
    .table tbody tr:hover { background: var(--bg-tertiary); }
    .badge {
      display: inline-flex; align-items: center; gap: var(--space-1);
      padding: var(--space-0-5) var(--space-2); font-size: var(--text-xs);
      font-weight: var(--font-weight-medium); border-radius: var(--radius-full);
    }
    .badge-success { background: var(--color-success-bg); color: var(--color-success); }
    .badge-warning { background: var(--color-warning-bg); color: var(--color-warning); }
    .badge-error { background: var(--color-error-bg); color: var(--color-error); }
    .btn {
      padding: var(--space-1) var(--space-3); font-size: var(--text-xs);
      font-weight: var(--font-weight-medium); border-radius: var(--radius-md);
      cursor: pointer; border: none; font-family: var(--font-sans);
    }
    .btn-primary { background: var(--color-primary-600); color: var(--text-inverse); }
    .btn-ghost { background: transparent; color: var(--text-secondary); }
  </style>
</head>
<body>
  <div class="dashboard">

    <!-- ===== [1] Filter / Control Bar ===== -->
    <div class="section">
      <div class="filter-bar">
        <input class="filter-input" type="text" placeholder="라인명 검색..." />
        <select class="filter-input">
          <option value="">공정 전체</option>
          <option>조립</option>
          <option>도장</option>
          <option>검사</option>
        </select>
        <input class="filter-input" type="date" value="2025-01-01" />
        <span style="color: var(--text-tertiary)">~</span>
        <input class="filter-input" type="date" value="2025-01-15" />
        <button class="btn btn-primary">적용</button>
        <button class="btn btn-ghost">초기화</button>
      </div>
    </div>

    <!-- ===== [2] Summary / KPI ===== -->
    <div class="section">
      <div class="kpi-row">
        <div class="kpi-card kpi-card--success">
          <div class="kpi-label">총 생산량</div>
          <div class="kpi-value">12,345 <span class="kpi-unit">건</span></div>
          <div class="kpi-trend kpi-trend--up">↑ 8.2% 전월 대비</div>
        </div>
        <div class="kpi-card kpi-card--success">
          <div class="kpi-label">완료율</div>
          <div class="kpi-value">94.7 <span class="kpi-unit">%</span></div>
          <div class="kpi-trend kpi-trend--up">↑ 1.3% 전월 대비</div>
        </div>
        <div class="kpi-card kpi-card--warning">
          <div class="kpi-label">평균 처리 시간</div>
          <div class="kpi-value">4.2 <span class="kpi-unit">시간</span></div>
          <div class="kpi-trend kpi-trend--down">↑ 0.3시간 전월 대비</div>
        </div>
        <div class="kpi-card kpi-card--error">
          <div class="kpi-label">불량률</div>
          <div class="kpi-value">2.1 <span class="kpi-unit">%</span></div>
          <div class="kpi-trend kpi-trend--down">↑ 0.5% 전월 대비</div>
        </div>
      </div>
    </div>

    <!-- ===== [3] Main View (자유 시각화 영역) ===== -->
    <div class="section">
      <div class="chart-placeholder">
        📈 일별 생산량 추이 차트 (Recharts / Chart.js 등으로 구현)
      </div>
    </div>

    <!-- ===== [4] Detail / Table ===== -->
    <div class="section">
      <div class="table-card">
        <div class="table-header">생산 실적 상세</div>
        <div style="overflow-x: auto;">
          <table class="table">
            <thead>
              <tr>
                <th>라인</th>
                <th>공정</th>
                <th>목표</th>
                <th>실적</th>
                <th>달성률</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A라인</td>
                <td>조립</td>
                <td>1,000</td>
                <td>1,023</td>
                <td>102.3%</td>
                <td><span class="badge badge-success">● 정상</span></td>
              </tr>
              <tr>
                <td>B라인</td>
                <td>도장</td>
                <td>800</td>
                <td>756</td>
                <td>94.5%</td>
                <td><span class="badge badge-warning">● 주의</span></td>
              </tr>
              <tr>
                <td>C라인</td>
                <td>검사</td>
                <td>600</td>
                <td>412</td>
                <td>68.7%</td>
                <td><span class="badge badge-error">● 미달</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</body>
</html>
```

### Tailwind 버전

```jsx
export default function OperationsDashboard() {
  return (
    <div className="max-w-content mx-auto p-4">

      {/* ===== [1] Filter / Control Bar ===== */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
        <input type="text" placeholder="라인명 검색..."
          className="min-w-[160px] px-3 py-2 text-sm bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700 rounded-md
            placeholder:text-gray-400 focus:outline-none focus:border-primary-500" />
        <select className="px-3 py-2 text-sm bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700 rounded-md">
          <option value="">공정 전체</option>
          <option>조립</option>
          <option>도장</option>
          <option>검사</option>
        </select>
        <input type="date" defaultValue="2025-01-01"
          className="px-3 py-2 text-sm bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700 rounded-md" />
        <span className="text-gray-400">~</span>
        <input type="date" defaultValue="2025-01-15"
          className="px-3 py-2 text-sm bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700 rounded-md" />
        <button className="px-3 py-1 text-xs font-medium bg-primary-600 text-white rounded-md">적용</button>
        <button className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 rounded-md
          hover:bg-gray-50 dark:hover:bg-gray-800">초기화</button>
      </div>

      {/* ===== [2] Summary / KPI ===== */}
      <div className="flex gap-3 mb-4">
        <KpiCard label="총 생산량" value="12,345" unit="건"
          trend="8.2% 전월 대비" trendDir="up" status="success" />
        <KpiCard label="완료율" value="94.7" unit="%"
          trend="1.3% 전월 대비" trendDir="up" status="success" />
        <KpiCard label="평균 처리 시간" value="4.2" unit="시간"
          trend="0.3시간 전월 대비" trendDir="up" status="warning" />
        <KpiCard label="불량률" value="2.1" unit="%"
          trend="0.5% 전월 대비" trendDir="up" status="error" />
      </div>

      {/* ===== [3] Main View (자유 시각화 영역) ===== */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
        rounded-lg p-6 mb-4 min-h-[200px] flex items-center justify-center text-gray-400 text-sm">
        📈 일별 생산량 추이 차트 (Recharts / Chart.js 등으로 구현)
      </div>

      {/* ===== [4] Detail / Table ===== */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
        rounded-lg overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700
          text-sm font-semibold text-gray-900 dark:text-gray-50">
          생산 실적 상세
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                {["라인", "공정", "목표", "실적", "달성률", "상태"].map((h) => (
                  <th key={h} className="px-3 py-2 text-left text-xs font-semibold text-gray-600
                    dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { line: "A라인", process: "조립", target: "1,000", actual: "1,023", rate: "102.3%", status: "success", statusText: "정상" },
                { line: "B라인", process: "도장", target: "800",   actual: "756",   rate: "94.5%",  status: "warning", statusText: "주의" },
                { line: "C라인", process: "검사", target: "600",   actual: "412",   rate: "68.7%",  status: "error",   statusText: "미달" },
              ].map((row) => (
                <tr key={row.line} className="h-10 hover:bg-gray-100 dark:hover:bg-gray-800
                  border-b border-gray-200 dark:border-gray-700">
                  <td className="px-3 py-2 font-medium">{row.line}</td>
                  <td className="px-3 py-2">{row.process}</td>
                  <td className="px-3 py-2 font-mono">{row.target}</td>
                  <td className="px-3 py-2 font-mono">{row.actual}</td>
                  <td className="px-3 py-2 font-mono">{row.rate}</td>
                  <td className="px-3 py-2"><Badge variant={row.status}>{row.statusText}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

function KpiCard({ label, value, unit, trend, trendDir, status }) {
  const border = { success: "border-l-success", warning: "border-l-warning", error: "border-l-error" }[status];
  const trendColor = trendDir === "up" && (status === "warning" || status === "error") ? "text-error" : "text-success";
  return (
    <div className={`flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
      rounded-lg px-4 py-3 shadow-xs border-l-[3px] ${border}`}>
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">{label}</div>
      <div className="text-2xl font-bold text-gray-900 dark:text-gray-50 tabular-nums">
        {value}<span className="text-sm font-normal text-gray-600 dark:text-gray-400 ml-1">{unit}</span>
      </div>
      <div className={`text-xs mt-1 ${trendColor}`}>↑ {trend}</div>
    </div>
  );
}

function Badge({ variant, children }) {
  const styles = {
    success: "bg-success-bg text-success",
    warning: "bg-warning-bg text-warning",
    error:   "bg-error-bg text-error",
  };
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full ${styles[variant]}`}>
      ● {children}
    </span>
  );
}
```

---

## 2. 장비/로봇 모니터링

상태 뱃지 + 실시간 지표 + 이벤트 로그 테이블.

### CSS 변수 버전

```html
<!-- design-tokens.css import 생략 (예시 1과 동일한 스타일 기반) -->
<div class="dashboard">

  <!-- ===== [1] Filter / Control Bar ===== -->
  <div class="section">
    <div class="filter-bar">
      <input class="filter-input" type="text" placeholder="장비 검색..." />
      <select class="filter-input">
        <option value="">장비 유형 전체</option>
        <option>CNC</option>
        <option>로봇암</option>
        <option>컨베이어</option>
      </select>
      <select class="filter-input">
        <option value="">상태 전체</option>
        <option>가동</option>
        <option>점검</option>
        <option>정지</option>
      </select>
      <button class="btn btn-primary">적용</button>
      <button class="btn btn-ghost">초기화</button>
    </div>
  </div>

  <!-- ===== [2] Summary / KPI ===== -->
  <div class="section">
    <div class="kpi-row">
      <div class="kpi-card kpi-card--success">
        <div class="kpi-label">총 장비</div>
        <div class="kpi-value">48 <span class="kpi-unit">대</span></div>
      </div>
      <div class="kpi-card kpi-card--success">
        <div class="kpi-label">가동 중</div>
        <div class="kpi-value">42 <span class="kpi-unit">대</span></div>
        <div class="kpi-trend kpi-trend--up">87.5%</div>
      </div>
      <div class="kpi-card kpi-card--warning">
        <div class="kpi-label">점검 중</div>
        <div class="kpi-value">4 <span class="kpi-unit">대</span></div>
      </div>
      <div class="kpi-card kpi-card--error">
        <div class="kpi-label">정지</div>
        <div class="kpi-value">2 <span class="kpi-unit">대</span></div>
      </div>
    </div>
  </div>

  <!-- ===== [3] Main View (자유 시각화 — 장비 상태 그리드) ===== -->
  <div class="section">
    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(180px, 1fr)); gap:var(--space-3);">
      <!-- 장비 카드 반복 -->
      <div class="kpi-card" style="border-left:3px solid var(--color-success); text-align:center;">
        <div style="font-size:var(--text-2xl); margin-bottom:var(--space-2);">🤖</div>
        <div style="font-size:var(--text-sm); font-weight:var(--font-weight-semibold);">로봇암 #01</div>
        <div><span class="badge badge-success">● 가동</span></div>
        <div style="font-size:var(--text-xs); color:var(--text-secondary); margin-top:var(--space-1);">가동률 98.2%</div>
      </div>
      <div class="kpi-card" style="border-left:3px solid var(--color-success); text-align:center;">
        <div style="font-size:var(--text-2xl); margin-bottom:var(--space-2);">🏭</div>
        <div style="font-size:var(--text-sm); font-weight:var(--font-weight-semibold);">CNC 밀링 #03</div>
        <div><span class="badge badge-success">● 가동</span></div>
        <div style="font-size:var(--text-xs); color:var(--text-secondary); margin-top:var(--space-1);">가동률 95.8%</div>
      </div>
      <div class="kpi-card" style="border-left:3px solid var(--color-warning); text-align:center;">
        <div style="font-size:var(--text-2xl); margin-bottom:var(--space-2);">⚙️</div>
        <div style="font-size:var(--text-sm); font-weight:var(--font-weight-semibold);">컨베이어 #02</div>
        <div><span class="badge badge-warning">● 점검</span></div>
        <div style="font-size:var(--text-xs); color:var(--text-secondary); margin-top:var(--space-1);">예정: 14:00</div>
      </div>
      <div class="kpi-card" style="border-left:3px solid var(--color-error); text-align:center;">
        <div style="font-size:var(--text-2xl); margin-bottom:var(--space-2);">🔧</div>
        <div style="font-size:var(--text-sm); font-weight:var(--font-weight-semibold);">프레스 #01</div>
        <div><span class="badge badge-error">● 정지</span></div>
        <div style="font-size:var(--text-xs); color:var(--text-secondary); margin-top:var(--space-1);">고장 신고됨</div>
      </div>
    </div>
  </div>

  <!-- ===== [4] Detail / Table (이벤트 로그) ===== -->
  <div class="section">
    <div class="table-card">
      <div class="table-header">최근 이벤트 로그</div>
      <div style="overflow-x: auto;">
        <table class="table">
          <thead>
            <tr>
              <th>시간</th>
              <th>장비</th>
              <th>유형</th>
              <th>이벤트</th>
              <th>심각도</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-family:var(--font-mono);">14:32:15</td>
              <td>프레스 #01</td>
              <td>프레스</td>
              <td>유압 시스템 이상 감지</td>
              <td><span class="badge badge-error">● 긴급</span></td>
            </tr>
            <tr>
              <td style="font-family:var(--font-mono);">14:15:03</td>
              <td>컨베이어 #02</td>
              <td>컨베이어</td>
              <td>정기 점검 시작</td>
              <td><span class="badge badge-warning">● 경고</span></td>
            </tr>
            <tr>
              <td style="font-family:var(--font-mono);">13:58:42</td>
              <td>로봇암 #01</td>
              <td>로봇암</td>
              <td>작업 사이클 1,000회 도달</td>
              <td><span class="badge badge-success">● 정보</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</div>
```

### Tailwind 버전

```jsx
export default function EquipmentMonitoring() {
  const equipment = [
    { id: "EQ-001", name: "로봇암 #01", icon: "🤖", status: "success", statusText: "가동", info: "가동률 98.2%" },
    { id: "EQ-002", name: "CNC 밀링 #03", icon: "🏭", status: "success", statusText: "가동", info: "가동률 95.8%" },
    { id: "EQ-003", name: "컨베이어 #02", icon: "⚙️", status: "warning", statusText: "점검", info: "예정: 14:00" },
    { id: "EQ-004", name: "프레스 #01", icon: "🔧", status: "error", statusText: "정지", info: "고장 신고됨" },
  ];

  const events = [
    { time: "14:32:15", device: "프레스 #01", type: "프레스", event: "유압 시스템 이상 감지", severity: "error", severityText: "긴급" },
    { time: "14:15:03", device: "컨베이어 #02", type: "컨베이어", event: "정기 점검 시작", severity: "warning", severityText: "경고" },
    { time: "13:58:42", device: "로봇암 #01", type: "로봇암", event: "작업 사이클 1,000회 도달", severity: "success", severityText: "정보" },
  ];

  return (
    <div className="max-w-content mx-auto p-4">

      {/* ===== [1] Filter / Control Bar ===== */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
        <input type="text" placeholder="장비 검색..."
          className="min-w-[160px] px-3 py-2 text-sm bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700 rounded-md placeholder:text-gray-400" />
        <select className="px-3 py-2 text-sm bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700 rounded-md">
          <option value="">장비 유형 전체</option>
          <option>CNC</option><option>로봇암</option><option>컨베이어</option>
        </select>
        <select className="px-3 py-2 text-sm bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700 rounded-md">
          <option value="">상태 전체</option>
          <option>가동</option><option>점검</option><option>정지</option>
        </select>
        <button className="px-3 py-1 text-xs font-medium bg-primary-600 text-white rounded-md">적용</button>
        <button className="px-3 py-1 text-xs text-gray-600 dark:text-gray-400 rounded-md">초기화</button>
      </div>

      {/* ===== [2] Summary / KPI ===== */}
      <div className="flex gap-3 mb-4">
        <KpiCard label="총 장비" value="48" unit="대" status="success" />
        <KpiCard label="가동 중" value="42" unit="대" trend="87.5%" trendDir="up" status="success" />
        <KpiCard label="점검 중" value="4" unit="대" status="warning" />
        <KpiCard label="정지" value="2" unit="대" status="error" />
      </div>

      {/* ===== [3] Main View (자유 시각화 — 장비 상태 그리드) ===== */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3 mb-4">
        {equipment.map((eq) => {
          const borderColor = { success: "border-l-success", warning: "border-l-warning", error: "border-l-error" }[eq.status];
          return (
            <div key={eq.id} className={`bg-white dark:bg-gray-800 border border-gray-200
              dark:border-gray-700 rounded-lg p-3 shadow-xs text-center border-l-[3px] ${borderColor}
              cursor-pointer hover:shadow-sm transition-shadow`}>
              <div className="text-2xl mb-2">{eq.icon}</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-50">{eq.name}</div>
              <Badge variant={eq.status}>{eq.statusText}</Badge>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{eq.info}</div>
            </div>
          );
        })}
      </div>

      {/* ===== [4] Detail / Table (이벤트 로그) ===== */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
        rounded-lg overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700
          text-sm font-semibold">최근 이벤트 로그</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                {["시간", "장비", "유형", "이벤트", "심각도"].map((h) => (
                  <th key={h} className="px-3 py-2 text-left text-xs font-semibold text-gray-600
                    dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {events.map((ev, i) => (
                <tr key={i} className="h-10 hover:bg-gray-100 dark:hover:bg-gray-800
                  border-b border-gray-200 dark:border-gray-700">
                  <td className="px-3 py-2 font-mono whitespace-nowrap">{ev.time}</td>
                  <td className="px-3 py-2 font-medium">{ev.device}</td>
                  <td className="px-3 py-2">{ev.type}</td>
                  <td className="px-3 py-2">{ev.event}</td>
                  <td className="px-3 py-2"><Badge variant={ev.severity}>{ev.severityText}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
```

---

## 3. 이벤트/장애 분석

필터 바 + 시계열 차트 + 상세 로그 테이블. 장애 원인 분석에 사용.

### CSS 변수 버전

```html
<div class="dashboard">

  <!-- ===== [1] Filter / Control Bar ===== -->
  <div class="section">
    <div class="filter-bar">
      <input class="filter-input" type="text" placeholder="이벤트 검색..." />
      <select class="filter-input">
        <option value="">심각도 전체</option>
        <option>긴급</option>
        <option>경고</option>
        <option>정보</option>
      </select>
      <select class="filter-input">
        <option value="">카테고리 전체</option>
        <option>장비</option>
        <option>네트워크</option>
        <option>소프트웨어</option>
      </select>
      <input class="filter-input" type="date" value="2025-01-01" />
      <span style="color:var(--text-tertiary)">~</span>
      <input class="filter-input" type="date" value="2025-01-15" />
      <button class="btn btn-primary">적용</button>
      <button class="btn btn-ghost">초기화</button>
    </div>
  </div>

  <!-- ===== [2] Summary / KPI ===== -->
  <div class="section">
    <div class="kpi-row">
      <div class="kpi-card kpi-card--error">
        <div class="kpi-label">총 이벤트</div>
        <div class="kpi-value">156 <span class="kpi-unit">건</span></div>
        <div class="kpi-trend kpi-trend--down">↑ 23건 전주 대비</div>
      </div>
      <div class="kpi-card kpi-card--error">
        <div class="kpi-label">긴급 (Critical)</div>
        <div class="kpi-value">8 <span class="kpi-unit">건</span></div>
      </div>
      <div class="kpi-card kpi-card--warning">
        <div class="kpi-label">평균 복구 시간</div>
        <div class="kpi-value">42 <span class="kpi-unit">분</span></div>
        <div class="kpi-trend kpi-trend--up">↓ 8분 전주 대비</div>
      </div>
      <div class="kpi-card kpi-card--success">
        <div class="kpi-label">해결률</div>
        <div class="kpi-value">94.2 <span class="kpi-unit">%</span></div>
      </div>
    </div>
  </div>

  <!-- ===== [3] Main View (시계열 차트) ===== -->
  <div class="section">
    <div class="chart-placeholder">
      📊 시간대별 이벤트 발생 빈도 차트 (바/라인 차트)
      <br />색상: 긴급=빨강, 경고=노랑, 정보=파랑
    </div>
  </div>

  <!-- ===== [4] Detail / Table (이벤트 로그 상세) ===== -->
  <div class="section">
    <div class="table-card">
      <div class="table-header">이벤트 상세 로그</div>
      <div style="overflow-x:auto;">
        <table class="table">
          <thead>
            <tr>
              <th>발생 시간</th>
              <th>심각도</th>
              <th>카테고리</th>
              <th>대상</th>
              <th>내용</th>
              <th>상태</th>
              <th>복구 시간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-family:var(--font-mono);">01-15 14:32:15</td>
              <td><span class="badge badge-error">● 긴급</span></td>
              <td>장비</td>
              <td>프레스 #01</td>
              <td>유압 시스템 압력 이상</td>
              <td><span class="badge badge-warning">● 처리중</span></td>
              <td>—</td>
            </tr>
            <tr>
              <td style="font-family:var(--font-mono);">01-15 11:20:03</td>
              <td><span class="badge badge-warning">● 경고</span></td>
              <td>네트워크</td>
              <td>스위치 SW-03</td>
              <td>패킷 로스율 5% 초과</td>
              <td><span class="badge badge-success">● 해결됨</span></td>
              <td>15분</td>
            </tr>
            <tr>
              <td style="font-family:var(--font-mono);">01-14 09:45:22</td>
              <td><span class="badge badge-error">● 긴급</span></td>
              <td>소프트웨어</td>
              <td>MES 서버</td>
              <td>데이터베이스 연결 실패</td>
              <td><span class="badge badge-success">● 해결됨</span></td>
              <td>32분</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</div>
```

### Tailwind 버전

```jsx
export default function EventAnalysis() {
  const events = [
    { time: "01-15 14:32:15", severity: "error", severityText: "긴급", category: "장비",
      target: "프레스 #01", content: "유압 시스템 압력 이상", resolution: "warning",
      resolutionText: "처리중", mttr: "—" },
    { time: "01-15 11:20:03", severity: "warning", severityText: "경고", category: "네트워크",
      target: "스위치 SW-03", content: "패킷 로스율 5% 초과", resolution: "success",
      resolutionText: "해결됨", mttr: "15분" },
    { time: "01-14 09:45:22", severity: "error", severityText: "긴급", category: "소프트웨어",
      target: "MES 서버", content: "데이터베이스 연결 실패", resolution: "success",
      resolutionText: "해결됨", mttr: "32분" },
  ];

  return (
    <div className="max-w-content mx-auto p-4">

      {/* ===== [1] Filter / Control Bar ===== */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
        <input type="text" placeholder="이벤트 검색..."
          className="min-w-[160px] px-3 py-2 text-sm bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700 rounded-md placeholder:text-gray-400" />
        <select className="px-3 py-2 text-sm bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700 rounded-md">
          <option value="">심각도 전체</option>
          <option>긴급</option><option>경고</option><option>정보</option>
        </select>
        <select className="px-3 py-2 text-sm bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700 rounded-md">
          <option value="">카테고리 전체</option>
          <option>장비</option><option>네트워크</option><option>소프트웨어</option>
        </select>
        <input type="date" defaultValue="2025-01-01"
          className="px-3 py-2 text-sm bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700 rounded-md" />
        <span className="text-gray-400">~</span>
        <input type="date" defaultValue="2025-01-15"
          className="px-3 py-2 text-sm bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700 rounded-md" />
        <button className="px-3 py-1 text-xs font-medium bg-primary-600 text-white rounded-md">적용</button>
        <button className="px-3 py-1 text-xs text-gray-600 dark:text-gray-400 rounded-md">초기화</button>
      </div>

      {/* ===== [2] Summary / KPI ===== */}
      <div className="flex gap-3 mb-4">
        <KpiCard label="총 이벤트" value="156" unit="건" trend="23건 전주 대비" trendDir="up" status="error" />
        <KpiCard label="긴급 (Critical)" value="8" unit="건" status="error" />
        <KpiCard label="평균 복구 시간" value="42" unit="분" trend="8분 전주 대비 ↓" trendDir="down" status="warning" />
        <KpiCard label="해결률" value="94.2" unit="%" status="success" />
      </div>

      {/* ===== [3] Main View (시계열 차트) ===== */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
        rounded-lg p-6 mb-4 min-h-[200px] flex items-center justify-center text-gray-400 text-sm">
        📊 시간대별 이벤트 발생 빈도 차트 (긴급=빨강, 경고=노랑, 정보=파랑)
      </div>

      {/* ===== [4] Detail / Table ===== */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
        rounded-lg overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-sm font-semibold">
          이벤트 상세 로그
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                {["발생 시간", "심각도", "카테고리", "대상", "내용", "상태", "복구 시간"].map((h) => (
                  <th key={h} className="px-3 py-2 text-left text-xs font-semibold text-gray-600
                    dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {events.map((ev, i) => (
                <tr key={i} className="h-10 hover:bg-gray-100 dark:hover:bg-gray-800
                  border-b border-gray-200 dark:border-gray-700">
                  <td className="px-3 py-2 font-mono whitespace-nowrap">{ev.time}</td>
                  <td className="px-3 py-2"><Badge variant={ev.severity}>{ev.severityText}</Badge></td>
                  <td className="px-3 py-2">{ev.category}</td>
                  <td className="px-3 py-2 font-medium">{ev.target}</td>
                  <td className="px-3 py-2">{ev.content}</td>
                  <td className="px-3 py-2"><Badge variant={ev.resolution}>{ev.resolutionText}</Badge></td>
                  <td className="px-3 py-2 font-mono">{ev.mttr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
```

---

## 4. CCTV / 영상 모니터링

영상 그리드(자유 영역) + 카메라 상태 테이블 + 이벤트 리스트.

### CSS 변수 버전

```html
<div class="dashboard">

  <!-- ===== [1] Filter / Control Bar ===== -->
  <div class="section">
    <div class="filter-bar">
      <input class="filter-input" type="text" placeholder="카메라 검색..." />
      <select class="filter-input">
        <option value="">위치 전체</option>
        <option>1층 생산동</option>
        <option>2층 조립동</option>
        <option>외부 주차장</option>
      </select>
      <select class="filter-input">
        <option value="">상태 전체</option>
        <option>온라인</option>
        <option>오프라인</option>
        <option>이벤트 감지</option>
      </select>
      <select class="filter-input">
        <option>2x2 그리드</option>
        <option>3x3 그리드</option>
        <option>1+5 레이아웃</option>
      </select>
      <button class="btn btn-primary">적용</button>
    </div>
  </div>

  <!-- ===== [2] Summary / KPI ===== -->
  <div class="section">
    <div class="kpi-row">
      <div class="kpi-card kpi-card--success">
        <div class="kpi-label">전체 카메라</div>
        <div class="kpi-value">24 <span class="kpi-unit">대</span></div>
      </div>
      <div class="kpi-card kpi-card--success">
        <div class="kpi-label">온라인</div>
        <div class="kpi-value">22 <span class="kpi-unit">대</span></div>
      </div>
      <div class="kpi-card kpi-card--error">
        <div class="kpi-label">오프라인</div>
        <div class="kpi-value">2 <span class="kpi-unit">대</span></div>
      </div>
      <div class="kpi-card kpi-card--warning">
        <div class="kpi-label">금일 이벤트</div>
        <div class="kpi-value">15 <span class="kpi-unit">건</span></div>
      </div>
    </div>
  </div>

  <!-- ===== [3] Main View (자유 시각화 — 영상 그리드) ===== -->
  <div class="section">
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-2);">
      <!-- 영상 피드 placeholder -->
      <div style="background:var(--color-gray-900); border-radius:var(--radius-md);
        aspect-ratio:16/9; display:flex; flex-direction:column; align-items:center;
        justify-content:center; color:var(--color-gray-400); font-size:var(--text-sm); position:relative;">
        <div style="font-size:var(--text-2xl); margin-bottom:var(--space-2);">📹</div>
        CAM-01 · 1층 생산동 입구
        <div style="position:absolute;top:var(--space-2);left:var(--space-2);">
          <span class="badge badge-success" style="font-size:var(--text-xs);">● LIVE</span>
        </div>
      </div>
      <div style="background:var(--color-gray-900); border-radius:var(--radius-md);
        aspect-ratio:16/9; display:flex; flex-direction:column; align-items:center;
        justify-content:center; color:var(--color-gray-400); font-size:var(--text-sm); position:relative;">
        <div style="font-size:var(--text-2xl); margin-bottom:var(--space-2);">📹</div>
        CAM-02 · 1층 생산라인 A
        <div style="position:absolute;top:var(--space-2);left:var(--space-2);">
          <span class="badge badge-success" style="font-size:var(--text-xs);">● LIVE</span>
        </div>
      </div>
      <div style="background:var(--color-gray-900); border-radius:var(--radius-md);
        aspect-ratio:16/9; display:flex; flex-direction:column; align-items:center;
        justify-content:center; color:var(--color-gray-400); font-size:var(--text-sm); position:relative;">
        <div style="font-size:var(--text-2xl); margin-bottom:var(--space-2);">📹</div>
        CAM-03 · 2층 조립동
        <div style="position:absolute;top:var(--space-2);left:var(--space-2);">
          <span class="badge badge-warning" style="font-size:var(--text-xs);">● 이벤트</span>
        </div>
      </div>
      <div style="background:var(--color-gray-800); border-radius:var(--radius-md);
        aspect-ratio:16/9; display:flex; flex-direction:column; align-items:center;
        justify-content:center; color:var(--color-gray-500); font-size:var(--text-sm); position:relative;">
        <div style="font-size:var(--text-2xl); margin-bottom:var(--space-2);">📹</div>
        CAM-04 · 외부 주차장
        <div style="position:absolute;top:var(--space-2);left:var(--space-2);">
          <span class="badge badge-error" style="font-size:var(--text-xs);">● 오프라인</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ===== [4] Detail / Table (카메라 상태 + 이벤트) ===== -->
  <div class="section" style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-3);">
    <!-- 카메라 상태 테이블 -->
    <div class="table-card">
      <div class="table-header">카메라 상태</div>
      <div style="overflow-x:auto;">
        <table class="table">
          <thead>
            <tr><th>ID</th><th>위치</th><th>상태</th><th>해상도</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>CAM-01</td><td>1층 생산동 입구</td>
              <td><span class="badge badge-success">● 온라인</span></td><td>1080p</td>
            </tr>
            <tr>
              <td>CAM-02</td><td>1층 생산라인 A</td>
              <td><span class="badge badge-success">● 온라인</span></td><td>1080p</td>
            </tr>
            <tr>
              <td>CAM-03</td><td>2층 조립동</td>
              <td><span class="badge badge-warning">● 이벤트</span></td><td>4K</td>
            </tr>
            <tr>
              <td>CAM-04</td><td>외부 주차장</td>
              <td><span class="badge badge-error">● 오프라인</span></td><td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 감지 이벤트 테이블 -->
    <div class="table-card">
      <div class="table-header">최근 감지 이벤트</div>
      <div style="overflow-x:auto;">
        <table class="table">
          <thead>
            <tr><th>시간</th><th>카메라</th><th>이벤트</th><th>신뢰도</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-family:var(--font-mono);">14:28</td>
              <td>CAM-03</td><td>움직임 감지</td><td>92%</td>
            </tr>
            <tr>
              <td style="font-family:var(--font-mono);">14:15</td>
              <td>CAM-01</td><td>차량 진입</td><td>88%</td>
            </tr>
            <tr>
              <td style="font-family:var(--font-mono);">13:42</td>
              <td>CAM-02</td><td>안전모 미착용</td><td>85%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</div>
```

### Tailwind 버전

```jsx
export default function CctvMonitoring() {
  const cameras = [
    { id: "CAM-01", location: "1층 생산동 입구", status: "success", statusText: "LIVE" },
    { id: "CAM-02", location: "1층 생산라인 A",  status: "success", statusText: "LIVE" },
    { id: "CAM-03", location: "2층 조립동",      status: "warning", statusText: "이벤트" },
    { id: "CAM-04", location: "외부 주차장",      status: "error",   statusText: "오프라인" },
  ];

  const cameraTable = [
    { id: "CAM-01", location: "1층 생산동 입구", status: "success", statusText: "온라인",   res: "1080p" },
    { id: "CAM-02", location: "1층 생산라인 A",  status: "success", statusText: "온라인",   res: "1080p" },
    { id: "CAM-03", location: "2층 조립동",      status: "warning", statusText: "이벤트",   res: "4K" },
    { id: "CAM-04", location: "외부 주차장",      status: "error",   statusText: "오프라인", res: "—" },
  ];

  const detectionEvents = [
    { time: "14:28", camera: "CAM-03", event: "움직임 감지",    confidence: "92%" },
    { time: "14:15", camera: "CAM-01", event: "차량 진입",      confidence: "88%" },
    { time: "13:42", camera: "CAM-02", event: "안전모 미착용",  confidence: "85%" },
  ];

  return (
    <div className="max-w-content mx-auto p-4">

      {/* ===== [1] Filter / Control Bar ===== */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
        <input type="text" placeholder="카메라 검색..."
          className="min-w-[160px] px-3 py-2 text-sm bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700 rounded-md placeholder:text-gray-400" />
        <select className="px-3 py-2 text-sm bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700 rounded-md">
          <option value="">위치 전체</option>
          <option>1층 생산동</option><option>2층 조립동</option><option>외부 주차장</option>
        </select>
        <select className="px-3 py-2 text-sm bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700 rounded-md">
          <option value="">상태 전체</option>
          <option>온라인</option><option>오프라인</option><option>이벤트 감지</option>
        </select>
        <select className="px-3 py-2 text-sm bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700 rounded-md">
          <option>2x2 그리드</option><option>3x3 그리드</option><option>1+5 레이아웃</option>
        </select>
        <button className="px-3 py-1 text-xs font-medium bg-primary-600 text-white rounded-md">적용</button>
      </div>

      {/* ===== [2] Summary / KPI ===== */}
      <div className="flex gap-3 mb-4">
        <KpiCard label="전체 카메라" value="24" unit="대" status="success" />
        <KpiCard label="온라인" value="22" unit="대" status="success" />
        <KpiCard label="오프라인" value="2" unit="대" status="error" />
        <KpiCard label="금일 이벤트" value="15" unit="건" status="warning" />
      </div>

      {/* ===== [3] Main View (자유 시각화 — 영상 그리드) ===== */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {cameras.map((cam) => {
          const bg = cam.status === "error" ? "bg-gray-800" : "bg-gray-900";
          const badgeVariant = cam.status;
          return (
            <div key={cam.id} className={`${bg} rounded-md aspect-video flex flex-col items-center
              justify-center text-gray-400 text-sm relative cursor-pointer
              hover:ring-2 hover:ring-primary-500 transition-shadow`}>
              <div className="text-2xl mb-2">📹</div>
              <span>{cam.id} · {cam.location}</span>
              <div className="absolute top-2 left-2">
                <Badge variant={badgeVariant}>{cam.statusText}</Badge>
              </div>
            </div>
          );
        })}
      </div>

      {/* ===== [4] Detail / Table ===== */}
      <div className="grid grid-cols-2 gap-3">
        {/* 카메라 상태 테이블 */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
          rounded-lg overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700
            text-sm font-semibold">카메라 상태</div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  {["ID", "위치", "상태", "해상도"].map((h) => (
                    <th key={h} className="px-3 py-2 text-left text-xs font-semibold text-gray-600
                      dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cameraTable.map((cam) => (
                  <tr key={cam.id} className="h-10 hover:bg-gray-100 dark:hover:bg-gray-800
                    border-b border-gray-200 dark:border-gray-700">
                    <td className="px-3 py-2 font-mono font-medium">{cam.id}</td>
                    <td className="px-3 py-2">{cam.location}</td>
                    <td className="px-3 py-2"><Badge variant={cam.status}>{cam.statusText}</Badge></td>
                    <td className="px-3 py-2">{cam.res}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 감지 이벤트 테이블 */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
          rounded-lg overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700
            text-sm font-semibold">최근 감지 이벤트</div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  {["시간", "카메라", "이벤트", "신뢰도"].map((h) => (
                    <th key={h} className="px-3 py-2 text-left text-xs font-semibold text-gray-600
                      dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {detectionEvents.map((ev, i) => (
                  <tr key={i} className="h-10 hover:bg-gray-100 dark:hover:bg-gray-800
                    border-b border-gray-200 dark:border-gray-700">
                    <td className="px-3 py-2 font-mono">{ev.time}</td>
                    <td className="px-3 py-2 font-medium">{ev.camera}</td>
                    <td className="px-3 py-2">{ev.event}</td>
                    <td className="px-3 py-2 font-mono">{ev.confidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
```
