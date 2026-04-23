import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRINCIPLES } from '../data/principles';
import { useLanguage } from '../language';

const exploreLinks = [
  {
    to: '/consume',
    icon: 'icon-bot',
    title: { ko: '링크로 시작 (AI)', en: 'Start from links (AI)' },
    description: {
      ko: 'GitHub와 배포 사이트 URL만으로 AI에게 시킬 때 쓰는 복사용 프롬프트와 문서 링크입니다.',
      en: 'Copy-paste prompts and canonical links when you only share the GitHub repo and this deployed site.',
    },
  },
  {
    to: '/foundations',
    icon: 'icon-palette',
    title: { ko: '기본 토큰', en: 'Foundations' },
    description: {
      ko: '색상 팔레트, 타이포그래피, 간격, 그림자, 모서리 등 기본 시스템 토큰을 확인합니다.',
      en: 'Review core system tokens including color, typography, spacing, shadows, and radius.',
    },
  },
  {
    to: '/components',
    icon: 'icon-layout-grid',
    title: { ko: '컴포넌트', en: 'Components' },
    description: {
      ko: 'Button, Badge, KPI Card, Table 등 재사용 가능한 UI 컴포넌트를 살펴봅니다.',
      en: 'Browse reusable UI components such as Button, Badge, KPI Card, and Table.',
    },
  },
  {
    to: '/dashboard',
    icon: 'icon-bar-chart-3',
    title: { ko: '운영 대시보드', en: 'Operations Dashboard' },
    description: {
      ko: 'KPI, 차트, 테이블을 결합한 대표 운영 화면 예시입니다.',
      en: 'A representative operations screen pattern combining KPI cards, charts, and tables.',
    },
  },
  {
    to: '/monitoring',
    icon: 'icon-cpu',
    title: { ko: '장비 모니터링', en: 'Equipment Monitoring' },
    description: {
      ko: '장비 상태 그리드와 이벤트 로그 테이블을 함께 보여주는 모니터링 패턴입니다.',
      en: 'A monitoring pattern that combines equipment status grids with event log tables.',
    },
  },
  {
    to: '/cctv',
    icon: 'icon-camera',
    title: { ko: 'CCTV', en: 'CCTV' },
    description: {
      ko: '영상 그리드, 카메라 상태, 감지 이벤트를 함께 구성하는 관제 패턴입니다.',
      en: 'A surveillance pattern combining video grids, camera status, and detection events.',
    },
  },
];

const layoutRows = [
  {
    icon: 'icon-filter',
    label: '[1] Filter',
    description: { ko: '검색 조건 및 필터 영역', en: 'Search criteria and filters' },
    style: { backgroundColor: 'var(--hl-info-light)', color: 'var(--hl-info)' },
  },
  {
    icon: 'icon-activity',
    label: '[2] Summary',
    description: { ko: 'KPI 카드와 요약 지표', en: 'KPI cards and summary metrics' },
    style: { backgroundColor: 'var(--hl-success-light)', color: 'var(--hl-success)' },
  },
  {
    icon: 'icon-layout',
    label: '[3] Main View',
    description: { ko: '차트, 테이블, 그리드 본문', en: 'Main content such as charts, tables, and grids' },
    style: { backgroundColor: 'var(--hl-surface-raised)', color: 'var(--hl-text-secondary)' },
  },
  {
    icon: 'icon-table',
    label: '[4] Detail / Table',
    description: { ko: '상세 데이터 테이블', en: 'Detailed data table' },
    style: { backgroundColor: 'var(--hl-primary-50)', color: 'var(--hl-primary-700)' },
  },
];

const copy = {
  heroTitle: { ko: 'HL ', en: 'HL Design System' },
  heroDesc: {
    ko: '사내 운영 도구의 일관된 사용자 경험을 위한 디자인 시스템입니다. 토큰, 컴포넌트, 레이아웃 패턴을 제공합니다.',
    en: 'A design system for consistent internal operations tools. It provides tokens, components, and layout patterns.',
  },
  principleTitle: { ko: '핵심 원칙', en: 'Core Principles' },
  principleDesc: {
    ko: '모든 내부 운영 도구가 따라야 할 원칙입니다. 카드에서 더보기를 눌러 상세를 펼칠 수 있습니다.',
    en: 'These are the principles every internal operations tool should follow. Use “More” to expand details.',
  },
  more: { ko: '더보기', en: 'More' },
  collapse: { ko: '접기', en: 'Collapse' },
  exploreTitle: { ko: '탐색', en: 'Explore' },
  exploreDesc: { ko: '디자인 시스템의 각 영역을 살펴보세요.', en: 'Explore each area of the design system.' },
  layoutTitle: { ko: '레이아웃 패턴', en: 'Layout Pattern' },
  layoutDesc: { ko: '모든 운영 화면은 아래 순서로 구성됩니다.', en: 'Operations screens should generally follow the sequence below.' },
};

export default function Home() {
  const [expandedId, setExpandedId] = useState(null);
  const { t } = useLanguage();

  return (
    <>
      <div className="doc-hero">
        <div className="doc-hero__title">{t(copy.heroTitle)}</div>
        <div className="doc-hero__desc">{t(copy.heroDesc)}</div>
      </div>

      <div className="doc-section">
        <div className="doc-section-title">{t(copy.principleTitle)}</div>
        <div className="doc-section-desc">{t(copy.principleDesc)}</div>

        <div className="doc-principles-list">
          {PRINCIPLES.map((principle, index) => (
            <button
              key={principle.id}
              type="button"
              className={`doc-principle doc-principle--interactive doc-principle--list${
                expandedId === principle.id ? ' is-expanded' : ''
              }`}
              aria-expanded={expandedId === principle.id}
              aria-controls={`principle-detail-${principle.id}`}
              onClick={() => setExpandedId((prev) => (prev === principle.id ? null : principle.id))}
            >
              <div className="doc-principle__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="doc-principle__icon">
                <i className={principle.icon} aria-hidden />
              </div>
              <div className="doc-principle__body">
                <div className="doc-principle__line">
                  <div className="doc-principle__title">{t(principle.title)}</div>
                  <div className="doc-principle__desc">{t(principle.summary)}</div>
                  <div className="doc-principle__cta">{t(expandedId === principle.id ? copy.collapse : copy.more)}</div>
                </div>
              </div>

              <div
                id={`principle-detail-${principle.id}`}
                className="doc-principle__detail"
                aria-hidden={expandedId !== principle.id}
              >
                <div className="doc-principle__notes">
                  {t(principle.detail).map((paragraph, pIndex) => (
                    <p key={pIndex} className="doc-principle__note">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="doc-section">
        <div className="doc-section-title">{t(copy.exploreTitle)}</div>
        <div className="doc-section-desc">{t(copy.exploreDesc)}</div>
        <div className="doc-landing-grid">
          {exploreLinks.map((item) => (
            <Link key={item.to} to={item.to} className="doc-landing-card">
              <div className="doc-landing-card__icon"><i className={item.icon} /></div>
              <div className="doc-landing-card__title">{t(item.title)}</div>
              <div className="doc-landing-card__desc">{t(item.description)}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="doc-section">
        <div className="doc-section-title">{t(copy.layoutTitle)}</div>
        <div className="doc-section-desc">{t(copy.layoutDesc)}</div>
        <div className="doc-layout-diagram">
          {layoutRows.map((row) => (
            <div key={row.label} className="doc-layout-row" style={row.style}>
              <i className={row.icon} /> {row.label}
              <span>{t(row.description)}</span>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
