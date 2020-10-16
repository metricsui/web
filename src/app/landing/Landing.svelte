<script>
  import Content from './components/Content.svelte'
  import StickyNavbar from './components/StickyNavbar.svelte'
  import Footer from './components/Footer.svelte'
</script>

<style>
  .wrapper {
    text-align: left;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
</style>

<div class="wrapper">
  <StickyNavbar />
  <Content />
  <Footer />
</div>
