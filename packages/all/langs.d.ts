import type { DynamicLangRegistrations } from '@ast-grep/napi'
import type { Lang } from './lang.js'

/**
 * Built-in dynamic languages supported by `@ast-grep/langs`.
 */
export declare const langs: Readonly<
  Record<Lang, DynamicLangRegistrations[string]>
>
