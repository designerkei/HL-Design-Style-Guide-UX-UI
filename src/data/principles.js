export const PRINCIPLES = [
  {
    id: 'tokens',
    icon: 'icon-palette',
    title: {
      ko: '토큰 사용 필수',
      en: 'Token-First Styling',
    },
    summary: {
      ko: '색상, 폰트, 간격은 반드시 CSS 변수 토큰을 사용합니다. 하드코딩은 금지합니다.',
      en: 'Use CSS token variables for color, typography, and spacing. Avoid hard-coded values.',
    },
    detail: {
      ko: [
        '디자인 토큰은 `design-tokens.css` 또는 `hl-system.css`의 `--hl-*` 변수를 기준으로 합니다.',
        '프로젝트마다 임의의 hex, rgb, 픽셀 값을 직접 입력하지 말고 시스템 토큰만 참조합니다.',
        '모서리 반경(radius)은 Shape 기준 스케일을 사용합니다: `4px / 6px / 8px / 10px / 12px`(Large까지), 원형은 `9999px`(full)로 통일합니다.',
        '고도(Elevation)는 그림자 토큰(`--hl-shadow-1` ~ `--hl-shadow-4`)으로만 표현합니다. 카드/모달/패널 등 “레이어 분리” 목적에만 사용하고, 임의의 box-shadow를 추가하지 않습니다.',
        '다크 모드에서도 그림자 레벨은 토큰 값이 자동으로 맞춰지므로(서로 다른 색/투명도), 동일한 레벨(1~4)을 일관되게 재사용합니다.',
        '다크 모드와 테마 전환도 토큰 기반으로 맞춰야 전체 UI가 일관되게 유지됩니다.',
      ],
      en: [
        'Design tokens should be based on the `--hl-*` variables defined in `design-tokens.css` or `hl-system.css`.',
        'Do not hard-code arbitrary hex, rgb, or pixel values in product code. Reference system tokens only.',
        'Use the Shape radius scale for corners: `4px / 6px / 8px / 10px / 12px` (up to large), and use `9999px` for fully rounded (full) shapes.',
        'Elevation (shadow) must be represented only with shadow tokens (`--hl-shadow-1` to `--hl-shadow-4`). Use it for “layer separation” (cards/modals/panels) and do not add arbitrary `box-shadow` values.',
        'In dark mode, shadow appearance is handled by the token values, so keep using the same shadow levels (1~4) consistently.',
        'Dark mode and theme switching should also be token-driven so the full UI stays consistent.',
      ],
    },
  },
  {
    id: 'language-typography',
    icon: 'icon-type',
    title: {
      ko: '언어별 타이포그래피',
      en: 'Language-Aware Typography',
    },
    summary: {
      ko: '한국어는 Noto Sans KR, 영어는 Roboto, 숫자와 코드에는 Roboto Mono를 전역 토큰으로 사용합니다.',
      en: 'Use Noto Sans KR for Korean, Roboto for English, and Roboto Mono for numbers and code through global tokens.',
    },
    detail: {
      ko: [
        '폰트 선택은 컴포넌트 내부에서 따로 처리하지 않고 전역 토큰으로 제어합니다.',
        '한국어 모드는 `Noto Sans KR`, 영어 모드는 `Roboto`, 숫자와 코드 영역은 `Roboto Mono`를 기본으로 합니다.',
        '모든 텍스트는 Typography 페이지의 타입 스케일을 따릅니다: `3xl(36px/700)`, `2xl(28px/700)`, `xl(22px/600)`, `lg(18px/600)`, `md(16px/400)`, `base(14px/400)`, `sm(13px/400)`, `xs(11px/500)`.',
        'Line-height는 토큰 기준(예: `--leading-tight(1.25)`, `--leading-snug(1.375)`, `--leading-normal(1.5)`, `--leading-relaxed(1.625)`)으로 통일하고, 글자마다 임의로 수정하지 않습니다.',
        '임의의 `font-size`, `letter-spacing`, `line-height`를 직접 지정하기보다 `--hl-text-*` 및 leading 토큰을 재사용합니다.',
        '새 제품도 같은 폰트 토큰 구조를 따라야 여러 화면과 서비스 사이의 타이포 감각이 유지됩니다.',
      ],
      en: [
        'Font selection should be controlled by global tokens rather than per-component overrides.',
        'Korean mode should default to `Noto Sans KR`, English mode to `Roboto`, and numeric or code-heavy areas to `Roboto Mono`.',
        'All text should follow the Typography type scale: `3xl(36px/700)`, `2xl(28px/700)`, `xl(22px/600)`, `lg(18px/600)`, `md(16px/400)`, `base(14px/400)`, `sm(13px/500)`, `xs(11px/500)`.',
        'Line-height should be unified using leading tokens (e.g., `--leading-tight(1.25)`, `--leading-snug(1.375)`, `--leading-normal(1.5)`, `--leading-relaxed(1.625)`), not adjusted per element.',
        'Prefer reusing `--hl-text-*` and leading tokens instead of hard-coding arbitrary `font-size`, `letter-spacing`, or `line-height` values.',
        'New products should preserve the same font-token structure so typography feels consistent across screens and services.',
      ],
    },
  },
  {
    id: 'icon-system',
    icon: 'icon-image',
    title: {
      ko: '아이콘 시스템 기준',
      en: 'Icon System Standard',
    },
    summary: {
      ko: '아이콘 규격은 공통으로 유지하되, 실제 제품에는 로컬 SVG를 기본 적용합니다.',
      en: 'Keep a shared icon standard, but use local SVG assets as the default delivery format in products.',
    },
    detail: {
      ko: [
        '문서와 제품은 같은 아이콘 의미 체계를 공유해야 하며, 프로젝트마다 서로 다른 아이콘 패밀리를 섞지 않습니다.',
        '실제 제품에는 외부 아이콘 폰트 CDN보다 로컬 SVG를 우선 적용해 네트워크 실패와 레이아웃 붕괴를 줄입니다.',
        '공식 아이콘 세트를 레퍼런스로 삼더라도 배포물은 제품 안에서 안정적으로 관리되는 형태여야 합니다.',
        '시스템 아이콘은 24px을 기준으로 하며, 주요 사용 크기는 12px / 16px / 20px / 24px / 32px / 40px입니다.',
        '아이콘은 텍스트(라인높이)와 수직 정렬을 맞추고, 의미가 없는 장식 아이콘은 접근성에서 숨김 처리(예: `aria-hidden`)합니다.',
        '아이콘 색상은 임의로 바꾸지 않고 현재 상태/의미에 맞는 텍스트/시맨틱 컬러(`currentColor`, semantic tokens)를 따라갑니다.',
      ],
      en: [
        'Documentation and products should share the same icon semantics, and teams should not mix unrelated icon families.',
        'In production, prefer local SVG assets over external icon-font CDNs to reduce network failures and layout regressions.',
        'Even when you use an official icon set as the reference, shipped assets should be managed in a stable product-owned format.',
        'System icons use a 24px baseline, with primary usage sizes: 12px / 16px / 20px / 24px / 32px / 40px.',
        'Align icons vertically with the text line-height, and hide purely decorative icons from accessibility (e.g., `aria-hidden`).',
        'Icon color should follow the semantic meaning (use `currentColor` / semantic tokens) rather than arbitrary color overrides.',
      ],
    },
  },
  {
    id: 'layout-order',
    icon: 'icon-layout',
    title: {
      ko: '레이아웃 순서',
      en: 'Layout Order',
    },
    summary: {
      ko: 'Filter → Summary → Main → Detail 순서로 화면을 구성합니다.',
      en: 'Structure pages in the order of Filter → Summary → Main → Detail.',
    },
    detail: {
      ko: [
        '데이터 화면은 상단의 검색·필터, 그 아래 KPI·요약, 주요 뷰, 마지막 상세 테이블 순이 기본입니다.',
        '정보 계층은 위에서 아래로 자연스럽게 쌓이도록 설계해야 합니다.',
        '예외가 필요하면 기존 패턴과의 차이를 문서화하고 팀과 합의합니다.',
        '레이아웃 간격(gap) / 내부 여백(padding)은 Layout(레이아웃) 이미지 스케일을 기준으로, 개발에서는 아래 spacing 토큰에 “대응”합니다.',
        'gap: 2px(토큰 없음 → `calc(var(--hl-sp-1) / 2)`), 4px=--hl-sp-1, 8px=--hl-sp-2, 12px=--hl-sp-3, 14px=가장 가까운 --hl-sp-3(12px) 또는 --hl-sp-4(16px), 20px=--hl-sp-5, 24px=--hl-sp-6, 32px=--hl-sp-8, 40px=--hl-sp-10, 48px=--hl-sp-12, 56px=`calc(var(--hl-sp-12) + var(--hl-sp-2))`, 64px=`calc(var(--hl-sp-12) + var(--hl-sp-4))`.',
        'padding: 2px(토큰 없음 → `calc(var(--hl-sp-1) / 2)`), 4px=--hl-sp-1, 8px=--hl-sp-2, 11px=가장 가까운 --hl-sp-3(12px), 12px=--hl-sp-3, 14px=가장 가까운 --hl-sp-3(12px) 또는 --hl-sp-4(16px), 20px=--hl-sp-5, 24px=--hl-sp-6, 32px=--hl-sp-8, 52px=`calc(var(--hl-sp-12) + var(--hl-sp-1))`.',
        '개발에서는 위 px를 직접 하드코딩하지 말고 `--hl-sp-*` 또는 `calc()` 조합으로 “동일한 스케일”을 재현합니다.',
      ],
      en: [
        'Data pages should normally place search and filters first, followed by KPI summaries, the main view, and detail tables.',
        'Information hierarchy should build naturally from top to bottom.',
        'If you need an exception, document the difference from the standard pattern and align with the team.',
        'Use the Layout (gap/padding) image scale and reproduce it in code via the following spacing tokens.',
        'gap: 2px (no direct token → `calc(var(--hl-sp-1) / 2)`), 4px=--hl-sp-1, 8px=--hl-sp-2, 12px=--hl-sp-3, 14px=closest --hl-sp-3(12px) or --hl-sp-4(16px), 20px=--hl-sp-5, 24px=--hl-sp-6, 32px=--hl-sp-8, 40px=--hl-sp-10, 48px=--hl-sp-12, 56px=`calc(var(--hl-sp-12) + var(--hl-sp-2))`, 64px=`calc(var(--hl-sp-12) + var(--hl-sp-4))`.',
        'padding: 2px (no direct token → `calc(var(--hl-sp-1) / 2)`), 4px=--hl-sp-1, 8px=--hl-sp-2, 11px=closest --hl-sp-3(12px), 12px=--hl-sp-3, 14px=closest --hl-sp-3(12px) or --hl-sp-4(16px), 20px=--hl-sp-5, 24px=--hl-sp-6, 32px=--hl-sp-8, 52px=`calc(var(--hl-sp-12) + var(--hl-sp-1))`.',
        'In code, do not hard-code px directly; use `--hl-sp-*` or `calc()` combinations to keep the same spacing scale.',
      ],
    },
  },
  {
    id: 'semantic-color',
    icon: 'icon-alert-circle',
    title: {
      ko: '시맨틱 색상',
      en: 'Semantic Color Usage',
    },
    summary: {
      ko: '초록은 정상, 노랑은 경고, 빨강은 에러에만 사용합니다. 장식용 상태 색상은 금지합니다.',
      en: 'Green means success, yellow means warning, and red means error. Do not use status colors decoratively.',
    },
    detail: {
      ko: [
        '상태 색상은 의미가 있을 때만 사용해야 하며 브랜드 장식으로 사용하지 않습니다.',
        '색상만으로 정보를 전달하지 말고 텍스트, 아이콘, 레이블을 함께 제공합니다.',
        '경고와 에러는 틴트 배경과 테두리, 아이콘 조합을 우선합니다.',
      ],
      en: [
        'Status colors should only be used when they communicate meaning, not for brand decoration.',
        'Never rely on color alone. Pair it with text, icons, or labels.',
        'Warnings and errors should prioritize tinted surfaces, borders, and icon combinations.',
      ],
    },
  },
  {
    id: 'compact',
    icon: 'icon-minimize-2',
    title: {
      ko: 'Compact Density',
      en: 'Compact Density',
    },
    summary: {
      ko: '정보 밀도를 높여 한 화면에 더 많은 운영 데이터를 담습니다.',
      en: 'Increase information density so each screen can carry more operational data.',
    },
    detail: {
      ko: [
        '운영 도구는 과한 여백보다 한 화면에 들어오는 정보량이 우선입니다.',
        '테이블 행 높이, 카드 간격, 패딩은 시스템의 compact 기준을 따릅니다.',
        '가독성이 떨어지면 밀도만 올리지 말고 정보 구조와 필터 설계를 먼저 정리합니다.',
      ],
      en: [
        'Operations tools should prioritize usable information per screen over excessive empty space.',
        'Table row height, card gaps, and padding should follow the system compact standard.',
        'If readability drops, fix structure and filtering before simply packing more density in.',
      ],
    },
  },
  {
    id: 'dark-mode',
    icon: 'icon-moon',
    title: {
      ko: '다크 모드 필수',
      en: 'Dark Mode Required',
    },
    summary: {
      ko: '라이트와 다크 모드를 모두 지원해 관제실과 야간 환경에 대응합니다.',
      en: 'Support both light and dark mode so the UI works in control rooms and night environments.',
    },
    detail: {
      ko: [
        '순백과 순검정보다 토큰 기반 surface·text 체계를 사용해 양 모드의 대비를 유지합니다.',
        '`data-theme` 또는 시스템 설정과 연동해 모드를 전환할 수 있어야 합니다.',
        '차트와 이미지도 다크 모드에서 충분히 구분되도록 별도 색상 전략이 필요합니다.',
      ],
      en: [
        'Use token-based surface and text scales instead of pure black and white so contrast holds in both modes.',
        'Mode switching should work with `data-theme` or the system preference.',
        'Charts and visual media also need explicit dark-mode color handling so they stay readable.',
      ],
    },
  },
  {
    id: 'table-first',
    icon: 'icon-table',
    title: {
      ko: 'Table First',
      en: 'Table First',
    },
    summary: {
      ko: '모든 데이터는 테이블로 표현 가능해야 하며, 시각화는 그 보조 역할을 합니다.',
      en: 'Every dataset should be representable as a table, while visualization plays a supporting role.',
    },
    detail: {
      ko: [
        '차트나 그리드가 있어도 동일 데이터를 정렬·검색할 수 있는 테이블이 함께 있어야 합니다.',
        '시각화는 추세와 요약 파악용이고, 확정값과 운영 판단은 테이블 중심으로 봅니다.',
        '복잡한 UI도 상세 패널과 연결된 테이블 단위로 추적 가능해야 합니다.',
      ],
      en: [
        'Even when charts or grids are present, the same data should also be available in a sortable and searchable table.',
        'Visualization is for trend reading and summarization, while operational decisions should be grounded in table data.',
        'Even complex interfaces should remain traceable through a concrete table-level representation.',
      ],
    },
  },
  {
    id: 'reference-implementation',
    icon: 'icon-copy',
    title: {
      ko: '문서 = 제품 레퍼런스',
      en: 'Docs as Product Reference',
    },
    summary: {
      ko: '문서 예제는 데모가 아니라 실제 제품이 복사해 쓸 수 있는 레퍼런스 구현이어야 합니다.',
      en: 'Documentation examples should act as copy-ready product references, not throwaway demos.',
    },
    detail: {
      ko: [
        '스타일 가이드 예제는 보기 좋은 샘플이 아니라 실제 제품 화면에 옮겨도 되는 구조를 우선합니다.',
        '컴포넌트 이름, 상태 이름, 마크업 구조는 제품 코드에서 오래 버틸 수준으로 유지합니다.',
        '문서용 장식과 제품용 기준이 다르면 팀이 참고할 기준이 흔들리므로 둘을 분리하지 않습니다.',
      ],
      en: [
        'Style-guide examples should prioritize structures that can be moved into real product screens, not decorative samples.',
        'Component names, state names, and markup patterns should be stable enough for long-term product code.',
        'If documentation visuals diverge from product standards, the system loses authority, so keep them aligned.',
      ],
    },
  },
  {
    id: 'consistency',
    icon: 'icon-equal',
    title: {
      ko: '통일감 우선',
      en: 'Consistency First',
    },
    summary: {
      ko: '여러 도구를 오가더라도 같은 구조, 같은 색상, 같은 밀도를 유지해야 합니다.',
      en: 'Different tools should still feel structurally and visually consistent in layout, color, and density.',
    },
    detail: {
      ko: [
        '팀과 프로젝트가 달라도 버튼, 입력, 테이블, 알림 패턴은 동일한 규칙을 따릅니다.',
        '새 화면은 기존 패턴을 재사용하고, 예외는 디자인 시스템에 반영할 때만 허용합니다.',
        '대시보드, 모니터링, CCTV 같은 문서화된 예시를 레퍼런스로 삼습니다.',
      ],
      en: [
        'Even across teams and projects, buttons, inputs, tables, and alerts should follow the same rules.',
        'New screens should reuse existing patterns, and exceptions should only be allowed once absorbed back into the design system.',
        'Use documented examples such as dashboard, monitoring, and CCTV as layout references.',
      ],
    },
  },
];
