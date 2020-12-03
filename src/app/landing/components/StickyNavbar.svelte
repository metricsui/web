<script>
  import ThemeToggler from '../../ThemeToggler.svelte'
  import { handleLogin, handleLogout } from '../../utils'
  import { isLoggedIn } from '../../stores'
</script>

<style>
  #sticky-navbar {
    width: 100%;
    z-index: 10;
    justify-content: flex-end;
    display: flex;
    position: fixed;
    align-items: center;
    top: 0;

    transition: 0.5s;
    -webkit-transition: 0.5s;

    -webkit-transform: translateY(0%);
    -ms-transform: translateY(0%);
    transform: translateY(0%);

    margin-top: 1rem;
  }

  :global(#sticky-navbar.container-slide-up) {
    transform: translateY(-5rem);
    -webkit-transform: translateY(-5rem);
    -ms-transform: translateX(-5rem);
  }
</style>

<div class="container" id="sticky-navbar">
  {#if !$isLoggedIn}
    <button on:click={handleLogin}>Login with SSO UI</button>
  {:else}<button on:click={handleLogout}>Logout</button>{/if}
  <ThemeToggler />
</div>
