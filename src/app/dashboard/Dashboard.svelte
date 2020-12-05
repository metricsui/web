<script>
  import { onDestroy, onMount } from 'svelte'
  import FullScreenLoadingIndicator from '../components/FullScreenLoadingIndicator.svelte'
  import StickyNavbar from '../components/StickyNavbar.svelte'
  import { isLoggedIn, dashboardApiStatus } from '../stores'
  import { handleLogin, isReauthenticateNeeded } from '../utils'
  import UserSpace from './components/UserSpace.svelte'
  import { loadDashboard } from './actions'
  import { getNotificationsContext } from 'svelte-notifications'

  let unsubscribeApiStatus = null

  const { addNotification } = getNotificationsContext()

  onMount(() => {
    if (!$isLoggedIn) {
      handleLogin()
      return
    }

    unsubscribeApiStatus = dashboardApiStatus.subscribe((currentApiStatus) => {
      if (isReauthenticateNeeded(currentApiStatus)) {
        addNotification({
          text: 'Redirect to login',
          position: 'bottom-right',
          type: 'warning',
        })
        setTimeout(handleLogin, 1000)
        return
      }

      if (dashboardApiStatus.loaded && currentApiStatus.errorCode != null) {
        addNotification({
          text: `Something wrong (${currentApiStatus.errorCode})`,
          position: 'bottom-right',
          type: 'danger',
          removeAfter: 5000,
        })
      }
    })
    loadDashboard()
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
  }

  .dashboard-content {
    width: 960px;
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
    {#if $dashboardApiStatus.loading}
      <FullScreenLoadingIndicator />
    {:else if !$dashboardApiStatus.loaded && $dashboardApiStatus.errorCode != null}
      <div>Something wrong :(</div>
    {:else if $dashboardApiStatus.loaded}
      <div class="dashboard-content">
        <UserSpace />
      </div>
      <div class="img-container">
        <img src="images/dashboard-img.svg" alt="dashboard-img.svg" />
      </div>
    {/if}
  </div>
</div>
