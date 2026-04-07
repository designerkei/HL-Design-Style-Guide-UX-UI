# HL Design System — 작업 명세서 (아카이브)

> **⚠ 이 문서는 디자인 시스템 초기 생성 시 사용된 일회성 명세서이며, 현재는 아카이브 상태이다.**
> **최신 규칙은 반드시 `CLAUDE.md` → `docs/STYLE_GUIDE.md` 등 운영 문서를 따를 것.**
> 파일 구조, 간격 체계(2px 기반), 컴포넌트 수 등이 이 문서와 다를 수 있다.

---

*원본 내용 (참고용):*

> 이 문서는 사내 AI 도구(주로 Claude Code)로 만드는 UI의 디자인 통일을 위한 **디자인 시스템 작업 지시서**이다.
> Claude Code에서 이 문서를 읽고 실제 파일들을 생성하라.

---

## 1. 배경 및 목적

### 현재 문제

- 사내에서 각자 AI(Claude Code 등)를 활용해 다양한 툴을 만들고 있음
- 디자인이 중구난방 — 색상, 레이아웃, 데이터 표현 방식이 제각각
- "데이터를 한 눈에 보는 것"이 가장 중요한데, 정보 구조 원칙이 없음

### 해결 방향

- 프레임워크 단위의 강제(React 컴포넌트 라이브러리 등)가 아니라, **AI가 생성 단계에서 따르는 규칙 문서**로 제공
- 디자인 시스템을 **스타일 층(토큰)** + **구조 층(데이터 표현 원칙)**의 2층으로 정의
- 규칙만이 아니라 **예시와 반례**까지 포함해야 AI 출력이 안정됨

### 적용 환경

- **AI 도구**: 주로 Claude Code
- **결과물**: React 웹 앱, Python 스크립트 + UI (Streamlit/Gradio 등)
- **배포**: GitHub 사내 저장소 (Git Submodule로 각 프로젝트에 연결)
- **도입 방식**: 스타일 문서를 서브모듈로 제공, 각 프로젝트 CLAUDE.md에서 참조

### 핵심 원칙

- **마찰 제로**: 사용자가 별도 설정 없이, 프로젝트에 submodule만 추가하면 동작
- **프레임워크 무관**: Tailwind 프로젝트든 순수 CSS든 모두 적용 가능
- **무료**: Figma 등 유료 도구 없이 텍스트 문서 + 코드 스니펫만으로 구성

---

## 2. 최종 파일 구조

아래 구조대로 파일을 생성하라:

```
hl-design-system/
├── README.md                  ← 사람용: 설치 가이드, 구조 설명
├── CLAUDE.md                  ← AI용: 핵심 지시문 (아래 모든 문서의 진입점)
├── tokens/
│   ├── design-tokens.css      ← 스타일 층: CSS 변수 (색상, 타이포, 간격, 다크모드)
│   └── tailwind.preset.js     ← Tailwind 프로젝트용 프리셋
├── docs/
│   ├── STYLE_GUIDE.md         ← 스타일 층 규칙: 색상, 타이포, 간격, 반응형, 접근성
│   ├── DATA_DISPLAY.md        ← 구조 층 규칙: 데이터 표현 원칙, 레이아웃 순서, density
│   └── COMPONENTS.md          ← 컴포넌트 패턴: 순수 CSS 버전 + Tailwind 버전 병기
└── examples/
    ├── GOOD_EXAMPLES.md       ← 도메인별 좋은 예시 (코드 포함)
    └── BAD_EXAMPLES.md        ← 반례: 흔한 실수와 수정 방법
```

---

## 3. 각 파일별 상세 요구사항

### 3-1. README.md

**대상**: 사람 (개발자)
**내용**:

- 이 디자인 시스템이 왜 필요한지 (2~3줄)
- 빠른 시작 가이드:
  - 방법 1: Git Submodule (권장) — `git submodule add` 명령 + 프로젝트 CLAUDE.md에 한 줄 추가
  - 방법 2: 폴더 복사 (간편)
  - 방법 3: 직접 프롬프트 (일회성) — `@design-system/CLAUDE.md 읽고 따라서 작업해줘`
- 파일 구조 설명 (위 트리 포함)
- 커스터마이징 방법 (토큰 값 변경, 규칙 추가 등)

### 3-2. CLAUDE.md

**대상**: Claude Code (AI가 자동으로 읽는 파일)
**역할**: 모든 규칙 문서의 진입점. UI 작업 시 이 파일을 먼저 읽고, 필요한 세부 문서를 참조하도록 안내.
**내용**:

- "UI를 만들거나 수정할 때 반드시 아래 문서들을 읽고 따를 것" + 파일 경로 목록
- 핵심 원칙 요약 (5~7줄 이내):
  - CSS 변수 또는 Tailwind 프리셋 사용 (하드코딩 금지)
  - 데이터 화면은 Filter → Summary → Main View → Detail 순서
  - 색상은 시맨틱 의미로만 사용
  - 기본 density는 compact
  - 다크 모드 필수 지원
  - 자유 시각화 허용하되, 정형 상세 뷰(테이블 등)를 반드시 동반
- 프레임워크 판별 규칙:
  - Tailwind 설정 파일이 있으면 → Tailwind 클래스 + 프리셋 사용
  - 없으면 → CSS 변수(`design-tokens.css`) 직접 사용
  - Python(Streamlit/Gradio) → CSS 주입 방식으로 토큰 적용
- 체크리스트 (작업 완료 전 확인 항목)

### 3-3. tokens/design-tokens.css

**스타일 층의 핵심 파일**. 순수 CSS 변수로 정의.
**내용**:

- **폰트 import**: Pretendard Variable (한글), Geist / Geist Mono (영문/코드)
- **색상 (라이트 모드)**:
  - Brand: Primary 50~900 (Blue 계열, 기본값 Blue-600)
  - Neutral: Gray 50~950
  - Semantic: success(초록 #16a34a), warning(노랑 #ca8a04), error(빨강 #dc2626), info(파랑 #2563eb) + 각각의 bg 색상
  - Surface: bg, bg-secondary, bg-tertiary, surface, surface-raised
  - Text: text, text-secondary, text-tertiary, text-inverse, text-link
  - Border: border, border-hover, border-focus
- **색상 (다크 모드)**: `@media (prefers-color-scheme: dark)` + `.dark` 클래스 양쪽 지원
- **타이포**: font-sans, font-mono, text-xs~4xl, leading, font-weight
- **간격**: 4px 배수 시스템 (space-1 ~ space-20)
- **모서리**: radius-sm(4px) ~ radius-full
- **그림자**: shadow-xs ~ shadow-xl (다크 모드에서 강도 높임)
- **트랜지션**: duration-fast/normal/slow, easing
- **레이아웃**: content-max-width(1200px), sidebar-width(280px)
- 기본 리셋 스타일 (box-sizing, body 기본 폰트 등)

### 3-4. tokens/tailwind.preset.js

Tailwind CSS 프로젝트에서 `tailwind.config.js`의 `presets`에 넣어 쓰는 파일.
`design-tokens.css`와 동일한 값을 Tailwind `theme.extend`로 매핑.
사용법 주석 포함.

### 3-5. docs/STYLE_GUIDE.md

**스타일 층의 규칙 문서**. Do / Don't 형식.
**포함할 섹션**:

- **색상**: 하드코딩 금지, 시맨틱 색상 의미 고정 (초록=정상, 노랑=경고, 빨강=에러, 파랑=선택/강조), 장식용 색 금지, 네온/형광 금지
- **타이포그래피**: Pretendard/Geist만 사용, 토큰 스케일만 사용, 한 화면 3종류 이상 사이즈 변형 지양
- **간격**: 4px 배수 준수, 비정규 값(7px, 15px 등) 금지, 화면 끝 붙는 레이아웃 금지
- **다크 모드**: 모든 UI에 dark 변형 포함, 순백/순검정 금지
- **반응형**: 모바일 퍼스트, 테이블 가로 스크롤, 고정 px 너비 금지
- **접근성**: aria-label, 색상만으로 정보 전달 금지, focus 스타일, 최소 터치 영역 32px
- **코드 품질**: 300줄 이상 파일 분리, `!important` 금지, 인라인 style 지양
- **네이밍**: 컴포넌트 PascalCase, 파일 kebab-case, CSS변수 kebab-case

### 3-6. docs/DATA_DISPLAY.md (신규 — 구조 층)

**데이터 표현 원칙 문서**. 이 디자인 시스템의 차별점.
**포함할 내용**:

#### 레이아웃 순서 원칙

모든 데이터 화면은 가능한 한 아래 순서를 따를 것:

```
[1. Filter / Control Bar]     ← 필터, 검색, 날짜 범위 등
[2. Summary / KPI]            ← 핵심 숫자 3~5개, 상태 표시
[3. Main View]                ← 차트, 그래프, 3D 뷰, 지도 등 (자유 영역)
[4. Detail / Table]           ← 테이블, 이벤트 리스트, 상세 정보
```

- 1, 2, 4는 **공통 구조** (모든 툴에서 일관되게)
- 3은 **자유 시각화 영역** (도메인에 맞게 자유롭게)
- 자유 시각화를 쓰더라도, **정형 상세 뷰(테이블 등)를 반드시 동반**

#### Summary/KPI 규칙

- 핵심 숫자는 최대 5개 이하
- 각 KPI에 포함할 것: 라벨, 값, 단위, 변화 방향(↑↓), 상태 색상
- 숫자에 천 단위 구분자 사용, 퍼센트는 소수점 1자리까지

#### 시맨틱 색상 원칙

- 색상은 **의미만** 가져야 함:
  - 초록(success 토큰) = 정상, 완료, 성공
  - 노랑(warning 토큰) = 경고, 주의
  - 빨강(error 토큰) = 에러, 실패, 위험
  - 파랑(primary 토큰) = 선택, 강조, 활성
- 장식용 색상 사용 금지 — 배경 그라데이션, 화려한 차트 색 등
- 차트에서 여러 시리즈 구분 시: primary → gray-400 → gray-600 등 명도 차이로 구분

#### Density(밀도) 규칙

- 기본은 **compact**: 패딩 최소화, 한 화면에 최대 정보
- 테이블: row 높이 36~40px, 폰트 text-sm(14px)
- 카드 간 간격: gap-3(12px) ~ gap-4(16px)
- 불필요한 장식 공간 제거 (hero 섹션, 큰 여백, 장식 일러스트 등)

#### Table First 원칙

- 모든 데이터는 **테이블로 표현 가능해야** 함
- 다른 시각화(차트, 3D 뷰 등)는 테이블의 보조 역할
- 테이블 기본 기능: 정렬, 필터, 검색, 페이지네이션

#### 자유 시각화 + 정형 뷰 연결 규칙

- 3D 뷰, 지도, 커스텀 그래프 등 자유 시각화는 허용
- 단, 반드시 아래 조건 충족:
  - 선택 상태가 상세 정보와 연결 (클릭하면 Detail 패널에 정보 표시)
  - fallback으로 테이블 뷰 제공 가능

### 3-7. docs/COMPONENTS.md

**컴포넌트 패턴 레퍼런스**. 각 컴포넌트마다 **순수 CSS 변수 버전**과 **Tailwind 버전** 병기.
**포함할 컴포넌트**:

1. **Button** (Primary, Secondary/Outline, Ghost, Danger) + 사이즈 변형 (sm/md/lg)
2. **Input / Form Field** (label + input + 에러 메시지 구조)
3. **Card** (헤더 + 본문 + 푸터)
4. **Table** (정렬 가능 헤더, hover row, compact density 기본)
5. **Badge / Tag** (시맨틱 색상 변형)
6. **KPI Card** (라벨 + 값 + 변화량 + 상태 색상) ← 데이터 표현 핵심
7. **Filter Bar** (검색 + 드롭다운 + 날짜 범위)
8. **Modal / Dialog** (헤더 + 본문 + 푸터 액션)
9. **Toast / Alert** (info, success, warning, error)
10. **Navigation / Sidebar** (활성/비활성 상태)
11. **Page Layout** (전체 페이지 구조 템플릿)
12. **Empty State** (데이터 없을 때)
13. **Detail Drawer / Panel** (오른쪽 또는 하단 슬라이드 패널)

각 컴포넌트 코드 예시 형식:

```
## N. 컴포넌트 이름

### CSS 변수 버전
\```html
(design-tokens.css 변수를 사용하는 순수 HTML/CSS 예시)
\```

### Tailwind 버전
\```jsx
(Tailwind 클래스를 사용하는 JSX 예시)
\```

### Python (Streamlit) — 해당하는 경우
\```python
(st.markdown 등으로 유사하게 구현하는 예시)
\```
```

### 3-8. examples/GOOD_EXAMPLES.md

**도메인별 좋은 예시**. 실제 사용 시나리오별로 전체 화면 구성 코드 제공.
각 예시는 위의 레이아웃 순서 원칙(Filter → Summary → Main → Detail)을 따르는 완전한 예시.

**포함할 예시** (각각 React + Tailwind 코드):

1. **운영 현황 대시보드** — KPI 카드 + 라인 차트 + 테이블 조합
2. **장비/로봇 모니터링** — 상태 뱃지 + 실시간 지표 + 이벤트 로그 테이블
3. **이벤트/장애 분석** — 필터 바 + 시계열 차트 + 상세 로그 테이블
4. **CCTV/영상 모니터링** — 영상 그리드(자유 영역) + 카메라 상태 테이블 + 이벤트 리스트

각 예시에 주석으로 "이 부분이 Filter 영역", "이 부분이 Summary 영역" 등 구조 원칙 매핑 표시.

### 3-9. examples/BAD_EXAMPLES.md

**흔한 실수 반례**. AI가 자주 만드는 안 좋은 패턴과 수정 방법.

**포함할 반례**:

1. **장식 과다** — Hero 섹션, 그라데이션 배경, 큰 여백으로 정보 밀도가 낮은 경우 → compact로 수정
2. **색상 하드코딩** — `#3a7bd5` 같은 임의 색상 사용 → 토큰 변수로 교체
3. **시맨틱 색상 오용** — 장식용으로 초록/빨강 사용 → 의미 기반으로 수정
4. **테이블 없는 데이터 화면** — 카드만 나열하고 정렬/검색 불가 → 테이블 추가
5. **다크 모드 미지원** — 라이트 하드코딩 → dark 변형 추가
6. **과도한 자유 시각화** — 3D 뷰만 있고 상세 정보 패널 없음 → Detail 패널 연결
7. **Summary 없음** — 바로 테이블로 시작, 핵심 지표 파악 불가 → KPI 섹션 추가
8. **밀도 낭비** — 카드 간 gap-8, 패딩 p-8로 한 화면에 정보 3개 → compact로 조정

각 반례 형식:

```
## N. 반례 이름

### ❌ Bad — 문제점 설명
\```
(나쁜 코드 예시)
\```

### ✅ Good — 수정 방법
\```
(수정된 코드 예시)
\```

### 왜 나쁜가
(1~2줄 설명)
```

---

## 4. 톤 & 작성 원칙

- 문서 언어: **한국어** (코드 주석, 변수명은 영어)
- AI가 읽는 문서(CLAUDE.md, RULES 등)는 **명령형** 톤 ("~하라", "~금지")
- 사람이 읽는 문서(README)는 **설명형** 톤
- 코드 예시는 **복사해서 바로 쓸 수 있는** 수준으로 완전하게 작성
- 각 규칙에는 **왜 그런지** 이유를 짧게 포함 (AI가 맥락을 이해해야 더 잘 따름)

---

## 5. 참고: 서브모듈 연동 방식

사용자가 자기 프로젝트에 적용하는 방법:

```bash
# 프로젝트 루트에서
git submodule add <레포 URL> design-system
```

프로젝트 루트의 `CLAUDE.md`에 한 줄 추가:

```markdown
UI 작업 시 반드시 `design-system/CLAUDE.md`를 먼저 읽고 따를 것.
```

이것만으로 Claude Code가 자동으로 디자인 시스템을 참조하게 됨.

---

## 6. 작업 순서 (권장)

1. `tokens/design-tokens.css` — 모든 것의 기반
2. `tokens/tailwind.preset.js` — tokens.css와 값 동기화
3. `docs/STYLE_GUIDE.md` — 스타일 층 규칙
4. `docs/DATA_DISPLAY.md` — 구조 층 규칙 (이 시스템의 핵심)
5. `docs/COMPONENTS.md` — 순수 CSS + Tailwind 병기
6. `examples/GOOD_EXAMPLES.md` — 도메인별 전체 화면 예시
7. `examples/BAD_EXAMPLES.md` — 반례
8. `CLAUDE.md` — 위 모든 문서를 참조하는 진입점
9. `README.md` — 사람용 설치 가이드
