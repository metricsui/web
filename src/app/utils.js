import { replace } from 'svelte-spa-router'
import { get } from 'svelte/store'

import { ERROR_CODE } from './constants'
import { DOMAIN } from './stores'
import { jwtToken } from './stores'
import { location as spaLocation } from 'svelte-spa-router'

export function syncCurrentUrlWithParams(params) {
  const search = params.toString()
  const base = `${location.pathname}`
  const replacement = search
    ? `${base}?${search}${location.hash}`
    : `${base}${location.hash}`
  window.history.replaceState(null, null, replacement)
}

export function handleLogin() {
  const currentLocation = get(spaLocation)
  if (currentLocation && currentLocation !== '/') {
    localStorage.redirectAfterLogin = currentLocation
  }

  location.href = `https://akun-kp.cs.ui.ac.id/cas/login?service=${DOMAIN}`
}

export function handleLogout() {
  jwtToken.set(null)
  localStorage.removeItem('token')
  location.href = `https://akun-kp.cs.ui.ac.id/cas/logout?service=${DOMAIN}`
}

// Single-page redirect without reload using SPA replace
export function redirectTo(url) {
  replace(url)
}

export function isReauthenticateNeeded(apiStatus) {
  return apiStatus.errorCode === ERROR_CODE.UN_AUTH
}

export function hasCachedColorScheme() {
  return window.localStorage.getItem('isDarkTheme') != null
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

/**
 * Listen to prefered color scheme event and pass dark mode flag to callback.
 * Returns subscriber object.
 * @param {function} listener will receive dark mode flag
 */
export function addColorSchemeEventListener(callback) {
  if (hasCachedColorScheme()) {
    return () => {}
  }

  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const callbackWrapper = (event) => {
    if (hasCachedColorScheme()) return
    const isDarkMode = event.matches
    callback(isDarkMode)
  }

  media.addEventListener('change', callbackWrapper, false)
  return () => {
    media.removeEventListener('change', callbackWrapper, false)
  }
}

/**
 * @see source {@link https://github.com/jashkenas/underscore|Copyright}
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 */
export function debounce(func, wait, immediate) {
  let timeout
  return function () {
    let context = this,
      args = arguments
    let later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
