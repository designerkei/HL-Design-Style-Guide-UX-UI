# HL Design System

사내 AI 도구(Claude Code 등)로 만드는 내부 운영 도구 UI의 디자인 통일을 위한 디자인 시스템입니다.
이 시스템을 프로젝트에 연결하면, AI가 자동으로 일관된 스타일과 구조로 UI를 생성합니다.

---

## 파일 구조

```
hl-design-system/
├── AGENTS.md                  ← AI용: 실행 순서·스택 분기·「두 URL만」 시나리오
├── .env.example               ← 배포 시 VITE_SOURCE_REPO_URL (링크로 시작 페이지 자동 채움)
├── CLAUDE.md                  ← AI용: 핵심 지시문·체크리스트
├── README.md                  ← 지금 보고 있는 문서
├── tokens/
│   ├── design-tokens.css      ← CSS 변수 토큰 (색상, 폰트, 간격, 다크모드)
│   └── tailwind.preset.js     ← Tailwind CSS 프리셋
├── public/
│   └── hl-system.css          ← 패키징된 CSS 라이브러리 (토큰 + 21개 컴포넌트)
├── docs/
│   ├── PRODUCT_ADOPTION_GUIDE.md ← SaaS 적용·반응형·Figma 매핑
│   ├── STYLE_GUIDE.md         ← 스타일 규칙 (Do / Don't)
│   ├── DATA_DISPLAY.md        ← 데이터 표현 원칙 (레이아웃, KPI, 밀도)
│   ├── COMPONENTS.md          ← 13개 핵심 컴포넌트 패턴 (CSS + Tailwind + Python)
│   └── CONSISTENCY_AND_AUTOMATION.md ← AI·IDE·점검 스크립트 운영 규칙
└── examples/
    ├── GOOD_EXAMPLES.md       ← 4개 도메인별 좋은 예시
    └── BAD_EXAMPLES.md        ← 8개 흔한 실수와 수정 방법
```

### 파일 선택 가이드

| 상황 | 사용 파일 | 변수 형태 |
|------|----------|----------|
| Tailwind 프로젝트 | `tailwind.preset.js` + `design-tokens.css` | `bg-primary-600`, `text-success` |
| 순수 CSS/HTML 프로젝트 | `design-tokens.css` | `var(--color-primary-600)` |
| CSS 컴포넌트까지 통째로 쓰고 싶을 때 | `hl-system.css` | `.hl-btn--primary`, `var(--hl-primary-600)` |
| Python (Streamlit/Gradio) | `design-tokens.css` 값 참조 | `HL_TOKENS["success"]` 상수 |

> **주의**: `design-tokens.css`와 `hl-system.css`를 동시에 import하지 마세요. 토큰이 중복 정의되어 충돌합니다.

### 두 링크만 넘길 때 (GitHub + 배포 사이트)

배포 후 **저장소 URL**과 **스타일가이드 사이트 URL**만 동료·AI에게 주면 되도록 하려면:

1. GitHub Pages 등으로 사이트를 배포한다. **저장소 URL**은 `src/siteConstants.js`의 `DEFAULT_SOURCE_REPO_URL`에 고정되어 있어 `/consume` 페이지에 **미리 채워진다**. 포크만 쓸 때는 `.env.production`의 `VITE_SOURCE_REPO_URL`로 덮어쓴다(`.env.example` 참고).
2. 사이트의 **`/consume` 경로**(내비: **링크로 시작 (AI)**)에서 **배포 주소 + 저장소 기준 복사용 프롬프트**와 필수 문서 링크를 복사한다.
3. 상대방은 그 페이지에서 프롬프트를 복사해 Cursor 등에 붙이거나, 에이전트가 GitHub의 `AGENTS.md`를 직접 읽게 하면 된다. 상세는 `AGENTS.md` §0.5.
4. **구현 기준은 GitHub 문서**다. 배포 사이트는 시각·동작 참고용이며, 둘이 다르면 문서를 따른다.

---

## 빠른 시작

### 방법 1: Git Submodule (권장)

프로젝트에 서브모듈로 추가합니다:

```bash
cd your-project
git submodule add https://github.com/pigeon9989/design_system.git design-system
```

프로젝트 루트의 `CLAUDE.md`(또는 `AGENTS.md`)에 아래를 넣습니다:

```markdown
UI 작업 시 반드시 `design-system/AGENTS.md`의 순서를 따르고, `design-system/CLAUDE.md` 규칙을 준수할 것.
```

`AGENTS.md`에는 읽기 순서·스택 분기·SaaS 화면 기본 구조·복붙용 프롬프트 템플릿이 있다. Cursor 사용자는 이 저장소를 연 채 `.cursor/rules`를 유지하거나, 소비 프로젝트에 동일 취지의 규칙을 복사한다.

### 방법 2: 폴더 복사 (간편)

이 저장소의 전체 폴더를 프로젝트 안에 복사합니다:

```bash
cp -r hl-design-system/ your-project/design-system/
```

### 방법 3: 직접 프롬프트 (일회성)

Claude Code에서 직접 참조를 요청합니다:

```
@design-system/CLAUDE.md 읽고 따라서 작업해줘
```

---

## 사용법

### CSS 변수 방식 (모든 프로젝트)

HTML 파일에 토큰을 import합니다:

```html
<link rel="stylesheet" href="design-system/tokens/design-tokens.css" />
```

CSS에서 변수를 사용합니다:

```css
.my-button {
  background: var(--color-primary-600);
  color: var(--text-inverse);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
}
```

### hl-system.css 방식 (올인원)

`hl-system.css` 하나로 토큰과 컴포넌트를 모두 사용합니다:

```html
<link rel="stylesheet" href="design-system/public/hl-system.css" />
```

```html
<button class="hl-btn hl-btn--primary hl-btn--md">저장</button>
<span class="hl-badge hl-badge--success">정상</span>
```

### Tailwind CSS 방식

1\. HTML에 `design-tokens.css`를 import합니다 (다크모드 시맨틱 배경 자동 전환에 필요):

```html
<link rel="stylesheet" href="design-system/tokens/design-tokens.css" />
```

2\. `tailwind.config.js`에 프리셋을 추가합니다:

```javascript
module.exports = {
  presets: [require('./design-system/tokens/tailwind.preset.js')],
  // ... 기존 설정
};
```

Tailwind 클래스에서 프리셋 토큰을 사용합니다:

```jsx
<button className="bg-primary-600 text-white px-4 py-2 rounded-md font-sans">
  저장
</button>
```

> **왜 둘 다 필요한가?** 프리셋의 시맨틱 배경색(`bg-success-bg` 등)은 내부적으로 `var(--color-success-bg)` CSS 변수를 참조합니다. `design-tokens.css`가 이 변수를 정의하고 다크모드에서 자동 전환합니다.

---

## HL CI 컬러

이 디자인 시스템은 HL 그룹 CI 컬러를 기반으로 합니다:

| 이름 | 색상 | 코드 | 용도 |
|------|------|------|------|
| HL Sky Blue | 🔵 | `#00B4ED` | Primary 브랜드 컬러 (primary-500) |
| HL Navy | 🔷 | `#002B68` | 어두운 브랜드 액센트 (primary-900) |
| Gold | 🟡 | `#C09A5D` | 액센트 (accent-gold) |
| Silver | ⚪ | `#B2B2B2` | 액센트 (accent-silver) |

---

## 커스터마이징

### 토큰 값 변경

`tokens/design-tokens.css`의 `:root` 블록에서 변수 값을 직접 수정합니다.
변경 시 아래 파일들도 반드시 동기화해야 합니다:
- `tokens/tailwind.preset.js` — Tailwind 프리셋
- `public/hl-system.css` — 패키징 라이브러리의 `--hl-*` 변수 (Primary, Semantic 색상)

### 규칙 추가

`docs/` 폴더의 마크다운 파일에 프로젝트별 규칙을 추가할 수 있습니다.

### 컴포넌트 추가

`docs/COMPONENTS.md`에 프로젝트별 컴포넌트 패턴을 추가합니다.
CSS 변수 버전과 Tailwind 버전을 모두 작성해 주세요.

---

## 핵심 원칙 요약

- **토큰만 사용** — 하드코딩 색상/간격 금지
- **Filter → Summary → Main → Detail** — 모든 데이터 화면의 구조
- **Compact Density** — 한 화면에 최대 정보
- **다크 모드 필수** — 관제실/야간 환경 지원
- **Table First** — 모든 데이터는 테이블이 기본
