/**
 * HL Design System — Recharts Theme Preset
 *
 * 다크 모드 자동 대응. useChartTheme() 훅을 사용하세요.
 *
 * 사용법:
 *   import { useChartTheme } from './chartTheme';
 *   const { colors, axis, grid, tooltip } = useChartTheme();
 */
import { useMemo, useSyncExternalStore } from 'react';

/* ── 테마 감지 ── */
function subscribe(cb) {
  const observer = new MutationObserver(cb);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}
function getSnapshot() {
  return document.documentElement.getAttribute('data-theme') || 'light';
}

/* ── 시리즈 색상 ── */
const seriesLight = ['#002B68', '#00729a', '#00B4ED', '#6bc5ea', '#a8ddf3'];
const seriesDark  = ['#6bc5ea', '#00B4ED', '#a8ddf3', '#00729a', '#d5eef9'];

const status = {
  success: '#18864b',
  warning: '#b88b17',
  error:   '#c9302c',
  neutral: '#8b919e',
};
const statusDark = {
  success: '#3dd68c',
  warning: '#f0c541',
  error:   '#f87171',
  neutral: '#8b949e',
};

/* ── Hook ── */
export function useChartTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot);
  const isDark = theme === 'dark';

  return useMemo(() => ({
    isDark,

    colors: {
      series: isDark ? seriesDark : seriesLight,
      status: isDark ? statusDark : status,
    },

    axis: {
      fontSize: 11,
      fontFamily: 'Geist Mono, monospace',
      fill: isDark ? '#8b949e' : '#6b7280',
    },

    grid: {
      stroke: isDark ? '#30363d' : '#d2d5db',
      strokeDasharray: '3 3',
    },

    tooltip: {
      isAnimationActive: false,
      contentStyle: {
        background: isDark ? '#161b22' : '#fff',
        border: `1px solid ${isDark ? '#30363d' : '#d2d5db'}`,
        borderRadius: 10,
        boxShadow: isDark
          ? '0 4px 12px rgba(0,0,0,.4)'
          : '0 4px 12px rgba(0,0,0,.1)',
        fontSize: 13,
        fontFamily: 'Pretendard Variable, Geist, sans-serif',
        padding: '8px 12px',
        color: isDark ? '#e6edf3' : '#111827',
      },
      labelStyle: { fontWeight: 600, marginBottom: 4 },
      itemStyle: {
        fontFamily: 'Geist Mono, monospace',
        fontSize: 12,
        padding: '2px 0',
        color: isDark ? '#e6edf3' : '#111827',
      },
    },

    /* 도넛 중앙 등 직접 스타일용 */
    text: {
      primary: isDark ? '#e6edf3' : '#111827',
      secondary: isDark ? '#8b949e' : '#6b7280',
      muted: isDark ? '#656d76' : '#8b919e',
    },

    /* Area 그라데이션 투명도 */
    areaOpacity: { top: isDark ? 0.25 : 0.3, bottom: 0.02 },

    /* dot 스트로크 */
    dotStroke: isDark ? '#161b22' : '#fff',

    /* Tooltip cursor (bar hover 배경 사각형) */
    cursor: { fill: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)' },
  }), [isDark]);
}

/* ── 하위 호환 (static export) ── */
export const hlColors = { series: seriesLight, status };
export const hlChartProps = { margin: { top: 8, right: 12, bottom: 4, left: 0 } };
export const hlAxisStyle = { fontSize: 11, fontFamily: 'Geist Mono, monospace', fill: '#6b7280' };
export const hlGridStyle = { stroke: '#d2d5db', strokeDasharray: '3 3' };
export const hlTooltipStyle = {
  contentStyle: {
    background: '#fff', border: '1px solid #d2d5db', borderRadius: 10,
    boxShadow: '0 4px 12px rgba(0,0,0,.1)', fontSize: 13,
    fontFamily: 'Pretendard Variable, Geist, sans-serif', padding: '8px 12px',
  },
  labelStyle: { fontWeight: 600, marginBottom: 4 },
  itemStyle: { fontFamily: 'Geist Mono, monospace', fontSize: 12, padding: '2px 0' },
};
