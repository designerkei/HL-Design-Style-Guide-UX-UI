import { REPO_NAME, PRODUCTION_BASE, DEFAULT_SOURCE_REPO_URL } from './siteConstants.js';

export { REPO_NAME, PRODUCTION_BASE, DEFAULT_SOURCE_REPO_URL };

function normalizeRepoRoot(url) {
  return String(url ?? '')
    .trim()
    .replace(/\.git$/i, '')
    .replace(/\/$/, '');
}

/**
 * 배포 시 VITE_SOURCE_REPO_URL이 있으면 그 값을, 없거나 빈 문자열이면 siteConstants의 기본 저장소 URL을 쓴다.
 */
const env = import.meta.env ?? {};
const envRepo = env.VITE_SOURCE_REPO_URL;
export const SOURCE_REPO_URL = normalizeRepoRoot(
  envRepo != null && String(envRepo).trim() !== '' ? envRepo : DEFAULT_SOURCE_REPO_URL,
);

/** 기본 브랜치 (raw/blob 링크용). 예: main */
export const SOURCE_REPO_BRANCH = String(env.VITE_SOURCE_REPO_BRANCH ?? 'main').replace(/^\//, '');
