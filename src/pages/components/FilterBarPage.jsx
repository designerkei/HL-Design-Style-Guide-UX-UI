export default function FilterBarPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Filter Bar</h1>
        <p className="doc-page-desc">
          Filter Bar는 테이블이나 목록 상단에서 데이터를 검색, 정렬, 필터링하는 도구 모음입니다. 검색, 셀렉트, 날짜 선택, 버튼을 조합하여 사용합니다.
        </p>
      </div>

      {/* ========== 라이브 데모 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">라이브 데모</h2>

        {/* Full Filter Bar */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Full Filter Bar</span>
            <span className="doc-demo__tag">hl-filter</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-filter" style={{ width: '100%' }}>
              <input className="hl-input" type="text" placeholder="장비명 또는 코드 검색..." style={{ width: 200 }} />
              <select className="hl-input">
                <option value="">전체 유형</option>
                <option value="crane">크레인</option>
                <option value="pump">펌프</option>
                <option value="conveyor">컨베이어</option>
              </select>
              <select className="hl-input">
                <option value="">전체 상태</option>
                <option value="active">가동중</option>
                <option value="maintenance">점검중</option>
                <option value="stopped">정지</option>
              </select>
              <input className="hl-input" type="date" />
              <input className="hl-input" type="date" />
              <div style={{ marginLeft: 'auto' }} className="hl-flex hl-gap-2">
                <button className="hl-btn hl-btn--ghost hl-btn--sm">
                  <i className="icon-rotate-ccw" /> 초기화
                </button>
                <button className="hl-btn hl-btn--primary hl-btn--sm">
                  <i className="icon-search" /> 검색
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Filter Bar */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Minimal Filter Bar</span>
            <span className="doc-demo__tag">Search + Action</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-filter" style={{ width: '100%' }}>
              <input className="hl-input" type="text" placeholder="검색..." style={{ width: 240 }} />
              <div style={{ marginLeft: 'auto' }} className="hl-flex hl-gap-2">
                <button className="hl-btn hl-btn--secondary hl-btn--sm">
                  <i className="icon-download" /> 내보내기
                </button>
                <button className="hl-btn hl-btn--primary hl-btn--sm">
                  <i className="icon-plus" /> 등록
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar with Table */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Filter Bar + Table</span>
            <span className="doc-demo__tag">Combined</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-filter" style={{ width: '100%', borderRadius: 'var(--hl-radius) var(--hl-radius) 0 0' }}>
              <input className="hl-input" type="text" placeholder="검색..." style={{ width: 180 }} />
              <select className="hl-input">
                <option value="">전체 상태</option>
                <option value="active">가동중</option>
                <option value="stopped">정지</option>
              </select>
              <div style={{ marginLeft: 'auto' }}>
                <button className="hl-btn hl-btn--primary hl-btn--sm">
                  <i className="icon-search" /> 조회
                </button>
              </div>
            </div>
            <div className="hl-card" style={{ width: '100%', borderRadius: '0 0 var(--hl-radius) var(--hl-radius)' }}>
              <div className="hl-card__body hl-card__body--flush">
                <table className="hl-table">
                  <thead>
                    <tr>
                      <th>코드</th>
                      <th>장비명</th>
                      <th>유형</th>
                      <th>상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="hl-mono">EQ-001</td>
                      <td>크레인 A-001</td>
                      <td>크레인</td>
                      <td><span className="hl-badge hl-badge--success">가동</span></td>
                    </tr>
                    <tr>
                      <td className="hl-mono">EQ-002</td>
                      <td>펌프 B-014</td>
                      <td>펌프</td>
                      <td><span className="hl-badge hl-badge--warning">점검</span></td>
                    </tr>
                    <tr>
                      <td className="hl-mono">EQ-003</td>
                      <td>컨베이어 C-007</td>
                      <td>컨베이어</td>
                      <td><span className="hl-badge hl-badge--error">정지</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 일반적인 필터 패턴 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">일반적인 필터 패턴</h2>
        <p className="doc-section-desc">
          화면 유형별 권장 필터 구성입니다.
        </p>

        <div className="doc-sub">
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>화면 유형</th>
                <th>검색</th>
                <th>셀렉트</th>
                <th>날짜</th>
                <th>액션 버튼</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>장비 목록</td>
                <td>장비명/코드</td>
                <td>유형, 상태, 위치</td>
                <td>-</td>
                <td>등록, 내보내기</td>
              </tr>
              <tr>
                <td>작업 이력</td>
                <td>작업자/장비</td>
                <td>작업 유형, 상태</td>
                <td>시작일 ~ 종료일</td>
                <td>내보내기</td>
              </tr>
              <tr>
                <td>알람 로그</td>
                <td>장비/메시지</td>
                <td>심각도, 확인 여부</td>
                <td>발생일</td>
                <td>일괄 확인</td>
              </tr>
              <tr>
                <td>CCTV 모니터링</td>
                <td>카메라명</td>
                <td>위치, 상태</td>
                <td>-</td>
                <td>레이아웃 변경</td>
              </tr>
              <tr>
                <td>보고서</td>
                <td>-</td>
                <td>보고서 유형</td>
                <td>기간 선택</td>
                <td>생성, 다운로드</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ========== API ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">API</h2>

        <div className="doc-sub">
          <div className="doc-sub-title">CSS Classes</div>
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>클래스</th>
                <th>설명</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="doc-token-name">.hl-filter</td>
                <td>Filter Bar 컨테이너</td>
                <td>flex, wrap, gap sp-2, surface, radius, shadow-1</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-input</td>
                <td>검색/셀렉트/날짜 입력</td>
                <td>Filter 내에서 동일한 input 클래스 사용</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn</td>
                <td>액션 버튼</td>
                <td>검색, 초기화, 등록 등 액션 트리거</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ========== 가이드라인 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">가이드라인</h2>

        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">
                가장 많이 사용하는 필터를 왼쪽에 배치하세요. 검색 입력은 항상 가장 먼저 위치합니다. 액션 버튼은 우측 끝에 배치합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                5개 이상의 필터를 한 줄에 배치하지 마세요. 필터가 많으면 "고급 필터" 토글로 분리하여 복잡도를 줄입니다.
              </div>
            </div>
          </div>
        </div>

        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">
                초기화 버튼을 제공하세요. 사용자가 언제든 필터를 기본 상태로 되돌릴 수 있어야 합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                필터 변경 시 자동으로 데이터를 불러오지 마세요. 여러 필터를 조합한 후 "검색" 버튼으로 명시적으로 실행합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
