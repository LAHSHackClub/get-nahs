
<script>
  import Nav from "./_nav.svelte";
  import Footer from "./_footer.svelte";
</script>

<main>
  <Nav />
  <div class="content">
    <slot></slot>
  </div>
  <Footer />
</main>

<style lang="scss" global>
  body {
    margin: 0;
  }

  main {
    font-family: serenity, sans-serif;
    position: relative;
  }

  header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .content {
    min-height: calc(100vh - 100px);
  }

  h1, h2, h3, h4, a {
    font-family: mostra-nuova, sans-serif;
  }
</style>