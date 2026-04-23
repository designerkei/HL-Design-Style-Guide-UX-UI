# HL Design System — 에이전트(AI) 실행 가이드

이 저장소에서 UI·SaaS 화면을 만들거나, 이 디자인 시스템을 **소비하는 외부 프로젝트**에서 구현할 때, 아래 순서를 **생략하지 말 것**. 순서대로 읽고 판별하면 토큰 충돌·폰트 불일치·레이아웃 누락을 줄일 수 있다.

---

## 0. 한 줄 원칙

- **산세리프 UI**: Pretendard Variable + 토큰만. **코드·수치**: Geist Mono. **아이콘**: Material Symbols(가이드와 동일 로드) 또는 로컬 SVG.
- **`design-tokens.css`와 `hl-system.css`를 동시에 import하지 말 것.**

---

## 0.5 GitHub URL + 배포 사이트 URL만 있을 때

운영자가 **저장소 링크**와 **배포된 스타일가이드 사이트 링크** 두 가지만 넘기는 경우가 기본 시나리오다.

1. **사람(또는 AI)이 배포 사이트에서** `{사이트}/consume` (경로: `…/링크로 시작 (AI)`) 페이지를 연다.  
   - 현재 배포 origin과 GitHub 저장소 URL이 반영된 **복사용 프롬프트**(한/영)와 **필수 문서·라이브 화면 URL 표**가 있다.  
   - 다른 저장소/브랜치를 쓰면 URL을 고친 뒤 **저장**하면 `localStorage`에만 보관된다. 페이지 로드 시 **로컬 저장 연결** 검사(쓰기·읽기·삭제 시험) 후 `연결됨`일 때만 저장 버튼이 활성화된다. 시크릿 모드 등에서는 `연결 안 됨`과 **다시 확인**으로 상태를 재검사할 수 있다. **기본값으로** 버튼으로 되돌릴 수 있다.
2. **저장소 URL**은 코드의 `src/siteConstants.js` → `DEFAULT_SOURCE_REPO_URL`이 기본값으로 채워진다. 포크·다른 원격만 쓸 때는 빌드 시 `VITE_SOURCE_REPO_URL`로 덮어쓴다.
3. **에이전트는** 저장소의 `AGENTS.md` → `CLAUDE.md`를 원격으로 읽을 수 있으면 그대로 읽고, 라이브 사이트는 컴포넌트·패턴의 **시각·동작 참고**로만 쓴다(마크다운 원문은 GitHub에 있다).

브랜치가 `main`이 아니면 `/consume`에서 브랜치명을 바꾸거나, 프롬프트 안의 `blob/브랜치/` 경로를 수정한다.

---

## 1. 필수 읽기 순서 (UI 작업 시작 전)

| 순서 | 파일 | 목적 |
|------|------|------|
| 1 | `CLAUDE.md` | 스택 판별, 토큰 네임스페이스, 금지 사항 |
| 2 | `docs/SEMANTIC_CONTRACT.md` | 색상 표준 소유권. `색상 + Button = HL` 기준 |
| 3 | `docs/PRIMITIVE_CONTRACT.md` | primitive 표준 소유권. `Button 제외 primitive = KRDS` 기준 |
| 4 | `docs/PRODUCT_ADOPTION_GUIDE.md` | SaaS 적용·반응형·Figma↔코드 매핑·체크리스트 |
| 5 | `docs/DATA_DISPLAY.md` | Filter → KPI → Main → Table 순서 |
| 6 | `docs/COMPONENTS.md` | 버튼·테이블·모달 등 구현 패턴 |
| 7 | `docs/CONSISTENCY_AND_AUTOMATION.md` | AI/IDE/점검 스크립트까지 포함한 운영 규칙 |
| 8 | `src/data/figma-components.js` | Figma 치수·PC/MO·타이포 6계층(스펙 레퍼런스) |
| 9 | `src/data/principles.js` | 홈/문서에 노출된 핵심 원칙 문구와 정합 |

화면 예시가 필요하면 `examples/GOOD_EXAMPLES.md`, 실수 방지는 `examples/BAD_EXAMPLES.md`.

해석 우선순위:
- **GitHub의 마크다운·토큰·컴포넌트 코드가 기준이다.**
- **소유권 분기**: `색상 + Button = HL`, `그 외 primitive 구조/크기/상태 = KRDS`.
- 배포 사이트는 **시각·동작 참고용**이다. 문서와 라이브 화면이 다르면 문서를 따른다.
- `Identifier`는 SaaS처럼 푸터 정보가 많거나 복잡한 경우 `footer-out`을 우선하고, 푸터가 간결할 때만 `footer-in`을 사용한다.

---

## 2. 스택 판별 (자동 분기)

작업 대상 저장소를 연 뒤 **아래만으로 분기**한다.

1. **`public/hl-system.css` 또는 빌드 산출물에 `hl-system.css`만 link** 되어 있고 Tailwind가 없음 → **hl-system 전용**
   - 클래스: `.hl-btn`, `.hl-card`, `.hl-table` 등
   - 변수: `var(--hl-*)` 만 사용. `design-tokens.css` 추가 금지.

2. **`tailwind.config.*` 존재** → **Tailwind + 토큰**
   - `tokens/tailwind.preset.js`를 `presets`에 넣고, **`tokens/design-tokens.css`를 반드시 import**.
   - 시맨틱 배경 등은 CSS 변수에 의존하므로 `design-tokens.css` 없으면 다크 모드가 깨질 수 있음.

3. **둘 다 없고 순수 HTML/CSS** → **`tokens/design-tokens.css`만** link, `var(--color-*)`, `var(--font-sans)` 등.

4. **이 저장소(문서 사이트) 내부** → 이미 `hl-system.css` + React. 새 페이지도 동일 패턴·`src/docs.css` 관례 준수.

---

## 3. SaaS 데이터 화면 최소 구조 (매 화면)

에이전트는 데이터 목록·대시보드형 화면을 만들 때 **아래 블록을 기본으로 포함**할 것.

1. **필터/검색** 영역  
2. **KPI 또는 요약** 3~5개  
3. **메인 뷰** (테이블 또는 테이블과 연동된 차트)  
4. **상세** (행 클릭 시 drawer/modal 등, Table First 원칙)

상세 규칙: `docs/DATA_DISPLAY.md`, `CLAUDE.md` 체크리스트.

---

## 4. 작업 완료 시 자가 검증 (응답 전에 내부적으로 확인)

- [ ] 색/간격/폰트에 임의 hex·px 남용 없음 (토큰 또는 `calc(var(--hl-sp-*))` 등)  
- [ ] 데이터 화면이면 Filter → Summary → Main → Detail 순서  
- [ ] 테이블에 가로 스크롤 대응(`overflow-x: auto` 등)  
- [ ] 라이트/다크 모드에서 의미 있는 대비 유지 (`data-theme` 또는 문서된 방식)  
- [ ] 모달/드로어: `role`, `aria-modal`, 포커스·ESC 닫기(패턴 문서 준수)  
- [ ] 아이콘: 이모지·장식 유니코드로 정보 전달하지 않음  

---

## 5. 사용자에게 붙여 넣기 좋은 프롬프트 템플릿

**가장 빠른 방법:** 배포 사이트의 **`/consume` 페이지에서「복사」버튼**으로 동일 내용을 가져온다.

외부 SaaS 프로젝트에서 수동으로 쓸 때는 아래를 복사해 URL만 바꾼다.

```text
HL 디자인 시스템을 따른다.

필수 참조(읽고 구현):
- design-system/CLAUDE.md
- design-system/docs/SEMANTIC_CONTRACT.md
- design-system/docs/PRIMITIVE_CONTRACT.md
- design-system/docs/PRODUCT_ADOPTION_GUIDE.md
- design-system/docs/DATA_DISPLAY.md
- design-system/docs/COMPONENTS.md

스택 규칙:
- 이 프로젝트는 [ hl-system만 / Tailwind+design-tokens / design-tokens만 ] 중 하나다. CLAUDE.md의 "프레임워크 판별 규칙"에 맞게만 import한다. design-tokens.css와 hl-system.css를 동시에 쓰지 않는다.

구현 요구:
- [화면 설명 한 문단]
- 색상과 Button은 HL 기준, 나머지 primitive 구조/크기/상태는 KRDS 기준.
- 데이터 화면이면 Filter → KPI → Main(Table) → Detail 순서.
- 토큰만 사용, compact 밀도, 다크 모드 지원.
```

---

## 6. 한계 (에이전트가 스스로 보장하지 못하는 것)

- 비즈니스 로직, API 스키마, 권한 모델은 이 저장소에 없으므로 **사용자가 명시**해야 한다.  
- 빌드·배포·테스트 실행은 환경에 따라 에이전트가 대신 하지 못할 수 있다.  
- Figma와 1px 일치가 필요하면 `figma-components.js`와 실제 폰트 파일(Pretendard GOV 등)을 별도로 맞출 것.

이 문서는 `CLAUDE.md`와 함께 유지하며, 토큰·폰트 정책이 바뀌면 본 문서의 §0·§2도 같이 수정한다.
