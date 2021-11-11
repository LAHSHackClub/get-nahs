
<script lang="ts">
  import ContentSection from "$lib/ContentSection.svelte";
</script>

<ContentSection>
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
</ContentSection>

<style lang="scss">
  img {
    box-shadow: 5px 5px 15px #0003;
    border-radius: 10px;
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
</style>