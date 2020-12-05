export let isScrollingDown = false
import { debounce } from '../../utils'
export let lastScrollPosition = 0

export const scrollSubscriptionHandler = debounce(
  () => {
    const wrapperDom = document.getElementById('landing-wrapper')
    const offset = wrapperDom.pageYOffset || wrapperDom.scrollTop
    const scrollDown = offset > lastScrollPosition

    console.log(wrapperDom.scrollTop, wrapperDom.pageYOffset)
    if (isScrollingDown != scrollDown && offset !== 0) {
      isScrollingDown = scrollDown
      document
        .getElementById('sticky-navbar')
        .classList.toggle('container-slide-up')
    }
    lastScrollPosition = offset
  },
  25,
  false
)
