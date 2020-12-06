<script>
  import Activity from './components/Activity.svelte'
</script>

<style>
  .section {
    padding: var(--landing-section-padding-vertical) var(--horizontal-margin);
  }

  .activity {
    display: flex;
  }

  .activity .img-wrapper {
    width: 296px;
    height: 154px;
    position: relative;
    background-color: lightgray;
  }

  .activity img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .activity .img-wrapper::before {
    content: '';
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(216, 49, 91, 0.7) 0%,
      rgba(216, 49, 91, 0.5) 100%
    );
    background-blend-mode: multiply;
    width: 100%;
    height: 100%;
  }

  .activity .title {
    font-size: var(--h6-size);
    line-height: 2.25rem;
  }

  .activity .description {
    font-size: var(--h6-size);
    width: 60%;
    margin-top: 0.5rem;
    line-height: 2.25rem;
  }

  @media only screen and (min-width: 1024px) {
    .section h3 {
      width: 50%;
    }
  }

  @media only screen and (max-width: 640px) {
    .activity {
      flex-direction: column;
    }
    .activity .img-wrapper {
      width: 100%;
      background-color: lightgray;
    }

    .activity .description {
      width: 100%;
    }

    .space-activity {
      height: 2.5rem;
      width: 2.5rem;
    }
  }

  .space {
    height: 1rem;
    width: 2.5rem;
  }

  .space-activity {
    height: 4rem;
    width: 2.5rem;
  }
</style>

<div class="section" id="section-4">
  <h6 class="primary-color">How we're solving the problem</h6>
  <h3 class="font-medium">Finding the right people to mentor you</h3>
  <div class="space-activity" />

  <Activity
    title="Intensive Coaching"
    description="You’ll be paired with a great mentor that will be both caring and reliable"
    imageUrl="images/intensive_coaching.png" />
  <div class="space-activity" />

  <Activity
    title="Mock Interview"
    description="We’ll help navigate the nitty-gritty details of what to prepare and do on interviews"
    imageUrl="images/mock_interview.png" />
  <div class="space-activity" />

  <Activity
    title="Task Exercise"
    description="Mentor will share their technical tests to get a glimpse of the path you’re embarking on"
    imageUrl="images/task_exercise.png" />
</div>
