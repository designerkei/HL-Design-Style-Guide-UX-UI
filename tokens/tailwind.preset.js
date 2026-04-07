/**
 * HL Design System — Tailwind CSS Preset
 *
 * 사용법:
 * // tailwind.config.js
 * module.exports = {
 *   presets: [require('./design-system/tokens/tailwind.preset.js')],
 *   // ... 프로젝트 설정
 * };
 *
 * SYNC WARNING: 값을 변경할 경우 design-tokens.css도 반드시 동기화할 것.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      /* --- Colors --- */
      colors: {
        primary: {
          50:  '#e8f7fd',
          100: '#c5ecfb',
          200: '#93ddf8',
          300: '#56c9f3',
          400: '#1fb8ed',
          500: '#00B4ED', // HL Sky Blue
          600: '#0091c7', // 기본 인터랙티브
          700: '#006d96',
          800: '#054d6e',
          900: '#002B68', // HL Navy
        },
        gray: {
          50:  '#f8f9fb',
          100: '#f1f3f5',
          200: '#e2e5e9',
          300: '#cdd1d7',
          400: '#a1a7b0',
          500: '#7a818c',
          600: '#5c6370',
          700: '#434a56',
          800: '#2d333d',
          900: '#1c2028',
          950: '#0d1017',
        },
        accent: {
          gold:          '#C09A5D',
          'gold-light':  '#d9be91',
          silver:        '#B2B2B2',
          'silver-light':'#d9d9d9',
        },
        /* 시맨틱 배경(bg)은 CSS 변수 참조 → design-tokens.css와 함께 쓰면 다크모드 자동 전환.
           design-tokens.css 없이 쓸 경우 fallback 값(라이트 모드)이 적용됨. */
        success:    { DEFAULT: '#16a34a', bg: 'var(--color-success-bg, #f0fdf4)' },
        warning:    { DEFAULT: '#ca8a04', bg: 'var(--color-warning-bg, #fefce8)' },
        error:      { DEFAULT: '#dc2626', bg: 'var(--color-error-bg, #fef2f2)' },
        info:       { DEFAULT: '#0091c7', bg: 'var(--color-info-bg, #e8f7fd)' },
      },

      /* --- Typography --- */
      fontFamily: {
        sans: [
          'Pretendard Variable', 'Geist',
          '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif',
        ],
        mono: [
          'Geist Mono', 'JetBrains Mono', 'Fira Code', 'monospace',
        ],
      },
      fontSize: {
        xs:   ['0.75rem',  { lineHeight: '1rem' }],    // 12px
        sm:   ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        base: ['1rem',     { lineHeight: '1.5rem' }],   // 16px
        lg:   ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        xl:   ['1.25rem',  { lineHeight: '1.75rem' }],  // 20px
        '2xl':['1.5rem',   { lineHeight: '2rem' }],     // 24px
        '3xl':['1.875rem', { lineHeight: '2.25rem' }],  // 30px
        '4xl':['2.25rem',  { lineHeight: '2.5rem' }],   // 36px
      },

      /* --- Spacing (4px 배수) --- */
      spacing: {
        '0.5': '0.125rem',  // 2px
        '1':   '0.25rem',   // 4px
        '1.5': '0.375rem',  // 6px
        '2':   '0.5rem',    // 8px
        '2.5': '0.625rem',  // 10px
        '3':   '0.75rem',   // 12px
        '4':   '1rem',      // 16px
        '5':   '1.25rem',   // 20px
        '6':   '1.5rem',    // 24px
        '8':   '2rem',      // 32px
        '10':  '2.5rem',    // 40px
        '12':  '3rem',      // 48px
        '16':  '4rem',      // 64px
        '20':  '5rem',      // 80px
      },

      /* --- Border Radius --- */
      borderRadius: {
        sm:   '4px',
        md:   '6px',
        lg:   '8px',
        xl:   '12px',
        full: '9999px',
      },

      /* --- Shadows --- */
      boxShadow: {
        xs:  '0 1px 2px rgba(0, 0, 0, 0.05)',
        sm:  '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        md:  '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        lg:  '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        xl:  '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
      },

      /* --- Transitions --- */
      transitionDuration: {
        fast:   '100ms',
        normal: '200ms',
        slow:   '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      /* --- Layout --- */
      maxWidth: {
        content: '1200px',
      },
      width: {
        sidebar: '280px',
      },
      height: {
        header: '56px',
      },
    },
  },
};
