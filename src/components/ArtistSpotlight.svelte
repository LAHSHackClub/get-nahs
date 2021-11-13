
<script lang="ts">
  import ContentSection from "$lib/ContentSection.svelte";

  export let items: any[];
</script>

<ContentSection>
  <div class="flex-column">
    <div>
      <h2>Artist Spotlight</h2>
      <p>The Artist Spotlight highlights the young artists at LAHS and their art work! It will featured on the NAHS Instagram, here, and our advisor's Canvas announcements.  The first feature will start on 10/2 and continue biweekly throughout the year.</p>  
    </div>
    <div class="flex-row flex-gap spotlight">
      {#each items as item}
        <span><img class="flex" src="{item["Artist Spotlight"][0].url}" alt="Artist Spotlight"></span>
      {/each}
    </div>
  </div>
</ContentSection>

<style lang="scss">
  .spotlight {
    max-width: 100%;
    margin: 0 -20px;
    padding: 20px;
    overflow: auto;
  }
  .spotlight img {
    box-shadow: 5px 5px 15px #0003;
    border-radius: 10px;
    margin-top: 30px;
    max-width: 320px;
  }
</style>