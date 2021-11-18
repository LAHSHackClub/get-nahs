
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
    <div class="scroll-prompt">
      <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mouse" viewBox="0 0 16 16">
        <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"/>
      </svg></span>
      <span>Scroll Down</span>
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
      padding-bottom: 100px;
    }

    h1 {
      font-size: 8rem;
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

    p {
      max-width: 650px;
    }

    .styled {
      color: #eee;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 300;
    }

    .scroll-prompt {
      display: flex;
      align-items: center;
      column-gap: 10px;
      position: fixed;
      bottom: 100px;
      left: 0;
      right: 0;
      font-family: mostra-nuova, sans-serif;
      font-size: 1rem;
      text-align: center;
      text-transform: uppercase;
      color: #fff;
      width: max-content;
      margin: auto;
      font-weight: 500;
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
      margin-top: 100px;
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