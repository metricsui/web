<script>
  import { onMount } from 'svelte'
  let isDarkTheme = false
  onMount(async () => {
    const cachedValue = window.localStorage.getItem('isDarkTheme') === 'true'
    if (cachedValue) {
      toggleTheme()
    }
    setTimeout(() => {
      window.document.body.classList.toggle('color-transition')
    }, 500)
  })

  function toggleTheme() {
    isDarkTheme = !isDarkTheme
    window.localStorage.setItem('isDarkTheme', isDarkTheme)
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
