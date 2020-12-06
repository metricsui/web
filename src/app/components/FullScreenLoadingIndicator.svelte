<script>
  import { Jumper } from 'svelte-loading-spinners'
  import MetricsLogo from './MetricsLogo.svelte'

  export let loadingText = 'Loading...'
</script>

<style>
  .image-container {
    width: 100px;
    margin-bottom: 0.5rem;
  }
  .wrapper {
    width: 100%;
    height: var(--app-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="wrapper">
  <div class="image-container">
    <MetricsLogo />
  </div>
  <Jumper size="60" color="#d8315b" unit="px" />
  <span>{loadingText}</span>
</div>
