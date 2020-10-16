<script>
  import ThemeToggler from '../../ThemeToggler.svelte'
</script>

<style>
  .container {
    width: 100%;
    z-index: 10;
    justify-content: space-between;
    display: flex;
    position: fixed;
    align-items: center;
    top: 0;
    left: 0;

    transition: 1s;
    -webkit-transition: 1s;

    -webkit-transform: translateY(0%);
    -ms-transform: translateY(0%);
    transform: translateY(0%);
  }

  .container-slide-up {
    transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
    -ms-transform: translateX(-100%);
  }
</style>

<div class="container">
  <ThemeToggler />
</div>
