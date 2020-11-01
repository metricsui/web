<script>
  import ThemeToggler from '../../ThemeToggler.svelte'
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
    transform: translateY(-5rem);
    -webkit-transform: translateY(-5rem);
    -ms-transform: translateX(-5rem);
  }
</style>

<div class="container" id="sticky-navbar">
  <ThemeToggler />
</div>
