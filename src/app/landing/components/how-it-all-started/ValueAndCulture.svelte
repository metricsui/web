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

  @media screen and (max-width: 1024px) {
    .value-and-culture-wrapper {
      flex: 0 50%;
      margin-top: 1.75rem;
    }
  }
</style>

<div class="value-and-culture-wrapper">
  <div class="font-bold title">{title}</div>
  <div class="description">{description}</div>
</div>
