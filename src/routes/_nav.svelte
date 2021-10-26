
<script lang="ts">

</script>

<header>
  <nav class="container-wide">
    <a class="brand" href="/"><h2>
      <img src="/img/logo.png" alt="NAHS">
      <span>LAHS x NAHS</span>
    </h2></a>
    <span class="spacer"></span>
    <a href="">Activities</a>
    <a href="">Calendar</a>
    <a href="/contact">Contact</a>
    <a href="">Join NAHS</a>
    <a class="focus" href="">Art Show</a>
  </nav>
</header>

<style lang="scss">
  header {
    background-color: #a0a;
  }

  nav {
    display: flex;
    align-items: center;
    column-gap: 15px;
    height: 50px;
  }

  h2 {
    color: #fff;
    display: flex;
    align-items: center;
    column-gap: 15px;

    img {
      height: 38px;
    }
  }

  .spacer {
    flex: 1;
  }

  .brand {
    border-radius: 5px;
  }

  .brand h2 {
    margin: 4px 10px;
  }

  a {
    text-decoration: none;
  }

  a:not(.brand) {
    background-color: #707;
    border-radius: 5px;
    color: #fff;

    padding: 8px 20px;
  }

  a.focus {
    background-color: #e08;
  }
</style>