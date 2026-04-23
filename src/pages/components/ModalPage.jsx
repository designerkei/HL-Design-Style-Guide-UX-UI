export default function ModalPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Modal</h1>
        <p className="doc-page-desc">
          사용자 확인, 폼 입력, 경고 등 중요한 상호작용을 위한 다이얼로그 컴포넌트입니다.
          배경을 차단하고 포커스를 집중시킵니다.
        </p>
      </div>

      {/* ========== Demo: Default Modal ========== */}
      <div className="doc-section">
        <div className="doc-section-title">기본 사용</div>
        <div className="doc-section-desc">
          Head, Body, Foot 세 영역으로 구성됩니다. 아래는 정적 미리보기입니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Default Modal (480px)</span>
            <span className="doc-demo__tag">hl-modal</span>
          </div>
          <div className="doc-demo__preview" style={{ justifyContent: 'center' }}>
            <div
              className="hl-modal"
              style={{ position: 'relative', maxWidth: 480 }}
            >
              <div className="hl-modal__head">
                <span>장비 삭제 확인</span>
                <button className="hl-btn hl-btn--tertiary hl-btn--sm">
                  <i className="icon-x" />
                </button>
              </div>
              <div className="hl-modal__body">
                선택한 장비 <strong>CNC-2401</strong>을 삭제하시겠습니까?
                이 작업은 되돌릴 수 없으며, 관련된 모든 이력 데이터가 함께 삭제됩니다.
              </div>
              <div className="hl-modal__foot">
                <button className="hl-btn hl-btn--secondary hl-btn--md">취소</button>
                <button className="hl-btn hl-btn--danger hl-btn--md">삭제</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== Demo: Description Modal ========== */}
      <div className="doc-section">
        <div className="doc-section-title">변형</div>
        <div className="doc-section-desc">
          본문에 상세 설명이나 폼 요소를 포함하는 모달입니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Form Modal</span>
            <span className="doc-demo__tag">hl-modal + hl-field</span>
          </div>
          <div className="doc-demo__preview" style={{ justifyContent: 'center' }}>
            <div
              className="hl-modal"
              style={{ position: 'relative', maxWidth: 480 }}
            >
              <div className="hl-modal__head">
                <span>알림 설정</span>
                <button className="hl-btn hl-btn--tertiary hl-btn--sm">
                  <i className="icon-x" />
                </button>
              </div>
              <div className="hl-modal__body">
                <div className="hl-field hl-mb-4">
                  <label className="hl-label">알림 이름</label>
                  <input className="hl-input" placeholder="예: 온도 임계치 경고" />
                </div>
                <div className="hl-field">
                  <label className="hl-label">설명</label>
                  <textarea
                    className="hl-textarea"
                    placeholder="알림 조건과 대상을 입력하세요"
                    rows={3}
                  />
                </div>
              </div>
              <div className="hl-modal__foot">
                <button className="hl-btn hl-btn--secondary hl-btn--md">취소</button>
                <button className="hl-btn hl-btn--primary hl-btn--md">저장</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== API ========== */}
      <div className="doc-section">
        <div className="doc-section-title">API</div>
        <div className="doc-section-desc">Modal을 구성하는 CSS 클래스입니다.</div>

        <table className="doc-token-table">
          <thead>
            <tr>
              <th>Class</th>
              <th>역할</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="doc-token-name">.hl-modal-backdrop</td>
              <td>오버레이 배경. fixed inset, z-index 50, flex center</td>
              <td>모달을 중앙 정렬하는 컨테이너</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-modal</td>
              <td>모달 카드. max-width 480px, radius-lg, shadow-4</td>
              <td>flex-column, max-height 80vh</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-modal__head</td>
              <td>헤더. 제목 + 닫기 버튼, border-bottom</td>
              <td>font-size md(16px), semibold</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-modal__body</td>
              <td>본문. 스크롤 가능, padding sp-4</td>
              <td>font-size sm(13px), text-secondary</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-modal__foot</td>
              <td>푸터. 액션 버튼 영역, flex justify-end, gap sp-2</td>
              <td>border-top</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ========== Guidelines ========== */}
      <div className="doc-section">
        <div className="doc-section-title">가이드라인</div>

        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">
                삭제, 승인 등 되돌리기 어려운 작업에 확인 모달을 사용하세요. 사용자에게 명확한 결과를 안내합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                단순 안내나 성공 메시지에 모달을 사용하지 마세요. Toast를 사용하는 것이 적합합니다.
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
                모달 본문은 짧고 핵심적인 내용만 담으세요. 복잡한 폼은 별도 페이지로 분리하는 것이 좋습니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                모달 안에 또 다른 모달을 열지 마세요. 중첩 모달은 사용자를 혼란스럽게 합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
