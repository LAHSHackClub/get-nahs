
<script lang="ts">
  import ArtShowThumbnail from '../../components/ArtShowThumbnail.svelte';
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

<section class="show">
  <div class="container-wide flex-smart">
    <div class="flex">
      <h1>2021 Art Show</h1>
      <p>The 2021 Art Show highlights the talent of LAHS. Students submit artworks from a variety of disciplines, mediums, and class levels. Click or tap on any artwork to enter the gallery view, and scroll to navigate.</p>
    </div>
    <div class="flex">

    </div>
  </div>
  {#each uniqueClasses as c}
    <div class="container-wide">
      <h2>{c}</h2>
    </div>
    <div class="container-wide flex-row flex-wrap">
      {#each items.filter(i => i["Art Class"].name === c) as item}
        <ArtShowThumbnail item="{item}" />
      {/each}
    </div>
  {/each}
</section>

<style lang="scss">
  .show {
    background-color: #000;
    color: #fff;
    padding-bottom: 15vh;

    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.4rem;
    }

    > div {
      row-gap: 50px;
      column-gap: 50px;
    }
  }
</style>