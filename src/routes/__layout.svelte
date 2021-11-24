
<script>
  import Nav from "./_nav.svelte";
  import Footer from "./_footer.svelte";
</script>

<div class="app-global">
  <Nav />
  <main>
    <div class="content">
      <slot></slot>
    </div>
    <Footer />
  </main>
</div>

<style lang="scss" global>
  .app-global {
    display: flex;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    overflow-x: auto;

    @media (min-width: 992px) {
      flex-direction: column;
    }
  }

  body {
    margin: 0;
  }

  main {
    background-color: #707;
    min-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    font-family: serenity, sans-serif;
    position: relative;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    overflow-y: auto;
  }

  .content {
    background-color: #fff;
    min-height: 30vh;
  }

  h1, h2, h3, h4, a {
    font-family: mostra-nuova, sans-serif;
  }
</style>