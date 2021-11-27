
<script lang="ts" context="module">
  export async function load({ fetch }) {
		const url = `https://db.lahs.club/cache/e7b1a8a9b0574274afc56ac73e513f32.json`;
		const res = await fetch(url);
		const ok = res.ok;
		const activities = (await res.json())
		const topLevelActivities = activities
			.filter((a: any) => a.Parent.name === "True")
			.sort((a: any, b: any) => a.Name[0].content.localeCompare(b.Name[0].content));
		const subActivities = activities
			.filter((a: any) => a.Parent.name !== "True");

		if (ok) return { props: {
			activities: topLevelActivities,
			subActivities: subActivities
		} };

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
  import Content from '$lib/Content.svelte';

	export let activities: any[];
	export let subActivities: any[];
</script>

<Content>
  <section class="container-wide activities">
    <h1>Activities</h1>
		<div>
			{#each activities as activity}
				<div class="activity">
					<h2>{activity.Name[0].content}</h2>
					<p>{activity.Description[0]?.content ?? ""}</p>
					<div class="flex-row flex-gap overflow">
						{#each activity.Media as media}
						{#if media.type === "external"}
						<div>
							<iframe src="https://www.youtube.com/embed/{media.url.split('/').pop()}" width="400px" height="300px" title="{media.name}" />
							<h4>{media.name}</h4>
						</div>
						{:else}
						<div>
							<img src="{media.url}" alt="{media.name}" title="{media.name}" />
						</div>
						{/if}
						{/each}
					</div>
					{#each activity.Relation as saID}
					<h3>{(subActivities.filter(s => s.id === saID.id))[0].Name[0].content}</h3>
					<div class="flex-row flex-gap overflow">
						{#each (subActivities.filter(s => s.id === saID.id))[0].Media as sMedia}
							<div>
								<img src="{sMedia.url}" alt="{sMedia.name}" title="{sMedia.name}" />
							</div>
						{/each}
					</div>
					{/each}
				</div>
			{/each}
		</div>
  </section>
</Content>

<style lang="scss">
	.overflow {
		max-width: 100%;
		overflow-x: auto;
		padding-bottom: 15px;

		img {
			max-width: 300px;
		}
	}
</style>