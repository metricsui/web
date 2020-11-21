<script>
  import FaRegSun from 'svelte-icons/fa/FaRegSun.svelte'
  import FaRegMoon from 'svelte-icons/fa/FaRegMoon.svelte'
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
  .theme-switcher-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5%;
  }
  .icon {
    width: 16px;
    height: 16px;
    margin: 0 8px;
    color: var(--text-color);
    transition: 1s;
  }
  label {
    position: relative;
    display: inline-block;
    height: 2.25rem;
    width: 4rem;
    margin: 1rem 0;
  }
  span:before {
    -webkit-transition: 0.5s;
    background-color: var(--bg-color);
    border-radius: 9999px;
    content: '';
    height: 2rem;
    position: absolute;
    top: 0.15rem;
    bottom: 0.15rem;
    transition: 0.5s;
    -webkit-transition: 0.5s;
    width: 2rem;
    margin-left: 0.15rem;
  }
  span {
    border-radius: 1rem;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.5s;
    -webkit-transition: 0.5s;
    background-color: var(--text-color);
  }
  input:checked + span:before {
    -webkit-transform: translateX(90%);
    -ms-transform: translateX(90%);
    transform: translateX(90%);
  }
  input:focus + span {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }
  input {
    visibility: hidden;
  }
</style>

<div class="theme-switcher-container">
  <div class="icon">
    <FaRegSun />
  </div>
  <label>
    <input
      type="checkbox"
      on:change={toggleTheme}
      value={!isDarkTheme ? 'on' : 'off'}
      checked={isDarkTheme} />
    <span />
  </label>
  <div class="icon">
    <FaRegMoon />
  </div>
</div>
