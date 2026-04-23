import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { useLanguage } from '../language';
import { useChartTheme } from '../chartTheme';

const chartData = [
  { label: { ko: '월', en: 'Mon' }, value: 1820 },
  { label: { ko: '화', en: 'Tue' }, value: 1650 },
  { label: { ko: '수', en: 'Wed' }, value: 1940 },
  { label: { ko: '목', en: 'Thu' }, value: 1750 },
  { label: { ko: '금', en: 'Fri' }, value: 1870 },
  { label: { ko: '토', en: 'Sat' }, value: 1420 },
  { label: { ko: '일', en: 'Sun' }, value: 1980 },
];

const processOptions = [
  { ko: '공정 전체', en: 'All Processes' },
  { ko: '조립', en: 'Assembly' },
  { ko: '도장', en: 'Painting' },
  { ko: '검사', en: 'Inspection' },
];

const kpis = [
  { label: { ko: '총생산량', en: 'Total Output' }, value: '12,345', unit: { ko: '건', en: 'ea' }, trend: { icon: 'icon-trending-up', className: 'hl-kpi__trend--up', text: '+8.2%' } },
  { label: { ko: '완료율', en: 'Completion Rate' }, value: '94.7', unit: '%' , trend: { icon: 'icon-trending-up', className: 'hl-kpi__trend--up', text: '+1.3%' } },
  { label: { ko: '평균처리시간', en: 'Avg. Handling Time' }, value: '4.2', unit: { ko: '시간', en: 'h' }, trend: { icon: 'icon-trending-down', className: 'hl-kpi__trend--down', text: '+0.3' } },
  { label: { ko: '불량률', en: 'Defect Rate' }, value: '2.1', unit: '%', trend: { icon: 'icon-trending-down', className: 'hl-kpi__trend--down', text: '+0.5%' } },
];

const rows = [
  { line: 'A', process: { ko: '조립', en: 'Assembly' }, target: '1,000', actual: '1,023', rate: '102.3%', status: { text: { ko: '정상', en: 'Normal' }, className: 'hl-badge--success' } },
  { line: 'B', process: { ko: '도장', en: 'Painting' }, target: '800', actual: '756', rate: '94.5%', status: { text: { ko: '주의', en: 'Caution' }, className: 'hl-badge--warning' } },
  { line: 'C', process: { ko: '검사', en: 'Inspection' }, target: '600', actual: '412', rate: '68.7%', status: { text: { ko: '미달', en: 'Below Target' }, className: 'hl-badge--error' } },
  { line: 'D', process: { ko: '포장', en: 'Packaging' }, target: '500', actual: '523', rate: '104.6%', status: { text: { ko: '정상', en: 'Normal' }, className: 'hl-badge--success' } },
  { line: 'E', process: { ko: '조립', en: 'Assembly' }, target: '900', actual: '875', rate: '97.2%', status: { text: { ko: '정상', en: 'Normal' }, className: 'hl-badge--success' } },
  { line: 'F', process: { ko: '도장', en: 'Painting' }, target: '700', actual: '651', rate: '93.0%', status: { text: { ko: '주의', en: 'Caution' }, className: 'hl-badge--warning' } },
];

const copy = {
  placeholder: { ko: '라인명 검색...', en: 'Search line...' },
  apply: { ko: '적용', en: 'Apply' },
  reset: { ko: '초기화', en: 'Reset' },
  chartTitle: { ko: '일별 생산량 추이', en: 'Daily Output Trend' },
  tableTitle: { ko: '생산 실적 상세', en: 'Production Details' },
  headers: {
    line: { ko: '라인', en: 'Line' },
    process: { ko: '공정', en: 'Process' },
    target: { ko: '목표', en: 'Target' },
    actual: { ko: '실적', en: 'Actual' },
    rate: { ko: '달성률', en: 'Rate' },
    status: { ko: '상태', en: 'Status' },
  },
};

export default function Dashboard() {
  const ct = useChartTheme();
  const { t } = useLanguage();
  const localizedChartData = chartData.map((item) => ({ name: t(item.label), value: item.value }));

  return (
    <div className="hl-container hl-stack">
      <div className="hl-filter">
        <input className="hl-input" type="text" placeholder={t(copy.placeholder)} />
        <select className="hl-input">
          {processOptions.map((option) => (
            <option key={option.en}>{t(option)}</option>
          ))}
        </select>
        <input className="hl-input" type="date" />
        <input className="hl-input" type="date" />
        <button className="hl-btn hl-btn--primary hl-btn--sm">{t(copy.apply)}</button>
        <button className="hl-btn hl-btn--tertiary hl-btn--sm">{t(copy.reset)}</button>
      </div>

      <div className="hl-kpi-row hl-kpi-row--4">
        {kpis.map((item) => (
          <div key={item.label.en} className="hl-kpi">
            <span className="hl-kpi__label">{t(item.label)}</span>
            <span className="hl-kpi__value">
              {item.value}
              <span className="hl-kpi__unit">{typeof item.unit === 'string' ? item.unit : t(item.unit)}</span>
            </span>
            <span className={`hl-kpi__trend ${item.trend.className}`}><i className={item.trend.icon} /> {item.trend.text}</span>
          </div>
        ))}
      </div>

      <div className="hl-card">
        <div className="hl-card__head">{t(copy.chartTitle)}</div>
        <div className="hl-card__body">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={localizedChartData} margin={{ top: 8, right: 12, bottom: 4, left: -12 }}>
              <CartesianGrid {...ct.grid} vertical={false} />
              <XAxis dataKey="name" tick={ct.axis} axisLine={false} tickLine={false} />
              <YAxis tick={ct.axis} axisLine={false} tickLine={false} />
              <Tooltip {...ct.tooltip} cursor={ct.cursor} />
              <Bar dataKey="value" fill={ct.colors.series[2]} radius={[4, 4, 0, 0]} barSize={36} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="hl-card">
        <div className="hl-card__head">{t(copy.tableTitle)}</div>
        <div className="hl-card__body hl-card__body--flush">
          <div className="hl-table-wrap">
            <table className="hl-table">
              <thead>
                <tr>
                  <th>{t(copy.headers.line)}</th>
                  <th>{t(copy.headers.process)}</th>
                  <th>{t(copy.headers.target)}</th>
                  <th>{t(copy.headers.actual)}</th>
                  <th>{t(copy.headers.rate)}</th>
                  <th>{t(copy.headers.status)}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.line}>
                    <td className="bold">{row.line}{t({ ko: '라인', en: ' Line' })}</td>
                    <td>{t(row.process)}</td>
                    <td className="mono">{row.target}</td>
                    <td className="mono">{row.actual}</td>
                    <td className="mono">{row.rate}</td>
                    <td><span className={`hl-badge ${row.status.className}`}>{t(row.status.text)}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
