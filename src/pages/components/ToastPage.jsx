export default function ToastPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Toast</h1>
        <p className="doc-page-desc">
          Toast는 사용자에게 시스템 상태나 작업 결과를 알려주는 비침투적 알림 컴포넌트입니다. 화면 흐름을 방해하지 않으면서 즉각적인 피드백을 제공합니다.
        </p>
      </div>

      {/* ========== 라이브 데모 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">라이브 데모</h2>

        {/* 4 Variants Stacked */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Variants</span>
            <span className="doc-demo__tag">hl-toast--*</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            {/* Info */}
            <div className="hl-toast hl-toast--info" style={{ maxWidth: 480 }}>
              <span className="hl-toast__icon"><i className="icon-info" /></span>
              <div>
                <div className="hl-toast__title">시스템 업데이트 안내</div>
                <div className="hl-toast__msg">v2.4.0 업데이트가 적용되었습니다. 새로운 기능을 확인하세요.</div>
              </div>
            </div>

            {/* Success */}
            <div className="hl-toast hl-toast--success" style={{ maxWidth: 480 }}>
              <span className="hl-toast__icon"><i className="icon-circle-check" /></span>
              <div>
                <div className="hl-toast__title">저장 완료</div>
                <div className="hl-toast__msg">장비 정보가 성공적으로 저장되었습니다.</div>
              </div>
            </div>

            {/* Warning */}
            <div className="hl-toast hl-toast--warning" style={{ maxWidth: 480 }}>
              <span className="hl-toast__icon"><i className="icon-triangle-alert" /></span>
              <div>
                <div className="hl-toast__title">점검 일정 임박</div>
                <div className="hl-toast__msg">크레인 A-001의 정기 점검일이 3일 남았습니다.</div>
              </div>
            </div>

            {/* Error */}
            <div className="hl-toast hl-toast--error" style={{ maxWidth: 480 }}>
              <span className="hl-toast__icon"><i className="icon-circle-x" /></span>
              <div>
                <div className="hl-toast__title">저장 실패</div>
                <div className="hl-toast__msg">네트워크 오류로 데이터를 저장할 수 없습니다. 다시 시도해주세요.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Title Only */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Title Only (간략 알림)</span>
            <span className="doc-demo__tag">Compact</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-toast hl-toast--success" style={{ maxWidth: 480 }}>
              <span className="hl-toast__icon"><i className="icon-circle-check" /></span>
              <div>
                <div className="hl-toast__title">복사되었습니다.</div>
              </div>
            </div>
            <div className="hl-toast hl-toast--error" style={{ maxWidth: 480 }}>
              <span className="hl-toast__icon"><i className="icon-circle-x" /></span>
              <div>
                <div className="hl-toast__title">삭제에 실패했습니다.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== Anatomy ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">해부도 (Anatomy)</h2>
        <p className="doc-section-desc">
          Toast는 Icon + Title + Message 세 요소로 구성됩니다. 좌측 border 색상으로 variant를 표현합니다.
        </p>

        <div className="doc-sub">
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>요소</th>
                <th>클래스</th>
                <th>역할</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>컨테이너</td>
                <td className="doc-token-name">.hl-toast</td>
                <td>Toast 전체 래퍼</td>
                <td>flex, gap, shadow-2, border-left 3px</td>
              </tr>
              <tr>
                <td>아이콘</td>
                <td className="doc-token-name">.hl-toast__icon</td>
                <td>상태를 시각적으로 전달하는 Lucide 아이콘</td>
                <td>18px, variant별 색상 적용</td>
              </tr>
              <tr>
                <td>제목</td>
                <td className="doc-token-name">.hl-toast__title</td>
                <td>핵심 메시지 (한 줄)</td>
                <td>font-size sm, weight 600</td>
              </tr>
              <tr>
                <td>설명</td>
                <td className="doc-token-name">.hl-toast__msg</td>
                <td>추가 설명 (선택)</td>
                <td>font-size sm, secondary color</td>
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
                <td className="doc-token-name">.hl-toast</td>
                <td>Toast 기본 스타일 (필수)</td>
                <td>surface 배경, shadow-2, border-left</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-toast--info</td>
                <td>Info 변형</td>
                <td>border-left: info 색상, 아이콘 info 색상</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-toast--success</td>
                <td>Success 변형</td>
                <td>border-left: success 색상, 아이콘 success 색상</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-toast--warning</td>
                <td>Warning 변형</td>
                <td>border-left: warning 색상, 아이콘 warning 색상</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-toast--error</td>
                <td>Error 변형</td>
                <td>border-left: error 색상, 아이콘 error 색상</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-toast__icon</td>
                <td>아이콘 래퍼</td>
                <td>flex-shrink: 0, 18px, margin-top 1px</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-toast__title</td>
                <td>제목 텍스트</td>
                <td>sm, weight 600</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-toast__msg</td>
                <td>설명 텍스트</td>
                <td>sm, secondary, margin-top 2px</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ========== Variant 사용 가이드 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">Variant 사용 가이드</h2>

        <div className="doc-sub">
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>Variant</th>
                <th>아이콘</th>
                <th>용도</th>
                <th>예시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="doc-token-name">info</td>
                <td>icon-info</td>
                <td>일반 안내, 시스템 알림</td>
                <td>업데이트 안내, 공지사항, 도움말</td>
              </tr>
              <tr>
                <td className="doc-token-name">success</td>
                <td>icon-circle-check</td>
                <td>작업 완료, 성공 피드백</td>
                <td>저장 완료, 삭제 완료, 전송 성공</td>
              </tr>
              <tr>
                <td className="doc-token-name">warning</td>
                <td>icon-triangle-alert</td>
                <td>주의, 예방적 경고</td>
                <td>점검 임박, 저장소 부족, 세션 만료 임박</td>
              </tr>
              <tr>
                <td className="doc-token-name">error</td>
                <td>icon-circle-x</td>
                <td>실패, 오류 알림</td>
                <td>저장 실패, 네트워크 오류, 권한 부족</td>
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
                Toast는 자동으로 사라지도록 설정하세요. Info/Success는 3~5초, Warning은 5~8초 후 자동 dismiss합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                Error Toast를 자동으로 사라지게 하지 마세요. 사용자가 에러 내용을 확인하고 직접 닫을 수 있어야 합니다.
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
                동시에 최대 3개까지만 Toast를 표시하세요. 이전 알림은 순서대로 제거합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                중요한 의사결정이 필요한 알림에 Toast를 사용하지 마세요. 확인/취소가 필요하면 Modal을 사용합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
