
<script lang="ts">
  export let contact: any;
</script>

<div class="contact-card" data-role="{contact.Role.name}">
  <h4>{contact.Name} · {contact.Role.name}</h4>
  {#if contact.Email.email}
  <p>{contact.Email.email}</p>
  {/if}
</div>

<style lang="scss">
  .contact-card {
    border-left: 5px solid #a0a;
    border-radius: 5px;
    box-shadow: 0 0 10px #0002;
    width: 300px;
    padding: 10px 20px;

    h4, p {
      font-size: 1.2em;
      margin: 5px;
    }
  }

  [data-role="Teacher Advisor"] {
    border-color: #faa;
  }

  :not([data-role="Member"]) {
    border-color: #fa6;
  }
</style>