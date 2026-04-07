import { useState } from 'react';

export default function TogglePage() {
  const [notiOn, setNotiOn] = useState(false);
  const [autoOn, setAutoOn] = useState(true);
  const [darkOn, setDarkOn] = useState(false);

  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Toggle / Switch</h1>
        <p className="doc-page-desc">
          On/Off 두 가지 상태를 즉시 전환할 수 있는 스위치 컴포넌트입니다.
          설정 변경이 바로 적용되는 상황에 적합합니다.
        </p>
      </div>

      {/* ========== Demo: Interactive Toggle ========== */}
      <div className="doc-section">
        <div className="doc-section-title">기본 사용</div>
        <div className="doc-section-desc">
          클릭하면 On/Off 상태가 전환됩니다. is-on 클래스로 활성 상태를 제어합니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Interactive Toggle</span>
            <span className="doc-demo__tag">hl-toggle</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            {/* Toggle OFF */}
            <label
              className={`hl-toggle${notiOn ? ' is-on' : ''}`}
              onClick={() => setNotiOn(!notiOn)}
            >
              <input
                type="checkbox"
                checked={notiOn}
                onChange={() => setNotiOn(!notiOn)}
                aria-checked={notiOn}
              />
              <span className="hl-toggle__track">
                <span className="hl-toggle__thumb" />
              </span>
              <span>알림 수신 {notiOn ? '(On)' : '(Off)'}</span>
            </label>

            {/* Toggle ON */}
            <label
              className={`hl-toggle${autoOn ? ' is-on' : ''}`}
              onClick={() => setAutoOn(!autoOn)}
            >
              <input
                type="checkbox"
                checked={autoOn}
                onChange={() => setAutoOn(!autoOn)}
                aria-checked={autoOn}
              />
              <span className="hl-toggle__track">
                <span className="hl-toggle__thumb" />
              </span>
              <span>자동 새로고침 {autoOn ? '(On)' : '(Off)'}</span>
            </label>

            {/* Toggle with dark mode */}
            <label
              className={`hl-toggle${darkOn ? ' is-on' : ''}`}
              onClick={() => setDarkOn(!darkOn)}
            >
              <input
                type="checkbox"
                checked={darkOn}
                onChange={() => setDarkOn(!darkOn)}
                aria-checked={darkOn}
              />
              <span className="hl-toggle__track">
                <span className="hl-toggle__thumb" />
              </span>
              <span>다크 모드 {darkOn ? '(On)' : '(Off)'}</span>
            </label>
          </div>
        </div>
      </div>

      {/* ========== API ========== */}
      <div className="doc-section">
        <div className="doc-section-title">API</div>
        <div className="doc-section-desc">Toggle을 구성하는 CSS 클래스입니다.</div>

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
              <td className="doc-token-name">.hl-toggle</td>
              <td>컨테이너. inline-flex, center 정렬, gap sp-2, cursor pointer</td>
              <td>label 요소에 적용</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-toggle__track</td>
              <td>트랙. 36x20px, radius-full, gray-300 배경</td>
              <td>is-on일 때 primary-600</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-toggle__thumb</td>
              <td>원형 핸들. 16x16px, white, shadow-1</td>
              <td>is-on일 때 translateX(16px)</td>
            </tr>
            <tr>
              <td className="doc-token-name">.is-on</td>
              <td>활성 상태 클래스. hl-toggle에 추가</td>
              <td>트랙 색상과 thumb 위치 전환</td>
            </tr>
            <tr>
              <td className="doc-token-name">input[type=checkbox]</td>
              <td>숨겨진 네이티브 입력. opacity 0, 크기 0</td>
              <td>접근성을 위해 반드시 포함</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ========== Accessibility ========== */}
      <div className="doc-section">
        <div className="doc-section-title">접근성 (Accessibility)</div>
        <div className="doc-section-desc">
          Toggle은 시각적으로 커스텀되지만, 스크린리더 사용자도 상태를 인식할 수 있어야 합니다.
        </div>

        <table className="doc-token-table">
          <thead>
            <tr>
              <th>속성</th>
              <th>설명</th>
              <th>예시</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="doc-token-name">input[type=checkbox]</td>
              <td>숨겨진 네이티브 체크박스를 반드시 포함. label 안에 위치</td>
              <td className="doc-token-val">{`<input type="checkbox" />`}</td>
            </tr>
            <tr>
              <td className="doc-token-name">aria-checked</td>
              <td>현재 On/Off 상태를 명시적으로 전달</td>
              <td className="doc-token-val">{`aria-checked="true"`}</td>
            </tr>
            <tr>
              <td className="doc-token-name">label 연결</td>
              <td>label 요소로 감싸 클릭 영역 확장 및 스크린리더 연결</td>
              <td className="doc-token-val">{`<label class="hl-toggle">...</label>`}</td>
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
                설정 변경이 즉시 적용되는 경우에 Toggle을 사용하세요. "알림 수신", "자동 새로고침" 등 On/Off가 명확한 항목에 적합합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                "저장" 버튼을 눌러야 반영되는 폼 안에서 Toggle을 사용하지 마세요. 그 경우 Checkbox가 더 적합합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
