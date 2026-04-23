# HL Design System — 스타일 가이드

> 이 문서는 HL 내부 운영 도구의 시각적 통일을 위한 **스타일 규칙**이다.
> 모든 규칙은 "내부 도구에서 데이터를 빠르게 파악한다"는 목표에 맞춰져 있다.
> AI가 코드를 생성할 때 반드시 이 규칙을 따를 것.

---

## 1. 색상

### 원칙

색상은 **의미만** 전달한다. 장식용 색상은 사용하지 않는다.
내부 운영 도구에서는 색상이 곧 상태 신호이다 — 현장의 신호등과 같은 역할을 해야 한다.

### Do

- CSS 변수 또는 Tailwind 토큰만 사용하라.
  ```css
  /* 링크 / active text */ color: var(--color-primary-700);
  ```
  ```html
  <!-- Primary CTA --> <button class="bg-primary-900 text-white">
  ```
- HL primary의 역할을 분리하라.
  | 역할 | 토큰 | 의미 | 사용 예 |
  |------|------|------|---------|
  | Primary CTA | `primary-900` | HL Navy 기반의 가장 강한 행동 유도 | 등록, 저장, 승인 |
  | Active / Focus / Selection | `primary-500` ~ `primary-700` | HL Sky Blue 계열의 활성 강조 | 현재 탭, 링크, 정렬, 포커스, 선택 |
  | Success | `success` | 정상, 가동, 완료 | 장비 정상 상태, 작업 완료 |
  | Warning | `warning` | 경고, 주의, 확인 필요 | 임계치 근접, 유지보수 예정 |
  | Error | `error` | 에러, 정지, 위험 | 장비 고장, 시스템 장애 |
- Button은 HL 규칙을 따른다: `primary / secondary / tertiary / danger`.
### Don't

- 하드코딩 색상 금지: `#3a7bd5`, `rgb(58,123,213)` 등 직접 입력 금지.
- 장식용 색상 금지: 배경 그라데이션, 네온/형광색, 무지개 차트 색상 금지.
- 시맨틱 색상 오용 금지: 의미 없이 초록/빨강으로 카드 테두리를 꾸미지 않는다.
- 차트에서 다양한 색조(hue) 사용 금지: 시리즈 구분은 명도 차이로 한다 (`primary-500` → `gray-400` → `gray-600`).

> **이유**: 10개의 서로 다른 도구를 열었을 때, 색상의 의미가 동일해야 사용자가 혼란 없이 상태를 파악할 수 있다.

---

## 2. 타이포그래피

### 원칙

내부 도구는 데이터 밀도가 높다. 폰트는 가독성과 공간 효율을 최우선으로 한다.

### Do

- CSS 변수 또는 Tailwind 토큰만 사용하라.
  ```css
  /* 링크 / active text */ color: var(--color-primary-700);
  ```
  ```html
  <!-- Primary CTA --> <button class="bg-primary-900 text-white">
  ```
- HL primary의 역할을 분리하라.
  | 역할 | 토큰 | 의미 | 사용 예 |
  |------|------|------|---------|
  | Primary CTA | `primary-900` | HL Navy 기반의 가장 강한 행동 유도 | 등록, 저장, 승인 |
  | Active / Focus / Selection | `primary-500` ~ `primary-700` | HL Sky Blue 계열의 활성 강조 | 현재 탭, 링크, 정렬, 포커스, 선택 |
  | Success | `success` | 정상, 가동, 완료 | 장비 정상 상태, 작업 완료 |
  | Warning | `warning` | 경고, 주의, 확인 필요 | 임계치 근접, 유지보수 예정 |
  | Error | `error` | 에러, 정지, 위험 | 장비 고장, 시스템 장애 |
- Button은 HL 규칙을 따른다: `primary / secondary / tertiary / danger`.
### Don't

- 비표준 크기 금지: `font-size: 17px`, `text-[15px]` 등 임의 값 금지.
- 한 화면에 3종류 이상 크기 변형 사용 지양.
- 기본 폰트(14px) 미만으로 본문 텍스트 설정 금지 — 모니터링 환경에서 가독성 저하.

> **이유**: 도구마다 폰트 크기가 다르면, 사용자가 정보 계층을 학습하는 비용이 늘어난다.

---

## 3. 간격

### 원칙

토큰에 정의된 간격 스케일만 사용한다 (2px 기반: 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48px).
내부 도구는 compact density가 기본이다.

### Do

- CSS 변수 또는 Tailwind 토큰만 사용하라.
  ```css
  /* 링크 / active text */ color: var(--color-primary-700);
  ```
  ```html
  <!-- Primary CTA --> <button class="bg-primary-900 text-white">
  ```
- HL primary의 역할을 분리하라.
  | 역할 | 토큰 | 의미 | 사용 예 |
  |------|------|------|---------|
  | Primary CTA | `primary-900` | HL Navy 기반의 가장 강한 행동 유도 | 등록, 저장, 승인 |
  | Active / Focus / Selection | `primary-500` ~ `primary-700` | HL Sky Blue 계열의 활성 강조 | 현재 탭, 링크, 정렬, 포커스, 선택 |
  | Success | `success` | 정상, 가동, 완료 | 장비 정상 상태, 작업 완료 |
  | Warning | `warning` | 경고, 주의, 확인 필요 | 임계치 근접, 유지보수 예정 |
  | Error | `error` | 에러, 정지, 위험 | 장비 고장, 시스템 장애 |
- Button은 HL 규칙을 따른다: `primary / secondary / tertiary / danger`.
### Don't

- 비정규 값 금지: `padding: 7px`, `gap: 15px` 등 토큰 스케일에 없는 임의 값 금지.
- 과도한 여백 금지: `p-8`(32px) 이상을 카드 패딩으로 사용하지 않는다.
- 화면 끝에 콘텐츠가 붙는 레이아웃 금지 — 최소 `space-4` 페이지 패딩 유지.

> **이유**: compact density를 유지하면서도 일관된 리듬감을 주어, 여러 도구의 화면이 같은 밀도감을 갖도록 한다.

---

## 4. 다크 모드

### 원칙

모든 UI는 라이트/다크 모드를 모두 지원한다.
모니터링 환경(관제실 등)에서는 다크 모드가 기본인 경우가 많다.

### Do

- CSS 변수 또는 Tailwind 토큰만 사용하라.
  ```css
  /* 링크 / active text */ color: var(--color-primary-700);
  ```
  ```html
  <!-- Primary CTA --> <button class="bg-primary-900 text-white">
  ```
- HL primary의 역할을 분리하라.
  | 역할 | 토큰 | 의미 | 사용 예 |
  |------|------|------|---------|
  | Primary CTA | `primary-900` | HL Navy 기반의 가장 강한 행동 유도 | 등록, 저장, 승인 |
  | Active / Focus / Selection | `primary-500` ~ `primary-700` | HL Sky Blue 계열의 활성 강조 | 현재 탭, 링크, 정렬, 포커스, 선택 |
  | Success | `success` | 정상, 가동, 완료 | 장비 정상 상태, 작업 완료 |
  | Warning | `warning` | 경고, 주의, 확인 필요 | 임계치 근접, 유지보수 예정 |
  | Error | `error` | 에러, 정지, 위험 | 장비 고장, 시스템 장애 |
- Button은 HL 규칙을 따른다: `primary / secondary / tertiary / danger`.
### Don't

- 순백(`#ffffff`) / 순검정(`#000000`) 직접 사용 금지 — 토큰을 통해 참조.
- 다크 모드 테스트 없이 배포 금지 — `.dark` 클래스로 토글하여 확인.
- 텍스트 색상을 배경에 맞춰 하드코딩 금지 — 토큰이 자동 처리.

> **이유**: 관제실, 야간 근무 등 어두운 환경에서 사용하는 운영 도구가 다크 모드를 미지원하면 눈의 피로가 극심하다.

---

## 5. 반응형

### 원칙

모바일 퍼스트로 설계하되, 주 사용 환경은 데스크톱 모니터이다.

### Do

- CSS 변수 또는 Tailwind 토큰만 사용하라.
  ```css
  /* 링크 / active text */ color: var(--color-primary-700);
  ```
  ```html
  <!-- Primary CTA --> <button class="bg-primary-900 text-white">
  ```
- HL primary의 역할을 분리하라.
  | 역할 | 토큰 | 의미 | 사용 예 |
  |------|------|------|---------|
  | Primary CTA | `primary-900` | HL Navy 기반의 가장 강한 행동 유도 | 등록, 저장, 승인 |
  | Active / Focus / Selection | `primary-500` ~ `primary-700` | HL Sky Blue 계열의 활성 강조 | 현재 탭, 링크, 정렬, 포커스, 선택 |
  | Success | `success` | 정상, 가동, 완료 | 장비 정상 상태, 작업 완료 |
  | Warning | `warning` | 경고, 주의, 확인 필요 | 임계치 근접, 유지보수 예정 |
  | Error | `error` | 에러, 정지, 위험 | 장비 고장, 시스템 장애 |
- Button은 HL 규칙을 따른다: `primary / secondary / tertiary / danger`.
### Don't

- 고정 px 너비 금지: `width: 800px` 등. `max-width` 또는 비율 사용.
- 테이블 컬럼 숨기기 지양 — 스크롤이 낫다. 데이터 손실은 허용 불가.
- 브레이크포인트 무시 금지 — Tailwind 기준 `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`.

> **이유**: 운영 도구는 대형 모니터에서 쓰는 경우가 많지만, 현장에서 태블릿/노트북으로 확인하는 경우도 빈번하다.

---

## 6. 접근성

### 원칙

내부 도구라도 접근성 기본은 지킨다. 색각 이상 사용자와 키보드 사용자를 고려한다.

### Do

- CSS 변수 또는 Tailwind 토큰만 사용하라.
  ```css
  /* 링크 / active text */ color: var(--color-primary-700);
  ```
  ```html
  <!-- Primary CTA --> <button class="bg-primary-900 text-white">
  ```
- HL primary의 역할을 분리하라.
  | 역할 | 토큰 | 의미 | 사용 예 |
  |------|------|------|---------|
  | Primary CTA | `primary-900` | HL Navy 기반의 가장 강한 행동 유도 | 등록, 저장, 승인 |
  | Active / Focus / Selection | `primary-500` ~ `primary-700` | HL Sky Blue 계열의 활성 강조 | 현재 탭, 링크, 정렬, 포커스, 선택 |
  | Success | `success` | 정상, 가동, 완료 | 장비 정상 상태, 작업 완료 |
  | Warning | `warning` | 경고, 주의, 확인 필요 | 임계치 근접, 유지보수 예정 |
  | Error | `error` | 에러, 정지, 위험 | 장비 고장, 시스템 장애 |
- Button은 HL 규칙을 따른다: `primary / secondary / tertiary / danger`.
### Don't

- 색상만으로 구분하는 차트/상태 표시 금지.
- `outline: none`으로 포커스 스타일을 **대체 없이** 제거 금지. `outline: none` + `box-shadow` 또는 `border-color` 변경으로 대체하는 것은 허용.
- 이미지에 `alt` 속성 누락 금지.

> **이유**: 현장 근무자 중 색각 이상 비율이 생각보다 높다. 키보드 접근성은 효율적 운영의 기본이다.

---

## 7. 코드 품질

### 원칙

AI가 생성하는 코드도 유지보수 가능한 품질이어야 한다.

### Do

- CSS 변수 또는 Tailwind 토큰만 사용하라.
  ```css
  /* 링크 / active text */ color: var(--color-primary-700);
  ```
  ```html
  <!-- Primary CTA --> <button class="bg-primary-900 text-white">
  ```
- HL primary의 역할을 분리하라.
  | 역할 | 토큰 | 의미 | 사용 예 |
  |------|------|------|---------|
  | Primary CTA | `primary-900` | HL Navy 기반의 가장 강한 행동 유도 | 등록, 저장, 승인 |
  | Active / Focus / Selection | `primary-500` ~ `primary-700` | HL Sky Blue 계열의 활성 강조 | 현재 탭, 링크, 정렬, 포커스, 선택 |
  | Success | `success` | 정상, 가동, 완료 | 장비 정상 상태, 작업 완료 |
  | Warning | `warning` | 경고, 주의, 확인 필요 | 임계치 근접, 유지보수 예정 |
  | Error | `error` | 에러, 정지, 위험 | 장비 고장, 시스템 장애 |
- Button은 HL 규칙을 따른다: `primary / secondary / tertiary / danger`.
### Don't

- `!important` 사용 금지 — 토큰 시스템을 우회하면 통일성이 깨진다.
- 색상, 폰트 크기, 간격(padding/margin/gap)을 인라인 style에 하드코딩 금지 — 반드시 토큰 변수를 참조.
  - 예외: Python(Streamlit) 등 CSS 변수를 참조할 수 없는 환경에서는 `HL_TOKENS` 상수에서 가져온 토큰 값 사용 허용.
  - 그리드 breakpoint(`minmax(180px, 1fr)`), border 두께(`3px`) 등 토큰에 정의되지 않은 레이아웃 수치는 허용.
- 사용하지 않는 코드 남기기 금지.

> **이유**: 내부 도구는 만든 사람이 아닌 다른 사람이 유지보수하는 경우가 많다. 깔끔한 코드가 인수인계 비용을 줄인다.

---

## 8. 네이밍

### 원칙

일관된 네이밍으로 코드의 예측 가능성을 높인다.

### 규칙

| 대상 | 컨벤션 | 예시 |
|------|--------|------|
| React 컴포넌트 | PascalCase | `KpiCard`, `FilterBar` |
| 파일명 | kebab-case | `kpi-card.tsx`, `filter-bar.css` |
| CSS 변수 | kebab-case | `--color-primary-900` |
| JS 변수/함수 | camelCase | `fetchDeviceList`, `isActive` |
| 상수 | UPPER_SNAKE_CASE | `MAX_KPI_COUNT`, `API_BASE_URL` |

> **이유**: 네이밍이 통일되면, 10개의 다른 프로젝트를 열어도 코드 구조를 즉시 파악할 수 있다.
