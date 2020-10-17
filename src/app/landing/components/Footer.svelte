<script>
  import PartnersInImpact from './footer/PartnersInImpact.svelte'
  import EngageWithUs from './footer/EngageWithUs.svelte'
</script>

<style>
  footer {
    width: 100vw;
    min-height: 25vh;
    background-color: #f1f1f1;
    padding-left: var(--horizontal-margin);
    padding-bottom: 2rem;
  }

  :global(body.dark) footer {
    background-color: #1f1f1f;
  }

  .limiter {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    footer {
      min-height: 100vh;
    }

    .limiter {
      flex-direction: column;
      width: 80%;
    }

    .limiter > * {
      margin-top: 1rem;
    }
  }
</style>

<footer>
  <div class="limiter">
    <PartnersInImpact />
    <EngageWithUs />
  </div>
</footer>
