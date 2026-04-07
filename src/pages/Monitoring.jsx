import { useLanguage } from '../language';

const typeOptions = [
  { ko: '유형 전체', en: 'All Types' },
  { ko: 'CNC', en: 'CNC' },
  { ko: '로봇암', en: 'Robot Arm' },
  { ko: '컨베이어', en: 'Conveyor' },
  { ko: '프레스', en: 'Press' },
];

const statusOptions = [
  { ko: '상태 전체', en: 'All Statuses' },
  { ko: '가동', en: 'Running' },
  { ko: '점검', en: 'Maintenance' },
  { ko: '정지', en: 'Stopped' },
];

const kpis = [
  { label: { ko: '총장비', en: 'Total Equipment' }, value: '48', unit: { ko: '대', en: 'ea' } },
  { label: { ko: '가동중', en: 'Running' }, value: '42', unit: { ko: '대', en: 'ea' }, trend: { className: 'hl-kpi__trend--up', text: '+7.5%' } },
  { label: { ko: '점검중', en: 'In Maintenance' }, value: '4', unit: { ko: '대', en: 'ea' } },
  { label: { ko: '정지', en: 'Stopped' }, value: '2', unit: { ko: '대', en: 'ea' } },
];

const equipment = [
  { name: 'CNC-001', icon: 'icon-bot', status: { text: { ko: '가동', en: 'Running' }, className: 'hl-badge--success' }, meta: { ko: '가동시간 12h · 온도 42°C', en: 'Runtime 12h · Temperature 42°C' } },
  { name: 'Robot-A02', icon: 'icon-cpu', status: { text: { ko: '가동', en: 'Running' }, className: 'hl-badge--success' }, meta: { ko: '가동시간 8h · 온도 38°C', en: 'Runtime 8h · Temperature 38°C' } },
  { name: 'Conveyor-03', icon: 'icon-settings', status: { text: { ko: '점검', en: 'Maintenance' }, className: 'hl-badge--warning' }, meta: { ko: '벨트 교체 작업 예정', en: 'Scheduled belt replacement' } },
  { name: 'Press-B01', icon: 'icon-wrench', status: { text: { ko: '가동', en: 'Running' }, className: 'hl-badge--success' }, meta: { ko: '가동시간 10h · 압력 정상', en: 'Runtime 10h · Pressure normal' } },
  { name: 'CNC-004', icon: 'icon-monitor', status: { text: { ko: '가동', en: 'Running' }, className: 'hl-badge--success' }, meta: { ko: '가동시간 6h · 온도 40°C', en: 'Runtime 6h · Temperature 40°C' } },
  { name: 'Robot-C03', icon: 'icon-cpu', status: { text: { ko: '정지', en: 'Stopped' }, className: 'hl-badge--error' }, meta: { ko: '오류 코드 E-4021', en: 'Error code E-4021' } },
  { name: 'Press-A02', icon: 'icon-zap', status: { text: { ko: '가동', en: 'Running' }, className: 'hl-badge--success' }, meta: { ko: '가동시간 9h · 압력 정상', en: 'Runtime 9h · Pressure normal' } },
  { name: 'Conveyor-07', icon: 'icon-settings', status: { text: { ko: '점검', en: 'Maintenance' }, className: 'hl-badge--warning' }, meta: { ko: '정기 점검 진행중', en: 'Routine maintenance in progress' } },
];

const events = [
  { time: '14:32:10', name: 'Robot-C03', type: { ko: '오류', en: 'Error' }, detail: { ko: '모터 과열 감지 후 자동 정지', en: 'Auto-stopped after motor overheating was detected' }, severity: { text: { ko: '위험', en: 'Critical' }, className: 'hl-badge--error' } },
  { time: '14:15:45', name: 'Conveyor-03', type: { ko: '점검', en: 'Maintenance' }, detail: { ko: '벨트 장력 이상으로 점검 요청', en: 'Inspection requested due to abnormal belt tension' }, severity: { text: { ko: '주의', en: 'Warning' }, className: 'hl-badge--warning' } },
  { time: '13:58:22', name: 'CNC-001', type: { ko: '알림', en: 'Info' }, detail: { ko: '공구 교체 주기 도래(잔여 50회)', en: 'Tool replacement cycle reached (50 cycles remaining)' }, severity: { text: { ko: '정보', en: 'Info' }, className: 'hl-badge--info' } },
  { time: '13:42:08', name: 'Press-B01', type: { ko: '알림', en: 'Info' }, detail: { ko: '일일 생산 목표 달성 (100%)', en: 'Daily production target achieved (100%)' }, severity: { text: { ko: '정상', en: 'Normal' }, className: 'hl-badge--success' } },
  { time: '13:20:33', name: 'Conveyor-07', type: { ko: '점검', en: 'Maintenance' }, detail: { ko: '정기 점검 시작 후 예상 2시간', en: 'Estimated 2 hours after maintenance start' }, severity: { text: { ko: '주의', en: 'Warning' }, className: 'hl-badge--warning' } },
  { time: '12:55:17', name: 'CNC-004', type: { ko: '알림', en: 'Info' }, detail: { ko: '온도 센서 한계값 근접 (40°C)', en: 'Temperature sensor nearing threshold (40°C)' }, severity: { text: { ko: '정보', en: 'Info' }, className: 'hl-badge--info' } },
];

const copy = {
  placeholder: { ko: '장비 검색...', en: 'Search equipment...' },
  apply: { ko: '적용', en: 'Apply' },
  reset: { ko: '초기화', en: 'Reset' },
  eventTitle: { ko: '최근 이벤트 로그', en: 'Recent Event Log' },
  headers: {
    time: { ko: '시간', en: 'Time' },
    equipment: { ko: '장비', en: 'Equipment' },
    type: { ko: '유형', en: 'Type' },
    detail: { ko: '이벤트 내용', en: 'Event Detail' },
    severity: { ko: '심각도', en: 'Severity' },
  },
};

export default function Monitoring() {
  const { t } = useLanguage();

  return (
    <div className="hl-container hl-stack">
      <div className="hl-filter">
        <input className="hl-input" type="text" placeholder={t(copy.placeholder)} />
        <select className="hl-input">
          {typeOptions.map((option) => <option key={option.en}>{t(option)}</option>)}
        </select>
        <select className="hl-input">
          {statusOptions.map((option) => <option key={option.en}>{t(option)}</option>)}
        </select>
        <button className="hl-btn hl-btn--primary hl-btn--sm">{t(copy.apply)}</button>
        <button className="hl-btn hl-btn--ghost hl-btn--sm">{t(copy.reset)}</button>
      </div>

      <div className="hl-kpi-row hl-kpi-row--4">
        {kpis.map((item) => (
          <div key={item.label.en} className="hl-kpi">
            <span className="hl-kpi__label">{t(item.label)}</span>
            <span className="hl-kpi__value">{item.value}<span className="hl-kpi__unit">{t(item.unit)}</span></span>
            {item.trend && <span className={`hl-kpi__trend ${item.trend.className}`}><i className="icon-trending-up" /> {item.trend.text}</span>}
          </div>
        ))}
      </div>

      <div className="hl-grid hl-grid--auto">
        {equipment.map((item) => (
          <div key={item.name} className="hl-equip-card">
            <div className="hl-equip-card__icon"><i className={item.icon}></i></div>
            <div className="hl-equip-card__name">{item.name}</div>
            <span className={`hl-badge ${item.status.className}`}>{t(item.status.text)}</span>
            <div className="hl-equip-card__meta">{t(item.meta)}</div>
          </div>
        ))}
      </div>

      <div className="hl-card">
        <div className="hl-card__head">{t(copy.eventTitle)}</div>
        <div className="hl-card__body hl-card__body--flush">
          <table className="hl-table">
            <thead>
              <tr>
                <th>{t(copy.headers.time)}</th>
                <th>{t(copy.headers.equipment)}</th>
                <th>{t(copy.headers.type)}</th>
                <th>{t(copy.headers.detail)}</th>
                <th>{t(copy.headers.severity)}</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={`${event.time}-${event.name}`}>
                  <td className="mono">{event.time}</td>
                  <td>{event.name}</td>
                  <td>{t(event.type)}</td>
                  <td>{t(event.detail)}</td>
                  <td><span className={`hl-badge ${event.severity.className}`}>{t(event.severity.text)}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
