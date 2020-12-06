<script>
</script>

<style>
  .section {
    padding: var(--landing-section-padding-vertical) var(--horizontal-margin);
  }

  .steps-container {
    position: relative;
    list-style: none;
    padding-inline-start: 2.5rem;
    overflow-y: hidden;
  }
  .steps-container::before {
    display: inline-block;
    content: '';
    position: absolute;
    top: 1rem;
    left: 0.715rem;
    width: 0.625rem;
    height: 100%;
    border-left: 0.1875rem solid var(--primary-color);
  }

  .step-item {
    position: relative;
    counter-increment: list;
    font-size: 1.25rem;
    line-height: 1.7rem;
  }
  .step-item:not(:last-child) {
    padding-bottom: 2.5rem;
  }
  .step-item::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 2px;
    left: -2.5rem;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    background-color: var(--primary-color);
  }
</style>

<div class="section" id="section-5">
  <h6 class="primary-color">How it all started</h6>
  <ul class="steps-container">
    <li class="font-normal step-item">
      Apply from this website
      <!-- TODO: change href to fix URL -->
      <a class="primary-color" href="/#/apply">here</a>
    </li>
    <li class="font-normal step-item">
      Choose
      <span class="primary-color">one</span>
      of the four fields in your application
    </li>
    <li class="font-normal step-item">
      Once submitted,
      <span class="primary-color">check your email</span>
      for assignments
    </li>
    <li class="font-normal step-item">
      Submit your finished assignment to
      <a
        class="primary-color"
        href="mailto:metricsui@gmail.com">metricsui@gmail.com</a>
    </li>
    <li class="font-normal step-item">
      Wait for
      <span class="primary-color">x days</span>
      to get called for an interview
    </li>
    <li class="font-normal step-item">
      Give
      <span class="primary-color">your best</span>
      on the interview
    </li>
    <li class="font-bold primary-color step-item">
      Become our first batch mentees!
    </li>
  </ul>
</div>
