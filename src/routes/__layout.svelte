
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
  
  .content {
    min-height: calc(100vh - 100px);
  }

  h1, h2, h3, h4, a {
    font-family: mostra-nuova, sans-serif;
  }
</style>