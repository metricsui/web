<script>
  import { derived } from 'svelte/store'
  import StickyNavbar from '../components/StickyNavbar.svelte'
  import { authApiStatus } from '../stores'

  const faculty = derived(authApiStatus, ($authApiStatus) => {
    return $authApiStatus.errorPayload?.faculty || null
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
  }

  .greeting-text {
    font-size: 2.25rem;
    line-height: 3.5rem;
    text-overflow: ellipsis;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .section-description {
    margin-top: 1.5rem;
  }

  .head-text {
    color: var(--cerise-color);
    font-size: var(--h5-size);
    margin: 4px 0;
    line-height: 2.25rem;
  }

  .notice-text {
    margin: 4px 0;
    color: var(--cerise-color);
    line-height: 1.875rem;
  }

  .space {
    height: 1.5rem;
  }
</style>

<div class="wrapper">
  <StickyNavbar />
  <div class="container">
    <h1>403 😱</h1>
    {#if $faculty != null}
      <div class="section-description">
        <div class="font-medium head-text">
          We understand you’re from
          {$faculty}
        </div>
        <div class="font-normal notice-text">
          Sorry, for now we’re only accepting candidates from Computer Science
          UI 😢
        </div>
      </div>
      <div class="space" />
      <button class="primary-button2" disabled={true}>
        <img class="l-icon" src="images/ic_action_nav.svg" alt="Navigation" />
        Apply
      </button>
    {:else}
      <div class="font-normal greeting-text">You are unauthorized...</div>
    {/if}
  </div>
</div>
