<script>
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../../app.postcss';
	// Imports
	import { AppShell } from '@skeletonlabs/skeleton';
	import AppRail from '$lib/Components/AppRail.svelte';
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<AppRail />
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
</AppShell>
