<script>
  import PartnersInImpact from './footer/PartnersInImpact.svelte'
  import EngageWithUs from './footer/EngageWithUs.svelte'
</script>

<style>
  footer {
    width: 100vw;
    min-height: 25vh;
    background-color: #f1f1f1;
    padding: 0 var(--horizontal-margin);
    display: flex;
    align-items: center;
  }

  :global(body.dark) footer {
    background-color: #1f1f1f;
  }

  .limiter {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    .limiter {
      width: calc(100% - var(--horizontal-margin) - var(--horizontal-margin));
    }
  }

  @media screen and (max-width: 600px) {
    footer {
      min-height: 100vh;
    }

    .limiter {
      flex-direction: column;
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
