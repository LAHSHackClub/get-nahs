
<script lang="ts">
  import NavPrompter from "../components/NavPrompter.svelte";
</script>

<header>
  <nav class="container-wide">
    <a class="brand" href="/"><h2>
      <img src="/img/logo.png" alt="NAHS">
      <span>LAHS x NAHS</span>
    </h2></a>
    <span class="flex"></span>
    <a href="/">Home</a>
    <a href="/activities">Activities</a>
    <a href="/contact">Contact</a>
    <a href="/join">Join NAHS</a>
    <a class="focus" href="/show">Art Show</a>
  </nav>
  <NavPrompter />
</header>

<style lang="scss">
  header {
    background-color: #505;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    position: relative;
    z-index: 2;

    @media (min-width: 992px) {
      background-color: #a0a;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    column-gap: 15px;
    row-gap: 10px;
    width: 180px;

    @media (min-width: 992px) {
      flex-direction: row;
    height: 50px;
      width: unset;
    }
  }

  .brand {
    border-radius: 5px;
  }
  .brand h2 {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    column-gap: 15px;
    row-gap: 10px;
    margin: 4px 10px;
    white-space: nowrap;

    img {
      height: 64px;
    }

    @media (min-width: 992px) {
      flex-direction: row;

      img {
        height: 38px;
      }
    }
  }

  a {
    text-decoration: none;
  }

  a:not(.brand) {
    background-color: #808;
    border-radius: 5px;
    color: #fff;

    padding: 12px 20px;
    width: 130px;

    @media (min-width: 992px) {
      padding: 10px 20px;
      width: unset;
    }
  }

  a.focus {
    background-color: #e08;
  }
</style>