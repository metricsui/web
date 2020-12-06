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
  import HowItAllStartedSection from './components/how-it-all-started/HowItAllStartedSection.svelte'
  import HowDoISignUp from './components/HowDoISignUp.svelte'
  import HowWeAreSolvingProblem from './components/how-we-are-solving-problem/HowWeAreSolvingProblem.svelte'
  import WhatCanYouLearn from './components/what-can-you-learn/WhatCanYouLearn.svelte'
  import ConvincedYet from './components/ConvincedYet.svelte'

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
  #landing-wrapper {
    --landing-section-padding-vertical: 5rem;
  }

  @media screen and (max-width: 640px) {
    #landing-wrapper {
      --landing-section-padding-vertical: 2rem;
    }
  }

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

  .button-container {
    font-weight: bold;
    width: 30%;
    margin-top: 2rem;
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

  .content-wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    /* scroll-snap-align: start; */
  }

  @media screen and (max-width: 640px) {
    .content-wrapper {
      margin: 0 var(--horizontal-margin);
    }

    .body-text {
      line-height: 1.5rem;
    }

    .button-container {
      width: 50%;
    }

    .section {
      width: 100%;
      height: var(--app-height, 100vh);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      scroll-snap-align: start;
      position: relative;
      margin: 0;
    }

    .section > * {
      max-width: 90%;
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
    background-color: #f1f1f1;
    padding: var(--landing-section-padding-vertical) var(--horizontal-margin);
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
    align-items: flex-start;
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
      padding: 2rem 0;
      justify-content: center;
      align-items: center;
      /* scroll-snap-align: center; */
    }

    .limiter {
      flex-direction: column;
      align-items: center;
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
          <a href="#/dashboard" class="primary-button2" id="let-me-know-button">Start now</a>
        </div>
      </div>
      <img src="images/landing_asset.svg" alt="illustration-1" />
    </div>
    <div class="arrow-icon" on:click={() => scrollTo('section-2')}>
      <FaAngleDown />
    </div>
  </div>

  <HowItAllStartedSection />
  <WhatCanYouLearn />
  <HowWeAreSolvingProblem />
  <HowDoISignUp />
  <ConvincedYet />
  <!-- Content Ends-->

  <footer class="color-transition">
    <div class="limiter" id="section-7">
      <EngageWithUs />
      <PartnersInImpact />
    </div>
  </footer>
</div>
