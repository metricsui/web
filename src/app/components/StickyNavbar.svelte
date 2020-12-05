<script>
  import { fade, slide } from 'svelte/transition'
  import ThemeToggler from '../ThemeToggler.svelte'
  import { handleLogin, handleLogout } from '../utils'
  import { isLoggedIn, isMobileScreen } from '../stores'
  import MetricsLogo from './MetricsLogo.svelte'

  export let showLogo = true
  export let useAnimation = false

  let isShowingDrawer = false

  function toggleDrawer() {
    isShowingDrawer = !isShowingDrawer
  }
</script>

<style>
  #sticky-navbar {
    width: 100%;
    z-index: 10;
    position: fixed;
    top: 0;

    transition: 0.5s;
    -webkit-transition: 0.5s;

    -webkit-transform: translateY(0%);
    -ms-transform: translateY(0%);
    transform: translateY(0%);
  }

  .drawer {
    position: relative;
    background-color: rgba(33, 33, 33, 0.4);
  }

  .drawer-open {
    height: 100vh;
  }

  .nav-content {
    background-color: var(--bg-color);
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-sizing: border-box;
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    z-index: 11;
  }

  .drawer-content {
    background-color: var(--bg-color);
    padding: 1rem 2rem;
    z-index: 10;
    display: flex;
    flex-direction: column;
  }

  .drawer-content .toggler-wrapper-mobile {
    align-self: flex-end;
  }

  .drawer-item-space {
    height: 1.125rem;
  }

  .drawer-content button {
    width: 100%;
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
  <div class={`drawer ${isShowingDrawer ? 'drawer-open' : ''}`}>
    <div class="nav-content">
      {#if (isShowingDrawer || showLogo) && useAnimation}
        <div class="logo-wrapper" transition:fade>
          <MetricsLogo />
        </div>
      {/if}
      {#if (isShowingDrawer || showLogo) && !useAnimation}
        <div class="logo-wrapper">
          <MetricsLogo />
        </div>
      {/if}

      <div class="space" />

      {#if !$isMobileScreen}
        <div class="toggler-wrapper">
          <ThemeToggler />
        </div>
        {#if !$isLoggedIn}
          <button class="secondary-button" on:click={handleLogin}>Login (SSO UI)</button>
        {:else}
          <button
            class="secondary-button"
            on:click={handleLogout}>Logout</button>
        {/if}
      {:else if isShowingDrawer}
        <div on:click={toggleDrawer}>
          <img src="images/ic_close.svg" alt="Close menu" in:fade />
        </div>
      {:else}
        <div on:click={toggleDrawer}>
          <img src="images/ic_hamburger_menu.svg" alt="Open menu" in:fade />
        </div>
      {/if}
    </div>

    {#if isShowingDrawer}
      <div class="drawer-content color-transition" transition:slide>
        {#if !$isLoggedIn}
          <button class="secondary-button" on:click={handleLogin}>Login (SSO UI)</button>
        {:else}
          <button
            class="secondary-button"
            on:click={handleLogout}>Logout</button>
        {/if}
        <div class="drawer-item-space" />
        <div class="toggler-wrapper-mobile">
          <ThemeToggler />
        </div>
      </div>
    {/if}
  </div>
</div>
