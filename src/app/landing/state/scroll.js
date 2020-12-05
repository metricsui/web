export let isScrollingDown = false
import { debounce } from '../../utils'
import { writable } from 'svelte/store'

export const shouldShowNavbarLogo = writable(false)

export const scrollSubscriptionHandler = debounce(
  () => {
    const wrapperDom = document.getElementById('landing-wrapper')
    const offset = wrapperDom.pageYOffset || wrapperDom.scrollTop

    if (offset < 200) {
      shouldShowNavbarLogo.set(false)
    } else {
      shouldShowNavbarLogo.set(true)
    }
  },
  25,
  false
)
