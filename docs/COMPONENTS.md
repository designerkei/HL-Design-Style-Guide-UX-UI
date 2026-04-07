# HL Design System — 컴포넌트 패턴

> 이 문서는 HL 내부 운영 도구에서 사용하는 **컴포넌트 패턴 레퍼런스**이다.
> 각 컴포넌트마다 **순수 CSS 변수 버전**과 **Tailwind 버전**을 병기한다.
> 복사해서 바로 사용할 수 있는 수준으로 작성되어 있다.

---

## 1. Button

버튼은 4가지 변형(Primary, Secondary, Ghost, Danger)과 3가지 크기(sm, md, lg)를 지원한다.

### CSS 변수 버전

```html
<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    font-family: var(--font-sans);
    font-weight: var(--font-weight-medium);
    border-radius: var(--radius-md);
    border: 1px solid transparent;
    cursor: pointer;
    transition: all var(--duration-fast) var(--easing);
  }
  /* 크기 */
  .btn-sm  { padding: var(--space-1) var(--space-3);  font-size: var(--text-xs); }
  .btn-md  { padding: var(--space-2) var(--space-4);  font-size: var(--text-sm); }
  .btn-lg  { padding: var(--space-2-5) var(--space-5); font-size: var(--text-base); }
  /* Primary */
  .btn-primary {
    background: var(--color-primary-600);
    color: var(--text-inverse);
  }
  .btn-primary:hover { background: var(--color-primary-700); }
  /* Secondary */
  .btn-secondary {
    background: transparent;
    color: var(--text);
    border-color: var(--border);
  }
  .btn-secondary:hover { background: var(--bg-secondary); border-color: var(--border-hover); }
  /* Ghost */
  .btn-ghost {
    background: transparent;
    color: var(--text-secondary);
  }
  .btn-ghost:hover { background: var(--bg-secondary); color: var(--text); }
  /* Danger */
  .btn-danger {
    background: var(--color-error);
    color: var(--text-inverse);
  }
  .btn-danger:hover { background: var(--color-error); filter: brightness(0.85); }
</style>

<button class="btn btn-primary btn-md">저장</button>
<button class="btn btn-secondary btn-md">취소</button>
<button class="btn btn-ghost btn-sm">더보기</button>
<button class="btn btn-danger btn-md">삭제</button>
```

### Tailwind 버전

```jsx
{/* Primary */}
<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
  bg-primary-600 text-white rounded-md hover:bg-primary-700
  transition-all duration-fast">
  저장
</button>

{/* Secondary */}
<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
  bg-transparent text-gray-900 dark:text-gray-50 border border-gray-200 dark:border-gray-700
  rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-fast">
  취소
</button>

{/* Ghost */}
<button className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium
  text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900
  transition-all duration-fast">
  더보기
</button>

{/* Danger */}
<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
  bg-error text-white rounded-md hover:brightness-90 transition-all duration-fast">
  삭제
</button>
```

---

## 2. Input / Form Field

라벨 + 입력 필드 + 에러 메시지 구조.

### CSS 변수 버전

```html
<style>
  .form-field { display: flex; flex-direction: column; gap: var(--space-1); }
  .form-label {
    font-size: var(--text-sm);
    font-weight: var(--font-weight-medium);
    color: var(--text);
  }
  .form-input {
    padding: var(--space-2) var(--space-3);
    font-size: var(--text-sm);
    font-family: var(--font-sans);
    color: var(--text);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    transition: border-color var(--duration-fast) var(--easing);
  }
  .form-input:hover { border-color: var(--border-hover); }
  .form-input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(0, 145, 199, 0.15); }
  .form-input::placeholder { color: var(--text-tertiary); }
  .form-input--error { border-color: var(--color-error); }
  .form-error {
    font-size: var(--text-xs);
    color: var(--color-error);
  }
</style>

<div class="form-field">
  <label class="form-label">장비명</label>
  <input class="form-input" type="text" placeholder="장비명을 입력하세요" />
</div>

<!-- 에러 상태 -->
<div class="form-field">
  <label class="form-label">장비 코드</label>
  <input class="form-input form-input--error" type="text" value="ABC" />
  <span class="form-error">유효하지 않은 장비 코드입니다.</span>
</div>
```

### Tailwind 버전

```jsx
{/* 기본 */}
<div className="flex flex-col gap-1">
  <label className="text-sm font-medium text-gray-900 dark:text-gray-50">장비명</label>
  <input
    type="text"
    placeholder="장비명을 입력하세요"
    className="px-3 py-2 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50
      border border-gray-200 dark:border-gray-700 rounded-md
      hover:border-gray-300 dark:hover:border-gray-600
      focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/15
      placeholder:text-gray-400"
  />
</div>

{/* 에러 상태 */}
<div className="flex flex-col gap-1">
  <label className="text-sm font-medium text-gray-900 dark:text-gray-50">장비 코드</label>
  <input
    type="text"
    value="ABC"
    className="px-3 py-2 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50
      border border-error rounded-md focus:outline-none focus:ring-2 focus:ring-error/15"
  />
  <span className="text-xs text-error">유효하지 않은 장비 코드입니다.</span>
</div>
```

---

## 3. Card

헤더 + 본문 + 선택적 푸터. 내부 도구에서 정보 그룹핑의 기본 단위.

### CSS 변수 버전

```html
<style>
  .card {
    background: var(--surface-raised);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
  }
  .card-header {
    padding: var(--space-3) var(--space-4);
    border-bottom: 1px solid var(--border);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    color: var(--text);
  }
  .card-body { padding: var(--space-4); }
  .card-footer {
    padding: var(--space-3) var(--space-4);
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: flex-end;
    gap: var(--space-2);
  }
</style>

<div class="card">
  <div class="card-header">장비 상세 정보</div>
  <div class="card-body">
    <p>장비명: CNC 밀링 #03</p>
    <p>상태: 가동 중</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-secondary btn-sm">닫기</button>
    <button class="btn btn-primary btn-sm">수정</button>
  </div>
</div>
```

### Tailwind 버전

```jsx
<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700
    text-sm font-semibold text-gray-900 dark:text-gray-50">
    장비 상세 정보
  </div>
  <div className="p-4">
    <p>장비명: CNC 밀링 #03</p>
    <p>상태: 가동 중</p>
  </div>
  <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-2">
    <button className="px-3 py-1 text-xs border border-gray-200 dark:border-gray-700 rounded-md">닫기</button>
    <button className="px-3 py-1 text-xs bg-primary-600 text-white rounded-md">수정</button>
  </div>
</div>
```

---

## 4. Table

정렬 가능 헤더, hover row, compact density 기본. 내부 운영 도구의 핵심 컴포넌트.

### CSS 변수 버전

```html
<style>
  .table-wrap { overflow-x: auto; }
  .table {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--text-sm);
  }
  .table thead {
    background: var(--bg-secondary);
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .table th {
    padding: var(--space-2) var(--space-3);
    text-align: left;
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
  }
  .table th:hover { color: var(--text); }
  .table td {
    padding: var(--space-2) var(--space-3);
    color: var(--text);
    border-bottom: 1px solid var(--border);
    white-space: nowrap;
  }
  .table tbody tr { height: 40px; }
  .table tbody tr:hover { background: var(--bg-tertiary); }
  .table .sort-icon { margin-left: var(--space-1); opacity: 0.5; }
  .table th[aria-sort] .sort-icon { opacity: 1; }
</style>

<div class="table-wrap">
  <table class="table">
    <thead>
      <tr>
        <th>장비 코드 <span class="sort-icon">↕</span></th>
        <th>장비명 <span class="sort-icon">↕</span></th>
        <th>상태</th>
        <th>최종 점검</th>
        <th>가동률</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>EQ-001</td>
        <td>CNC 밀링 #01</td>
        <td><span class="badge badge-success">가동</span></td>
        <td>2025-01-15 14:30</td>
        <td>98.5%</td>
      </tr>
      <tr>
        <td>EQ-002</td>
        <td>로봇암 #03</td>
        <td><span class="badge badge-warning">점검</span></td>
        <td>2025-01-14 09:00</td>
        <td>75.2%</td>
      </tr>
      <tr>
        <td>EQ-003</td>
        <td>컨베이어 #02</td>
        <td><span class="badge badge-error">정지</span></td>
        <td>2025-01-13 16:45</td>
        <td>0.0%</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Tailwind 버전

```jsx
<div className="overflow-x-auto">
  <table className="w-full text-sm">
    <thead className="bg-gray-50 dark:bg-gray-900 sticky top-0 z-10">
      <tr>
        <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-400
          uppercase tracking-wider border-b border-gray-200 dark:border-gray-700 cursor-pointer
          hover:text-gray-900 dark:hover:text-gray-50 select-none whitespace-nowrap">
          장비 코드 <span className="ml-1 opacity-50">↕</span>
        </th>
        <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-400
          uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
          장비명
        </th>
        <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-400
          uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
          상태
        </th>
        <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-400
          uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
          최종 점검
        </th>
        <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-400
          uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
          가동률
        </th>
      </tr>
    </thead>
    <tbody>
      {data.map((row) => (
        <tr key={row.id} className="h-10 hover:bg-gray-100 dark:hover:bg-gray-800
          border-b border-gray-200 dark:border-gray-700">
          <td className="px-3 py-2 whitespace-nowrap text-gray-900 dark:text-gray-50">{row.code}</td>
          <td className="px-3 py-2 whitespace-nowrap">{row.name}</td>
          <td className="px-3 py-2 whitespace-nowrap">
            <StatusBadge status={row.status} />
          </td>
          <td className="px-3 py-2 whitespace-nowrap text-gray-600 dark:text-gray-400">{row.lastCheck}</td>
          <td className="px-3 py-2 whitespace-nowrap font-mono">{row.rate}%</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

### Python (Streamlit)

```python
import streamlit as st
import pandas as pd

st.markdown("""
<style>
  .stDataFrame table { font-size: 14px; }
  .stDataFrame th {
    background: var(--bg-secondary, #f8f9fb);
    font-size: 12px;
    text-transform: uppercase;
  }
  .stDataFrame td { padding: 8px 12px; }
</style>
""", unsafe_allow_html=True)

df = pd.DataFrame({
    "장비 코드": ["EQ-001", "EQ-002", "EQ-003"],
    "장비명": ["CNC 밀링 #01", "로봇암 #03", "컨베이어 #02"],
    "상태": ["가동", "점검", "정지"],
    "가동률": ["98.5%", "75.2%", "0.0%"],
})

st.dataframe(df, use_container_width=True, hide_index=True)
```

---

## 5. Badge / Tag

시맨틱 색상 변형. 상태, 카테고리, 레벨 표시에 사용.

### CSS 변수 버전

```html
<style>
  .badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    padding: var(--space-0-5) var(--space-2);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-medium);
    border-radius: var(--radius-full);
    white-space: nowrap;
  }
  .badge-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .badge-default  { background: var(--bg-tertiary); color: var(--text-secondary); }
  .badge-default .badge-dot { background: var(--color-gray-400); }
  .badge-success  { background: var(--color-success-bg); color: var(--color-success); }
  .badge-success .badge-dot { background: var(--color-success); }
  .badge-warning  { background: var(--color-warning-bg); color: var(--color-warning); }
  .badge-warning .badge-dot { background: var(--color-warning); }
  .badge-error    { background: var(--color-error-bg); color: var(--color-error); }
  .badge-error .badge-dot { background: var(--color-error); }
  .badge-info     { background: var(--color-info-bg); color: var(--color-info); }
  .badge-info .badge-dot { background: var(--color-info); }
</style>

<span class="badge badge-success"><span class="badge-dot"></span>가동</span>
<span class="badge badge-warning"><span class="badge-dot"></span>점검</span>
<span class="badge badge-error"><span class="badge-dot"></span>정지</span>
<span class="badge badge-info"><span class="badge-dot"></span>진행중</span>
<span class="badge badge-default"><span class="badge-dot"></span>대기</span>
```

### Tailwind 버전

```jsx
function Badge({ variant = "default", children }) {
  const styles = {
    default:  "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
    success:  "bg-success-bg text-success",
    warning:  "bg-warning-bg text-warning",
    error:    "bg-error-bg text-error",
    info:     "bg-info-bg text-info",
  };
  const dotStyles = {
    default: "bg-gray-400", success: "bg-success", warning: "bg-warning",
    error: "bg-error", info: "bg-info",
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium
      rounded-full whitespace-nowrap ${styles[variant]}`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotStyles[variant]}`} />
      {children}
    </span>
  );
}

{/* 사용 */}
<Badge variant="success">가동</Badge>
<Badge variant="warning">점검</Badge>
<Badge variant="error">정지</Badge>
```

### Python (Streamlit)

> **참고**: Streamlit은 CSS 변수를 직접 참조할 수 없으므로, `design-tokens.css`의 토큰 값을
> 상수 딕셔너리(`HL_TOKENS`)로 옮겨 사용한다. 토큰 값이 변경되면 이 상수도 함께 수정할 것.

```python
import streamlit as st

# design-tokens.css에서 추출한 토큰 상수
HL_TOKENS = {
    "success": "#16a34a", "success_bg": "#f0fdf4",
    "warning": "#ca8a04", "warning_bg": "#fefce8",
    "error":   "#dc2626", "error_bg":   "#fef2f2",
    "info":    "#0091c7", "info_bg":    "#e8f7fd",
    "gray600": "#5c6370", "gray100":    "#f1f3f5",
}

def badge(text, variant="default"):
    colors = {
        "success": (HL_TOKENS["success"], HL_TOKENS["success_bg"]),
        "warning": (HL_TOKENS["warning"], HL_TOKENS["warning_bg"]),
        "error":   (HL_TOKENS["error"],   HL_TOKENS["error_bg"]),
        "info":    (HL_TOKENS["info"],     HL_TOKENS["info_bg"]),
        "default": (HL_TOKENS["gray600"], HL_TOKENS["gray100"]),
    }
    fg, bg = colors.get(variant, colors["default"])
    st.markdown(
        f'<span style="background:{bg};color:{fg};padding:2px 8px;'
        f'border-radius:9999px;font-size:12px;font-weight:500;">'
        f'● {text}</span>',
        unsafe_allow_html=True,
    )
```

---

## 6. KPI Card

내부 운영 도구의 핵심. 라벨 + 값 + 변화량 + 상태 색상.

### CSS 변수 버전

```html
<style>
  .kpi-row { display: flex; gap: var(--space-3); }
  .kpi-card {
    flex: 1;
    background: var(--surface-raised);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--space-3) var(--space-4);
    box-shadow: var(--shadow-xs);
  }
  .kpi-card--status {
    border-left: 3px solid var(--border);
  }
  .kpi-card--success { border-left-color: var(--color-success); }
  .kpi-card--warning { border-left-color: var(--color-warning); }
  .kpi-card--error   { border-left-color: var(--color-error); }
  .kpi-label {
    font-size: var(--text-xs);
    color: var(--text-secondary);
    margin-bottom: var(--space-1);
  }
  .kpi-value {
    font-size: var(--text-2xl);
    font-weight: var(--font-weight-bold);
    color: var(--text);
    font-variant-numeric: tabular-nums;
  }
  .kpi-unit {
    font-size: var(--text-sm);
    font-weight: var(--font-weight-normal);
    color: var(--text-secondary);
    margin-left: var(--space-1);
  }
  .kpi-trend {
    margin-top: var(--space-1);
    font-size: var(--text-xs);
    display: flex;
    align-items: center;
    gap: var(--space-1);
  }
  .kpi-trend--up   { color: var(--color-success); }
  .kpi-trend--down { color: var(--color-error); }
</style>

<div class="kpi-row">
  <div class="kpi-card kpi-card--status kpi-card--success">
    <div class="kpi-label">총 생산량</div>
    <div class="kpi-value">12,345<span class="kpi-unit">건</span></div>
    <div class="kpi-trend kpi-trend--up">↑ 12.3% 전일 대비</div>
  </div>
  <div class="kpi-card kpi-card--status kpi-card--success">
    <div class="kpi-label">장비 가동률</div>
    <div class="kpi-value">94.2<span class="kpi-unit">%</span></div>
    <div class="kpi-trend kpi-trend--up">↑ 2.1% 전일 대비</div>
  </div>
  <div class="kpi-card kpi-card--status kpi-card--warning">
    <div class="kpi-label">경고 건수</div>
    <div class="kpi-value">7<span class="kpi-unit">건</span></div>
    <div class="kpi-trend kpi-trend--down">↑ 3건 전일 대비</div>
  </div>
  <div class="kpi-card kpi-card--status kpi-card--error">
    <div class="kpi-label">장애 건수</div>
    <div class="kpi-value">2<span class="kpi-unit">건</span></div>
    <div class="kpi-trend kpi-trend--down">↑ 1건 전일 대비</div>
  </div>
</div>
```

### Tailwind 버전

```jsx
function KpiCard({ label, value, unit, trend, trendDirection, status = "default" }) {
  const borderColor = {
    success: "border-l-success", warning: "border-l-warning",
    error: "border-l-error", default: "border-l-gray-200 dark:border-l-gray-700",
  }[status];

  const trendColor = trendDirection === "up" ? "text-success" : "text-error";

  return (
    <div className={`flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
      rounded-lg px-4 py-3 shadow-xs border-l-[3px] ${borderColor}`}>
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">{label}</div>
      <div className="text-2xl font-bold text-gray-900 dark:text-gray-50 tabular-nums">
        {value}
        <span className="text-sm font-normal text-gray-600 dark:text-gray-400 ml-1">{unit}</span>
      </div>
      {trend && (
        <div className={`text-xs mt-1 flex items-center gap-1 ${trendColor}`}>
          {trendDirection === "up" ? "↑" : "↓"} {trend}
        </div>
      )}
    </div>
  );
}

{/* 사용 */}
<div className="flex gap-3">
  <KpiCard label="총 생산량" value="12,345" unit="건" trend="12.3% 전일 대비" trendDirection="up" status="success" />
  <KpiCard label="장비 가동률" value="94.2" unit="%" trend="2.1% 전일 대비" trendDirection="up" status="success" />
  <KpiCard label="경고 건수" value="7" unit="건" trend="3건 전일 대비" trendDirection="up" status="warning" />
  <KpiCard label="장애 건수" value="2" unit="건" trend="1건 전일 대비" trendDirection="up" status="error" />
</div>
```

### Python (Streamlit)

> **참고**: `HL_TOKENS` 딕셔너리는 Badge 섹션에서 정의한 것과 동일.
> 프로젝트에서 하나의 `hl_tokens.py` 모듈로 관리하는 것을 권장한다.

```python
import streamlit as st

# HL_TOKENS는 프로젝트 공통 모듈에서 import (Badge 섹션 참조)
HL_TOKENS.update({
    "gray200": "#e2e5e9", "gray900": "#1c2028",
})

def kpi_card(label, value, unit, trend=None, trend_dir="up", status="default"):
    border_color = {
        "success": HL_TOKENS["success"],
        "warning": HL_TOKENS["warning"],
        "error":   HL_TOKENS["error"],
    }.get(status, HL_TOKENS["gray200"])
    trend_color = HL_TOKENS["success"] if trend_dir == "up" else HL_TOKENS["error"]
    arrow = "↑" if trend_dir == "up" else "↓"
    trend_html = f'<div style="font-size:12px;color:{trend_color};margin-top:4px;">{arrow} {trend}</div>' if trend else ""

    st.markdown(f"""
    <div style="background:white;border:1px solid {HL_TOKENS['gray200']};border-left:3px solid {border_color};
      border-radius:8px;padding:12px 16px;">
      <div style="font-size:12px;color:{HL_TOKENS['gray600']};margin-bottom:4px;">{label}</div>
      <div style="font-size:24px;font-weight:700;color:{HL_TOKENS['gray900']};">
        {value}<span style="font-size:14px;font-weight:400;color:{HL_TOKENS['gray600']};margin-left:4px;">{unit}</span>
      </div>
      {trend_html}
    </div>""", unsafe_allow_html=True)

# 사용
cols = st.columns(4)
with cols[0]: kpi_card("총 생산량", "12,345", "건", "12.3% 전일 대비", "up", "success")
with cols[1]: kpi_card("장비 가동률", "94.2", "%", "2.1% 전일 대비", "up", "success")
with cols[2]: kpi_card("경고 건수", "7", "건", "3건 전일 대비", "up", "warning")
with cols[3]: kpi_card("장애 건수", "2", "건", "1건 전일 대비", "up", "error")
```

---

## 7. Filter Bar

검색 + 드롭다운 + 날짜 범위. 화면 최상단에 위치.

### CSS 변수 버전

```html
<style>
  .filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-4);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
  }
  .filter-bar .form-input { min-width: 160px; }
  .filter-bar select {
    padding: var(--space-2) var(--space-3);
    font-size: var(--text-sm);
    font-family: var(--font-sans);
    color: var(--text);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    cursor: pointer;
  }
  .filter-bar select:hover { border-color: var(--border-hover); }
</style>

<div class="filter-bar">
  <input class="form-input" type="text" placeholder="검색어 입력..." />
  <select>
    <option value="">상태 전체</option>
    <option value="active">가동</option>
    <option value="warning">점검</option>
    <option value="error">정지</option>
  </select>
  <input class="form-input" type="date" />
  <span style="color: var(--text-tertiary);">~</span>
  <input class="form-input" type="date" />
  <button class="btn btn-primary btn-sm">적용</button>
  <button class="btn btn-ghost btn-sm">초기화</button>
</div>
```

### Tailwind 버전

```jsx
<div className="flex flex-wrap items-center gap-2 p-3 bg-white dark:bg-gray-900
  border border-gray-200 dark:border-gray-700 rounded-lg">
  <input
    type="text"
    placeholder="검색어 입력..."
    className="min-w-[160px] px-3 py-2 text-sm bg-white dark:bg-gray-900
      border border-gray-200 dark:border-gray-700 rounded-md
      placeholder:text-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
  />
  <select className="px-3 py-2 text-sm bg-white dark:bg-gray-900
    border border-gray-200 dark:border-gray-700 rounded-md cursor-pointer">
    <option value="">상태 전체</option>
    <option value="active">가동</option>
    <option value="warning">점검</option>
    <option value="error">정지</option>
  </select>
  <input type="date" className="px-3 py-2 text-sm bg-white dark:bg-gray-900
    border border-gray-200 dark:border-gray-700 rounded-md" />
  <span className="text-gray-400">~</span>
  <input type="date" className="px-3 py-2 text-sm bg-white dark:bg-gray-900
    border border-gray-200 dark:border-gray-700 rounded-md" />
  <button className="px-3 py-1 text-xs font-medium bg-primary-600 text-white rounded-md">적용</button>
  <button className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400
    rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">초기화</button>
</div>
```

---

## 8. Modal / Dialog

헤더 + 본문 + 푸터 액션. 중요 확인이나 폼 입력에 사용.

### 접근성 체크리스트

- `role="dialog"` + `aria-modal="true"` 필수
- `aria-labelledby`로 제목 요소를 연결
- 열릴 때 첫 번째 포커스 가능 요소로 포커스 이동
- **ESC 키**로 닫기 처리
- **포커스 트랩**: Tab 키가 모달 내부에서만 순환
- 닫힌 후 트리거 버튼으로 포커스 복귀

### CSS 변수 버전

```html
<style>
  .modal-backdrop {
    position: fixed; inset: 0; z-index: 50;
    background: rgba(0, 0, 0, 0.5);
    display: flex; align-items: center; justify-content: center;
    backdrop-filter: blur(2px);
  }
  .modal {
    background: var(--surface);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-xl);
    width: 100%;
    max-width: 480px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
  }
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-4);
    border-bottom: 1px solid var(--border);
    font-size: var(--text-base);
    font-weight: var(--font-weight-semibold);
  }
  .modal-close {
    background: none; border: none; cursor: pointer;
    color: var(--text-tertiary); font-size: var(--text-lg);
    padding: var(--space-1);
  }
  .modal-close:hover { color: var(--text); }
  .modal-body {
    padding: var(--space-4);
    overflow-y: auto;
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }
  .modal-footer {
    padding: var(--space-3) var(--space-4);
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: flex-end;
    gap: var(--space-2);
  }
</style>

<!-- backdrop 클릭 시 닫기 -->
<div class="modal-backdrop" id="modalBackdrop" onclick="closeModal()">
  <!-- role="dialog" + aria-modal로 스크린리더에 모달임을 알림 -->
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"
       onclick="event.stopPropagation()">
    <div class="modal-header">
      <span id="modal-title">장비 삭제 확인</span>
      <button class="modal-close" aria-label="닫기" onclick="closeModal()">&times;</button>
    </div>
    <div class="modal-body">
      <p>EQ-003 (컨베이어 #02)를 삭제하시겠습니까?</p>
      <p>이 작업은 되돌릴 수 없습니다.</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary btn-sm" onclick="closeModal()">취소</button>
      <button class="btn btn-danger btn-sm">삭제</button>
    </div>
  </div>
</div>

<script>
  let _modalTrigger = null; // 포커스 복귀용

  function openModal(triggerEl) {
    _modalTrigger = triggerEl || document.activeElement;
    const backdrop = document.getElementById('modalBackdrop');
    backdrop.style.display = 'flex';
    // 열릴 때 첫 번째 포커스 가능 요소로 이동
    const first = backdrop.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (first) first.focus();
  }

  function closeModal() {
    document.getElementById('modalBackdrop').style.display = 'none';
    // 닫힌 후 트리거로 포커스 복귀
    if (_modalTrigger) _modalTrigger.focus();
  }

  document.addEventListener('keydown', (e) => {
    const backdrop = document.getElementById('modalBackdrop');
    if (backdrop.style.display === 'none') return;

    // ESC 닫기
    if (e.key === 'Escape') { closeModal(); return; }

    // 포커스 트랩: Tab 키가 모달 내부에서만 순환
    if (e.key === 'Tab') {
      const modal = backdrop.querySelector('.modal');
      const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
</script>
```

### Tailwind 버전

```jsx
import { useEffect, useRef } from 'react';

function Modal({ isOpen, onClose, title, children, footer }) {
  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  // 열릴 때 트리거 저장 + 첫 포커스 이동
  useEffect(() => {
    if (!isOpen) return;
    triggerRef.current = document.activeElement;
    const first = modalRef.current?.querySelector('button, [href], input, select, textarea');
    if (first) first.focus();
  }, [isOpen]);

  // ESC 닫기 + 포커스 트랩
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // 닫힌 후 포커스 복귀
  useEffect(() => {
    if (!isOpen && triggerRef.current) triggerRef.current.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center backdrop-blur-sm"
         onClick={onClose}>
      <div ref={modalRef}
           className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-md max-h-[80vh] flex flex-col"
           role="dialog" aria-modal="true" aria-labelledby="modal-title"
           onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 id="modal-title" className="text-base font-semibold text-gray-900 dark:text-gray-50">{title}</h3>
          <button onClick={onClose} aria-label="닫기"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 text-lg p-1">&times;</button>
        </div>
        {/* Body */}
        <div className="px-4 py-4 overflow-y-auto text-sm text-gray-600 dark:text-gray-400">
          {children}
        </div>
        {/* Footer */}
        <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-2">
          {footer}
        </div>
      </div>
    </div>
  );
}

{/* 사용 */}
<Modal isOpen={isOpen} onClose={() => setOpen(false)} title="장비 삭제 확인"
  footer={<>
    <button className="px-3 py-1 text-xs border border-gray-200 dark:border-gray-700 rounded-md"
            onClick={() => setOpen(false)}>취소</button>
    <button className="px-3 py-1 text-xs bg-error text-white rounded-md">삭제</button>
  </>}>
  <p>EQ-003 (컨베이어 #02)를 삭제하시겠습니까?</p>
  <p className="mt-2">이 작업은 되돌릴 수 없습니다.</p>
</Modal>
```

---

## 9. Toast / Alert

정보, 성공, 경고, 에러 알림. 화면 우측 상단에 표시.

### CSS 변수 버전

```html
<style>
  .toast {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-4);
    border-radius: var(--radius-lg);
    border-left: 4px solid;
    font-size: var(--text-sm);
    box-shadow: var(--shadow-md);
    background: var(--surface);
  }
  .toast-info    { border-color: var(--color-info);    }
  .toast-success { border-color: var(--color-success); }
  .toast-warning { border-color: var(--color-warning); }
  .toast-error   { border-color: var(--color-error);   }
  .toast-icon { font-size: var(--text-lg); flex-shrink: 0; line-height: 1; }
  .toast-info    .toast-icon { color: var(--color-info); }
  .toast-success .toast-icon { color: var(--color-success); }
  .toast-warning .toast-icon { color: var(--color-warning); }
  .toast-error   .toast-icon { color: var(--color-error); }
  .toast-content { flex: 1; }
  .toast-title {
    font-weight: var(--font-weight-semibold);
    color: var(--text);
    margin-bottom: var(--space-0-5);
  }
  .toast-message { color: var(--text-secondary); }
  .toast-close {
    background: none; border: none; cursor: pointer;
    color: var(--text-tertiary); padding: var(--space-1);
  }
</style>

<div class="toast toast-success">
  <span class="toast-icon">✓</span>
  <div class="toast-content">
    <div class="toast-title">저장 완료</div>
    <div class="toast-message">장비 정보가 성공적으로 업데이트되었습니다.</div>
  </div>
  <button class="toast-close">&times;</button>
</div>

<div class="toast toast-error">
  <span class="toast-icon">✕</span>
  <div class="toast-content">
    <div class="toast-title">연결 실패</div>
    <div class="toast-message">장비 EQ-003과의 통신이 끊어졌습니다.</div>
  </div>
  <button class="toast-close">&times;</button>
</div>
```

### Tailwind 버전

```jsx
function Toast({ variant = "info", title, message, onClose }) {
  const borderColor = {
    info: "border-l-info", success: "border-l-success",
    warning: "border-l-warning", error: "border-l-error",
  }[variant];
  const iconColor = {
    info: "text-info", success: "text-success",
    warning: "text-warning", error: "text-error",
  }[variant];
  const icons = { info: "ℹ", success: "✓", warning: "⚠", error: "✕" };

  return (
    <div className={`flex items-start gap-3 px-4 py-3 rounded-lg border-l-4
      shadow-md bg-white dark:bg-gray-900 ${borderColor}`}>
      <span className={`text-lg shrink-0 leading-none ${iconColor}`}>{icons[variant]}</span>
      <div className="flex-1">
        <div className="font-semibold text-sm text-gray-900 dark:text-gray-50 mb-0.5">{title}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">{message}</div>
      </div>
      <button onClick={onClose} className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 p-1">
        &times;
      </button>
    </div>
  );
}
```

---

## 10. Navigation / Sidebar

280px 너비. 활성/비활성 상태 구분.

### CSS 변수 버전

```html
<style>
  .sidebar {
    width: var(--sidebar-width);
    height: 100vh;
    background: var(--surface);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  .sidebar-brand {
    padding: var(--space-4);
    font-size: var(--text-lg);
    font-weight: var(--font-weight-bold);
    color: var(--color-primary-600);
    border-bottom: 1px solid var(--border);
  }
  .sidebar-nav { padding: var(--space-2); flex: 1; }
  .sidebar-section {
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: var(--space-3) var(--space-3) var(--space-1);
  }
  .sidebar-item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-3);
    font-size: var(--text-sm);
    color: var(--text-secondary);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all var(--duration-fast) var(--easing);
    text-decoration: none;
  }
  .sidebar-item:hover {
    background: var(--bg-secondary);
    color: var(--text);
    text-decoration: none;
  }
  .sidebar-item--active {
    background: var(--color-primary-50);
    color: var(--color-primary-600);
    font-weight: var(--font-weight-medium);
  }
</style>

<nav class="sidebar">
  <div class="sidebar-brand">HL 운영 시스템</div>
  <div class="sidebar-nav">
    <div class="sidebar-section">모니터링</div>
    <a class="sidebar-item sidebar-item--active" href="#">📊 대시보드</a>
    <a class="sidebar-item" href="#">🏭 장비 현황</a>
    <a class="sidebar-item" href="#">📹 CCTV</a>
    <div class="sidebar-section">분석</div>
    <a class="sidebar-item" href="#">📈 이벤트 분석</a>
    <a class="sidebar-item" href="#">📋 보고서</a>
    <div class="sidebar-section">설정</div>
    <a class="sidebar-item" href="#">⚙️ 시스템 설정</a>
  </div>
</nav>
```

### Tailwind 버전

```jsx
function Sidebar({ items, activeId }) {
  return (
    <nav className="w-sidebar h-screen bg-white dark:bg-gray-900
      border-r border-gray-200 dark:border-gray-700 flex flex-col overflow-y-auto">
      <div className="px-4 py-4 text-lg font-bold text-primary-600
        border-b border-gray-200 dark:border-gray-700">
        HL 운영 시스템
      </div>
      <div className="p-2 flex-1">
        {items.map((section) => (
          <div key={section.title}>
            <div className="px-3 pt-3 pb-1 text-xs font-semibold text-gray-400
              uppercase tracking-wider">
              {section.title}
            </div>
            {section.links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md
                  transition-all duration-fast no-underline
                  ${link.id === activeId
                    ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 font-medium"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50"
                  }`}
              >
                <span>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}
```

---

## 11. Page Layout

전체 페이지 구조 템플릿. Sidebar + Header + Main Content.

### CSS 변수 버전

```html
<style>
  .page-layout {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
  .page-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .page-header {
    height: var(--header-height);
    padding: 0 var(--space-4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border);
    background: var(--surface);
    flex-shrink: 0;
  }
  .page-title {
    font-size: var(--text-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--text);
  }
  .page-content {
    flex: 1;
    overflow-y: auto;
    padding: var(--space-4);
    background: var(--bg-secondary);
  }
</style>

<div class="page-layout">
  <!-- Sidebar (컴포넌트 10 참조) -->
  <nav class="sidebar">...</nav>

  <div class="page-main">
    <!-- Header -->
    <header class="page-header">
      <h1 class="page-title">장비 모니터링</h1>
      <div><!-- 사용자 메뉴 등 --></div>
    </header>

    <!-- Content: Filter → Summary → Main → Detail 순서 -->
    <main class="page-content">
      <!-- [1] Filter Bar -->
      <!-- [2] KPI Cards -->
      <!-- [3] Main View -->
      <!-- [4] Table -->
    </main>
  </div>
</div>
```

### Tailwind 버전

```jsx
function PageLayout({ title, sidebar, children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      {sidebar}

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-header px-4 flex items-center justify-between
          border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shrink-0">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{title}</h1>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-950">
          {children}
        </main>
      </div>
    </div>
  );
}

{/* 사용 */}
<PageLayout title="장비 모니터링" sidebar={<Sidebar />}>
  {/* [1] Filter Bar */}
  <FilterBar />
  {/* [2] Summary / KPI */}
  <div className="flex gap-3 mt-4">
    <KpiCard ... />
  </div>
  {/* [3] Main View */}
  <div className="mt-4">...</div>
  {/* [4] Detail Table */}
  <div className="mt-4">
    <DataTable ... />
  </div>
</PageLayout>
```

---

## 12. Empty State

데이터가 없을 때 표시. 빈 화면 방지.

### CSS 변수 버전

```html
<style>
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--space-12) var(--space-4);
    text-align: center;
  }
  .empty-state-icon {
    font-size: var(--text-4xl);
    margin-bottom: var(--space-4);
    opacity: 0.4;
  }
  .empty-state-title {
    font-size: var(--text-base);
    font-weight: var(--font-weight-semibold);
    color: var(--text);
    margin-bottom: var(--space-1);
  }
  .empty-state-desc {
    font-size: var(--text-sm);
    color: var(--text-tertiary);
    margin-bottom: var(--space-4);
    max-width: 320px;
  }
</style>

<div class="empty-state">
  <div class="empty-state-icon">📭</div>
  <div class="empty-state-title">데이터가 없습니다</div>
  <div class="empty-state-desc">
    선택한 필터 조건에 해당하는 데이터가 없습니다.
    필터를 변경하거나 초기화해 주세요.
  </div>
  <button class="btn btn-secondary btn-sm">필터 초기화</button>
</div>
```

### Tailwind 버전

```jsx
function EmptyState({ icon = "📭", title, description, action, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="text-4xl mb-4 opacity-40">{icon}</div>
      <div className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-1">{title}</div>
      <div className="text-sm text-gray-400 mb-4 max-w-xs">{description}</div>
      {action && (
        <button
          onClick={onAction}
          className="px-3 py-1 text-xs border border-gray-200 dark:border-gray-700 rounded-md
            hover:bg-gray-50 dark:hover:bg-gray-800">
          {action}
        </button>
      )}
    </div>
  );
}

<EmptyState
  title="데이터가 없습니다"
  description="선택한 필터 조건에 해당하는 데이터가 없습니다."
  action="필터 초기화"
  onAction={() => resetFilters()}
/>
```

---

## 13. Detail Drawer / Panel

오른쪽에서 슬라이드하는 상세 정보 패널. 테이블 행 클릭이나 시각화 요소 선택 시 사용.

### 접근성 체크리스트

- `role="dialog"` + `aria-modal="true"` 필수 (Modal과 동일)
- `aria-labelledby`로 제목 요소를 연결
- **ESC 키**로 닫기 처리
- **포커스 트랩**: Tab 키가 Drawer 내부에서만 순환
- 닫힌 후 트리거 요소(테이블 행 등)로 포커스 복귀
- 닫기 버튼에 `aria-label="닫기"` 제공

### CSS 변수 버전

```html
<style>
  .drawer-backdrop {
    position: fixed; inset: 0; z-index: 40;
    background: rgba(0, 0, 0, 0.3);
  }
  .drawer {
    position: fixed;
    top: 0; right: 0; bottom: 0;
    z-index: 41;
    width: 400px;
    max-width: 90vw;
    background: var(--surface);
    border-left: 1px solid var(--border);
    box-shadow: var(--shadow-xl);
    display: flex;
    flex-direction: column;
    transform: translateX(0);
    transition: transform var(--duration-slow) var(--easing);
  }
  .drawer--closed { transform: translateX(100%); }
  .drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-4);
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
  }
  .drawer-title {
    font-size: var(--text-base);
    font-weight: var(--font-weight-semibold);
    color: var(--text);
  }
  .drawer-body {
    flex: 1;
    overflow-y: auto;
    padding: var(--space-4);
  }
  .drawer-section {
    margin-bottom: var(--space-4);
  }
  .drawer-section-title {
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--space-2);
  }
  .drawer-row {
    display: flex;
    justify-content: space-between;
    padding: var(--space-1-5) 0;
    font-size: var(--text-sm);
    border-bottom: 1px solid var(--border);
  }
  .drawer-row-label { color: var(--text-secondary); }
  .drawer-row-value { color: var(--text); font-weight: var(--font-weight-medium); }
</style>

<div class="drawer-backdrop" id="drawerBackdrop" onclick="closeDrawer()"></div>
<div class="drawer" id="drawerPanel" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
  <div class="drawer-header">
    <h2 id="drawer-title" class="drawer-title">장비 상세 — EQ-001</h2>
    <button class="modal-close" aria-label="닫기" onclick="closeDrawer()">&times;</button>
  </div>
  <div class="drawer-body">
    <div class="drawer-section">
      <div class="drawer-section-title">기본 정보</div>
      <div class="drawer-row">
        <span class="drawer-row-label">장비 코드</span>
        <span class="drawer-row-value">EQ-001</span>
      </div>
      <div class="drawer-row">
        <span class="drawer-row-label">장비명</span>
        <span class="drawer-row-value">CNC 밀링 #01</span>
      </div>
      <div class="drawer-row">
        <span class="drawer-row-label">상태</span>
        <span class="drawer-row-value"><span class="badge badge-success"><span class="badge-dot"></span>가동</span></span>
      </div>
    </div>
    <div class="drawer-section">
      <div class="drawer-section-title">운영 지표</div>
      <div class="drawer-row">
        <span class="drawer-row-label">금일 가동률</span>
        <span class="drawer-row-value">98.5%</span>
      </div>
      <div class="drawer-row">
        <span class="drawer-row-label">최종 점검</span>
        <span class="drawer-row-value">2025-01-15 14:30</span>
      </div>
    </div>
  </div>
</div>

<script>
  let _drawerTrigger = null;

  function openDrawer(triggerEl) {
    _drawerTrigger = triggerEl || document.activeElement;
    document.getElementById('drawerBackdrop').style.display = 'block';
    document.getElementById('drawerPanel').classList.remove('drawer--closed');
    const first = document.getElementById('drawerPanel').querySelector('button, [href], input, select, textarea');
    if (first) first.focus();
  }

  function closeDrawer() {
    document.getElementById('drawerBackdrop').style.display = 'none';
    document.getElementById('drawerPanel').classList.add('drawer--closed');
    if (_drawerTrigger) _drawerTrigger.focus();
  }

  document.addEventListener('keydown', (e) => {
    const panel = document.getElementById('drawerPanel');
    if (panel.classList.contains('drawer--closed')) return;

    if (e.key === 'Escape') { closeDrawer(); return; }

    if (e.key === 'Tab') {
      const focusable = panel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
</script>
```

### Tailwind 버전

```jsx
import { useEffect, useRef } from 'react';

function DetailDrawer({ isOpen, onClose, title, children }) {
  const drawerRef = useRef(null);
  const triggerRef = useRef(null);

  // 열릴 때 트리거 저장 + 첫 포커스 이동
  useEffect(() => {
    if (!isOpen) return;
    triggerRef.current = document.activeElement;
    const first = drawerRef.current?.querySelector('button, [href], input, select, textarea');
    if (first) first.focus();
  }, [isOpen]);

  // ESC 닫기 + 포커스 트랩
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'Tab') {
        const focusable = drawerRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // 닫힌 후 포커스 복귀
  useEffect(() => {
    if (!isOpen && triggerRef.current) triggerRef.current.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/30" onClick={onClose} />
      <div ref={drawerRef}
        className="fixed top-0 right-0 bottom-0 z-[41] w-[400px] max-w-[90vw]
        bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700
        shadow-xl flex flex-col"
        role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4
          border-b border-gray-200 dark:border-gray-700 shrink-0">
          <h2 id="drawer-title" className="text-base font-semibold text-gray-900 dark:text-gray-50">{title}</h2>
          <button onClick={onClose} aria-label="닫기"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 text-lg p-1">
            &times;
          </button>
        </div>
        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </>
  );
}

function DrawerSection({ title, rows }) {
  return (
    <div className="mb-4">
      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{title}</div>
      {rows.map(({ label, value }) => (
        <div key={label} className="flex justify-between py-1.5 text-sm
          border-b border-gray-200 dark:border-gray-700">
          <span className="text-gray-600 dark:text-gray-400">{label}</span>
          <span className="text-gray-900 dark:text-gray-50 font-medium">{value}</span>
        </div>
      ))}
    </div>
  );
}

{/* 사용 */}
<DetailDrawer isOpen={isOpen} onClose={() => setOpen(false)} title="장비 상세 — EQ-001">
  <DrawerSection title="기본 정보" rows={[
    { label: "장비 코드", value: "EQ-001" },
    { label: "장비명", value: "CNC 밀링 #01" },
    { label: "상태", value: <Badge variant="success">가동</Badge> },
  ]} />
  <DrawerSection title="운영 지표" rows={[
    { label: "금일 가동률", value: "98.5%" },
    { label: "최종 점검", value: "2025-01-15 14:30" },
  ]} />
</DetailDrawer>
```
