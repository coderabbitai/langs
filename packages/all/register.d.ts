import type { DynamicLangRegistrations } from '@ast-grep/napi'

/**
 * Register all dynamic languages from `@ast-grep/langs`. This function should
 * be called exactly once in the program.
 *
 * @param {DynamicLangRegistrations} custom - Extra languages to register that
 * are not already defined in `@ast-grep/langs`.
 */
export function registerDynamicLanguage(custom?: DynamicLangRegistrations): void
