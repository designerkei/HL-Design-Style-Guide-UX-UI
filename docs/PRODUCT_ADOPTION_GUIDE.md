# Product Adoption Guide

## 목적
이 저장소는 단순한 문서 사이트가 아니라, 앞으로 만드는 여러 SaaS 제품이 공통으로 참고할 수 있는 **디자인 시스템 레퍼런스 구현체**다.

토큰, 폰트, 아이콘, 컴포넌트, 레이아웃 패턴은 실제 제품 코드에 그대로 옮겨도 되는 기준이어야 한다.

> **데이터 소스**: Figma(KRDS v1.0.0 Community)에서 MCP를 통해 추출한 935개 컴포넌트 + 스타일 토큰.
> 코드 레퍼런스: `src/data/figma-components.js`, `src/data/principles.js`
> **AI 실행 순서**: 저장소 루트 `AGENTS.md`와 `CLAUDE.md`를 먼저 따른다. 배포 문서 사이트만 열 수 있으면 **`/consume`(링크로 시작 AI)** 페이지에서 복사용 프롬프트와 URL 목록을 사용한다.

### 표준 소유권 (Authority Split)

- `docs/SEMANTIC_CONTRACT.md`: HL 시맨틱 표준. 색상 시스템과 Button 의미를 고정한다.
- `docs/PRIMITIVE_CONTRACT.md`: primitive 표준. Button을 제외한 primitive는 KRDS 구조·크기·상태를 기준으로 한다.

요약:

- `색상 + Button = HL`
- `그 외 primitive = KRDS`

### AI 해석 우선순위

GitHub 저장소와 배포 사이트 링크만으로 구현해야 하는 경우, 아래 우선순위를 고정한다.

1. 저장소의 마크다운 문서(`AGENTS.md`, `CLAUDE.md`, `docs/*`)를 **최우선 기준**으로 본다.
2. `docs/SEMANTIC_CONTRACT.md`, `docs/PRIMITIVE_CONTRACT.md`의 소유권 분기를 우선 적용한다.`r`n3. 토큰/CSS/프리셋 파일(`tokens/design-tokens.css`, `public/hl-system.css`, `tokens/tailwind.preset.js`)의 네이밍과 값은 **구현 기준**으로 본다.
4. `src/data/figma-components.js`, `src/data/principles.js`는 **스펙 보강 레퍼런스**로 본다.
5. 배포 사이트는 **시각·동작 참고용**으로만 본다.
6. GitHub 문서와 라이브 사이트가 다르면 **GitHub 문서가 이긴다**.

이 우선순위를 고정해야, AI가 보기 좋은 데모가 아니라 동일한 제품 기준을 반복해서 재현할 수 있다.

---

## 1. 토큰 아키텍처

### 1.1 4계층 변수 구조 (Figma Variable)

| 컬렉션 | 역할 | 제품에서의 용도 |
|--------|------|----------------|
| **primitive** | 원시값(색상 hex, 숫자 등) | UI에 직접 적용 X. 다른 컬렉션에서 참조하는 **기준 값** |
| **semantic** | primitive에 의미를 부여 | 실제 UI에서 사용하는 **CSS 변수**(예: `--hl-primary-600`, `--hl-text`) |
| **mode** | 라이트/다크 전환 | `data-theme="dark"` 또는 `prefers-color-scheme` |
| **responsive** | 반응형 대응 | 브레이크포인트별 값 조정 |

> **핵심**: primitive value를 변경하면 모든 관련 스타일이 자동 업데이트 → 시스템 전반 일관성 유지.

### 1.2 CSS 토큰 파일 선택

| 상황 | 파일 | 네임스페이스 |
|------|------|-------------|
| `hl-system.css`를 이미 쓰는 프로젝트 | `public/hl-system.css` | `--hl-*` + `.hl-*` 컴포넌트 클래스 |
| Tailwind 프로젝트 | `tokens/tailwind.preset.js` + `tokens/design-tokens.css` | Tailwind 유틸리티 + `var(--color-*)` |
| 순수 CSS/HTML | `tokens/design-tokens.css` | `var(--color-*)`, `var(--text-*)` |
| Python (Streamlit/Gradio) | `HL_TOKENS` 딕셔너리 | Python 상수 참조 |

> ⚠️ `hl-system.css`와 `design-tokens.css`를 **동시에 import하지 말 것** — 토큰 중복 충돌.

---

## 2. 타이포그래피

### 2.1 Figma 공식 6계층 타입 시스템

| 계층 | 크기(px) | 폰트 | 두께 | 용도 |
|------|---------|------|------|------|
| **Display** | 60 / 44 / 36 | Pretendard | Bold | 히어로, 대형 타이틀 |
| **Heading** | 40 / 32 / 24 / 19 / 17 / 15 | Pretendard | Bold | 페이지/섹션/카드 제목 |
| **Body** | 19 / 17 / 15 / 13 | Pretendard GOV | Regular | 본문 텍스트 |
| **Body Bold** | 19 / 17 / 15 / 13 | Pretendard | Bold | 강조 본문 |
| **Label** | 19 / 17 / 15 / 13 | Pretendard GOV | Regular | 입력 라벨, UI 텍스트 |
| **Navigation** | 24 / 19 (Bold), 17 / 15 (Regular/Bold) | Pretendard / GOV | Mixed | 메뉴, 탐색 |
| **Underline** | 19 / 17 / 15 / 13 | Pretendard GOV | Regular | 링크, 밑줄 텍스트 |

### 2.2 HL 시스템 토큰 매핑

| Figma 크기 | `--hl-text-*` 토큰 | px |
|-----------|-------------------|-----|
| Display large (60) | 별도 정의 필요 | 60px |
| Display medium (44) | 별도 정의 필요 | 44px |
| Display small (36) | `--hl-text-3xl` | 36px |
| Heading xlarge (40) | 별도 정의 필요 | 40px |
| Heading large (32) | `--hl-text-2xl` 근사 | 28px → 32px 조정 검토 |
| Heading medium (24) | `--hl-text-xl` 근사 | 22px → 24px 조정 검토 |
| Heading small (19) | `--hl-text-lg` 근사 | 18px → 19px 조정 검토 |
| Body/Label medium (17) | `--hl-text-md` 근사 | 16px → 17px 조정 검토 |
| Body/Label small (15) | `--hl-text-base` 근사 | 14px → 15px 조정 검토 |
| Body/Label xsmall (13) | `--hl-text-sm` | 13px |
| xs (11) | `--hl-text-xs` | 11px |

### 2.3 폰트 전략

| 구분 | 폰트 | 용도 |
|------|------|------|
| 본문·UI (한·영 공통) | Pretendard Variable (`--hl-font` / `var(--font-sans)`) | 모든 산세리프 UI |
| 숫자·코드 | Geist Mono (`--hl-mono` / `var(--font-mono)`) | 테이블 수치, 코드 블록 |

- **Line-height**: `--leading-tight(1.25)` ~ `--leading-relaxed(1.625)` 토큰 사용
- **임의 font-size/letter-spacing/line-height 하드코딩 금지**

---

## 3. 간격 (Spacing)

### 3.1 Gap 스케일 (Figma Layout 기준 → HL 토큰)

| Figma gap | px | HL 토큰 |
|-----------|-----|---------|
| gap-1 | 2 | `calc(var(--hl-sp-1) / 2)` |
| gap-2 | 4 | `--hl-sp-1` |
| gap-3 | 8 | `--hl-sp-2` |
| gap-4 | 12 | `--hl-sp-3` |
| gap-5 | 16 | `--hl-sp-4` |
| gap-6 | 20 | `--hl-sp-5` |
| gap-7 | 24 | `--hl-sp-6` |
| gap-8 | 32 | `--hl-sp-8` |
| gap-9 | 40 | `--hl-sp-10` |
| gap-10 | 48 | `--hl-sp-12` |

### 3.2 Padding 스케일

Gap과 동일한 토큰 매핑을 따르되, 컴포넌트별 기준:

| 요소 | 토큰 | 값 |
|------|------|-----|
| 테이블 행 높이 | `--hl-sp-10` | 40px |
| 카드 패딩 | `--hl-sp-4` | 16px |
| 카드 간격 | `--hl-sp-3` | 12px |
| 섹션 간격 | `--hl-sp-5` | 20px |
| 인라인 갭 | `--hl-sp-2` | 8px |

---

## 4. 모서리 반경 (Radius)

### Shape 스케일 (Figma 기준)

| 레벨 | Radius | 컨테이너 크기 | 적용 컴포넌트 |
|------|--------|-------------|-------------|
| **Xsmall** | 2px | 8~16px | Floament(장식 요소) |
| **Small** | 4px | 20~32px | Chips, Checkbox, Radio, Switch, Tag |
| **Medium** | 6px | 40~48px | Button, Text Input, Textarea, Select |
| **Medium** | 8px | 56~64px | Carousel-Number, Step Indicator, Pagination |
| **Large** | 10px | 72~80px | Card, Dialog |
| **Xlarge** | 12px | 96~120px | Banner, Dialog, Bottom Sheet |
| **Full** | 9999px | — | 원형 (아바타, 토글 트랙) |

### HL 토큰 매핑

| Figma | `--hl-radius-*` | 현재 값 | 조정 검토 |
|-------|-----------------|---------|----------|
| 2px | — | — | 신규 토큰 필요 |
| 4px | `--hl-radius-sm` | 6px | → 4px 조정 검토 |
| 6px | `--hl-radius-sm` | 6px | 일치 |
| 8px | `--hl-radius` | 10px | → 8px 조정 검토 |
| 10px | `--hl-radius` | 10px | 일치 |
| 12px | `--hl-radius-lg` | 14px | → 12px 조정 검토 |

---

## 5. 고도 (Elevation / Shadow)

| 레벨 | HL 토큰 | 용도 |
|------|---------|------|
| Level 1 | `--hl-shadow-1` | 카드, 기본 요소 |
| Level 2 | `--hl-shadow-2` | 호버 상태, 드롭다운 |
| Level 3 | `--hl-shadow-3` | 모달, 팝오버 |
| Level 4 | `--hl-shadow-4` | 드로어, 최상위 레이어 |

- 다크 모드에서도 동일 레벨 사용 (토큰 값이 자동 전환)
- 임의의 `box-shadow` 추가 금지

---

## 6. 아이콘

| 항목 | 기준 |
|------|------|
| **기준 크기** | 24px |
| **사용 크기** | 12 / 16 / 20 / 24 / 32 / 40px |
| **제품 기본 형식** | 로컬 SVG (CDN 아이콘 폰트 의존 지양) |
| **색상** | `currentColor` / 시맨틱 토큰 (임의 색 지정 금지) |
| **접근성** | 장식 아이콘은 `aria-hidden="true"`, 의미 아이콘은 텍스트/라벨 병기 |

---

## 7. 컴포넌트 레퍼런스 (9개 카테고리, 935개)

> 상세 스펙: `src/data/figma-components.js`

| 카테고리 | 주요 컴포넌트 | 핵심 치수 |
|---------|-------------|-----------|
| **Identity** | Masthead, Identifier, Header, Footer | 콘텐츠 1200px, 여백 40px |
| **Navigation** | GNB(4-column 282px), Side Nav, Breadcrumb, Tab Bar(72×76), Pagination(40px) | 메뉴 56px 높이 |
| **Layout** | Card, Table(39/76/50px), Accordion, Calendar(384px), Modal(392px), Badge, Carousel | — |
| **Action** | Button(5 sizes × 3 types × 4 states), Link, Icon Button, Tab, Segment Control | — |
| **Select** | Checkbox, Radio, Toggle, Chip, Dropdown, Sorting Button | large/medium |
| **Feedback** | Alert, Toast, Progress Bar, File Upload, Step Indicator, Spinner | 4 상태 색상 |
| **Help** | Tooltip(6방향), Popover, Guide Panel | — |
| **Input** | TextField(4 sizes × 6 states), Textarea, Search Field, Helper Text | — |
| **Setting** | Getting Started Guide, User Feedback | — |

---

## 8. Identity 셸 구조 (모든 페이지 공통)

```
┌─────────────────────────────────────────┐
│  Masthead (공식 배너)         15px Regular │
├─────────────────────────────────────────┤
│  Identifier (운영기관 식별자)   15px Regular │
├─────────────────────────────────────────┤
│  Header                                 │
│  ├ MI/슬로건 (200×48)                    │
│  ├ Utility-small (언어/버튼 15px)        │
│  └ Utility-medium (메뉴×5, Bold 17px)   │
├─────────────────────────────────────────┤
│                                         │
│  [본문 콘텐츠 영역 — 1200px, 좌우 40px]   │
│                                         │
├─────────────────────────────────────────┤
│  Footer                                 │
│  ├ Related Site 드롭다운                  │
│  ├ 3-column 그리드 (588+282+282)         │
│  │  └ 주소/전화/유틸리티링크/SNS           │
│  └ 정책 링크 + Copyright                  │
└─────────────────────────────────────────┘
```

---

## 9. 레이아웃 패턴 (데이터 화면 기본 순서)

```
[1] Filter      — 검색 조건 및 필터 영역
[2] Summary     — KPI 카드, 요약 지표
[3] Main View   — 차트, 테이블, 그리드
[4] Detail      — 상세 데이터 테이블
```

### Identity 선택 규칙

- Identity 셸은 `Masthead → Identifier → Header → Footer` 순서를 기준으로 유지한다.
- `Identifier`는 페이지 하단에서 **눈에 잘 띄는 유형**을 고른다.
- **SaaS처럼 푸터 정보가 많거나 푸터가 복잡하면 `footer-out`을 우선한다.**
- 푸터가 짧고 단순할 때만 `footer-in`을 쓴다.
- 선택 규칙이 흔들리면 AI가 화면마다 다른 식별자 배치를 만들기 쉬우므로, 구현 프롬프트에도 이 규칙을 그대로 넣는다.

---

## 10. 반응형 브레이크포인트

| 구간 | px | 동작 |
|------|-----|------|
| **데스크톱** | > 960 | 사이드바 고정(256px), 본문 `margin-left` |
| **태블릿** | ≤ 960 | 사이드바 → 드로어(햄버거), 본문 전폭 |
| **모바일** | ≤ 640 | 패딩/폰트 축소, 테이블 가로 스크롤 |

---

## 11. 컴포넌트 PC/MO 반응형 설계 원칙

Figma에서 모든 주요 컴포넌트는 **PC와 MO(Mobile) 두 벌**로 정의되어 있다.
SaaS 제품을 만들 때 AI가 컴포넌트를 생성하거나 수정할 경우, 아래 원칙을 따른다.

### 11.1 설계 원칙

1. **PC/MO 각각의 Figma 스펙을 참조한다** — 하나의 스펙으로 양쪽을 억지로 맞추지 않는다.
2. **콘텐츠 영역 폭이 기준이다** — PC: `1200px`, MO: `390px`(또는 뷰포트 전폭).
3. **좌우 패딩이 달라진다** — PC: `20~40px`, MO: `16~20px`.
4. **폰트 크기는 유지하되 줄 수가 달라진다** — 같은 15px 텍스트도 MO에서는 줄바꿈이 생긴다.
5. **터치 타겟은 최소 44px** — MO에서 버튼/링크의 최소 높이는 44px 이상.
6. **아이콘 크기는 PC/MO 동일하게 유지** — 24px 기준 아이콘은 축소하지 않는다.

### 11.2 컴포넌트별 PC/MO 스펙 레퍼런스 (MCP로 추출한 실측값)

#### Masthead (공식 배너) — 대표 예시

| 항목 | PC (`masthead__pc`) | MO (`masthead__mo`) |
|------|---------------------|---------------------|
| **전체 크기** | 1200 × 32px | 390 × 32px |
| **배경색** | `#eef2f7` | `#eef2f7` (동일) |
| **좌측 패딩** | 0px (콘텐츠 영역 기준) | 16px |
| **문구** | "이 누리집은 대한민국 공식 전자정부 누리집입니다." | 동일 |
| **폰트** | Pretendard GOV Regular 15px | 동일 |
| **글자색** | `#1e2124` | 동일 |
| **line-height** | 22.5px (1.5) | 동일 |
| **아이콘** | flag 24×24 | flag 24×24 (동일) |
| **외부 wrap 패딩** | 20px | 20px |
| **Badge** | 39 × 32px | 68 × 32px (더 넓음) |

#### 일반 컴포넌트 PC/MO 차이 패턴

| 컴포넌트 | PC 특징 | MO 특징 |
|---------|---------|---------|
| **Header** | 로고 + Utility-small + Utility-medium 가로 배치 | 로고 + 햄버거 메뉴(드로어) |
| **Footer** | 3-column 그리드 (588+282+282) | 1-column 세로 스택 |
| **Card** | 가로 레이아웃 (이미지+텍스트 옆 배치) | 세로 레이아웃 (이미지 위, 텍스트 아래) |
| **Table** | 전체 열 표시, 가로 스크롤 없음 | `overflow-x: auto` 가로 스크롤 |
| **Modal** | 392px 고정 폭, 센터 배치 | 뷰포트 전폭 또는 `max-width: 90vw` |
| **Tab Bar** | 상단 탭 (line/fill 스타일) | 하단 고정 탭 바 (72×76 × 5개) |
| **Pagination** | 번호 버튼 전체 표시 + 입력 이동 | 이전/다음 + 현재 페이지 표시 |
| **Side Nav** | 좌측 고정 (248px) | 드로어 오버레이 |

### 11.3 AI 생성 시 체크포인트

컴포넌트를 코드로 생성할 때 아래를 확인:

- [ ] PC 스펙과 MO 스펙 **둘 다** `figma-components.js`에서 참조했는가?
- [ ] `@media (max-width: 960px)` 이하에서 **레이아웃이 전환**되는가? (가로→세로, 고정→드로어)
- [ ] MO에서 **터치 타겟 44px** 이상인가?
- [ ] MO에서 **좌우 패딩이 16px**로 줄어드는가?
- [ ] Badge/태그 등 **작은 요소의 MO 크기**가 PC와 다른 경우 반영했는가?

---

## 12. 다크 모드

- `data-theme="dark"` 또는 시스템 `prefers-color-scheme` 감지
- 순백(`#fff`)/순검정(`#000`) 직접 사용 금지 → surface/text 토큰 사용
- 차트/이미지도 다크 전용 색상 전략 필요

---

## 13. SaaS 제품 시작 체크리스트

새 SaaS 프로젝트를 시작할 때 아래를 순서대로 확인:

- [ ] **토큰 파일 선택**: `hl-system.css` vs `design-tokens.css` + Tailwind preset
- [ ] **폰트 로드**: 전역 토큰으로 연결, CDN or self-host
- [ ] **Identity 셸**: Masthead → Identifier → Header → Footer 순서 구현
- [ ] **레이아웃 순서**: Filter → Summary → Main → Detail
- [ ] **컴포넌트 참조**: `src/data/figma-components.js`에서 치수/상태 확인
- [ ] **시맨틱 색상**: 초록=정상, 노랑=경고, 빨강=에러 — 장식 금지
- [ ] **Compact Density**: 테이블 행 40px, 카드 gap 12px, 패딩 12~16px
- [ ] **다크 모드**: 모든 페이지에서 라이트/다크 전환 확인
- [ ] **접근성**: 색상만으로 정보 전달 X, `aria-*` 속성, ESC 닫기
- [ ] **아이콘**: 로컬 SVG, 24px 기준, `currentColor`

---

## 참조 파일

| 파일 | 역할 |
|------|------|
| `src/data/principles.js` | 10개 핵심 원칙 (토큰/타이포/아이콘/레이아웃/색상/밀도/다크모드/테이블/레퍼런스/통일감) |
| `src/data/figma-components.js` | Figma 935개 컴포넌트 스펙 + 스타일 토큰 + 시작하기 가이드 |
| `public/hl-system.css` | 패키징된 CSS (토큰 + 컴포넌트 클래스) |
| `tokens/design-tokens.css` | CSS 변수 토큰 (외부 프로젝트용) |
| `tokens/tailwind.preset.js` | Tailwind 프리셋 |
| `docs/STYLE_GUIDE.md` | Do / Don't 스타일 규칙 |
| `docs/COMPONENTS.md` | 컴포넌트 패턴 (CSS + Tailwind + Python) |
| `docs/DATA_DISPLAY.md` | 데이터 표현 원칙 |
| `CLAUDE.md` | AI 지시 문서 (이 파일의 축약판) |
