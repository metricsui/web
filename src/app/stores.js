import { derived, readable, writable } from 'svelte/store'

export const DOMAIN = window.location.origin

export const roomName = writable(null)
export const jwtToken = writable(null)

export const apiStatus = writable({
  loaded: false,
  loading: false,
  errorCode: null,
  errorPayload: null,
})

function isJwtToken(token) {
  if (!token) return null
  const split = token.split('.')
  return split.length === 3
}

export const user = derived(jwtToken, ($jwtToken) => {
  if (!isJwtToken($jwtToken)) return null
  try {
    const payload = $jwtToken
      .split('.')[1]
      .replace(/-/g, '+')
      .replace(/_/g, '/')
    return JSON.parse(window.atob(payload))
  } catch (e) {
    return null
  }
})

export const isTokenStillValid = derived(user, ($user) => {
  if (!$user) return false
  if (!$user.exp) return false
  return Date.now() < $user.exp * 1000
})

export const dashboard = writable(null)

export const isLoggedIn = derived(jwtToken, ($jwtToken) => {
  return Boolean($jwtToken)
})

export const isMobileScreen = readable(true, (set) => {
  const queryResult = window.matchMedia('only screen and (max-width: 768px)')
  set(queryResult.matches)

  const onQueryChange = (event) => {
    set(event.target?.matches)
  }

  queryResult.addEventListener('change', onQueryChange)

  return () => {
    queryResult.removeEventListener('change', onQueryChange)
  }
})
