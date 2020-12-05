export let isScrollingDown = false
import { debounce } from '../../utils'
import { writable } from 'svelte/store'

export let lastScrollPosition = 0
export const shouldShowNavbarLogo = writable(false)

export const scrollSubscriptionHandler = debounce(
  () => {
    const wrapperDom = document.getElementById('landing-wrapper')
    const offset = wrapperDom.pageYOffset || wrapperDom.scrollTop
    const scrollDown = offset > lastScrollPosition

    if (isScrollingDown != scrollDown && offset !== 0) {
      isScrollingDown = scrollDown
      document
        .getElementById('sticky-navbar')
        .classList.toggle('container-slide-up')
    }
    lastScrollPosition = offset

    if (lastScrollPosition < 200) {
      shouldShowNavbarLogo.set(false)
    } else {
      shouldShowNavbarLogo.set(true)
    }
  },
  25,
  false
)
