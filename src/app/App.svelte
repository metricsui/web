<script>
  import Landing from './landing/Landing.svelte'
</script>

<style>
  :global(html),
  :global(body) {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 14px;
  }

  :root {
    /* Theme Agnostic Colors */
    --font-family: 'Rubik';
    --cerise-color: #d8315b;
    --claret-color: #781f46;
    --optimistic-blue-color: #1976d2;
    --prussian-blue-color: ##0d46a1;

    /* Theme Agnostic Variables */
    --green-blue-crayola-color: #3e92cc;
    --primary-color: var(--cerise-color);
    --primary-variant-color: var(--claret-color);
    --secondary-color: var(--optimistic-blue-color);
    --secondary-variant-color: var(--prussian-blue-color);

    --h1-size: 6rem;
    --h2-size: 3.75rem;
    --h3-size: 3rem;
    --h4-size: 2.125rem;
    --h5-size: 1.5rem;
    --h6-size: 1.25rem;
    --subtitle1-size: 16px;
    --subtitle2-size: 14px;
    --body1-size: 16px;
    --body2-size: 14px;
    --button-size: 14px;
    --caption-size: 12px;
    --overline-size: 10px;

    /* Theme Dependent Variables */
    --bg-color: #fafafa;
    --text-color: #212121;
    --on-primary-color: #ffffff;
    --on-secondary-color: #ffffff;
  }

  @media screen and (max-width: 640px) {
    :global(:root) {
      --h1-size: 4rem;
    }
  }

  :global(body) {
    font-family: 'Rubik', sans-serif;
    background: var(--bg-color);
    color: var(--text-color);
    padding: 0;
    margin: 0;
  }

  :global(body.color-transition) {
    transition: background-color 1s linear, color 1s linear;
  }

  :global(body.dark) {
    --bg-color: #212121;
    --text-color: #fafafa;
  }

  :global(.primary-color) {
    color: var(--primary-color);
  }

  :global(.primary-variant-color) {
    color: var(--primary-variant-color);
  }

  :global(.secondary-color) {
    color: var(--secondary-color);
  }

  :global(.secondary-variant-color) {
    color: var(--secondary-variant-color);
  }

  :global(.light-text) {
    font-weight: 300;
  }

  :global(.bold-text) {
    font-weight: 700;
  }

  :global(h1),
  :global(h2),
  :global(h3) {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  :global(h1) {
    font-size: var(--h1-size);
  }

  :global(h2) {
    font-size: var(--h2-size);
  }

  :global(h3) {
    font-size: var(--h3-size);
  }

  :global(h4) {
    font-size: var(--h4-size);
  }

  :global(h5) {
    font-size: var(--h5-size);
  }

  :global(h6) {
    font-size: var(--h6-size);
  }

  :global(.body) {
    font-size: var(--body-size);
  }

  :global(.font-light) {
    font-weight: 300;
  }

  :global(.font-normal) {
    font-weight: 400;
  }

  :global(.font-bold) {
    font-weight: 700;
  }

  :global(button),
  :global(.primary-button) {
    background-color: var(--primary-color);
    color: var(--on-primary-color);
    border: none;
    border-radius: 8px;
    font-size: var(--body-size);
    width: min(160px, 50vw);
    min-height: 40px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.15px;
    text-decoration: none;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 108px;
  }

  :global(button:focus),
  :global(.primary-button:focus) {
    outline: none;
  }

  /* TODO(adalberht): Refactor main to different component */
  main {
    display: flex;
    width: 100%;
    min-height: 100%;
    text-align: center;
    margin: 0 auto;
    overflow-x: hidden;
  }
</style>

<main>
  <!-- TODO(adalberht): Refactor this main-->
  <Landing />
</main>
