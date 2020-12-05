<script>
  import {} from 'svelte'

  export let steps = []
</script>

<style>
  .steps-container {
    position: relative;
    list-style: none;
    padding-inline-start: 2.5rem;
    overflow-y: hidden;
  }
  .steps-container::before {
    display: inline-block;
    content: '';
    position: absolute;
    top: 1rem;
    left: 0.715rem;
    width: 0.625rem;
    height: 100%;
    border-left: 0.1875rem solid var(--primary-color);
  }

  .step-item {
    position: relative;
    counter-increment: list;
    font-size: 1.25rem;
    line-height: 1.7rem;
  }
  .step-item:not(:last-child) {
    padding-bottom: 2.5rem;
  }
  .step-item::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 1px;
    left: -2.5rem;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    background-color: var(--on-primary-color);
  }

  .step-item.step-notStarted::before {
    background-color: var(--on-primary-color);
  }
  .step-item.step-inProgress::before {
    background-color: var(--primary-color);
  }
  .step-item.step-overdue::before {
    background-color: lightgrey;
  }
  .step-item.step-completed::before {
    background-color: var(--primary-color);
    content: '✔';
    font-size: 0.9rem;
    color: var(--on-primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<ul class="steps-container">
  {#each steps as step}
    <li class={`font-normal step-item step-${step.status}`}>
      <strong class="font-medium primary-color">{step.description.split(' ')[0]}
      </strong>
      {step.description.split(' ').slice(1).join(' ')}
    </li>
  {/each}
</ul>
