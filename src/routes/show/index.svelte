
<script lang="ts" context="module">
  export async function load({ page, fetch }) {
		const url = `https://db.lahs.club/cache/814bc6c60d0a4e13bc3f8bf33c8a3117.json`;
		const res = await fetch(url);
    const j = (await res.json())
      .sort((a, b) => {
        if (a["Art Class"].name == b["Art Class"].name)
          return (a["Student Name"][0].content > b["Student Name"][0].content) ? 1 : -1;
        else return (a["Art Class"].name > b["Art Class"].name) ? 1 : -1;
      });

		if (res.ok) return {
      props: {
        id: parseInt(page.params.id),
        items: j,
        totalCount: j.length,
        uniqueClasses: j.map(i => i["Art Class"].name).filter((v, i, a) => a.indexOf(v) === i).sort(),
        uniqueStudentCount: j.map(i => i["Student Name"][0].content).filter((v, i, a) => a.indexOf(v) === i).length,
      }
    };

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
  import ArtShowCTA from '../../components/ArtShowCTA.svelte';
  import ArtShowThumbnail from '../../components/ArtShowThumbnail.svelte';
  import Content from '../../lib/Content.svelte';

  export let items = [];
  export let uniqueClasses = [];
  export let uniqueStudentCount = 100;
  export let totalCount = 150;
</script>

<Content>
  <section class="show">
    <div class="container-wide hero">
      <div class="flex">
        <h1>2021 Fall <span>Art Show</span></h1>
        <h3 class="styled">Presented by National Art Honors Society</h3>
        <p>The 2021 Fall Student Art Show highlights the talent of {uniqueStudentCount} students, who submit {totalCount} artworks from a variety of disciplines, mediums, and levels.</p>
      </div>
      <ArtShowCTA />
    </div>
    {#each uniqueClasses as c}
      <h2 class="container-wide">{c}</h2>
      <div class="container-wide flex-row flex-wrap artworks">
        {#each items.filter(i => i["Art Class"].name === c) as item}
          <ArtShowThumbnail item="{item}" id="{items.indexOf(item)}" />
        {/each}
      </div>
    {/each}
  </section>
</Content>

<style lang="scss">
  :global ::selection {
    background-color: #0af3;
    color: #caf;
  }
  
  .show {
    background-color: #000;
    color: #fff;
    padding-bottom: 15vh;

    > div {
      row-gap: 50px;
      column-gap: 50px;
    }

    .hero {
      display: flex;
      flex-direction: column;
      padding-bottom: 50px;

      @media (min-width: 992px) {
        flex-direction: row;
      }
    }

    h1 {
      line-height: 0.9;
      font-size: 6rem;
      margin-top: 90px;
      margin-bottom: 20px;

      span {
        background-image: linear-gradient(45deg, #f09, #c0f, #0af, #0fa);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
      }

      @media (max-width: 1300px) {
        font-size: 4rem;

        span {
          font-size: 8rem;
        }
      }

      @media (max-width: 992px) {
        font-size: 5rem;

        span {
          font-size: 5rem;
        }
      }
    }

    h2 {
      margin-bottom: 0;
    }

    h3 {
      margin: 0;
      margin-bottom: 50px;
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

      @media (max-width: 1300px) {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    h2 {
      text-align: center;
    }
    .artworks {
      justify-content: center;
    }
  }
</style>