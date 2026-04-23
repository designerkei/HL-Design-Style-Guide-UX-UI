# HL Design System — Semantic Contract

이 문서는 HL 디자인 시스템의 시맨틱 기준을 고정하는 계약서다.

## 0. 소유권

- **HL 표준**: 색상 시스템 전체, 버튼의 의미와 색상 규칙
- **KRDS 표준**: 버튼을 제외한 primitive의 구조, 크기, 상태, 슬롯, 반응형 규칙
- **배포 사이트**: 시각·동작 참고용. 기준 충돌 시 GitHub 문서를 따른다.

요약:

- `색상 + Button = HL`
- `그 외 primitive anatomy/size/state = KRDS`

## 1. 기준 파일

색상 변경 시 아래 4개가 동시에 맞아야 한다.

- `public/hl-system.css`
- `tokens/design-tokens.css`
- `tokens/tailwind.preset.js`
- `src/pages/Foundations.jsx`

## 2. HL Primary Palette

| Step | Value | 역할 |
|------|-------|------|
| 50 | `#eef8fc` | 선택 배경, 정보성 tint |
| 100 | `#d5eef9` | 약한 보조 배경 |
| 200 | `#a8ddf3` | secondary/tertiary hover 보조 |
| 300 | `#6bc5ea` | 강조 보더, focus 보조 |
| 400 | `#30ade0` | 다크 모드 강조 |
| 500 | `#00B4ED` | HL Sky Blue, accent / info / focus |
| 600 | `#0095c8` | 정보성 강조, 선택 상태 |
| 700 | `#00729a` | 링크, 강한 텍스트 강조 |
| 800 | `#005474` | 강한 액션 hover, tertiary text |
| 900 | `#002B68` | HL Navy, primary CTA fill |

운용 규칙:

- `primary-900`은 **주요 CTA**와 강한 브랜드 액션에 쓴다.
- `primary-500`은 **accent / info / focus**에 쓴다.
- 임의의 다른 파랑 계열을 추가하지 않는다.

## 3. HL Neutral Palette

| Step | Value |
|------|-------|
| 50 | `#f5f6f8` |
| 100 | `#eaecf0` |
| 150 | `#dfe1e6` |
| 200 | `#d2d5db` |
| 300 | `#b3b8c2` |
| 400 | `#8b919e` |
| 500 | `#6b7280` |
| 600 | `#4b5563` |
| 700 | `#374151` |
| 800 | `#1f2937` |
| 900 | `#111827` |
| 950 | `#0a0f1a` |

## 4. Semantic Roles

| Role | Text / Stroke | Tint / Bg | 의미 |
|------|----------------|-----------|------|
| success | `#18864b` | `#e8f5ee` | 정상, 완료, 가동 |
| warning | `#b88b17` | `#fdf6e3` | 주의, 점검 필요 |
| error | `#c9302c` | `#fce8e8` | 오류, 위험, 정지 |
| info | `#0095c8` | `#eef8fc` | 정보, 안내, 업데이트 |

운용 규칙:

- 상태 색상은 의미가 있을 때만 쓴다.
- 상태는 색만으로 전달하지 않고 텍스트, 아이콘, 레이블을 병기한다.
- danger는 브랜드 색이 아니라 `error` semantic으로 취급한다.

## 5. Surface / Text Roles

- `surface`, `surface-raised`, `surface-sunken`, `bg`, `border`는 레이어 깊이 기준으로만 사용한다.
- `text`, `text-secondary`, `text-muted`, `text-disabled`는 정보 위계 기준으로만 사용한다.
- 순백 / 순검정 직접 하드코딩 대신 토큰을 사용한다.

## 6. Theme

- 라이트/다크 모드는 토큰 전환으로만 처리한다.
- semantic 배경색도 다크 모드에서 별도 tint를 가진다.
- 컴포넌트 구현 시 색상 분기보다 토큰 분기를 우선한다.

## 7. Button 예외 규칙

- 버튼은 KRDS 기본 색이 아니라 **HL 버튼 규칙**을 따른다.
- 구조와 상태명은 KRDS와 최대한 정합을 맞추되, **색의 해석은 HL 기준**으로 재정의한다.
- Primary CTA는 `HL Navy`, focus / info / 선택은 `HL Sky Blue`를 기준으로 쓴다.

## 8. 변경 체크리스트

- 색상값을 바꿀 때 `hl-system.css`, `design-tokens.css`, `tailwind.preset.js`, Foundations 페이지를 같이 바꿨는가
- semantic role의 의미를 같이 바꾸지 않았는가
- 버튼 색상과 일반 info/accent 색상을 혼동하지 않았는가