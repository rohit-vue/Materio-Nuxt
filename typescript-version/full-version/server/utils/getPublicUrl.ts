import { ensurePrefix } from '@antfu/utils'

export const getPublicUrl = (path: string) => {
  const baseUrl = process.env.NUXT_APP_BASE_URL ?? ''

  const pathWithBaseUrl = `${baseUrl}${path}`
  const url = `${ensurePrefix('/', pathWithBaseUrl)}`.replaceAll('//', '/')

  return `http://localhost:3000${url}`
}
