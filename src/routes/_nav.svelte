
<script lang="ts">

</script>

<nav>
  <h2>
    <img src="/img/logo.png" alt="NAHS">
    <span>LAHS National Art Honors Society</span>
  </h2>
  <span class="spacer"></span>
  <a href="/">Home</a>
  <a href="">Activities</a>
  <a href="">Calendar</a>
  <a href="">Contact</a>
  <a href="">Join NAHS</a>
  <a class="focus" href="">Art Show</a>
</nav>

<style lang="scss">
  nav {
    display: flex;
    align-items: center;
    column-gap: 15px;
    height: 50px;
    margin: 10px 30px;
  }

  h2 {
    color: #fff;
    display: flex;
    align-items: center;
    column-gap: 15px;

    img {
      height: 30px;
    }
  }

  .spacer {
    flex: 1;
  }

  a {
    background-color: #707;
    border-radius: 5px;
    color: #fff;

    padding: 8px 20px;

    text-decoration: none;
  }

  a.focus {
    background-color: #e08;
  }
</style>