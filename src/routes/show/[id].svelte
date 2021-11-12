
<script lang="ts" context="module">
  export async function load({ page, fetch }) {
		const url = `https://db.lahs.club/cache/814bc6c60d0a4e13bc3f8bf33c8a3117.json`;
		const res = await fetch(url);
    const j = await res.json();

		if (res.ok) return {
      props: {
        id: parseInt(page.params.id),
        item: j[page.params.id],
        totalCount: j.length
      }
    };

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
  export let id: number;
  export let totalCount: number;
  export let item = {};
  $: studentName = item["Student Name"].content;
  $: studentClass = item["Art Class"].name;
  $: studentGrade = item["Grade Level"].name;
</script>

<section class="gallery">
  <div class="gallery-item">
    <img src="{item["Artwork (File)"].url}" alt="">
    <div class="desc flex-column">
      <h1><a href="/show">&lt; 2021 Art Show</a></h1>
      <h2>{studentName}</h2>
      <p>{studentClass}<br>{studentGrade}th Grade</p>
      <span class="spacer"></span>
      <p class="caption">{id+1}/{totalCount}</p>
      <div class="controls flex-row justify-end">
        {#if !(id <= 0)}
          <a href="/show/{id - 1}" class="button">&lt;</a>
        {/if}
        {#if !(id >= totalCount - 1)}
          <a href="/show/{id + 1}" class="button">&gt;</a>
        {/if}
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .gallery {
    background-color: #000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .gallery-item {
    display: flex;
    align-items: center;
    max-height: 100vh;

    font-size: 1.4em;

    img {
      flex: 1 1;
      max-width: calc(100vw - 300px);
      max-height: 100vh;
      object-fit: contain;
    }

    .desc {
      background-color: #111;
      color: #fff;
      height: 100vh;
      width: 200px;
      padding: 0 40px;
      text-align: right;

      h1 a {
        color: #777;
        text-decoration-color: #333;
        font-size: 1.4rem;
      }
      h1, h2 {
        margin-bottom: 20px;
      }
      p {
        line-height: 1.5;
        margin: 0;
      }

      .spacer {
        flex: 1 1;
      }

      .caption {
        color: #aaa;
      }
      .controls {
        column-gap: 10px;
        margin-bottom: 30px;
      }
      .controls a {
        background-color: #333;
        border-radius: 5px;
        color: #aaa;
        display: grid;
        place-items: center;
        font-family: inherit;
        font-weight: bold;
        font-size: 1.4rem;
        width: 40px;
        height: 40px;
        text-decoration: none;
      }
    }
  }
</style>