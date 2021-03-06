
<script lang="ts" context="module">
  export async function load({ params, fetch }) {
    // Convert URL shorthand to show data from Notion
    const meta = await fetch(`https://db.lahs.club/cache/761269d6997543f5a1b86c0bd17e9ef3.json`)
      .then((res: any) => res.json()) as any[];
    const selectedShow = meta.find(m => m.Short == params.show);

    // If page is unpublished, do not serve
    if (selectedShow.Enabled.name == "False")
      return { status: 401, error: new Error("You are unauthorized!") };
    // If page has bad formatting, do not serve
    if (selectedShow.Validity == false)
      return { status: 500, error: new Error("Invalid page settings!") };

    // Fetch show database
		const res = await fetch(`https://db.lahs.club/cache/${selectedShow.ID}.json`);
    const j = (await res.json())
      .sort((a, b) => {
        if (a["Art Class"].name == b["Art Class"].name)
          return (a["Student Name"] > b["Student Name"]) ? 1 : -1;
        else return (a["Art Class"].name > b["Art Class"].name) ? 1 : -1;
      });

		if (res.ok) return {
      props: {
        show: selectedShow.Short,
        title: selectedShow["Page Name"],
        id: parseInt(params.id),
        items: j,
        totalCount: j.length
      }
    };

		return {
			status: res.status,
			error: new Error(`Could not load image!`)
		};
	}
</script>

<script lang="ts">
  import { onDestroy } from 'svelte';
  export let show: string;
  export let title: string;

  export let id: number;
  export let totalCount: number;
  export let items = [];
  $: studentName = items[id]["Student Name"].match(/^(.*?)\(/)?.[1] || items[id]["Student Name"];
  $: artTitle = items[id]["Student Name"].match(/^(.*?)\((.*?)\)/)?.[2] || null;
  $: studentClass = items[id]["Art Class"].name;
  $: studentGrade = `${items[id]["Grade Level"].name}${["9", "10", "11", "12"].find(i => i === items[id]["Grade Level"].name) ? "th Grade" : ""}`;

  let autoplay = false;
  const int = setInterval(() => {
    if (autoplay) id = (id + 1) % totalCount;
  }, 4000);
  onDestroy(() => clearInterval(int));

  let isFS = false;
  function requestFullScreen() {
    const element: any = document.querySelector(".gallery-item");
    // Supports most browsers and their versions.
    var requestMethod =
      element.requestFullscreen ||
      element.webkitRequestFullscreen ||
      element.mozRequestFullScreen ||
      element.msRequestFullscreen;

    if (requestMethod && !isFS) {
      requestMethod.call(element);
      isFS = true;
    }
    else {
      document.exitFullscreen();
      isFS = false;
    }
  }
</script>

<section class="gallery">
  <div class="gallery-item">
    <object title="{items[id]["Student Name"]}'s Artwork">
      <img on:click="{()=>{id=(id+1)%totalCount}}" src="{items[id]["Artwork (File)"][0].url}" alt="">
    </object>
    <div class="desc flex-column">
      <h1><a href="/show/{show}">&lt; {title} Art Show</a></h1>
      <h2>{studentName}</h2>
      <p>{studentClass}<br>{studentGrade}</p>
      {#if artTitle}
      <br>
      <p><b>Artwork Title:</b></p>
      <em>{artTitle}</em>
      {/if}
      <span class="spacer"></span>
      <p class="caption">{id+1}/{totalCount}</p>
      <div class="controls flex-row justify-end">
        <button class:active="{isFS}" on:click="{requestFullScreen}" title="Fullscreen">F</button>
        <button class:active="{autoplay}" on:click="{()=>{autoplay=!autoplay}}" title="Autoplay">P</button>
        {#if !(id <= 0)}
          <button on:click="{()=>{id-=1}}" class="button" title="Back">&lt;</button>
        {/if}
        {#if !(id >= totalCount - 1)}
          <button on:click="{()=>{id+=1}}" class="button" title="Forward">&gt;</button>
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

    object {
      cursor: pointer;
      flex: 1 1;
      max-width: calc(100vw - 280px);
      max-height: 100vh;
      object-fit: contain;
    }

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      max-height: 100vh;
    }

    .desc {
      background-color: #111;
      border-top-left-radius: 15px;
      color: #fff;
      height: 100vh;
      width: 220px;
      padding: 0 30px;
      text-align: right;

      h1 a {
        color: #aaa;
        text-decoration: none;
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
      .controls button {
        background-color: #333;
        border: none;
        border-radius: 5px;
        color: #aaa;
        display: grid;
        place-items: center;
        font-family: inherit;
        font-weight: bold;
        font-size: 1.4rem;
        width: 30px;
        height: 30px;
        text-decoration: none;

        &:hover {
          background-color: #444;
        }

        &.active {
          border: 2px solid #aaa;
          color: #fff;
        }
      }
    }

    @media (max-width: 768px) {
      height: 100vh;
      flex-direction: column;

      object {
        max-height: calc(100vh - 300px);
        max-width: 100%;
      }

      .desc {
        box-sizing: border-box;
        height: 300px;
        width: 100%;
        font-size: 1rem;
      }
    }
  }
</style>