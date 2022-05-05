
<script lang="ts">
  export let show: string;
</script>

<div class="cta"><a href="/show/{show}-0"><span>View Gallery &gt;</span></a></div>

<style lang="scss">
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

  @media (max-width: 992px) {
    .cta {
      padding: 0;

      a {
        margin-top: 0;
      }
      a span {
        width: 250px;
        height: 100px;
      }
      a::before, a::after {
        animation: swipe-top 2s ease-in-out infinite;
        width: 230px;
        height: 110px;
        background-position-y: 70px;
      }
      a::before {
        animation: swipe-top 2s reverse ease-in-out infinite;
        background-position-y: -70px;
      }
    }

    @keyframes swipe-top {
      0% {
        background-position-x: 300px;
      }
      100% {
        background-position-x: -300px;
      }
    }
  }
</style>