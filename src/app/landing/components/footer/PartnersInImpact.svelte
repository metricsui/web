<script>
  const partners = [
    { imageURL: 'images/ristek-logo.png', alt: 'ristek-logo' },
    { imageURL: 'images/sistem-logo.png', alt: 'sistem-logo' },
    { imageURL: 'images/educare-logo.png', alt: 'educare-logo' },
  ]
</script>

<style>
  .container {
    width: 33%;
  }

  .partner-images-container {
    display: flex;
  }

  h6 {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 768px) {
    .container {
      width: 100%;
    }
  }
</style>

<div class="container">
  <h6>Partners in Impact</h6>
  <div class="partner-images-container">
    {#each partners as partner, i}
      <img src={partner.imageURL} alt={partner.alt} />
    {/each}
  </div>
</div>
