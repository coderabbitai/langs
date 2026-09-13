const { createHash } = require('node:crypto')
const { readFileSync, mkdirSync, copyFileSync } = require('node:fs')
const { join, dirname } = require('node:path')
const upstream = require('./UPSTREAM.json')

// Offline build preparation: checked-in upstream bytes, never a network fetch.
for (const [file, expected] of Object.entries(upstream.files)) {
  const source = join(__dirname, 'vendor', file)
  const actual = createHash('sha256').update(readFileSync(source)).digest('hex')
  if (actual !== expected) throw new Error(`Upstream source mismatch: ${file}`)
  const target = join(__dirname, 'src', file)
  mkdirSync(dirname(target), { recursive: true })
  copyFileSync(source, target)
}
