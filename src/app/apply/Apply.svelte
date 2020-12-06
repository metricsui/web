<script type="text/javascript" src="https://embed.typeform.com/embed.js">
  import { onMount } from 'svelte'
  import { user } from '../stores'
  import FullScreenLoadingIndicator from '../components/FullScreenLoadingIndicator.svelte'

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
    typeformUrl = `${typeformUrl}#${getHiddenFieldsParamsString()}`
    isLoading = false
  })

  $: innerHeight = window.innerHeight
</script>

<style type="text/css">
  iframe html {
    margin: 0;
    height: var(--app-height);
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
    height={innerHeight}
    frameborder="0"
    allow="autoplay; encrypted-media;"
    src={typeformUrl} />
{/if}
