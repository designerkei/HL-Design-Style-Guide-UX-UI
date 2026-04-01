/**
 * Overview > 핵심 원칙 카드 데이터.
 * 항목 추가: { id, icon, title, summary, detail } — detail은 문단 문자열 배열.
 */
export const PRINCIPLES = [
  {
    id: 'tokens',
    icon: 'icon-palette',
    title: '토큰 사용 필수',
    summary: '색상, 폰트, 간격은 반드시 CSS 변수 토큰을 사용합니다. 하드코딩 금지.',
    detail: [
      '디자인 토큰은 `design-tokens.css` 또는 `hl-system.css`의 `--hl-*` 변수를 기준으로 합니다.',
      'Tailwind를 쓰는 프로젝트는 프리셋과 함께 토큰 CSS를 import 해 다크 모드 전환을 맞춥니다.',
      '임의의 hex/rgb, 픽셀 간격을 컴포넌트에 직접 박지 말고 토큰만 참조합니다.',
    ],
  },
  {
    id: 'google-fonts-icons',
    icon: 'icon-globe',
    title: 'Google Fonts 아이콘',
    summary:
      '아이콘은 Google Fonts Icons(https://fonts.google.com/icons) 공식 세트(Material Symbols 등)를 사용합니다.',
    detail: [
      'UI 아이콘은 https://fonts.google.com/icons 에서 제공하는 Google Fonts Icons를 기준으로 합니다. (Material Symbols / Material Icons)',
      '웹폰트, CDN, 또는 패키지로 로드할 때도 동일 출처를 유지하고, 프로젝트마다 다른 아이콘 패밀리를 섞지 않습니다.',
      '이 문서 사이트의 Lucide 예시와 별개로, 사내 앱·서비스의 아이콘 규격은 위 링크의 Google 세트를 따릅니다.',
    ],
  },
  {
    id: 'layout-order',
    icon: 'icon-layout',
    title: '레이아웃 순서',
    summary: 'Filter → Summary → Main → Detail 순서로 화면을 구성합니다.',
    detail: [
      '데이터 화면은 상단에 검색·필터, 그 다음 KPI·요약, 주요 뷰(차트·그리드), 마지막에 상세 테이블 순이 기본입니다.',
      '사용자가 맥락 없이 본문만 보게 되지 않도록 정보 계층을 위에서 아래로 쌓습니다.',
      '예외가 필요하면 문서화된 패턴(대시보드, 모니터링 등)과의 차이를 팀과 합의합니다.',
    ],
  },
  {
    id: 'semantic-color',
    icon: 'icon-alert-circle',
    title: '시맨틱 색상',
    summary: '초록=정상, 노랑=경고, 빨강=에러. 장식용 색상 사용을 금지합니다.',
    detail: [
      '상태 색은 의미가 있을 때만 사용합니다. 브랜드 장식으로 빨강·초록을 섞지 않습니다.',
      '색만으로 정보를 전달하지 말고 텍스트·아이콘·레이블을 함께 둡니다.',
      '경고/에러는 배경 틴트(semantic light)와 테두리·아이콘 조합을 우선합니다.',
    ],
  },
  {
    id: 'compact',
    icon: 'icon-minimize-2',
    title: 'Compact Density',
    summary: '테이블 row 40px, 카드 gap 12px. 정보 밀도를 높여 한 화면에 더 많은 데이터를 표시합니다.',
    detail: [
      '운영 도구는 Hero 섹션이나 과한 여백보다 한 화면에 들어오는 정보 양이 우선입니다.',
      '테이블 행 높이·카드 간격·패딩은 시스템에서 정한 compact 기준을 따릅니다.',
      '가독성이 떨어지면 밀도를 올리기 전에 정보 구조·열 수·필터를 먼저 정리합니다.',
    ],
  },
  {
    id: 'dark-mode',
    icon: 'icon-moon',
    title: '다크 모드 필수',
    summary: '라이트/다크 모드 모두 지원합니다. 관제실, 야간 환경에 대응합니다.',
    detail: [
      '순백·순검정 대신 토큰의 surface·text 계열을 사용해 양 모드에서 대비를 유지합니다.',
      '`data-theme` 또는 시스템 설정에 맞춰 전환 가능하게 구현합니다.',
      '차트·이미지·영역은 다크 모드에서도 구분이 되도록 토큰 또는 테마별 색을 지정합니다.',
    ],
  },
  {
    id: 'table-first',
    icon: 'icon-table',
    title: 'Table First',
    summary: '모든 데이터는 테이블로 표현 가능해야 합니다. 시각화는 테이블의 보조입니다.',
    detail: [
      '차트·그리드만 있고 동일 데이터를 정렬·검색할 수 있는 테이블이 없으면 안 됩니다.',
      '시각화는 요약·트렌드 파악용이고, 확정·감사·보내기는 테이블을 기준으로 합니다.',
      '복잡한 UI도 상세 패널·드로어와 연결된 테이블 행으로 추적 가능하게 만듭니다.',
    ],
  },
  {
    id: 'consistency',
    icon: 'icon-equal',
    title: '통일감 우선',
    summary: '10개의 서로 다른 도구를 열어도 같은 색상, 같은 구조, 같은 밀도가 되도록 하라.',
    detail: [
      '팀·프로젝트가 달라도 버튼·입력·테이블·알림 패턴은 동일한 컴포넌트 규칙을 씁니다.',
      '새 화면은 기존 패턴(필터 바, KPI 행, 카드)을 재사용하고, 예외는 디자인 시스템에 반영할 때만 둡니다.',
      '문서화된 예시(대시보드, 모니터링, CCTV)를 레퍼런스로 삼아 레이아웃을 맞춥니다.',
    ],
  },
];
