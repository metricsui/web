<script type="text/javascript" src="https://embed.typeform.com/embed.js">
  import { onMount, onDestroy } from 'svelte'
  import { dashboard, dashboardApiStatus, user } from '../stores'
  import FullScreenLoadingIndicator from '../components/FullScreenLoadingIndicator.svelte'
  import { replace } from 'svelte-spa-router'
  import { loadDashboard } from '../dashboard/actions'
  import { handleLogin, isReauthenticateNeeded } from '../utils'
  import { getNotificationsContext } from 'svelte-notifications'

  const { addNotification } = getNotificationsContext()
  let isLoading = true
  let typeformUrl = 'https://form.typeform.com/to/nSJPlPY4'

  function getHiddenFieldsParamsString() {
    const typeformUrlParams = new URLSearchParams()
    typeformUrlParams.set(
      'secret_key',
      process.env.APPLICATION_TYPEFORM_SECRET_KEY
    )
    typeformUrlParams.set('username_sso', $user.username)
    typeformUrlParams.set('name', $user.name)
    typeformUrlParams.set('npm', $user.npm)
    typeformUrlParams.set('study_program', $user.studyProgram)
    return typeformUrlParams.toString()
  }

  let unsubscribeApiStatus = null

  onMount(async () => {
    typeformUrl = `${typeformUrl}#${getHiddenFieldsParamsString()}`

    unsubscribeApiStatus = dashboardApiStatus.subscribe((currentApiStatus) => {
      if (isReauthenticateNeeded(currentApiStatus)) {
        addNotification({
          text:
            'Seems like your session has expired. Redirecting you to Sign-In in 1s',
          position: 'bottom-right',
          type: 'warning',
        })
        setTimeout(handleLogin, 1000)
        return
      }

      if (dashboardApiStatus.loaded && currentApiStatus.errorCode != null) {
        addNotification({
          text: `Something went wrong, please try again (${currentApiStatus.errorCode})`,
          position: 'bottom-right',
          type: 'danger',
          removeAfter: 5000,
        })
      }
    })

    if (
      !$dashboard ||
      !$dashboard.action ||
      $dashboard.action.step ||
      $dashboard.action.step.type
    ) {
      await loadDashboard()
    }
    if ($dashboard.action.step.type !== 'apply') {
      replace('/dashboard')
    } else {
      isLoading = false
    }
  })

  onDestroy(() => {
    if (unsubscribeApiStatus != null) {
      unsubscribeApiStatus()
    }
  })

  $: innerHeight = window.innerHeight
</script>

<style type="text/css">
  iframe html {
    margin: 0;
    height: calc(var(--app-height) * 0.95);
    overflow: hidden;
  }
  iframe {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border: 0;
  }
  div {
    background-color: white;
    width: 100%;
    height: var(--app-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

{#if isLoading}
  <FullScreenLoadingIndicator loadingText="Loading..." />
{:else}
  <div>
    <iframe
      title="Metrics Application Typeform"
      id="typeform-full"
      width="100%"
      height={0.98 * innerHeight}
      frameborder="0"
      allow="autoplay; encrypted-media;"
      src={typeformUrl} />
  </div>
{/if}
