
<script lang="ts">
	import { onMount } from "svelte";

	let scrollContainer: any;
	onMount(() => {
		scrollContainer = document.querySelector(".app-global");
	});

	function scrollToggle() {
		if (scrollContainer.scrollLeft === 0) {
			scrollContainer.scrollBy(180, 0);
		} else {
			scrollContainer.scrollBy(-180, 0);
		}
	}
</script>

<button class="prompt" on:click="{scrollToggle}">
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
		<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
	</svg>
</button>

<style lang="scss">
	.prompt {
		background-color: #505a;
		border: none;
		border-radius: 50%;
		box-shadow: #505 1px 2px 3px;
		color: #fef;
		cursor: pointer;
		display: grid;
		place-items: center;
		width: 45px;
		height: 45px;
		position: absolute;
		top: 20px;
		right: -70px;
		z-index: 3;

		@media (min-width: 992px) {
			display: none;
		}
	}

	.prompt:active {
		background-color: #fdf;
		color: #505;
	}
</style>