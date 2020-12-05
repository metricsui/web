<script>
  import { slide } from 'svelte/transition'
  import ThemeToggler from '../ThemeToggler.svelte'
  import { handleLogin, handleLogout } from '../utils'
  import { isLoggedIn } from '../stores'
  import MetricsLogo from './MetricsLogo.svelte'

  export let showLogo = true
  export let useAnimation = false
</script>

<style>
  #sticky-navbar {
    box-sizing: border-box;
    padding-left: 5%;
    padding-right: 5%;
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

  .toggler-wrapper {
    margin-right: 1rem;
  }

  .logo-wrapper {
    width: 98px;
  }

  .space {
    flex-grow: 1;
  }
</style>

<div class="container" id="sticky-navbar">
  {#if showLogo && useAnimation}
    <div class="logo-wrapper" transition:slide>
      <MetricsLogo />
    </div>
  {/if}
  {#if showLogo && !useAnimation}
    <div class="logo-wrapper">
      <MetricsLogo />
    </div>
  {/if}
  <div class="space" />
  <div class="toggler-wrapper">
    <ThemeToggler />
  </div>
  {#if !$isLoggedIn}
    <button class="secondary-button" on:click={handleLogin}>Login (SSO UI)</button>
  {:else}
    <button class="secondary-button" on:click={handleLogout}>Logout</button>
  {/if}
</div>
