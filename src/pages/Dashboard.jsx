import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { useChartTheme } from '../chartTheme';

const chartData = [
  { name: '월', 생산량: 1820 },
  { name: '화', 생산량: 1650 },
  { name: '수', 생산량: 1940 },
  { name: '목', 생산량: 1750 },
  { name: '금', 생산량: 1870 },
  { name: '토', 생산량: 1420 },
  { name: '일', 생산량: 1980 },
];

export default function Dashboard() {
  const ct = useChartTheme();

  return (
    <div className="hl-container hl-stack">

      {/* 1. Filter Bar */}
      <div className="hl-filter">
        <input className="hl-input" type="text" placeholder="라인명 검색..." />
        <select className="hl-input">
          <option>공정 전체</option>
          <option>조립</option>
          <option>도장</option>
          <option>검사</option>
        </select>
        <input className="hl-input" type="date" />
        <input className="hl-input" type="date" />
        <button className="hl-btn hl-btn--primary hl-btn--sm">적용</button>
        <button className="hl-btn hl-btn--ghost hl-btn--sm">초기화</button>
      </div>

      {/* 2. KPI Row */}
      <div className="hl-kpi-row hl-kpi-row--4">
        <div className="hl-kpi">
          <span className="hl-kpi__label">총생산량</span>
          <span className="hl-kpi__value">12,345<span className="hl-kpi__unit">건</span></span>
          <span className="hl-kpi__trend hl-kpi__trend--up"><i className="icon-trending-up" /> +8.2%</span>
        </div>
        <div className="hl-kpi">
          <span className="hl-kpi__label">완료율</span>
          <span className="hl-kpi__value">94.7<span className="hl-kpi__unit">%</span></span>
          <span className="hl-kpi__trend hl-kpi__trend--up"><i className="icon-trending-up" /> +1.3%</span>
        </div>
        <div className="hl-kpi">
          <span className="hl-kpi__label">평균처리시간</span>
          <span className="hl-kpi__value">4.2<span className="hl-kpi__unit">시간</span></span>
          <span className="hl-kpi__trend hl-kpi__trend--down"><i className="icon-trending-down" /> +0.3</span>
        </div>
        <div className="hl-kpi">
          <span className="hl-kpi__label">불량률</span>
          <span className="hl-kpi__value">2.1<span className="hl-kpi__unit">%</span></span>
          <span className="hl-kpi__trend hl-kpi__trend--down"><i className="icon-trending-down" /> +0.5%</span>
        </div>
      </div>

      {/* 3. Chart — Recharts */}
      <div className="hl-card">
        <div className="hl-card__head">일별 생산량 추이</div>
        <div className="hl-card__body">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={chartData} margin={{ top: 8, right: 12, bottom: 4, left: -12 }}>
              <CartesianGrid {...ct.grid} vertical={false} />
              <XAxis dataKey="name" tick={ct.axis} axisLine={false} tickLine={false} />
              <YAxis tick={ct.axis} axisLine={false} tickLine={false} />
              <Tooltip {...ct.tooltip} cursor={ct.cursor} />
              <Bar dataKey="생산량" fill={ct.colors.series[2]} radius={[4, 4, 0, 0]} barSize={36} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 4. Production Table */}
      <div className="hl-card">
        <div className="hl-card__head">생산 실적 상세</div>
        <div className="hl-card__body hl-card__body--flush">
          <div className="hl-table-wrap">
            <table className="hl-table">
              <thead>
                <tr>
                  <th>라인</th>
                  <th>공정</th>
                  <th>목표</th>
                  <th>실적</th>
                  <th>달성률</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bold">A라인</td>
                  <td>조립</td>
                  <td className="mono">1,000</td>
                  <td className="mono">1,023</td>
                  <td className="mono">102.3%</td>
                  <td><span className="hl-badge hl-badge--success">정상</span></td>
                </tr>
                <tr>
                  <td className="bold">B라인</td>
                  <td>도장</td>
                  <td className="mono">800</td>
                  <td className="mono">756</td>
                  <td className="mono">94.5%</td>
                  <td><span className="hl-badge hl-badge--warning">주의</span></td>
                </tr>
                <tr>
                  <td className="bold">C라인</td>
                  <td>검사</td>
                  <td className="mono">600</td>
                  <td className="mono">412</td>
                  <td className="mono">68.7%</td>
                  <td><span className="hl-badge hl-badge--error">미달</span></td>
                </tr>
                <tr>
                  <td className="bold">D라인</td>
                  <td>포장</td>
                  <td className="mono">500</td>
                  <td className="mono">523</td>
                  <td className="mono">104.6%</td>
                  <td><span className="hl-badge hl-badge--success">정상</span></td>
                </tr>
                <tr>
                  <td className="bold">E라인</td>
                  <td>조립</td>
                  <td className="mono">900</td>
                  <td className="mono">875</td>
                  <td className="mono">97.2%</td>
                  <td><span className="hl-badge hl-badge--success">정상</span></td>
                </tr>
                <tr>
                  <td className="bold">F라인</td>
                  <td>도장</td>
                  <td className="mono">700</td>
                  <td className="mono">651</td>
                  <td className="mono">93.0%</td>
                  <td><span className="hl-badge hl-badge--warning">주의</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
