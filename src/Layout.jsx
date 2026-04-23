import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from './language';
import { useTheme } from './theme';

const hlBrandLogo = `${import.meta.env.BASE_URL}favicon_32_32.png`;

const nav = [
  {
    label: { ko: '개요', en: 'Overview' },
    items: [
      { to: '/', icon: 'icon-home', text: { ko: '시작하기', en: 'Getting Started' } },
      { to: '/consume', icon: 'icon-bot', text: { ko: '링크로 시작 (AI)', en: 'Start from links (AI)' } },
    ],
  },
  {
    label: { ko: '기초', en: 'Foundations' },
    items: [
      { to: '/foundations', icon: 'icon-palette', text: { ko: '색상', en: 'Colors' } },
      { to: '/foundations#typography', icon: 'icon-type', text: { ko: '타이포그래피', en: 'Typography' } },
      { to: '/foundations#spacing', icon: 'icon-ruler', text: { ko: '간격', en: 'Spacing' } },
      { to: '/foundations#shadows', icon: 'icon-square', text: { ko: '그림자 & 모서리', en: 'Shadows & Radius' } },
      { to: '/motion', icon: 'icon-zap', text: { ko: '모션', en: 'Motion' } },
      { to: '/design-tokens', icon: 'icon-copy', text: { ko: '디자인 토큰', en: 'Design Tokens' } },
    ],
  },
  {
    label: { ko: '컴포넌트', en: 'Components' },
    items: [
      { to: '/components', icon: 'icon-layout-grid', text: { ko: '전체 보기', en: 'All Components' } },
      { to: '/components/button', icon: 'icon-mouse-pointer', text: { ko: '버튼', en: 'Button' } },
      { to: '/components/badge', icon: 'icon-tag', text: { ko: '뱃지', en: 'Badge' } },
      { to: '/components/input', icon: 'icon-text-cursor', text: { ko: '입력', en: 'Input' } },
      { to: '/components/card', icon: 'icon-credit-card', text: { ko: '카드', en: 'Card' } },
      { to: '/components/kpi', icon: 'icon-trending-up', text: { ko: 'KPI 카드', en: 'KPI Card' } },
      { to: '/components/table', icon: 'icon-table', text: { ko: '테이블', en: 'Table' } },
      { to: '/components/filter-bar', icon: 'icon-filter', text: { ko: '필터 바', en: 'Filter Bar' } },
      { to: '/components/toast', icon: 'icon-bell', text: { ko: '토스트', en: 'Toast' } },
      { to: '/components/modal', icon: 'icon-maximize-2', text: { ko: '모달', en: 'Modal' } },
      { to: '/components/empty-state', icon: 'icon-inbox', text: { ko: '빈 상태', en: 'Empty State' } },
      { to: '/components/tabs', icon: 'icon-columns', text: { ko: '탭', en: 'Tabs' } },
      { to: '/components/pagination', icon: 'icon-more-horizontal', text: { ko: '페이지네이션', en: 'Pagination' } },
      { to: '/components/checkbox-radio', icon: 'icon-check-square', text: { ko: '체크박스 & 라디오', en: 'Checkbox & Radio' } },
      { to: '/components/toggle', icon: 'icon-toggle-left', text: { ko: '토글', en: 'Toggle' } },
      { to: '/components/textarea', icon: 'icon-align-left', text: { ko: '텍스트 영역', en: 'Textarea' } },
      { to: '/components/tooltip', icon: 'icon-message-square', text: { ko: '툴팁', en: 'Tooltip' } },
      { to: '/components/progress', icon: 'icon-loader', text: { ko: '진행 표시', en: 'Progress' } },
      { to: '/components/breadcrumb', icon: 'icon-chevrons-right', text: { ko: '브레드크럼', en: 'Breadcrumb' } },
      { to: '/components/avatar', icon: 'icon-user', text: { ko: '아바타', en: 'Avatar' } },
      { to: '/components/dropdown', icon: 'icon-chevron-down', text: { ko: '드롭다운', en: 'Dropdown' } },
      { to: '/components/skeleton', icon: 'icon-image', text: { ko: '스켈레톤', en: 'Skeleton' } },
    ],
  },
  {
    label: { ko: '가이드', en: 'Guide' },
    items: [
      { to: '/guide/layout', icon: 'icon-layout', text: { ko: '페이지 레이아웃', en: 'Layout Guide' } },
      { to: '/guide/data-visualization', icon: 'icon-pie-chart', text: { ko: '데이터 시각화', en: 'Data Visualization' } },
    ],
  },
  {
    label: { ko: '패턴', en: 'Patterns' },
    items: [
      { to: '/dashboard', icon: 'icon-bar-chart-3', text: { ko: '운영 대시보드', en: 'Operations Dashboard' } },
      { to: '/monitoring', icon: 'icon-cpu', text: { ko: '장비 모니터링', en: 'Equipment Monitoring' } },
      { to: '/cctv', icon: 'icon-camera', text: { ko: 'CCTV', en: 'CCTV' } },
    ],
  },
];

const messages = {
  ariaPrimaryNav: { ko: '주요 탐색', en: 'Primary navigation' },
  closeMenu: { ko: '메뉴 닫기', en: 'Close menu' },
  openMenu: { ko: '메뉴 열기', en: 'Open menu' },
  brand: { ko: '디자인 시스템', en: 'Design System' },
  title: { ko: 'UI 디자인 키트', en: 'UI Design Kit' },
  themeLight: { ko: '라이트 모드', en: 'Light Mode' },
  themeDark: { ko: '다크 모드', en: 'Dark Mode' },
  languageMode: { ko: '언어 모드', en: 'Language mode' },
};

export default function Layout() {
  const { theme, toggle } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollKey, setScrollKey] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setIsNavOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isNavOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    if (window.matchMedia('(max-width: 960px)').matches) {
      document.body.style.overflow = 'hidden';
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isNavOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 961px)');
    const handleChange = (event) => {
      if (event.matches) {
        document.body.style.overflow = '';
        setIsNavOpen(false);
      }
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const hash = location.hash?.slice(1);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash, scrollKey]);

  const handleClick = (event, to) => {
    event.preventDefault();
    const [targetPath, targetHash] = to.split('#');
    const currentFull = location.pathname + location.hash;
    const targetFull = targetHash ? `${targetPath}#${targetHash}` : targetPath;

    if (currentFull === targetFull) {
      setScrollKey((key) => key + 1);
    } else {
      navigate(to);
    }
  };

  const isActive = (to) => {
    const [path, hash] = to.split('#');
    // 해시 없는 항목은, 현재 라우트가 해당 path이고 location.hash가 비어있을 때만 active
    if (path === '/') return location.pathname === '/' && !location.hash;
    if (hash) return location.pathname === path && location.hash === `#${hash}`;
    return location.pathname === path && !location.hash;
  };

  return (
    <div className="hl-page">
      <nav
        id="primary-navigation"
        className={`hl-sidebar${isNavOpen ? ' is-open' : ''}`}
        aria-label={t(messages.ariaPrimaryNav)}
      >
        <div className="hl-sidebar__brand">
          <img className="hl-brand__icon" src={hlBrandLogo} alt="HL" width={24} height={24} decoding="async" />
          <span className="hl-brand__text hl-brand__text--roboto">{t(messages.brand)}</span>
        </div>
        <div className="hl-sidebar__nav">
          {nav.map((group) => (
            <div key={group.label.en}>
              <div className="hl-sidebar__group-label">{t(group.label)}</div>
              {group.items.map((item) => (
                <a
                  key={item.to}
                  href={item.to}
                  className={`hl-sidebar__link${isActive(item.to) ? ' is-active' : ''}`}
                  onClick={(event) => handleClick(event, item.to)}
                >
                  <i className={item.icon} />
                  {t(item.text)}
                </a>
              ))}
            </div>
          ))}
        </div>
      </nav>

      <button
        type="button"
        className={`hl-sidebar-backdrop${isNavOpen ? ' is-visible' : ''}`}
        aria-label={t(messages.closeMenu)}
        aria-hidden={!isNavOpen}
        tabIndex={isNavOpen ? 0 : -1}
        onClick={() => setIsNavOpen(false)}
      />

      <div className="hl-main">
        <header className="hl-header">
          <div className="hl-header__lead">
            <button
              type="button"
              className="hl-nav-toggle"
              aria-label={isNavOpen ? t(messages.closeMenu) : t(messages.openMenu)}
              aria-expanded={isNavOpen}
              aria-controls="primary-navigation"
              onClick={() => setIsNavOpen((open) => !open)}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                {isNavOpen ? 'close' : 'menu'}
              </span>
            </button>
            <span className="hl-header__title">
              <span className="hl-brand__text hl-brand__text--roboto">{t(messages.title)}</span>
            </span>
          </div>
          <div className="hl-header__actions">
            <div className="doc-mode-switch" role="group" aria-label={t(messages.languageMode)}>
              <button
                type="button"
                className={`doc-mode-switch__btn${language === 'ko' ? ' is-active' : ''}`}
                onClick={() => setLanguage('ko')}
              >
                KO
              </button>
              <button
                type="button"
                className={`doc-mode-switch__btn${language === 'en' ? ' is-active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
            <button className="doc-theme-btn" onClick={toggle}>
              <span className="material-symbols-outlined" aria-hidden="true">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
              <span className="doc-theme-btn__label">{theme === 'dark' ? t(messages.themeLight) : t(messages.themeDark)}</span>
            </button>
          </div>
        </header>
        <div className="hl-body">
          <div className="hl-container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

