import { derived, writable } from 'svelte/store'

export const DOMAIN = window.location.origin

export const roomName = writable(null)
export const jwtToken = writable(null)

export const apiStatus = writable({
  loaded: false,
  loading: false,
  errorCode: null,
})

export const user = writable(null)

export const dashboard = writable(null)

export const isLoggedIn = derived(jwtToken, ($jwtToken) => {
  return Boolean($jwtToken)
})
