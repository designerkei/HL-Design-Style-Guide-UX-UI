export default function TablePage() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <h1 className="doc-page-title">Table</h1>
        <p className="doc-page-desc">
          운영 도구의 핵심 데이터 표시 컴포넌트입니다. 정렬, 선택, 확장, 페이지네이션 등 다양한 패턴을 지원합니다.
        </p>
      </div>

      {/* ========== 1. 기본 테이블 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">기본 테이블</div>
        <div className="doc-section-desc">
          Compact density(40px row height)가 기본입니다. 정렬 가능한 헤더, 호버 효과, 숫자 모노스페이스를 적용합니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Default Table</span>
            <span className="doc-demo__tag">hl-table</span>
          </div>
          <div className="doc-demo__preview" style={{ padding: 0 }}>
            <div className="hl-table-wrap" style={{ width: '100%' }}>
              <table className="hl-table">
                <thead>
                  <tr>
                    <th className="is-sortable">장비명 <i className="icon-arrow-up sort-icon" /></th>
                    <th className="is-sortable">위치 <i className="icon-arrow-up sort-icon" /></th>
                    <th className="is-sortable" style={{ textAlign: 'right' }}>가동률 <i className="icon-arrow-up sort-icon" /></th>
                    <th>상태</th>
                    <th className="is-sortable" style={{ textAlign: 'right' }}>최종 점검 <i className="icon-arrow-up sort-icon" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bold">펌프 A-101</td>
                    <td>A동 1층</td>
                    <td className="col-num">98.5%</td>
                    <td><span className="hl-badge hl-badge--success">가동</span></td>
                    <td className="col-num">2026-03-20</td>
                  </tr>
                  <tr>
                    <td className="bold">컴프레서 B-203</td>
                    <td>B동 2층</td>
                    <td className="col-num">87.2%</td>
                    <td><span className="hl-badge hl-badge--warning">점검</span></td>
                    <td className="col-num">2026-03-18</td>
                  </tr>
                  <tr>
                    <td className="bold">보일러 C-105</td>
                    <td>C동 지하</td>
                    <td className="col-num">95.0%</td>
                    <td><span className="hl-badge hl-badge--success">가동</span></td>
                    <td className="col-num">2026-03-22</td>
                  </tr>
                  <tr>
                    <td className="bold">냉각탑 D-301</td>
                    <td>D동 옥상</td>
                    <td className="col-num">0.0%</td>
                    <td><span className="hl-badge hl-badge--error">정지</span></td>
                    <td className="col-num">2026-03-15</td>
                  </tr>
                  <tr>
                    <td className="bold">발전기 E-002</td>
                    <td>E동 1층</td>
                    <td className="col-num">76.8%</td>
                    <td><span className="hl-badge hl-badge--info">대기</span></td>
                    <td className="col-num">2026-03-19</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 2. 컬럼 타입 가이드 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">컬럼 타입 가이드</div>
        <div className="doc-section-desc">
          데이터 유형에 따라 정렬 방향, 폰트, 컴포넌트를 달리 적용합니다.
        </div>

        <table className="doc-token-table">
          <thead>
            <tr>
              <th>데이터 유형</th>
              <th>정렬</th>
              <th>폰트</th>
              <th>컴포넌트</th>
              <th>예시</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>텍스트</td>
              <td className="doc-token-val">left</td>
              <td>기본 (Pretendard)</td>
              <td>-</td>
              <td>펌프 A-101, A동 1층</td>
            </tr>
            <tr>
              <td>숫자</td>
              <td className="doc-token-val">right (.col-num)</td>
              <td className="doc-token-name">mono</td>
              <td>-</td>
              <td style={{ fontFamily: 'var(--hl-mono)', fontSize: 'var(--hl-text-xs)' }}>98.5%, 1,234</td>
            </tr>
            <tr>
              <td>상태</td>
              <td className="doc-token-val">left</td>
              <td>기본</td>
              <td className="doc-token-name">hl-badge</td>
              <td><span className="hl-badge hl-badge--success">가동</span></td>
            </tr>
            <tr>
              <td>날짜</td>
              <td className="doc-token-val">right (.col-num)</td>
              <td className="doc-token-name">mono</td>
              <td>-</td>
              <td style={{ fontFamily: 'var(--hl-mono)', fontSize: 'var(--hl-text-xs)' }}>2026-03-20</td>
            </tr>
            <tr>
              <td>액션</td>
              <td className="doc-token-val">right (.col-action)</td>
              <td>기본</td>
              <td className="doc-token-name">hl-btn--sm / hl-btn--tertiary</td>
              <td>
                <button className="hl-btn hl-btn--tertiary hl-btn--sm"><i className="icon-edit" /></button>
                <button className="hl-btn hl-btn--tertiary hl-btn--sm"><i className="icon-trash-2" /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ========== 3. 행 선택 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">행 선택</div>
        <div className="doc-section-desc">
          체크박스를 사용한 행 선택 패턴입니다. 선택된 행은 is-selected 클래스로 하이라이트됩니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Row Selection</span>
            <span className="doc-demo__tag">is-selected</span>
          </div>
          <div className="doc-demo__preview" style={{ padding: 0 }}>
            <div className="hl-table-wrap" style={{ width: '100%' }}>
              <table className="hl-table">
                <thead>
                  <tr>
                    <th style={{ width: 40 }}><input type="checkbox" /></th>
                    <th>장비명</th>
                    <th>위치</th>
                    <th>상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td className="bold">펌프 A-101</td>
                    <td>A동 1층</td>
                    <td><span className="hl-badge hl-badge--success">가동</span></td>
                  </tr>
                  <tr className="is-selected">
                    <td><input type="checkbox" defaultChecked /></td>
                    <td className="bold">컴프레서 B-203</td>
                    <td>B동 2층</td>
                    <td><span className="hl-badge hl-badge--warning">점검</span></td>
                  </tr>
                  <tr className="is-selected">
                    <td><input type="checkbox" defaultChecked /></td>
                    <td className="bold">보일러 C-105</td>
                    <td>C동 지하</td>
                    <td><span className="hl-badge hl-badge--success">가동</span></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td className="bold">냉각탑 D-301</td>
                    <td>D동 옥상</td>
                    <td><span className="hl-badge hl-badge--error">정지</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 4. 확장 가능 행 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">확장 가능 행</div>
        <div className="doc-section-desc">
          행 클릭 시 상세 정보를 펼칠 수 있습니다. is-expandable로 커서를 변경하고, expand-row로 확장 영역을 표시합니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Expandable Row</span>
            <span className="doc-demo__tag">is-expandable, expand-row</span>
          </div>
          <div className="doc-demo__preview" style={{ padding: 0 }}>
            <div className="hl-table-wrap" style={{ width: '100%' }}>
              <table className="hl-table">
                <thead>
                  <tr>
                    <th style={{ width: 32 }} />
                    <th>장비명</th>
                    <th>위치</th>
                    <th>상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="is-expandable">
                    <td><i className="icon-chevron-down" style={{ fontSize: 14, color: 'var(--hl-text-muted)' }} /></td>
                    <td className="bold">펌프 A-101</td>
                    <td>A동 1층</td>
                    <td><span className="hl-badge hl-badge--success">가동</span></td>
                  </tr>
                  <tr className="expand-row">
                    <td colSpan={4}>
                      <div className="expand-content">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--hl-sp-4)' }}>
                          <div>
                            <div style={{ fontSize: 'var(--hl-text-xs)', color: 'var(--hl-text-muted)', marginBottom: 2 }}>모델</div>
                            <div style={{ fontSize: 'var(--hl-text-sm)' }}>KSB Etanorm 100-80</div>
                          </div>
                          <div>
                            <div style={{ fontSize: 'var(--hl-text-xs)', color: 'var(--hl-text-muted)', marginBottom: 2 }}>설치일</div>
                            <div style={{ fontSize: 'var(--hl-text-sm)', fontFamily: 'var(--hl-mono)' }}>2024-06-15</div>
                          </div>
                          <div>
                            <div style={{ fontSize: 'var(--hl-text-xs)', color: 'var(--hl-text-muted)', marginBottom: 2 }}>누적 가동시간</div>
                            <div style={{ fontSize: 'var(--hl-text-sm)', fontFamily: 'var(--hl-mono)' }}>12,480h</div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="is-expandable">
                    <td><i className="icon-chevron-right" style={{ fontSize: 14, color: 'var(--hl-text-muted)' }} /></td>
                    <td className="bold">컴프레서 B-203</td>
                    <td>B동 2층</td>
                    <td><span className="hl-badge hl-badge--warning">점검</span></td>
                  </tr>
                  <tr className="is-expandable">
                    <td><i className="icon-chevron-right" style={{ fontSize: 14, color: 'var(--hl-text-muted)' }} /></td>
                    <td className="bold">보일러 C-105</td>
                    <td>C동 지하</td>
                    <td><span className="hl-badge hl-badge--success">가동</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 5. 페이지네이션 연동 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">페이지네이션 연동</div>
        <div className="doc-section-desc">
          hl-table-footer 안에 hl-pagination을 배치하여 테이블 하단에 페이지 컨트롤을 제공합니다.
        </div>

        <div className="doc-demo">
          <div className="doc-demo__head">
            <span className="doc-demo__title">Table + Pagination</span>
            <span className="doc-demo__tag">hl-table-footer</span>
          </div>
          <div className="doc-demo__preview" style={{ padding: 0 }}>
            <div className="hl-card" style={{ width: '100%' }}>
              <div className="hl-card__body--flush">
                <table className="hl-table">
                  <thead>
                    <tr>
                      <th>장비명</th>
                      <th>위치</th>
                      <th style={{ textAlign: 'right' }}>가동률</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="bold">펌프 A-101</td>
                      <td>A동 1층</td>
                      <td className="col-num">98.5%</td>
                    </tr>
                    <tr>
                      <td className="bold">컴프레서 B-203</td>
                      <td>B동 2층</td>
                      <td className="col-num">87.2%</td>
                    </tr>
                    <tr>
                      <td className="bold">보일러 C-105</td>
                      <td>C동 지하</td>
                      <td className="col-num">95.0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="hl-table-footer">
                <span>총 96건 중 1-10</span>
                <nav className="hl-pagination">
                  <button className="hl-pagination__btn" disabled>&laquo;</button>
                  <button className="hl-pagination__btn is-active">1</button>
                  <button className="hl-pagination__btn">2</button>
                  <button className="hl-pagination__btn">3</button>
                  <span className="hl-pagination__info">...</span>
                  <button className="hl-pagination__btn">10</button>
                  <button className="hl-pagination__btn">&raquo;</button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 6. 빈 상태 & 로딩 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">빈 상태 & 로딩</div>
        <div className="doc-section-desc">
          데이터가 없을 때는 Empty State를, 로딩 중일 때는 Skeleton 행을 사용합니다.
        </div>

        <div className="doc-sub">
          <div className="doc-sub-title">빈 상태</div>
          <div className="doc-demo">
            <div className="doc-demo__head">
              <span className="doc-demo__title">Empty State</span>
              <span className="doc-demo__tag">hl-empty</span>
            </div>
            <div className="doc-demo__preview" style={{ padding: 0 }}>
              <div className="hl-card" style={{ width: '100%' }}>
                <div className="hl-card__head">장비 목록</div>
                <div className="hl-card__body--flush">
                  <table className="hl-table">
                    <thead>
                      <tr>
                        <th>장비명</th>
                        <th>위치</th>
                        <th>상태</th>
                      </tr>
                    </thead>
                  </table>
                  <div className="hl-empty">
                    <div className="hl-empty__icon"><i className="icon-inbox" /></div>
                    <div className="hl-empty__title">데이터가 없습니다</div>
                    <div className="hl-empty__desc">필터 조건을 변경하거나 새 장비를 등록해 주세요.</div>
                    <button className="hl-btn hl-btn--primary hl-btn--sm">장비 등록</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="doc-sub">
          <div className="doc-sub-title">로딩 상태</div>
          <div className="doc-demo">
            <div className="doc-demo__head">
              <span className="doc-demo__title">Skeleton Rows</span>
              <span className="doc-demo__tag">hl-skeleton</span>
            </div>
            <div className="doc-demo__preview" style={{ padding: 0 }}>
              <table className="hl-table" style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th>장비명</th>
                    <th>위치</th>
                    <th>상태</th>
                    <th style={{ textAlign: 'right' }}>가동률</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((i) => (
                    <tr key={i}>
                      <td><div className="hl-skeleton hl-skeleton--text" style={{ width: '70%' }} /></td>
                      <td><div className="hl-skeleton hl-skeleton--text" style={{ width: '50%' }} /></td>
                      <td><div className="hl-skeleton hl-skeleton--text" style={{ width: '40%' }} /></td>
                      <td><div className="hl-skeleton hl-skeleton--text" style={{ width: '30%', marginLeft: 'auto' }} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 7. 반응형 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">반응형</div>
        <div className="doc-section-desc">
          hl-table-wrap으로 테이블을 감싸면 overflow-x: auto가 적용되어 좁은 화면에서 수평 스크롤이 가능합니다.
          컬럼이 많은 테이블에는 반드시 hl-table-wrap을 사용하세요.
        </div>

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
              <td className="doc-token-name">.hl-table-wrap</td>
              <td>overflow-x: auto 컨테이너</td>
              <td>모든 테이블의 부모로 권장</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-table</td>
              <td>width: 100%, border-collapse</td>
              <td>hl-table-wrap 안에 배치</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: 'var(--hl-sp-3)', padding: 'var(--hl-sp-3) var(--hl-sp-4)', background: 'var(--hl-info-light)', borderRadius: 'var(--hl-radius)', fontSize: 'var(--hl-text-sm)', color: 'var(--hl-info)' }}>
          <strong>Tip:</strong> 컬럼이 6개 이상이면 hl-table-wrap은 필수입니다. white-space: nowrap이 기본 적용되어 있으므로
          셀 내용이 줄바꿈 없이 수평 스크롤됩니다.
        </div>
      </div>

      {/* ========== 8. Do/Don't ========== */}
      <div className="doc-section">
        <div className="doc-section-title">Do / Don't</div>

        <div className="doc-guideline-row">
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--do" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--do">Do</div>
              <div className="doc-guideline__text">
                숫자 컬럼은 오른쪽 정렬(col-num)하고 모노스페이스 폰트를 사용하세요. 자릿수 비교가 직관적입니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                숫자를 왼쪽 정렬하면 자릿수 비교가 어렵습니다. 소수점, 천단위 구분이 시각적으로 정렬되지 않습니다.
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
                Compact density(40px row height)를 기본으로 사용하세요. 데이터 밀도가 높은 운영 도구에 적합합니다.
              </div>
            </div>
          </div>
          <div className="doc-guideline">
            <div className="doc-guideline__bar doc-guideline__bar--dont" />
            <div className="doc-guideline__body">
              <div className="doc-guideline__label doc-guideline__label--dont">Don't</div>
              <div className="doc-guideline__text">
                과도한 패딩으로 행 높이를 60px 이상으로 설정하지 마세요. 한 화면에 표시되는 데이터 양이 줄어 비효율적입니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== API 종합 ========== */}
      <div className="doc-section">
        <div className="doc-section-title">API 종합</div>
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
              <td className="doc-token-name">.hl-table-wrap</td>
              <td>반응형 overflow 래퍼</td>
              <td>overflow-x: auto</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-table</td>
              <td>테이블 컨테이너</td>
              <td>width 100%, collapse</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-table th.is-sortable</td>
              <td>정렬 가능 헤더</td>
              <td>cursor pointer, hover 색상 변경</td>
            </tr>
            <tr>
              <td className="doc-token-name">.sort-icon</td>
              <td>정렬 아이콘</td>
              <td>기본 opacity .3, 활성시 1</td>
            </tr>
            <tr>
              <td className="doc-token-name">th[aria-sort] .sort-icon</td>
              <td>활성 정렬 아이콘</td>
              <td>HL Sky Blue sort accent (primary-600)</td>
            </tr>
            <tr>
              <td className="doc-token-name">.mono / .col-num</td>
              <td>숫자 컬럼</td>
              <td>right-align, monospace</td>
            </tr>
            <tr>
              <td className="doc-token-name">.col-action</td>
              <td>액션 컬럼</td>
              <td>right-align</td>
            </tr>
            <tr>
              <td className="doc-token-name">.bold</td>
              <td>강조 텍스트</td>
              <td>font-weight 600</td>
            </tr>
            <tr>
              <td className="doc-token-name">tr.is-selected</td>
              <td>선택된 행</td>
              <td>HL Sky Blue selection bg (primary-50)</td>
            </tr>
            <tr>
              <td className="doc-token-name">tr.is-expandable</td>
              <td>확장 가능한 행</td>
              <td>cursor pointer</td>
            </tr>
            <tr>
              <td className="doc-token-name">tr.expand-row</td>
              <td>확장된 상세 영역</td>
              <td>surface-alt 배경</td>
            </tr>
            <tr>
              <td className="doc-token-name">.expand-content</td>
              <td>확장 내용 래퍼</td>
              <td>padding sp-3</td>
            </tr>
            <tr>
              <td className="doc-token-name">.hl-table-footer</td>
              <td>테이블 하단 영역</td>
              <td>flex, space-between</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
