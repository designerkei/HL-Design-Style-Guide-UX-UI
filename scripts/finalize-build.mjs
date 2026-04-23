import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
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
  throw new Error(`Refusing to touch path outside workspace: ${outDir}`);
}

const indexPath = resolve(outDir, 'index.html');
const notFoundPath = resolve(outDir, '404.html');
const noJekyllPath = resolve(outDir, '.nojekyll');

if (!existsSync(indexPath)) {
  throw new Error(`Build output not found: ${indexPath}`);
}

copyFileSync(indexPath, notFoundPath);
writeFileSync(noJekyllPath, '');
