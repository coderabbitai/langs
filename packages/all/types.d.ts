import type { langs } from './langs.js'
export type Lang = (typeof langs)[keyof typeof langs]
