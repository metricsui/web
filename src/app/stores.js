import { derived, writable } from 'svelte/store'

export const DOMAIN = window.location.origin

export const roomName = writable(null)
export const jwtToken = writable(null)
export const loaded = writable(false)

export const user = derived(jwtToken, ($jwtToken) => {
  if (!$jwtToken) return null
  const payload = $jwtToken.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')
  return JSON.parse(window.atob(payload))
})
