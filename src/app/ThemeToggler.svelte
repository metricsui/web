<script>
  let isDarkTheme = false

  function toggleTheme() {
    isDarkTheme = !isDarkTheme
    window.document.body.classList.toggle('dark')
  }
</script>

<style>
  button {
    margin-top: 1rem;
    width: 10rem;
    height: 3rem;
    border-radius: 1000px;
  }
</style>

<button on:click={toggleTheme}>
  {#if isDarkTheme}Go light{:else}Go dark{/if}
</button>
