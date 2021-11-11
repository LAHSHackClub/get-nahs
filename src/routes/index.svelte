
<script lang="ts">
  import About from "../components/About.svelte";
  import ArtistSpotlight from "../components/ArtistSpotlight.svelte";
</script>

<section class="hero">
  <img class="wave" src="/img/wave.svg" alt="Wave" aria-hidden="true">
  <div class="hero-content container-wide">
    <h1>LAHS<br>National Art<br>Honors Society</h1>
    <img class="comp" src="/img/3dcomp.png" alt="3D Objects" aria-hidden="true">
  </div>
</section>
<div class="hero-spacer" />
<section class="content container-wide flex-column">
  <About />
  <ArtistSpotlight />
</section>

<style lang="scss">
  .hero {
    background-color: #a0a;
    height: 400px;

    position: relative;

    @media (max-width: 512px) {
      height: 250px;
    }

    img {
      position: absolute;
      top: calc(100% - 5px);
      left: 0;
      right: 0;
    }

    .comp {
      left: unset;
      top: 20px;
      width: 400px;
      
      @media (max-width: 992px) {
        display: none;
      }

      @media (min-width: 1300px) {
        width: 510px;
      }
    }

    .hero-content {
      position: relative;
      top: 15%;
      left: 0;
      right: 0;

      color: #fff;
      flex: 1 1;
    }

    h1 {
      font-size: 6rem;
      font-family: serenity, sans-serif;
      margin: 0;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;

      @media (max-width: 768px) {
        font-size: 5rem;
      }

      @media (max-width: 512px) {
        font-size: 3.2rem;
      }
    }
  }

  .hero-spacer {
    height: 22vw;
  }

  .content {
    row-gap: 15vh;
    padding-bottom: 15vh;
  }
</style>