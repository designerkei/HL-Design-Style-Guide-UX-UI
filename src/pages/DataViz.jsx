import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { useChartTheme } from '../chartTheme';

/* ===== 샘플 데이터 ===== */
const barData = [
  { name: '1월', 생산량: 820 },
  { name: '2월', 생산량: 880 },
  { name: '3월', 생산량: 942 },
  { name: '4월', 생산량: 756 },
  { name: '5월', 생산량: 905 },
  { name: '6월', 생산량: 968 },
  { name: '7월', 생산량: 890 },
];

const lineData = [
  { name: '월', 가동률: 72 },
  { name: '화', 가동률: 78 },
  { name: '수', 가동률: 85 },
  { name: '목', 가동률: 80 },
  { name: '금', 가동률: 92 },
  { name: '토', 가동률: 88 },
  { name: '일', 가동률: 95 },
];

const areaData = [
  { name: '00:00', 온도: 22 },
  { name: '04:00', 온도: 21 },
  { name: '08:00', 온도: 24 },
  { name: '12:00', 온도: 28 },
  { name: '16:00', 온도: 31 },
  { name: '20:00', 온도: 26 },
  { name: '24:00', 온도: 23 },
];

const donutData = [
  { name: '가동', value: 42 },
  { name: '점검', value: 4 },
  { name: '정지', value: 2 },
];

const multiLineData = [
  { name: '1월', A라인: 92, B라인: 85, C라인: 78 },
  { name: '2월', A라인: 88, B라인: 90, C라인: 82 },
  { name: '3월', A라인: 95, B라인: 87, C라인: 75 },
  { name: '4월', A라인: 91, B라인: 92, C라인: 80 },
  { name: '5월', A라인: 96, B라인: 89, C라인: 83 },
  { name: '6월', A라인: 93, B라인: 94, C라인: 86 },
];

export default function DataViz() {
  const ct = useChartTheme();
  const donutColors = [ct.colors.status.success, ct.colors.status.warning, ct.colors.status.error];
  const gradId = 'hlAreaGrad';

  return (
    <>
      <div className="doc-page-head">
        <h1 className="doc-page-title">데이터 시각화</h1>
        <p className="doc-page-desc">
          차트 라이브러리로 <strong>Recharts</strong>를 권장합니다. HL 테마 프리셋(chartTheme.js)을 적용하면 디자인 시스템과 일관된 차트를 만들 수 있습니다.
        </p>
      </div>

      {/* ===== 1. 차트 유형 선택 ===== */}
      <div className="doc-section">
        <div className="doc-section-title">차트 유형 선택 가이드</div>
        <div className="doc-section-desc">데이터 특성에 따라 적합한 차트를 선택합니다.</div>
        <table className="doc-token-table">
          <thead><tr><th>데이터 유형</th><th>권장 차트</th><th>사용 예시</th><th>비고</th></tr></thead>
          <tbody>
            <tr><td>시계열 추이</td><td className="doc-token-name">Line / Area</td><td>가동률 추이, 온도 변화</td><td>포인트 7~30개 권장</td></tr>
            <tr><td>카테고리 비교</td><td className="doc-token-name">Bar</td><td>장비별 가동률, 월별 생산량</td><td>카테고리 5~12개</td></tr>
            <tr><td>구성비</td><td className="doc-token-name">Donut (Pie)</td><td>장비 상태 분포, 알람 유형</td><td>항목 최대 6개</td></tr>
            <tr><td>다중 시리즈</td><td className="doc-token-name">Multi-Line</td><td>라인별 가동률 비교</td><td>시리즈 최대 5개</td></tr>
          </tbody>
        </table>
      </div>

      {/* ===== 2. 바 차트 ===== */}
      <div className="doc-section">
        <div className="doc-section-title">바 차트 (Bar Chart)</div>
        <div className="doc-section-desc">카테고리 비교에 사용합니다.</div>
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">월별 생산량</span>
            <span className="doc-demo__tag">Recharts BarChart</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-card" style={{ width: '100%' }}>
              <div className="hl-card__head">월별 생산량 (건)</div>
              <div className="hl-card__body">
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={barData} margin={{ top: 8, right: 12, bottom: 4, left: -12 }}>
                    <CartesianGrid {...ct.grid} vertical={false} />
                    <XAxis dataKey="name" tick={ct.axis} axisLine={false} tickLine={false} />
                    <YAxis tick={ct.axis} axisLine={false} tickLine={false} />
                    <Tooltip {...ct.tooltip} cursor={ct.cursor} />
                    <Bar dataKey="생산량" fill={ct.colors.series[2]} radius={[4, 4, 0, 0]} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 3. 라인 차트 ===== */}
      <div className="doc-section">
        <div className="doc-section-title">라인 차트 (Line Chart)</div>
        <div className="doc-section-desc">시계열 데이터의 추이를 보여줍니다.</div>
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">주간 가동률 추이</span>
            <span className="doc-demo__tag">Recharts LineChart</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-card" style={{ width: '100%' }}>
              <div className="hl-card__head">주간 가동률 (%)</div>
              <div className="hl-card__body">
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={lineData} margin={{ top: 8, right: 12, bottom: 4, left: -12 }}>
                    <CartesianGrid {...ct.grid} vertical={false} />
                    <XAxis dataKey="name" tick={ct.axis} axisLine={false} tickLine={false} />
                    <YAxis tick={ct.axis} axisLine={false} tickLine={false} domain={[0, 100]} />
                    <Tooltip {...ct.tooltip} />
                    <Line
                      type="monotone" dataKey="가동률" stroke={ct.colors.series[1]}
                      strokeWidth={2} dot={{ r: 4, fill: ct.colors.series[1], stroke: ct.dotStroke, strokeWidth: 2 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 4. 영역 차트 ===== */}
      <div className="doc-section">
        <div className="doc-section-title">영역 차트 (Area Chart)</div>
        <div className="doc-section-desc">추이에 영역 채움을 더해 시각적 무게감을 줍니다.</div>
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">시간별 온도 변화</span>
            <span className="doc-demo__tag">Recharts AreaChart</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-card" style={{ width: '100%' }}>
              <div className="hl-card__head">시간별 온도 (°C)</div>
              <div className="hl-card__body">
                <ResponsiveContainer width="100%" height={240}>
                  <AreaChart data={areaData} margin={{ top: 8, right: 12, bottom: 4, left: -12 }}>
                    <defs>
                      <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={ct.colors.series[2]} stopOpacity={ct.areaOpacity.top} />
                        <stop offset="100%" stopColor={ct.colors.series[2]} stopOpacity={ct.areaOpacity.bottom} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid {...ct.grid} vertical={false} />
                    <XAxis dataKey="name" tick={ct.axis} axisLine={false} tickLine={false} />
                    <YAxis tick={ct.axis} axisLine={false} tickLine={false} />
                    <Tooltip {...ct.tooltip} />
                    <Area
                      type="monotone" dataKey="온도" stroke={ct.colors.series[2]}
                      strokeWidth={2} fill={`url(#${gradId})`}
                      dot={{ r: 3, fill: ct.colors.series[2], stroke: ct.dotStroke, strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 5. 도넛 차트 ===== */}
      <div className="doc-section">
        <div className="doc-section-title">도넛 차트 (Donut)</div>
        <div className="doc-section-desc">구성비를 보여줍니다. 중앙에 총합이나 핵심 수치를 배치합니다.</div>
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">장비 상태 분포</span>
            <span className="doc-demo__tag">Recharts PieChart</span>
          </div>
          <div className="doc-demo__preview" style={{ justifyContent: 'center' }}>
            <div className="hl-card" style={{ width: 360 }}>
              <div className="hl-card__head">장비 상태</div>
              <div className="hl-card__body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
                <div style={{ position: 'relative', width: 160, height: 160 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={donutData} cx="50%" cy="50%"
                        innerRadius={48} outerRadius={72}
                        dataKey="value" strokeWidth={0}
                      >
                        {donutData.map((_, i) => (
                          <Cell key={i} fill={donutColors[i]} />
                        ))}
                      </Pie>
                      <Tooltip {...ct.tooltip} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)', textAlign: 'center', pointerEvents: 'none',
                  }}>
                    <div style={{ fontSize: 22, fontWeight: 700, color: ct.text.primary, lineHeight: 1 }}>48</div>
                    <div style={{ fontSize: 11, color: ct.text.muted, marginTop: 2 }}>총 장비</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {donutData.map((d, i) => (
                    <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: donutColors[i], flexShrink: 0 }} />
                      <span style={{ color: ct.text.secondary }}>{d.name}</span>
                      <span style={{ fontFamily: 'Geist Mono, monospace', fontWeight: 600, marginLeft: 'auto', paddingLeft: 20, color: ct.text.primary }}>
                        {d.value}대
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 6. 다중 시리즈 ===== */}
      <div className="doc-section">
        <div className="doc-section-title">다중 시리즈 (Multi-Line)</div>
        <div className="doc-section-desc">여러 시리즈를 비교합니다. Primary 팔레트 명도로 구분합니다.</div>
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">라인별 가동률 비교</span>
            <span className="doc-demo__tag">Recharts multi-line</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-card" style={{ width: '100%' }}>
              <div className="hl-card__head">라인별 월간 가동률 (%)</div>
              <div className="hl-card__body">
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={multiLineData} margin={{ top: 8, right: 12, bottom: 4, left: -12 }}>
                    <CartesianGrid {...ct.grid} vertical={false} />
                    <XAxis dataKey="name" tick={ct.axis} axisLine={false} tickLine={false} />
                    <YAxis tick={ct.axis} axisLine={false} tickLine={false} domain={[60, 100]} />
                    <Tooltip {...ct.tooltip} />
                    <Legend wrapperStyle={{ fontSize: 12, fontFamily: "'Pretendard Variable', system-ui, sans-serif", color: ct.text.secondary }} />
                    <Line type="monotone" dataKey="A라인" stroke={ct.colors.series[0]} strokeWidth={2} dot={{ r: 3, stroke: ct.dotStroke, strokeWidth: 2, fill: ct.colors.series[0] }} />
                    <Line type="monotone" dataKey="B라인" stroke={ct.colors.series[1]} strokeWidth={2} dot={{ r: 3, stroke: ct.dotStroke, strokeWidth: 2, fill: ct.colors.series[1] }} />
                    <Line type="monotone" dataKey="C라인" stroke={ct.colors.series[2]} strokeWidth={2} dot={{ r: 3, stroke: ct.dotStroke, strokeWidth: 2, fill: ct.colors.series[2] }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 7. 색상 규칙 ===== */}
      <div className="doc-section">
        <div className="doc-section-title">색상 규칙</div>
        <div className="doc-sub">
          <div className="doc-sub-title">일반 시리즈 — Primary 명도 순</div>
          <div className="doc-color-row">
            <div className="doc-color-swatch" style={{ backgroundColor: '#002B68', color: '#fff' }}><b>S1</b>900</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#00729a', color: '#fff' }}><b>S2</b>700</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#00B4ED', color: '#002B68' }}><b>S3</b>500</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#6bc5ea', color: '#002B68' }}><b>S4</b>300</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#a8ddf3', color: '#005474' }}><b>S5</b>200</div>
          </div>
          <div className="doc-sub-title" style={{ marginTop: 12 }}>다크 모드 시리즈 — 밝은 톤 우선</div>
          <div className="doc-color-row">
            <div className="doc-color-swatch" style={{ backgroundColor: '#6bc5ea', color: '#002B68' }}><b>S1</b>300</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#00B4ED', color: '#002B68' }}><b>S2</b>500</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#a8ddf3', color: '#002B68' }}><b>S3</b>200</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#00729a', color: '#fff' }}><b>S4</b>700</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#d5eef9', color: '#005474' }}><b>S5</b>100</div>
          </div>
        </div>
        <div className="doc-sub">
          <div className="doc-sub-title">상태 차트 — 시맨틱 색상</div>
          <div className="doc-color-row">
            <div className="doc-color-swatch" style={{ backgroundColor: '#18864b', color: '#fff' }}><b>정상</b>Light</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#3dd68c', color: '#0a0f1a' }}><b>정상</b>Dark</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#b88b17', color: '#fff' }}><b>경고</b>Light</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#f0c541', color: '#0a0f1a' }}><b>경고</b>Dark</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#c9302c', color: '#fff' }}><b>에러</b>Light</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#f87171', color: '#0a0f1a' }}><b>에러</b>Dark</div>
          </div>
        </div>
      </div>

      {/* ===== 8. 테마 프리셋 사용법 ===== */}
      <div className="doc-section">
        <div className="doc-section-title">HL 테마 프리셋 사용법</div>
        <div className="doc-section-desc">useChartTheme() 훅으로 다크 모드 자동 대응됩니다.</div>
        <div className="hl-card">
          <div className="hl-card__head">chartTheme.js 사용 예시</div>
          <div className="hl-card__body" style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, lineHeight: 1.7, whiteSpace: 'pre', overflowX: 'auto', color: ct.text.secondary }}>
{`import { useChartTheme } from './chartTheme';

function MyChart({ data }) {
  const ct = useChartTheme();

  return (
    <BarChart data={data}>
      <CartesianGrid {...ct.grid} vertical={false} />
      <XAxis tick={ct.axis} axisLine={false} tickLine={false} />
      <YAxis tick={ct.axis} axisLine={false} tickLine={false} />
      <Tooltip {...ct.tooltip} />
      <Bar dataKey="value" fill={ct.colors.series[2]}
           radius={[4,4,0,0]} />
    </BarChart>
  );
}`}
          </div>
        </div>
      </div>

      {/* ===== 9. 숫자 포맷 ===== */}
      <div className="doc-section">
        <div className="doc-section-title">숫자 포맷 규칙</div>
        <div className="doc-section-desc">모든 숫자는 Geist Mono 폰트를 사용합니다.</div>
        <table className="doc-token-table">
          <thead><tr><th>유형</th><th>규칙</th><th>입력</th><th>출력</th></tr></thead>
          <tbody>
            <tr><td>정수</td><td>천 단위 쉼표</td><td className="doc-token-val">1234567</td><td style={{ fontFamily: 'Geist Mono, monospace', fontWeight: 500 }}>1,234,567</td></tr>
            <tr><td>퍼센트</td><td>소수점 1자리</td><td className="doc-token-val">0.985</td><td style={{ fontFamily: 'Geist Mono, monospace', fontWeight: 500 }}>98.5%</td></tr>
            <tr><td>날짜</td><td>YYYY-MM-DD HH:mm</td><td className="doc-token-val">ISO</td><td style={{ fontFamily: 'Geist Mono, monospace', fontWeight: 500 }}>2026-03-24 14:30</td></tr>
            <tr><td>큰 수</td><td>만 단위 축약</td><td className="doc-token-val">12345</td><td style={{ fontFamily: 'Geist Mono, monospace', fontWeight: 500 }}>1.2만</td></tr>
          </tbody>
        </table>
      </div>

      {/* ===== 10. 차트 + 테이블 연동 ===== */}
      <div className="doc-section">
        <div className="doc-section-title">차트 + 테이블 연동</div>
        <div className="doc-section-desc">차트만 단독 사용 금지. 항상 테이블 fallback을 제공합니다.</div>
        <table className="doc-token-table">
          <thead><tr><th>패턴</th><th>설명</th></tr></thead>
          <tbody>
            <tr><td className="doc-token-name">차트 아래 테이블</td><td>동일 데이터 테이블을 차트 아래에 배치</td></tr>
            <tr><td className="doc-token-name">탭 전환</td><td>차트/테이블 탭으로 뷰 전환</td></tr>
            <tr><td className="doc-token-name">클릭 드릴다운</td><td>차트 요소 클릭 시 필터된 테이블 이동</td></tr>
          </tbody>
        </table>
      </div>

      {/* ===== 11. Do/Don't ===== */}
      <div className="doc-section">
        <div className="doc-section-title">가이드라인</div>
        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">useChartTheme() 훅을 사용하세요. 다크 모드에서 시리즈 색상, 축, 그리드, 툴팁이 자동 전환됩니다.</div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don&apos;t</div>
              <div className="doc-guideline__text">차트에 색상을 하드코딩하지 마세요. 다크 모드에서 보이지 않게 됩니다.</div>
            </div>
          </div>
        </div>
        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">차트와 테이블을 항상 병행 제공하세요. 차트는 추세, 테이블은 정확한 수치 확인용.</div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don&apos;t</div>
              <div className="doc-guideline__text">차트만 단독으로 표시하지 마세요. 정확한 수치 확인이 불가능합니다.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
