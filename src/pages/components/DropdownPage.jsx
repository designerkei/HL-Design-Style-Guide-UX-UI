export default function DropdownPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Dropdown Menu</h1>
        <p className="doc-page-desc">
          버튼 클릭 시 나타나는 액션 메뉴입니다. 행 단위 액션, 컨텍스트 메뉴 등에 사용합니다.
        </p>
      </div>

      {/* ========== 1. 기본 데모 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">기본 Dropdown</div>
        <div className="doc-section-desc">
          트리거 버튼과 메뉴로 구성됩니다. 아래 예시는 메뉴가 열린 상태(static)를 보여줍니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Open State</span>
            <span className="doc-demo__tag">hl-dropdown</span>
          </div>
          <div className="doc-demo__preview" style={{ minHeight: 220, alignItems: 'flex-start' }}>
            <div className="hl-dropdown">
              <button className="hl-btn hl-btn--secondary hl-btn--sm">
                <i className="icon-more-horizontal" /> 액션
              </button>
              <div className="hl-dropdown__menu hl-dropdown__menu--static">
                <button className="hl-dropdown__item">
                  <i className="icon-edit" /> 수정
                </button>
                <button className="hl-dropdown__item">
                  <i className="icon-copy" /> 복제
                </button>
                <div className="hl-dropdown__divider" />
                <button className="hl-dropdown__item hl-dropdown__item--danger">
                  <i className="icon-trash-2" /> 삭제
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 2. 아이템 변형 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">아이템 변형</div>
        <div className="doc-section-desc">
          일반 항목, 구분선(divider), 위험 액션(danger) 세 가지 유형이 있습니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Item Types</span>
            <span className="doc-demo__tag">hl-dropdown__item</span>
          </div>
          <div className="doc-demo__preview" style={{ minHeight: 200, alignItems: 'flex-start' }}>
            <div className="hl-dropdown">
              <button className="hl-btn hl-btn--secondary hl-btn--sm">
                <i className="icon-more-horizontal" /> 아이템 변형
              </button>
              <div className="hl-dropdown__menu hl-dropdown__menu--static">
                <button className="hl-dropdown__item">
                  <i className="icon-eye" /> 상세 보기
                </button>
                <button className="hl-dropdown__item">
                  <i className="icon-edit" /> 수정
                </button>
                <button className="hl-dropdown__item">
                  <i className="icon-download" /> 다운로드
                </button>
                <div className="hl-dropdown__divider" />
                <button className="hl-dropdown__item hl-dropdown__item--danger">
                  <i className="icon-trash-2" /> 삭제
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 3. 서브메뉴 (하위 그룹) ========== */}
      <div className="doc-section">
        <div className="doc-section-title">서브메뉴</div>
        <div className="doc-section-desc">
          항목에 하위 메뉴를 연결할 수 있습니다. 호버 시 오른쪽으로 펼쳐집니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Submenu</span>
            <span className="doc-demo__tag">hl-dropdown__sub</span>
          </div>
          <div className="doc-demo__preview" style={{ minHeight: 260, alignItems: 'flex-start', paddingRight: 240 }}>
            <div className="hl-dropdown">
              <button className="hl-btn hl-btn--secondary hl-btn--sm">
                <i className="icon-settings" /> 설정
              </button>
              <div className="hl-dropdown__menu hl-dropdown__menu--static">
                <button className="hl-dropdown__item">
                  <i className="icon-user" /> 프로필
                </button>
                <div className="hl-dropdown__sub">
                  <button className="hl-dropdown__item">
                    <i className="icon-bell" /> 알림 설정
                  </button>
                  <div className="hl-dropdown__submenu hl-dropdown__submenu--static">
                    <button className="hl-dropdown__item">이메일 알림</button>
                    <button className="hl-dropdown__item">푸시 알림</button>
                    <button className="hl-dropdown__item">SMS 알림</button>
                  </div>
                </div>
                <div className="hl-dropdown__sub">
                  <button className="hl-dropdown__item">
                    <i className="icon-globe" /> 언어
                  </button>
                  <div className="hl-dropdown__submenu hl-dropdown__submenu--static">
                    <button className="hl-dropdown__item">한국어</button>
                    <button className="hl-dropdown__item">English</button>
                    <button className="hl-dropdown__item">日本語</button>
                  </div>
                </div>
                <div className="hl-dropdown__divider" />
                <button className="hl-dropdown__item hl-dropdown__item--danger">
                  <i className="icon-log-out" /> 로그아웃
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 4. API ========== */}
      <div className="doc-section">
        <div className="doc-section-title">API</div>
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
              <td className="doc-token-name">.hl-dropdown</td>
              <td>래퍼 컨테이너</td>
              <td>position: relative</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-dropdown__menu</td>
              <td>메뉴 패널</td>
              <td>absolute, shadow-3, min-width 160px</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-dropdown__item</td>
              <td>메뉴 항목</td>
              <td>text-sm, hover시 surface-alt 배경</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-dropdown__item--danger</td>
              <td>위험 액션 (삭제 등)</td>
              <td>color: --hl-error</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-dropdown__divider</td>
              <td>구분선</td>
              <td>height 1px, border color</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-dropdown__sub</td>
              <td>서브메뉴 래퍼</td>
              <td>position: relative, 화살표 자동 표시</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-dropdown__submenu</td>
              <td>하위 메뉴 패널</td>
              <td>호버 시 오른쪽으로 펼침</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ========== 4. 가이드라인 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">가이드라인</div>
        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">
                위험한 액션(삭제 등)은 divider로 분리하고 --danger 스타일을 적용하세요. 아이콘과 함께 사용하면 직관성이 높아집니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                드롭다운에 7개 이상의 항목을 넣지 마세요. 항목이 많으면 별도의 페이지나 모달로 분리합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
