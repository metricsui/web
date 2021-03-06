<script>
  import { fade, slide } from 'svelte/transition'
  import ThemeToggler from '../ThemeToggler.svelte'
  import { handleLogin, handleLogout } from '../utils'
  import { isLoggedIn, isMobileScreen } from '../stores'
  import MetricsLogo from './MetricsLogo.svelte'
  import IcClose from 'svelte-icons/fa/FaTimes.svelte'
  import IcMenu from 'svelte-icons/fa/FaBars.svelte'
  import { location } from 'svelte-spa-router'

  export let showLogo = true
  export let useAnimation = false

  let isShowingDrawer = false

  function toggleDrawer() {
    isShowingDrawer = !isShowingDrawer
  }

  $: isLanding = $location === `/`

  function redirectToDashboard() {
    window.location.href = '#/dashboard?force_login=true'
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
  }

  .drawer-open {
    height: 100vh;
  }

  .nav-content {
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

  .icon-menu {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--text-color);
  }

  @media screen and (max-width: 768px) {
    .nav-content {
      background: var(--bg-color);
    }

    .drawer-content {
      background-color: var(--bg-color);
    }

    .drawer {
      background-color: rgba(33, 33, 33, 0.4);
    }
  }
</style>

<div class="container" id="sticky-navbar">
  <div class={`drawer ${isShowingDrawer ? 'drawer-open' : ''}`}>
    <div class="nav-content color-transition">
      {#if (isShowingDrawer || showLogo) && useAnimation}
        <div class="logo-wrapper" transition:fade>
          <MetricsLogo clickable />
        </div>
      {/if}
      {#if (isShowingDrawer || showLogo) && !useAnimation}
        <div class="logo-wrapper">
          <MetricsLogo clickable />
        </div>
      {/if}

      <div class="space" />

      {#if !$isMobileScreen}
        <div class="toggler-wrapper">
          <ThemeToggler />
        </div>
        {#if !$isLoggedIn}
          <button
            class="secondary-button color-transition"
            on:click={handleLogin}>Login (SSO UI)</button>
        {:else}
          <button
            class="secondary-button color-transition"
            on:click={isLanding ? redirectToDashboard : handleLogout}>{isLanding ? 'Dashboard' : 'Logout'}</button>
        {/if}
      {:else if isShowingDrawer}
        <div class="icon-menu" on:click={toggleDrawer} in:fade>
          <IcClose />
        </div>
      {:else}
        <div class="icon-menu" on:click={toggleDrawer} in:fade>
          <IcMenu />
        </div>
      {/if}
    </div>

    {#if isShowingDrawer}
      <div class="drawer-content color-transition" transition:slide>
        {#if !$isLoggedIn}
          <button
            class="secondary-button color-transition"
            on:click={handleLogin}>Login (SSO UI)</button>
        {:else}
          <button
            class="secondary-button color-transition"
            on:click={isLanding ? redirectToDashboard : handleLogout}>{isLanding ? 'Dashboard' : 'Logout'}</button>
        {/if}
        <div class="drawer-item-space" />
        <div class="toggler-wrapper-mobile">
          <ThemeToggler />
        </div>
      </div>
    {/if}
  </div>
</div>
