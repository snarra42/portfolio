const path = require('path');
const { spawnSync } = require('child_process');

// Forcibly inject the portable Node 20 directory into the beginning of the PATH
// This ensures that when Next.js Turbopack spawns child node processes, it uses Node 20 instead of the system's Node 14.
process.env.PATH = 'c:\\Users\\agnie\\Desktop\\node20\\node-v20.11.1-win-x64;' + process.env.PATH;

console.log('--- Starting Next.js Dev Server with injected Node v20 PATH ---');

// Spawn the next dev server
spawnSync(process.execPath, [path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next'), 'dev'], {
    stdio: 'inherit',
});
