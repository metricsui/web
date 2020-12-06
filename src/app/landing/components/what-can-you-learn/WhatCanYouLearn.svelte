<script>
  import PathMobile from './components/PathMobile.svelte'
  import { PATHS } from './constants'

  let selectedPathIndex = 0

  function selectPath(pathIndex) {
    return () => {
      if (selectedPathIndex === pathIndex) {
        selectedPathIndex = null
      } else {
        selectedPathIndex = pathIndex
      }
    }
  }
</script>

<style>
  .section {
    padding: var(--landing-section-padding-vertical) var(--horizontal-margin);
  }

  .description {
    max-width: 800px;
    font-size: 1.25rem;
    line-height: 2rem;
    letter-spacing: 0.5px;
    margin-bottom: 2rem;
  }

  .paths {
    display: flex;
    flex-direction: column;
  }

  .paths .path-wrapper:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 1024px) {
    .section h3 {
      width: 65%;
    }
  }
</style>

<div class="section" id="section-3">
  <h6 class="primary-color">What can you learn</h6>
  <h3 class="font-medium">
    Learn about pretty much everything you need to know about landing your first
    internship in Tech Companies
  </h3>
  <p class="description">
    Metrics provides you fully-fledged professional mentors to help develop
    skills of four most demanding fields in the tech industry
  </p>
  <div class="paths">
    {#each PATHS as path, i}
      <div class="path-wrapper">
        <PathMobile
          pathName={path.pathName}
          description={path.description}
          isOpen={selectedPathIndex === i}
          mentors={path.mentors}
          onClick={selectPath(i)} />
      </div>
    {/each}
  </div>
</div>
