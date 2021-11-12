
<script lang="ts" context="module">
  export async function load({ page, fetch }) {
		const url = `https://db.lahs.club/cache/814bc6c60d0a4e13bc3f8bf33c8a3117.json`;
		const res = await fetch(url);

		if (res.ok) return {
      props: {
        id: page.params.id,
        items: await res.json()
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
  export let items = [];
</script>

<section class="gallery">
  <div class="flex-smart gallery-item">
    <img src="{items[id]["Artwork (File)"].url}" alt="">
    <div>

    </div>
  </div>
</section>

<style lang="scss">
  .gallery {
    background-color: #000;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .gallery-item {
    width: 100%;

    img {
      display: block;
    }
  }
</style>