<script>
  import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte'
  import StickyNavbar from './components/StickyNavbar.svelte'
  import MetricsLogo from './components/MetricsLogo.svelte'
  import PartnersInImpact from './components/footer/PartnersInImpact.svelte'
  import EngageWithUs from './components/footer/EngageWithUs.svelte'
  import { externalLinks } from '../constants/externalLinks'
  import { scrollSubscriptionHandler } from './state/scroll'
  import { onMount } from 'svelte'

  function scrollTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  onMount(() => {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()
  })
</script>

<style>
  .wrapper {
    text-align: left;
    width: 100%;
    height: 100vh;

    overflow-y: scroll;
    overflow-x: hidden;
  }

  .section {
    margin: 0 var(--horizontal-margin);
  }

  /* Content CSS starts */
  .section > * {
    max-width: 800px;
  }

  a {
    justify-self: flex-start;
  }

  .body-text {
    line-height: 32px;
    letter-spacing: 0.15px;
  }

  .want-to-be-notified-text {
    margin-bottom: 16px;
  }

  .button-container {
    font-weight: bold;
  }

  h1 {
    text-align: left;
    line-height: 114%;
    letter-spacing: -1.5px;
    margin-top: 24px;
  }

  h5 {
    margin-bottom: 1rem;
  }

  .body-text {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }

  .arrow-icon {
    position: absolute;
    align-self: center;
    width: 32px;
    height: 32px;
    font-weight: 300;
    margin: 0 8px;
    color: var(--text-color);
    animation: slide 1s linear infinite;
  }

  .desktop-arrow-icon {
    display: none;
  }

  .mobile-icon {
    display: none;
  }

  @media screen and (max-width: 640px) {
    .wrapper {
      scroll-snap-type: y mandatory;
    }

    .content-wrapper {
      margin: 0 var(--horizontal-margin);
    }

    .section {
      width: 100%;
      height: var(--app-height, 100vh);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      scroll-snap-align: start;
      position: relative;
      margin: 0;
    }

    .section > * {
      max-width: 90%;
    }

    h6 {
      margin-top: 0;
      font-size: 3rem;
    }

    h5 {
      font-size: 3rem;
      margin-top: 0;
    }

    .mobile-icon {
      display: block;
    }

    @keyframes slide {
      0% {
        bottom: 10%;
      }
      50% {
        bottom: 7.5%;
      }
      100% {
        bottom: 10%;
      }
    }
  }

  @media screen and (min-width: 640px) {
    .content-wrapper {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      scroll-snap-align: start;
    }
    .desktop-arrow-icon {
      display: block;
    }
    @keyframes slide {
      0% {
        bottom: 5%;
      }
      50% {
        bottom: 7.5%;
      }
      100% {
        bottom: 5%;
      }
    }
  }
  /* Content CSS ends */

  /* Footer CSS starts */
  footer {
    width: 100vw;
    min-height: calc(0.25 * var(--app-height));
    background-color: #f1f1f1;
    padding: 1rem var(--horizontal-margin);
    display: flex;
    align-items: center;
  }

  :global(body.dark) footer {
    background-color: #1f1f1f;
  }

  .limiter {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    .limiter {
      width: calc(100% - var(--horizontal-margin) - var(--horizontal-margin));
    }
  }

  @media screen and (max-width: 640px) {
    footer {
      height: calc(1.5 * var(--app-height));
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 0;
      padding-bottom: 0;
      justify-content: center;
      align-items: center;
      scroll-snap-align: center;
    }

    .limiter {
      flex-direction: column;
    }
  }
  /* Footer CSS ends */
</style>

<div class="wrapper" id="landing-wrapper" on:scroll={scrollSubscriptionHandler}>
  <StickyNavbar />

  <!-- Content Starts-->
  <div class="content-wrapper">
  <div class="section" id="section-1">
    <MetricsLogo />
    <h1 class="font-light">Coming soon to start-up your career</h1>
    <div class="arrow-icon mobile-icon" on:click={() => scrollTo('section-2')}>
      <FaAngleDown />
    </div>
  </div>

  <div class="section" id="section-2">
    <h5>What is Metrics?</h5>
    <div class="body-text">
      Metrics is a mentoring initiative by Computer Science Alumni of Universitas Indonesia
      that strives to help CS students start-up their careers through an extensive and collaborative
      four-month mentorship program.
    </div>
    <div class="arrow-icon mobile-icon" on:click={() => scrollTo('section-3')}>
      <FaAngleDown />
    </div>
  </div>

  <div class="section" id="section-3">
    <h6 class="want-to-be-notified-text">
      Want to be notified when the magic happens?
    </h6>
    <div class="button-container">
      <a href={externalLinks.earlyBirdFormURL} class="primary-button" id="let-me-know-button" target="_blank">LET ME
        KNOW</a>
    </div>
    <div class="arrow-icon mobile-icon" on:click={() => scrollTo('section-4')}>
      <FaAngleDown />
    </div>
  </div>
  <div class="arrow-icon desktop-arrow-icon" on:click={() => scrollTo('section-4')}>
    <FaAngleDown />
  </div>
  </div>
  <!-- Content Ends-->

  <footer class="color-transition">
    <div class="limiter" id="section-4">
      <PartnersInImpact />
      <EngageWithUs />
    </div>
  </footer>
</div>
