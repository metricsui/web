<script type="text/javascript" src="https://embed.typeform.com/embed.js">
  import { onMount } from 'svelte'
  import { user } from '../stores'
  import FullScreenLoadingIndicator from '../components/FullScreenLoadingIndicator.svelte'
  import { authGuard } from '../utils'

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

  onMount(async () => {
    await authGuard()
    typeformUrl = `${typeformUrl}#${getHiddenFieldsParamsString()}`
    isLoading = false
  })
</script>

<style type="text/css">
  html {
    margin: 0;
    height: 100%;
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
</style>

{#if isLoading}
  <FullScreenLoadingIndicator loadingText="Loading..." />
{:else}
  <iframe
    title="Metrics Application Typeform"
    id="typeform-full"
    width="100%"
    height="100%"
    frameborder="0"
    allow="autoplay; encrypted-media;"
    src={typeformUrl} />
{/if}
