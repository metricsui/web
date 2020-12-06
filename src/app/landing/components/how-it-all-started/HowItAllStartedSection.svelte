<script>
  import ValueAndCulture from './ValueAndCulture.svelte'
</script>

<style>
  .wrapper {
    padding: var(--landing-section-padding-vertical) var(--horizontal-margin);
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
      flex-direction: column;
    }

    h6 {
      margin-bottom: 1.25rem;
    }
  }
</style>

<div class="wrapper" id="section-2">
  <h6 class="primary-color">How it all started</h6>
  <h3 class="font-medium">“Starting is hard, isn’t it?”</h3>
  <p>
    We CSUI Alumni realized that it was hard to get your first exposure to the
    tech industry.<br />
    This is a common and pressing problem, especially for computer science
    students.<br />
    We believe everyone must start somewhere.<br />
    And we want to help you to do that.
  </p>

  <h6 class="primary-color">Our values and cultures</h6>
  <div class="row">
    <ValueAndCulture
      title="Humility"
      description="We value growth, learning, and kindness.
      We believe that we are not yet so great that our minds cannot be opened. Humility means letting your work speak for itself." />
    <ValueAndCulture
      title="Curiosity"
      description="We first seek to listen, to absorb, to immerse, to traverse.
      We realize that the world is too large and our time on it too short ever to remain fully satisfied in their pursuit of whatever new ideas pass in front of us.
      " />
    <ValueAndCulture
      title="Empathy"
      description="We strive to understand the world through others’ eyes and cut to the heart of what others are feeling and experiencing.
      Empathy breeds compassion and connection. It is an essential precursor for honesty." />
  </div>
</div>
