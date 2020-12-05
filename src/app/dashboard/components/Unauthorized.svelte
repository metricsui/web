<script>
  export let username = ''
  export let faculty = ''
</script>

<style>
  .container {
    position: relative;
  }

  .greeting-text {
    font-size: 2.25rem;
    line-height: 3.5rem;
    text-overflow: ellipsis;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .section-description {
    margin-top: 1.5rem;
  }

  .head-text {
    color: var(--cerise-color);
    font-size: var(--h5-size);
    margin: 4px 0;
    line-height: 2.25rem;
  }

  .notice-text {
    margin: 4px 0;
    color: var(--cerise-color);
    line-height: 1.875rem;
  }
</style>

<div class="container">
  <div class="font-normal greeting-text">Welcome,<br />{username}</div>
  <div class="section-description">
    <div class="font-medium head-text">We understand you’re from {faculty}</div>
    <div class="font-normal notice-text">
      Sorry, for now we’re only accepting candidates from Computer Science UI 😢
    </div>
  </div>
  <button class="primary-button2" disabled={true}>
    <img class="l-icon" src="images/ic_action_nav.svg" alt="Navigation" />
    Apply
  </button>
</div>
