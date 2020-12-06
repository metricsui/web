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

  img {
    object-fit: cover;
    width: 33%;
  }

  .partner-images-container {
    display: flex;
  }

  h6 {
    margin-bottom: 1rem;
    margin-top: 0;
  }

  @media screen and (max-width: 600px) {
    .container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .partner-images-container {
      align-items: center;
    }
  }
</style>

<div class="container">
  <h6>Partners in Impact</h6>
  <div class="partner-images-container">
    {#each partners as partner}
      <img src={partner.imageURL} alt={partner.alt} />
    {/each}
  </div>
</div>
