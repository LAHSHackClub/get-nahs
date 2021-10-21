
<script>
  import Nav from "./_nav.svelte";
</script>

<main>
  <header>
    <Nav />
  </header>
  <slot></slot>
</main>

<style lang="scss" global>
  main {
    font-family: serenity, sans-serif;
  }

  h1, h2, h3, h4, a {
    font-family: mostra-nuova, sans-serif;
  }
</style>