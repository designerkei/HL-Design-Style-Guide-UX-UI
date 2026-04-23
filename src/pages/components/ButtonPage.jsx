export default function ButtonPage() {
  const variants = ['primary', 'secondary', 'tertiary', 'danger'];
  const sizes = [
    { label: 'XSmall', cls: 'xs' },
    { label: 'Small', cls: 'sm' },
    { label: 'Medium', cls: 'md' },
    { label: 'Large', cls: 'lg' },
    { label: 'XLarge', cls: 'xl' },
  ];

  return (
    <>
      <div className="doc-page-head">
        <h1 className="doc-page-title">Button</h1>
        <p className="doc-page-desc">
          Button은 HL이 직접 소유하는 유일한 primitive다. 색상과 variant 계약은 HL 기준으로 고정하고,
          나머지 primitive의 구조와 치수는 KRDS를 따른다.
        </p>
      </div>

      <div className="doc-section">
        <h2 className="doc-section-title">라이브 데모</h2>
        <p className="doc-section-desc">
          기본 variant는 <code>primary</code>, <code>secondary</code>, <code>tertiary</code>, <code>danger</code>이며,
          <code>ghost</code>는 기존 코드 호환을 위한 legacy alias로만 유지한다.
        </p>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Variants</span>
            <span className="doc-demo__tag">hl-btn--primary / secondary / tertiary / danger</span>
          </div>
          <div className="doc-demo__preview">
            <button className="hl-btn hl-btn--primary hl-btn--md">Primary</button>
            <button className="hl-btn hl-btn--secondary hl-btn--md">Secondary</button>
            <button className="hl-btn hl-btn--tertiary hl-btn--md">Tertiary</button>
            <button className="hl-btn hl-btn--danger hl-btn--md">Danger</button>
          </div>
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Sizes</span>
            <span className="doc-demo__tag">xs / sm / md / lg / xl</span>
          </div>
          <div className="doc-demo__preview hl-items-center">
            <button className="hl-btn hl-btn--primary hl-btn--xs">XS</button>
            <button className="hl-btn hl-btn--primary hl-btn--sm">SM</button>
            <button className="hl-btn hl-btn--primary hl-btn--md">MD</button>
            <button className="hl-btn hl-btn--primary hl-btn--lg">LG</button>
            <button className="hl-btn hl-btn--primary hl-btn--xl">XL</button>
          </div>
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Variant x Size Matrix</span>
            <span className="doc-demo__tag">4 x 5</span>
          </div>
          <div className="doc-demo__preview doc-demo__preview--col">
            {variants.map((variant) => (
              <div key={variant} className="hl-flex hl-items-center hl-gap-3">
                <span className="hl-mono" style={{ width: 88, flexShrink: 0 }}>{variant}</span>
                {sizes.map((size) => (
                  <button
                    key={`${variant}-${size.cls}`}
                    className={`hl-btn hl-btn--${variant} hl-btn--${size.cls}`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">With Icon</span>
            <span className="doc-demo__tag">icon + label</span>
          </div>
          <div className="doc-demo__preview">
            <button className="hl-btn hl-btn--primary hl-btn--md">
              <i className="icon-plus" /> 등록
            </button>
            <button className="hl-btn hl-btn--secondary hl-btn--md">
              <i className="icon-download" /> 내보내기
            </button>
            <button className="hl-btn hl-btn--tertiary hl-btn--md">
              <i className="icon-filter" /> 필터 열기
            </button>
            <button className="hl-btn hl-btn--danger hl-btn--md">
              <i className="icon-trash-2" /> 삭제
            </button>
          </div>
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Disabled</span>
            <span className="doc-demo__tag">disabled</span>
          </div>
          <div className="doc-demo__preview">
            <button className="hl-btn hl-btn--primary hl-btn--md" disabled>Primary</button>
            <button className="hl-btn hl-btn--secondary hl-btn--md" disabled>Secondary</button>
            <button className="hl-btn hl-btn--tertiary hl-btn--md" disabled>Tertiary</button>
            <button className="hl-btn hl-btn--danger hl-btn--md" disabled>Danger</button>
            <button className="hl-btn hl-btn--ghost hl-btn--md" disabled>Ghost Alias</button>
          </div>
        </div>
      </div>

      <div className="doc-section">
        <h2 className="doc-section-title">API</h2>
        <p className="doc-section-desc">
          HL Button은 variant와 size를 조합하는 방식으로 사용한다. Primary CTA는 HL Navy, focus와 보조 강조는 HL Sky Blue를 쓴다.
        </p>

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
                <td className="doc-token-name">.hl-btn</td>
                <td>기본 버튼 프레임</td>
                <td>inline-flex, focus-visible, disabled 처리 포함</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--primary</td>
                <td>주요 CTA</td>
                <td>HL Navy fill, hover 시 800, active 시 700</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--secondary</td>
                <td>보조 액션</td>
                <td>surface + strong border + navy text</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--tertiary</td>
                <td>최소 강조 액션</td>
                <td>텍스트형. legacy <code>.hl-btn--ghost</code>와 동일 동작</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--danger</td>
                <td>파괴적 액션</td>
                <td>semantic error fill</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--xs / --xsmall</td>
                <td>24px</td>
                <td>칩 수준의 초소형 액션</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--sm / --small</td>
                <td>32px</td>
                <td>테이블 툴바, 보조 조작</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--md / --medium</td>
                <td>40px</td>
                <td>기본 버튼 높이</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--lg / --large</td>
                <td>48px</td>
                <td>중요 액션 강조</td>
              </tr>
              <tr>
                <td className="doc-token-name">.hl-btn--xl / --xlarge</td>
                <td>56px</td>
                <td>hero / onboarding CTA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="doc-section">
        <h2 className="doc-section-title">가이드라인</h2>

        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">
                한 영역에는 Primary CTA를 하나만 둔다. 중요도가 겹치면 Secondary 또는 Tertiary로 낮춘다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                Ghost를 새 계약처럼 사용하지 않는다. 새 화면에서는 Tertiary 이름을 우선하고 Ghost는 호환용으로만 둔다.
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
                버튼 라벨은 동사로 시작한다. “등록”, “삭제”, “내보내기”처럼 결과가 바로 드러나야 한다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                파괴적 동작에 Primary 색을 쓰지 않는다. 삭제·초기화·중단은 Danger로만 노출한다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="doc-section">
        <h2 className="doc-section-title">접근성</h2>
        <div className="doc-sub">
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>항목</th>
                <th>요구사항</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="doc-token-name">focus-visible</td>
                <td>2px outline</td>
                <td>HL Sky Blue focus ring을 유지하고 outline-offset 2px를 둔다.</td>
              </tr>
              <tr>
                <td className="doc-token-name">disabled</td>
                <td>native disabled 우선</td>
                <td>{'<button disabled>'}를 우선 사용하고, 비표준 요소는 aria-disabled를 함께 둔다.</td>
              </tr>
              <tr>
                <td className="doc-token-name">icon-only</td>
                <td>aria-label 필수</td>
                <td>텍스트 없이 아이콘만 있으면 목적을 읽을 수 있도록 aria-label을 제공한다.</td>
              </tr>
              <tr>
                <td className="doc-token-name">keyboard</td>
                <td>Enter / Space</td>
                <td>{'<button>'}는 기본 키보드 동작을 사용하고, 커스텀 요소는 동일한 상호작용을 보장한다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}