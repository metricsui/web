<script>
  import StickyNavbar from '../components/StickyNavbar.svelte'

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
    position: relative;
    width: 100%;
    height: var(--app-height);
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container {
    text-align: center;
    justify-self: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
  }

  .section-description {
    margin-top: 1.5rem;
    position: absolute;
    width: 100%;
    bottom: 0rem;
    text-align: center;
  }

  .notice-text {
    margin: 4px 0;
    color: var(--cerise-color);
    line-height: 1.875rem;
  }

  .sign-in-hint {
    margin-top: 1.25rem;
    font-style: italic;
  }

  button {
    margin-top: 1rem;
  }
</style>

<div class="wrapper">
  <StickyNavbar />
  <div class="container">
    <div class="image-container">
      <MetricsLogo />
    </div>
    <div class="title">Unauthorized 😱</div>
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
    <button on:click={handleLogin}> Sign In Now </button>
    <div class="sign-in-hint">* please sign-in using your UI SSO</div>
  </div>
  <div class="section-description">
    <div>Not a CSUI student?</div>
    <div class="font-normal notice-text">
      Sorry, for now candidates are limited from Computer Science UI 😢
    </div>
  </div>
</div>
