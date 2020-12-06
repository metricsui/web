<script>
  export let title
  export let description
  export let imageUrl
</script>

<style>
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
  }

  .space {
    height: 1rem;
    width: 2.5rem;
  }
</style>

<div class="activity">
  <div class="img-wrapper">
    <img alt={`mentoring-${title}`} src={imageUrl} />
  </div>
  <div class="space" />
  <div class="content">
    <div class="title font-medium">{title}</div>
    <p class="description">{description}</p>
  </div>
</div>
