<script>
  export let title
  export let description
</script>

<style>
  .description {
    margin-top: 0.75rem;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    font-size: 1rem;
    line-height: 1.8rem;
    letter-spacing: 0.4px;
  }

  .value-and-culture-wrapper {
    width: 33%;
    margin-right: 1.5rem;
  }

  @media screen and (max-width: 1024px) {
    .value-and-culture-wrapper {
      margin-top: 1.75rem;
      width: 100%;
    }
  }
</style>

<div class="value-and-culture-wrapper">
  <div class="font-bold title">{title}</div>
  <div class="description">{description}</div>
</div>
