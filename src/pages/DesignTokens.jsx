import { useLanguage } from '../language';
import { FIGMA_COMPONENT_REF } from '../data/figma-components';

const copy = {
  pageTitle: { ko: '디자인 토큰', en: 'Design Tokens' },
  pageDesc: {
    ko: 'Figma(KRDS v1.0.0)에서 추출한 토큰 아키텍처, 타이포그래피 6계층, Shape 스케일, 아이콘 크기, 컴포넌트 PC/MO 스펙을 정리합니다. 기초(Foundations) 탭의 HL 시스템 토큰과 함께 참조하세요.',
    en: 'Token architecture, 6-layer typography, Shape scale, icon sizes, and PC/MO component specs extracted from Figma (KRDS v1.0.0). Use alongside the HL system tokens on the Foundations tab.',
  },
  archTitle: { ko: '토큰 아키텍처', en: 'Token Architecture' },
  archDesc: {
    ko: 'KRDS 변수는 4개 컬렉션으로 구성됩니다. primitive 값을 바꾸면 모든 관련 스타일이 자동 업데이트됩니다.',
    en: 'KRDS variables are organized into 4 collections. Changing a primitive value automatically updates all related styles.',
  },
  typoTitle: { ko: 'Figma 타이포그래피 6계층', en: 'Figma Typography (6 Layers)' },
  typoDesc: {
    ko: 'Figma 공식 스타일에서 추출한 타입 시스템입니다. HL 시스템 토큰(--hl-text-*)과 매핑하여 사용합니다.',
    en: 'Type system extracted from Figma official styles. Map to HL system tokens (--hl-text-*) for implementation.',
  },
  shapeTitle: { ko: 'Shape 스케일 (Radius)', en: 'Shape Scale (Radius)' },
  shapeDesc: {
    ko: 'Figma 기준 모서리 반경 스케일과 적용 컴포넌트입니다.',
    en: 'Corner radius scale from Figma with applicable components.',
  },
  iconTitle: { ko: '아이콘 크기', en: 'Icon Sizes' },
  iconDesc: {
    ko: '시스템 아이콘은 24px 기준, 6가지 크기로 사용합니다.',
    en: 'System icons use a 24px baseline with 6 available sizes.',
  },
  identityTitle: { ko: 'Identity 컴포넌트 PC/MO', en: 'Identity Components (PC/MO)' },
  identityDesc: {
    ko: 'Masthead와 Identifier의 PC/MO 실측 스펙입니다.',
    en: 'Measured PC/MO specs for Masthead and Identifier components.',
  },
  catalogTitle: { ko: '컴포넌트 카탈로그 요약', en: 'Component Catalog Summary' },
  catalogDesc: {
    ko: 'Figma에서 추출한 935개 컴포넌트, 9개 카테고리 요약입니다.',
    en: 'Summary of 935 components across 9 categories extracted from Figma.',
  },
  headers: {
    collection: { ko: '컬렉션', en: 'Collection' },
    role: { ko: '역할', en: 'Role' },
    layer: { ko: '계층', en: 'Layer' },
    name: { ko: '이름', en: 'Name' },
    font: { ko: '폰트', en: 'Font' },
    weight: { ko: '두께', en: 'Weight' },
    size: { ko: '크기(px)', en: 'Size (px)' },
    level: { ko: '레벨', en: 'Level' },
    radius: { ko: 'Radius', en: 'Radius' },
    container: { ko: '컨테이너', en: 'Container' },
    components: { ko: '적용 컴포넌트', en: 'Applied Components' },
    item: { ko: '항목', en: 'Item' },
    pc: { ko: 'PC', en: 'PC' },
    mo: { ko: 'MO', en: 'MO' },
    category: { ko: '카테고리', en: 'Category' },
    count: { ko: '주요 컴포넌트', en: 'Key Components' },
  },
};

const tokenCollections = [
  { name: 'primitive', role: { ko: '원시값 (color, number 등). UI에 직접 적용 X. 다른 컬렉션에서 참조하는 기준 값.', en: 'Raw values (color, number, etc.). Not applied directly to UI. Reference values for other collections.' } },
  { name: 'semantic', role: { ko: 'primitive에 의미를 부여한 토큰. 실제 UI에서 사용되는 변수 값.', en: 'Tokens giving meaning to primitives. Variable values used in actual UI.' } },
  { name: 'mode', role: { ko: '라이트/다크 모드 전환용 토큰.', en: 'Tokens for light/dark mode switching.' } },
  { name: 'responsive', role: { ko: '반응형 대응용 토큰.', en: 'Tokens for responsive adaptation.' } },
];

const shapeScale = [
  { level: 'Xsmall', radius: '2px', container: '8–16px', components: 'Floament' },
  { level: 'Small', radius: '4px', container: '20–32px', components: 'Chips, Checkbox, Radio, Switch, Tag' },
  { level: 'Medium', radius: '6px', container: '40–48px', components: 'Button, Text Input, Textarea, Select' },
  { level: 'Medium', radius: '8px', container: '56–64px', components: 'Carousel-Number, Step Indicator, Pagination' },
  { level: 'Large', radius: '10px', container: '72–80px', components: 'Card, Dialog' },
  { level: 'Xlarge', radius: '12px', container: '96–120px', components: 'Banner, Dialog, Bottom Sheet' },
  { level: 'Full', radius: '9999px', container: '—', components: 'Avatar, Toggle track' },
];

const iconSizes = [12, 16, 20, 24, 32, 40];

const identitySpecs = [
  {
    name: 'Masthead',
    pcSpec: { ko: '1200×32, 폰트 15px, 패딩 0, 배경 #eef2f7', en: '1200×32, font 15px, padding 0, bg #eef2f7' },
    moSpec: { ko: '390×32, 폰트 15px, 좌측 패딩 16px', en: '390×32, font 15px, left padding 16px' },
  },
  {
    name: 'Identifier',
    pcSpec: { ko: '1200×40 (Footer-in/out), 폰트 15px, 로고 77×24', en: '1200×40 (Footer-in/out), font 15px, logo 77×24' },
    moSpec: { ko: '318×60, 폰트 13px, 로고 64×20, 높이 증가(줄바꿈)', en: '318×60, font 13px, logo 64×20, taller (line wrap)' },
  },
];

function flattenTypo(styles) {
  const rows = [];
  for (const [layer, items] of Object.entries(styles.typography)) {
    for (const item of items) {
      rows.push({ layer, ...item });
    }
  }
  return rows;
}

export default function DesignTokens() {
  const { t } = useLanguage();
  const typoRows = flattenTypo(FIGMA_COMPONENT_REF.styles);
  const cats = FIGMA_COMPONENT_REF.categories;

  return (
    <>
      <div className="doc-page-head">
        <div className="doc-page-title">{t(copy.pageTitle)}</div>
        <div className="doc-page-desc">{t(copy.pageDesc)}</div>
      </div>

      <div className="doc-section" id="token-architecture">
        <div className="doc-section-title">{t(copy.archTitle)}</div>
        <div className="doc-section-desc">{t(copy.archDesc)}</div>
        <table className="doc-token-table">
          <thead>
            <tr>
              <th>{t(copy.headers.collection)}</th>
              <th>{t(copy.headers.role)}</th>
            </tr>
          </thead>
          <tbody>
            {tokenCollections.map((c) => (
              <tr key={c.name}>
                <td className="doc-token-name">{c.name}</td>
                <td>{t(c.role)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="doc-section" id="figma-typography">
        <div className="doc-section-title">{t(copy.typoTitle)}</div>
        <div className="doc-section-desc">{t(copy.typoDesc)}</div>
        <div className="hl-table-wrap">
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>{t(copy.headers.layer)}</th>
                <th>{t(copy.headers.name)}</th>
                <th>{t(copy.headers.font)}</th>
                <th>{t(copy.headers.weight)}</th>
                <th>{t(copy.headers.size)}</th>
              </tr>
            </thead>
            <tbody>
              {typoRows.map((row) => (
                <tr key={row.name}>
                  <td className="doc-token-name">{row.layer}</td>
                  <td className="doc-token-val">{row.name}</td>
                  <td>{row.family}</td>
                  <td>{row.weight}</td>
                  <td className="doc-token-val">{row.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="doc-section" id="shape-scale">
        <div className="doc-section-title">{t(copy.shapeTitle)}</div>
        <div className="doc-section-desc">{t(copy.shapeDesc)}</div>
        <table className="doc-token-table">
          <thead>
            <tr>
              <th>{t(copy.headers.level)}</th>
              <th>{t(copy.headers.radius)}</th>
              <th>{t(copy.headers.container)}</th>
              <th>{t(copy.headers.components)}</th>
            </tr>
          </thead>
          <tbody>
            {shapeScale.map((row, i) => (
              <tr key={i}>
                <td className="doc-token-name">{row.level}</td>
                <td className="doc-token-val">{row.radius}</td>
                <td>{row.container}</td>
                <td>{row.components}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="doc-section" id="icon-sizes">
        <div className="doc-section-title">{t(copy.iconTitle)}</div>
        <div className="doc-section-desc">{t(copy.iconDesc)}</div>
        <div className="hl-flex hl-gap-3 hl-flex-wrap hl-items-center">
          {iconSizes.map((size) => (
            <div
              key={size}
              className="hl-flex"
              style={{ flexDirection: 'column', alignItems: 'center', gap: 4 }}
            >
              <div
                style={{
                  width: size,
                  height: size,
                  borderRadius: 'var(--hl-radius-sm)',
                  background: size === 24 ? 'var(--hl-primary-500)' : 'var(--hl-surface-raised)',
                  border: '1px solid var(--hl-border)',
                }}
              />
              <span className="hl-mono" style={{ fontSize: 11, color: size === 24 ? 'var(--hl-primary-700)' : 'var(--hl-text-muted)' }}>
                {size}px{size === 24 ? ' ★' : ''}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="doc-section" id="identity-pcmo">
        <div className="doc-section-title">{t(copy.identityTitle)}</div>
        <div className="doc-section-desc">{t(copy.identityDesc)}</div>
        <table className="doc-token-table">
          <thead>
            <tr>
              <th>{t(copy.headers.item)}</th>
              <th>{t(copy.headers.pc)}</th>
              <th>{t(copy.headers.mo)}</th>
            </tr>
          </thead>
          <tbody>
            {identitySpecs.map((row) => (
              <tr key={row.name}>
                <td className="doc-token-name">{row.name}</td>
                <td>{t(row.pcSpec)}</td>
                <td>{t(row.moSpec)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="doc-section" id="component-catalog">
        <div className="doc-section-title">{t(copy.catalogTitle)}</div>
        <div className="doc-section-desc">{t(copy.catalogDesc)}</div>
        <table className="doc-token-table">
          <thead>
            <tr>
              <th>{t(copy.headers.category)}</th>
              <th>{t(copy.headers.count)}</th>
            </tr>
          </thead>
          <tbody>
            {cats.map((cat) => (
              <tr key={cat.id}>
                <td className="doc-token-name">{cat.name}</td>
                <td>{cat.components.map((c) => c.name).join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
