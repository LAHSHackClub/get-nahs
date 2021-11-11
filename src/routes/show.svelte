
<script lang="ts">
  import ArtShowThumbnail from '$lib/ArtShowThumbnail.svelte';
  import { onMount } from 'svelte';

  let items = [];
  onMount(async () => {
    items = await (await fetch("https://db.lahs.club/cache/814bc6c60d0a4e13bc3f8bf33c8a3117.json")).json();
  });
</script>

<section class="container-wide show justify-center flex-row flex-wrap">
  {#each items as item}
    <ArtShowThumbnail item="{item}" />
  {/each}
</section>

<style lang="scss">
  .show {
    row-gap: 30px;
    column-gap: 20px;
  }
</style>