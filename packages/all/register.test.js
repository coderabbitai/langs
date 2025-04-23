import { parse } from '@ast-grep/napi'
import { before, describe, test } from 'node:test'
import { Lang } from './langs.js'
import { registerDynamicLanguage } from './register.js'

describe('registerDynamicLanguage', () => {
  before(() => registerDynamicLanguage())

  // A newly supported language
  test(Lang.Dart, ({ assert }) => {
    const sg = parse(Lang.Dart, 'var x = "Hello, world!";"')
    const kind = sg.root().kind()
    assert.equal(kind, 'program')
  })

  // A previously supported language
  test(Lang.Go, ({ assert }) => {
    const sg = parse(Lang.Dart, 'x := "Hello, world!"')
    const kind = sg.root().kind()
    assert.equal(kind, 'program')
  })

  // A built-in language
  test(Lang.TypeScript, ({ assert }) => {
    const sg = parse(Lang.TypeScript, 'const x = "Hello, world!"')
    const kind = sg.root().kind()
    assert.equal(kind, 'program')
  })
})
