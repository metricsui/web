<script>
  import ValueAndCulture from './ValueAndCulture.svelte'
</script>

<style>
  .wrapper {
    padding: 5rem var(--horizontal-margin);
    min-height: var(--app-height);
  }

  .wrapper h3 {
    margin-top: 1rem;
  }

  .wrapper p {
    max-width: 800px;
    font-size: 1.25rem;
    line-height: 2rem;
    letter-spacing: 0.5px;
    margin-bottom: 2rem;
  }

  .row {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .row {
      flex-wrap: wrap;
    }
  }
</style>

<div class="wrapper" id="section-2">
  <h6 class="primary-color">How it all started</h6>
  <h3 class="font-medium">“How did we start?”</h3>
  <p>
    Three CSUI Alumni realised that it was hard to get your first exposure to
    the tech industry. This is a common and pressing problem especially for
    computer science students. We believe everyone can start somewhere.
  </p>

  <h6 class="primary-color">Our values and cultures</h6>
  <div class="row">
    <ValueAndCulture
      title="Humility"
      description="We value down-to-earth people, with can-do attitude and have a growth mindset to aways keep moving forward." />
    <ValueAndCulture
      title="Integrity"
      description="We value down-to-earth people, with can-do attitude and have a growth mindset to aways keep moving forward." />
    <ValueAndCulture
      title="Empathy"
      description="We value down-to-earth people, with can-do attitude and have a growth mindset to aways keep moving forward." />
    <ValueAndCulture
      title="Inclusion"
      description="We value down-to-earth people, with can-do attitude and have a growth mindset to aways keep moving forward." />
  </div>
</div>
