import { useLanguage } from '../language';

const areaOptions = [
  { ko: '위치 전체', en: 'All Areas' },
  { ko: '1층 생산동', en: '1F Production' },
  { ko: '2층 조립동', en: '2F Assembly' },
  { ko: '출입구', en: 'Entry Zone' },
];

const statusOptions = [
  { ko: '상태 전체', en: 'All Statuses' },
  { ko: '온라인', en: 'Online' },
  { ko: '오프라인', en: 'Offline' },
  { ko: '이벤트', en: 'Event' },
];

const kpis = [
  { label: { ko: '전체 카메라', en: 'Total Cameras' }, value: '24', unit: { ko: '대', en: 'ea' } },
  { label: { ko: '온라인', en: 'Online' }, value: '22', unit: { ko: '대', en: 'ea' } },
  { label: { ko: '오프라인', en: 'Offline' }, value: '2', unit: { ko: '대', en: 'ea' } },
  { label: { ko: '금일 이벤트', en: 'Today Events' }, value: '15', unit: { ko: '건', en: 'ea' } },
];

const videos = [
  { id: 'CAM-01', label: { ko: '1층 생산동 입구', en: '1F Production Entrance' }, state: { text: 'LIVE', className: 'hl-badge--success' }, off: false },
  { id: 'CAM-02', label: { ko: '2층 조립동 A구역', en: '2F Assembly Zone A' }, state: { text: 'LIVE', className: 'hl-badge--success' }, off: false },
  { id: 'CAM-03', label: { ko: '출입구 주차장', en: 'Entry Parking Lot' }, state: { ko: '이벤트', en: 'Event' }, stateClass: 'hl-badge--warning', off: false },
  { id: 'CAM-04', label: { ko: '1층 생산동 후면', en: '1F Production Rear' }, state: { ko: '오프라인', en: 'Offline' }, stateClass: 'hl-badge--error', off: true },
];

const cameraStatus = [
  { id: 'CAM-01', area: { ko: '1층 생산동 입구', en: '1F Production Entrance' }, status: { ko: '온라인', en: 'Online' }, badge: 'hl-badge--success', quality: '1080p' },
  { id: 'CAM-02', area: { ko: '2층 조립동 A구역', en: '2F Assembly Zone A' }, status: { ko: '온라인', en: 'Online' }, badge: 'hl-badge--success', quality: '4K' },
  { id: 'CAM-03', area: { ko: '출입구 주차장', en: 'Entry Parking Lot' }, status: { ko: '이벤트', en: 'Event' }, badge: 'hl-badge--warning', quality: '1080p' },
  { id: 'CAM-04', area: { ko: '1층 생산동 후면', en: '1F Production Rear' }, status: { ko: '오프라인', en: 'Offline' }, badge: 'hl-badge--error', quality: '1080p' },
];

const detections = [
  { time: '14:32:10', camera: 'CAM-03', event: { ko: '움직임 감지', en: 'Motion Detection' }, confidence: '94.2%' },
  { time: '14:15:45', camera: 'CAM-01', event: { ko: '안전모 미착용', en: 'Missing Safety Helmet' }, confidence: '87.6%' },
  { time: '13:58:22', camera: 'CAM-02', event: { ko: '구역 침입', en: 'Restricted Area Entry' }, confidence: '91.3%' },
  { time: '13:42:08', camera: 'CAM-03', event: { ko: '차량 진입', en: 'Vehicle Entry' }, confidence: '96.8%' },
];

const copy = {
  placeholder: { ko: '카메라 검색...', en: 'Search camera...' },
  apply: { ko: '적용', en: 'Apply' },
  cameraStatusTitle: { ko: '카메라 상태', en: 'Camera Status' },
  detectionTitle: { ko: '감지 이벤트', en: 'Detection Events' },
  headers: {
    id: { ko: 'ID', en: 'ID' },
    area: { ko: '위치', en: 'Area' },
    status: { ko: '상태', en: 'Status' },
    quality: { ko: '해상도', en: 'Resolution' },
    time: { ko: '시간', en: 'Time' },
    camera: { ko: '카메라', en: 'Camera' },
    event: { ko: '이벤트', en: 'Event' },
    confidence: { ko: '정확도', en: 'Confidence' },
  },
};

export default function Cctv() {
  const { t } = useLanguage();

  return (
    <div className="hl-container hl-stack">
      <div className="hl-filter">
        <input className="hl-input" type="text" placeholder={t(copy.placeholder)} />
        <select className="hl-input">
          {areaOptions.map((option) => <option key={option.en}>{t(option)}</option>)}
        </select>
        <select className="hl-input">
          {statusOptions.map((option) => <option key={option.en}>{t(option)}</option>)}
        </select>
        <select className="hl-input">
          <option>2x2</option>
          <option>3x3</option>
        </select>
        <button className="hl-btn hl-btn--primary hl-btn--sm">{t(copy.apply)}</button>
      </div>

      <div className="hl-kpi-row hl-kpi-row--4">
        {kpis.map((item) => (
          <div key={item.label.en} className="hl-kpi">
            <span className="hl-kpi__label">{t(item.label)}</span>
            <span className="hl-kpi__value">{item.value}<span className="hl-kpi__unit">{t(item.unit)}</span></span>
          </div>
        ))}
      </div>

      <div className="hl-grid hl-grid--2">
        {videos.map((video) => (
          <div key={video.id} className={`hl-video-cell${video.off ? ' hl-video-cell--off' : ''}`}>
            <div className="hl-video-cell__tag"><span className={`hl-badge ${video.stateClass ?? video.state.className}`}>{typeof video.state.text === 'string' ? video.state.text : t(video.state)}</span></div>
            <div className="hl-video-cell__icon"><i className="icon-video"></i></div>
            {video.id} · {t(video.label)}
          </div>
        ))}
      </div>

      <div className="hl-grid hl-grid--2">
        <div className="hl-card">
          <div className="hl-card__head">{t(copy.cameraStatusTitle)}</div>
          <div className="hl-card__body hl-card__body--flush">
            <table className="hl-table">
              <thead>
                <tr>
                  <th>{t(copy.headers.id)}</th>
                  <th>{t(copy.headers.area)}</th>
                  <th>{t(copy.headers.status)}</th>
                  <th>{t(copy.headers.quality)}</th>
                </tr>
              </thead>
              <tbody>
                {cameraStatus.map((camera) => (
                  <tr key={camera.id}>
                    <td className="mono">{camera.id}</td>
                    <td>{t(camera.area)}</td>
                    <td><span className={`hl-badge ${camera.badge}`}>{t(camera.status)}</span></td>
                    <td className="mono">{camera.quality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="hl-card">
          <div className="hl-card__head">{t(copy.detectionTitle)}</div>
          <div className="hl-card__body hl-card__body--flush">
            <table className="hl-table">
              <thead>
                <tr>
                  <th>{t(copy.headers.time)}</th>
                  <th>{t(copy.headers.camera)}</th>
                  <th>{t(copy.headers.event)}</th>
                  <th>{t(copy.headers.confidence)}</th>
                </tr>
              </thead>
              <tbody>
                {detections.map((item) => (
                  <tr key={`${item.time}-${item.camera}`}>
                    <td className="mono">{item.time}</td>
                    <td>{item.camera}</td>
                    <td>{t(item.event)}</td>
                    <td className="mono">{item.confidence}</td>
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
