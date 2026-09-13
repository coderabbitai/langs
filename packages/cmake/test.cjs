const assert = require('node:assert/strict')
const { parse, registerDynamicLanguage } = require('@ast-grep/napi')
const registration = require('./index.js')
registerDynamicLanguage({ CMake: registration })

const root = source => parse('CMake', source).root()
const commands = source =>
  root(source).findAll({ rule: { kind: 'normal_command' } })
assert.equal(
  commands('FetchContent_Declare(Catch2 GIT_TAG v3.5.4)')[0].kind(),
  'normal_command',
)
assert.equal(
  commands('# FetchContent_Declare(Fake)\n#[=[\nfind_package(Fake)\n]=]')
    .length,
  0,
)
assert.equal(commands('set(DOC "find_package(Fake)")').length, 1)
assert.equal(
  root('find_package(${NAME})').findAll({ rule: { kind: 'variable_ref' } })
    .length,
  1,
)
const malformed = root('find_package(')
const errors = malformed.findAll({ rule: { kind: 'ERROR' } })
const pending = [...malformed.children()]
let missingToken = false
while (pending.length) {
  const node = pending.pop()
  if (node.text() === '' && !node.isNamed()) missingToken = true
  pending.push(...node.children())
}
if (!errors.length && !missingToken) {
  const describe = node => ({
    kind: node.kind(),
    text: node.text(),
    children: node.children().map(describe),
  })
  console.error(
    'Malformed-input AST diagnostic:',
    JSON.stringify(describe(malformed)),
  )
}
assert(
  errors.length > 0 || missingToken,
  'Malformed source must retain an error or missing-token recovery marker',
)
console.log(`CMake native parser passed: ${process.platform}/${process.arch}`)
