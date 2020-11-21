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
