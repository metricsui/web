<script>
  let isDarkTheme = false

  function toggleTheme() {
    isDarkTheme = !isDarkTheme
    window.document.body.classList.toggle('dark')
  }
</script>

<style>
  button {
    position: absolute;
    top: 0;
    right: 5%;
    margin-top: 1rem;
  }
</style>

<button on:click={toggleTheme}>
  {#if isDarkTheme}Go light{:else}Go dark{/if}
</button>
