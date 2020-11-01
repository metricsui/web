export let isScrollingDown = false
export let lastScrollPosition = 0

export function scrollSubscriptionHandler() {
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
}
