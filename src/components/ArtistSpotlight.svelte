
<script lang="ts">
  import ContentSection from "$lib/ContentSection.svelte";

  export let items: any[];
</script>

<ContentSection>
  <div class="flex-column">
    <div>
      <h2>Artist Spotlight</h2>
      <p>The Artist Spotlight will be used to highlight the young artists at LAHS and their art work! It will featured on the NAHS Instagram and Website, daily announcement, and our advisor's Canvas announcements.  The first feature will start on 10/2 and continue biweekly throughout the year.</p>  
    </div>
    <div class="flex-smart flex-gap spotlight">
      {#each items as item}
        <span><img class="flex" src="{item["Artist Spotlight"].url}" alt="Artist Spotlight"></span>
      {/each}
    </div>
  </div>
</ContentSection>

<style lang="scss">
  .spotlight img {
    box-shadow: 5px 5px 15px #0003;
    border-radius: 10px;
    margin-top: 30px;
    max-width: 350px;
  }
</style>