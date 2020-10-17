<script>
  import TiSocialTwitter from 'svelte-icons/ti/TiSocialTwitter.svelte'
  import TiSocialInstagram from 'svelte-icons/ti/TiSocialInstagram.svelte'
  import TiMail from 'svelte-icons/ti/TiMail.svelte'
  import SocialMediaComponent from './SocialMediaComponent.svelte'

  export const socialMedias = [
    {
      displayText: 'metricsui@gmail.com',
      url: 'mailto:metricsui@gmail.com',
      iconComponent: TiMail,
    },
    {
      displayText: '@metricsatui',
      url: 'https://www.instagram.com/metricsatui/',
      iconComponent: TiSocialInstagram,
    },
    {
      displayText: '@metricsatui',
      url: 'https://twitter.com/metricsatui',
      iconComponent: TiSocialTwitter,
    },
  ]
</script>

<style>
  h6 {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 600px) {
    .container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>

<div class="container">
  <h6>Engage with us</h6>
  <div class="social-media-containers">
    {#each socialMedias as socialMedia, i}
      <SocialMediaComponent {...socialMedia} />
    {/each}
  </div>
</div>
