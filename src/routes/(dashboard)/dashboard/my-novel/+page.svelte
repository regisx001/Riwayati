<script lang="ts">
	import { page } from '$app/stores';
	import MyNovels from '$lib/Pages/Dashboard/MyNovels.svelte';
</script>

<MyNovels novels={$page.data.novels} />
