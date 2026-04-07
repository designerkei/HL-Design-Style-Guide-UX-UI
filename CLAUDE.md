# HL Design System — AI 지시 문서

> 이 디자인 시스템은 **HL 사내 운영 도구**를 위한 것이다.
> 데이터 시각화와 화면 통일이 최우선이다.
> UI를 만들거나 수정할 때 이 문서를 먼저 읽고, 아래 규칙을 반드시 따를 것.

---

## 참조 문서

| 파일 | 역할 |
|------|------|
| `tokens/design-tokens.css` | CSS 변수 토큰 — 외부 프로젝트용 (색상, 폰트, 간격, 다크모드) |
| `tokens/tailwind.preset.js` | Tailwind CSS 프리셋 — `design-tokens.css` 값과 동기화됨 |
| `public/hl-system.css` | 패키징된 CSS 컴포넌트 라이브러리 — 토큰 + 21개 컴포넌트 클래스 포함 |
| `docs/STYLE_GUIDE.md` | 스타일 규칙 (Do / Don't) |
| `docs/DATA_DISPLAY.md` | 데이터 표현 원칙 (레이아웃 순서, KPI, 밀도) |
| `docs/COMPONENTS.md` | 13개 핵심 컴포넌트 패턴 (CSS + Tailwind + Python 병기) |
| `examples/GOOD_EXAMPLES.md` | 4개 도메인별 전체 화면 예시 |
| `examples/BAD_EXAMPLES.md` | 8개 흔한 실수와 수정 방법 |

### 파일 관계

```
design-tokens.css ─────── 토큰 값(색상·폰트·간격)의 단일 소스
       │
       ├── tailwind.preset.js   (동기화: 같은 값을 Tailwind 형식으로 제공)
       │
       └── hl-system.css        (동기화: --hl-* 네임스페이스로 같은 색상값 사용
                                  + 21개 컴포넌트 클래스 포함)
```

- **`design-tokens.css`**: 토큰만 제공. 외부 프로젝트에서 `<link>`로 가져와 `var(--color-primary-600)` 등으로 사용.
- **`hl-system.css`**: 토큰 + 컴포넌트 CSS가 하나로 패키징된 파일. `<link>` 하나로 전체 디자인 시스템 적용. `--hl-*` 변수명을 사용하지만 Primary/Semantic 색상값은 `design-tokens.css`와 동일.
- **두 파일을 동시에 import하지 말 것** — 토큰이 중복 정의되어 충돌한다.

---

## 핵심 원칙

1. **토큰 사용 필수** — 색상, 폰트, 간격은 반드시 CSS 변수(`var(--...)`) 또는 Tailwind 프리셋 토큰을 사용하라. 하드코딩 금지.
2. **레이아웃 순서** — 데이터 화면은 `Filter → Summary/KPI → Main View → Detail/Table` 순서를 따르라.
3. **시맨틱 색상** — 색상은 의미로만 사용하라: 초록=정상, 노랑=경고, 빨강=에러, 파랑=선택/강조. 장식용 색상 금지.
4. **Compact Density** — 기본 밀도는 compact: 테이블 row 40px, 카드 gap 12px, 패딩 12~16px. Hero 섹션, 대형 여백 금지.
5. **다크 모드 필수** — 모든 UI는 라이트/다크 모드를 모두 지원하라. 순백/순검정 직접 사용 금지.
6. **Table First** — 모든 데이터는 테이블로 표현 가능해야 한다. 자유 시각화(차트, 3D 등)는 반드시 테이블/상세 패널과 연결하라.
7. **통일감 우선** — 10개의 서로 다른 도구를 열어도 같은 색상, 같은 구조, 같은 밀도가 되도록 하라.

---

## 프레임워크 판별 규칙

UI 코드를 생성할 때, 프로젝트의 기술 스택을 확인하고 아래 규칙을 따르라:

### hl-system.css 사용 프로젝트
- 프로젝트가 이미 `hl-system.css`를 import하고 있으면 → `--hl-*` 변수 + `.hl-*` 컴포넌트 클래스 사용
- Tailwind나 `design-tokens.css`를 추가로 import하지 말 것

### Tailwind CSS 프로젝트
- `tailwind.config.*` 파일이 존재하면 → Tailwind 프로젝트
- `tokens/tailwind.preset.js`를 `presets`에 추가하라
- **반드시 `design-tokens.css`도 함께 import하라** — 프리셋의 시맨틱 배경색(`bg-success-bg` 등)이 CSS 변수를 참조하므로, `design-tokens.css`가 있어야 다크모드에서 자동 전환된다.
- Surface/Text 계열(`bg-white`, `text-gray-900`)은 CSS 변수가 아니므로 `dark:` 변형을 수동 지정하라.
- `docs/COMPONENTS.md`의 Tailwind 버전 참조

### 순수 CSS / HTML 프로젝트
- Tailwind 설정이 없으면 → CSS 변수 방식
- `tokens/design-tokens.css`를 import하라
- `var(--color-primary-600)` 등 CSS 변수 사용
- `docs/COMPONENTS.md`의 CSS 변수 버전 참조

### Python (Streamlit / Gradio)
- `st.markdown`의 `unsafe_allow_html=True`로 CSS 주입
- `design-tokens.css`의 토큰 값을 Python 상수(`HL_TOKENS` 딕셔너리)로 옮겨 사용
- 하드코딩 색상 대신 상수를 참조할 것 (예: `HL_TOKENS["success"]`)
- `docs/COMPONENTS.md`의 Python 버전 참조

---

## 작업 완료 전 체크리스트

UI 작업을 완료하기 전에 아래 항목을 확인하라:

- [ ] **토큰 사용**: 색상, 폰트, 간격에 하드코딩 값이 없는가? (Python은 `HL_TOKENS` 상수 사용)
- [ ] **레이아웃 순서**: Filter → Summary → Main → Detail 순서를 따르는가?
- [ ] **KPI/Summary 존재**: 핵심 지표 3~5개가 상단에 표시되는가?
- [ ] **테이블 존재**: 데이터를 정렬·검색·필터 가능한 테이블이 있는가?
- [ ] **시맨틱 색상**: 초록/노랑/빨강이 상태 의미로만 사용되었는가?
- [ ] **다크 모드**: `.dark` 클래스 또는 시스템 설정으로 다크 모드가 작동하는가?
- [ ] **Compact Density**: 불필요한 여백(p-8, gap-8 이상)이 없는가?
- [ ] **반응형**: 테이블에 `overflow-x: auto`가 있고, 고정 너비가 없는가?
- [ ] **접근성**: 색상만으로 정보를 전달하지 않고, 텍스트/아이콘을 병기하는가? Modal/Drawer에 `role="dialog"`, `aria-modal`, ESC 닫기가 있는가?
- [ ] **코드 품질**: 파일이 300줄 이하이고, `!important`를 사용하지 않았는가?
