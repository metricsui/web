<script>
  import MetricsLogo from './MetricsLogo.svelte'
</script>

<style>
  .image-container {
    width: 100px;
    margin-bottom: 0.5rem;
  }
  span {
    font-size: var(--h2-size);
  }
</style>

<div
  style="width: 100%; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
  <div class="image-container">
    <MetricsLogo />
  </div>
  <span>404 Not Found</span>
  <a href="/" class="primary-color">Click here to go back to Landing page.</a>
</div>
