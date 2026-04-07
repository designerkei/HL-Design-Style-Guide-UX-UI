import { useState } from 'react';

export default function Motion() {
  const [play, setPlay] = useState(false);

  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Motion & Easing</h1>
        <p className="doc-page-desc">
          일관된 움직임은 인터페이스에 자연스러움과 의미를 부여합니다. Duration과 Easing 토큰을 조합하여 모든 전환과 애니메이션에 적용합니다.
        </p>
      </div>

      {/* ========== 1. Duration 토큰 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">Duration 토큰</h2>
        <p className="doc-section-desc">
          상호작용의 규모와 중요도에 따라 4단계 duration을 사용합니다. 작고 빈번한 전환에는 짧은 값을, 큰 레이아웃 변화에는 긴 값을 적용합니다.
        </p>

        <div className="doc-sub">
          <div className="doc-sub-title">토큰 테이블</div>
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>토큰</th>
                <th>값</th>
                <th>용도</th>
                <th>예시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="doc-token-name">--hl-dur-fast</td>
                <td className="doc-token-val">100ms</td>
                <td>마이크로 인터랙션</td>
                <td>호버 색상, 포커스 링, 툴팁 표시</td>
              </tr>
              <tr>
                <td className="doc-token-name">--hl-dur</td>
                <td className="doc-token-val">160ms</td>
                <td>기본 전환</td>
                <td>버튼 상태, 입력 필드 포커스, 뱃지 변경</td>
              </tr>
              <tr>
                <td className="doc-token-name">--hl-dur-slow</td>
                <td className="doc-token-val">280ms</td>
                <td>중간 규모 전환</td>
                <td>패널 열기/닫기, 드롭다운, 탭 전환</td>
              </tr>
              <tr>
                <td className="doc-token-name">--hl-dur-slower</td>
                <td className="doc-token-val">400ms</td>
                <td>대규모 레이아웃 변화</td>
                <td>모달 진입, 페이지 전환, 드로어 슬라이드</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Duration Visual Demo */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Duration 비교</span>
            <span className="doc-demo__tag">Hover to animate</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            {[
              { token: '--hl-dur-fast', label: 'fast (100ms)', dur: '100ms', color: 'var(--hl-info)' },
              { token: '--hl-dur', label: 'default (160ms)', dur: '160ms', color: 'var(--hl-primary-500)' },
              { token: '--hl-dur-slow', label: 'slow (280ms)', dur: '280ms', color: 'var(--hl-success)' },
              { token: '--hl-dur-slower', label: 'slower (400ms)', dur: '400ms', color: 'var(--hl-warning)' },
            ].map((item) => (
              <div key={item.token} className="hl-flex hl-items-center hl-gap-3" style={{ width: '100%' }}>
                <span className="hl-mono" style={{ width: 130, flexShrink: 0 }}>{item.label}</span>
                <div
                  style={{
                    height: 24,
                    width: '20%',
                    backgroundColor: item.color,
                    borderRadius: 'var(--hl-radius-sm)',
                    transition: `width ${item.dur} var(--hl-ease)`,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.width = '100%'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.width = '20%'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== 2. Easing 커브 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">Easing 커브</h2>
        <p className="doc-section-desc">
          자연스러운 움직임을 위한 4가지 이징 함수입니다. 요소의 등장/퇴장 방향과 성격에 따라 적절한 커브를 선택합니다.
        </p>

        <div className="doc-sub">
          <div className="doc-sub-title">Easing 테이블</div>
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>토큰</th>
                <th>CSS 값</th>
                <th>성격</th>
                <th>용도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="doc-token-name">--hl-ease</td>
                <td className="doc-token-val">cubic-bezier(.4, 0, .2, 1)</td>
                <td>표준 (ease-in-out)</td>
                <td>대부분의 전환에 기본 사용</td>
              </tr>
              <tr>
                <td className="doc-token-name">--hl-ease-in</td>
                <td className="doc-token-val">cubic-bezier(.4, 0, 1, 1)</td>
                <td>가속 (ease-in)</td>
                <td>화면에서 퇴장하는 요소</td>
              </tr>
              <tr>
                <td className="doc-token-name">--hl-ease-out</td>
                <td className="doc-token-val">cubic-bezier(0, 0, .2, 1)</td>
                <td>감속 (ease-out)</td>
                <td>화면에 진입하는 요소</td>
              </tr>
              <tr>
                <td className="doc-token-name">--hl-ease-spring</td>
                <td className="doc-token-val">cubic-bezier(.175, .885, .32, 1.275)</td>
                <td>스프링 (overshoot)</td>
                <td>강조 애니메이션, 알림 팝업</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Easing Visual Demo */}
        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Easing 비교</span>
            <span className="doc-demo__tag">Click to play</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <button
              className="hl-btn hl-btn--secondary hl-btn--sm"
              onClick={() => { setPlay(false); requestAnimationFrame(() => setPlay(true)); }}
              style={{ alignSelf: 'flex-start' }}
            >
              <i className="icon-play" /> 재생
            </button>
            {[
              { token: 'ease', label: 'ease (standard)', easing: 'cubic-bezier(.4,0,.2,1)', color: 'var(--hl-info)' },
              { token: 'ease-in', label: 'ease-in', easing: 'cubic-bezier(.4,0,1,1)', color: 'var(--hl-primary-500)' },
              { token: 'ease-out', label: 'ease-out', easing: 'cubic-bezier(0,0,.2,1)', color: 'var(--hl-success)' },
              { token: 'ease-spring', label: 'ease-spring', easing: 'cubic-bezier(.175,.885,.32,1.275)', color: 'var(--hl-warning)' },
            ].map((item) => (
              <div key={item.token} className="hl-flex hl-items-center hl-gap-3" style={{ width: '100%' }}>
                <span className="hl-mono" style={{ width: 130, flexShrink: 0 }}>{item.label}</span>
                <div style={{ flex: 1, position: 'relative', height: 32 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 'var(--hl-radius-sm)',
                      backgroundColor: item.color,
                      transition: `transform 600ms ${item.easing}`,
                      transform: play ? 'translateX(calc(100% + 200px))' : 'translateX(0)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== 3. 사용 가이드 ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">사용 가이드</h2>
        <p className="doc-section-desc">
          시나리오별 권장 Duration + Easing 조합입니다.
        </p>

        <div className="doc-sub">
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>시나리오</th>
                <th>Duration</th>
                <th>Easing</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>호버 / 포커스</td>
                <td className="doc-token-name">--hl-dur-fast</td>
                <td className="doc-token-name">--hl-ease</td>
                <td>즉각적 피드백이 필요한 마이크로 인터랙션</td>
              </tr>
              <tr>
                <td>버튼 상태 변경</td>
                <td className="doc-token-name">--hl-dur</td>
                <td className="doc-token-name">--hl-ease</td>
                <td>빠르지만 인지 가능한 전환</td>
              </tr>
              <tr>
                <td>패널 / 드롭다운 열기</td>
                <td className="doc-token-name">--hl-dur-slow</td>
                <td className="doc-token-name">--hl-ease-out</td>
                <td>등장 시 감속하여 자연스럽게 안착</td>
              </tr>
              <tr>
                <td>패널 / 드롭다운 닫기</td>
                <td className="doc-token-name">--hl-dur-slow</td>
                <td className="doc-token-name">--hl-ease-in</td>
                <td>퇴장 시 가속하여 빠르게 사라짐</td>
              </tr>
              <tr>
                <td>페이드 인/아웃</td>
                <td className="doc-token-name">--hl-dur</td>
                <td className="doc-token-name">--hl-ease</td>
                <td>불투명도 전환에 표준 커브 적용</td>
              </tr>
              <tr>
                <td>모달 / 드로어 진입</td>
                <td className="doc-token-name">--hl-dur-slower</td>
                <td className="doc-token-name">--hl-ease-out</td>
                <td>큰 요소는 충분한 시간으로 감속 진입</td>
              </tr>
              <tr>
                <td>토스트 알림 팝업</td>
                <td className="doc-token-name">--hl-dur-slow</td>
                <td className="doc-token-name">--hl-ease-spring</td>
                <td>주의를 끌기 위한 바운스 효과</td>
              </tr>
              <tr>
                <td>카드 호버 리프트</td>
                <td className="doc-token-name">--hl-dur-slow</td>
                <td className="doc-token-name">--hl-ease</td>
                <td>그림자 + translateY 변화</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ========== 4. Do / Don't ========== */}
      <div className="doc-section">
        <h2 className="doc-section-title">가이드라인</h2>

        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">
                토큰을 사용하여 일관된 타이밍을 유지하세요. 하드코딩된 ms 값 대신 CSS 변수(--hl-dur, --hl-ease 등)를 사용합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                임의의 duration(예: 350ms, 500ms)이나 linear 이징을 사용하지 마세요. 전환이 기계적이거나 불일치하게 느껴집니다.
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
                등장에는 ease-out, 퇴장에는 ease-in을 사용하세요. 사용자 시선의 흐름에 맞는 자연스러운 움직임을 만듭니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                1초 이상의 긴 애니메이션을 사용하지 마세요. 운영 도구에서 느린 전환은 업무 효율을 떨어뜨립니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
