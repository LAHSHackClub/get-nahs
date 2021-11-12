
<script lang="ts" context="module">
  export async function load({ page, fetch }) {
		const url = `https://db.lahs.club/cache/814bc6c60d0a4e13bc3f8bf33c8a3117.json`;
		const res = await fetch(url);

		if (res.ok) return {
      props: {
        id: page.params.id,
        item: (await res.json())[page.params.id]
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
  export let item = {};
</script>

<section class="gallery">
  <div class="gallery-item">
    <img src="{item["Artwork (File)"].url}" alt="">
    <div class="desc">
      <h1>Description</h1>
    </div>
  </div>
</section>

<style lang="scss">
  .gallery {
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .gallery-item {
    display: flex;
    align-items: center;
    max-height: 100vh;

    img {
      flex: 1 1;
      max-height: 100vh;
      object-fit: contain;
    }

    .desc {
      color: #fff;
      display: inline-flex;
      width: 400px;
      height: 100vh;
    }
  }
</style>