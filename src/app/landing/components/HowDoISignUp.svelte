<script>
  export let submissionDeadline = '30th December 2020 11:55PM'
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

  @media screen and (max-width: 640px) {
    .section {
      min-height: var(--app-height);
    }
  }
</style>

<div class="section" id="section-5">
  <h6 class="primary-color">How do I sign up?</h6>
  <ul class="steps-container">
    <li class="font-normal step-item">
      Apply through our website
      <a class="primary-color" href="/#/apply?force_login=true">here</a>
    </li>
    <li class="font-normal step-item">
      Choose
      <span class="primary-color">one</span>
      of the four paths in your application
    </li>
    <li class="font-normal step-item">
      Once the application is submitted,
      <span class="primary-color">check your dashboard</span>
      for the task assignments
    </li>
    <li class="font-normal step-item">
      <span class="primary-color">Submit your finished assignment</span>
      through
      <a href="/#/apply" class="primary-color">your dashboard</a>
      before
      {submissionDeadline}
    </li>
    <li class="font-normal step-item">
      <span class="primary-color">Schedule an interview</span>
      so we can know you better
    </li>
    <li class="font-bold primary-color step-item">
      Become our first batch mentees!
    </li>
  </ul>
</div>
