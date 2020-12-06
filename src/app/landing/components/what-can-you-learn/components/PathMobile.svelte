<script>
  import { slide } from 'svelte/transition'
  import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte'
  import Mentor from './Mentor.svelte'

  export let pathName
  export let description
  export let isOpen
  export let onClick
  export let mentors
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
    margin-bottom: 0;
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

  .mentor-section {
    width: 100%;
    padding-top: 1rem;
    box-sizing: border-box;
  }

  .mentor-title {
    margin-bottom: 1.5rem;
  }

  .mentor-list {
    display: flex;
    flex-wrap: wrap;
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
      {#if mentors.length > 0}
        <div class="mentor-section">
          <div class="font-medium mentor-title">Your Mentors</div>
          <div class="mentor-list">
            {#each mentors as mentor}
              <Mentor
                mentorName={mentor.mentorName}
                introduction={mentor.introduction}
                institution={mentor.institution} />
            {/each}
          </div>
        </div>
      {/if}
    </div>
  {/if}
</div>
