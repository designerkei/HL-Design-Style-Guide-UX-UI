import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../language';
import { SOURCE_REPO_BRANCH, SOURCE_REPO_URL } from '../siteConfig';

const LS_REPO_KEY = 'hl-ds-consume-repo';
const LS_BRANCH_KEY = 'hl-ds-consume-branch';
const LS_PROBE_KEY = 'hl-ds-consume-probe';

function readLsString(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    if (v != null && String(v).trim() !== '') return String(v).trim();
  } catch {
    /* private mode 등 */
  }
  return fallback;
}

/** 시크릿·저장 비활성화 등에서 false */
function probeLocalStorage() {
  if (typeof window === 'undefined' || !window.localStorage) return false;
  const val = `probe-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  try {
    localStorage.setItem(LS_PROBE_KEY, val);
    const read = localStorage.getItem(LS_PROBE_KEY);
    localStorage.removeItem(LS_PROBE_KEY);
    return read === val;
  } catch {
    return false;
  }
}

function normalizeRepoUrl(value) {
  return String(value || '')
    .trim()
    .replace(/\.git$/i, '')
    .replace(/\/$/, '');
}

const copy = {
  pageTitle: { ko: '링크만으로 시작 (AI)', en: 'Start from two links (AI)' },
  pageDesc: {
    ko: 'GitHub 저장소 URL과 이 배포 사이트 URL만 넘겨도 AI가 같은 규칙으로 구현할 수 있도록, 복사용 프롬프트와 기준 문서 링크를 만듭니다. 구현 기준은 GitHub 문서이고, 이 사이트는 시각·동작 참고용입니다.',
    en: 'Build copy-paste prompts and canonical links so an AI can implement against this system using only your GitHub repo URL and this deployed site. GitHub docs are the implementation authority; this site is a visual and behavior reference.',
  },
  siteLabel: { ko: '배포 사이트 (현재 창)', en: 'Deployed site (this origin)' },
  repoLabel: { ko: 'GitHub 저장소', en: 'GitHub repository' },
  repoHint: {
    ko: '기본값은 이 사이트에 포함된 GitHub 주소입니다. 아래 「로컬 저장 연결」이 연결됨일 때만 저장할 수 있습니다.',
    en: 'Defaults to the bundled GitHub URL. Save is enabled only when Local storage shows Connected.',
  },
  saveBtn: { ko: '저장', en: 'Save' },
  resetBtn: { ko: '기본값으로', en: 'Reset to default' },
  savedStatus: { ko: '이 브라우저에 저장했습니다.', en: 'Saved in this browser.' },
  resetStatus: { ko: '저장값을 지우고 기본값으로 돌렸습니다.', en: 'Cleared saved values; restored defaults.' },
  saveInvalid: { ko: '저장할 수 없습니다. GitHub 주소를 입력하세요.', en: 'Cannot save. Enter a GitHub repository URL.' },
  saveStorageFail: {
    ko: '저장에 실패했습니다. 브라우저가 로컬 저장을 막았을 수 있습니다. 아래 연결 상태를 확인하세요.',
    en: 'Save failed. The browser may block local storage. Check the connection status below.',
  },
  storageTitle: { ko: '로컬 저장 연결', en: 'Local storage' },
  storageChecking: { ko: '확인 중…', en: 'Checking…' },
  storageOk: { ko: '연결됨 · 이 브라우저에 저장 가능', en: 'Connected · saving is available' },
  storageBlocked: {
    ko: '연결 안 됨 · 시크릿/비공개 모드이거나 사이트 데이터 저장이 꺼져 있을 수 있습니다.',
    en: 'Not connected · private/incognito mode or site storage may be disabled.',
  },
  recheckBtn: { ko: '다시 확인', en: 'Check again' },
  saveDisabledHint: {
    ko: '로컬 저장이 연결된 뒤에만 저장할 수 있습니다.',
    en: 'Save is available only when local storage is connected.',
  },
  branchLabel: { ko: '브랜치', en: 'Branch' },
  promptKoTitle: { ko: '한국어 프롬프트 (AI에게 그대로 붙여넣기)', en: 'Korean prompt (paste to AI)' },
  promptEnTitle: { ko: 'English prompt (paste to AI)', en: 'English prompt (paste to AI)' },
  copyBtn: { ko: '복사', en: 'Copy' },
  copied: { ko: '복사됨', en: 'Copied' },
  linksTitle: { ko: '필수 참고 URL (순서 권장)', en: 'Canonical URLs (read in order)' },
  thDoc: { ko: '문서 / 화면', en: 'Document / page' },
  thUrl: { ko: '주소', en: 'URL' },
  warnRepo: {
    ko: '유효한 GitHub 저장소 URL을 입력하세요.',
    en: 'Enter a valid GitHub repository URL.',
  },
};

function buildPromptKo(repo, branch, site) {
  return `HL 디자인 시스템만 기준으로 UI/화면을 구현한다.

[소스 코드]
- 저장소: ${repo}
- 반드시 순서대로 읽기: \`${repo}/blob/${branch}/AGENTS.md\` → \`${repo}/blob/${branch}/CLAUDE.md\`
- 시맨틱 계약: \`${repo}/blob/${branch}/docs/SEMANTIC_CONTRACT.md\`
- Primitive 계약: \`${repo}/blob/${branch}/docs/PRIMITIVE_CONTRACT.md\`
- 제품 적용·반응형: \`${repo}/blob/${branch}/docs/PRODUCT_ADOPTION_GUIDE.md\`
- 데이터 화면 구조: \`${repo}/blob/${branch}/docs/DATA_DISPLAY.md\`
- 컴포넌트 가이드: \`${repo}/blob/${branch}/docs/COMPONENTS.md\`
- 운영 규칙: \`${repo}/blob/${branch}/docs/CONSISTENCY_AND_AUTOMATION.md\`
- Figma 스펙 데이터: \`${repo}/blob/${branch}/src/data/figma-components.js\`

[라이브 참고]
- 배포 사이트: ${site}
- 컴포넌트 갤러리: ${site}/components
- 패턴 예시: ${site}/dashboard , ${site}/monitoring
- 라이브 사이트는 시각·동작 참고용이다. GitHub 문서와 충돌하면 GitHub 문서를 따른다.

[스택 규칙]
- \`design-tokens.css\`와 \`hl-system.css\`를 동시에 import하지 않는다. 프로젝트에 맞는 한 경로만 선택한다.
- 표준 소유권은 \`색상 + Button = HL\`, \`그 외 primitive 구조/크기/상태 = KRDS\`로 고정한다.
- UI 산세리프는 Pretendard Variable + 토큰, 코드·수치는 Geist Mono, 아이콘은 Material Symbols 또는 로컬 SVG를 사용한다.
- 데이터 화면은 Filter → KPI/Summary → Main → Detail(Table) 순서와 compact 밀도를 유지한다.
- Identity 셸은 Masthead → Identifier → Header → Footer 순서를 따른다.
- SaaS처럼 푸터 정보가 많거나 복잡하면 Identifier는 \`footer-out\`을 우선하고, 푸터가 간결할 때만 \`footer-in\`을 사용한다.

[이번 작업]
- (여기에 화면/기능 요구를 적는다)`;
}
function buildPromptEn(repo, branch, site) {
  return `Implement UI using ONLY the HL Design System.

[Source]
- Repository: ${repo}
- Read in order: \`${repo}/blob/${branch}/AGENTS.md\` then \`${repo}/blob/${branch}/CLAUDE.md\`
- Semantic contract: \`${repo}/blob/${branch}/docs/SEMANTIC_CONTRACT.md\`
- Primitive contract: \`${repo}/blob/${branch}/docs/PRIMITIVE_CONTRACT.md\`
- Product adoption: \`${repo}/blob/${branch}/docs/PRODUCT_ADOPTION_GUIDE.md\`
- Data layout: \`${repo}/blob/${branch}/docs/DATA_DISPLAY.md\`
- Components: \`${repo}/blob/${branch}/docs/COMPONENTS.md\`
- Consistency / automation rules: \`${repo}/blob/${branch}/docs/CONSISTENCY_AND_AUTOMATION.md\`
- Figma spec data: \`${repo}/blob/${branch}/src/data/figma-components.js\`

[Live reference]
- Site: ${site}
- Components: ${site}/components
- Patterns: ${site}/dashboard , ${site}/monitoring
- The deployed site is only a visual and behavior reference. If it conflicts with GitHub docs, follow GitHub docs.

[Stack]
- Never import \`design-tokens.css\` and \`hl-system.css\` together. Pick one path per CLAUDE.md.
- Ownership split: \`colors + Button = HL\`; all other primitive anatomy/size/state = KRDS.
- UI sans: Pretendard Variable + tokens; code/numbers: Geist Mono; icons: Material Symbols (same as guide) or local SVG.
- Data screens: Filter → KPI/Summary → Main → Detail (table), compact density, light/dark.
- Keep the Identity shell order: Masthead → Identifier → Header → Footer.
- For SaaS screens with dense or information-heavy footers, prefer Identifier \`footer-out\`; use \`footer-in\` only when the footer is simple.

[Task]
- (Describe the screen or feature here)`;
}
export default function ConsumeFromLinks() {
  const { t } = useLanguage();
  const [siteUrl, setSiteUrl] = useState('');
  const [repoInput, setRepoInput] = useState(() => readLsString(LS_REPO_KEY, SOURCE_REPO_URL));
  const [branchInput, setBranchInput] = useState(() => readLsString(LS_BRANCH_KEY, SOURCE_REPO_BRANCH));
  const [copiedKey, setCopiedKey] = useState(null);
  const [saveStatus, setSaveStatus] = useState('idle');
  const [lsStatus, setLsStatus] = useState('checking');

  const runStorageProbe = useCallback(() => {
    setLsStatus('checking');
    window.setTimeout(() => {
      const ok = typeof window !== 'undefined' && probeLocalStorage();
      setLsStatus(ok ? 'ok' : 'blocked');
    }, 0);
  }, []);

  useEffect(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    let path = import.meta.env.BASE_URL || '/';
    path = path.replace(/\/+$/, '') || '/';
    setSiteUrl(path === '/' ? origin : `${origin}${path}`);
  }, []);

  useEffect(() => {
    runStorageProbe();
  }, [runStorageProbe]);

  const repo = useMemo(() => normalizeRepoUrl(repoInput), [repoInput]);
  const branch = useMemo(() => String(branchInput || 'main').trim() || 'main', [branchInput]);
  const repoOk = Boolean(repo);

  const promptKo = useMemo(
    () => (repoOk ? buildPromptKo(repo, branch, siteUrl || '(배포 사이트 URL)') : ''),
    [repoOk, repo, branch, siteUrl],
  );
  const promptEn = useMemo(
    () => (repoOk ? buildPromptEn(repo, branch, siteUrl || '(deployed site URL)') : ''),
    [repoOk, repo, branch, siteUrl],
  );

  const refLinks = useMemo(() => {
    if (!repoOk || !siteUrl) return [];
    const b = (p) => `${repo}/blob/${branch}/${p}`;
    const s = siteUrl;
    return [
      { href: b('AGENTS.md'), label: 'AGENTS.md' },
      { href: b('CLAUDE.md'), label: 'CLAUDE.md' },
      { href: b('docs/SEMANTIC_CONTRACT.md'), label: 'docs/SEMANTIC_CONTRACT.md' },
      { href: b('docs/PRIMITIVE_CONTRACT.md'), label: 'docs/PRIMITIVE_CONTRACT.md' },
      { href: b('docs/PRODUCT_ADOPTION_GUIDE.md'), label: 'docs/PRODUCT_ADOPTION_GUIDE.md' },
      { href: b('docs/DATA_DISPLAY.md'), label: 'docs/DATA_DISPLAY.md' },
      { href: b('docs/COMPONENTS.md'), label: 'docs/COMPONENTS.md' },
      { href: b('docs/CONSISTENCY_AND_AUTOMATION.md'), label: 'docs/CONSISTENCY_AND_AUTOMATION.md' },
      { href: b('public/hl-system.css'), label: 'public/hl-system.css' },
      { href: b('tokens/design-tokens.css'), label: 'tokens/design-tokens.css' },
      { href: b('examples/GOOD_EXAMPLES.md'), label: 'examples/GOOD_EXAMPLES.md' },
      { href: b('examples/BAD_EXAMPLES.md'), label: 'examples/BAD_EXAMPLES.md' },
      { href: `${s}/`, label: 'Live: / (home)' },
      { href: `${s}/components`, label: 'Live: /components' },
      { href: `${s}/dashboard`, label: 'Live: /dashboard' },
      { href: `${s}/design-tokens`, label: 'Live: /design-tokens' },
    ];
  }, [repo, branch, repoOk, siteUrl]);

  const copyText = useCallback(async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      setCopiedKey(null);
    }
  }, []);

  const handleSaveLinks = useCallback(() => {
    if (lsStatus !== 'ok') {
      setSaveStatus('invalid-storage');
      setTimeout(() => setSaveStatus('idle'), 4000);
      return;
    }
    const n = normalizeRepoUrl(repoInput);
    if (!n) {
      setSaveStatus('invalid');
      setTimeout(() => setSaveStatus('idle'), 3000);
      return;
    }
    const b = String(branchInput || 'main').trim() || 'main';
    try {
      localStorage.setItem(LS_REPO_KEY, n);
      localStorage.setItem(LS_BRANCH_KEY, b);
      setRepoInput(n);
      setBranchInput(b);
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch {
      setLsStatus('blocked');
      setSaveStatus('storage-fail');
      setTimeout(() => setSaveStatus('idle'), 5000);
    }
  }, [repoInput, branchInput, lsStatus]);

  const handleResetLinks = useCallback(() => {
    try {
      localStorage.removeItem(LS_REPO_KEY);
      localStorage.removeItem(LS_BRANCH_KEY);
    } catch {
      /* ignore */
    }
    setRepoInput(SOURCE_REPO_URL);
    setBranchInput(SOURCE_REPO_BRANCH);
    setSaveStatus('reset');
    setTimeout(() => setSaveStatus('idle'), 3000);
  }, []);

  const saveStatusMessage =
    saveStatus === 'saved'
      ? t(copy.savedStatus)
      : saveStatus === 'reset'
        ? t(copy.resetStatus)
        : saveStatus === 'invalid'
          ? t(copy.saveInvalid)
          : saveStatus === 'storage-fail'
            ? t(copy.saveStorageFail)
            : saveStatus === 'invalid-storage'
              ? t(copy.saveDisabledHint)
              : '';

  const storageBadgeClass =
    lsStatus === 'ok'
      ? 'hl-badge--success'
      : lsStatus === 'blocked'
        ? 'hl-badge--warning'
        : 'hl-badge--info';

  const canSave = lsStatus === 'ok';

  return (
    <>
      <div className="doc-page-head">
        <div className="doc-page-title">{t(copy.pageTitle)}</div>
        <div className="doc-page-desc">{t(copy.pageDesc)}</div>
      </div>

      <div className="doc-section" id="consume-urls">
        <div className="hl-card">
          <div className="hl-card__body doc-consume-fields">
            <label className="hl-label" htmlFor="consume-site">{t(copy.siteLabel)}</label>
            <input id="consume-site" className="hl-input" type="text" readOnly value={siteUrl} />

            <label className="hl-label" htmlFor="consume-repo">{t(copy.repoLabel)}</label>
            <input
              id="consume-repo"
              className="hl-input"
              type="url"
              placeholder="https://github.com/org/repo"
              value={repoInput}
              onChange={(e) => setRepoInput(e.target.value)}
              autoComplete="off"
            />
            <p className="doc-consume-hint">{t(copy.repoHint)}</p>

            <label className="hl-label" htmlFor="consume-branch">{t(copy.branchLabel)}</label>
            <input
              id="consume-branch"
              className="hl-input doc-consume-branch"
              type="text"
              value={branchInput}
              onChange={(e) => setBranchInput(e.target.value)}
              autoComplete="off"
            />

            <div className="doc-consume-storage" aria-busy={lsStatus === 'checking'}>
              <div className="doc-consume-storage__head">
                <span className="hl-label doc-consume-storage__label">{t(copy.storageTitle)}</span>
                <button type="button" className="hl-btn hl-btn--tertiary hl-btn--sm" onClick={runStorageProbe}>
                  {t(copy.recheckBtn)}
                </button>
              </div>
              <div className="doc-consume-storage__row">
                <span className={`hl-badge ${storageBadgeClass}`}>
                  {lsStatus === 'checking' ? t(copy.storageChecking) : null}
                  {lsStatus === 'ok' ? t(copy.storageOk) : null}
                  {lsStatus === 'blocked' ? t(copy.storageBlocked) : null}
                </span>
              </div>
            </div>

            <div className="doc-consume-actions">
              <button
                type="button"
                className="hl-btn hl-btn--primary hl-btn--md"
                onClick={handleSaveLinks}
                disabled={!canSave}
                title={!canSave ? t(copy.saveDisabledHint) : undefined}
              >
                {t(copy.saveBtn)}
              </button>
              <button type="button" className="hl-btn hl-btn--secondary hl-btn--md" onClick={handleResetLinks}>
                {t(copy.resetBtn)}
              </button>
            </div>
            <p
              className={`doc-consume-status${
                saveStatus === 'invalid' || saveStatus === 'storage-fail' || saveStatus === 'invalid-storage'
                  ? ' doc-consume-status--warn'
                  : ''
              }`}
              role="status"
              aria-live="polite"
            >
              {saveStatusMessage}
            </p>
          </div>
        </div>
      </div>

      {!repoOk ? (
        <div className="doc-section">
          <p className="hl-badge hl-badge--warning">{t(copy.warnRepo)}</p>
        </div>
      ) : null}

      {repoOk ? (
        <>
          <div className="doc-section" id="consume-prompt-ko">
            <div className="doc-section-title">{t(copy.promptKoTitle)}</div>
            <div className="doc-consume-prompt-wrap">
              <pre className="doc-consume-prompt" tabIndex={0}>{promptKo}</pre>
              <button
                type="button"
                className="hl-btn hl-btn--secondary hl-btn--sm doc-consume-copy"
                onClick={() => copyText('ko', promptKo)}
              >
                {copiedKey === 'ko' ? t(copy.copied) : t(copy.copyBtn)}
              </button>
            </div>
          </div>

          <div className="doc-section" id="consume-prompt-en">
            <div className="doc-section-title">{t(copy.promptEnTitle)}</div>
            <div className="doc-consume-prompt-wrap">
              <pre className="doc-consume-prompt" tabIndex={0}>{promptEn}</pre>
              <button
                type="button"
                className="hl-btn hl-btn--secondary hl-btn--sm doc-consume-copy"
                onClick={() => copyText('en', promptEn)}
              >
                {copiedKey === 'en' ? t(copy.copied) : t(copy.copyBtn)}
              </button>
            </div>
          </div>

          <div className="doc-section" id="consume-links">
            <div className="doc-section-title">{t(copy.linksTitle)}</div>
            <div className="hl-table-wrap">
              <table className="hl-table">
                <thead>
                  <tr>
                    <th>{t(copy.thDoc)}</th>
                    <th>{t(copy.thUrl)}</th>
                  </tr>
                </thead>
                <tbody>
                  {refLinks.map((row) => (
                    <tr key={row.href}>
                      <td className="mono">{row.label}</td>
                      <td>
                        <a href={row.href} target="_blank" rel="noreferrer">
                          {row.href}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
