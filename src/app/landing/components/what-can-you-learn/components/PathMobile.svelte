<script>
  import { slide } from 'svelte/transition'
  import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte'

  export let pathName
  export let description
  export let isOpen
  export let onClick
</script>

<style>
  .path-accordion {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;

    background: var(--bg-color);
    border: 1px solid #d9dde0;
    box-sizing: border-box;
    border-radius: 4px;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.25rem 1rem;
    box-sizing: border-box;
  }

  .path-name {
    font-size: var(--h6-size);
  }

  .content {
    padding: 0 1rem 1rem 1rem;
  }

  .content .description {
    margin-top: 0;
    font-size: 1.25rem;
    line-height: 2rem;
    letter-spacing: 0.5px;
  }

  .icon {
    height: 24px;
    width: 24px;
    color: var(--primary-color);
    transform: rotate(0deg);
    transition: transform 0.5s ease;
  }

  .icon.is-open {
    transform: rotate(180deg);
  }
</style>

<div class="path-accordion color-transition">
  <div class="head" on:click={onClick}>
    <div class="path-name font-medium primary-color">{pathName}</div>
    <div class={`icon ${isOpen ? 'is-open' : null}`}>
      <FaAngleDown />
    </div>
  </div>
  {#if isOpen}
    <div class="content" transition:slide>
      <p class="description">{description}</p>
    </div>
  {/if}
</div>
