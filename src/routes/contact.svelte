
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
  import ContactCard from '../components/ContactCard.svelte';

  export let contacts: any[];
  const advisorContact = {
    "Email":{"email":"christine.an@mvla.net"},
    "Role":{"name":"Teacher Advisor"},
    "Name":"Christine An"
  }
</script>

<Content>
  <section class="container-wide contact">
    <h1>Club Contact</h1>
    <h2>Club Meetings</h2>
    <p>NAHS meets weekly on Fridays at the start of lunch in room 913. Typically, meetings will cover upcoming events, volunteer opportunities, and club activities - and is mandatory under LAHS x NAHS bylaws.</p>
    <h2>People of NAHS</h2>
    <h3>Club Advisor</h3>
    <ContactCard contact="{advisorContact}" />
    <h3>Club Members</h3>
    <div class="flex-row flex-wrap contacts">
      {#each contacts as contact}
        <ContactCard contact="{contact}" />
      {/each}
    </div>
  </section>
</Content>

<style lang="scss">
  .contact {
    padding-bottom: 15vh;
  }

  .contacts {
    column-gap: 30px;
    row-gap: 30px;
  }
</style>