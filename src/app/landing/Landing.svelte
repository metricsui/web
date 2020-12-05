<script>
  import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte'
  import StickyNavbar from '../components/StickyNavbar.svelte'
  import MetricsLogo from '../components/MetricsLogo.svelte'
  import PartnersInImpact from './components/footer/PartnersInImpact.svelte'
  import EngageWithUs from './components/footer/EngageWithUs.svelte'
  import {
    scrollSubscriptionHandler,
    shouldShowNavbarLogo,
  } from './state/scroll'
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
  .section .left-column {
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

  .left-column h1 {
    text-align: left;
    line-height: 114%;
    letter-spacing: -1.5px;
    margin-top: 1.75rem;
    margin-bottom: 0.6rem;
  }

  .left-column h5 {
    margin-top: 2rem;
    margin-bottom: 0.6rem;
  }

  .left-column .button-container {
    margin-top: 2rem;
  }

  .body-text {
    font-size: 1.25rem;
    margin-bottom: 12px;
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

    .body-text {
      line-height: 1.5rem;
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

  .logo-wrapper {
    width: min(160px, 80vw);
    margin-left: 0.5rem;
  }

  .left-column {
    margin-right: 1.5rem;
  }

  .eligible-applicants-text {
    font-size: 1rem;
    font-weight: 500;
  }

  @media screen and (max-width: 1024px) {
    .limiter {
      width: calc(100% - var(--horizontal-margin) - var(--horizontal-margin));
    }
    #section-1 > img {
      display: none;
    }
    .left-column {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 375px) {
    .left-column h1 {
      font-size: 2.5rem;
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
  <StickyNavbar showLogo={$shouldShowNavbarLogo} useAnimation={true} />

  <!-- Content Starts-->
  <div class="content-wrapper">
    <div class="section row justify-content-space-between" id="section-1">
      <div class="left-column">
        <div class="logo-wrapper">
          <MetricsLogo />
        </div>
        <h1 class="font-light">Start-up your tech career</h1>
        <h5>Landing your tech internship has never been easier</h5>
        <div class="body-text">
          Join our 14-weeks intensive mentoring program with former tech interns from leading companies*
        </div>
        <div class="eligible-applicants-text">
          *Applicants can only be from Computer Science UI for now
        </div>
        <div class="button-container">
          <a href="#/dashboard" class="primary-button" id="let-me-know-button">Start now</a>
        </div>
      </div>
      <img src="images/landing_asset.svg" alt="illustration-1" />
      <div class="arrow-icon mobile-icon" on:click={() => scrollTo('section-3')}>
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
