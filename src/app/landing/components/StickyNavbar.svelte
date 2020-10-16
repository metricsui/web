<script>
  import { onMount, onDestroy } from 'svelte'
  import ThemeToggler from '../../ThemeToggler.svelte'

  let isScrollingDown = false
  let lastScrollPosition = 0
  let scrollSubscriptionHandler = () => {
    const offset = window.pageYOffset || document.documentElement.scrollTop
    const scrollDown = offset > lastScrollPosition
    if (isScrollingDown != scrollDown) {
      isScrollingDown = scrollDown
      console.log('value changes')
      document
        .getElementById('sticky-navbar')
        .classList.toggle('container-slide-up')
    }
    lastScrollPosition = offset
  }

  onMount(() => {
    window.document.addEventListener('scroll', scrollSubscriptionHandler)
  })

  onDestroy(() => {
    window.document.removeEventListener('scroll', scrollSubscriptionHandler)
  })
</script>

<style>
  #sticky-navbar {
    width: 100%;
    z-index: 10;
    justify-content: space-between;
    display: flex;
    position: fixed;
    align-items: center;
    top: 0;
    left: 0;

    transition: 0.5s;
    -webkit-transition: 0.5s;

    -webkit-transform: translateY(0%);
    -ms-transform: translateY(0%);
    transform: translateY(0%);
  }

  :global(#sticky-navbar.container-slide-up) {
    transform: translateY(-4rem);
    -webkit-transform: translateY(-4rem);
    -ms-transform: translateX(-4rem);
  }
</style>

<div class="container" id="sticky-navbar">
  <ThemeToggler />
</div>
