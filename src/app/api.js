import { post } from './http'

const DOMAIN = window.location.origin

export function postAuthTicket(ticket) {
  return post('auth/', { ticket, service: DOMAIN })
}
