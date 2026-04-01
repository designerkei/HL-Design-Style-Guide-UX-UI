import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PRINCIPLES } from '../data/principles';

export default function Home() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [detail, setDetail] = useState(null);

  const syncScrollUi = useCallback(() => {
    const root = trackRef.current;
    if (!root) return;
    const { scrollLeft, scrollWidth, clientWidth } = root;
    setCanPrev(scrollLeft > 8);
    setCanNext(scrollLeft < scrollWidth - clientWidth - 8);

    const rootRect = root.getBoundingClientRect();
    const mid = (rootRect.left + rootRect.right) / 2;
    let best = 0;
    let bestDist = Infinity;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const c = (r.left + r.right) / 2;
      const d = Math.abs(c - mid);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActiveIndex(best);
  }, []);

  useEffect(() => {
    const root = trackRef.current;
    if (!root) return;
    syncScrollUi();
    root.addEventListener('scroll', syncScrollUi, { passive: true });
    const ro = new ResizeObserver(syncScrollUi);
    ro.observe(root);
    return () => {
      root.removeEventListener('scroll', syncScrollUi);
      ro.disconnect();
    };
  }, [syncScrollUi]);

  useEffect(() => {
    if (!detail) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setDetail(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [detail]);

  const scrollToIndex = (i) => {
    const el = cardRefs.current[i];
    el?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

  const scrollByPage = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.max(240, Math.floor(el.clientWidth * 0.65));
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

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
        <div className="doc-section-desc">
          모든 내부 운영 도구가 따라야 할 {PRINCIPLES.length}가지 원칙입니다. 카드를 누르면 상세 설명을 볼 수 있습니다. 아래는
          좌우 스크롤·화살표·점 인디케이터로 이동할 수 있습니다.
        </div>

        <div className="doc-principles-toolbar">
          <span className="doc-principles-hint">가로 스크롤 또는 버튼으로 이동</span>
          <div className="doc-principles-nav">
            <button
              type="button"
              className="hl-btn hl-btn--secondary hl-btn--sm"
              onClick={() => scrollByPage(-1)}
              disabled={!canPrev}
              aria-label="이전 원칙들"
            >
              <i className="icon-chevron-left" aria-hidden />
            </button>
            <button
              type="button"
              className="hl-btn hl-btn--secondary hl-btn--sm"
              onClick={() => scrollByPage(1)}
              disabled={!canNext}
              aria-label="다음 원칙들"
            >
              <i className="icon-chevron-right" aria-hidden />
            </button>
          </div>
        </div>

        <div ref={trackRef} className="doc-principles-track">
          {PRINCIPLES.map((p, i) => (
            <button
              key={p.id}
              type="button"
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="doc-principle doc-principle--interactive"
              onClick={() => setDetail(p)}
            >
              <div className="doc-principle__icon">
                <i className={p.icon} aria-hidden />
              </div>
              <div className="doc-principle__body">
                <div className="doc-principle__title">{p.title}</div>
                <div className="doc-principle__desc">{p.summary}</div>
                <div className="doc-principle__cta">자세히 보기</div>
              </div>
            </button>
          ))}
        </div>

        <nav className="doc-principles-dots" aria-label="핵심 원칙 슬라이드 위치">
          {PRINCIPLES.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={`doc-principles-dot${i === activeIndex ? ' is-active' : ''}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`${p.title}(으)로 이동`}
              aria-current={i === activeIndex ? 'true' : undefined}
            />
          ))}
        </nav>
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

      {detail && (
        <div
          className="hl-modal-backdrop"
          role="presentation"
          onClick={() => setDetail(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="principle-modal-title"
            className="hl-modal doc-principle-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hl-modal__head">
              <span id="principle-modal-title" className="doc-principle-modal__head-title">
                <span className="doc-principle-modal__head-icon" aria-hidden>
                  <i className={detail.icon} />
                </span>
                {detail.title}
              </span>
              <button
                type="button"
                className="hl-btn hl-btn--ghost hl-btn--sm"
                onClick={() => setDetail(null)}
                aria-label="닫기"
              >
                <i className="icon-x" aria-hidden />
              </button>
            </div>
            <div className="hl-modal__body doc-principle-modal__body">
              {detail.detail.map((para, idx) => (
                <p key={idx} className="doc-principle-modal__para">
                  {para}
                </p>
              ))}
            </div>
            <div className="hl-modal__foot">
              <button type="button" className="hl-btn hl-btn--secondary hl-btn--md" onClick={() => setDetail(null)}>
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
