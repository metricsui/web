<script>
  import { onMount } from 'svelte'
  import { isLoggedIn } from '../stores'
  import { handleLogin } from '../utils'

  import MetricsLogo from './MetricsLogo.svelte'

  let redirectIn = 3

  onMount(() => {
    const updateRedirectInInterval = setInterval(function () {
      redirectIn -= 1
      if (redirectIn === 0) {
        clearInterval(updateRedirectInInterval)
        handleLogin()
      }
    }, 1000)
  })
</script>

<style>
  .image-container {
    width: 100px;
    margin-bottom: 0.5rem;
  }

  .title {
    margin-top: 1rem;
    font-size: var(--h3-size);
  }

  .description {
    margin-top: 1rem;
    font-size: var(--h4-size);
    margin-bottom: 1rem;
  }

  .redirect {
    font-size: 1.25rem;
  }

  .wrapper {
    width: 100%;
    height: var(--app-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
  }
</style>

<div class="wrapper">
  <div class="image-container">
    <MetricsLogo />
  </div>
  <div class="title">Unauthorized</div>
  {#if !$isLoggedIn}
    <div class="description">
      You are trying to access page that requires authorization.<br />
      Please sign-in first.
    </div>
  {:else}
    <div class="description">Your session has expired.</div>
  {/if}
  <div class="redirect">
    Redirecting you to
    <span class="primary-color">Sign In</span>
    in
    {redirectIn}
    seconds...
  </div>
</div>
