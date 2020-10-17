<script>
  import { externalLinks } from '../../constants/externalLinks'
  import MetricsLogo from './MetricsLogo.svelte'
</script>

<style>
  .section > * {
    max-width: 800px;
  }

  a {
    justify-self: flex-start;
  }

  .body-text {
    line-height: 32px;
    letter-spacing: 0.15px;
  }

  .want-to-be-notified-text {
    margin-bottom: 16px;
  }

  h1 {
    text-align: left;
    line-height: 114%;
    letter-spacing: -1.5px;
    margin-top: 24px;
  }

  h5 {
    margin-bottom: 1rem;
  }

  .body-text {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }

  .wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 var(--horizontal-margin);
  }

  @media screen and (max-width: 640px) {
    .section {
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .section > * {
      max-width: 90%;
    }

    h1 {
      font-size: 3rem;
    }

    h6 {
      margin-top: 0;
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 568px) {
    h1 {
      font-size: 3rem;
    }
  }
</style>

<div class="wrapper">
  <div class="section">
    <MetricsLogo />
    <h1 class="font-light">Coming soon to start-up your career</h1>
  </div>
  <div class="section">
    <h5>What is Metrics?</h5>
    <div class="body-text">
      Metrics is mentoring initiative by Computer Science Alumni of Universitas
      Indonesia that strives to help CS students start-up their career through
      an extensive and collaborative four-months mentorship program.
    </div>
  </div>
  <div class="section">
    <h6 class="want-to-be-notified-text">
      Want to be notified when the magic happens?
    </h6>
    <div class="button-container">
      <a href={externalLinks.earlyBirdFormURL} class="primary-button">Let me
        know</a>
    </div>
  </div>
</div>
