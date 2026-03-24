import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from './theme';

const nav = [
  {
    label: 'Overview',
    items: [{ to: '/', icon: 'icon-home', text: '시작하기' }],
  },
  {
    label: 'Foundations',
    items: [
      { to: '/foundations', icon: 'icon-palette', text: '색상' },
      { to: '/foundations#typography', icon: 'icon-type', text: '타이포그래피' },
      { to: '/foundations#spacing', icon: 'icon-ruler', text: '간격' },
      { to: '/foundations#shadows', icon: 'icon-square', text: '그림자 & 모서리' },
      { to: '/motion', icon: 'icon-zap', text: 'Motion' },
    ],
  },
  {
    label: 'Components',
    items: [
      { to: '/components', icon: 'icon-layout-grid', text: '전체 보기' },
      { to: '/components/button', icon: 'icon-mouse-pointer', text: 'Button' },
      { to: '/components/badge', icon: 'icon-tag', text: 'Badge' },
      { to: '/components/input', icon: 'icon-text-cursor', text: 'Input' },
      { to: '/components/card', icon: 'icon-credit-card', text: 'Card' },
      { to: '/components/kpi', icon: 'icon-trending-up', text: 'KPI Card' },
      { to: '/components/table', icon: 'icon-table', text: 'Table' },
      { to: '/components/filter-bar', icon: 'icon-filter', text: 'Filter Bar' },
      { to: '/components/toast', icon: 'icon-bell', text: 'Toast' },
      { to: '/components/modal', icon: 'icon-maximize-2', text: 'Modal' },
      { to: '/components/empty-state', icon: 'icon-inbox', text: 'Empty State' },
      { to: '/components/tabs', icon: 'icon-columns', text: 'Tabs' },
      { to: '/components/pagination', icon: 'icon-more-horizontal', text: 'Pagination' },
      { to: '/components/checkbox-radio', icon: 'icon-check-square', text: 'Checkbox & Radio' },
      { to: '/components/toggle', icon: 'icon-toggle-left', text: 'Toggle' },
      { to: '/components/textarea', icon: 'icon-align-left', text: 'Textarea' },
      { to: '/components/tooltip', icon: 'icon-message-square', text: 'Tooltip' },
      { to: '/components/progress', icon: 'icon-loader', text: 'Progress' },
      { to: '/components/breadcrumb', icon: 'icon-chevrons-right', text: 'Breadcrumb' },
      { to: '/components/avatar', icon: 'icon-user', text: 'Avatar' },
      { to: '/components/dropdown', icon: 'icon-chevron-down', text: 'Dropdown' },
      { to: '/components/skeleton', icon: 'icon-image', text: 'Skeleton' },
    ],
  },
  {
    label: 'Guide',
    items: [
      { to: '/guide/layout', icon: 'icon-layout', text: '페이지 레이아웃' },
      { to: '/guide/data-visualization', icon: 'icon-pie-chart', text: '데이터 시각화' },
    ],
  },
  {
    label: 'Patterns',
    items: [
      { to: '/dashboard', icon: 'icon-bar-chart-3', text: '운영 대시보드' },
      { to: '/monitoring', icon: 'icon-cpu', text: '장비 모니터링' },
      { to: '/cctv', icon: 'icon-camera', text: 'CCTV' },
    ],
  },
];

export default function Layout() {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollKey, setScrollKey] = useState(0);

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

  const handleClick = (e, to) => {
    e.preventDefault();
    const [targetPath, targetHash] = to.split('#');
    const currentFull = location.pathname + location.hash;
    const targetFull = targetHash ? targetPath + '#' + targetHash : targetPath;

    if (currentFull === targetFull) {
      setScrollKey(k => k + 1);
    } else {
      navigate(to);
    }
  };

  const isActive = (to) => {
    const [path, hash] = to.split('#');
    if (path === '/') return location.pathname === '/';
    if (hash) return location.pathname === path && location.hash === '#' + hash;
    return location.pathname === path;
  };

  return (
    <div className="hl-page">
      <nav className="hl-sidebar">
        <div className="hl-sidebar__brand">HL Design System</div>
        <div className="hl-sidebar__nav">
          {nav.map((group) => (
            <div key={group.label}>
              <div className="hl-sidebar__group-label">{group.label}</div>
              {group.items.map((item) => (
                <a
                  key={item.to}
                  href={item.to}
                  className={`hl-sidebar__link${isActive(item.to) ? ' is-active' : ''}`}
                  onClick={(e) => handleClick(e, item.to)}
                >
                  <i className={item.icon} />
                  {item.text}
                </a>
              ))}
            </div>
          ))}
        </div>
      </nav>

      <div className="hl-main">
        <header className="hl-header">
          <span className="hl-header__title">HL Design System</span>
          <button className="doc-theme-btn" onClick={toggle}>
            <i className={theme === 'dark' ? 'icon-sun' : 'icon-moon'} />
            {theme === 'dark' ? '라이트 모드' : '다크 모드'}
          </button>
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
