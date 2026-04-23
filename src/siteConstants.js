/** Node/vite.config에서도 안전하게 import 가능 (import.meta 없음) */
export const REPO_NAME = 'HL-Design-Style-Guide-UX-UI';
export const PRODUCTION_BASE = `/${REPO_NAME}/`;

/**
 * 「링크로 시작 (AI)」 페이지 기본 GitHub 루트 (끝 슬래시·.git 없음).
 * 포크·미러·이전 저장소면 빌드 시 VITE_SOURCE_REPO_URL로 덮어쓴다.
 */
export const DEFAULT_SOURCE_REPO_URL = 'https://github.com/designerkei/HL-Design-Style-Guide-UX-UI';
