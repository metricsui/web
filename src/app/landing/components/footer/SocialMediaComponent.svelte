<script>
  export let iconComponent
  export let url
  export let displayText
</script>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
  }

  .icon-container {
    margin-right: 12px;
    border-radius: 99999px;
    width: 20px;
    height: 20px;
    padding-top: 2px;
    padding-bottom: 4px;
    padding-left: 4px;
    padding-right: 4px;
    background-color: var(--text-color);
    color: var(--bg-color);
  }

  a {
    flex: 2;
    text-decoration: underline;
    color: var(--text-color);
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    outline: none;
  }
</style>

<div class="container">
  <div class="icon-container">
    <svelte:component this={iconComponent} />
  </div>
  <a href={url}> {displayText} </a>
</div>
