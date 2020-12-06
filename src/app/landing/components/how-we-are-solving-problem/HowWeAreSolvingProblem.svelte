<script>
  import Activity from './components/Activity.svelte'
</script>

<style>
  .section {
    padding: var(--landing-section-padding-vertical) var(--horizontal-margin);
  }

  @media only screen and (min-width: 1024px) {
    .section h3 {
      width: 50%;
    }
  }

  @media only screen and (max-width: 640px) {
    .space-activity {
      height: 2.5rem;
      width: 2.5rem;
    }
  }

  .space-activity {
    height: 4rem;
    width: 2.5rem;
  }
</style>

<div class="section" id="section-4">
  <h6 class="primary-color">How we're solving the problem</h6>
  <h3 class="font-medium">
    Internship preparations and career alignment by our trusted and committed
    mentor that will guide you to what you aspire to be.
  </h3>
  <div class="space-activity" />

  <Activity
    title="1-on-1 Coaching"
    description="Share your goals and needs with your mentor that will help you achieve them"
    imageUrl="images/intensive_coaching.png" />
  <div class="space-activity" />

  <Activity
    title="Mock Interview"
    description="Help navigate the nitty-gritty details of what to prepare and do for interviews"
    imageUrl="images/mock_interview.png" />
  <div class="space-activity" />

  <Activity
    title="Task Exercise"
    description="Work on real on-the-job tasks to get a glimpse of the path you’re embarking on"
    imageUrl="images/task_exercise.png" />
</div>
