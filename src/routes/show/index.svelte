
<script lang="ts">
  import ArtShowThumbnail from '../../components/ArtShowThumbnail.svelte';
  import Content from '../../lib/Content.svelte';
  import { onMount } from 'svelte';

  let items = [];
  let uniqueClasses = [];
  onMount(async () => {
    items = await (await fetch("https://db.lahs.club/cache/814bc6c60d0a4e13bc3f8bf33c8a3117.json")).json();
    const classes = items.map(i => i["Art Class"].name);
    uniqueClasses = classes.filter((i, index, s) => s.indexOf(i) === index);
    uniqueClasses.sort();
  });
</script>

<Content>
  <section class="show">
    <div class="container-wide flex-smart hero">
      <div class="flex">
        <h1><span>2021</span> Art Show</h1>
        <h3 class="styled">Presented by <b>National Art Honors Society</b></h3>
        <p>The 2021 Art Show highlights the talent of LAHS. Students submit artworks from a variety of disciplines, mediums, and class levels. Click or tap on any artwork to enter the gallery view, and scroll to navigate.</p>
      </div>
      <div class="cta">
        <a href="/show/0"><span>View Gallery</span></a>
      </div>
    </div>
    {#each uniqueClasses as c}
      <div class="container-wide">
        <h2>{c}</h2>
      </div>
      <div class="container-wide flex-row flex-wrap">
        {#each items.filter(i => i["Art Class"].name === c) as item}
          <ArtShowThumbnail item="{item}" id="{items.indexOf(item)}" />
        {/each}
      </div>
    {/each}
  </section>
</Content>

<style lang="scss">
  .show {
    background-color: #000;
    color: #fff;
    padding-bottom: 15vh;

    > div {
      row-gap: 50px;
      column-gap: 50px;
    }

    .hero {
      padding-bottom: 50px;
    }

    h1 {
      font-size: 8rem;
      margin-top: 50px;
      margin-bottom: 0;

      span {
        background-image: linear-gradient(45deg, #f09, #c0f, #0af, #0fa);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    h3 {
      margin: 0;
      margin-bottom: 50px;
    }

    h2 {
      margin-bottom: 0;
    }

    p {
      line-height: 1.5;
      max-width: 620px;
    }

    .styled {
      color: #eee;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 300;
    }

    .cta, .cta a, .cta a span {
      display: grid;
      place-items: center;
    }
    .cta {
      padding: 20px;
    }
    .cta a {
      text-decoration: none;
      font-size: 2rem;
      font-weight: bold;
      margin-top: 80px;
      border-radius: 5px;
      position: relative;
    }
    .cta a span {
      background-color: #000;
      color: #fff;
      width: 330px;
      height: 240px;
      position: relative;
      z-index: 2;
    }
    .cta a::before, .cta a::after {
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
    .cta a::before {
      background-position-x: -300px;
      background-position-y: -210px;
    }
    .cta a:hover::before, .cta a:hover::after {
      background-position-x: 0px;
      background-position-y: 0px;
    }
  }
</style>