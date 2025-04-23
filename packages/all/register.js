/** @import { DynamicLangRegistrations } from '@ast-grep/napi' */
import angular from '@ast-grep/lang-angular'
import bash from '@ast-grep/lang-bash'
import c from '@ast-grep/lang-c'
import cpp from '@ast-grep/lang-cpp'
import csharp from '@ast-grep/lang-csharp'
import css from '@ast-grep/lang-css'
import dart from '@ast-grep/lang-dart'
import elixir from '@ast-grep/lang-elixir'
import go from '@ast-grep/lang-go'
import haskell from '@ast-grep/lang-haskell'
import html from '@ast-grep/lang-html'
import java from '@ast-grep/lang-java'
import javascript from '@ast-grep/lang-javascript'
import json from '@ast-grep/lang-json'
import kotlin from '@ast-grep/lang-kotlin'
import lua from '@ast-grep/lang-lua'
import php from '@ast-grep/lang-php'
import python from '@ast-grep/lang-python'
import ruby from '@ast-grep/lang-ruby'
import rust from '@ast-grep/lang-rust'
import scala from '@ast-grep/lang-scala'
import sql from '@ast-grep/lang-sql'
import swift from '@ast-grep/lang-swift'
import toml from '@ast-grep/lang-toml'
import tsx from '@ast-grep/lang-tsx'
import typescript from '@ast-grep/lang-typescript'
import { registerDynamicLanguage as rdl } from '@ast-grep/napi'
import { Lang } from './langs.js'

/**
 * Built-in dynamic languages supported by `@ast-grep/langs`.
 *
 * @type DynamicLangRegistrations
 */
// @ts-expect-error
const register = Object.freeze({
  [Lang.Angular]: angular,
  [Lang.Bash]: bash,
  [Lang.C]: c,
  [Lang.Cpp]: cpp,
  [Lang.CSharp]: csharp,
  [Lang.Css]: css,
  [Lang.Dart]: dart,
  [Lang.Elixir]: elixir,
  [Lang.Go]: go,
  [Lang.Haskell]: haskell,
  [Lang.Html]: html,
  [Lang.Java]: java,
  [Lang.JavaScript]: javascript,
  [Lang.Json]: json,
  [Lang.Kotlin]: kotlin,
  [Lang.Lua]: lua,
  [Lang.Php]: php,
  [Lang.Python]: python,
  [Lang.Ruby]: ruby,
  [Lang.Rust]: rust,
  [Lang.Scala]: scala,
  [Lang.Sql]: sql,
  [Lang.Swift]: swift,
  [Lang.Toml]: toml,
  [Lang.Tsx]: tsx,
  [Lang.TypeScript]: typescript,
})

/**
 * Register all dynamic languages from `@ast-grep/langs`. This function should
 * be called exactly once in the program.
 *
 * @param {DynamicLangRegistrations} custom - Extra languages to register that
 * are not already defined in `@ast-grep/langs`.
 */
export function registerDynamicLanguage(custom = {}) {
  return rdl({
    ...register,
    ...custom,
  })
}
