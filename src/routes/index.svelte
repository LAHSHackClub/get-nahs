
<section class="hero">
  <img src="/img/wave.svg" alt="Wave" aria-hidden="true">
  <div class="hero-content container-wide">
    <h1>LAHS<br>National Art<br>Honors Society</h1>
  </div>
</section>
<div class="hero-spacer" />
<section class="content container-wide flex-column flex-gap">
  <div class="flex-smart flex-gap align-center">
    <figure class="flex">
      <img src="/img/group.jpg" alt="NAHS Members">
      <figcaption>2021-2022 Los Altos NAHS Members</figcaption>
    </figure>
    <div class="flex">
      <h2>About Los Altos NAHS</h2>
      <p>To many, creating art is an important form of expression. However, in Silicon Valley, art is often shadowed by STEM and other academic subjects. Our goal is not only to gain knowledge and create fun projects, but also to make a positive impact in the community through these projects and spread the importance of art! You don't have to be the best artist. We're looking for people who are hardworking and passionate!</p>
    </div>
  </div>
  <div>
    <h2>Artist Spotlight</h2>
    <p>The Artist Spotlight will be used to highlight the young artists at LAHS and their art work! It will featured on the NAHS Instagram and Website, daily announcement, and our advisor's Canvas announcements.  The first feature will start on 10/2 and continue biweekly throughout the year.</p>
  </div>
</section>

<style lang="scss">
  .hero {
    background-color: #a0a;
    height: 400px;
    padding-top: 60px;

    position: relative;

    img {
      position: absolute;
      top: calc(100% - 5px);
      left: 0;
      right: 0;
    }

    .hero-content {
      position: absolute;
      top: 30%;
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
    }
  }

  .hero-spacer {
    height: 22vw;
  }

  .content {
    font-size: 1.4em;
    line-height: 1.5;

    img {
      box-shadow: 5px 5px 15px #0003;
      border-radius: 20px;
      max-width: 100%;
    }

    figure {
      margin: 0;
      position: relative;
    }

    figcaption {
      font-size: 1rem;
      opacity: 0.8;
      position: absolute;
      top: calc(100% + 5px);
      left: 0;
    }

    h2 {
      margin-top: 0;
    }
  }
</style>