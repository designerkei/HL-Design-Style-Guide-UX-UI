# 일관성 유지 · 자동 준수 (AI / 점검 스크립트)

## 목적

제품 코드에서 스타일 가이드를 **사람이 화면마다 짚어 주지 않아도** 최대한 지키게 하려면, 문서(토큰·컴포넌트)만으로는 부족하고 아래가 같이 있어야 한다.

1. **기계적으로 검사 가능한 규칙** (이모지·임의 유니코드 심볼 등)
2. **에이전트/IDE에 항상 주입되는 지시** (Cursor Rules, CLAUDE.md 보강 등)
3. (선택) **CI에서 `--strict` 실패**로 회귀 방지

이 문서는 [PRODUCT_ADOPTION_GUIDE.md](./PRODUCT_ADOPTION_GUIDE.md)의 기술 기준과 **모순 없이** 연결된다.

---

## 0. AI 기준 문서 우선순위

GitHub 저장소와 배포 사이트 링크만으로 AI가 구현할 때는 아래 순서를 고정한다.

1. `AGENTS.md`
2. `CLAUDE.md`
3. `docs/PRODUCT_ADOPTION_GUIDE.md`
4. `docs/DATA_DISPLAY.md`
5. `docs/COMPONENTS.md`
6. `docs/CONSISTENCY_AND_AUTOMATION.md`
7. `src/data/figma-components.js`
8. `src/data/principles.js`

- 배포 사이트는 **시각·동작 참고용**이다.
- GitHub 문서와 라이브 화면이 다르면 **GitHub 문서가 기준**이다.
- 문서 제목, 컴포넌트 이름, 상태 이름, 프롬프트 문구는 AI가 그대로 읽으므로 **안정적인 의미 이름**을 유지한다.

---

## 1. UI에서 이모지·장식용 유니코드 심볼 지양

- 화면 라벨·버튼·리스트에 `🔋` `⚙️` `✕` `✓` `⚠️` 등 **픽토그램/이모지**를 직접 넣지 않는다.
- 이유: OS·폰트마다 렌더가 달라지고, 접근성·검색·자동 번역·디자인 일관성이 깨지기 쉽다.
- 대신 **하나의 아이콘 체계**만 쓴다 (아래 2절).

점검 아이디어: `src/**/*.tsx` 등에서 위 범위의 코드 포인트를 정규식으로 찾아 목록을 뽑는 스크립트를 둔다. (제품별로 경로만 조정)

---

## 2. 아이콘 체계: 두 가지 허용 경로 (택일)

[PRODUCT_ADOPTION_GUIDE.md](./PRODUCT_ADOPTION_GUIDE.md) **§4, §아이콘 전략**에 따르면 **장기 기준은 로컬 SVG**다.

동시에, 이 저장소의 **`public/hl-system.css`는 Google Fonts로 Material Symbols Outlined를 로드**한다. 따라서 다음을 **명시적으로 허용**한다.

| 경로 | 언제 | 요구사항 |
|------|------|----------|
| **A. 로컬 SVG** | 배포 안정성·번들 통제가 최우선일 때 | 공통 `Icon` 컴포넌트 또는 sprite / assets. PRODUCT_ADOPTION_GUIDE 권장안. |
| **B. Material Symbols (`hl-system.css` 스택)** | `hl-system.css` 또는 동일 토큰/타이포 스택을 쓰는 제품 | **가이드와 동일한 폰트 로드 방식**을 쓴다. 아이콘 이름은 [Google Fonts Icons](https://fonts.google.com/icons)와 동일(예: `battery_full`, `expand_more`, `close`). |

- **B를 쓰는 프로젝트**는 문서 사이트와 **같은 Material ligature 문자열**을 쓰면 시각적 일관성이 유지된다.
- **A로 통일할 계획**이면, 마일스톤 문서에 “Material → SVG 전환”을 적어 두고, 전환 후 B 경로는 제거한다.

`.material-symbols-outlined` 베이스 스타일은 `hl-system.css`에 정의되어 있다. 제품에서 복사 시 해당 블록을 함께 유지한다.

---

## 3. 폰트 로딩 (`hl-system.css` 스택을 쓸 때)

- `hl-system.css` 상단과 **동일한** 폰트 로드 구성을 사용한다: jsDelivr `Pretendard Variable`, Google Fonts `Geist Mono` + `Material Symbols Outlined` (`@import` 순서 유지).
- 제품에서는 `cdn.jsdelivr.net`·`fonts.googleapis.com`에 `preconnect`를 두고, 동일 `@import`를 `hl-system.css` 한 곳에서만 로드해 중복을 피한다.

---

## 4. 에이전트 규칙 템플릿 (Cursor 등)

제품 저장소 `.cursor/rules/` 등에 아래 취지를 넣는다. (프로젝트 경로·스크립트 이름은 실제에 맞게 수정)

```markdown
---
description: HL 디자인 시스템 — UI 구현 시 자동 준수
globs: "**/*.{tsx,ts,css}"
alwaysApply: true
---

- UI에 이모지·장식 유니코드 심볼을 넣지 않는다. 아이콘은 (1) 로컬 SVG 체계 또는 (2) hl-system과 동일한 Material Symbols.
- hl-system 스택 사용 시: 폰트·아이콘 로드는 가이드 `hl-system.css` 상단 `@import`와 동일 구성 (Pretendard Variable + Geist Mono + Material Symbols).
- 색·간격은 토큰(`var(--…)`, `hl-*`) 우선. 불필요한 인라인 hex 추가 금지.
- 컴포넌트는 가능하면 가이드의 `hl-btn`, `hl-card`, `hl-input`, `hl-modal*` 패턴에 맞춘다.
```

상위 저장소의 `CLAUDE.md`에는 “제품 작업 시 `docs/CONSISTENCY_AND_AUTOMATION.md` 준수” 한 줄을 추가하는 것을 권장한다.

또한 소비 프로젝트의 프롬프트나 AGENTS 문서에는 아래 두 줄을 그대로 넣는 것을 권장한다.

```markdown
- GitHub 문서와 토큰 파일을 구현 기준으로 삼고, 배포 사이트는 시각·동작 참고용으로만 사용한다.
- SaaS처럼 푸터 정보가 많은 화면에서는 Identifier를 `footer-out`으로 선택한다.
```

---

## 5. 정적 점검 스크립트 (예시 개념)

- 입력: `src/**/*.tsx` (및 `.ts`, 제외: `node_modules`, `dist`)
- 규칙: 주석이 아닌 줄에서 이모지/픽토그램/일부 Dingbats 범위 유니코드 검출
- 출력: `파일:줄` 목록
- 모드: 기본은 목록만 출력(exit 0), CI에서는 `--strict`로 exit 1

구체 구현은 제품마다 다르므로 이 저장소에는 **스펙만** 두고, 참고 구현은 제품 레포의 `scripts/`에 둔다.

---

## 6. 이 저장소와의 관계

- **단일 출처**: 토큰·컴포넌트·패턴은 계속 이 GitHub 저장소([HL-Design-Style-Guide-UX-UI](https://github.com/designerkei/HL-Design-Style-Guide-UX-UI))가 기준이다.
- **본 문서**: “제품이 그 기준을 **빠지지 않게** 쓰는 운영 방법”을 보강한다.
- **충돌 시**: [PRODUCT_ADOPTION_GUIDE.md](./PRODUCT_ADOPTION_GUIDE.md)의 장기 방향(SVG 우선)이 우선이되, **당장 `hl-system.css`를 쓰는 제품**은 §2의 경로 B로 일관되게 가져간다.

---

## 변경 이력 제안

이 파일을 추가·수정할 때는 PR 설명에 **어떤 제품에서 어떤 점검을 돌렸는지** 한 줄이라도 적어 두면, 가이드가 현장과 동기화되기 쉽다.
