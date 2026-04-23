/**
 * KRDS v1.0.0 Figma 컴포넌트 레퍼런스 (MCP로 학습한 데이터)
 *
 * 이 파일은 Figma 파일(KRDS_v1.0.0 Community)의 "📒 Component (컴포넌트)" 페이지에서
 * MCP(Talk to Figma)를 통해 추출한 프레임 구조·컴포넌트 목록·주요 치수를 정리한 것입니다.
 *
 * 용도:
 *   - AI가 스타일가이드 페이지를 만들 때 이 파일의 구조/치수를 참조
 *   - 새 컴포넌트를 구현할 때 Figma 원본과 대조하는 레퍼런스
 *
 * 구조: 9개 카테고리 프레임 → 각 프레임의 주요 컴포넌트 → 핵심 치수/폰트/상태
 */

export const FIGMA_COMPONENT_REF = {
  source: 'KRDS_v1.0.0 (Community)',
  figmaPage: '📒 Component (컴포넌트)',
  totalComponents: 935,
  contentWidth: 1200,
  horizontalPadding: 40,
  baseFont: { family: 'Pretendard GOV', weight: 'Regular', size: 15 },
  labelFont: { family: 'Pretendard', weight: 'Bold', size: 17 },

  /**
   * 📍 Getting Started (시작하기) 페이지에서 추출한 온보딩 가이드 구조.
   * 스타일가이드 "시작하기" 페이지를 구성할 때 이 구조를 참조합니다.
   */
  gettingStarted: {
    libraryStart: {
      title: '라이브러리 시작하기 (Figma)',
      description: 'KRDS 디자인 에셋에는 스타일, 변수, 컴포넌트 및 패턴이 포함되어 있어 자체 디자인 시스템이 없더라도 디자인을 시작할 수 있다.',
      sections: [
        {
          title: '파일 구성 살펴보기',
          description: '좌측 사이드 바에서 페이지 구성을 살펴본다. KRDS는 스타일 가이드, 컴포넌트, 패턴(기본 패턴, 서비스 패턴), 아이콘으로 구성되어 있다.',
          items: [
            { number: 1, label: '에셋 탐색', detail: '컴포넌트 검색 기능' },
            { number: 2, label: '페이지 구성', detail: '스타일 가이드, 컴포넌트, 패턴, 아이콘' },
            { number: 3, label: '로컬 베리어블', detail: '토큰 구조 확인' },
            { number: 4, label: '로컬 스타일', detail: '텍스트 스타일, 색상 스타일(그라데이션), 효과 스타일(그림자)' },
          ],
          pages: ['📍 Getting started', '🎨 Design style', '📒 Component', '📚 Pattern'],
          rightPanel: ['Local variables', 'Local styles', 'Text styles', 'Color styles', 'Effect styles'],
        },
        {
          title: '디자인 에셋 사용',
          subsections: [
            { title: '탐색', detail: 'asset 탭에서 필요한 컴포넌트를 검색하여 캔버스에 배치. 대표 컴포넌트만 노출되며 관련 페이지에서 모든 변형을 확인할 수 있다.' },
            { title: '변형', detail: '우측 사이드 바에서 Type, Size, State, Label, Icon 등의 속성 변경 가능.' },
          ],
        },
        {
          title: '라이브러리 게시 및 추가',
          subsections: [
            { title: '파일 게시', detail: '에셋 탭 > 라이브러리 아이콘 > Publish 버튼으로 게시.' },
            { title: '라이브러리에 추가', detail: '에셋 탭 > 라이브러리 아이콘 > Add to file 버튼으로 다른 파일에 추가.' },
          ],
        },
      ],
    },
    tokenUsage: {
      title: '토큰 사용하기',
      description: 'Figma Variable의 구성과 스타일 요소의 토큰을 사용하는 방법.',
      variableCollections: [
        { name: 'primitive', role: '원시값(color, number 등). UI에 직접 적용하지 않고 다른 컬렉션에서 참조되는 기준 값.' },
        { name: 'semantic', role: 'primitive에 의미를 부여한 토큰. 실제 UI에서 사용되는 변수 값.' },
        { name: 'mode', role: '라이트/다크 모드 전환용 토큰.' },
        { name: 'responsive', role: '반응형 대응용 토큰.' },
      ],
      corePrinciple: 'primitive token의 value를 변경하면 모든 관련 스타일이 자동 업데이트되어 시스템 전반에서 일관된 스타일을 유지하고 유지보수를 간편하게 할 수 있다.',
    },
  },

  /**
   * Figma 문서 스타일(get_styles)에서 추출한 공식 디자인 토큰.
   * 이전에 이미지로 학습한 값과 비교·최신화한 결과입니다.
   */
  styles: {
    typography: {
      display: [
        { name: 'display/large',  family: 'Pretendard', weight: 'Bold', size: 60 },
        { name: 'display/medium', family: 'Pretendard', weight: 'Bold', size: 44 },
        { name: 'display/small',  family: 'Pretendard', weight: 'Bold', size: 36 },
      ],
      heading: [
        { name: 'heading/xlarge',  family: 'Pretendard', weight: 'Bold', size: 40 },
        { name: 'heading/large',   family: 'Pretendard', weight: 'Bold', size: 32 },
        { name: 'heading/medium',  family: 'Pretendard', weight: 'Bold', size: 24 },
        { name: 'heading/small',   family: 'Pretendard', weight: 'Bold', size: 19 },
        { name: 'heading/xsmall',  family: 'Pretendard', weight: 'Bold', size: 17 },
        { name: 'heading/xxsmall', family: 'Pretendard', weight: 'Bold', size: 15 },
      ],
      body: [
        { name: 'body/large',       family: 'Pretendard GOV', weight: 'Regular', size: 19 },
        { name: 'body/medium',      family: 'Pretendard GOV', weight: 'Regular', size: 17 },
        { name: 'body/small',       family: 'Pretendard GOV', weight: 'Regular', size: 15 },
        { name: 'body/xsmall',      family: 'Pretendard GOV', weight: 'Regular', size: 13 },
        { name: 'body/large-bold',  family: 'Pretendard',     weight: 'Bold',    size: 19 },
        { name: 'body/medium-bold', family: 'Pretendard',     weight: 'Bold',    size: 17 },
        { name: 'body/small-bold',  family: 'Pretendard',     weight: 'Bold',    size: 15 },
        { name: 'body/xsmall-bold', family: 'Pretendard',     weight: 'Bold',    size: 13 },
      ],
      label: [
        { name: 'label/large',  family: 'Pretendard GOV', weight: 'Regular', size: 19 },
        { name: 'label/medium', family: 'Pretendard GOV', weight: 'Regular', size: 17 },
        { name: 'label/small',  family: 'Pretendard GOV', weight: 'Regular', size: 15 },
        { name: 'label/xsmall', family: 'Pretendard GOV', weight: 'Regular', size: 13 },
      ],
      navigation: [
        { name: 'navigation/title-medium',      family: 'Pretendard',     weight: 'Bold',    size: 24 },
        { name: 'navigation/title-small',        family: 'Pretendard',     weight: 'Bold',    size: 19 },
        { name: 'navigation/depth-medium-bold',  family: 'Pretendard',     weight: 'Bold',    size: 17 },
        { name: 'navigation/depth-medium',       family: 'Pretendard GOV', weight: 'Regular', size: 17 },
        { name: 'navigation/depth-small-bold',   family: 'Pretendard',     weight: 'Bold',    size: 15 },
        { name: 'navigation/depth-small',        family: 'Pretendard GOV', weight: 'Regular', size: 15 },
      ],
      underline: [
        { name: 'underline/large',  family: 'Pretendard GOV', weight: 'Regular', size: 19 },
        { name: 'underline/medium', family: 'Pretendard GOV', weight: 'Regular', size: 17 },
        { name: 'underline/small',  family: 'Pretendard GOV', weight: 'Regular', size: 15 },
        { name: 'underline/xsmall', family: 'Pretendard GOV', weight: 'Regular', size: 13 },
      ],
    },
    shadows: ['shadow1', 'shadow2', 'shadow3', 'shadow4'],
    colorStyles: ['white', 'secondary', 'gray'],
  },

  /**
   * 📚 Pattern (패턴) 페이지에서 MCP로 추출한 25개 UX 패턴.
   * SaaS 제품의 "화면 단위" 설계 시 이 패턴을 레퍼런스로 참조합니다.
   */
  patterns: {
    figmaPage: '📚 Pattern (패턴)',
    basic: [
      {
        id: 'personal-id-input',
        name: '개인 식별 정보 입력',
        figmaNodeId: '7056:69175',
        description: '이름(text_input) + 휴대전화 번호(text_input) + 생년월일(date_input, YYYY.MM.DD) + 성별(radio: 남성/여성/선택 안 함)',
        components: ['text_input', 'date_input', 'radio_button'],
        inputFont: { family: 'Pretendard GOV', size: 19, weight: 'Regular' },
        labelFont: { family: 'Pretendard GOV', size: 15, weight: 'Regular' },
        helperFont: { family: 'Pretendard GOV', size: 13, weight: 'Regular' },
      },
      {
        id: 'help',
        name: '도움',
        figmaNodeId: '7056:71212',
        description: '안내 영역(step indicator + getting_started_guide 체크리스트) + 툴팁(plain/rich 150자 내외) + 맥락적 도움말(popover + 바로가기 링크) + 도움패널(도움/따라하기 탭) + 코치마크(단계별 안내 + 이전/다음/그만보기) + 섹션 헤딩(로그인 예시) + 레이블/인라인텍스트/플레이스홀더',
        components: ['step_indicator', 'tooltip', 'popover', 'guide_panel', 'coach_mark', 'toggle_switch', 'text_input', 'date_input', 'select'],
      },
      {
        id: 'consent',
        name: '동의',
        figmaNodeId: '7056:76379',
        description: '약관동의 패턴. "모두 동의합니다" 체크박스 + 개별 약관 카드([필수]/[선택]) × 약관읽기 버튼 + 동의함/동의안함 라디오 or 확인함 체크박스',
        components: ['checkbox', 'radio_button', 'button', 'card'],
        structure: ['전체 동의 체크박스', '필수 약관 카드 (민감정보/개인정보/서비스정책)', '선택 약관 카드 (고유식별정보)'],
      },
      {
        id: 'list-browse',
        name: '목록 탐색',
        figmaNodeId: '7056:77091',
        description: '검색 입력(search + 고급검색 버튼) + 결과 헤더(총 개수 + 표시개수 select + 정렬 radio: 관련도순/최신순/인기순) + 카드 리스트(badge + 공유/찜 + 제목 24px Bold + 설명 17px + 기간 + 신청하기 버튼 + 태그) + 페이지네이션',
        components: ['search_field', 'select', 'radio_sorting', 'card', 'badge', 'tag', 'pagination', 'button'],
      },
      {
        id: 'user-feedback',
        name: '사용자 피드백',
        figmaNodeId: '7056:78082',
        description: '"이 페이지에 만족하시나요?" 네/아니오 칩 → 예: 만족 이유 체크박스(필요한 정보 찾음/내용 마음에 듦/이해 쉬움) + 기타 textarea(100자) → 아니오: 불만족 이유 체크박스 + textarea → 완료 시 alert("의견을 남겨주셔서 감사합니다")',
        components: ['chip', 'checkbox', 'textarea', 'button', 'alert'],
      },
      { id: 'detail-view', name: '상세 정보 확인', figmaNodeId: '7056:78591', description: '상세 페이지. 제목 + 메타 정보 + 본문 + 관련 정보 테이블 + 첨부파일 영역.' },
      { id: 'error', name: '오류', figmaNodeId: '7056:80423', description: '오류 페이지/섹션. 오류 아이콘 + 제목 + 설명 + 재시도/돌아가기 버튼.' },
      { id: 'input-form', name: '입력 폼', figmaNodeId: '7056:82030', description: '폼 레이아웃. 필드 그룹(라벨 + 인풋 + 헬퍼 텍스트) + 필수/선택 표시 + 제출/취소 버튼 그룹.' },
      { id: 'attachment', name: '첨부파일', figmaNodeId: '7056:82404', description: '파일 업로드 영역. 드래그&드롭 + 파일 리스트(진행률/완료/에러 상태) + 삭제 버튼.' },
      { id: 'filter-sort', name: '필터링·정렬', figmaNodeId: '7056:83940', description: '필터 바(칩/셀렉트/날짜 범위) + 정렬 옵션(관련도/최신/인기) + 결과 카운트.' },
      { id: 'confirmation', name: '확인', figmaNodeId: '7056:84810', description: '확인/완료 화면. 성공 아이콘 + 요약 정보 + 다음 단계 안내 + CTA 버튼.' },
      { id: 'rating', name: '평가', figmaNodeId: '2499:53407', description: '별점/만족도 평가. 점수 선택 + 코멘트 입력 + 제출.' },
      { id: 'terms-consent', name: '약관동의', figmaNodeId: '2499:53148', description: '약관 전문 표시 + 스크롤 확인 + 동의 체크박스 패턴.' },
      { id: 'coach-mark', name: '코치마크/따라하기', figmaNodeId: '2499:53499', description: '단계별 UI 안내 오버레이. 포인터 + 설명 + 이전/다음/그만보기.' },
      { id: 'process', name: '프로세스', figmaNodeId: '2499:54509', description: '다단계 프로세스. 스텝 인디케이터 + 단계별 폼/확인 화면 + 최종 완료.' },
    ],
    service: [
      { id: 'apply-list', name: '신청리스트', figmaNodeId: '2499:38444', description: '신청 가능한 서비스 목록. 카드 리스트 + 필터 + 검색 + 페이지네이션.' },
      { id: 'apply-detail', name: '신청상세', figmaNodeId: '2499:40658', description: '개별 서비스 신청 상세. 서비스 정보 + 신청 조건 + CTA.' },
      { id: 'apply-flow', name: '신청 기본 플로우', figmaNodeId: '2499:41955', description: '신청 전체 플로우. 약관동의 → 본인확인 → 정보입력 → 확인 → 완료.' },
      { id: 'apply-guide', name: '신청 안내영역', figmaNodeId: '2499:54596', description: '신청 전 안내. 자격 요건 + 준비물 + 절차 설명.' },
      { id: 'apply-form', name: '신청 정보입력 폼', figmaNodeId: '2499:55156', description: '신청 정보 입력. 개인정보 + 추가정보 + 첨부파일 + 제출.' },
      { id: 'login', name: '로그인', figmaNodeId: '2499:55463', description: '통합 로그인. 모바일 신분증 / 공동·금융 인증서 / 간편 인증 선택.' },
      { id: 'policy-list', name: '정책목록', figmaNodeId: '2499:56286', description: '정책/서비스 목록. 카테고리 필터 + 카드 리스트.' },
      { id: 'search-unified', name: '검색_통합검색', figmaNodeId: '2499:56373', description: '통합 검색. 검색어 입력 + 탭(전체/서비스/정책/도움말) + 결과 리스트.' },
      { id: 'search-partial', name: '검색_부분검색', figmaNodeId: '2499:58892', description: '부분 검색(페이지 내). 필터 + 키워드 + 결과 하이라이트.' },
      { id: 'visit', name: '방문', figmaNodeId: '2539:133621', description: '방문 예약/안내. 장소 선택 + 날짜/시간 + 확인.' },
    ],
  },

  categories: [
    {
      id: 'identity',
      name: 'Identity (아이덴티티)',
      figmaNodeId: '4869:193303',
      components: [
        {
          name: 'Masthead (공식 배너)',
          description: '최상단 공식 안내 바. "이 누리집은 대한민국 공식 전자정부 누리집입니다."',
          guide: '모든 공식 서비스 페이지 최상단에 배치. 배경색 #eef2f7, 글자색 #1e2124.',
          pc: { width: 1200, height: 32, padding: 0, wrapPadding: 20, font: { family: 'Pretendard GOV', size: 15, weight: 'Regular', lineHeight: 22.5, letterSpacing: 0 }, icon: { name: 'flag', size: 24 }, badge: { width: 39, height: 32 } },
          mo: { width: 390, height: 32, paddingLeft: 16, font: { family: 'Pretendard GOV', size: 15, weight: 'Regular' }, icon: { name: 'flag', size: 24 }, badge: { width: 68, height: 32 } },
          background: '#eef2f7',
          textColor: '#1e2124',
        },
        {
          name: 'Identifier (운영기관 식별자)',
          description: '기관 식별 표시. "이 누리집은 정부 산하기관 누리집입니다." 페이지 하단에서 눈에 잘 띄는 유형을 선택하여 사용한다.',
          guide: '아토믹 컴포넌트를 직접 사용하지 않는 것을 권장. Footer-in(푸터 내부 포함) 또는 Footer-out(푸터 외부 독립 배치) 중 선택.',
          types: {
            'footer-in': '푸터 안쪽에 포함. 푸터 배경과 동일해 정보가 많으면 묻힐 수 있음.',
            'footer-out': '푸터 바깥(아래)에 독립 배치. 별도 영역이라 식별자가 더 잘 보임. SaaS처럼 푸터 정보가 많은 경우 권장.',
          },
          selectionRule: '푸터가 복잡하면 Footer-out(독립 배치), 푸터가 간결하면 Footer-in(내부 포함)을 선택한다. 기관 식별자는 사용자 눈에 확실히 인지되어야 한다.',
          pc: {
            width: 1200, frameSize: { width: 1248, height: 228 },
            font: { family: 'Pretendard GOV', size: 15, weight: 'Regular' },
            logo: { name: 'KRDS', width: 77, height: 24 },
            footerInHeight: 40, footerOutHeight: 40,
            badge: { label: 'PC', width: 39, height: 32 },
          },
          mo: {
            width: 318, frameSize: { width: 724, height: 168 },
            font: { family: 'Pretendard GOV', size: 13, weight: 'Regular' },
            logo: { name: 'KRDS', width: 64, height: 20 },
            footerInHeight: 60, footerOutHeight: 60,
            badge: { label: 'Mobile', width: 68, height: 32 },
          },
          text: '이 누리집은 정부 산하기관 누리집입니다.',
        },
        {
          name: 'Header (헤더)',
          description: '로고/슬로건(MI 200×48) + Utility-small(언어/버튼 15px) + Utility-medium(메뉴 5개 Bold 17px)',
          contentWidth: 1200,
          utilitySmallFont: { size: 15 },
          menuFont: { family: 'Pretendard', size: 17, weight: 'Bold' },
          menuItemHeight: 40,
        },
        {
          name: 'Footer (푸터)',
          description: 'Related Site 드롭다운 + 3-column 그리드(주소/전화/유틸리티링크/SNS) + 정책/저작권',
          gridColumns: 3,
          columnWidths: [588, 282, 282],
          copyrightFont: { size: 15, weight: 'Regular' },
          socialMediaIcons: ['instagram', 'youtube', 'X_twitter', 'facebook', 'naver_blog', 'kakao_story'],
        },
      ],
    },
    {
      id: 'navigation',
      name: 'Navigation (탐색)',
      figmaNodeId: '4869:197400',
      components: [
        {
          name: 'Main Menu (GNB)',
          description: '2depth/3depth 메뉴. 열림 시 4-column 그리드(282px 칼럼). 메뉴 bullet 12px.',
          menuHeight: 56,
          openPanelHeight: 312,
          columnWidth: 282,
          columnCount: 4,
          menuItemFont: { family: 'Pretendard', size: 17, weight: 'Bold' },
          subItemFont: { family: 'Pretendard GOV', size: 15, weight: 'Regular' },
          bulletSize: 12,
        },
        {
          name: 'Side Navigation',
          description: '좌측 사이드 네비. 1depth 타이틀 + 2/3depth 리스트. 폭 248px(open-list) / 160px(collapsed).',
          widthOpen: 248,
          widthCollapsed: 160,
          itemHeight: 50,
        },
        {
          name: 'Breadcrumb',
          description: '경로 표시. "up to 4" / "5 or more" 두 가지 타입.',
          types: ['up to 4', '5 or more'],
        },
        {
          name: 'Tab Bar (Mobile)',
          description: '하단 탭 바. 5개 탭, 각 72×76. 아이콘 + 텍스트.',
          tabCount: 5,
          tabSize: { width: 72, height: 76 },
          containerWidth: 360,
        },
        {
          name: 'Pagination',
          description: '번호 버튼(40×40) + 입력 이동. pre/next/ellipsis 포함.',
          buttonSize: 40,
          numberSize: 20,
        },
        {
          name: 'In-Page Navigation',
          description: '페이지 내 앵커 탐색. default/hover/pressed/selected 상태.',
          states: ['default', 'hover', 'pressed', 'selected'],
        },
      ],
    },
    {
      id: 'layout',
      name: 'Layout (레이아웃 및 표현)',
      figmaNodeId: '4869:194105',
      components: [
        {
          name: 'Card (List Item)',
          description: 'vertical/horizontal × image on/off. 콘텐츠 폭 1104px(패딩 80px). badge/tag/meta/button 슬롯.',
          contentWidth: 1104,
          padding: 80,
          types: ['vertical-image-off', 'vertical-image-on', 'horizontal-image-off', 'horizontal-image-on'],
          sizes: ['small', 'medium', 'large'],
        },
        {
          name: 'Banner / Emergency',
          description: 'emergency/safety/info 타입. 전폭. PC/MO 각각.',
          types: ['emergency', 'safety', 'info'],
          platforms: ['PC', 'MO'],
        },
        {
          name: 'Table',
          description: 'thead(39px) + tbody(76px 행) + tfoot(50px). 정렬 가능(sort icon).',
          headerHeight: 39,
          rowHeight: 76,
          footerHeight: 50,
        },
        {
          name: 'Carousel',
          description: '도트 인디케이터(active 20×8, inactive 8×8). 좌우 화살표. number 타입도 포함.',
          dotActive: { width: 20, height: 8 },
          dotInactive: { width: 8, height: 8 },
        },
        {
          name: 'Accordion',
          description: 'large/medium × open/close × line/default. medium close 시 container 69px.',
          types: ['line', 'default'],
          sizes: ['large', 'medium'],
          states: ['open', 'close'],
        },
        {
          name: 'Calendar (Datepicker)',
          description: 'day/period 타입. 384px 폭. 헤더(화살표 32×32) + 주간(24px) + 날짜 셀(44px 행). 하단 버튼 72px.',
          width: 384,
          headerArrowSize: 32,
          weekdayHeight: 24,
          dayCellHeight: 44,
          footerHeight: 72,
        },
        {
          name: 'Modal (Dialog)',
          description: '392px 폭. close-button(24px) + contents(232px 높이) + btn-group(64px). flexible/fixed height.',
          width: 392,
          closeBtnHeight: 24,
          contentHeight: 232,
          btnGroupHeight: 64,
          types: ['white', 'black'],
          heightModes: ['flexible', 'fixed'],
        },
        {
          name: 'Badge',
          description: 'outline/solid/solid-pastel × 8 colors × large/medium 크기.',
          types: ['outline', 'solid', 'solid-pastel'],
          colors: ['primary', 'secondary', 'tertiary', 'point', 'danger', 'warning', 'success', 'info'],
          sizes: ['large', 'medium'],
        },
        {
          name: 'Splash / Progress',
          description: '모바일 스플래시 화면. 360×768. 로고 중앙 배치.',
          width: 360,
          height: 768,
        },
      ],
    },
    {
      id: 'action',
      name: 'Action (액션)',
      figmaNodeId: '4869:200848',
      components: [
        {
          name: 'Button',
          description: 'primary/secondary/tertiary × xlarge/large/medium/small/xsmall × 4 states(default/hover/pressed/disabled).',
          types: ['primary', 'secondary', 'tertiary'],
          sizes: ['xlarge', 'large', 'medium', 'small', 'xsmall'],
          states: ['default', 'hover', 'pressed', 'disabled'],
        },
        {
          name: 'Link',
          description: 'default/subtle/subtle_none × large/medium/small × 5 states(default/hover/pressed/visited/disabled).',
          types: ['default', 'subtle', 'subtle_none'],
          sizes: ['large', 'medium', 'small'],
          states: ['default', 'hover', 'pressed', 'visited', 'disabled'],
        },
        {
          name: 'Icon Button',
          description: 'large/medium/small/xsmall × 4 states.',
          sizes: ['large', 'medium', 'small', 'xsmall'],
          states: ['default', 'hover', 'pressed', 'disabled'],
        },
        {
          name: 'Tab',
          description: 'line/fill 스타일 × primary/secondary 타입. active/hover/pressed/default/disabled 상태.',
          styles: ['line', 'fill'],
          types: ['primary', 'secondary'],
          states: ['active', 'hover', 'pressed', 'default', 'disabled'],
        },
        {
          name: 'Segment Control',
          description: '분할 버튼. first/middle/last 위치. 5 states.',
          positions: ['first', 'middle', 'last'],
          states: ['active', 'hover', 'pressed', 'default', 'disabled'],
        },
      ],
    },
    {
      id: 'select',
      name: 'Select (선택)',
      figmaNodeId: '4869:202108',
      components: [
        {
          name: 'Checkbox',
          description: 'large/medium × on/off/indeterminate × default/disabled.',
          sizes: ['large', 'medium'],
          values: ['on', 'off', 'indeterminate'],
          states: ['default', 'disabled'],
        },
        {
          name: 'Radio',
          description: 'large/medium × on/off × default/disabled.',
          sizes: ['large', 'medium'],
          values: ['on', 'off'],
          states: ['default', 'disabled'],
        },
        {
          name: 'Toggle (Switch)',
          description: 'large/medium/small × unchecked/checked/disabled.',
          sizes: ['large', 'medium', 'small'],
          states: ['unchecked', 'checked', 'disabled'],
        },
        {
          name: 'Chip',
          description: 'xsmall ~ xlarge × on/off 선택 상태.',
          sizes: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
          states: ['off', 'on'],
        },
        {
          name: 'Dropdown (Select)',
          description: 'large/medium/small × default/open 상태.',
          sizes: ['large', 'medium', 'small'],
          states: ['default', 'open'],
        },
        {
          name: 'Sorting Button',
          description: 'large/medium/small × default/hover/pressed. 정렬 방향 아이콘.',
          sizes: ['large', 'medium', 'small'],
          states: ['default', 'hover', 'pressed'],
        },
      ],
    },
    {
      id: 'feedback',
      name: 'Feedback (피드백)',
      figmaNodeId: '4869:202802',
      components: [
        {
          name: 'Alert',
          description: 'danger/warning/success/information × +title/slim 크기.',
          types: ['danger', 'warning', 'success', 'information'],
          sizes: ['+title', 'slim'],
        },
        {
          name: 'Toast',
          description: 'primary/secondary × default/slim.',
          types: ['primary', 'secondary'],
          sizes: ['default', 'slim'],
        },
        {
          name: 'Progress Bar',
          description: 'large/medium × active/success/error 상태.',
          sizes: ['large', 'medium'],
          states: ['active', 'success', 'error'],
        },
        {
          name: 'File Upload',
          description: 'ongoing/completed/upload/error/download 상태. PC/MO 각각.',
          states: ['ongoing', 'completed', 'upload', 'error', 'download'],
        },
        {
          name: 'Step Indicator',
          description: 'full/fixed/MO 타입. completion/ongoing/before 상태. Last-item 구분.',
          types: ['full', 'fixed'],
          states: ['completion', 'ongoing', 'before'],
        },
        {
          name: 'Spinner',
          description: 'large/medium/small 크기의 로딩 스피너.',
          sizes: ['large', 'medium', 'small'],
        },
      ],
    },
    {
      id: 'help',
      name: 'Help (도움)',
      figmaNodeId: '4869:204221',
      components: [
        {
          name: 'Tooltip',
          description: '6방향 화살표(left/center/right × top/bottom). 호버 시 표시.',
          arrowPositions: ['left', 'center', 'right'],
          directions: ['top', 'bottom'],
        },
        {
          name: 'Popover',
          description: '6방향 화살표. popover/tooltip 타입. default/hover/pressed 상태.',
          types: ['popover', 'tooltip'],
          states: ['default', 'hover', 'pressed'],
        },
        {
          name: 'Guide Panel',
          description: 'open_panel / tutorial_panel 타입.',
          types: ['open_panel', 'tutorial_panel'],
        },
      ],
    },
    {
      id: 'input',
      name: 'Input (인풋)',
      figmaNodeId: '4869:205410',
      components: [
        {
          name: 'Text Field',
          description: 'xlarge/large/medium/small × 6 states(default/focused/completed/error/disabled/view).',
          sizes: ['xlarge', 'large', 'medium', 'small'],
          states: ['default', 'focused', 'completed', 'error', 'disabled', 'view'],
        },
        {
          name: 'Textarea',
          description: 'large/medium/small × 6 states. auto-resize 지원.',
          sizes: ['large', 'medium', 'small'],
          states: ['default', 'focused', 'completed', 'error', 'disabled', 'view'],
        },
        {
          name: 'Search Field',
          description: 'xlarge/large/medium × 4 states(default/focused/completed/error).',
          sizes: ['xlarge', 'large', 'medium'],
          states: ['default', 'focused', 'completed', 'error'],
        },
        {
          name: 'Helper Text',
          description: 'hint/success/info/error 타입의 입력 보조 텍스트.',
          types: ['hint', 'success', 'info', 'error'],
        },
      ],
    },
    {
      id: 'setting',
      name: 'Setting (설정)',
      figmaNodeId: '4869:206125',
      components: [
        {
          name: 'Getting Started Guide',
          description: '초기 설정 안내 가이드.',
        },
        {
          name: 'User Feedback',
          description: 'default/answer_yes/answer_no 타입. PC/MO 각각.',
          types: ['default', 'answer_yes', 'answer_no'],
        },
      ],
    },
  ],
};
