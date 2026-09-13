const { spawnSync } = require('node:child_process')
const { join } = require('node:path')

if (
  !['darwin', 'linux', 'win32'].includes(process.platform) ||
  !['arm64', 'x64'].includes(process.arch) ||
  (process.platform === 'win32' && process.arch !== 'x64')
) {
  throw new Error(
    `Unsupported CMake native build target: ${process.platform}/${process.arch}`,
  )
}
// Compile the pinned generated C; do not regenerate a grammar from another
// revision or fetch tools/sources at build time. This runs only for maintainers.
const windows = process.platform === 'win32'
const args = windows
  ? [
      '/nologo',
      '/LD',
      '/O2',
      '/std:c11',
      `/I${join(__dirname, 'src')}`,
      join(__dirname, 'src/parser.c'),
      join(__dirname, 'src/scanner.c'),
      `/Fe:${join(__dirname, 'parser.so')}`,
    ]
  : [
      process.platform === 'darwin' ? '-dynamiclib' : '-shared',
      // A Rosetta Node process still invokes the host compiler. Select the target
      // explicitly so the produced library matches the runtime loading it.
      ...(process.platform === 'darwin'
        ? ['-arch', process.arch === 'x64' ? 'x86_64' : process.arch]
        : []),
      '-fPIC',
      '-O2',
      '-I',
      join(__dirname, 'src'),
      join(__dirname, 'src/parser.c'),
      join(__dirname, 'src/scanner.c'),
      '-o',
      join(__dirname, 'parser.so'),
    ]
// Windows runs in the Visual Studio developer environment. No tool download or
// runtime compilation fallback; qualification must actually load the result.
const result = spawnSync(windows ? 'cl.exe' : 'cc', args, {
  cwd: __dirname,
  stdio: 'inherit',
})
if (result.error) throw result.error
if (result.status !== 0)
  throw new Error(`CMake compiler failed: ${result.status}`)
