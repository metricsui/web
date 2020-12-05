<script>
  import { onDestroy, onMount } from 'svelte'
  import FullScreenLoadingIndicator from '../components/FullScreenLoadingIndicator.svelte'
  import StickyNavbar from '../components/StickyNavbar.svelte'
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
      <FullScreenLoadingIndicator />
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
