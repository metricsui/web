<script>
  import { push } from 'svelte-spa-router'
  import StickyNavbar from '../landing/components/StickyNavbar.svelte'
  import { user } from '../stores'

  function apply() {
    push('/register')
  }
</script>

<style>
  .wrapper {
    text-align: left;
    width: 100%;
    height: 100vh;

    overflow-y: scroll;
    overflow-x: hidden;
  }
  .container {
    margin: 2rem;
    width: 100%;
  }

  pre {
    width: 50vw;
    background-color: #f1f1f1;
    color: black;
    border-radius: 1rem;
    padding: 1rem;
  }
</style>

<div class="wrapper">
  <StickyNavbar />
  <div class="container">
    {#if $user}
      <h4>Hello, {$user.name}!</h4>
      <pre>
        <code>
            {JSON.stringify($user, undefined, 4)}
        </code>
    </pre>
    {/if}
    <button on:click={apply}>Apply</button>
  </div>
</div>
