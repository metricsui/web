import { get as getStore } from 'svelte/store'
import { post, get } from './http'
import { jwtToken } from './stores'

const DOMAIN = window.location.origin

export function postAuthTicket(ticket) {
  return post('auth/', { ticket, service: DOMAIN })
}

export function getDashboard() {
  const token = getStore(jwtToken)
  return get('dashboard/', token)
}
