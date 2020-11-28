import { DOMAIN } from './stores'
import { jwtToken } from './stores'
export function syncCurrentUrlWithParams(params) {
  const search = params.toString()
  const base = `${location.pathname}`
  const replacement = search
    ? `${base}?${search}${location.hash}`
    : `${base}${location.hash}`
  window.history.replaceState(null, null, replacement)
}

export function handleLogin() {
  location.href = `https://akun-kp.cs.ui.ac.id/cas/login?service=${DOMAIN}`
}

export function handleLogout() {
  jwtToken.set(null)
  localStorage.removeItem('token')
  location.href = `https://akun-kp.cs.ui.ac.id/cas/logout?service=${DOMAIN}`
}

/**
 * Check if user uses dark mode color scheme
 */
export function shouldUseDarkModeColorScheme() {
  const cachedValue = window.localStorage.getItem('isDarkTheme')

  // has cached value or not supported -> check if dark mode
  if (
    cachedValue != null ||
    window.matchMedia('(prefers-color-scheme)').media === 'not all'
  ) {
    return cachedValue == 'true'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}
