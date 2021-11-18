
<header>
  <nav class="container-wide">
    <a class="brand" href="/"><h2>
      <img src="/img/logo.png" alt="NAHS">
      <span>LAHS x NAHS</span>
    </h2></a>
    <a href="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
      </svg>
    </a>
  </nav>
</header>

<style lang="scss">
  header {
    background-color: #000;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 15px;
    height: 50px;
  }

  .brand {
    border-radius: 5px;
  }

  h2 {
    color: #fff;
    display: flex;
    align-items: center;
    column-gap: 15px;
    margin: 4px 10px;

    img {
      height: 38px;
    }
  }

  a {
    text-decoration: none;
  }

  a:not(.brand) {
    border-radius: 5px;
    color: #fff;

    padding: 8px 20px;
  }
</style>