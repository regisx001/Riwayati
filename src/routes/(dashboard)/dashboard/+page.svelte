<script lang="ts">
	import { Selectedpage } from '$lib/Utils/stores';
	import MyNovels from '$lib/Pages/Dashboard/MyNovels.svelte';
	import Draft from '$lib/Pages/Dashboard/Draft.svelte';
	import NewNovel from '$lib/Pages/Dashboard/NewNovel.svelte';
	import Profile from '$lib/Pages/Dashboard/Profile.svelte';
	import { page } from '$app/stores';
</script>

<!-- <pre>
	{JSON.stringify($page.data, null, 2)}
</pre> -->

{#if $Selectedpage === 0}
	<Profile user={$page.data.user} />
{/if}

{#if $Selectedpage === 1}
	<NewNovel />
{/if}

{#if $Selectedpage === 2}
	<Draft />
{/if}

{#if $Selectedpage === 3}
	<MyNovels />
{/if}
