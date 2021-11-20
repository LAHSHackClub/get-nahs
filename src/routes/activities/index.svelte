
<script lang="ts" context="module">
  export async function load({ fetch }) {
		const url = `https://db.lahs.club/cache/c229212b24fa44a0baacc3cbb6804f92.json`;
		const res = await fetch(url);

		if (res.ok) return { props: { contacts: await res.json() } };

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
  import Content from '$lib/Content.svelte';
</script>

<Content>
  <section class="container-wide activities">
    <h1>NAHS Activities</h1>
  </section>
</Content>

<style lang="scss">
</style>