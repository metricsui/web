<script>
</script>

<style>
  .section {
    padding: var(--landing-section-padding-vertical) var(--horizontal-margin);
    background-color: var(--primary-color);
    color: var(--on-primary-color);
    box-sizing: border-box;
  }

  @media only screen and (min-width: 1024px) {
    #section-6 h3,
    .description-text {
      width: 50%;
    }
    #section-6 .secondary-button {
      width: 7.25rem;
    }
  }

  @media screen and (max-width: 1024px) {
    #section-6 .secondary-button {
      max-width: min(50%, 200px);
    }
  }

  .help-us-text {
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: 2.25rem;
  }

  .description-text {
    padding-bottom: 2rem;
    font-size: 1.25rem;
  }

  .registration-text {
    padding-bottom: 1.5rem;
    font-size: 1.25rem;
  }

  .secondary-button {
    background-color: #fafafa;
  }
</style>

<div class="section" id="section-6">
  <h3 class="font-medium">Convinced yet?</h3>
  <div class="font-medium help-us-text">Help us help you!</div>
  <div class="description-text">
    We are commited in helping you jumpstart your tech career. Good mentors is
    one of the key ingredients of a successful and fulfilling career.
  </div>
  <div class="registration-text">
    Registration opens now until
    <span class="font-bold">16th December 2020 at 23.55 (GMT+7)</span>
  </div>
  <a class="secondary-button" href="/#/apply?force_login=true"> Start now </a>
</div>
