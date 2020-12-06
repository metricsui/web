<script>
  import Router, { querystring, replace } from 'svelte-spa-router'
  import { wrap } from 'svelte-spa-router/wrap'
  import { onMount, onDestroy } from 'svelte'
  import {
    addColorSchemeEventListener,
    shouldUseDarkModeColorScheme,
  } from './utils'
  import { postAuthTicket } from './api'
  import {
    authApiStatus,
    jwtToken,
    isLoggedIn,
    isTokenStillValid,
    shouldShowUnauthorizedPage,
  } from './stores'
  import { syncCurrentUrlWithParams } from './utils'
  import Landing from './landing/Landing.svelte'
  import Dashboard from './dashboard/Dashboard.svelte'
  import Apply from './apply/Apply.svelte'
  import FullScreenLoadingIndicator from './components/FullScreenLoadingIndicator.svelte'
  import NotFound from './components/NotFound.svelte'
  import Unauthorized from './components/Unauthorized.svelte'
  import { getNotificationsContext } from 'svelte-notifications'

  import { ERROR_CODE } from './constants'

  const { addNotification } = getNotificationsContext()

  let unsubscriberColorScheme = null

  $: params = new URLSearchParams(location.search || $querystring)
  $: if ('token' in localStorage) jwtToken.set(localStorage.token || '')

  let isSigningIn = false
  function removeTicket() {
    params.delete('ticket')
    syncCurrentUrlWithParams(params)
  }

  onMount(async () => {
    if (params.has('ticket')) {
      isSigningIn = true
      const ticket = params.get('ticket')
      try {
        const { data, status } = await postAuthTicket(ticket)

        if (status === 200 && data != null) {
          localStorage.token = data
          jwtToken.set(data)
          const redirectUrl = !localStorage.redirectAfterLogin
            ? '/dashboard'
            : localStorage.redirectAfterLogin
          replace(redirectUrl)
        } else {
          authApiStatus.set({
            errorCode: status,
            errorPayload: data,
          })

          if (status === ERROR_CODE.UN_AUTHORIZED && data != null) {
            replace('/403')
            return
          }

          addNotification({
            text: `Login failed. Please try again. (${status})`,
            type: 'danger',
            position: 'bottom-right',
            removeAfter: 3000,
          })
        }
      } catch (error) {
        console.log(error)
      } finally {
        isSigningIn = false
        localStorage.removeItem('redirectAfterLogin')
      }
      removeTicket()
    }

    if (shouldUseDarkModeColorScheme()) {
      changeColorScheme()
    }

    setTimeout(() => {
      window.document.body.classList.toggle('color-transition')
    }, 500)

    unsubscriberColorScheme = addColorSchemeEventListener(changeColorScheme)
  })

  onDestroy(() => {
    if (unsubscriberColorScheme != null) {
      unsubscriberColorScheme()
    }
  })

  function changeColorScheme() {
    window.document.body.classList.toggle('dark')
  }

  const authGuard = async () => {
    if (!$isLoggedIn) {
      return false
    } else if (!$isTokenStillValid) {
      return false
    }
    return true
  }

  const routes = {
    '/dashboard': wrap({
      component: Dashboard,
      conditions: [authGuard],
    }),
    '/apply': wrap({
      component: Apply,
      conditions: [authGuard],
    }),
    '/': Landing,
    '*': NotFound,
  }

  // When auth guard fails
  function onConditionsFailed() {
    shouldShowUnauthorizedPage.set(true)
  }
</script>

<style>
  :global(html),
  :global(body) {
    position: relative;
    width: 100vw;
    height: 100vh;
    font-size: 14px;
    overflow: hidden;
    font-family: 'Rubik', sans-serif;
    background: var(--bg-color);
    color: var(--text-color);
    padding: 0;
    margin: 0;
  }

  :root {
    /* Theme Agnostic Colors */
    --font-family: 'Rubik';
    --cerise-color: #d8315b;
    --claret-color: #781f46;
    --optimistic-blue-color: #1976d2;
    --prussian-blue-color: ##0d46a1;

    /* Theme Agnostic Variables */
    --green-blue-crayola-color: #3e92cc;
    --primary-color: var(--cerise-color);
    --primary-variant-color: var(--claret-color);
    --secondary-color: var(--optimistic-blue-color);
    --secondary-variant-color: var(--prussian-blue-color);

    --h1-size: 6rem;
    --h2-size: 3.75rem;
    --h3-size: 3rem;
    --h4-size: 2rem;
    --h5-size: 1.5rem;
    --h6-size: 1.25rem;
    --subtitle1-size: 16px;
    --subtitle2-size: 14px;
    --body1-size: 16px;
    --body2-size: 14px;
    --button-size: 14px;
    --caption-size: 12px;
    --overline-size: 10px;

    /* Theme Dependent Variables */
    --bg-color: #fafafa;
    --text-color: #212121;
    --on-primary-color: #ffffff;
    --on-secondary-color: #ffffff;

    --horizontal-margin: 12%;

    --app-height: -webkit-fill-available;
    --app-height: 100vh;
  }

  @media screen and (max-width: 640px) {
    :global(:root) {
      --h1-size: 4rem;
      --horizontal-margin: 8%;
    }
  }

  @media screen and (max-width: 375px) {
    :global(html, body) {
      font-size: 12px;
    }
  }

  :global(.color-transition) {
    transition: background-color 0.5s linear, color 0.5s linear;
  }

  :global(body.dark) {
    --bg-color: #212121;
    --text-color: #fafafa;
  }

  :global(.primary-color) {
    color: var(--primary-color);
  }

  :global(.primary-variant-color) {
    color: var(--primary-variant-color);
  }

  :global(.secondary-color) {
    color: var(--secondary-color);
  }

  :global(.secondary-variant-color) {
    color: var(--secondary-variant-color);
  }

  :global(.light-text) {
    font-weight: 300;
  }

  :global(.bold-text) {
    font-weight: 700;
  }

  :global(h1),
  :global(h2),
  :global(h3) {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  :global(h1) {
    font-size: var(--h1-size);
  }

  :global(h2) {
    font-size: var(--h2-size);
  }

  :global(h3) {
    font-size: var(--h3-size);
  }

  :global(h4) {
    font-size: var(--h4-size);
  }

  :global(h5) {
    font-size: var(--h5-size);
  }

  :global(h6) {
    font-size: var(--h6-size);
  }

  :global(.body) {
    font-size: var(--body-size);
  }

  :global(.font-light) {
    font-weight: 300;
  }

  :global(.font-normal) {
    font-weight: 400;
  }

  :global(.font-medium) {
    font-weight: 500;
  }

  :global(.font-bold) {
    font-weight: 700;
  }

  :global(.row) {
    display: flex;
    flex-direction: row;
  }

  :global(.column) {
    display: flex;
    flex-direction: column;
  }

  :global(.flex-wrap) {
    flex-wrap: wrap;
  }

  :global(.justify-content-center) {
    justify-content: center;
  }

  :global(.justify-content-space-between) {
    justify-content: space-between;
  }

  :global(.justify-content-start) {
    justify-content: flex-start;
  }

  :global(.justify-content-end) {
    justify-content: end;
  }

  :global(button) {
    background-color: var(--primary-color);
    color: var(--on-primary-color);
    border: none;
    border-radius: 6px;
    font-size: var(--body-size);
    width: min(160px, 50vw);
    min-height: 40px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.15px;
    text-decoration: none;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(.primary-button2) {
    background-color: var(--primary-color);
    color: var(--on-primary-color);
    border: none;
    border-radius: 6px;
    font-size: var(--body-size);
    padding: 0 1.125rem;
    min-height: 46px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.15px;
    text-decoration: none;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(.secondary-button) {
    background-color: var(--bg-color);
    color: var(--primary-color);
    border: 1.5px solid var(--primary-color);
    border-radius: 6px;
    font-size: var(--body-size);
    padding: 0 1.125rem;
    min-height: 46px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.15px;
    text-decoration: none;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(button:focus),
  :global(.primary-button2:focus),
  :global(.secondary-button:focus) {
    outline: none;
  }

  :global(button:hover),
  :global(.primary-button2:hover),
  :global(.secondary-button:hover) {
    cursor: pointer;
  }

  :global(button:disabled) {
    filter: opacity(50%);
  }

  :global(.primary-button2 .l-icon) {
    margin-right: 0.5rem;
  }

  /* TODO(adalberht): Refactor main to different component */
  main {
    width: 100vw;
    height: 100vh;
    text-align: center;
    margin: 0 auto;
    overflow: hidden;
  }
</style>

<main>
  {#if isSigningIn}
    <FullScreenLoadingIndicator loadingText="Signing you in..." />
  {:else if $shouldShowUnauthorizedPage}
    <Unauthorized />
  {:else}
    <Router {routes} on:conditionsFailed={onConditionsFailed} />
  {/if}
</main>
