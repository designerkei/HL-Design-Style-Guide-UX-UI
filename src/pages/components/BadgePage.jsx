export default function BadgePage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Badge</h1>
        <p className="doc-page-desc">
          Badge는 상태, 카테고리, 수량 등 짧은 메타 정보를 시각적으로 전달하는 라벨입니다. 색상과 텍스트를 함께 사용하여 의미를 명확히 전달합니다.
        </p>
      </div>

      {/* ========== 라이브 데모 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">라이브 데모</h2>

        {/* All Variants */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Variants</span>
            <span className="doc-demo__tag">hl-badge--*</span>
          </div>
          <div className="doc-demo__preview">
            <span className="hl-badge hl-badge--success">정상 가동</span>
            <span className="hl-badge hl-badge--warning">점검 필요</span>
            <span className="hl-badge hl-badge--error">긴급 정지</span>
            <span className="hl-badge hl-badge--info">업데이트</span>
            <span className="hl-badge hl-badge--neutral">비활성</span>
          </div>
        </div>

        {/* Usage Context */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">사용 맥락 예시</span>
            <span className="doc-demo__tag">Context</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div className="hl-flex hl-items-center hl-gap-3">
              <span style={{ fontWeight: 500 }}>장비 A-001</span>
              <span className="hl-badge hl-badge--success">가동중</span>
            </div>
            <div className="hl-flex hl-items-center hl-gap-3">
              <span style={{ fontWeight: 500 }}>장비 B-014</span>
              <span className="hl-badge hl-badge--warning">점검 예정</span>
            </div>
            <div className="hl-flex hl-items-center hl-gap-3">
              <span style={{ fontWeight: 500 }}>장비 C-007</span>
              <span className="hl-badge hl-badge--error">고장</span>
            </div>
            <div className="hl-flex hl-items-center hl-gap-3">
              <span style={{ fontWeight: 500 }}>장비 D-022</span>
              <span className="hl-badge hl-badge--neutral">미등록</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 시맨틱 의미 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">시맨틱 의미</h2>
        <p className="doc-section-desc">
          각 Badge 색상은 특정 의미를 갖습니다. 색상의 의미를 임의로 변경하지 마세요.
        </p>

        <div className="doc-sub">
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>Variant</th>
                <th>미리보기</th>
                <th>의미</th>
                <th>사용 예시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="doc-token-name">success</td>
                <td><span className="hl-badge hl-badge--success">정상</span></td>
                <td>정상 / 완료 / 가동</td>
                <td>장비 가동중, 작업 완료, 서버 정상</td>
              </tr>
              <tr>
                <td className="doc-token-name">warning</td>
                <td><span className="hl-badge hl-badge--warning">경고</span></td>
                <td>경고 / 주의 / 대기</td>
                <td>점검 예정, 임계치 근접, 대기중</td>
              </tr>
              <tr>
                <td className="doc-token-name">error</td>
                <td><span className="hl-badge hl-badge--error">에러</span></td>
                <td>에러 / 위험 / 정지</td>
                <td>장비 고장, 연결 끊김, 긴급 정지</td>
              </tr>
              <tr>
                <td className="doc-token-name">info</td>
                <td><span className="hl-badge hl-badge--info">정보</span></td>
                <td>정보 / 안내 / 새 항목</td>
                <td>업데이트 알림, 신규 등록, 진행중</td>
              </tr>
              <tr>
                <td className="doc-token-name">neutral</td>
                <td><span className="hl-badge hl-badge--neutral">중립</span></td>
                <td>중립 / 비활성 / 기타</td>
                <td>미등록, 사용 안 함, 분류 없음</td>
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
                <td className="doc-token-name">.hl-badge</td>
                <td>Badge 기본 스타일 (필수)</td>
                <td>inline-flex, height 20px, pill 모양</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-badge--success</td>
                <td>Success 변형</td>
                <td>녹색 배경 + 녹색 텍스트 + 녹색 도트</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-badge--warning</td>
                <td>Warning 변형</td>
                <td>노란색 배경 + 노란색 텍스트 + 노란색 도트</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-badge--error</td>
                <td>Error 변형</td>
                <td>빨간색 배경 + 빨간색 텍스트 + 빨간색 도트</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-badge--info</td>
                <td>Info 변형</td>
                <td>파란색 배경 + 파란색 텍스트 + 파란색 도트</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-badge--neutral</td>
                <td>Neutral 변형</td>
                <td>회색 배경 + 회색 텍스트 + 회색 도트</td>
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
                색상과 텍스트를 항상 함께 사용하세요. 색맹 사용자도 텍스트를 통해 상태를 이해할 수 있어야 합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                색상만으로 상태를 전달하지 마세요. 도트 색상에만 의존하면 접근성 기준을 충족할 수 없습니다.
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
                Badge 텍스트는 짧고 명확하게 작성하세요. "정상", "경고", "에러" 등 한두 단어로 상태를 전달합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                긴 문장이나 설명을 Badge에 넣지 마세요. Badge는 상태 라벨이지 설명 텍스트가 아닙니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
