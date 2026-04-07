# HL Design System — 반례 (Bad Examples)

> 이 문서는 AI가 자주 만드는 **안 좋은 패턴**과 **올바른 수정 방법**을 제공한다.
> 각 반례마다 Bad 코드와 Good 코드(CSS 변수 버전 + Tailwind 버전)를 병기한다.
> 코드 리뷰 시 이 문서의 패턴이 발견되면 즉시 수정하라.

---

## 1. 장식 과다

### ❌ Bad — Hero 섹션과 큰 여백으로 정보 밀도가 낮음

```html
<div style="padding: 60px 40px; text-align: center;">
  <h1 style="font-size: 36px; margin-bottom: 20px;">🏭 스마트 팩토리 대시보드</h1>
  <p style="font-size: 18px; color: #666; margin-bottom: 40px;">
    실시간 생산 현황을 한 눈에 확인하세요
  </p>
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 40px; border-radius: 20px; color: white;">
    <h2>오늘의 생산량</h2>
    <p style="font-size: 48px;">12,345</p>
  </div>
</div>
```

### ✅ Good — CSS 변수 버전

```html
<div style="max-width: var(--content-max-width); margin: 0 auto; padding: var(--space-4);">
  <!-- 바로 KPI로 시작 — Hero 섹션 불필요 -->
  <div style="display:flex; gap:var(--space-3); margin-bottom:var(--space-4);">
    <div class="kpi-card kpi-card--success">
      <div class="kpi-label">오늘 생산량</div>
      <div class="kpi-value">12,345 <span class="kpi-unit">건</span></div>
      <div class="kpi-trend kpi-trend--up">↑ 8.2% 전일 대비</div>
    </div>
    <!-- 추가 KPI 카드 -->
  </div>
</div>
```

### ✅ Good — Tailwind 버전

```jsx
<div className="max-w-content mx-auto p-4">
  {/* Hero 섹션 없이 바로 KPI */}
  <div className="flex gap-3 mb-4">
    <div className="flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
      rounded-lg px-4 py-3 shadow-xs border-l-[3px] border-l-success">
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">오늘 생산량</div>
      <div className="text-2xl font-bold tabular-nums">
        12,345<span className="text-sm font-normal text-gray-400 ml-1">건</span>
      </div>
      <div className="text-xs text-success mt-1">↑ 8.2% 전일 대비</div>
    </div>
  </div>
</div>
```

### 왜 나쁜가

Hero 섹션, 그라데이션 배경, 큰 여백은 화면 공간을 낭비한다. 운영 도구에서는 스크롤 없이 핵심 정보를 확인할 수 있어야 한다.

---

## 2. 색상 하드코딩

### ❌ Bad — 임의 색상 코드를 직접 사용

```html
<button style="background: #3a7bd5; color: white; padding: 10px 20px; border-radius: 8px;">
  저장
</button>
<div style="border-left: 4px solid #2ecc71; padding: 16px; background: #f0fff0;">
  성공 메시지
</div>
```

```jsx
<button className="bg-[#3a7bd5] text-white px-5 py-2.5 rounded-lg">저장</button>
<div className="border-l-4 border-[#2ecc71] p-4 bg-[#f0fff0]">성공 메시지</div>
```

### ✅ Good — CSS 변수 버전

```html
<button class="btn btn-primary btn-md">저장</button>
<div style="border-left: 4px solid var(--color-success); padding: var(--space-4);
  background: var(--color-success-bg); font-size: var(--text-sm);">
  성공 메시지
</div>
```

### ✅ Good — Tailwind 버전

```jsx
<button className="px-4 py-2 text-sm font-medium bg-primary-600 text-white rounded-md">저장</button>
<div className="border-l-4 border-success p-4 bg-success-bg text-sm">성공 메시지</div>
```

### 왜 나쁜가

하드코딩된 색상은 다크 모드에서 깨지고, 다른 도구와 색상이 달라진다. 토큰을 사용해야 전체 시스템의 색상이 통일된다.

---

## 3. 시맨틱 색상 오용

### ❌ Bad — 장식용으로 시맨틱 색상 사용

```html
<!-- 상태와 무관하게 초록/파랑/빨강으로 카드를 꾸밈 -->
<div style="display:flex; gap:16px;">
  <div style="border: 2px solid #22c55e; border-radius: 12px; padding: 20px;">
    <h3 style="color: #22c55e;">📊 매출 현황</h3>
    <p>1,234,567원</p>
  </div>
  <div style="border: 2px solid #3b82f6; border-radius: 12px; padding: 20px;">
    <h3 style="color: #3b82f6;">📈 방문자 수</h3>
    <p>5,678명</p>
  </div>
  <div style="border: 2px solid #ef4444; border-radius: 12px; padding: 20px;">
    <h3 style="color: #ef4444;">📦 주문 건수</h3>
    <p>890건</p>
  </div>
</div>
```

### ✅ Good — CSS 변수 버전

```html
<!-- 색상은 상태 의미에만 사용. 일반 KPI는 중립색 -->
<div style="display:flex; gap:var(--space-3);">
  <div class="kpi-card">
    <div class="kpi-label">매출 현황</div>
    <div class="kpi-value">1,234,567 <span class="kpi-unit">원</span></div>
  </div>
  <div class="kpi-card">
    <div class="kpi-label">방문자 수</div>
    <div class="kpi-value">5,678 <span class="kpi-unit">명</span></div>
  </div>
  <div class="kpi-card">
    <div class="kpi-label">주문 건수</div>
    <div class="kpi-value">890 <span class="kpi-unit">건</span></div>
  </div>
</div>
```

### ✅ Good — Tailwind 버전

```jsx
{/* 색상이 상태를 나타내지 않으면 중립색(border-gray) 사용 */}
<div className="flex gap-3">
  <div className="flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
    rounded-lg px-4 py-3 shadow-xs">
    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">매출 현황</div>
    <div className="text-2xl font-bold tabular-nums">1,234,567<span className="text-sm font-normal ml-1">원</span></div>
  </div>
  {/* 나머지 KPI 카드 동일 패턴 */}
</div>
```

### 왜 나쁜가

초록/빨강/노랑은 "정상/에러/경고"를 의미한다. 장식용으로 사용하면 실제 상태 표시와 혼동되어 운영자가 위험 신호를 놓칠 수 있다.

---

## 4. 테이블 없는 데이터 화면

### ❌ Bad — 카드만 나열하고 정렬/검색 불가

```jsx
<div className="grid grid-cols-3 gap-6 p-8">
  {devices.map((d) => (
    <div key={d.id} className="bg-white rounded-xl shadow-lg p-6">
      <div className="text-xl font-bold mb-4">{d.name}</div>
      <div className="text-gray-500 mb-2">상태: {d.status}</div>
      <div className="text-gray-500 mb-2">가동률: {d.rate}%</div>
      <div className="text-gray-500">최종 점검: {d.lastCheck}</div>
    </div>
  ))}
</div>
```

### ✅ Good — CSS 변수 버전

```html
<!-- 카드 그리드는 [3] Main View 영역에, 테이블은 [4] Detail 영역에 -->
<div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(180px,1fr)); gap:var(--space-3); margin-bottom:var(--space-4);">
  <!-- 장비 카드 (간결하게) -->
</div>

<!-- 반드시 테이블 동반 -->
<div class="table-card">
  <div class="table-header">장비 상세</div>
  <table class="table">
    <thead>
      <tr><th>장비명</th><th>상태</th><th>가동률</th><th>최종 점검</th></tr>
    </thead>
    <tbody>
      <!-- 정렬·검색 가능한 데이터 행 -->
    </tbody>
  </table>
</div>
```

### ✅ Good — Tailwind 버전

```jsx
{/* [3] 카드 그리드 — 시각적 오버뷰 */}
<div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3 mb-4">
  {devices.map((d) => (
    <div key={d.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
      rounded-lg p-3 shadow-xs text-center border-l-[3px] border-l-success cursor-pointer">
      <div className="text-sm font-semibold">{d.name}</div>
      <Badge variant={d.statusVariant}>{d.status}</Badge>
    </div>
  ))}
</div>

{/* [4] 테이블 — 정렬·검색 가능 (필수) */}
<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
  rounded-lg overflow-hidden">
  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-sm font-semibold">장비 상세</div>
  <table className="w-full text-sm">
    <thead className="bg-gray-50 dark:bg-gray-900">
      <tr>
        {["장비명", "상태", "가동률", "최종 점검"].map((h) => (
          <th key={h} className="px-3 py-2 text-left text-xs font-semibold text-gray-600
            dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700">{h}</th>
        ))}
      </tr>
    </thead>
    <tbody>{/* 데이터 행 */}</tbody>
  </table>
</div>
```

### 왜 나쁜가

카드만 있으면 50개 장비를 한꺼번에 비교하거나 특정 조건으로 찾을 수 없다. 테이블은 정렬·검색·필터가 가능한 유일한 정형 뷰이다.

---

## 5. 다크 모드 미지원

### ❌ Bad — 라이트 모드 색상을 하드코딩

```jsx
<div className="bg-white text-black p-6">
  <h2 className="text-gray-800 text-xl font-bold mb-4">장비 현황</h2>
  <table className="w-full">
    <thead className="bg-gray-100">
      <tr>
        <th className="text-gray-600 p-3 text-left">장비명</th>
        <th className="text-gray-600 p-3 text-left">상태</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-200">
        <td className="p-3 text-gray-800">CNC #01</td>
        <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">가동</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

### ✅ Good — CSS 변수 버전

```html
<!-- CSS 변수를 사용하면 다크 모드가 자동 적용됨 -->
<div style="background: var(--bg); color: var(--text); padding: var(--space-4);">
  <h2 style="font-size: var(--text-xl); font-weight: var(--font-weight-bold);
    margin-bottom: var(--space-4);">장비 현황</h2>
  <table class="table">
    <thead>
      <tr><th>장비명</th><th>상태</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>CNC #01</td>
        <td><span class="badge badge-success">● 가동</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

### ✅ Good — Tailwind 버전

```jsx
<div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 p-4">
  <h2 className="text-xl font-bold mb-4">장비 현황</h2>
  <table className="w-full text-sm">
    <thead className="bg-gray-50 dark:bg-gray-900">
      <tr>
        <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600
          dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700">장비명</th>
        <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600
          dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700">상태</th>
      </tr>
    </thead>
    <tbody>
      <tr className="h-10 hover:bg-gray-100 dark:hover:bg-gray-800
        border-b border-gray-200 dark:border-gray-700">
        <td className="px-3 py-2">CNC #01</td>
        <td className="px-3 py-2"><Badge variant="success">가동</Badge></td>
      </tr>
    </tbody>
  </table>
</div>
```

### 왜 나쁜가

관제실, 야간 근무 환경에서 라이트 모드만 있으면 눈의 피로가 극심하다. CSS 변수를 사용하면 별도 코드 없이 다크 모드가 자동 작동한다.

---

## 6. 과도한 자유 시각화

### ❌ Bad — 3D 뷰만 있고 상세 정보 없음

```jsx
<div className="h-screen">
  <Canvas>
    <Factory3DModel />
    {/* 3D 모델만 전체 화면 차지. 클릭해도 상세 정보 없음 */}
  </Canvas>
</div>
```

### ✅ Good — CSS 변수 버전

```html
<!-- 자유 시각화 + Detail Panel 조합 -->
<div style="display:flex; gap:var(--space-3); height:calc(100vh - var(--header-height));">
  <!-- [3] Main View: 3D 뷰 -->
  <div style="flex:1; background:var(--color-gray-900); border-radius:var(--radius-lg);">
    <!-- 3D 뷰 (클릭 시 우측 패널에 상세 표시) -->
  </div>
  <!-- [4] Detail Panel -->
  <div style="width:360px; background:var(--surface); border:1px solid var(--border);
    border-radius:var(--radius-lg); overflow-y:auto;">
    <div style="padding:var(--space-4); border-bottom:1px solid var(--border);
      font-weight:var(--font-weight-semibold);">장비 상세 — CNC #01</div>
    <div style="padding:var(--space-4);">
      <div class="drawer-section-title">기본 정보</div>
      <!-- 상세 데이터 행 -->
    </div>
  </div>
</div>
```

### ✅ Good — Tailwind 버전

```jsx
<div className="flex gap-3" style={{ height: "calc(100vh - 56px)" }}>
  {/* [3] Main View: 3D 뷰 */}
  <div className="flex-1 bg-gray-900 rounded-lg">
    <Canvas>
      <Factory3DModel onSelect={(id) => setSelectedDevice(id)} />
    </Canvas>
  </div>
  {/* [4] Detail Panel — 선택한 장비 상세 */}
  <div className="w-[360px] bg-white dark:bg-gray-900 border border-gray-200
    dark:border-gray-700 rounded-lg overflow-y-auto">
    <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700 font-semibold">
      장비 상세 — {selectedDevice?.name}
    </div>
    <div className="p-4">
      <DrawerSection title="기본 정보" rows={selectedDevice?.details} />
    </div>
  </div>
</div>
```

### 왜 나쁜가

3D 뷰만 있으면 구체적 수치를 확인할 수 없다. 시각화 요소를 클릭하면 상세 정보가 연결되어야 하고, 테이블 fallback도 있어야 한다.

---

## 7. Summary 없음

### ❌ Bad — 필터 바로 아래에 바로 테이블

```jsx
<div className="p-6">
  <input type="text" placeholder="검색..." className="mb-4 p-2 border rounded" />
  {/* KPI/Summary 없이 바로 테이블 */}
  <table className="w-full border-collapse">
    <thead><tr><th>장비</th><th>상태</th><th>가동률</th></tr></thead>
    <tbody>
      {data.map((d) => <tr key={d.id}><td>{d.name}</td><td>{d.status}</td><td>{d.rate}%</td></tr>)}
    </tbody>
  </table>
</div>
```

### ✅ Good — CSS 변수 버전

```html
<div style="max-width:var(--content-max-width); margin:0 auto; padding:var(--space-4);">
  <!-- [1] Filter -->
  <div class="filter-bar" style="margin-bottom:var(--space-4);">
    <input class="filter-input" type="text" placeholder="검색..." />
    <button class="btn btn-primary">적용</button>
  </div>

  <!-- [2] Summary — 핵심 지표를 먼저 파악 -->
  <div style="display:flex; gap:var(--space-3); margin-bottom:var(--space-4);">
    <div class="kpi-card kpi-card--success">
      <div class="kpi-label">총 장비</div>
      <div class="kpi-value">48 <span class="kpi-unit">대</span></div>
    </div>
    <div class="kpi-card kpi-card--success">
      <div class="kpi-label">가동 중</div>
      <div class="kpi-value">42 <span class="kpi-unit">대</span></div>
    </div>
    <div class="kpi-card kpi-card--error">
      <div class="kpi-label">정지</div>
      <div class="kpi-value">2 <span class="kpi-unit">대</span></div>
    </div>
  </div>

  <!-- [4] Table -->
  <div class="table-card">
    <table class="table"><!-- ... --></table>
  </div>
</div>
```

### ✅ Good — Tailwind 버전

```jsx
<div className="max-w-content mx-auto p-4">
  {/* [1] Filter */}
  <FilterBar className="mb-4" />

  {/* [2] Summary — 스크롤 전에 핵심 상태 파악 */}
  <div className="flex gap-3 mb-4">
    <KpiCard label="총 장비" value="48" unit="대" status="success" />
    <KpiCard label="가동 중" value="42" unit="대" status="success" />
    <KpiCard label="정지" value="2" unit="대" status="error" />
  </div>

  {/* [4] Table */}
  <DataTable data={data} columns={columns} />
</div>
```

### 왜 나쁜가

Summary가 없으면 "지금 전체 상황이 어떤가?"를 파악하려면 테이블 전체를 스캔해야 한다. KPI 3~5개로 현황을 즉시 보여주는 것이 운영 도구의 핵심이다.

---

## 8. 밀도 낭비

### ❌ Bad — 과도한 패딩과 간격으로 정보 밀도 저하

```jsx
<div className="p-8 space-y-8">
  <div className="grid grid-cols-3 gap-8">
    {kpis.map((kpi) => (
      <div key={kpi.id} className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-gray-400 text-sm mb-4">{kpi.label}</div>
        <div className="text-5xl font-bold mb-4">{kpi.value}</div>
        <div className="text-lg text-gray-500">{kpi.trend}</div>
      </div>
    ))}
  </div>

  <div className="bg-white rounded-2xl shadow-xl p-8">
    <table className="w-full">
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="h-16 border-b">
            <td className="p-4 text-lg">{row.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
```

### ✅ Good — CSS 변수 버전

```html
<div style="max-width:var(--content-max-width); margin:0 auto; padding:var(--space-4);">
  <div style="display:flex; gap:var(--space-3); margin-bottom:var(--space-4);">
    <div class="kpi-card kpi-card--success">
      <div class="kpi-label"><!-- text-xs --></div>
      <div class="kpi-value"><!-- text-2xl --></div>
      <div class="kpi-trend"><!-- text-xs --></div>
    </div>
    <!-- padding: space-3 ~ space-4, gap: space-3 -->
  </div>
  <table class="table">
    <!-- row height: 40px, font-size: text-sm, padding: space-2 space-3 -->
  </table>
</div>
```

### ✅ Good — Tailwind 버전

```jsx
<div className="max-w-content mx-auto p-4">
  {/* gap-3 (12px), padding p-3~p-4 (12~16px) */}
  <div className="flex gap-3 mb-4">
    {kpis.map((kpi) => (
      <div key={kpi.id} className="flex-1 bg-white dark:bg-gray-800 border border-gray-200
        dark:border-gray-700 rounded-lg px-4 py-3 shadow-xs border-l-[3px] border-l-success">
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">{kpi.label}</div>
        <div className="text-2xl font-bold tabular-nums">{kpi.value}</div>
        <div className="text-xs text-success mt-1">{kpi.trend}</div>
      </div>
    ))}
  </div>

  {/* row h-10 (40px), text-sm, px-3 py-2 */}
  <table className="w-full text-sm">
    <tbody>
      {data.map((row) => (
        <tr key={row.id} className="h-10 border-b border-gray-200 dark:border-gray-700
          hover:bg-gray-100 dark:hover:bg-gray-800">
          <td className="px-3 py-2">{row.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

### 왜 나쁜가

`p-8`(32px), `gap-8`(32px), `h-16`(64px row)은 한 화면에 정보 3~4개만 보이게 한다. compact density(`p-3`, `gap-3`, `h-10`)를 사용하면 같은 화면에 3배 이상의 정보를 담을 수 있다.
