<script>
  import { onDestroy, onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import MetricsLogo from '../components/MetricsLogo.svelte'
  import StickyNavbar from '../landing/components/StickyNavbar.svelte'
  import { isLoggedIn, apiStatus } from '../stores'
  import { handleLogin, isReauthenticateNeeded } from '../utils'
  import UserSpace from './components/UserSpace.svelte'

  let unsubscribeApiStatus = null
  let showLoading = false

  onMount(() => {
    if (!$isLoggedIn) {
      handleLogin()
    }

    unsubscribeApiStatus = apiStatus.subscribe((currentApiStatus) => {
      if (isReauthenticateNeeded(currentApiStatus)) {
        handleLogin()
        return
      }
      showLoading = $apiStatus.loading || !$apiStatus.loaded
    })
  })

  onDestroy(() => {
    if (unsubscribeApiStatus != null) {
      unsubscribeApiStatus()
    }
  })
</script>

<style>
  .wrapper {
    text-align: left;
    width: 100%;
    height: 100vh;

    overflow-y: scroll;
    overflow-x: hidden;
  }
  .container {
    position: relative;
    margin: 10rem 2rem;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
  }

  .loading {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .loading .content {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .loading .content .bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: var(--bg-color);
    opacity: 0.7;
  }

  .dashboard-content {
    width: 960px;
    height: 1000px;
  }

  .img-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }

  .img-container img {
    width: 338px;
    height: 338px;
    object-fit: contain;
  }

  @media only screen and (max-width: 960px) {
    .img-container {
      display: none;
    }
  }
</style>

<div class="wrapper">
  <StickyNavbar />
  <div class="container">
    {#if showLoading}
      <div class="loading" transition:fade={{ delay: 250, duration: 300 }}>
        <div class="content">
          <div class="bg" />
          <MetricsLogo />
        </div>
      </div>
    {/if}
    {#if $apiStatus.loaded}
      <div class="dashboard-content">
        <UserSpace />
      </div>
      <div class="img-container">
        <img src="images/dashboard-img.svg" alt="dashboard-img.svg" />
      </div>
    {/if}
  </div>
</div>
