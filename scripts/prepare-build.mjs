import { existsSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { isAbsolute, relative, resolve } from 'node:path';
import process from 'node:process';

const workspaceRoot = resolve(process.cwd());
const outDir = resolve(workspaceRoot, 'build');
const relativeOutDir = relative(workspaceRoot, outDir);

if (
  relativeOutDir === '' ||
  relativeOutDir.startsWith('..') ||
  isAbsolute(relativeOutDir)
) {
  throw new Error(`Refusing to remove path outside workspace: ${outDir}`);
}

if (!existsSync(outDir)) {
  process.exit(0);
}

if (process.platform === 'win32') {
  const escapedPath = outDir.replace(/'/g, "''");
  const result = spawnSync(
    'powershell.exe',
    [
      '-NoProfile',
      '-NonInteractive',
      '-Command',
      `Remove-Item -LiteralPath '${escapedPath}' -Recurse -Force`,
    ],
    { stdio: 'inherit' }
  );

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(`Failed to remove build directory: ${outDir}`);
  }

  process.exit(0);
}

rmSync(outDir, { recursive: true, force: true });
