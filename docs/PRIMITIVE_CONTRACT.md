# HL Design System — Primitive Contract

이 문서는 primitive 컴포넌트의 표준 소유권과 구현 계약을 정의한다.

## 0. 소유권

- **HL 소유 primitive**: `Button`
- **KRDS 소유 primitive**: Button을 제외한 나머지 primitive 전부

기준:

- HL은 `색상 체계`와 `Button 의미/variant`를 소유한다.
- KRDS는 `anatomy`, `size`, `state`, `slot`, `responsive`의 기본 구조를 소유한다.

## 1. 기준 소스

| 용도 | 기준 |
|------|------|
| KRDS 원본 primitive 구조 | `src/data/figma-components.js` |
| 패키징된 CSS API | `public/hl-system.css` |
| 외부 프로젝트 패턴 예시 | `docs/COMPONENTS.md` |
| 시맨틱 기준 | `docs/SEMANTIC_CONTRACT.md` |

비버튼 primitive에서 충돌이 나면:

1. `KRDS의 구조/크기/상태`를 우선한다.
2. 색상은 KRDS 기본값 대신 `HL semantic/token`으로 매핑한다.

## 2. HL Button Contract

### 2.1 Variants

| Variant | 역할 | 색 기준 |
|---------|------|---------|
| `primary` | 가장 중요한 CTA | `primary-900` fill |
| `secondary` | 보조 액션 | neutral surface + navy text |
| `tertiary` | 최소 강조 액션 | transparent + navy text |
| `danger` | 파괴적 액션 | `error` semantic |

`ghost`는 더 이상 표준 variant 이름이 아니다. 기존 코드 호환을 위해 `tertiary`의 legacy alias로만 유지한다.

### 2.2 Sizes

| 이름 | alias | 높이 |
|------|-------|------|
| `xsmall` | `xs` | 24px |
| `small` | `sm` | 32px |
| `medium` | `md` | 40px |
| `large` | `lg` | 48px |
| `xlarge` | `xl` | 56px |

### 2.3 States

- `default`
- `hover`
- `pressed`
- `disabled`

### 2.4 Anatomy

- leading icon: 선택
- label: 필수
- trailing icon: 선택
- 멀티라인 라벨 금지
- 아이콘만 있는 버튼은 `Icon Button` primitive로 분리한다

### 2.5 Accessibility

- 기본은 `<button>` 사용
- 아이콘 전용 버튼은 `aria-label` 필수
- `disabled` 또는 `aria-disabled`로 상태를 명시
- 키보드 포커스 링 유지

## 3. KRDS-Owned Primitive Families

아래 primitive는 **KRDS 원본값을 표준**으로 삼는다.

| Family | KRDS 기준 |
|--------|-----------|
| Text Field / Textarea / Search / Helper Text | size, state, field anatomy |
| Checkbox / Radio / Toggle / Dropdown / Sorting | control size, value state, interaction state |
| Card / Table / Pagination / Progress | density, row height, layout anatomy |
| Modal / Drawer / Tooltip / Popover / Toast / Alert | overlay structure, slot order, state |
| Tabs / Breadcrumb / Navigation / Identity shell | navigation hierarchy, selected state, responsive behavior |

구현 규칙:

- 구조는 KRDS를 따른다.
- 색상은 HL token으로 교체한다.
- 제품 전용 변형을 만들기 전에 KRDS 기본 variant/state 이름을 먼저 유지한다.

## 4. 현재 표준화 원칙

- Button만 HL 기준으로 재정의한다.
- 그 외 primitive는 `KRDS 이름 → HL 색상` 매핑 방식으로 간다.
- 새 primitive를 추가할 때 먼저 `KRDS에 같은 family가 있는지` 확인한다.
- 없다면 primitive를 바로 늘리지 말고 pattern 또는 domain component로 분류한다.

## 5. 구현 체크리스트

primitive를 코드로 추가하거나 수정할 때 아래를 반드시 채운다.

- variant
- size
- state
- slot / anatomy
- focus / disabled / keyboard 접근성
- light / dark token 적용
- responsive 규칙
- KRDS 원본 참조 위치