
<div class="cta"><a href="/show/0"><span>View Gallery &gt;</span></a></div>
<div class="cta-mobile"><a href="/show/0">View Gallery &gt;</a></div>

<style lang="scss">
  .cta-mobile {
    display: none;

    a {
      background-image: linear-gradient(45deg, #f09, #c0f, #0af, #0fa);
      background-repeat: repeat;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
      font-size: 2rem;
    }
  }

  @media (max-width: 992px) {
    .cta {
      display: none !important;
    }
    .cta-mobile {
      display: grid;
      place-items: center;
    }
  }

  .cta, .cta a, .cta a span {
    display: grid;
    place-items: center;
  }
  .cta {
    padding: 20px;

    a {
      text-decoration: none;
      font-size: 2rem;
      font-weight: bold;
      margin-top: 80px;
      border-radius: 5px;
      position: relative;
    }
    a span {
      background-color: #000;
      color: #fff;
      width: 330px;
      height: 240px;
      position: relative;
      z-index: 2;
    }
    a::before, a::after {
      background-image: linear-gradient(45deg, #f09, #c0f, #0af, #0fa);
      background-repeat: no-repeat;
      background-position-x: 300px;
      background-position-y: 210px;
      border-radius: 5px;
      content: "";
      width: 340px;
      height: 250px;
      position: absolute;
      z-index: 1;
      transition-duration: 0.6s;
    }
    a::before {
      background-position-x: -300px;
      background-position-y: -210px;
    }
    a:hover::before, a:hover::after {
      background-position-x: 0px;
      background-position-y: 0px;
    }
  }
</style>