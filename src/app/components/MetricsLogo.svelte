<style>
  .metrics-logo-container {
    position: relative;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: fill;
  }

  :global(body.dark) .light-theme-logo {
    display: none;
  }

  :global(body:not(.dark)) .dark-theme-logo {
    display: none;
  }
</style>

<div class="metrics-logo-container">
  <img
    src="images/metrics-logo-dark-text.png"
    alt="metrics-logo-light-text.png"
    class="light-theme-logo" />
  <img
    src="images/metrics-logo-light-text.png"
    alt="metrics-logo-dark-text.png"
    class="dark-theme-logo" />
</div>
