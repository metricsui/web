<script>
  import ThemeToggler from './ThemeToggler.svelte'
</script>

<style>
  :global(html),
  :global(body) {
    position: relative;
    width: 100%;
    height: 100%;
  }

  :root {
    --bg-color: #ffffff;
    --text-color: #000000;
    --royal-blue-dark-color: #0a2463;
    --cerise-color: #d8315b;
    --eggshell-color: #faf3dd;
    --green-blue-crayola-color: #3e92cc;
    --primary-color: var(--royal-blue-dark-color);
    --primary-variant-color: var(--cerise-color);
    --secondary-color: var(--eggshell-color);
    --secondary-variant-color: var(--green-blue-crayola-color);
    --on-primary-color: #ffffff;
    --on-secondary-color: #ffffff;

    --display-size: 36px;
    --headline-size: 24px;
    --title-size: 20px;
    --body-size: 14px;
  }

  :global(body) {
    font-family: 'Dosis', sans-serif;
    background: var(--bg-color);
    color: var(--text-color);
    padding: 0;
    margin: 0;
    font-size: 14px;
    transition: background-color 500ms linear, color 500ms linear;
  }

  :global(body.dark) {
    --bg-color: #000000;
    --text-color: #ffffff;
  }

  .primary-color {
    color: var(--royal-blue-dark-color);
  }

  .primary-variant-color {
    color: var(--cerise-color);
  }

  .secondary-color {
    color: var(--eggshell-color);
  }

  .secondary-variant-color {
    color: var(--green-blue-crayola-color);
  }

  .light-text {
    font-weight: 300;
  }

  .bold-text {
    font-weight: 700;
  }

  h1,
  h2,
  h3 {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  h1,
  .display-title {
    font-size: var(--display-size);
  }

  h2,
  .headline-title {
    font-size: var(--headline-size);
  }

  h3,
  .title {
    font-size: var(--title-size);
  }

  .body {
    font-size: var(--body-size);
  }

  :global(button) {
    background-color: var(--primary-variant-color);
    color: var(--on-primary-color);
    border: none;
    padding: 0.3rem 0.7rem;
    border-radius: 8px;
    font-size: var(--body-size);
  }

  :global(button:focus) {
    outline: none;
  }

  /* TODO(adalberht): Refactor main to different component */
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    text-align: center;
    margin: 0 auto;
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;700&display=swap"
    rel="stylesheet" />
</svelte:head>

<main>
  <!-- TODO(adalberht): Refactor this main-->
  <div class="title">
    <h1 class="primary-color">METRICS</h1>
    <h2 class="secondary-variant-color">
      Mentoring Initative for
      <span class="primary-variant-color bold-text">CSUI Students</span>
    </h2>
    <ThemeToggler />
  </div>
</main>
