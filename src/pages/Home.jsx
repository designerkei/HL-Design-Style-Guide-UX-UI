import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="doc-hero">
        <div className="doc-hero__title">HL Design System</div>
        <div className="doc-hero__desc">
          사내 운영 도구의 일관된 사용자 경험을 위한 디자인 시스템입니다. 토큰, 컴포넌트, 레이아웃 패턴을 제공합니다.
        </div>
      </div>

      {/* 핵심 원칙 */}
      <div className="doc-section">
        <div className="doc-section-title">핵심 원칙</div>
        <div className="doc-section-desc">모든 내부 운영 도구가 따라야 할 7가지 원칙입니다.</div>
        <div className="hl-grid hl-grid--2">

          <div className="doc-principle">
            <div className="doc-principle__icon"><i className="icon-palette" /></div>
            <div>
              <div className="doc-principle__title">토큰 사용 필수</div>
              <div className="doc-principle__desc">색상, 폰트, 간격은 반드시 CSS 변수 토큰을 사용합니다. 하드코딩 금지.</div>
            </div>
          </div>

          <div className="doc-principle">
            <div className="doc-principle__icon"><i className="icon-layout" /></div>
            <div>
              <div className="doc-principle__title">레이아웃 순서</div>
              <div className="doc-principle__desc">Filter → Summary → Main → Detail 순서로 화면을 구성합니다.</div>
            </div>
          </div>

          <div className="doc-principle">
            <div className="doc-principle__icon"><i className="icon-alert-circle" /></div>
            <div>
              <div className="doc-principle__title">시맨틱 색상</div>
              <div className="doc-principle__desc">초록=정상, 노랑=경고, 빨강=에러. 장식용 색상 사용을 금지합니다.</div>
            </div>
          </div>

          <div className="doc-principle">
            <div className="doc-principle__icon"><i className="icon-minimize-2" /></div>
            <div>
              <div className="doc-principle__title">Compact Density</div>
              <div className="doc-principle__desc">테이블 row 40px, 카드 gap 12px. 정보 밀도를 높여 한 화면에 더 많은 데이터를 표시합니다.</div>
            </div>
          </div>

          <div className="doc-principle">
            <div className="doc-principle__icon"><i className="icon-moon" /></div>
            <div>
              <div className="doc-principle__title">다크 모드 필수</div>
              <div className="doc-principle__desc">라이트/다크 모드 모두 지원합니다. 관제실, 야간 환경에 대응합니다.</div>
            </div>
          </div>

          <div className="doc-principle">
            <div className="doc-principle__icon"><i className="icon-table" /></div>
            <div>
              <div className="doc-principle__title">Table First</div>
              <div className="doc-principle__desc">모든 데이터는 테이블로 표현 가능해야 합니다. 시각화는 테이블의 보조입니다.</div>
            </div>
          </div>

          <div className="doc-principle">
            <div className="doc-principle__icon"><i className="icon-equal" /></div>
            <div>
              <div className="doc-principle__title">통일감 우선</div>
              <div className="doc-principle__desc">10개의 서로 다른 도구를 열어도 같은 색상, 같은 구조, 같은 밀도가 되도록 하라.</div>
            </div>
          </div>

        </div>
      </div>

      {/* 탐색 */}
      <div className="doc-section">
        <div className="doc-section-title">탐색</div>
        <div className="doc-section-desc">디자인 시스템의 각 영역을 살펴보세요.</div>
        <div className="doc-landing-grid">

          <Link to="/foundations" className="doc-landing-card">
            <div className="doc-landing-card__icon"><i className="icon-palette" /></div>
            <div className="doc-landing-card__title">Foundations</div>
            <div className="doc-landing-card__desc">색상 팔레트, 타이포그래피, 간격, 그림자, 모서리 등 기반 토큰입니다.</div>
          </Link>

          <Link to="/components" className="doc-landing-card">
            <div className="doc-landing-card__icon"><i className="icon-layout-grid" /></div>
            <div className="doc-landing-card__title">Components</div>
            <div className="doc-landing-card__desc">Button, Badge, KPI Card, Table 등 재사용 가능한 UI 컴포넌트입니다.</div>
          </Link>

          <Link to="/dashboard" className="doc-landing-card">
            <div className="doc-landing-card__icon"><i className="icon-bar-chart-3" /></div>
            <div className="doc-landing-card__title">운영 대시보드</div>
            <div className="doc-landing-card__desc">KPI + 차트 + 테이블 조합의 기본 운영 화면 예시입니다.</div>
          </Link>

          <Link to="/monitoring" className="doc-landing-card">
            <div className="doc-landing-card__icon"><i className="icon-cpu" /></div>
            <div className="doc-landing-card__title">장비 모니터링</div>
            <div className="doc-landing-card__desc">장비 상태 그리드 + 이벤트 로그 테이블 조합 예시입니다.</div>
          </Link>

          <Link to="/cctv" className="doc-landing-card">
            <div className="doc-landing-card__icon"><i className="icon-camera" /></div>
            <div className="doc-landing-card__title">CCTV</div>
            <div className="doc-landing-card__desc">영상 그리드 + 카메라 상태 + 감지 이벤트 조합 예시입니다.</div>
          </Link>

        </div>
      </div>

      {/* 레이아웃 패턴 */}
      <div className="doc-section">
        <div className="doc-section-title">레이아웃 패턴</div>
        <div className="doc-section-desc">모든 운영 화면은 아래 순서로 구성됩니다.</div>
        <div className="doc-layout-diagram">
          <div className="doc-layout-row" style={{ backgroundColor: 'var(--hl-info-light)', color: 'var(--hl-info)' }}>
            <i className="icon-filter" /> [1] Filter
            <span>검색 조건 및 필터 영역</span>
          </div>
          <div className="doc-layout-row" style={{ backgroundColor: 'var(--hl-success-light)', color: 'var(--hl-success)' }}>
            <i className="icon-activity" /> [2] Summary
            <span>KPI 카드, 요약 지표</span>
          </div>
          <div className="doc-layout-row" style={{ backgroundColor: 'var(--hl-surface-raised)', color: 'var(--hl-text-secondary)' }}>
            <i className="icon-layout" /> [3] Main View
            <span>차트, 테이블, 그리드</span>
          </div>
          <div className="doc-layout-row" style={{ backgroundColor: 'var(--hl-primary-50)', color: 'var(--hl-primary-700)' }}>
            <i className="icon-table" /> [4] Detail / Table
            <span>상세 데이터 테이블</span>
          </div>
        </div>
      </div>
    </>
  );
}
