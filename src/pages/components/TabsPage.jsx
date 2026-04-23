import { useState } from 'react';

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: '개요', content: '장비 운영 현황에 대한 전체 개요입니다. 가동률, 알림 수, 점검 이력 등 주요 지표를 한눈에 확인할 수 있습니다.' },
    { label: '상세 이력', content: '장비별 상세 운영 이력입니다. 시간대별 가동/정지/점검 로그를 테이블 형태로 제공합니다.' },
    { label: '설정', content: '알림 임계치, 모니터링 주기, 리포트 자동 생성 등 운영 설정을 관리합니다.' },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Tabs</h1>
        <p className="doc-page-desc">
          관련된 콘텐츠를 탭으로 분리하여 같은 영역에서 전환할 수 있는 네비게이션 컴포넌트입니다.
        </p>
      </div>

      {/* ========== Demo: Interactive Tabs ========== */}
      <div className="doc-section">
        <div className="doc-section-title">기본 사용</div>
        <div className="doc-section-desc">
          탭을 클릭하면 해당 패널의 콘텐츠가 표시됩니다. is-active 클래스로 활성 탭을 표시합니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Interactive Tabs</span>
            <span className="doc-demo__tag">hl-tabs + hl-tab-panel</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            <div style={{ width: '100%' }}>
              <div className="hl-tabs">
                {tabs.map((tab, i) => (
                  <button
                    key={i}
                    className={`hl-tab${activeTab === i ? ' is-active' : ''}`}
                    onClick={() => setActiveTab(i)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="hl-tab-panel">
                <p style={{ fontSize: 'var(--hl-text-sm)', color: 'var(--hl-text-secondary)', lineHeight: 1.6 }}>
                  {tabs[activeTab].content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== Demo: Static States ========== */}
      <div className="doc-section">
        <div className="doc-section-title">상태</div>
        <div className="doc-section-desc">
          탭의 기본, 호버, 활성 상태입니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Tab States</span>
            <span className="doc-demo__tag">hl-tab</span>
          </div>
          <div className="doc-demo__preview">
            <div style={{ width: '100%' }}>
              <div className="hl-tabs">
                <button className="hl-tab is-active">활성 탭</button>
                <button className="hl-tab">기본 탭</button>
                <button className="hl-tab">기본 탭</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== API ========== */}
      <div className="doc-section">
        <div className="doc-section-title">API</div>
        <div className="doc-section-desc">Tabs를 구성하는 CSS 클래스입니다.</div>

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
              <td className="doc-token-name">.hl-tabs</td>
              <td>탭 바. flex, border-bottom 1px</td>
              <td>탭 버튼들의 컨테이너</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-tab</td>
              <td>개별 탭 버튼. padding sp-2 sp-4, font-size sm, border-bottom 2px transparent</td>
              <td>cursor pointer, text-secondary</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-tab.is-active</td>
              <td>활성 탭. HL Sky Blue accent(primary-600) text, border-bottom primary-600</td>
              <td>현재 선택된 탭</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-tab-panel</td>
              <td>탭 콘텐츠 영역. padding sp-4 0</td>
              <td>활성 탭에 해당하는 콘텐츠</td>
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
                탭은 최대 5개 이내로 유지하세요. 탭이 너무 많으면 사용자가 원하는 항목을 찾기 어렵습니다.
                라벨은 짧고 명확하게 작성합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                탭 라벨을 길게 작성하지 마세요. "장비별 상세 운영 현황 이력 조회"보다 "상세 이력"이 적합합니다.
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
                서로 관련 있지만 독립적인 콘텐츠 그룹에 탭을 사용하세요. 탭 간 콘텐츠는 같은 맥락이어야 합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                순차적으로 진행해야 하는 단계(스텝)에 탭을 사용하지 마세요. 그 경우 Stepper 컴포넌트가 더 적합합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
