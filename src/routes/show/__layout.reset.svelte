
<script>
  import Nav from "../_nav.simple.svelte";
  import Footer from "../_footer.svelte";
</script>

<svelte:head>
  <meta name="theme-color" content="#000000">
</svelte:head>
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
    background-color: #000;
    font-family: serenity, sans-serif;
    position: relative;
  }

  .content {
    background-color: #fff;
  }

  h1, h2, h3, h4, a {
    font-family: mostra-nuova, sans-serif;
  }
</style>