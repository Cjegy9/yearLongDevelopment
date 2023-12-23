<script>
 export let readonlyvar = 'This is readonly';

 console.log({readonlyvar});
 $: {
  console.log({readonlyvar})
 }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={() => readonlyvar = 'not so read only now'}>Update the readonlyvar</button>
<p>{readonlyvar}</p>
