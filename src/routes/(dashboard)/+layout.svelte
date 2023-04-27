<script>
	import { page } from '$app/stores';
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../../app.postcss';
	// Imports
	import { AppShell } from '@skeletonlabs/skeleton';
	import AppRail from '$lib/Components/AppRail.svelte';
	import NavBar from '$lib/Components/NavBar.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<NavBar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail pathname={$page.data.pathname} />
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
</AppShell>
