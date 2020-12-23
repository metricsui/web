<script>
  import { dashboard, user } from '../../stores'
  import { derived } from 'svelte/store'
  import Steps from './Steps.svelte'

  const rtf = new Intl.RelativeTimeFormat(document.documentElement.lang)

  const userData = derived([dashboard, user], ([$dashboard, $user]) => {
    return $dashboard?.user || $user
  })
  const shouldShowPath = derived(dashboard, ($dashboard) => {
    return Boolean($dashboard?.path)
  })
  const shouldShowAction = derived(dashboard, ($dashboard) => {
    return Boolean($dashboard?.action)
  })
  const shouldShowSteps = derived(dashboard, ($dashboard) => {
    return $dashboard?.steps?.length > 0
  })
  const isActionHasStep = derived(
    dashboard,
    ($dashboard) => $dashboard?.action?.step != null
  )
  const isActionHasTodo = derived(
    dashboard,
    ($dashboard) => $dashboard?.action?.url != null
  )
  const isPathHasAssignment = derived(
    dashboard,
    ($dashboard) => $dashboard?.path?.taskUrl != null
  )
</script>

<style>
  .container {
    position: relative;
  }

  .greeting-text {
    font-size: 2.25rem;
    line-height: 3.5rem;
    text-overflow: ellipsis;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .section-description {
    margin-top: 1.5rem;
  }
  .section-action {
    margin-top: 1.5rem;
  }
  .section-steps {
    margin-top: 2.5rem;
  }

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    .section-steps {
      padding-right: 30%;
    }
  }

  .section-steps h5 {
    line-height: 2.25rem;
  }

  .path-text {
    color: var(--cerise-color);
    font-size: var(--h5-size);
    margin: 4px 0;
    line-height: 2.25rem;
  }
  .notice-text {
    margin: 4px 0;
    color: var(--cerise-color);
    line-height: 1.875rem;
  }
  .assignment-text {
    margin: 4px 0;
    color: var(--cerise-color);
    line-height: 1.5rem;
  }

  .deadline-text {
    margin-top: 1rem;
    position: relative;
    color: var(--cerise-color);
  }
  .deadline-text img {
    margin-bottom: -0.25rem;
  }

  #ActionButton {
    width: min(100px, 50vw);
  }

  .exact-deadline {
    margin-top: 1rem;
  }
</style>

<div class="container">
  <div class="font-normal greeting-text">Welcome,<br />{$userData.name}</div>
  {#if $shouldShowPath || $shouldShowAction}
    <div class="section-description">
      {#if $shouldShowPath}
        <div class="font-medium path-text">{$dashboard.path.name}</div>
      {/if}
      {#if $isActionHasStep}
        <div class="font-normal notice-text">
          {$dashboard.action.description}
        </div>
      {/if}
      {#if $isPathHasAssignment && $isActionHasTodo}
        <a
          class="font-medium assignment-text"
          href={$dashboard.path.taskUrl}
          target="_blank">
          View Assignment
        </a>
      {/if}
    </div>

    {#if $shouldShowAction && $isActionHasTodo}
      <div class="section-action">
        {#if !$dashboard.action.overdue}
          <a
            id="ActionButton"
            class="primary-button2"
            href={$dashboard.action.url}>
            <img
              class="l-icon"
              src="images/ic_action_nav.svg"
              alt={`Navigtate to ${$dashboard.action.name}`} />
            {$dashboard.action.name}
          </a>
        {:else}
          <button id="ActionButton" class="primary-button2" disabled={true}>
            <img
              class="l-icon"
              src="images/ic_action_nav.svg"
              alt={`Navigtate to ${$dashboard.action.name}`} />
            {$dashboard.action.name}
          </button>
        {/if}
        <div class="deadline-text">
          <img src="images/ic_access_time.svg" alt="Deadline" />
          <span class="font-medium">
            {(() => {
              if ($dashboard.action.overdue) return 'Submission is closed'

              const deadlineDate = $dashboard.action.deadline
              const diff = deadlineDate - Date.now()

              const secs = Math.floor(diff / 1000)
              const mins = Math.floor(secs / 60)
              const hours = Math.floor(mins / 60)
              const days = Math.floor(hours / 24)
              const val = days || hours || mins || secs
              const desc = val > 0 ? ' left' : ''
              // prettier-ignore
              const unit = days > 0 ? 
                'day' : hours > 0 ? 
                'hour' : mins > 0 ? 
                'minute' : secs > 0 ? 
                'second' : 'day' // days should be negative -> truthy

              const deadlineText = rtf.format(val, unit) + desc
              if (deadlineText.startsWith('in')) {
                return deadlineText.substring(3)
              }
              return deadlineText
            })()}
          </span>
          <span>for you to submit</span>
        </div>
        <div class="primary-color exact-deadline">
          Exact deadline:
          <br />
          {new Date($dashboard.action.deadline)}
        </div>
      </div>
    {/if}
  {/if}

  {#if $shouldShowSteps}
    <div class="section-steps">
      <h5>How would your journey be in becoming our first ever mentee?</h5>
      <Steps steps={$dashboard.steps} />
    </div>
  {/if}
</div>
