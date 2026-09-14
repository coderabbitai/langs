const assert = require('node:assert/strict')
const { existsSync } = require('node:fs')
const { join } = require('node:path')

// A local parser.so is deliberately not part of the published package. Never
// publish a native package that only works on its maintainer's build machine.
for (const target of [
  'Linux-ARM64',
  'Linux-X64',
  'Windows-X64',
  'macOS-ARM64',
  'macOS-X64',
]) {
  assert(
    existsSync(join(__dirname, 'prebuilds', `prebuild-${target}`, 'parser.so')),
    `Missing qualified prebuild: ${target}`,
  )
}
