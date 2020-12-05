<script>
  import { Jumper } from 'svelte-loading-spinners'

  export let loadingText = 'Loading...'
</script>

<div
  style="width: 100%; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
  <Jumper size="60" color="#d8315b" unit="px" />
  <span>{loadingText}</span>
</div>
