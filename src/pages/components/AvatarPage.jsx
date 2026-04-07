export default function AvatarPage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Avatar</h1>
        <p className="doc-page-desc">
          사용자 또는 장비의 프로필을 원형 아이콘으로 표현합니다. 이미지, 이니셜 텍스트, 또는 아이콘 형태로 사용합니다.
        </p>
      </div>

      {/* ========== 1. 크기 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">크기 (Sizes)</div>
        <div className="doc-section-desc">
          sm(24px), md(32px), lg(40px) 3가지 크기를 제공합니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Sizes</span>
            <span className="doc-demo__tag">hl-avatar</span>
          </div>
          <div className="doc-demo__preview" style={{ alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div className="hl-avatar hl-avatar--sm">S</div>
              <span style={{ fontSize: 'var(--hl-text-xs)', color: 'var(--hl-text-muted)' }}>sm (24px)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div className="hl-avatar hl-avatar--md">MD</div>
              <span style={{ fontSize: 'var(--hl-text-xs)', color: 'var(--hl-text-muted)' }}>md (32px)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div className="hl-avatar hl-avatar--lg">LG</div>
              <span style={{ fontSize: 'var(--hl-text-xs)', color: 'var(--hl-text-muted)' }}>lg (40px)</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 2. 이니셜 텍스트 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">이니셜 텍스트</div>
        <div className="doc-section-desc">
          이미지가 없을 때 사용자 이름의 이니셜을 표시합니다. 1-2자 권장.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Initials</span>
            <span className="doc-demo__tag">text content</span>
          </div>
          <div className="doc-demo__preview" style={{ alignItems: 'center' }}>
            <div className="hl-avatar hl-avatar--lg">김</div>
            <div className="hl-avatar hl-avatar--lg">이J</div>
            <div className="hl-avatar hl-avatar--lg">박</div>
            <div className="hl-avatar hl-avatar--lg">HL</div>
          </div>
        </div>
      </div>

      {/* ========== 3. 이미지 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">이미지</div>
        <div className="doc-section-desc">
          img 태그를 자식으로 사용하면 이미지 아바타가 됩니다. object-fit: cover가 적용됩니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">With Image (placeholder)</span>
            <span className="doc-demo__tag">hl-avatar img</span>
          </div>
          <div className="doc-demo__preview" style={{ alignItems: 'center' }}>
            <div className="hl-avatar hl-avatar--sm" style={{ background: 'var(--hl-primary-200)' }} />
            <div className="hl-avatar hl-avatar--md" style={{ background: 'var(--hl-primary-300)' }} />
            <div className="hl-avatar hl-avatar--lg" style={{ background: 'var(--hl-primary-400)' }} />
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
              <td className="doc-token-name">.hl-avatar</td>
              <td>기본 아바타 컨테이너</td>
              <td>border-radius 50%, overflow hidden</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-avatar--sm</td>
              <td>작은 크기</td>
              <td className="doc-token-val">24 x 24px, font 10px</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-avatar--md</td>
              <td>중간 크기</td>
              <td className="doc-token-val">32 x 32px, font 12px</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-avatar--lg</td>
              <td>큰 크기</td>
              <td className="doc-token-val">40 x 40px, font 14px</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-avatar img</td>
              <td>이미지 아바타</td>
              <td>object-fit: cover</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ========== 5. 가이드라인 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">가이드라인</div>
        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">
                이미지가 없을 때는 이니셜 텍스트를 사용하세요. 성(姓) 한 글자 또는 영문 이니셜 1-2자를 권장합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                아바타에 3자 이상의 텍스트를 넣지 마세요. 작은 원 안에서 가독성이 떨어집니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
