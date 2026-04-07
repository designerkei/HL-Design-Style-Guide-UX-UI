export default function LayoutGuide() {
  return (
    <>
      <div className="doc-page-head">
        <h1 className="doc-page-title">페이지 레이아웃</h1>
        <p className="doc-page-desc">
          모든 HL 운영 도구는 동일한 Shell 구조를 공유합니다. 사이드바, 헤더, 바디로 구성된 일관된 프레임 위에 콘텐츠를 배치합니다.
        </p>
      </div>

      {/* ========== 1. App Shell 구조 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">App Shell 구조</div>
        <div className="doc-section-desc">전체 페이지를 구성하는 최상위 레이아웃입니다.</div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Shell Anatomy</span>
            <span className="doc-demo__tag">hl-page</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col" style={{ padding: 0 }}>
            <div style={{
              display: 'flex', width: '100%', height: 320, fontSize: 12,
              fontFamily: 'var(--hl-mono)', border: '1px solid var(--hl-border)', borderRadius: 'var(--hl-radius)',
              overflow: 'hidden', background: 'var(--hl-bg)',
            }}>
              {/* Sidebar */}
              <div style={{
                width: 180, flexShrink: 0, background: 'var(--hl-surface)',
                borderRight: '1px solid var(--hl-border)', display: 'flex', flexDirection: 'column',
              }}>
                <div style={{
                  padding: '10px 14px', fontWeight: 700, fontSize: 13,
                  color: 'var(--hl-primary-600)', borderBottom: '1px solid var(--hl-border)',
                }}>hl-sidebar</div>
                <div style={{ padding: '8px 14px', color: 'var(--hl-text-muted)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Group Label</div>
                <div style={{ padding: '5px 14px', color: 'var(--hl-primary-600)', background: 'var(--hl-primary-50)', borderLeft: '2px solid var(--hl-primary-500)', fontSize: 11 }}>Active Link</div>
                <div style={{ padding: '5px 14px', color: 'var(--hl-text-secondary)', fontSize: 11 }}>Link Item</div>
                <div style={{ padding: '5px 14px', color: 'var(--hl-text-secondary)', fontSize: 11 }}>Link Item</div>
                <div style={{ padding: '8px 14px', color: 'var(--hl-text-muted)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 8 }}>Group Label</div>
                <div style={{ padding: '5px 14px', color: 'var(--hl-text-secondary)', fontSize: 11 }}>Link Item</div>
              </div>

              {/* Main */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <div style={{
                  height: 40, padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'var(--hl-surface)', borderBottom: '1px solid var(--hl-border)',
                }}>
                  <span style={{ fontWeight: 600, fontSize: 12, color: 'var(--hl-text-secondary)' }}>hl-header</span>
                  <span style={{ fontSize: 10, color: 'var(--hl-text-muted)' }}>Actions / Theme Toggle</span>
                </div>

                {/* Body */}
                <div style={{ flex: 1, padding: 16, overflow: 'auto' }}>
                  <div style={{ color: 'var(--hl-text-muted)', fontSize: 11, marginBottom: 8 }}>hl-body → hl-container (max-width: 1280px)</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ background: 'var(--hl-surface)', borderRadius: 6, padding: '8px 12px', fontSize: 11, color: 'var(--hl-text-secondary)', border: '1px solid var(--hl-border)' }}>
                      Filter Bar
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      {['KPI 1', 'KPI 2', 'KPI 3', 'KPI 4'].map(k => (
                        <div key={k} style={{ flex: 1, background: 'var(--hl-surface)', borderRadius: 6, padding: '8px 10px', fontSize: 10, color: 'var(--hl-text-muted)', border: '1px solid var(--hl-border)' }}>{k}</div>
                      ))}
                    </div>
                    <div style={{ flex: 1, background: 'var(--hl-surface)', borderRadius: 6, padding: '8px 12px', fontSize: 11, color: 'var(--hl-text-secondary)', border: '1px solid var(--hl-border)', minHeight: 60 }}>
                      Main Content (Table / Chart)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 2. 구조 클래스 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">구조 클래스</div>
        <div className="doc-section-desc">Shell을 구성하는 CSS 클래스와 역할입니다.</div>
        <table className="doc-token-table">
          <thead><tr><th>클래스</th><th>역할</th><th>CSS</th></tr></thead>
          <tbody>
            <tr><td className="doc-token-name">.hl-page</td><td>최상위 래퍼</td><td className="doc-token-val">display: flex; min-height: 100vh</td></tr>
            <tr><td className="doc-token-name">.hl-sidebar</td><td>좌측 네비게이션</td><td className="doc-token-val">width: 256px; position: fixed; background: surface</td></tr>
            <tr><td className="doc-token-name">.hl-sidebar__brand</td><td>앱 제목/로고</td><td className="doc-token-val">padding: sp-4 sp-5; font-weight: 700</td></tr>
            <tr><td className="doc-token-name">.hl-sidebar__group-label</td><td>네비 그룹 제목</td><td className="doc-token-val">uppercase; text-xs; text-muted</td></tr>
            <tr><td className="doc-token-name">.hl-sidebar__link</td><td>네비 항목</td><td className="doc-token-val">flex; text-sm; hover → surface-raised</td></tr>
            <tr><td className="doc-token-name">.hl-sidebar__link.is-active</td><td>현재 페이지</td><td className="doc-token-val">primary-600; primary-50 bg; left border</td></tr>
            <tr><td className="doc-token-name">.hl-main</td><td>메인 영역 래퍼</td><td className="doc-token-val">flex: 1; margin-left: sidebar-w</td></tr>
            <tr><td className="doc-token-name">.hl-header</td><td>상단 바</td><td className="doc-token-val">height: 48px; sticky; surface bg; border-bottom</td></tr>
            <tr><td className="doc-token-name">.hl-body</td><td>콘텐츠 영역</td><td className="doc-token-val">flex: 1; padding: sp-5 sp-6; bg</td></tr>
            <tr><td className="doc-token-name">.hl-body--flush</td><td>패딩 없는 바디</td><td className="doc-token-val">padding: 0 (전체 폭 콘텐츠)</td></tr>
            <tr><td className="doc-token-name">.hl-container</td><td>콘텐츠 최대폭 제한</td><td className="doc-token-val">max-width: 1280px, 본문 영역 내 좌측 정렬</td></tr>
          </tbody>
        </table>
      </div>

      {/* ========== 3. Sidebar ========== */}
      <div className="doc-section">
        <div className="doc-section-title">Sidebar (네비게이션)</div>
        <div className="doc-section-desc">좌측 고정 사이드바입니다. 256px 폭으로 화면 전체 높이를 차지합니다.</div>

        <table className="doc-token-table">
          <thead><tr><th>요소</th><th>규칙</th></tr></thead>
          <tbody>
            <tr><td className="doc-token-name">Brand</td><td>앱 이름 또는 로고. Primary 색상. 하단 border로 구분.</td></tr>
            <tr><td className="doc-token-name">Group Label</td><td>관련 링크를 묶는 소제목. UPPERCASE, text-xs, text-muted.</td></tr>
            <tr><td className="doc-token-name">Link</td><td>아이콘(16px) + 텍스트. 기본: opacity 0.72. hover: opacity 1 + surface-raised bg.</td></tr>
            <tr><td className="doc-token-name">Active Link</td><td>primary-600 텍스트, primary-50 배경, 좌측 2px primary-500 보더.</td></tr>
            <tr><td className="doc-token-name">Overflow</td><td>네비 항목이 많으면 nav 영역만 스크롤 (overflow-y: auto).</td></tr>
          </tbody>
        </table>
      </div>

      {/* ========== 4. Header ========== */}
      <div className="doc-section">
        <div className="doc-section-title">Header (상단 바)</div>
        <div className="doc-section-desc">48px 높이의 sticky 헤더입니다. 페이지 제목과 글로벌 액션을 배치합니다.</div>

        <table className="doc-token-table">
          <thead><tr><th>요소</th><th>규칙</th></tr></thead>
          <tbody>
            <tr><td className="doc-token-name">높이</td><td>48px 고정. --hl-header-h 토큰으로 제어.</td></tr>
            <tr><td className="doc-token-name">Position</td><td>sticky, top: 0. 스크롤 시 상단에 고정.</td></tr>
            <tr><td className="doc-token-name">좌측</td><td>페이지 제목 또는 앱 이름 (text-sm, font-weight 500).</td></tr>
            <tr><td className="doc-token-name">우측</td><td>글로벌 액션: 테마 토글, 알림, 사용자 메뉴 등.</td></tr>
            <tr><td className="doc-token-name">배경</td><td>--hl-surface. 하단 border로 body와 구분.</td></tr>
          </tbody>
        </table>
      </div>

      {/* ========== 5. Body & Container ========== */}
      <div className="doc-section">
        <div className="doc-section-title">Body & Container</div>
        <div className="doc-section-desc">메인 콘텐츠 영역입니다. body는 배경색과 패딩, container는 최대 폭을 제어합니다.</div>

        <table className="doc-token-table">
          <thead><tr><th>요소</th><th>규칙</th></tr></thead>
          <tbody>
            <tr><td className="doc-token-name">hl-body</td><td>배경: --hl-bg. 패딩: 20px 24px. 카드가 이 위에 떠서 구분됨.</td></tr>
            <tr><td className="doc-token-name">hl-body--flush</td><td>패딩 없음. 전체 폭 테이블, 지도 등에 사용.</td></tr>
            <tr><td className="doc-token-name">hl-container</td><td>max-width: 1280px. 넓은 모니터에서 콘텐츠가 너무 퍼지는 것 방지.</td></tr>
          </tbody>
        </table>
      </div>

      {/* ========== 6. 콘텐츠 배치 순서 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">콘텐츠 배치 순서</div>
        <div className="doc-section-desc">데이터 화면은 반드시 아래 순서를 따릅니다. 사용자가 전체 → 상세로 자연스럽게 탐색할 수 있도록 합니다.</div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Filter → Summary → Main → Detail</span>
            <span className="doc-demo__tag">hl-stack</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col" style={{ gap: 0 }}>
            {[
              { label: '1. Filter Bar', desc: '검색, 필터, 날짜 범위', bg: 'var(--hl-info-light)', color: 'var(--hl-info)' },
              { label: '2. Summary / KPI', desc: '핵심 지표 3~5개', bg: 'var(--hl-success-light)', color: 'var(--hl-success)' },
              { label: '3. Main View', desc: '테이블, 차트, 그리드', bg: 'var(--hl-surface)', color: 'var(--hl-text-secondary)' },
              { label: '4. Detail / Table', desc: '상세 데이터, 정렬·검색 가능', bg: 'var(--hl-primary-50)', color: 'var(--hl-primary-700)' },
            ].map((row, i) => (
              <div key={i} style={{
                padding: '12px 16px', background: row.bg, color: row.color,
                borderBottom: i < 3 ? '1px solid var(--hl-border)' : 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontWeight: 600, fontSize: 13 }}>{row.label}</span>
                <span style={{ fontSize: 12, opacity: 0.8 }}>{row.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <table className="doc-token-table" style={{ marginTop: 16 }}>
          <thead><tr><th>단계</th><th>필수 여부</th><th>컴포넌트</th><th>설명</th></tr></thead>
          <tbody>
            <tr><td className="doc-token-name">Filter</td><td>권장</td><td>hl-filter</td><td>검색, 셀렉트, 날짜 범위, 적용/초기화 버튼</td></tr>
            <tr><td className="doc-token-name">Summary</td><td>필수</td><td>hl-kpi-row</td><td>핵심 지표 3~5개. 트렌드 표시 권장.</td></tr>
            <tr><td className="doc-token-name">Main View</td><td>필수</td><td>hl-table / hl-card</td><td>데이터의 핵심 뷰. 차트 사용 시 테이블 병행.</td></tr>
            <tr><td className="doc-token-name">Detail</td><td>선택</td><td>hl-card / hl-table</td><td>드릴다운 상세. 행 클릭 시 표시.</td></tr>
          </tbody>
        </table>
      </div>

      {/* ========== 7. 유틸리티 클래스 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">레이아웃 유틸리티</div>
        <div className="doc-section-desc">콘텐츠 영역 내에서 요소를 배치할 때 사용하는 유틸리티 클래스입니다.</div>

        <table className="doc-token-table">
          <thead><tr><th>클래스</th><th>설명</th><th>사용 예</th></tr></thead>
          <tbody>
            <tr><td className="doc-token-name">.hl-stack</td><td>세로 쌓기 (gap: sp-4)</td><td>Filter + KPI + Table 순차 배치</td></tr>
            <tr><td className="doc-token-name">.hl-flex</td><td>가로 배치 + flex-wrap</td><td>KPI 카드 행, 버튼 그룹</td></tr>
            <tr><td className="doc-token-name">.hl-grid--2</td><td>2단 그리드</td><td>좌우 분할 (차트 + 테이블)</td></tr>
            <tr><td className="doc-token-name">.hl-grid--3</td><td>3단 그리드</td><td>카드 3열 배치</td></tr>
            <tr><td className="doc-token-name">.hl-grid--4</td><td>4단 그리드</td><td>KPI 카드 4열</td></tr>
            <tr><td className="doc-token-name">.hl-grid--auto</td><td>자동 채움 (min 200px)</td><td>장비 카드 그리드</td></tr>
            <tr><td className="doc-token-name">.hl-gap-2 ~ .hl-gap-6</td><td>gap 제어</td><td>요소 간 간격 조절</td></tr>
          </tbody>
        </table>
      </div>

      {/* ========== 8. 가이드라인 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">가이드라인</div>
        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">
                모든 도구에 동일한 Shell 구조를 사용하세요. 사이드바 256px, 헤더 48px, body에 bg 배경. 사용자는 어떤 도구를 열어도 같은 프레임을 기대합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don&apos;t</div>
              <div className="doc-guideline__text">
                도구마다 다른 레이아웃(상단 네비게이션, 풀스크린, 좌우 분할 등)을 사용하지 마세요. 통일감이 깨지고 학습 비용이 증가합니다.
              </div>
            </div>
          </div>
        </div>
        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">
                데이터 화면은 Filter → Summary → Main → Detail 순서를 지키세요. 사용자가 전체에서 상세로 자연스럽게 드릴다운할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don&apos;t</div>
              <div className="doc-guideline__text">
                Hero 섹션, 대형 배너, 불필요한 여백을 넣지 마세요. 운영 도구는 데이터 밀도가 핵심입니다. compact density를 유지하세요.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
